# GitSeek - GitHub Repository Search App

GitSeek is a simple and efficient GitHub repository search application built using **React, TypeScript, and Tailwind CSS**. It allows users to search for GitHub repositories, view relevant details, navigate results with pagination and even toggle dark mode.

## 🚀 Features

- 🔍 **Search GitHub Repositories** - Fetch and display repositories using the GitHub Search API (limit set for 1000 results because of git api restrictions).
- 📄 **Pagination** - Navigate through large search results efficiently.
- ⚡ **Debounced Search Input** - Prevents excessive API calls with optimized query execution.
- 🔥 **Interactive UI** - Uses Tailwind CSS for a modern and responsive design.
- 🌑 **Dark Mode Support** - Toggle between light and dark themes.
- 🎉 **Toast Notifications** - Displays error messages when API rate limits are exceeded.

---

## 🛠️ Tech Stack

- **React** - UI framework.
- **TypeScript** - Type safety.
- **Tailwind CSS** - Styling.
- **React Toastify** - Notifications.
- **Lodash** - Debounced input handling.

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/gitseek.git
cd gitseek
```

### 2️⃣ Install Dependencies
```bash
yarn install
# or
npm install
```

### 3️⃣ Start the Development Server
```bash
yarn dev
# or
npm run dev
```

---

## 🔥 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Search.tsx          # Search bar with debounced input handling
│   │   ├── Pagination.tsx      # Pagination controls
│   │   ├── DarkModeToggle.tsx  # Dark mode switch
│   │   ├── RepoGrid.tsx        # Grid layout to display repositories
│   │   ├── RepoCard.tsx        # Individual repository card
│   ├── hooks/
│   │   ├── useRepositories.ts  # Fetch and manage repositories
│   │   ├── usePagination.ts    # Generate pagination array
│   ├── services/
│   │   ├── api.ts              # API request handler
│   ├── assets/icons/           # SVG icons (Sun, Moon, Cross, Loading, etc.)
│   ├── App.tsx                 # Main app entry point
│   ├── main.tsx                # React root file
│   ├── styles/global.css       # Tailwind CSS setup
├── public/
│   ├── empty.png               # Image for empty search results
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔧 Usage Guide

1. **Enter a keyword** in the search box to find repositories.
2. **Select the number of results per page** from the dropdown (12, 24, 36).
3. **Navigate between pages** using the pagination controls.
4. **Click a repository card** to visit its GitHub page.
5. **Switch dark mode** by clicking the toggle button.

---

## 🤝 Contributions
Feel free to fork this repo, improve it, and submit a PR!

---

## 📜 License
This project is open-source and available under the MIT License.

---

## 🌟 Acknowledgments
Special thanks to the GitHub API for providing free access to public repositories!

