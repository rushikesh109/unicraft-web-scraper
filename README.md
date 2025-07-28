# 🕸️ Unicraft Web Scraper

A Node.js-based CLI tool that scrapes company information (name, contact info, etc.) from given URLs. Built for the Full Stack Engineer assignment at **Unicraft Tech**.

---

## ✨ Features

### ✅ Core Features
- Accepts one or more URLs via command line
- Extracts:
  - 🏢 Company Name (from `<title>`)
  - 📧 Email addresses (via regex)
  - 📞 Phone numbers (via regex)
- Saves results in:
  - `output/data.json`
  - `output/data.csv`
- Handles unreachable or invalid URLs gracefully

---

## 📦 Tech Stack

| Layer     | Tech                         |
|-----------|------------------------------|
| Language  | JavaScript (Node.js)         |
| Scraping  | `axios`, `cheerio`           |
| CLI       | `commander`, `inquirer`      |
| Export    | `fs-extra`, `json2csv`       |
| Utility   | `validator`, `chalk`, `dotenv` |

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/unicraft-web-scraper.git
cd unicraft-web-scraper
