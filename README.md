# 🎉 Soc Ops - Social Bingo

> Break the ice, make connections, and have fun at your next in-person event!

**Soc Ops** is an interactive social bingo game designed to help people connect at mixers, conferences, team events, and gatherings. Find people who match the prompts on your bingo card and race to get 5 in a row!

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Built with React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)](https://www.typescriptlang.org/)

---

## ✨ Features

- **🎲 Interactive 5×5 Bingo Grid** - Classic bingo gameplay with a social twist
- **💾 Auto-Save Progress** - Never lose your game state with localStorage persistence
- **📱 Mobile-Friendly** - Play on any device with a responsive, touch-optimized design
- **🎨 Modern UI** - Built with React 19 and Tailwind CSS v4 for a polished experience
- **🚀 Instant Start** - No backend needed, works completely client-side
- **🔄 Easy Reset** - Start fresh anytime with a single tap

## 🎮 How to Play

1. **Launch the game** and start your bingo session
2. **Mingle with others** at your event and find people who match the prompts
3. **Tap squares** to mark them when you find a match
4. **Get 5 in a row** (horizontal, vertical, or diagonal) to win BINGO!
5. The center square is a **FREE SPACE** to get you started

Perfect for:
- 🏢 Team building events
- 🎓 Conference networking
- 🎊 Community mixers
- 👥 Orientation activities
- 🎈 Party icebreakers

## 🚀 Quick Start

### Prerequisites

- [Node.js 22](https://nodejs.org/) or higher

### Installation & Development

```bash
# Clone the repository
git clone <your-repo-url>
cd my-bingo-app

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173` (or the next available port).

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory, ready for deployment.

## 🛠️ Technology Stack

- **Frontend Framework**: [React 19](https://react.dev/) with TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - CSS-first configuration with `@theme` directive
- **Build Tool**: [Vite](https://vitejs.dev/) for fast builds and hot module replacement
- **State Management**: React hooks with localStorage persistence
- **Testing**: [Vitest](https://vitest.dev/) with React Testing Library
- **Linting**: ESLint with TypeScript support

## 📂 Project Structure

```
src/
├── components/      # React components (StartScreen, GameScreen, BingoModal)
├── hooks/          # Custom React hooks (useBingoGame)
├── utils/          # Game logic (bingoLogic.ts)
├── data/           # Questions and constants
├── types/          # TypeScript type definitions
└── test/           # Test files
```

## 🎨 Customization

Want to customize the game for your event? Check out the **[Lab Guide](.lab/GUIDE.md)** for detailed instructions on:

- Personalizing bingo prompts in `src/data/questions.ts`
- Customizing colors and themes
- Adjusting game rules and behavior

## 🧪 Development Commands

```bash
npm run dev      # Start development server with HMR
npm run build    # Build for production
npm run lint     # Run ESLint
npm run test     # Run test suite
```

## 🚢 Deployment

The project is configured for automatic deployment to GitHub Pages:

1. Enable **Settings** → **Pages** → **Deploy from a branch** → **GitHub Actions**
2. Push to `main` branch
3. Your game will be live at `https://{your-username}.github.io/{repo-name}`

## 🤝 Contributing

Contributions are welcome! Please check out our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Support

Need help? Check out our [Support Guide](SUPPORT.md) or [open an issue](../../issues).

---

**Made with ❤️ for better connections at in-person events**
