import { useState } from 'react';
import { useToast } from './use-toast';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const sendMessage = async (formData: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: 'Success!',
          description: 'Your message has been sent successfully.',
        });
        return { success: true };
      } else {
        toast({
          title: 'Error',
          description: result.error || 'Failed to send message.',
          variant: 'destructive',
        });
        return { success: false, error: result.error };
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
      return { success: false, error: 'Network error' };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    sendMessage,
    isSubmitting,
  };
}