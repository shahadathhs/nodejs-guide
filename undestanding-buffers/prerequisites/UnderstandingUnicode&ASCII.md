# Understanding Unicode & ASCII

Unicode and ASCII are character encoding standards used to represent text in computers and digital systems. While ASCII is an older standard limited to 128 characters, Unicode is a modern and extensive system that can represent characters from almost every writing system in the world.

---

## 1. ASCII (American Standard Code for Information Interchange)

**Overview:**

- **Scope:** ASCII defines 128 characters (0–127), including control characters (such as newline and tab) and printable characters (letters, digits, punctuation, etc.).
- **Representation:** Each ASCII character is represented by a 7-bit binary number. In practice, these values are often displayed in 8 bits (one extra leading 0).
- **Usage:** Originally used in early computers and remains foundational in many systems. Unicode incorporates the ASCII set as its first 128 characters.

**Example Conversions:**

- The character **A** is represented as:
  - **Decimal:** 65
  - **Hexadecimal:** 41
  - **Binary:** 01000001
  - **Octal:** 101

---

## 2. Unicode

**Overview:**

- **Scope:** Unicode is a comprehensive standard that assigns a unique code point to every character in almost all of the world's writing systems. Code points are typically written in the format `U+XXXX` (e.g., `U+0041` for **A**).
- **Encoding Forms:** Unicode can be implemented using different encoding forms, such as UTF-8, UTF-16, and UTF-32. UTF-8 is the most common on the web.
- **Backward Compatibility:** The first 128 Unicode code points are identical to the ASCII characters, ensuring backward compatibility.

**Example:**

- The Unicode code point for **A** is `U+0041`, and when encoded in UTF-8 it is stored as a single byte: `0x41`.

---

## 3. Conversion Between Representations

Understanding the conversion between binary, decimal, octal, and hexadecimal is essential when working with character encodings:

- **Binary:** A number represented in base-2, using only 0 and 1.
- **Decimal:** A number represented in base-10, using digits 0–9.
- **Octal:** A number represented in base-8, using digits 0–7.
- **Hexadecimal:** A number represented in base-16, using digits 0–9 and letters A–F.

For any character (or number), you can convert its code point between these number systems using standard arithmetic methods such as repeated division (for conversion from decimal to another base) or by interpreting bit patterns.

---

## 4. Comparison Table: Comparing all 128 ASCII codes (0–127) in decimal, octal, hexadecimal, and binary

---

| Dec | Oct | Hex | Binary   | Character/Description      |
| --- | --- | --- | -------- | -------------------------- |
| 0   | 000 | 00  | 00000000 | NUL (Null)                 |
| 1   | 001 | 01  | 00000001 | SOH (Start of Heading)     |
| 2   | 002 | 02  | 00000010 | STX (Start of Text)        |
| 3   | 003 | 03  | 00000011 | ETX (End of Text)          |
| 4   | 004 | 04  | 00000100 | EOT (End of Transmission)  |
| 5   | 005 | 05  | 00000101 | ENQ (Enquiry)              |
| 6   | 006 | 06  | 00000110 | ACK (Acknowledge)          |
| 7   | 007 | 07  | 00000111 | BEL (Bell)                 |
| 8   | 010 | 08  | 00001000 | BS (Backspace)             |
| 9   | 011 | 09  | 00001001 | HT (Horizontal Tab)        |
| 10  | 012 | 0A  | 00001010 | LF (Line Feed)             |
| 11  | 013 | 0B  | 00001011 | VT (Vertical Tab)          |
| 12  | 014 | 0C  | 00001100 | FF (Form Feed)             |
| 13  | 015 | 0D  | 00001101 | CR (Carriage Return)       |
| 14  | 016 | 0E  | 00001110 | SO (Shift Out)             |
| 15  | 017 | 0F  | 00001111 | SI (Shift In)              |
| 16  | 020 | 10  | 00010000 | DLE (Data Link Escape)     |
| 17  | 021 | 11  | 00010001 | DC1 (Device Control 1)     |
| 18  | 022 | 12  | 00010010 | DC2 (Device Control 2)     |
| 19  | 023 | 13  | 00010011 | DC3 (Device Control 3)     |
| 20  | 024 | 14  | 00010100 | DC4 (Device Control 4)     |
| 21  | 025 | 15  | 00010101 | NAK (Negative Acknowledge) |
| 22  | 026 | 16  | 00010110 | SYN (Synchronous Idle)     |
| 23  | 027 | 17  | 00010111 | ETB (End of Trans. Block)  |
| 24  | 030 | 18  | 00011000 | CAN (Cancel)               |
| 25  | 031 | 19  | 00011001 | EM (End of Medium)         |
| 26  | 032 | 1A  | 00011010 | SUB (Substitute)           |
| 27  | 033 | 1B  | 00011011 | ESC (Escape)               |
| 28  | 034 | 1C  | 00011100 | FS (File Separator)        |
| 29  | 035 | 1D  | 00011101 | GS (Group Separator)       |
| 30  | 036 | 1E  | 00011110 | RS (Record Separator)      |
| 31  | 037 | 1F  | 00011111 | US (Unit Separator)        |
| 32  | 040 | 20  | 00100000 | Space                      |
| 33  | 041 | 21  | 00100001 | !                          |
| 34  | 042 | 22  | 00100010 | "                          |
| 35  | 043 | 23  | 00100011 | #                          |
| 36  | 044 | 24  | 00100100 | $                          |
| 37  | 045 | 25  | 00100101 | %                          |
| 38  | 046 | 26  | 00100110 | &                          |
| 39  | 047 | 27  | 00100111 | '                          |
| 40  | 050 | 28  | 00101000 | (                          |
| 41  | 051 | 29  | 00101001 | )                          |
| 42  | 052 | 2A  | 00101010 | \*                         |
| 43  | 053 | 2B  | 00101011 | +                          |
| 44  | 054 | 2C  | 00101100 | ,                          |
| 45  | 055 | 2D  | 00101101 | -                          |
| 46  | 056 | 2E  | 00101110 | .                          |
| 47  | 057 | 2F  | 00101111 | /                          |
| 48  | 060 | 30  | 00110000 | 0                          |
| 49  | 061 | 31  | 00110001 | 1                          |
| 50  | 062 | 32  | 00110010 | 2                          |
| 51  | 063 | 33  | 00110011 | 3                          |
| 52  | 064 | 34  | 00110100 | 4                          |
| 53  | 065 | 35  | 00110101 | 5                          |
| 54  | 066 | 36  | 00110110 | 6                          |
| 55  | 067 | 37  | 00110111 | 7                          |
| 56  | 070 | 38  | 00111000 | 8                          |
| 57  | 071 | 39  | 00111001 | 9                          |
| 58  | 072 | 3A  | 00111010 | :                          |
| 59  | 073 | 3B  | 00111011 | ;                          |
| 60  | 074 | 3C  | 00111100 | <                          |
| 61  | 075 | 3D  | 00111101 | =                          |
| 62  | 076 | 3E  | 00111110 | >                          |
| 63  | 077 | 3F  | 00111111 | ?                          |
| 64  | 100 | 40  | 01000000 | @                          |
| 65  | 101 | 41  | 01000001 | A                          |
| 66  | 102 | 42  | 01000010 | B                          |
| 67  | 103 | 43  | 01000011 | C                          |
| 68  | 104 | 44  | 01000100 | D                          |
| 69  | 105 | 45  | 01000101 | E                          |
| 70  | 106 | 46  | 01000110 | F                          |
| 71  | 107 | 47  | 01000111 | G                          |
| 72  | 110 | 48  | 01001000 | H                          |
| 73  | 111 | 49  | 01001001 | I                          |
| 74  | 112 | 4A  | 01001010 | J                          |
| 75  | 113 | 4B  | 01001011 | K                          |
| 76  | 114 | 4C  | 01001100 | L                          |
| 77  | 115 | 4D  | 01001101 | M                          |
| 78  | 116 | 4E  | 01001110 | N                          |
| 79  | 117 | 4F  | 01001111 | O                          |
| 80  | 120 | 50  | 01010000 | P                          |
| 81  | 121 | 51  | 01010001 | Q                          |
| 82  | 122 | 52  | 01010010 | R                          |
| 83  | 123 | 53  | 01010011 | S                          |
| 84  | 124 | 54  | 01010100 | T                          |
| 85  | 125 | 55  | 01010101 | U                          |
| 86  | 126 | 56  | 01010110 | V                          |
| 87  | 127 | 57  | 01010111 | W                          |
| 88  | 130 | 58  | 01011000 | X                          |
| 89  | 131 | 59  | 01011001 | Y                          |
| 90  | 132 | 5A  | 01011010 | Z                          |
| 91  | 133 | 5B  | 01011011 | [                          |
| 92  | 134 | 5C  | 01011100 | Backslash (\\)             |
| 93  | 135 | 5D  | 01011101 | ]                          |
| 94  | 136 | 5E  | 01011110 | ^                          |
| 95  | 137 | 5F  | 01011111 | \_                         |
| 96  | 140 | 60  | 01100000 | `                          |
| 97  | 141 | 61  | 01100001 | a                          |
| 98  | 142 | 62  | 01100010 | b                          |
| 99  | 143 | 63  | 01100011 | c                          |
| 100 | 144 | 64  | 01100100 | d                          |
| 101 | 145 | 65  | 01100101 | e                          |
| 102 | 146 | 66  | 01100110 | f                          |
| 103 | 147 | 67  | 01100111 | g                          |
| 104 | 150 | 68  | 01101000 | h                          |
| 105 | 151 | 69  | 01101001 | i                          |
| 106 | 152 | 6A  | 01101010 | j                          |
| 107 | 153 | 6B  | 01101011 | k                          |
| 108 | 154 | 6C  | 01101100 | l                          |
| 109 | 155 | 6D  | 01101101 | m                          |
| 110 | 156 | 6E  | 01101110 | n                          |
| 111 | 157 | 6F  | 01101111 | o                          |
| 112 | 160 | 70  | 01110000 | p                          |
| 113 | 161 | 71  | 01110001 | q                          |
| 114 | 162 | 72  | 01110010 | r                          |
| 115 | 163 | 73  | 01110011 | s                          |
| 116 | 164 | 74  | 01110100 | t                          |
| 117 | 165 | 75  | 01110101 | u                          |
| 118 | 166 | 76  | 01110110 | v                          |
| 119 | 167 | 77  | 01110111 | w                          |
| 120 | 170 | 78  | 01111000 | x                          |
| 121 | 171 | 79  | 01111001 | y                          |
| 122 | 172 | 7A  | 01111010 | z                          |
| 123 | 173 | 7B  | 01111011 | {                          |
| 124 | 174 | 7C  | 01111100 | \|                         |
| 125 | 175 | 7D  | 01111101 | }                          |
| 126 | 176 | 7E  | 01111110 | ~                          |
| 127 | 177 | 7F  | 01111111 | DEL (Delete)               |

---

_Note:_

- ASCII codes 0–31 (and 127) are generally non-printable control characters.
- The descriptions provided in parentheses indicate their typical usage or name.

---

## 5. Summary

- **ASCII:**

  - An older character encoding standard using 7 bits for 128 characters.
  - Includes control characters and printable characters.
  - Forms the basis for Unicode's first 128 code points.

- **Unicode:**

  - A universal character encoding standard that encompasses virtually every character in all the writing systems.
  - Uses code points written as `U+XXXX` and supports various encoding forms (UTF-8, UTF-16, etc.).
  - Backward compatible with ASCII.

- **Conversion:**
  - **Binary, Decimal, Octal, Hexadecimal:**
    - These numeral systems are used to represent numbers in different bases.
    - Conversion between them can be accomplished using arithmetic methods such as division and remainder (for converting from decimal) or bit grouping (for converting binary to hexadecimal).

---
