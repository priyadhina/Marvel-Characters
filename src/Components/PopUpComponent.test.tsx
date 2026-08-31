import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PopUpComponent } from '../Components/PopUpComponent.tsx';

const mockCharacterObj = {
  'Spider-Man': [
    {
      description: 'A web-slinging hero from New York',
      imagePath: 'https://example.com/spiderman.jpg',
      urls: ['https://marvel.com/spiderman', 'https://en.wikipedia.org/wiki/Spider-Man']
    }
  ]
};

describe('PopUpComponent', () => {
  it('renders Save Character button', () => {
    render(
      <PopUpComponent
        item="Spider-Man"
        characterObj={mockCharacterObj}
        showPopup={vi.fn()}
        addToSavedItems={vi.fn()}
      />
    );
    expect(screen.getByText('Save Character')).toBeInTheDocument();
  });

  it('renders close button', () => {
    render(
      <PopUpComponent
        item="Spider-Man"
        characterObj={mockCharacterObj}
        showPopup={vi.fn()}
        addToSavedItems={vi.fn()}
      />
    );
    expect(screen.getByText('X')).toBeInTheDocument();
  });

  it('renders character description', () => {
    render(
      <PopUpComponent
        item="Spider-Man"
        characterObj={mockCharacterObj}
        showPopup={vi.fn()}
        addToSavedItems={vi.fn()}
      />
    );
    expect(screen.getByText('A web-slinging hero from New York')).toBeInTheDocument();
  });

  it('renders character URLs', () => {
    render(
      <PopUpComponent
        item="Spider-Man"
        characterObj={mockCharacterObj}
        showPopup={vi.fn()}
        addToSavedItems={vi.fn()}
      />
    );
    expect(screen.getByText('URLs:')).toBeInTheDocument();
    expect(screen.getByText('https://marvel.com/spiderman')).toBeInTheDocument();
    expect(screen.getByText('https://en.wikipedia.org/wiki/Spider-Man')).toBeInTheDocument();
  });

  it('calls addToSavedItems when Save Character button is clicked', () => {
    const mockAddToSavedItems = vi.fn();
    render(
      <PopUpComponent
        item="Spider-Man"
        characterObj={mockCharacterObj}
        showPopup={vi.fn()}
        addToSavedItems={mockAddToSavedItems}
      />
    );
    const saveButton = screen.getByText('Save Character');
    saveButton.click();
    expect(mockAddToSavedItems).toHaveBeenCalledWith('Spider-Man');
  });

  it('calls showPopup when close button is clicked', () => {
    const mockShowPopup = vi.fn();
    render(
      <PopUpComponent
        item="Spider-Man"
        characterObj={mockCharacterObj}
        showPopup={mockShowPopup}
        addToSavedItems={vi.fn()}
      />
    );
    const closeButton = screen.getByText('X');
    closeButton.click();
    expect(mockShowPopup).toHaveBeenCalledWith('');
  });
});
