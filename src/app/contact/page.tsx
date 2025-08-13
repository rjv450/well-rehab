import { ContactForm } from '@/components/contact-form';
import { Toaster } from '@/components/ui/toaster';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-muted-foreground mt-2">
            Have a question or want to get in touch? We'd love to hear from you.
          </p>
        </div>
        <ContactForm />
      </div>
      <Toaster />
    </div>
  );
}