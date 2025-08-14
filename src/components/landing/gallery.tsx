import Image from "next/image";
import gallery1 from "@/assets/images/gallery/gallery1.jpeg";
import gallery2 from "@/assets/images/gallery/gallery2.jpeg";
import gallery3 from "@/assets/images/gallery/gallery3.jpeg";
import gallery4 from "@/assets/images/gallery/gallery4.jpeg";
import gallery5 from "@/assets/images/gallery/gallery5.jpeg";
import gallery6 from "@/assets/images/gallery/gallery6.jpeg";
import gallery7 from "@/assets/images/gallery/gallery7.jpeg";
import gallery8 from "@/assets/images/gallery/gallery8.jpeg";

export function Gallery() {
  return (
    <section id="gallery" className="w-full py-20 md:py-28 bg-background px-4 md:px-6 lg:px-24">
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
              src={gallery1}
              alt="Our modern rehabilitation facility"
              data-ai-hint="rehabilitation facility"
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg group">
            <Image
              src={gallery2}
              alt="A compassionate team member"
              data-ai-hint="therapist portrait"
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg group">
            <Image
              src={gallery3}
              alt="Sensory integration room"
              data-ai-hint="sensory room"
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg group">
            <Image
              src={gallery4}
              alt="Physiotherapy area"
              data-ai-hint="physiotherapy equipment"
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg group">
            <Image
              src={gallery5}
              alt="Our friendly reception"
              data-ai-hint="clinic reception"
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg group">
            <Image
              src={gallery6}
              alt="Team collaborating"
              data-ai-hint="medical team"
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg group">
            <Image
              src={gallery7}
              alt="Patient consultation"
              data-ai-hint="doctor patient"
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg group">
            <Image
              src={gallery8}
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
