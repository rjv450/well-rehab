import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const productsAndServices = [
  "Physiotherapy, Occupational Therapy & Sensory Integration Aids",
  "Behavioral Assessment & Psychological Test Tools",
  "Prosthesis & Orthosis",
  "Rehabilitation & Mobility Aids",
  "Podiatry & Foot Care Products",
  "Teaching and Learning Materials",
  "Geriatric & Palliative Care Products",
  "Equipment for Supportive & Development Skills for Differently Abled Children",
  "Aids & Appliances for Hearing and/or Visually Challenged",
];

const undertakings = [
  "Setting up of Multidisciplinary CDC (Child Development Centre)",
  "Setting up Physiotherapy Units",
  "Occupational Therapy & Sensory Integration Rooms",
  "Artificial Intelligence Room for OT",
  "Immersive Room",
  "Multi-sensory Park",
  "Setting up indoor and outdoor play areas, kindergarten area",
  "Speech Therapy Rooms",
  "Lavatory Modifications",
  "Resource Room Strengthening",
  "Technical Assistance for various Rehabilitation and Pre-Vocational/Vocational Training Projects",
];

export function Services() {
  return (
    <section id="services" className="w-full py-20 md:py-28 bg-secondary/50 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm text-primary font-medium">
            Our Expertise
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Comprehensive Rehabilitation Services
          </h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            We offer a diverse range of specialized services and products
            tailored to meet the unique needs of each individual, alongside
            comprehensive setup and support projects.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <Card className="p-6 sm:p-8">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">
                We Undertake
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {undertakings.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="p-6 sm:p-8">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">
                Products & Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {productsAndServices.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
