import { Link } from 'react-router-dom';

export default function ProductPage() {
  return (
    <main>
      <h1>FocusLamp Details</h1>

      <ul>
        <li>Adjustable warm/cool light</li>
        <li>USB-C power</li>
        <li>Minimal aluminum body</li>
      </ul>

      <p>€79</p>

      <Link to="/checkout">Buy now</Link>
    </main>
  );
}
