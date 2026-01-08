import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cream border-t border-border">
      <div className="container-luxury py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider block mb-6">
              LUMIÈRE
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Curated furniture for the modern home. Timeless design meets exceptional craftsmanship.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              {["Sofas", "Chairs", "Tables", "Beds", "Lighting", "Decor"].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/care-guide" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Care Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/trade" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Trade Program
                </Link>
              </li>
              <li>
                <Link to="/gift-cards" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Maison. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookie-settings" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
