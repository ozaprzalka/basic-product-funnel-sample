import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import LandingPage from './LandingPage';

describe('LandingPage', () => {
  it('renders the hero content and product CTA', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', {
        name: /a product funnel that feels clean, focused, and easy to buy from/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /see the product/i }),
    ).toHaveAttribute('href', '/product');

    expect(
      screen.getByRole('link', { name: /explore features/i }),
    ).toHaveAttribute('href', '/product#features');
  });

  it('renders highlight cards', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>,
    );

    expect(screen.getByText(/focused lighting/i)).toBeInTheDocument();
    expect(screen.getByText(/minimal footprint/i)).toBeInTheDocument();
    expect(screen.getByText(/usb-c powered/i)).toBeInTheDocument();
  });
});
