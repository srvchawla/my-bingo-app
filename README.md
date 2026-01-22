<div align="center">

# 🎯 Soc Ops - Social Bingo Game

### Break the Ice with Interactive Bingo! 🎉

*A modern, engaging Social Bingo game for in-person mixers, networking events, and team building activities.*

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## ✨ About

**Soc Ops** is an interactive Social Bingo game designed to make networking and social gatherings more engaging. Players explore the room, find people who match the prompts on their bingo card, and race to get 5 in a row! Perfect for conferences, team meetings, workshops, and any event where you want people to connect.

### 🎮 Key Features

- **🎲 Dynamic 5×5 Bingo Grid** - Classic bingo gameplay with a social twist
- **🎯 Interactive Gameplay** - Click squares to mark them as you meet people
- **✅ Auto-Win Detection** - Instantly recognizes winning patterns (rows, columns, diagonals)
- **🔄 Restart Anytime** - Easy reset to start a new game
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- **💾 State Persistence** - Game progress saved automatically to localStorage
- **🎨 Beautiful UI** - Modern, polished design with Tailwind CSS v4
- **⚡ Lightning Fast** - Built with Vite for optimal performance
- **♿ Accessible** - Designed with accessibility best practices

---

## 🖼️ Demo

> **📸 Screenshots Coming Soon!**
> 
> *Experience the game live or check back for screenshots showcasing the start screen, game board, and winning celebration.*

<!-- You can remove this message when updating the readme as part of the workshop -->
👉 **[Follow the Lab Guide](.lab/GUIDE.md)** for instructions on how to set up and customize the game.

---

## 🛠️ Tech Stack

This project leverages cutting-edge web technologies:

| Technology | Purpose |
|------------|---------|
| **React 19** | UI framework with latest concurrent features |
| **TypeScript** | Type-safe development experience |
| **Vite** | Lightning-fast build tool and dev server |
| **Tailwind CSS v4** | Utility-first CSS with @theme configuration |
| **Vitest** | Fast unit testing framework |
| **ESLint** | Code quality and consistency |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js 22](https://nodejs.org/) or higher
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/srvchawla/my-bingo-app.git
   cd my-bingo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in your browser**
   ```
   http://localhost:5173
   ```

The app will hot-reload as you make changes! 🔥

---

## 📦 Build & Deploy

### Local Build

Create a production-ready build:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Preview Production Build

Test the production build locally:

```bash
npm run preview
```

### Deployment

This project automatically deploys to **GitHub Pages** on push to `main` branch. 

---

## 🧪 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (hosts on 0.0.0.0) |
| `npm run build` | Build for production (TypeScript + Vite) |
| `npm run lint` | Run ESLint checks |
| `npm run test` | Run unit tests with Vitest |
| `npm run preview` | Preview production build locally |

### Project Structure

```
src/
├── components/      # React components (GameScreen, StartScreen, etc.)
├── hooks/           # Custom React hooks (useBingoGame)
├── utils/           # Pure game logic (bingoLogic.ts)
├── types/           # TypeScript type definitions
├── data/            # Game data and prompts
└── assets/          # Static assets
```

---

## 🤝 Contributing

We welcome contributions! This project follows the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).

Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for:
- How to submit pull requests
- Coding standards and guidelines
- CLA requirements

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

Copyright © Microsoft Corporation

---

## 💬 Support

- 📖 [Documentation](.lab/GUIDE.md) - Setup and customization guide
- 🐛 [Report Issues](https://github.com/srvchawla/my-bingo-app/issues) - Found a bug? Let us know!
- 💡 [Discussions](https://github.com/srvchawla/my-bingo-app/discussions) - Questions and ideas welcome
- 📧 [Security Issues](SECURITY.md) - Responsible disclosure

---

<div align="center">

**Made with ❤️ for better social connections**

⭐ Star this repo if you find it useful!

</div>
