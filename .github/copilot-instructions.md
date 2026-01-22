# Copilot Instructions

## Before Committing
- [ ] `npm run lint` — must pass
- [ ] `npm run build` — must succeed
- [ ] `npm run test` — all tests passing

## Stack & Commands
**Stack**: React 19 + TypeScript, Vite, Tailwind v4, Vitest. Social Bingo icebreaker game.

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server (host 0.0.0.0:5173) |
| `npm run build` | `tsc -b && vite build` |
| `npm run lint` | ESLint |
| `npm run test` | Vitest (run once) |

## Architecture
`App.tsx` switches `StartScreen` ↔ `GameScreen` based on `gameState`. `useBingoGame` hook owns state + localStorage persistence (`bingo-game-state`, bump `STORAGE_VERSION` for schema changes). Pure game logic in `src/utils/bingoLogic.ts`.

**Data flow**: `useBingoGame` → pure logic → state → localStorage. **States**: `'start'` → `'playing'` → `'bingo'`.

## Board Invariants (Critical)
- 5×5 grid, IDs 0–24 sequentially
- **Center (index 12)** = FREE SPACE, always pre-marked, never toggleable
- `handleSquareClick` uses `queueMicrotask` to schedule bingo detection—avoids React setState-during-render issues

## Styling (Tailwind v4)
Theme tokens in `src/index.css` using `@theme` block (no `tailwind.config.js`). Use `bg-marked`, `border-marked-border`, etc. See `.github/instructions/tailwind-4.instructions.md`.

## Testing Patterns
All game logic in `bingoLogic.ts` has full coverage. Keep functions pure, add tests in `bingoLogic.test.ts`.

## Types
Extend `src/types/index.ts`—never duplicate type definitions.

## Questions Data
Edit `src/data/questions.ts` (24 prompts required). `FREE_SPACE` constant exported separately.

## Questions Data
Edit `src/data/questions.ts` (24 prompts required). `FREE_SPACE` constant exported separately.
