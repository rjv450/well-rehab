import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contact" className="w-full py-20 md:py-28 bg-secondary/50 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-8">
            <div>
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm text-primary font-medium">
                Contact Us
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                We're Here to Help
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Have questions or need to schedule an appointment? Reach out to
                us. We look forward to hearing from you.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-primary-foreground rounded-md p-2">
                    <Mail className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="mailto:mirarehabilitation@gmail.com"
                      className="hover:underline"
                    >
                      mirarehabilitation@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-primary-foreground rounded-md p-2">
                    <Phone className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Mobile/WhatsApp</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+919447399778" className="hover:underline">
                      +91 9447399778
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <a href="tel:+917012515788" className="hover:underline">
                      +91 7012515788
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-primary-foreground rounded-md p-2">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Our Office</h3>
                  <p className="text-muted-foreground">
                    MIRA REHABILITATION, 16/52 A Meledom Tower, Mulanthuruthy
                    P.O., Pin 682314, Ernakulam District, Kerala
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
