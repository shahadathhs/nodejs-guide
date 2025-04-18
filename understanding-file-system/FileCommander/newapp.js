const { promises: fs } = require("fs");
const { watch } = require("fs");
const path = require("path");

// Command keywords\ nconst CREATE = 'create a file';
const DELETE = "delete the file";
const RENAME = "rename the file";
const APPEND = "add to the file";

// State to prevent duplicate appends
let lastAppended = null;

// 1) Create (fail if exists)
async function createFile(filePath) {
  try {
    await fs.writeFile(filePath, "", { flag: "wx", encoding: "utf8" });
    console.log(`✔ File created: ${filePath}`);
  } catch (err) {
    if (err.code === "EEXIST") {
      console.log(`ℹ File already exists: ${filePath}`);
    } else {
      console.error(`✖ Error creating file "${filePath}":`, err);
    }
  }
}

// 2) Delete
async function deleteFile(filePath) {
  try {
    await fs.unlink(filePath);
    console.log(`✔ File deleted: ${filePath}`);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log(`ℹ No file to delete at: ${filePath}`);
    } else {
      console.error(`✖ Error deleting file "${filePath}":`, err);
    }
  }
}

// 3) Rename
async function renameFile(oldPath, newPath) {
  try {
    await fs.rename(oldPath, newPath);
    console.log(`✔ File renamed: ${oldPath} → ${newPath}`);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log(`ℹ Cannot rename, path not found: ${oldPath}`);
    } else {
      console.error(`✖ Error renaming file "${oldPath}" → "${newPath}":`, err);
    }
  }
}

// 4) Append
async function appendToFile(filePath, content) {
  if (content === lastAppended) return;
  try {
    await fs.appendFile(filePath, content, "utf8");
    console.log(`✔ Appended to file: ${filePath}`);
    lastAppended = content;
  } catch (err) {
    console.error(`✖ Error appending to "${filePath}":`, err);
  }
}

// Watch and dispatch commands from command.txt
(async () => {
  const COMMAND_FILE = path.resolve(__dirname, "command.txt");

  // Initial watcher setup
  watch(COMMAND_FILE, async (eventType) => {
    if (eventType !== "change") return;

    try {
      const raw = await fs.readFile(COMMAND_FILE, "utf8");
      const cmd = raw.trim();

      // CREATE
      if (cmd.startsWith(CREATE)) {
        const p = cmd.slice(CREATE.length).trim();
        await createFile(p);
      }
      // DELETE
      else if (cmd.startsWith(DELETE)) {
        const p = cmd.slice(DELETE.length).trim();
        await deleteFile(p);
      }
      // RENAME
      else if (cmd.startsWith(RENAME) && cmd.includes(" to ")) {
        const [from, to] = cmd
          .slice(RENAME.length)
          .split(" to ")
          .map((s) => s.trim());
        await renameFile(from, to);
      }
      // APPEND
      else if (cmd.startsWith(APPEND) && cmd.includes(" this content: ")) {
        const [p, content] = cmd
          .slice(APPEND.length)
          .split(" this content: ")
          .map((s) => s.trim());
        await appendToFile(p, content);
      } else {
        console.log(`⚠ Unrecognized command: "${cmd}"`);
      }
    } catch (err) {
      console.error("✖ Failed to handle command:", err);
    }
  });

  console.log("Watching commands in command.txt...");
})();
