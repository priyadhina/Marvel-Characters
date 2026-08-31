import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CharacterTile from '../Components/CharacterTile.tsx';

const mockCharacterObj = {
  'Spider-Man': [
    {
      description: 'A web-slinging hero',
      imagePath: 'https://example.com/spiderman.jpg',
      urls: ['https://marvel.com/spiderman']
    }
  ],
  'Iron Man': [
    {
      description: 'A genius billionaire',
      imagePath: 'https://example.com/ironman.jpg',
      urls: ['https://marvel.com/ironman']
    }
  ],
  'Thor': [
    {
      description: 'God of Thunder',
      imagePath: 'https://example.com/thor.jpg',
      urls: ['https://marvel.com/thor']
    }
  ]
};

describe('CharacterTile Component', () => {
  it('renders pagination buttons', () => {
    render(
      <CharacterTile
        result={['Spider-Man', 'Iron Man', 'Thor']}
        characterObj={mockCharacterObj}
        showPopup={vi.fn()}
        isPopupOpen={false}
      />
    );
    expect(screen.getByText('Prev')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('renders 3 characters per page', () => {
    const { container } = render(
      <CharacterTile
        result={['Spider-Man', 'Iron Man', 'Thor']}
        characterObj={mockCharacterObj}
        showPopup={vi.fn()}
        isPopupOpen={false}
      />
    );
    const listItems = container.querySelectorAll('li');
    expect(listItems.length).toBe(3);
  });

  it('disables Prev button on first page', () => {
    render(
      <CharacterTile
        result={['Spider-Man', 'Iron Man', 'Thor']}
        characterObj={mockCharacterObj}
        showPopup={vi.fn()}
        isPopupOpen={false}
      />
    );
    const prevButton = screen.getByText('Prev') as HTMLButtonElement;
    expect(prevButton.disabled).toBe(true);
  });

  it('calls showPopup when character is clicked', () => {
    const mockShowPopup = vi.fn();
    render(
      <CharacterTile
        result={['Spider-Man', 'Iron Man', 'Thor']}
        characterObj={mockCharacterObj}
        showPopup={mockShowPopup}
        isPopupOpen={false}
      />
    );
    const character = screen.getByText('Spider-Man');
    character.click();
    expect(mockShowPopup).toHaveBeenCalledWith('Spider-Man');
  });
});
