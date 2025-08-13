import React from "react";
import { cn } from "@/lib/utils";

const clients = [
  { name: "CSR Project – Cochin Shipyard" },
  { name: "Chittilapilly Foundation" },
  { name: "Bheema Jewellers" },
  { name: "INS Venduruthy – Kindergarten" },
  { name: "Christ Educational Institution, Bangalore" },
  { name: "Keltron Controls, Aroor, Alappuzha District" },
  { name: "Kerala State Industrial Enterprises, Cochin/Kottayam Business Centre" },
  { name: "CSR – Larsen and Toubro" },
  { name: "Arya Vaidya Nilayam, Madurai" },
  { name: "Kottakkal Ayurveda College" },
  { name: "Govt Ayurveda College, Putyakav, Ernakulam" },
  { name: "CSR – MIL Annamanda, Thrissur" },
  { name: "The South Indian Bank" },
  { name: "KPM Global Solutions, Infopark, Kochi" },
  { name: "Pushpagiri Medical College" },
  { name: "Believers Church Medical College, Thiruvalla" },
  { name: "Kripa Bhavan, Chunangamvely, Aluva" },
];

const Marquee = ({
  className,
  reverse,
  pauseOnHover = false,
  children,
  ...props
}: {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--gap:1rem] [--duration:30s]",
        className
      )}
    >
      <div
        className={cn("flex w-max animate-marquee items-center gap-[--gap]", {
          "group-hover:[animation-play-state:paused]": pauseOnHover,
          "[animation-direction:reverse]": reverse,
        })}
      >
        {children}
      </div>
      <div
        className={cn("flex w-max animate-marquee items-center gap-[--gap]", {
          "group-hover:[animation-play-state:paused]": pauseOnHover,
          "[animation-direction:reverse]": reverse,
        })}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
};

export function Clients() {
  return (
    <section id="clients" className="w-full py-20 md:py-28 bg-secondary/50 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Our Esteemed Clients
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            We are proud to partner with some of the most respected
            organizations, providing them with top-tier rehabilitation services
            and products.
          </p>
        </div>
        <div className="relative mt-12">
          <Marquee pauseOnHover>
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 text-center w-60"
              >
                <span className="text-base font-medium text-muted-foreground">
                  {client.name}
                </span>
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-secondary/50 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-secondary/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
