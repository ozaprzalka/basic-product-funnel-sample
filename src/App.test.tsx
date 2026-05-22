import { render, screen, /*act,*/ waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App routes', () => {
  it('renders landing page on /', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('link', { name: /see the product/i }),
    ).toBeInTheDocument();
  });

  it('renders product page on /product', async () => {
    render(
      <MemoryRouter initialEntries={['/product']}>
        <App />
      </MemoryRouter>,
    );

    /*
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument();
    */

    await waitFor(() => {
      expect(
        screen.getByRole('link', { name: /buy now/i }),
      ).toBeInTheDocument();
    });
  });

  it('renders checkout page on /checkout', async () => {
    render(
      <MemoryRouter initialEntries={['/checkout']}>
        <App />
      </MemoryRouter>,
    );

    /*
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    expect(screen.getByRole('button', { name: /place order/i })).toBeInTheDocument();
    */

    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /place order/i }),
      ).toBeInTheDocument();
    });
  });
});
