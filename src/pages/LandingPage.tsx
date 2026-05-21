import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <main>
      <h1>FocusLamp</h1>

      <p>A desk lamp built for deep work and clean setups.</p>

      <Link to="/product">See product</Link>
    </main>
  );
}
