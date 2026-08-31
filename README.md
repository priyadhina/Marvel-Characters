# Marvel Characters Explorer

A React application that fetches and displays Marvel characters using the Marvel API. Users can search for characters, view detailed information in a popup, and save their favorite characters.

## Features

- **Character Search**: Real-time search functionality to find Marvel characters by name
- **Character Display**: Shows 3 characters per page with pagination controls
- **Character Limit**: Displays up to 18 characters from the Marvel API
- **Character Details**: Popup modal showing character description and related URLs
- **Save Characters**: Save favorite characters to a persistent list
- **View Saved**: Dedicated page to view and manage saved characters with remove functionality

## Technologies Used

- **React 18**: Modern React with hooks and functional components
- **React Router v5**: Client-side routing for navigation
- **Redux & React-Redux**: State management
- **PropTypes**: Runtime type checking
- **Marvel API**: Third-party API for fetching character data

## Project Structure

```
src/
├── index.js              # Application entry point with Router setup
├── style.css             # Global styling
├── Components/
│   ├── App.js            # Main component with character fetching and search logic
│   ├── CharacterTile.js  # Displays characters in paginated tiles (3 per page)
│   ├── ImageComponent.js # Renders character image and name
│   ├── PopUpComponent.js # Modal for displaying character details
│   └── SavedCharacters.js # Page to view and manage saved characters
└── Utilities/
    └── utils.js          # Helper function for URL transformation
```

## Components

### App.js
- Fetches 18 characters from Marvel API on component mount
- Implements real-time search by character name
- Manages popup state for character details
- Handles saving characters to a local list
- Uses React Router Link to navigate to saved characters page

### CharacterTile.js
- Functional component with React hooks (useState)
- Implements pagination with 3 characters per page
- Prev/Next button controls with disabled states

### SavedCharacters.js
- Displays saved characters in a list
- Allows removal of individual characters
- Shows disclaimer message if no characters are saved

### PopUpComponent.js
- Modal display for character details
- Shows character description and URLs
- Save and close buttons

### ImageComponent.js
- Reusable component for displaying character images and names

## Setup & Installation

```bash
npm install
npm start
```

## Available Scripts

- `npm start` - Start the development server
- `npm build` - Build for production
- `npm test` - Run tests

## Notes

- Uses Marvel API credentials (consider moving to environment variables for production)
- Character data is stored in component state, not persisted across sessions
- Saved characters list is maintained in memory during the session
