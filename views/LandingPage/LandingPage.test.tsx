import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LandingPage } from './LandingPage';

describe('LandingPage', () => {
  test('is rendered', () => {
    render(<LandingPage />);
    screen.getByText('Hello World', {
      exact: false,
    });
    expect(screen.getByRole('img')).toHaveAttribute('src', 'react.svg');
  });
});
