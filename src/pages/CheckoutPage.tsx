import { useState } from 'react';

import Button from '@/components/Button';
import Section from '@/components/Section';

import { cn } from '@/utils/cn';

//----------------------------------------------------------------------------//

interface FormState {
  fullName: string;
  email: string;
  address: string;
}

const getInitialState = (): FormState => ({
  fullName: '',
  email: '',
  address: '',
});

const baseInputClassName =
  'w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white transition outline-none placeholder:text-white/30 focus:border-cyan-400';

// min-h-11 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white transition outline-none placeholder:text-white/30 focus:border-cyan-400
// min-h-32 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white transition outline-none placeholder:text-white/30 focus:border-cyan-400

export default function CheckoutPage() {
  const [form, setForm] = useState<FormState>(getInitialState());
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Section className="flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm sm:p-10">
          <div className="mb-8">
            <p className="text-sm text-white/60">Checkout</p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Complete your order
            </h1>

            <p className="mt-3 text-sm leading-6 text-white/70">
              Enter your details below to place the order for{' '}
              <span className="font-semibold">FocusLamp</span>.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium text-white"
              >
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                value={form.fullName}
                onChange={(e) => updateField('fullName', e.target.value)}
                className={cn(baseInputClassName, 'min-h-11')}
                placeholder="Your Full Name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                className={cn(baseInputClassName, 'min-h-11')}
                placeholder="name@domain.ext"
                required
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="mb-2 block text-sm font-medium text-white"
              >
                Shipping address
              </label>
              <textarea
                id="address"
                name="address"
                value={form.address}
                onChange={(e) => updateField('address', e.target.value)}
                className={cn(baseInputClassName, 'min-h-32')}
                placeholder="Street, number, postal code, city"
                required
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <Button type="submit">Place order</Button>
              <Button to="/product" variant="ghost">
                Back to product
              </Button>
            </div>
          </form>

          {submitted && (
            <div
              role="status"
              className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-4 text-sm text-emerald-300"
            >
              Order placed successfully.
            </div>
          )}
        </div>
      </Section>
    </main>
  );
}
