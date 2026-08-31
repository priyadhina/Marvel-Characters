import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ImageComponent } from '../Components/ImageComponent.tsx';

describe('ImageComponent', () => {
  it('renders character image', () => {
    render(
      <ImageComponent
        item="Spider-Man"
        path="https://example.com/spiderman.jpg"
      />
    );
    const image = screen.getByAltText('Spider-Man');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/spiderman.jpg');
  });

  it('renders character name', () => {
    render(
      <ImageComponent
        item="Iron Man"
        path="https://example.com/ironman.jpg"
      />
    );
    expect(screen.getByText('Iron Man')).toBeInTheDocument();
  });

  it('has correct image dimensions', () => {
    const { container } = render(
      <ImageComponent
        item="Thor"
        path="https://example.com/thor.jpg"
      />
    );
    const image = container.querySelector('img');
    expect(image).toHaveAttribute('width', '100%');
    expect(image).toHaveAttribute('height', '100%');
  });
});
