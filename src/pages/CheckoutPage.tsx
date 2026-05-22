import { useState, useEffect } from 'react';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import Button from '@/components/Button';
import Section from '@/components/Section';

import { cn } from '@/utils/cn';

//----------------------------------------------------------------------------//

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'The full name is required' }),
  email: z.email({ message: 'Invalid email' }),
  address: z.string().min(2, { message: 'The address is required' }),
});

type FormSchema = z.infer<typeof formSchema>;

//----------------------------------------------------------------------------//

const baseInputClassName =
  'w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white transition outline-none placeholder:text-white/30 focus:border-cyan-400';

export default function CheckoutPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    setFocus('fullName');
  }, []);

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    // Pause execution for 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(data);

    setSubmitted(true);

    reset();
  };

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

          <form
            className="space-y-3"
            onSubmit={(event) => void handleSubmit(onSubmit)(event)}
          >
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium text-white"
              >
                Full name
              </label>

              <input
                id="fullName"
                {...register('fullName')}
                className={cn(baseInputClassName, 'min-h-11')}
                placeholder="Your Full Name"
                required
              />

              <span className="text-xs text-red-300">
                {errors?.fullName?.message ?? <>&nbsp;</>}
              </span>
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
                type="email"
                {...register('email')}
                className={cn(baseInputClassName, 'min-h-11')}
                placeholder="name@domain.ext"
                required
              />

              <span className="text-xs text-red-300">
                {errors?.email?.message ?? <>&nbsp;</>}
              </span>
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
                {...register('address')}
                className={cn(baseInputClassName, 'min-h-32')}
                placeholder="Street, number, postal code, city"
                required
              />

              <span className="text-xs text-red-300">
                {errors?.address?.message ?? <>&nbsp;</>}
              </span>
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
