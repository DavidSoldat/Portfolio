'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { FormData } from '../lib/types';

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
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
    setError(null);
    setSuccess(null);

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
        setError('Failed to send your message. Please try again.');
      }
    } catch (error) {
      setError('An error occurred while sending your message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <form
        onSubmit={handleSubmit}
        className="relative space-y-6 rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-2xl dark:border-gray-800 dark:bg-gray-900/75"
      >
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        <div className="relative">
          <label
            className={`pointer-events-none absolute left-4 transition-all duration-200 ${
              focusedField === 'name' || formData.name
                ? '-top-2.5 bg-white px-2 text-xs text-purple-600 dark:bg-gray-900 dark:text-purple-400'
                : 'top-3 text-sm text-gray-500 dark:text-gray-400'
            }`}
            htmlFor="name"
          >
            Your name *
          </label>
          <input
            required
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            className="block w-full rounded-xl border-2 border-gray-200 bg-transparent px-4 py-3 text-gray-900 transition-all duration-200 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 dark:border-gray-700 dark:text-white"
          />
        </div>

        <div className="relative">
          <label
            className={`pointer-events-none absolute left-4 transition-all duration-200 ${
              focusedField === 'email' || formData.email
                ? '-top-2.5 bg-white px-2 text-xs text-purple-600 dark:bg-gray-900 dark:text-purple-400'
                : 'top-3 text-sm text-gray-500 dark:text-gray-400'
            }`}
            htmlFor="email"
          >
            Your email *
          </label>
          <input
            required
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            className="block w-full rounded-xl border-2 border-gray-200 bg-transparent px-4 py-3 text-gray-900 transition-all duration-200 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 dark:border-gray-700 dark:text-white"
          />
        </div>

        <div className="relative">
          <label
            className={`pointer-events-none absolute left-4 transition-all duration-200 ${
              focusedField === 'subject' || formData.subject
                ? '-top-2.5 bg-white px-2 text-xs text-purple-600 dark:bg-gray-900 dark:text-purple-400'
                : 'top-3 text-sm text-gray-500 dark:text-gray-400'
            }`}
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            onFocus={() => setFocusedField('subject')}
            onBlur={() => setFocusedField(null)}
            className="block w-full rounded-xl border-2 border-gray-200 bg-transparent px-4 py-3 text-gray-900 transition-all duration-200 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 dark:border-gray-700 dark:text-white"
          />
        </div>

        <div className="relative">
          <label
            className={`pointer-events-none absolute left-4 transition-all duration-200 ${
              focusedField === 'message' || formData.message
                ? '-top-2.5 bg-white px-2 text-xs text-purple-600 dark:bg-gray-900 dark:text-purple-400'
                : 'top-3 text-sm text-gray-500 dark:text-gray-400'
            }`}
            htmlFor="message"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            className="block w-full resize-none rounded-xl border-2 border-gray-200 bg-transparent px-4 py-3 text-gray-900 transition-all duration-200 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 dark:border-gray-700 dark:text-white"
          />
        </div>

        {error && (
          <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <svg
              className="h-5 w-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
          </div>
        )}

        {success && (
          <div className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
            <svg
              className="h-5 w-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm text-green-700 dark:text-green-400">
              {success}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="group relative w-full overflow-hidden rounded-xl bg-purple-400 dark:bg-purple-600 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:shadow-purple-500/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {loading ? (
              <>
                <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </>
            )}
          </span>

          <div className="absolute inset-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-full">
            <div className="h-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </button>
      </form>
    </div>
  );
}
