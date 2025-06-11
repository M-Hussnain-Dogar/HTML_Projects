# 📄 Web Utilities Project

This project is a collection of web-based tools built using **HTML**, **CSS**, and **JavaScript**. It includes:

- A paragraph generator
- A calculator supporting advanced math functions
- A live HTML code preview tool

---

## 🔗 Project Structure
/project-root  
│  
├── mainwebpage.html # Main landing page  
├── PARA.html # Paragraph repeater tool  
├── Number calculation.html # Code-to-preview converter  
├── calculatoPARA.html # Scientific calculator  
├── webpage.css # Shared stylesheet  
└── script.js (inline in HTML) # JavaScript logic (per page)  

---

## 🧰 Features

### 1. 📝 Paragraph Generator (`PARA.html`)
- Enter a base paragraph and a number.
- The script duplicates the paragraph accordingly.
- `Back` button toggles between input and output views.

### 2. 🧮 Scientific Calculator (`calculatoPARA.html`)
- Supports:
  - Arithmetic: `+`, `-`, `×`, `÷`
  - Functions: `sin`, `cos`, `tan`, `log`, `√`
  - Constants: `π`
  - Symbols: `^`, `!`, `%`, `×10^`
- Handles keyboard input and button clicks.
- Preprocesses expressions to handle JavaScript equivalents (e.g., `^` to `**`).

### 3. 💻 Live Code Preview (`Number calculation.html`)
- Enter HTML in a `<textarea>` and view the rendered result.
- Toggle between *Code* and *Preview* views.
- Uses Shadow DOM to safely render preview content.

---

## 🛠️ How to Run

1. Clone or download this project.
2. Open `mainwebpage.html` in your browser.
3. Navigate to other tools via the navigation bar.

---

## 🚀 Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Ionicons (for UI icons)

---

## 📌 Notes

- `eval()` is used in the calculator. For production, replace with a math parser like `math.js` to enhance security.
- Ensure JavaScript is enabled in your browser for full functionality.

---

## 📬 Contact

For questions or feedback, refer to the **Contact Us** link in the navigation bar.

