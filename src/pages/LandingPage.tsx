import Button from '@/components/Button';
import Section from '@/components/Section';
import ProductHighlights from '@/components/ProductHighlights';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Section className="flex min-h-screen flex-col justify-center">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">
            Built for deep work
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            A product funnel that feels clean, focused, and easy to buy from.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            <span className="font-semibold text-white/80">FocusLamp</span> is a
            minimal desk lamp designed for developers, creators, and anyone who
            wants a calmer workspace with better light.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/product">See the product</Button>
            <Button to="/product#features" variant="ghost">
              Explore features
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <ProductHighlights />
        </div>
      </Section>
    </main>
  );
}
