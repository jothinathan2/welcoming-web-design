import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary">
                <span className="text-sm font-bold text-primary-foreground">✝</span>
              </div>
              <span className="font-heading text-lg font-bold">Gethsemane Global Ministries</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A place where everyone is welcome. Join us as we grow in faith together.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/about", label: "About Us" },
                { to: "/ministries", label: "Ministries" },
                { to: "/sermons", label: "Sermons" },
                { to: "/give", label: "Online Giving" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-3">Service Times</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><span className="font-medium text-foreground">Sunday:</span> 9:00 AM & 11:00 AM</p>
              <p><span className="font-medium text-foreground">Wednesday:</span> 7:00 PM</p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Pollachi Kozhinjampara Road,</p>
              <p>Kozhinjampara, Palakkad-678555, Kerala</p>
              <p>info@gracecommunity.org</p>
              <p>(555) 123-4567</p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-3">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Gethsemane Global Ministries. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
