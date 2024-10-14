'use client';
import { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatusMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      {statusMessage && <div className="text-red-500">{statusMessage}</div>}
      {/* Input for Name */}
      <div className="relative flex items-center">
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <User className="absolute right-6" size={20} />
      </div>
      {/* Input for Email */}
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* Textarea for Message */}
      <div className="relative flex items-center">
        <Textarea
          name="message"
          placeholder="Type Your Message Here"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button type="submit" className="flex items-center gap-x-1 max-w-[166px]" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : "Let's Talk"}
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
