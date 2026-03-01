import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { getLoginUrl } from "@/const";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="font-display text-2xl font-bold text-foreground">
            Tabaq
          </div>
          <div className="flex items-center gap-8">
            <Link href="/ritual" className="text-sm text-foreground hover:text-primary transition">
              The Ritual
            </Link>
            <Link href="/terroir" className="text-sm text-foreground hover:text-primary transition">
              Scent Terroir
            </Link>
            <Link href="/dna" className="text-sm text-foreground hover:text-primary transition">
              Brand DNA
            </Link>
            <Link href="/archive" className="text-sm text-foreground hover:text-primary transition">
              Archive Club
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663390356998/MrKhvcsBKfn3stqNS9Zs4e/tabaq-hero-bg-ixRhJp6aLFrHHJKFqTaVHe.webp"
            alt="Tabaq Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-2xl px-4">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-white font-accent">Global African Luxury</span>
          </div>
          
          <h1 className="font-display text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Art of Scent Ritual
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Discover the intersection of African heritage and global luxury. Tabaq transforms fragrance from a product into a ritual—a daily practice of self-discovery and sensory exploration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ritual">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                Explore the Ritual
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/dna">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Ritual Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-bold text-foreground mb-4">
              The Tabaq Scent Ritual
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A four-step journey to discover, layer, and refresh your signature scent. Like specialty coffee, Tabaq teaches you to become a connoisseur.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663390356998/MrKhvcsBKfn3stqNS9Zs4e/tabaq-ritual-visual-YsxYGhg3td8J6iiV4VvLkd.webp"
              alt="The Tabaq Ritual"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            {[
              {
                step: "Look",
                description: "Examine the scent profile. What notes call to you? What story does it tell?"
              },
              {
                step: "Lock",
                description: "Apply the 5ml oil roller to pulse points. This creates the foundation of your ritual."
              },
              {
                step: "Project",
                description: "Spray the 30ml EDT or 100ml Mist to amplify and project your signature scent."
              },
              {
                step: "Refresh",
                description: "Reapply throughout the day. The ritual becomes a meditation, a moment of self-care."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition">
                <div className="font-accent font-bold text-primary text-lg mb-2">
                  {item.step}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scent Terroir Preview */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-bold text-foreground mb-4">
              Scent Terroir
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Like wine and coffee, fragrance has terroir. Each Tabaq scent tells the story of its origin, harvest, and extraction.
            </p>
          </div>

          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663390356998/MrKhvcsBKfn3stqNS9Zs4e/tabaq-scent-terroir-X94Nqt3xsWC2puCCTUKVFw.webp"
            alt="Scent Terroir"
            className="w-full rounded-lg shadow-lg mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                origin: "Rwanda Highlands",
                profile: "Water Lily & Pistachio",
                description: "High-altitude botanicals create a fresh, crisp profile with subtle floral undertones."
              },
              {
                origin: "Morocco Desert",
                profile: "Golden Oud & Ginger",
                description: "Warm, spiced, and intensely aromatic. The heart of African luxury fragrance."
              },
              {
                origin: "Nigeria Coast",
                profile: "Coconut & Hibiscus",
                description: "Tropical, sensual, and unmistakably African. A celebration of coastal beauty."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-background p-8 rounded-lg border border-border hover:border-primary transition">
                <div className="text-primary font-accent font-bold text-sm mb-2 uppercase tracking-wider">
                  {item.origin}
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {item.profile}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/terroir">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                Explore All Origins
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Archive Club Section */}
      <section className="py-24 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-5xl font-bold text-foreground mb-6">
              Join the Archive Club
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Become a Tabaq collector. Receive exclusive access to limited-edition "Micro-Batch" scents, numbered reserve batches, and monthly connoisseur workshops. Each scent is produced once, archived, and never reproduced—turning fragrance into a collectible asset.
            </p>
            <Link href="/archive">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                Discover Archive Club
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Global DNA Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-bold text-foreground mb-4">
              The Global Brand DNA
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tabaq is built on the success principles of global luxury brands like Nespresso, TWG Tea, and Penfolds. We've decoded their DNA and applied it to fragrance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Ecosystem Lock-in",
                subtitle: "The Nespresso Model",
                description: "The Layering Kit is your gateway. 5ml oils and 30ml refills keep you engaged in the ritual, ensuring a lifetime of discovery."
              },
              {
                title: "Sensory Theater",
                subtitle: "The TWG Tea Model",
                description: "Artisanal packaging, a Scent Passport, and sommelier guidance transform fragrance into an immersive experience."
              },
              {
                title: "Investment Value",
                subtitle: "The Penfolds Model",
                description: "Numbered Reserve Batches and the Archive Club turn fragrances into collectible assets that never depreciate."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition">
                <div className="text-primary font-accent font-bold text-sm mb-2 uppercase tracking-wider">
                  {item.subtitle}
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/dna">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                Read the Full Blueprint
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-display text-2xl font-bold mb-4">Tabaq</div>
              <p className="text-sm text-background/80">
                Global African Luxury. The art of scent ritual.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Explore</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><Link href="/ritual" className="hover:text-background transition">The Ritual</Link></li>
                <li><Link href="/terroir" className="hover:text-background transition">Scent Terroir</Link></li>
                <li><Link href="/dna" className="hover:text-background transition">Brand DNA</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Community</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><Link href="/archive" className="hover:text-background transition">Archive Club</Link></li>
                <li><a href="#" className="hover:text-background transition">Workshops</a></li>
                <li><a href="#" className="hover:text-background transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-background transition">Privacy</a></li>
                <li><a href="#" className="hover:text-background transition">Terms</a></li>
                <li><a href="#" className="hover:text-background transition">Sustainability</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
            <p>&copy; 2026 Tabaq Fragrances. All rights reserved. Global African Luxury.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
