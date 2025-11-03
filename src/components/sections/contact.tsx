'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';

import { submitContactForm } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, Send } from 'lucide-react';

const initialState = {
  message: null,
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} size="lg">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Send Message
    </Button>
  );
}

export default function Contact() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && !state.errors) {
      toast({
        title: 'Success!',
        description: state.message,
      });
    } else if (state.message && state.errors) {
       toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <section id="contact">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">Have a question or want to work together? Send me a message!</p>
        </div>
        <form action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" type="text" placeholder="Your Name" required />
              {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="Your Email" required />
               {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Your message..." rows={5} required />
             {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
          </div>
          <div className="text-center">
            <SubmitButton />
          </div>
        </form>
      </div>
    </section>
  );
}
