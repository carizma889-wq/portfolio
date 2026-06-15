import { useState } from "react";
import { contact } from "../assets/assets";
// ─── EMAILJS CONFIG ───────────────────────────
const EMAILJS_SERVICE  = "service_obq9yh9";
const EMAILJS_TEMPLATE = "template_i4gf3y9";
const EMAILJS_KEY      = "q_Z7aVghN7oKret6W";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", title: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const now = new Date();
    const time = now.toLocaleString("ar-EG", {
      weekday: "long", year: "numeric", month: "long",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    });

    const payload = {
      service_id:  EMAILJS_SERVICE,
      template_id: EMAILJS_TEMPLATE,
      user_id:     EMAILJS_KEY,
      template_params: { name: form.name, email: form.email, title: form.title, message: form.message, time },
    };

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", title: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact">
      <div className="contact__inner">
        <div className="reveal">
          <div className="section-label">Contact</div>
          <h2 className="section-title">Let's talk 👋</h2>
          <p className="section-sub">
            Do you have an idea or project? Or even just a question? I'm here. I'll reply within 24 hours.
          </p>
        </div>

        <form className="contact__form reveal" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>name</label>
              <input name="name" type="text" placeholder="Ahmed Mohamed"
                value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>gmail</label>
              <input name="email" type="email" placeholder="ahmed@example.com"
                value={form.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label>the topic</label>
            <input name="title" type="text" placeholder="New project / Inquiry / Collaboration ..."
              value={form.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>messege</label>
            <textarea name="message" placeholder="Write your message here..."
              value={form.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn--primary"
            style={{ alignSelf: "flex-start" }}
            disabled={status === "loading"}>
            <span>
              {status === "loading" && "⏳ Sending..."}
              {status === "sent"    && "✅ Sent!"}
              {status === "error"   && "❌ An error occurred, please try again."}
              {status === "idle"    && "Send message"}
            </span>
            {status === "idle" && " →"}
          </button>
        </form>

        <div className="contact__socials reveal">
          {contact.map((s) => (
            <a key={s.label} href={s.href} title={s.label}><img width={"30px"} height={"30px"} src={s.icon} alt="" /></a>
          ))}
        </div>
      </div>
    </section>
  );
}