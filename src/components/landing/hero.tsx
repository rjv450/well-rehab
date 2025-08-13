import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background to-secondary/50 px-4 md:px-6"
    >
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
              Guiding Your Path to Recovery and Comfort
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              At MiRA, we offer a wide range of high-quality rehabilitation
              products designed to support your recovery journey, enhance
              mobility, and improve everyday comfort.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#services">Explore Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Rehabilitation session in progress"
              data-ai-hint="rehabilitation clinic"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
