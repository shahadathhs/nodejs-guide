
---

# Understanding Number Systems: Hexadecimal, Decimal, and Binary

Number systems are methods of representing numerical values. The most common systems used in computing and mathematics are:

- **Decimal (Base-10):** Uses ten digits (0–9). This is the standard system used in everyday life.
- **Binary (Base-2):** Uses two digits (0 and 1). This system is the foundation of digital computing.
- **Hexadecimal (Base-16):** Uses sixteen symbols (0–9 and A–F). This system is compact and is widely used in computing to represent binary data in a more human-friendly form.

---

## 1. Decimal (Base-10)

The decimal system uses ten digits (0 through 9). Each digit's position represents a power of 10. For example, the number 245 can be expressed as:

- **2** in the hundreds place: \(2 \times 10^2 = 200\)
- **4** in the tens place: \(4 \times 10^1 = 40\)
- **5** in the ones place: \(5 \times 10^0 = 5\)

**Sum:** \(200 + 40 + 5 = 245\)

---

## 2. Binary (Base-2)

The binary system uses two digits: 0 and 1. Each digit's position represents a power of 2. For example, the binary number `1011` represents:

- **1** in the \(2^3\) (8's) place: \(1 \times 8 = 8\)
- **0** in the \(2^2\) (4's) place: \(0 \times 4 = 0\)
- **1** in the \(2^1\) (2's) place: \(1 \times 2 = 2\)
- **1** in the \(2^0\) (1's) place: \(1 \times 1 = 1\)

**Sum:** \(8 + 0 + 2 + 1 = 11\) (in decimal)

---

## 3. Hexadecimal (Base-16)

The hexadecimal system uses sixteen symbols: 0–9 and A–F, where A represents 10, B represents 11, up to F representing 15. Each digit's position represents a power of 16. For example, the hexadecimal number `1F` represents:

- **1** in the \(16^1\) (16's) place: \(1 \times 16 = 16\)
- **F** (which is 15 in decimal) in the \(16^0\) (1's) place: \(15 \times 1 = 15\)

**Sum:** \(16 + 15 = 31\) (in decimal)

---

## 4. Comparison Table: First 16 Numbers

The following table compares the first 16 numbers (0 to 15) in decimal, binary, and hexadecimal:

| Decimal | Binary | Hexadecimal |
| ------- | ------ | ----------- |
| 0       | 0000   | 0           |
| 1       | 0001   | 1           |
| 2       | 0010   | 2           |
| 3       | 0011   | 3           |
| 4       | 0100   | 4           |
| 5       | 0101   | 5           |
| 6       | 0110   | 6           |
| 7       | 0111   | 7           |
| 8       | 1000   | 8           |
| 9       | 1001   | 9           |
| 10      | 1010   | A           |
| 11      | 1011   | B           |
| 12      | 1100   | C           |
| 13      | 1101   | D           |
| 14      | 1110   | E           |
| 15      | 1111   | F           |

---

## 5. Conversion Methods and Examples

### A. Decimal to Binary

**Method:**

1. Divide the decimal number by 2.
2. Record the remainder.
3. Continue dividing the quotient by 2 until it is 0.
4. The binary number is the sequence of remainders read in reverse order.

_Example:_ Convert decimal 13 to binary.

- \(13 \div 2 = 6\) remainder **1**
- \(6 \div 2 = 3\) remainder **0**
- \(3 \div 2 = 1\) remainder **1**
- \(1 \div 2 = 0\) remainder **1**

_Read in reverse:_ **1101**

### B. Binary to Decimal

**Method:**  
Multiply each binary digit by 2 raised to the power of its position index (starting from 0 at the right).

_Example:_ Convert binary `1101` to decimal.

- \(1 \times 2^3 = 8\)
- \(1 \times 2^2 = 4\)
- \(0 \times 2^1 = 0\)
- \(1 \times 2^0 = 1\)

**Sum:** \(8 + 4 + 0 + 1 = 13\)

### C. Decimal to Hexadecimal

**Method:**

1. Divide the decimal number by 16.
2. Record the remainder (if the remainder is greater than 9, convert it to its hexadecimal representation: 10 = A, 11 = B, etc.).
3. Continue dividing the quotient by 16 until it is 0.
4. The hexadecimal number is the sequence of remainders read in reverse order.

_Example:_ Convert decimal 254 to hexadecimal.

- \(254 \div 16 = 15\) remainder **14** (14 in hexadecimal is **E**)
- \(15 \div 16 = 0\) remainder **15** (15 in hexadecimal is **F**)

_Read in reverse:_ **FE**

### D. Hexadecimal to Decimal

**Method:**  
Multiply each hex digit by 16 raised to the power of its position index (starting from 0 at the right).

_Example:_ Convert hexadecimal `FE` to decimal.

- **E** is 14: \(14 \times 16^0 = 14\)
- **F** is 15: \(15 \times 16^1 = 240\)

**Sum:** \(240 + 14 = 254\)

### E. Hexadecimal to Binary

**Method:**  
Convert each hexadecimal digit to its 4-bit binary equivalent using a conversion table.

_Example:_ Convert hexadecimal `2A` to binary.

- **2**: `0010`
- **A** (10 in decimal): `1010`

**Combined binary:** `00101010`

### F. Binary to Hexadecimal

**Method:**  
Group the binary digits into sets of 4 (starting from the right) and convert each group to its hexadecimal equivalent.

_Example:_ Convert binary `00101010` to hexadecimal.

- Groups: `0010` and `1010`
- `0010` → **2**
- `1010` → **A**

**Hexadecimal result:** **2A**

---

## 6. Summary

- **Decimal (Base-10):** Uses digits 0–9. Each digit represents a power of 10.
- **Binary (Base-2):** Uses digits 0 and 1. Each digit represents a power of 2.
- **Hexadecimal (Base-16):** Uses digits 0–9 and letters A–F. Each digit represents a power of 16.
- **Conversion Techniques:**
  - **Decimal to Binary:** Repeated division by 2.
  - **Binary to Decimal:** Sum of powers of 2.
  - **Decimal to Hexadecimal:** Repeated division by 16.
  - **Hexadecimal to Decimal:** Sum of powers of 16.
  - **Hexadecimal to Binary:** Convert each hex digit using a 4-bit binary table.
  - **Binary to Hexadecimal:** Group binary digits into sets of 4 and convert.

---
