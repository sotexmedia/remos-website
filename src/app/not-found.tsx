import { Button, Container } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh items-center">
      <Container className="max-w-xl text-center">
        <p className="font-mono text-sm text-accent-hover">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">This page doesn&apos;t exist.</h1>
        <Button href="/" className="mt-10" arrow>
          Back to home
        </Button>
      </Container>
    </main>
  );
}
