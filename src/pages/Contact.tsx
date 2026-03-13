import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-primary py-20">
        <div className="container text-center">
          <h1 className="font-heading text-5xl font-extrabold text-primary-foreground">Contact & Visit</h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            We'd love to hear from you or welcome you to Gethsemane Global Ministries.
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-3xl font-bold">Get in Touch</h2>
            <p className="mt-3 text-muted-foreground">Have a question or just want to say hello? Reach out anytime.</p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold">Address</h3>
                  <p className="text-sm text-muted-foreground">Pollachi Kozhinjampara Road,<br />Kozhinjampara, Palakkad-678555, Kerala</p>
                  <a href="https://jsdl.in/DT-99KJFUGS9ZP" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm font-medium text-primary hover:underline">Get Directions →</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold">Phone</h3>
                  <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">info@gracecommunity.org</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold">Service Times</h3>
                  <p className="text-sm text-muted-foreground">Sunday: 9:00 AM & 11:00 AM<br />Wednesday: 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.1234567890123!2d76.8440861!3d10.7359723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba841983d3fe01f%3A0x2c02c255ec56c7bb!2sGethsemane%20Global%20Ministries!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gethsemane Global Ministries Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-heading text-2xl font-bold">Send Us a Message</h2>
              <p className="mt-2 text-sm text-muted-foreground">Fill out the form below and we'll get back to you soon.</p>

              {submitted ? (
                <div className="mt-8 rounded-xl bg-primary/5 p-8 text-center">
                  <h3 className="font-heading text-xl font-semibold text-primary">Thank You!</h3>
                  <p className="mt-2 text-muted-foreground">We've received your message and will be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">Send Message</Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
