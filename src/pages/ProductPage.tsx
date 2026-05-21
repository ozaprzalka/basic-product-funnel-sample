import Button from '@/components/Button';
import Section from '@/components/Section';

import focuslamp from '@/assets/focuslamp.jpg';

//----------------------------------------------------------------------------//

const features = [
  'Adjustable brightness with warm and cool tones',
  'Solid aluminum body with soft matte finish',
  'USB-C powered for modern desk setups',
  'Compact base designed for small workstations',
] as const;

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Section>
        <nav className="mb-8">
          <Button to="/" variant="navigation">
            Back to landing page
          </Button>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border border-white/10 bg-linear-to-br from-slate-800 to-slate-900 p-8">
            <div className="aspect-4/3 rounded-2xl border border-white/10 bg-slate-900/80">
              <img src={focuslamp} />
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70">
              Product details
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              FocusLamp
            </h1>

            <p className="mt-4 text-lg text-cyan-300">€79.00</p>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/70">
              Designed to help you concentrate longer, reduce harsh glare, and
              keep your desk setup visually simple.
            </p>

            <ul className="mt-8 space-y-3" id="features">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                >
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/checkout">Buy now</Button>
              <Button to="/" variant="ghost">
                Back
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
