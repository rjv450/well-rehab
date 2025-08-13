import Link from "next/link";
import { Waves, Twitter, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="#home" className="flex items-center gap-2">
              <Waves className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">
                MiRA Rehabilitation
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your trusted partner in rehabilitation and recovery.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-headline">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary"
                >
                  Physiotherapy
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary"
                >
                  Occupational Therapy
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary"
                >
                  Sensory Products
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary"
                >
                  Prostheses & Orthoses
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-headline">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-muted-foreground hover:text-primary"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#clients"
                  className="text-muted-foreground hover:text-primary"
                >
                  Our Clients
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-headline">Contact Info</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <a href="mailto:mirarehabilitation@gmail.com" className="hover:underline">mirarehabilitation@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <a href="tel:+919447399778" className="hover:underline">+91 9447399778</a>
              </li>
              <li className="flex items-center gap-2">
                16/52 A Meledom Tower, Mulanthuruthy P.O, Kerala
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {currentYear} MiRA Rehabilitation. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
