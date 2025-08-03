# MatchedWell V2 - Executive Luxury Design

This is the Tree 25 (Executive Luxury) version of the MatchedWell website.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:5173`

## Design Features

- **Style**: Tree 25 (Executive Luxury)
- **Hero**: Full-width with background image (windy-landscape.png)
- **Typography**: 
  - Headlines: Playfair Display (serif)
  - Body: Inter (sans-serif)
- **Primary Color**: #0080FF (blue)
- **Navigation**: Adapted from specs with blue accent color

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx   # Responsive navigation bar
│   └── Hero.tsx        # Executive luxury hero section
├── App.tsx             # Main application component
├── main.tsx           # Entry point
└── index.css          # Global styles and Tailwind setup
```

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.