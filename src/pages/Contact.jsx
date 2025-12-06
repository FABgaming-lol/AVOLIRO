import React from "react";

export default function Contact() {
  return (
    <div className="page-shell">
      <header className="section-header">
        <h2 className="section-title">Start a Project</h2>
        <p className="section-desc">
          Ready to elevate everything? Let’s build what your business needs next.
        </p>
      </header>

      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you! We will get back to you shortly.");
        }}
      >
        <div className="field">
          <label>Your Name</label>
          <input required type="text" placeholder="Enter full name" />
        </div>

        <div className="field">
          <label>Email</label>
          <input required type="email" placeholder="name@company.com" />
        </div>

        <div className="field">
          <label>Brand / Service</label>
          <select required>
            <option value="">Select</option>
            <option value="velano">Velano — Web & Digital Systems</option>
            <option value="inkforge-brand">InkForge — Branding</option>
            <option value="inkforge-rebrand">InkForge — Rebranding</option>
            <option value="inkforge-graphic">InkForge — Graphic Design</option>
          </select>
        </div>

        <div className="field">
          <label>Message</label>
          <textarea rows="5" placeholder="Tell us about your project..."></textarea>
        </div>

        <button type="submit" className="btn-primary">
          Submit Request
        </button>
      </form>
    </div>
  );
}