import Image from "next/image";

export function Gallery() {
  return (
    <section id="gallery" className="w-full py-20 md:py-28 bg-background px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary font-medium">
            Our Gallery
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            A Glimpse Into Our World
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Explore our state-of-the-art facilities and meet the dedicated team
            that makes MiRA Wellbeing a place of healing and hope.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-12">
          <div className="overflow-hidden rounded-xl shadow-lg group">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Our modern rehabilitation facility"
              data-ai-hint="rehabilitation facility"
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg group">
            <Image
              src="https://placehold.co/400x400.png"
              alt="A compassionate team member"
              data-ai-hint="therapist portrait"
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg group">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Sensory integration room"
              data-ai-hint="sensory room"
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg group">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Physiotherapy area"
              data-ai-hint="physiotherapy equipment"
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg group">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Our friendly reception"
              data-ai-hint="clinic reception"
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg group">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Team collaborating"
              data-ai-hint="medical team"
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg group">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Patient consultation"
              data-ai-hint="doctor patient"
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg group">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Group therapy session"
              data-ai-hint="group therapy"
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
