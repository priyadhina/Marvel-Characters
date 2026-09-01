# Marvel Characters Explorer

A React + Vite app for browsing Marvel characters from a public superhero dataset. The app loads character data, lets users search by name, opens a popup for details, and saves favorite characters so the list persists across navigation.

## Features

- Live character search by name
- Paginated grid layout with 3 items per page
- Character detail modal with image, first appearance, and aliases
- Save and remove favorite characters
- Saved characters page with navigation back to the main view
- Persistent saved list using browser localStorage

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router DOM v6
- Vitest + Testing Library
- CSS for layout and styling

## Data Source

The app fetches character data from:

https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json

It filters the records to entries where `biography.publisher === 'Marvel Comics'`.

## Project Structure

```text
src/
├── index.tsx
├── style.css
├── Components/
│   ├── App.tsx
│   ├── App.test.tsx
│   ├── CharacterTile.tsx
│   ├── CharacterTile.test.tsx
│   ├── ImageComponent.tsx
│   ├── ImageComponent.test.tsx
│   ├── PopUpComponent.tsx
│   ├── PopUpComponent.test.tsx
│   ├── SavedCharacters.tsx
│   └── SavedCharacters.test.tsx
└── test/
    └── setup.ts
```

## Main Components

### App
- Fetches the character list on first render
- Builds the searchable `nameList` and lookup object
- Tracks popup visibility and current selected character
- Saves favorites in localStorage
- Routes to the saved characters page via `Link`

### CharacterTile
- Displays the current page of character cards
- Supports Prev/Next pagination controls
- Opens the popup when a card is clicked

### PopUpComponent
- Shows the selected character details in a modal
- Displays image, first appearance, and alias list
- Includes Save Character and close actions

### SavedCharacters
- Reads the saved list from localStorage
- Shows saved characters and allows removal
- Displays a disclaimer when no items are saved

### ImageComponent
- Reusable image + title renderer for character cards and modal content

## Local Development

```bash
npm install
npm run dev
```

The app runs with Vite and is available in the local development server output.

## Production Build

```bash
npm run build
```

## Tests

```bash
npm test
```

## Notes

- Saved character data is persisted in `localStorage`, so it survives route changes and refreshes.
- The UI uses a layered overlay/popup approach for the character details modal.
- The project is currently using the public superhero dataset rather than a direct Marvel API key-based integration.
