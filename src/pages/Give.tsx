import { Button } from "@/components/ui/button";
import { Heart, ShieldCheck, Lock } from "lucide-react";

const Give = () => {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="container text-center">
          <h1 className="font-heading text-5xl font-extrabold text-primary-foreground">Online Giving</h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Your generosity makes a difference in our community and beyond.
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
            <Heart className="h-10 w-10 text-accent" />
          </div>
          <h2 className="font-heading text-3xl font-bold">Give Generously</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Your tithes and offerings support our church's mission to share God's love through worship, outreach, missions, and community care.
          </p>

          <Button variant="gold" size="xl" className="mt-8">
            Give Now
          </Button>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <ShieldCheck className="mx-auto mb-3 h-8 w-8 text-primary" />
              <h3 className="font-heading font-semibold">Secure</h3>
              <p className="mt-1 text-sm text-muted-foreground">256-bit SSL encryption protects your information.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <Lock className="mx-auto mb-3 h-8 w-8 text-primary" />
              <h3 className="font-heading font-semibold">Private</h3>
              <p className="mt-1 text-sm text-muted-foreground">Your giving information is kept strictly confidential.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <Heart className="mx-auto mb-3 h-8 w-8 text-accent" />
              <h3 className="font-heading font-semibold">Tax-Deductible</h3>
              <p className="mt-1 text-sm text-muted-foreground">All gifts are tax-deductible. Receipts provided.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Give;
