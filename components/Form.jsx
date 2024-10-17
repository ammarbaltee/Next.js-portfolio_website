'use client';
import React from 'react';
import { useFormContext } from '@/hooks/FormContext'; 
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, MessageSquare, ArrowRightIcon } from 'lucide-react';

const Form = () => {
  const { formData, handleChange, handleSubmit, isSubmitting } = useFormContext();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="flex h-[54px] w-full rounded-full border border-input bg-background px-8 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <User className="absolute right-6" />
      </div>

      <div className="relative flex items-center">
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="flex h-[54px] w-full rounded-full border border-input bg-background px-8 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <MailIcon className="absolute right-6" />
      </div>

      <div className="relative flex items-center">
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type Your Message Here"
          required
          className="flex min-h-[180px] w-full rounded-[30px] border border-input bg-background px-8 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <MessageSquare className="absolute top-4 right-6" />
      </div>

      <Button type="submit" disabled={isSubmitting} className="justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2 flex items-center gap-x-1 max-w-[166px]">
        Let's Talk <ArrowRightIcon />
      </Button>

    </form>
  );
};

export default Form;
