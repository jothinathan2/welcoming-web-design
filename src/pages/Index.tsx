import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Play, Calendar, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-church.jpg";
import communityImage from "@/assets/community.jpg";

const sermons = [
  { title: "Finding Peace in the Storm", speaker: "Pastor David Miller", date: "Mar 9, 2026", series: "Unshakeable Faith" },
  { title: "The Power of Community", speaker: "Pastor Sarah Johnson", date: "Mar 2, 2026", series: "Better Together" },
  { title: "Walking in Grace", speaker: "Pastor David Miller", date: "Feb 23, 2026", series: "Grace Unlimited" },
];

const events = [
  { title: "Easter Sunday Celebration", date: "Apr 5, 2026", time: "9:00 AM & 11:00 AM", description: "Join us for a special Easter celebration with worship, message, and activities for the whole family." },
  { title: "Community BBQ", date: "Mar 21, 2026", time: "12:00 PM", description: "A free outdoor BBQ for the whole neighborhood. Bring your friends and family!" },
  { title: "Women's Bible Study", date: "Every Tuesday", time: "10:00 AM", description: "A weekly study through the book of Philippians. All women welcome." },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <img src={heroImage} alt="Church sanctuary with warm wood beams and natural light" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 container text-center">
          <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80 animate-fade-in">
            Welcome to Gethsemane Global Ministries
          </p>
          <h1 className="font-heading text-5xl font-extrabold leading-tight text-primary-foreground md:text-7xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            You Belong Here
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/85 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            No matter where you are on your journey, you're welcome here. Come as you are and experience the love of a community that cares.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Plan Your Visit</Link>
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground" asChild>
              <Link to="/sermons"><Play size={18} /> Watch Online</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="bg-card border-b border-border">
        <div className="container py-12">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-center gap-4 rounded-xl bg-muted/50 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold">Sunday Services</h3>
                <p className="text-sm text-muted-foreground">7:00 AM – 9:00 AM</p>
                <p className="text-sm text-muted-foreground">9:00 AM – 12:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-muted/50 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold">Friday Fasting Prayer</h3>
                <p className="text-sm text-muted-foreground">10:00 AM – 1:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-muted/50 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                <MapPin className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-heading font-semibold">Location</h3>
                <p className="text-sm text-muted-foreground">Pollachi Kozhinjampara Road,<br />Kozhinjampara, Palakkad-678555, Kerala</p>
                <a href="https://jsdl.in/DT-99KJFUGS9ZP" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm font-medium text-primary hover:underline">Get Directions →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="container py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-wider text-accent">Who We Are</p>
            <h2 className="font-heading text-4xl font-bold leading-tight">
              A Family Rooted in Faith & Love
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              IPC Gethsemane Prayer House is more than a building — it's a family. For over 25 years, we've been a place where people can find hope, build lasting friendships, and grow in their faith together.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Whether you're taking your first steps in faith or have been walking with God for years, there's a place for you here.
            </p>
            <Button className="mt-6" variant="default" asChild>
              <Link to="/about">Learn More About Us <ArrowRight size={16} /></Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src={communityImage} alt="Church community gathering" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>




      {/* Upcoming Events */}
      <section className="container py-20">
        <div className="mb-10 text-center">
          <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-wider text-accent">What's Happening</p>
          <h2 className="font-heading text-4xl font-bold">Upcoming Events</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-md">
              <div className="mb-3 inline-block rounded-lg bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                {event.date}
              </div>
              <h3 className="font-heading text-lg font-semibold">{event.title}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{event.time}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary">
        <div className="container py-16 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Take the Next Step?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            We'd love to meet you. Plan your visit today and discover what IPC Gethsemane is all about.
          </p>
          <Button variant="hero" size="xl" className="mt-8" asChild>
            <Link to="/contact">Plan Your Visit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
