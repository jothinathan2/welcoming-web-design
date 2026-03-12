import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Heart, BookOpen, Music, HandHelping, Baby } from "lucide-react";

const ministries = [
  { icon: Baby, title: "Kids Ministry", age: "Ages 0–11", description: "A safe, fun environment where children learn about God through interactive lessons, crafts, and worship.", color: "bg-accent/10 text-accent" },
  { icon: Users, title: "Youth Ministry", age: "Ages 12–18", description: "A vibrant community for teens to grow in faith, build friendships, and discover their purpose.", color: "bg-primary/10 text-primary" },
  { icon: BookOpen, title: "Small Groups", age: "All Ages", description: "Connect with others in a small group setting for Bible study, prayer, and authentic community.", color: "bg-gold/10 text-gold" },
  { icon: Music, title: "Worship Team", age: "All Ages", description: "Use your musical gifts to lead our congregation in worship. Vocalists and instrumentalists welcome.", color: "bg-primary/10 text-primary" },
  { icon: HandHelping, title: "Outreach & Missions", age: "All Ages", description: "Serve our local community and beyond through volunteer opportunities, food drives, and mission trips.", color: "bg-accent/10 text-accent" },
  { icon: Heart, title: "Care Ministry", age: "All Ages", description: "Support those in need through prayer, hospital visits, meals, and practical assistance.", color: "bg-gold/10 text-gold" },
];

const Ministries = () => {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="container text-center">
          <h1 className="font-heading text-5xl font-extrabold text-primary-foreground">Ministries</h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            There's a place for everyone to connect, grow, and serve.
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry, i) => (
            <div key={i} className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${ministry.color}`}>
                <ministry.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-xl font-semibold">{ministry.title}</h3>
              <span className="mt-1 inline-block text-xs font-medium text-muted-foreground">{ministry.age}</span>
              <p className="mt-3 text-muted-foreground leading-relaxed">{ministry.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="container text-center">
          <h2 className="font-heading text-3xl font-bold">Want to Get Involved?</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">We'd love to help you find the right place to plug in.</p>
          <Button variant="default" size="xl" className="mt-6" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Ministries;
