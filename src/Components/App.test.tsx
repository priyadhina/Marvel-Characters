import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../Components/App.tsx';

describe('App Component', () => {
  it('renders the Marvel Characters header', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText('MARVEL CHARACTERS')).toBeInTheDocument();
  });

  it('renders the search input', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const searchInput = screen.getByPlaceholderText('Type character name');
    expect(searchInput).toBeInTheDocument();
  });

  it('renders View Saved link', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText('View Saved')).toBeInTheDocument();
  });

  it('renders pagination buttons', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText('Prev')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });
});
