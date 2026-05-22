import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('renders the not found page', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /back to the landing page/i }),
    ).toHaveAttribute('href', '/');
  });
});
