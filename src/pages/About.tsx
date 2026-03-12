import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, BookOpen, Users } from "lucide-react";
import communityImage from "@/assets/community.jpg";

const beliefs = [
  { icon: BookOpen, title: "The Bible", description: "We believe the Bible is the inspired Word of God and the ultimate authority for life and faith." },
  { icon: Heart, title: "Salvation by Grace", description: "We believe salvation is a gift from God, received through faith in Jesus Christ alone." },
  { icon: Users, title: "The Church", description: "We believe the Church is the body of Christ, called to worship, serve, and share the gospel." },
];

const team = [
  { name: "Pastor David Miller", role: "Senior Pastor", bio: "David has been serving at IPC Gethsemane Prayer House for 15 years with a passion for teaching and community." },
  { name: "Sarah Johnson", role: "Worship Director", bio: "Sarah leads our worship team with creativity and a heart for authentic, God-centered worship." },
  { name: "James Thompson", role: "Youth Pastor", bio: "James brings energy and purpose to our student ministry, mentoring the next generation." },
  { name: "Maria Rodriguez", role: "Children's Director", bio: "Maria creates fun, safe environments where kids can learn about God's love." },
];

const About = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary py-20">
        <div className="container text-center">
          <h1 className="font-heading text-5xl font-extrabold text-primary-foreground">About Us</h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Get to know the heart behind IPC Gethsemane Prayer House.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img src={communityImage} alt="Church community" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-wider text-accent">Our Story</p>
            <h2 className="font-heading text-4xl font-bold">Rooted in Faith Since 2001</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              IPC Gethsemane Prayer House began with a small group of families who shared a dream — to build a church where everyone feels welcome, valued, and loved.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              From a living room Bible study to a thriving congregation, our story is one of God's faithfulness. Today, we continue to grow as a community committed to worship, service, and making a difference in our city.
            </p>
          </div>
        </div>
      </section>

      {/* Our Beliefs */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <div className="mb-10 text-center">
            <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-wider text-accent">What We Believe</p>
            <h2 className="font-heading text-4xl font-bold">Our Beliefs</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {beliefs.map((belief, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <belief.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">{belief.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{belief.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="container py-20">
        <div className="mb-10 text-center">
          <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-wider text-accent">Leadership</p>
          <h2 className="font-heading text-4xl font-bold">Meet Our Team</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-md">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
                <Users className="h-10 w-10 text-muted-foreground/50" />
              </div>
              <h3 className="font-heading font-semibold">{member.name}</h3>
              <p className="text-sm font-medium text-accent">{member.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground">Come Visit Us This Sunday</h2>
          <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80">We'd love to welcome you in person.</p>
          <Button variant="hero" size="xl" className="mt-6" asChild>
            <Link to="/contact">Plan Your Visit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
