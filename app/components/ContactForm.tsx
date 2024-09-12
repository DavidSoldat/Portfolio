'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;

    if (id in formData) {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setError('Failed to send your message.');
      }
    } catch (error) {
      setError('An error occurred while sending your message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
      <div>
        <label className="mb-2 block font-medium" htmlFor="name">
          Your name
        </label>
        <input
          required
          placeholder="Your name"
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />
      </div>
      <div>
        <label className="mb-2 block font-medium" htmlFor="email">
          Your email
        </label>
        <input
          required
          placeholder="name@example.com"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />
      </div>
      <div>
        <label className="mb-2 block font-medium" htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          placeholder="Let me know if I can help you"
          value={formData.subject}
          onChange={handleChange}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />
      </div>
      <div>
        <label className="mb-2 block font-medium" htmlFor="message">
          Your message
        </label>
        <textarea
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          id="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-purple-300 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 dark:bg-purple-500 dark:text-gray-900 dark:hover:bg-purple-400"
      >
        {loading ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
}
