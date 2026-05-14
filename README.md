# Learn Playwright Batch 2X

A structured JavaScript and Playwright learning repository covering fundamentals from basics to advanced concepts.

---

## Folder Structure

```
LEARNPLAYWRIGHTBATCH2X/
├── chapter_01_Basics/
│   ├── 01_Basics.js
│   ├── 02_basics.js
│   ├── 03_JS_Verify_Setup.js
│   └── 04_basic.js
│
├── Chapter_02_Javascript_Concepts/
│   └── 05_JS_Basics.js
│
└── chapter_03_identifier/
    ├── 06_Identifiers_rules.js
    ├── 07_Identifiers_Part2.js
    └── 08_Comments.js
```

---

## Topics Covered

### Chapter 01 - Basics
- JavaScript environment setup and verification
- Basic JavaScript syntax and fundamentals

### Chapter 02 - JavaScript Concepts
- Variables using `var`
- Console output with `console.log()`
- Reassigning variable values

### Chapter 03 - Identifiers
- **Identifier Rules** — Valid/invalid naming rules in JavaScript
- **Naming Conventions** — camelCase, PascalCase, snake_case, UPPER_SNAKE_CASE, kebab-case
- **Comments** — Single-line and multi-line comments in JavaScript
- **VS Code Shortcuts** — Windows and Mac keyboard shortcuts reference

---

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [VS Code](https://code.visualstudio.com/) editor
- Basic understanding of programming concepts

---

## How to Run

```bash
node <filename>.js
```

Example:
```bash
node chapter_01_Basics/01_Basics.js
```

---

## VS Code Keyboard Shortcuts

### Windows Shortcuts

#### General
| Shortcut | Description |
|----------|-------------|
| `Ctrl + Shift + P` | Command Palette |
| `Ctrl + P` | Quick Open / Go to File |
| `Ctrl + Shift + N` | New Window |
| `Ctrl + Shift + W` | Close Window |
| `Ctrl + ,` | Open Settings |
| `Ctrl + K Ctrl + S` | Open Keyboard Shortcuts |

#### Editing
| Shortcut | Description |
|----------|-------------|
| `Ctrl + X` | Cut line (no selection needed) |
| `Ctrl + C` | Copy line (no selection needed) |
| `Ctrl + V` | Paste |
| `Ctrl + Z` | Undo |
| `Ctrl + Y` | Redo |
| `Ctrl + D` | Select next occurrence of word |
| `Ctrl + A` | Select all |
| `Alt + Up / Down` | Move line up / down |
| `Shift + Alt + Up / Down` | Copy line up / down |
| `Ctrl + Shift + K` | Delete line |
| `Ctrl + Enter` | Insert line below |
| `Ctrl + Shift + Enter` | Insert line above |
| `Ctrl + ]` | Indent line |
| `Ctrl + [` | Outdent line |
| `Ctrl + /` | Toggle line comment |
| `Shift + Alt + A` | Toggle block comment |
| `Ctrl + F2` | Select all occurrences of word |
| `Shift + Alt + F` | Format document |
| `Ctrl + K Ctrl + F` | Format selection |

#### Navigation
| Shortcut | Description |
|----------|-------------|
| `Ctrl + G` | Go to line number |
| `Ctrl + Home` | Go to beginning of file |
| `Ctrl + End` | Go to end of file |
| `Ctrl + Left / Right` | Move word by word |
| `Ctrl + Tab` | Switch between open files |
| `Alt + Left / Right` | Navigate back / forward |
| `Ctrl + Shift + O` | Go to symbol in file |
| `F12` | Go to definition |
| `Alt + F12` | Peek definition |
| `Shift + F12` | Show all references |
| `Ctrl + T` | Go to symbol in workspace |

#### Search & Replace
| Shortcut | Description |
|----------|-------------|
| `Ctrl + F` | Find |
| `Ctrl + H` | Replace |
| `Ctrl + Shift + F` | Find in all files |
| `Ctrl + Shift + H` | Replace in all files |
| `F3` | Find next |
| `Shift + F3` | Find previous |
| `Alt + Enter` | Select all occurrences of find match |

#### Multi-cursor & Selection
| Shortcut | Description |
|----------|-------------|
| `Alt + Click` | Add cursor at position |
| `Ctrl + Alt + Up / Down` | Add cursor above / below |
| `Shift + Alt + drag` | Column (box) selection |
| `Ctrl + L` | Select entire line |
| `Shift + Home / End` | Select to beginning / end of line |
| `Ctrl + Shift + Home / End` | Select to beginning / end of file |

#### File Management
| Shortcut | Description |
|----------|-------------|
| `Ctrl + N` | New file |
| `Ctrl + O` | Open file |
| `Ctrl + S` | Save |
| `Ctrl + Shift + S` | Save as |
| `Ctrl + K S` | Save all |
| `Ctrl + W` | Close editor tab |
| `Ctrl + Shift + T` | Reopen closed editor |
| `Ctrl + K Ctrl + W` | Close all editors |

#### View & Panel
| Shortcut | Description |
|----------|-------------|
| `Ctrl + B` | Toggle sidebar |
| `Ctrl + J` | Toggle bottom panel |
| `Ctrl + \` | Split editor |
| `Ctrl + 1 / 2 / 3` | Focus editor group 1 / 2 / 3 |
| `Ctrl + Shift + E` | Explorer view |
| `Ctrl + Shift + F` | Search view |
| `Ctrl + Shift + G` | Source control view |
| `Ctrl + Shift + D` | Debug view |
| `Ctrl + Shift + X` | Extensions view |
| `Ctrl + \`` | Open integrated terminal |
| `Ctrl + Shift + \`` | New terminal |
| `Ctrl + = ` | Zoom in |
| `Ctrl + -` | Zoom out |
| `Ctrl + 0` | Reset zoom |

---

### Mac Shortcuts

#### General
| Shortcut | Description |
|----------|-------------|
| `Cmd + Shift + P` | Command Palette |
| `Cmd + P` | Quick Open / Go to File |
| `Cmd + Shift + N` | New Window |
| `Cmd + Shift + W` | Close Window |
| `Cmd + ,` | Open Settings |
| `Cmd + K Cmd + S` | Open Keyboard Shortcuts |

#### Editing
| Shortcut | Description |
|----------|-------------|
| `Cmd + X` | Cut line (no selection needed) |
| `Cmd + C` | Copy line (no selection needed) |
| `Cmd + V` | Paste |
| `Cmd + Z` | Undo |
| `Cmd + Shift + Z` | Redo |
| `Cmd + D` | Select next occurrence of word |
| `Cmd + A` | Select all |
| `Option + Up / Down` | Move line up / down |
| `Shift + Option + Up / Down` | Copy line up / down |
| `Cmd + Shift + K` | Delete line |
| `Cmd + Enter` | Insert line below |
| `Cmd + Shift + Enter` | Insert line above |
| `Cmd + ]` | Indent line |
| `Cmd + [` | Outdent line |
| `Cmd + /` | Toggle line comment |
| `Shift + Option + A` | Toggle block comment |
| `Cmd + F2` | Select all occurrences of word |
| `Shift + Option + F` | Format document |
| `Cmd + K Cmd + F` | Format selection |

#### Navigation
| Shortcut | Description |
|----------|-------------|
| `Ctrl + G` | Go to line number |
| `Cmd + Home` | Go to beginning of file |
| `Cmd + End` | Go to end of file |
| `Option + Left / Right` | Move word by word |
| `Ctrl + Tab` | Switch between open files |
| `Ctrl + - / Ctrl + Shift + -` | Navigate back / forward |
| `Cmd + Shift + O` | Go to symbol in file |
| `F12` | Go to definition |
| `Option + F12` | Peek definition |
| `Shift + F12` | Show all references |
| `Cmd + T` | Go to symbol in workspace |

#### Search & Replace
| Shortcut | Description |
|----------|-------------|
| `Cmd + F` | Find |
| `Cmd + H` | Replace |
| `Cmd + Shift + F` | Find in all files |
| `Cmd + Shift + H` | Replace in all files |
| `Cmd + G` | Find next |
| `Cmd + Shift + G` | Find previous |
| `Option + Enter` | Select all occurrences of find match |

#### Multi-cursor & Selection
| Shortcut | Description |
|----------|-------------|
| `Option + Click` | Add cursor at position |
| `Cmd + Option + Up / Down` | Add cursor above / below |
| `Shift + Option + drag` | Column (box) selection |
| `Cmd + L` | Select entire line |
| `Shift + Home / End` | Select to beginning / end of line |
| `Cmd + Shift + Home / End` | Select to beginning / end of file |

#### File Management
| Shortcut | Description |
|----------|-------------|
| `Cmd + N` | New file |
| `Cmd + O` | Open file |
| `Cmd + S` | Save |
| `Cmd + Shift + S` | Save as |
| `Cmd + Option + S` | Save all |
| `Cmd + W` | Close editor tab |
| `Cmd + Shift + T` | Reopen closed editor |
| `Cmd + K Cmd + W` | Close all editors |

#### View & Panel
| Shortcut | Description |
|----------|-------------|
| `Cmd + B` | Toggle sidebar |
| `Cmd + J` | Toggle bottom panel |
| `Cmd + \` | Split editor |
| `Cmd + 1 / 2 / 3` | Focus editor group 1 / 2 / 3 |
| `Cmd + Shift + E` | Explorer view |
| `Cmd + Shift + F` | Search view |
| `Ctrl + Shift + G` | Source control view |
| `Cmd + Shift + D` | Debug view |
| `Cmd + Shift + X` | Extensions view |
| `Ctrl + \`` | Open integrated terminal |
| `Ctrl + Shift + \`` | New terminal |
| `Cmd + =` | Zoom in |
| `Cmd + -` | Zoom out |
| `Cmd + 0` | Reset zoom |

---

### Windows & Mac Combined Reference

#### General
| Action | Windows | Mac |
|--------|---------|-----|
| Command Palette | `Ctrl + Shift + P` | `Cmd + Shift + P` |
| Quick Open / Go to File | `Ctrl + P` | `Cmd + P` |
| New Window | `Ctrl + Shift + N` | `Cmd + Shift + N` |
| Close Window | `Ctrl + Shift + W` | `Cmd + Shift + W` |
| Open Settings | `Ctrl + ,` | `Cmd + ,` |
| Open Keyboard Shortcuts | `Ctrl + K Ctrl + S` | `Cmd + K Cmd + S` |

#### Editing
| Action | Windows | Mac |
|--------|---------|-----|
| Cut line | `Ctrl + X` | `Cmd + X` |
| Copy line | `Ctrl + C` | `Cmd + C` |
| Paste | `Ctrl + V` | `Cmd + V` |
| Undo | `Ctrl + Z` | `Cmd + Z` |
| Redo | `Ctrl + Y` | `Cmd + Shift + Z` |
| Select next occurrence | `Ctrl + D` | `Cmd + D` |
| Select all | `Ctrl + A` | `Cmd + A` |
| Move line up / down | `Alt + Up / Down` | `Option + Up / Down` |
| Copy line up / down | `Shift + Alt + Up / Down` | `Shift + Option + Up / Down` |
| Delete line | `Ctrl + Shift + K` | `Cmd + Shift + K` |
| Insert line below | `Ctrl + Enter` | `Cmd + Enter` |
| Insert line above | `Ctrl + Shift + Enter` | `Cmd + Shift + Enter` |
| Indent line | `Ctrl + ]` | `Cmd + ]` |
| Outdent line | `Ctrl + [` | `Cmd + [` |
| Toggle line comment | `Ctrl + /` | `Cmd + /` |
| Toggle block comment | `Shift + Alt + A` | `Shift + Option + A` |
| Select all occurrences | `Ctrl + F2` | `Cmd + F2` |
| Format document | `Shift + Alt + F` | `Shift + Option + F` |
| Format selection | `Ctrl + K Ctrl + F` | `Cmd + K Cmd + F` |

#### Navigation
| Action | Windows | Mac |
|--------|---------|-----|
| Go to line number | `Ctrl + G` | `Ctrl + G` |
| Go to beginning of file | `Ctrl + Home` | `Cmd + Home` |
| Go to end of file | `Ctrl + End` | `Cmd + End` |
| Move word by word | `Ctrl + Left / Right` | `Option + Left / Right` |
| Switch between open files | `Ctrl + Tab` | `Ctrl + Tab` |
| Navigate back / forward | `Alt + Left / Right` | `Ctrl + - / Ctrl + Shift + -` |
| Go to symbol in file | `Ctrl + Shift + O` | `Cmd + Shift + O` |
| Go to definition | `F12` | `F12` |
| Peek definition | `Alt + F12` | `Option + F12` |
| Show all references | `Shift + F12` | `Shift + F12` |
| Go to symbol in workspace | `Ctrl + T` | `Cmd + T` |

#### Search & Replace
| Action | Windows | Mac |
|--------|---------|-----|
| Find | `Ctrl + F` | `Cmd + F` |
| Replace | `Ctrl + H` | `Cmd + H` |
| Find in all files | `Ctrl + Shift + F` | `Cmd + Shift + F` |
| Replace in all files | `Ctrl + Shift + H` | `Cmd + Shift + H` |
| Find next | `F3` | `Cmd + G` |
| Find previous | `Shift + F3` | `Cmd + Shift + G` |
| Select all find matches | `Alt + Enter` | `Option + Enter` |

#### Multi-cursor & Selection
| Action | Windows | Mac |
|--------|---------|-----|
| Add cursor at position | `Alt + Click` | `Option + Click` |
| Add cursor above / below | `Ctrl + Alt + Up / Down` | `Cmd + Option + Up / Down` |
| Column (box) selection | `Shift + Alt + drag` | `Shift + Option + drag` |
| Select entire line | `Ctrl + L` | `Cmd + L` |
| Select to beginning of line | `Shift + Home` | `Shift + Home` |
| Select to end of line | `Shift + End` | `Shift + End` |
| Select to beginning of file | `Ctrl + Shift + Home` | `Cmd + Shift + Home` |
| Select to end of file | `Ctrl + Shift + End` | `Cmd + Shift + End` |

#### File Management
| Action | Windows | Mac |
|--------|---------|-----|
| New file | `Ctrl + N` | `Cmd + N` |
| Open file | `Ctrl + O` | `Cmd + O` |
| Save | `Ctrl + S` | `Cmd + S` |
| Save as | `Ctrl + Shift + S` | `Cmd + Shift + S` |
| Save all | `Ctrl + K S` | `Cmd + Option + S` |
| Close editor tab | `Ctrl + W` | `Cmd + W` |
| Reopen closed editor | `Ctrl + Shift + T` | `Cmd + Shift + T` |
| Close all editors | `Ctrl + K Ctrl + W` | `Cmd + K Cmd + W` |

#### View & Panel
| Action | Windows | Mac |
|--------|---------|-----|
| Toggle sidebar | `Ctrl + B` | `Cmd + B` |
| Toggle bottom panel | `Ctrl + J` | `Cmd + J` |
| Split editor | `Ctrl + \` | `Cmd + \` |
| Focus editor group 1/2/3 | `Ctrl + 1 / 2 / 3` | `Cmd + 1 / 2 / 3` |
| Explorer view | `Ctrl + Shift + E` | `Cmd + Shift + E` |
| Search view | `Ctrl + Shift + F` | `Cmd + Shift + F` |
| Source control view | `Ctrl + Shift + G` | `Ctrl + Shift + G` |
| Debug view | `Ctrl + Shift + D` | `Cmd + Shift + D` |
| Extensions view | `Ctrl + Shift + X` | `Cmd + Shift + X` |
| Zoom in | `Ctrl + =` | `Cmd + =` |
| Zoom out | `Ctrl + -` | `Cmd + -` |
| Reset zoom | `Ctrl + 0` | `Cmd + 0` |

---

## Author

**Bhupendra Verma**  
GitHub: [bhupendra197982](https://github.com/bhupendra197982)
