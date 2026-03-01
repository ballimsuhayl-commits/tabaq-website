import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Ritual() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="font-display text-2xl font-bold text-foreground hover:text-primary transition">
            Tabaq
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/ritual" className="text-sm text-primary font-semibold">
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

      {/* Hero */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <h1 className="font-display text-6xl font-bold text-foreground mb-6">
            The Tabaq Scent Ritual
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Fragrance is not just something you wear—it's a ritual, a meditation, a daily practice of self-discovery. The Tabaq Scent Ritual transforms how you experience scent by breaking it into four intentional steps: Look, Lock, Project, and Refresh.
          </p>
        </div>
      </section>

      {/* The Four Steps */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="space-y-24">
            {[
              {
                step: "01",
                title: "Look",
                subtitle: "Discover & Examine",
                description: "Begin by examining the scent profile. What notes call to you? What story does it tell? Use the Tabaq Scent Passport to explore the terroir, origin, and extraction method. This is your moment of discovery—take time to understand what you're about to experience.",
                details: [
                  "Examine the scent profile on the Scent Passport",
                  "Identify the top, middle, and base notes",
                  "Consider the terroir and cultural significance",
                  "Ask yourself: What does this scent mean to me?"
                ]
              },
              {
                step: "02",
                title: "Lock",
                subtitle: "Foundation & Commitment",
                description: "Apply the 5ml oil roller to your pulse points (wrists, neck, behind ears). This creates the foundation of your ritual. The oil is designed to last longer and create a base for the EDT or Mist to project from. This is your commitment to the scent.",
                details: [
                  "Apply 5ml oil roller to pulse points",
                  "Allow 30 seconds for the oil to settle",
                  "Feel the warmth of the fragrance on your skin",
                  "This foundation will last 6-8 hours"
                ]
              },
              {
                step: "03",
                title: "Project",
                subtitle: "Amplify & Share",
                description: "Spray the 30ml EDT or 100ml Mist to amplify and project your signature scent. The EDT is more concentrated for intimate wear, while the Mist is lighter and more diffusive. Choose based on your mood and environment. This is where your scent enters the world.",
                details: [
                  "Choose EDT for intimacy or Mist for projection",
                  "Spray 2-3 times on the upper body",
                  "Allow the spray to settle for 1-2 minutes",
                  "Your scent is now ready to be discovered by others"
                ]
              },
              {
                step: "04",
                title: "Refresh",
                subtitle: "Meditation & Renewal",
                description: "Reapply throughout the day. The ritual becomes a meditation, a moment of self-care. Each refresh is an opportunity to reconnect with your scent and yourself. This is the beauty of the Tabaq ritual—it's not a one-time application, but a continuous practice.",
                details: [
                  "Refresh every 4-6 hours with the Mist",
                  "Use the oil roller for deeper, longer-lasting coverage",
                  "Each refresh is a moment of mindfulness",
                  "The ritual becomes part of your daily practice"
                ]
              }
            ].map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {idx % 2 === 0 ? (
                  <>
                    <div>
                      <div className="text-6xl font-display font-bold text-primary/20 mb-4">
                        {item.step}
                      </div>
                      <h2 className="font-display text-5xl font-bold text-foreground mb-2">
                        {item.title}
                      </h2>
                      <p className="text-primary font-accent font-bold text-lg mb-6">
                        {item.subtitle}
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {item.description}
                      </p>
                      <ul className="space-y-3">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex gap-3 text-muted-foreground">
                            <span className="text-primary font-bold">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white p-8 rounded-lg border border-border h-96 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <div className="text-6xl mb-4">✨</div>
                        <p className="font-accent font-bold">{item.title}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-white p-8 rounded-lg border border-border h-96 flex items-center justify-center order-2 md:order-1">
                      <div className="text-center text-muted-foreground">
                        <div className="text-6xl mb-4">✨</div>
                        <p className="font-accent font-bold">{item.title}</p>
                      </div>
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="text-6xl font-display font-bold text-primary/20 mb-4">
                        {item.step}
                      </div>
                      <h2 className="font-display text-5xl font-bold text-foreground mb-2">
                        {item.title}
                      </h2>
                      <p className="text-primary font-accent font-bold text-lg mb-6">
                        {item.subtitle}
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {item.description}
                      </p>
                      <ul className="space-y-3">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex gap-3 text-muted-foreground">
                            <span className="text-primary font-bold">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Layering Kit */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container">
          <h2 className="font-display text-5xl font-bold text-foreground mb-12 text-center">
            The Tabaq Layering Kit
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                product: "2x 5ml Oil Rollers",
                description: "The foundation. Apply to pulse points for a long-lasting base that can last 6-8 hours. Each roller contains a different scent profile from the same origin.",
                price: "Part of Kit"
              },
              {
                product: "1x 30ml EDT",
                description: "The intimate layer. More concentrated than the Mist, the EDT is perfect for close encounters and personal moments. Lasts 4-6 hours.",
                price: "Part of Kit"
              },
              {
                product: "1x 100ml Mist",
                description: "The projection. Light, diffusive, and perfect for all-day wear. Reapply throughout the day as part of your ritual. Lasts 2-3 hours per application.",
                price: "Part of Kit"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-background p-8 rounded-lg border border-border hover:border-primary transition">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {item.product}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>
                <p className="text-primary font-accent font-bold">
                  {item.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              The Complete Kit: R1,850 – R2,150
            </h3>
            <p className="text-muted-foreground mb-6">
              The Tabaq Layering Kit is designed as a complete ecosystem. Each component is engineered to work together, creating a ritual that lasts all day. The kit is your entry point into the Tabaq world—and your gateway to the Archive Club.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              Explore Pricing
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container text-center">
          <h2 className="font-display text-5xl font-bold text-foreground mb-6">
            Ready to Begin Your Ritual?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover your signature scent and join thousands of Tabaq collectors who are transforming fragrance into a daily practice of self-discovery.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            Get Your Layering Kit
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container text-center text-sm text-background/60">
          <p>&copy; 2026 Tabaq Fragrances. All rights reserved. Global African Luxury.</p>
        </div>
      </footer>
    </div>
  );
}
