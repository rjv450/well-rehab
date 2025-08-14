import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";
import banner2 from "@/assets/images/banner/banner2.png";
export function About() {
  return (
    <section id="about" className="w-full py-20 md:py-28 bg-background px-4 md:px-6 lg:px-24">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary font-medium">
                About MiRA
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                A Legacy of Quality and Innovation
              </h2>
              <p className="text-lg text-muted-foreground">
                For over <span className="font-bold text-primary">9 years</span>
                , MiRA has been a trusted leader in rehabilitation solutions,
                delivering high-quality products and innovative technologies.
                Our journey is built on a foundation of integrity, expertise,
                and an unwavering commitment to supporting our customers’ needs
                and success.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Target className="w-8 h-8 text-accent" />
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  To provide single window solution in the field of differently
                  abled needs from the best of the Global Manufacturers &
                  innovative in technology.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Eye className="w-8 h-8 text-accent" />
                  <CardTitle>Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  We are a team of Professionals leading in the field of
                  rehabilitation of differently abled. Associated with Top
                  Brands to bring you quality products and service support.
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={banner2}
              alt="A caring professional helping a patient"
              data-ai-hint="therapist patient"
              width={550}
              height={550}
              className="rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
