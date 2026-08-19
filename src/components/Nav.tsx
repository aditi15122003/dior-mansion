"use client";

import { useState } from "react";

const LINKS = [
  { href: "#maison", label: "The Maison" },
  { href: "#collection", label: "Collection" },
  { href: "#atelier", label: "Atelier" },
  { href: "#appointment", label: "Private Viewing" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bone/90 backdrop-blur-sm border-b border-ebony/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          className="font-display tracked text-lg md:text-xl text-ebony focus-ring rounded-sm"
        >
          DIOR&nbsp;MAISON
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] tracked uppercase text-ebony/70 hover:text-ebony transition-colors focus-ring rounded-sm"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#appointment"
          className="hidden md:inline-flex items-center border border-ebony px-5 py-2 text-[11px] tracked uppercase text-ebony hover:bg-ebony hover:text-bone transition-colors focus-ring"
        >
          Request Appointment
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2 focus-ring"
        >
          <span
            className={`block h-px w-6 bg-ebony transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ebony transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 bg-ebony transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-ebony/10 bg-bone px-5 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xs tracked uppercase text-ebony/80 focus-ring rounded-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#appointment"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center border border-ebony px-5 py-3 text-[11px] tracked uppercase text-ebony focus-ring"
          >
            Request Appointment
          </a>
        </nav>
      )}
    </header>
  );
}
