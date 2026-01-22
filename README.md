<div align="center">

# 🎯 Soc Ops

### Break the ice, make connections, have fun!

**A modern Social Bingo game that transforms awkward mixers into engaging conversations**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8.svg)](https://tailwindcss.com/)

[🎮 Play Now](#quick-start) • [✨ Features](#features) • [🚀 Deploy](#deployment)

</div>

---

## 🎭 What is Soc Ops?

Soc Ops (Social Operations) is an interactive icebreaker game perfect for team events, conferences, meetups, and social gatherings. Instead of awkward small talk, participants engage in a fun scavenger hunt to find people who match unique characteristics on their bingo card.

<div align="center">

### 📱 Start Screen
<img src="https://github.com/user-attachments/assets/4642db38-75e5-4187-8b9e-28dd9fe441c4" alt="Soc Ops Start Screen" width="600">

### 🎲 Game Board
<img src="https://github.com/user-attachments/assets/7a16cc52-554e-4945-98bd-41b14ae2d535" alt="Soc Ops Game Board" width="600">

</div>

## ✨ Features

- 🎲 **Randomized Boards** - Every game generates a unique 5×5 bingo grid
- 📱 **Mobile-First Design** - Seamlessly works on any device
- 🎨 **Modern UI** - Built with React 19 and Tailwind CSS v4
- 💾 **Auto-Save Progress** - Never lose your game state
- 🏆 **Win Detection** - Automatically celebrates when you get 5 in a row
- ⚡ **Lightning Fast** - Powered by Vite for instant load times
- 🎯 **FREE SPACE** - Center square pre-marked for classic bingo feel
- 🌈 **Customizable Questions** - Easy to modify prompts for any group

## 🎮 How to Play

1. **Launch the game** and tap "Start Game"
2. **Mingle and chat** with people at your event
3. **Tap squares** when you find someone matching the description
4. **Get 5 in a row** (horizontal, vertical, or diagonal) to win!
5. **Celebrate** your networking victory! 🎉

## 🚀 Quick Start

### Prerequisites

- [Node.js 22](https://nodejs.org/) or higher

### Installation & Running

```bash
# Clone the repository
git clone https://github.com/srvchawla/my-bingo-app.git
cd my-bingo-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open your browser to `http://localhost:5173` and start playing!

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Modern UI framework with latest features |
| **TypeScript** | Type-safe development |
| **Vite** | Lightning-fast build tool |
| **Tailwind CSS v4** | Utility-first styling with `@theme` directive |
| **Vitest** | Fast unit testing |

## 🏗️ Build & Test

```bash
# Run tests
npm test

# Lint code
npm run lint

# Build for production
npm run build
```

## 🌐 Deployment

This project automatically deploys to **GitHub Pages** on every push to the `main` branch. Your game will be live and accessible to anyone with the link!

## 🎨 Customization

Want to personalize the game for your event? It's easy!

### Modify Questions

Edit the questions in `src/data/questions.ts`:

```typescript
export const questions: string[] = [
  "bikes to work",
  "has lived in another country",
  "has a pet",
  // Add your own creative prompts!
];
```

### Workshop Guide

👉 **[Follow the Lab Guide](.lab/GUIDE.md)** for step-by-step instructions on customizing and extending the game.

## 🤝 Contributing

Contributions are welcome! Feel free to:

- 🐛 Report bugs
- 💡 Suggest new features
- 🎨 Improve the UI/UX
- 📝 Enhance documentation

Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

## 📄 License

This project is licensed under the [MIT License](LICENSE) - feel free to use it for your events!

## 💬 Support

- 📖 [Documentation](.lab/GUIDE.md)
- 🐛 [Report Issues](https://github.com/srvchawla/my-bingo-app/issues)
- 💡 [Request Features](https://github.com/srvchawla/my-bingo-app/issues)
- 📧 [Security Policy](SECURITY.md)

## 🌟 Acknowledgments

Created with ❤️ for building connections and breaking the ice at social events.

---

<div align="center">

**Made with** ⚛️ React • 🎨 Tailwind CSS • ⚡ Vite

**[⬆ Back to Top](#-soc-ops)**

</div>
