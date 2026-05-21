import { useState } from 'react';

export default function CheckoutPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Full name
          <input name="fullName" />
        </label>

        <label>
          Email
          <input name="email" type="email" />
        </label>

        <button type="submit">Place order</button>
      </form>

      {submitted && <p>Order placed.</p>}
    </main>
  );
}
