# Copilot Instructions

## Before Committing
- [ ] `npm run lint` — must pass
- [ ] `npm run build` — must succeed
- [ ] `npm run test` — all tests passing

## Project Essentials
**Stack**: React 19 + TypeScript, Vite, Tailwind v4 (`@theme` in `src/index.css`, no config file). Social Bingo game (5×5 grid).

**Dev commands**: `npm run dev` (host 0.0.0.0), `npm run build` (tsc + vite), `npm run lint`, `npm run test` (vitest).

**Architecture**: `App.tsx` switches `StartScreen` ↔ `GameScreen` based on `gameState`. `useBingoGame` hook owns state + localStorage (`bingo-game-state`, version 1—bump `STORAGE_VERSION` for schema changes). Pure game logic in `src/utils/bingoLogic.ts` with full Vitest coverage.

**Board invariants**: 5×5 grid, IDs 0–24 (center index 12 = pre-marked free space). Never allow toggling free space. `checkBingo` checks rows/cols/diagonals; `handleSquareClick` uses `queueMicrotask` for state updates to avoid React timing issues.

**Styling**: Tailwind v4 tokens (`--color-accent`, `--color-marked`, etc.) in `src/index.css`. For design changes, see `.github/instructions/frontend-design.instructions.md` and `tailwind-4.instructions.md`.

**Types**: Central definitions in `src/types/index.ts`—extend rather than duplicate.
