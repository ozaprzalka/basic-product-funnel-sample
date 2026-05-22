import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import ProductPage from './ProductPage';

describe('ProductPage', () => {
  it('renders product information and checkout CTA', () => {
    render(
      <MemoryRouter>
        <ProductPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: /focuslamp/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/€79\.00/i)).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/checkout',
    );
  });

  it('renders product feature list', () => {
    render(
      <MemoryRouter>
        <ProductPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByText(/adjustable brightness with warm and cool tones/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/usb-c powered for modern desk setups/i),
    ).toBeInTheDocument();
  });
});
