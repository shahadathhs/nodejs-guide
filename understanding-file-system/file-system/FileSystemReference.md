# File System Reference

## Table of Contents

1. [Node.js I/O Model](#1-nodejs-io-model)
2. [Callback vs. Promise APIs](#2-callback-vs-promise-apis)
3. [Synchronous vs. Asynchronous Methods](#3-synchronous-vs-asynchronous-methods)
4. [Core FS Methods](#4-core-fs-methods)
   1. [`fs.open()` / `fs.promises.open()`](#41-fsopen--fspromisesopen)
   2. [`fs.read()` / `fs.promises.read()`](#42-fsread--fspromisesread)
   3. [`fs.write()` / `fs.promises.write()`](#43-fswrite--fspromiseswrite)
   4. [`fs.readFile()` / `fs.promises.readFile()`](#44-fsreadfile--fspromisesreadfile)
   5. [`fs.writeFile()` / `fs.promises.writeFile()`](#45-fswritefile--fspromiseswritefile)
   6. [`fs.appendFile()` / `fs.promises.appendFile()`](#46-fsappendfile--fspromisesappendfile)
   7. [`fs.unlink()` / `fs.promises.unlink()`](#47-fsunlink--fspromisesunlink)
   8. [`fs.rename()` / `fs.promises.rename()`](#48-fsrename--fspromisesrename)
   9. [`fs.stat()` / `fs.promises.stat()`](#49-fsstat--fspromisesstat)
   10. [`fs.watch()`](#410-fswatch)
   11. **Stream APIs**: `fs.createReadStream()`, `fs.createWriteStream()`
5. [File Open Flags](#5-file-open-flags)
6. [Working with File Descriptors](#6-working-with-file-descriptors)
7. [Watching & Debouncing File Changes](#7-watching--debouncing-file-changes)
8. [Error Codes & Handling](#8-error-codes--handling)
9. [Putting It All Together: Sample Utilities](#9-putting-it-all-together-sample-utilities)
10. [Best Practices & Pitfalls](#10-best-practices--pitfalls)

---

## 1. Node.js I/O Model

- **Non‑blocking, event‑driven**

  - I/O calls (disk, network) happen off the main event loop.
  - JavaScript thread schedules callback or resolves Promise when the operation completes.

- **Single‑threaded user code**
  - Your code remains simple (no race‑conditions, shared‑memory).
  - Under the hood, libuv manages thread‑pool for FS ops.

---

## 2. Callback vs. Promise APIs

Node’s built‑in `fs` module exposes **callback‑style** methods (e.g. `fs.readFile(path, cb)`), and a `fs/promises` namespace for **Promise/async‑await**:

```js
// Callback:
const fs = require("fs");
fs.readFile("foo.txt", "utf8", (err, data) => {
  /* … */
});

// Promise:
import { readFile } from "fs/promises";
async function load() {
  const data = await readFile("foo.txt", "utf8");
}
```

—Promises lead to cleaner `async/await` code, fewer nested callbacks.

---

## 3. Synchronous vs. Asynchronous Methods

Every async method (callback or Promise) often has a sync counterpart:

| Async Promise             | Async Callback             | Sync                 |
| ------------------------- | -------------------------- | -------------------- |
| `fs.promises.readFile()`  | `fs.readFile(path, cb)`    | `fs.readFileSync()`  |
| `fs.promises.writeFile()` | `fs.writeFile(path, data)` | `fs.writeFileSync()` |
| `fs.promises.unlink()`    | `fs.unlink(path, cb)`      | `fs.unlinkSync()`    |

**Avoid sync** methods in a server‑context—they block the event loop. Sync calls can be fine for quick scripts or CLI tools.

---

## 4. Core FS Methods

### 4.1 `fs.open()` / `fs.promises.open()`

- Opens (and optionally creates/truncates) a file, returns a **file handle**.
- Usage:

  ```js
  import { open } from "fs/promises";

  // flags: 'r', 'w', 'a', plus modifiers
  const fh = await open("./data.txt", "r");
  // … use fh.read(), fh.write() …
  await fh.close();
  ```

### 4.2 `fs.read()` / `fs.promises.read()`

- Low‑level read from an open file descriptor (FD).
- You allocate a Buffer, then read into it:

  ```js
  const buffer = Buffer.alloc(1024);
  const { bytesRead } = await fh.read(
    buffer,
    0,
    buffer.length,
    /* position= */ 0
  );
  console.log(buffer.toString("utf8", 0, bytesRead));
  ```

### 4.3 `fs.write()` / `fs.promises.write()`

- Low‑level write to an FD at current pointer (or specified offset).
- Common when you opened with flags `'r+'`, `'w'`, or `'a'`:

  ```js
  await fh.write("Hello, World!");
  ```

### 4.4 `fs.readFile()` / `fs.promises.readFile()`

- High‑level: read **entire** file into memory in one call.

  ```js
  import { readFile } from "fs/promises";
  const contents = await readFile("notes.txt", "utf8");
  ```

### 4.5 `fs.writeFile()` / `fs.promises.writeFile()`

- Write or overwrite whole file. Accepts `options.encoding` and `options.flag`.

  ```js
  // Truncate or create:
  await writeFile("output.txt", "Some text", { flag: "w", encoding: "utf8" });
  ```

### 4.6 `fs.appendFile()` / `fs.promises.appendFile()`

- Append data in one step. Under the hood, uses flag `'a'`.
- Optionally pass `{ flag: 'a+' }` to allow reading too.

  ```js
  import { appendFile } from "fs/promises";
  await appendFile("log.txt", "New entry\n", { encoding: "utf8" });
  ```

### 4.7 `fs.unlink()` / `fs.promises.unlink()`

- Delete a file.

  ```js
  import { unlink } from "fs/promises";
  await unlink("old.txt");
  ```

### 4.8 `fs.rename()` / `fs.promises.rename()`

- Rename or move a file.

  ```js
  import { rename } from "fs/promises";
  await rename("temp.txt", "permanent.txt");
  ```

### 4.9 `fs.stat()` / `fs.promises.stat()`

- Get metadata (size, timestamps, file vs. dir).

  ```js
  const stats = await fs.promises.stat("file.txt");
  console.log(stats.size, stats.mtime);
  ```

### 4.10 `fs.watch()`

- Watch file or directory for changes (emits events).

  ```js
  import { watch } from "fs";
  const watcher = watch("command.txt", (eventType, filename) => {
    if (eventType === "change") {
      // file was modified
    }
  });
  ```

### 4.11 Stream APIs

- **Read Streams**: `fs.createReadStream(path, options)`
- **Write Streams**: `fs.createWriteStream(path, options)`

  ```js
  import { createReadStream, createWriteStream } from "fs";
  const inStream = createReadStream("big.bin");
  const outStream = createWriteStream("copy.bin");
  inStream.pipe(outStream);
  ```

Streams let you handle massive files without slurping entire content into memory.

---

## 5. File Open Flags

When opening or writing, choose the right flag:

| Flag   | Description                                                      |
| ------ | ---------------------------------------------------------------- |
| `'r'`  | Read only, error if file doesn’t exist                           |
| `'r+'` | Read & write, error if not exist                                 |
| `'w'`  | Write only, create if missing, truncate to zero length if exists |
| `'w+'` | Read & write, create if missing, truncate if exists              |
| `'a'`  | Write only, append—pointer at EOF, create if missing             |
| `'a+'` | Read & write, append, create if missing                          |
| `'ax'` | Like `'a'`, but error if file exists (exclusive)                 |
| `'wx'` | Like `'w'`, but error if file exists (exclusive)                 |

---

## 6. Working with File Descriptors

- **`open()`** returns a handle with a numeric descriptor under the hood.
- You can perform multiple reads/writes before closing.
- Always call `.close()` (or let high‑level methods handle it).

---

## 7. Watching & Debouncing File Changes

Editors often fire multiple “change” events on save. Strategies:

1. **Content guard**: Store last content and skip if identical.
2. **Debounce timer**: Wait e.g. 50 ms after first change before reacting.

```js
let last = null;
watch("cmd.txt", (_, __) => {
  setTimeout(async () => {
    const txt = await readFile("cmd.txt", "utf8");
    if (txt === last) return;
    last = txt;
    // … handle new command …
  }, 50);
});
```

---

## 8. Error Codes & Handling

Common `err.code` values:

| Code     | Meaning                              |
| -------- | ------------------------------------ |
| `ENOENT` | No such file or directory            |
| `EEXIST` | File already exists (exclusive flag) |
| `EISDIR` | Expected file but got directory      |
| `EPERM`  | Permission denied                    |

Always catch errors, inspect `err.code`, and respond gracefully.

---

## 9. Putting It All Together: Sample Utilities

```js
import {
  writeFile,
  appendFile,
  unlink,
  rename,
  readFile,
  stat,
} from "fs/promises";
import { watch, createReadStream, createWriteStream } from "fs";

let lastAppended = null;

// Create (exclusive)
async function createFile(path) {
  try {
    await writeFile(path, "", { flag: "wx" });
    console.log("✔ Created:", path);
  } catch (e) {
    if (e.code === "EEXIST") console.log("ℹ Already exists:", path);
    else throw e;
  }
}

// Append
async function appendToFile(path, content) {
  if (content === lastAppended) return;
  await appendFile(path, content, "utf8");
  lastAppended = content;
  console.log("✔ Appended to:", path);
}

// And so on for deleteFile, renameFile…

// Stream copy example:
function copyFile(src, dest) {
  return new Promise((resolve, reject) => {
    const rs = createReadStream(src);
    const ws = createWriteStream(dest);
    rs.pipe(ws).on("finish", resolve).on("error", reject);
  });
}
```

---

## 10. Best Practices & Pitfalls

- **Prefer Promise APIs** over callbacks for clarity.
- **Avoid blocking** sync methods in production servers.
- **Always close** file handles or use high‑level helpers.
- **Use correct flags** (`wx`/`ax`) to prevent unintended overwrites.
- **Debounce watchers** to handle rapid change events.
- **Leverage streams** for large files or piping data.
- **Handle errors by `err.code`**—don’t leak stack traces to users.

---
