import { describe, it, expect } from 'vitest';
import { transformUrls } from './utils';

describe('transformUrls', () => {
  it('transforms URL objects to array of URL strings', () => {
    const mockUrls = [
      { url: 'https://example.com/character1', type: 'detail' },
      { url: 'https://marvel.com/character1', type: 'wiki' }
    ];
    const result = transformUrls(mockUrls);
    expect(result).toEqual(['https://example.com/character1', 'https://marvel.com/character1']);
  });

  it('handles empty array', () => {
    const result = transformUrls([]);
    expect(result).toEqual([]);
  });

  it('handles single URL', () => {
    const mockUrls = [
      { url: 'https://example.com/character', type: 'detail' }
    ];
    const result = transformUrls(mockUrls);
    expect(result).toEqual(['https://example.com/character']);
  });

  it('returns array of strings', () => {
    const mockUrls = [
      { url: 'https://example1.com', type: 'detail' },
      { url: 'https://example2.com', type: 'wiki' },
      { url: 'https://example3.com', type: 'resource' }
    ];
    const result = transformUrls(mockUrls);
    expect(Array.isArray(result)).toBe(true);
    expect(result.every((item: any) => typeof item === 'string')).toBe(true);
  });
});
