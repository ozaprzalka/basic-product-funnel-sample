import Button from '@/components/Button';
import Section from '@/components/Section';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Section>
        <nav className="mb-8">
          <Button to="/" variant="navigation">
            Back to the landing page
          </Button>
        </nav>

        <div className="flex flex-col items-center gap-6">
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            404
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/70">
            Page not found...
          </p>
        </div>
      </Section>
    </main>
  );
}
