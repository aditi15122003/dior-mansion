"use client";

import { useState } from "react";

export default function AppointmentForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="font-display italic text-xl text-bone">
        Thank you — an advisor will write to you shortly.
      </p>
    );
  }

  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        type="email"
        required
        placeholder="Your email address"
        className="flex-1 bg-transparent border border-bone/30 px-5 py-3.5 text-sm placeholder:text-bone/40 focus-ring outline-none"
      />
      <button
        type="submit"
        className="bg-bone text-ebony px-7 py-3.5 text-[11px] tracked uppercase hover:bg-brass hover:text-bone transition-colors focus-ring"
      >
        Request Invitation
      </button>
    </form>
  );
}
