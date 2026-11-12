"use client";

import { useState } from "react";

const types = ["Web app", "Mobile app", "Consulting", "Something else"];

/** No backend: composes a mailto: link from the form and hands it to the visitor's mail client. */
export default function ContactForm({ email }: { email: string }) {
  const [type, setType] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Portfolio enquiry${type ? `: ${type}` : ""} from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required placeholder="Your name" autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" autoComplete="email" />
        </div>
      </div>

      <fieldset className="space-y-3">
        <legend>What do you need?</legend>
        <div className="flex flex-wrap gap-3">
          {types.map((t) => (
            <label key={t} className="radio-chip">
              <input type="radio" name="project" value={t} checked={type === t} onChange={() => setType(t)} />
              <span>{t}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={6} required placeholder="Tell me a little about the project, timeline, and what success looks like." />
      </div>

      <button type="submit" className="btn btn-dark">Send message</button>

      <p className="text-xs leading-relaxed opacity-60">
        This opens your email client. Prefer to write directly?{" "}
        <a className="underline" href={`mailto:${email}`}>{email}</a>
      </p>
    </form>
  );
}
