import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SavedCharacters from '../Components/SavedCharacters.tsx';

describe('SavedCharacters Component', () => {
  it('renders home link', () => {
    render(
      <BrowserRouter>
        <SavedCharacters />
      </BrowserRouter>
    );
    expect(screen.getByText('< Home')).toBeInTheDocument();
  });

  it('displays disclaimer when no characters are saved', () => {
    render(
      <BrowserRouter>
        <SavedCharacters />
      </BrowserRouter>
    );
    expect(screen.getByText(/There are no saved characters/i)).toBeInTheDocument();
  });

  it('renders Back link in disclaimer', () => {
    render(
      <BrowserRouter>
        <SavedCharacters />
      </BrowserRouter>
    );
    const backLinks = screen.getAllByText('Back');
    expect(backLinks.length).toBeGreaterThan(0);
  });

  it('has correct structure', () => {
    const { container } = render(
      <BrowserRouter>
        <SavedCharacters />
      </BrowserRouter>
    );
    expect(container.querySelector('.bg')).toBeInTheDocument();
    expect(container.querySelector('.container')).toBeInTheDocument();
    expect(container.querySelector('.back')).toBeInTheDocument();
    expect(container.querySelector('.savedItems')).toBeInTheDocument();
  });
});
