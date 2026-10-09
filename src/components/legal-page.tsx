import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Button, Container } from "@/components/ui/primitives";
import { site } from "@/config/site";

/**
 * Placeholder for a legal page that hasn't been written yet. Replace the
 * page's content with the real policy before launch.
 */
export function LegalPlaceholder({ title }: { title: string }) {
  return (
    <>
      <Header />
      <main id="main" className="pb-24 pt-40">
        <Container className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-fg-muted">
            Our {title.toLowerCase()} is being finalized and will be published here before launch.
            {site.contactEmail ? ` In the meantime, email ${site.contactEmail} with any questions.` : ""}
          </p>
          <Button href="/" variant="secondary" className="mt-10">
            Back to home
          </Button>
        </Container>
      </main>
      <Footer />
    </>
  );
}
