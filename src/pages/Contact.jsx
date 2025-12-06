import React from "react";

export default function Contact() {
  return (
    <div className="page-shell">
      <header className="section-header">
        <h2 className="section-title">Contact</h2>
        <p className="section-desc">
          Ready to elevate everything? Tell us what your business needs next.
        </p>
      </header>

      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you! We will get back to you shortly.");
        }}
      >
        {/* Name */}
        <div className="field">
          <label>Your Name</label>
          <input required type="text" placeholder="Enter your full name" />
        </div>

        {/* Email */}
        <div className="field">
          <label>Email</label>
          <input required type="email" placeholder="example@company.com" />
        </div>

        {/* Service Type */}
        <div className="field">
          <label>Service Type</label>
          <select required>
            <option value="">Select one</option>
            <option value="velano_web">Velano — Web Systems</option>
            <option value="velano_sites">Velano — Websites</option>
            <option value="inkforge_branding">InkForge — Branding</option>
            <option value="inkforge_rebrand">InkForge — Re-Branding</option>
            <option value="inkforge_graphic">InkForge — Graphic Design</option>
          </select>
        </div>

        {/* Message */}
        <div className="field">
          <label>Project Details</label>
          <textarea rows="5" placeholder="Tell us about your project..." />
        </div>

        <button type="submit" className="btn-primary">
          Submit Request
        </button>
      </form>
    </div>
  );
}