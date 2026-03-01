import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import WaitlistForm from "@/components/WaitlistForm";
import ScentQuiz from "@/components/ScentQuiz";

export default function Archive() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="font-display text-2xl font-bold text-foreground hover:text-primary transition">
            Tabaq
          </Link>
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
            <Link href="/archive" className="text-sm text-primary font-semibold">
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
            The Archive Club
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Become a Tabaq collector. Receive exclusive access to limited-edition "Micro-Batch" scents, numbered reserve batches, and monthly connoisseur workshops. Each scent is produced once, archived, and never reproduced—turning fragrance into a collectible asset.
          </p>
        </div>
      </section>

      {/* The Concept */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="font-display text-5xl font-bold text-foreground mb-12 text-center">
            What is the Archive Club?
          </h2>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The Archive Club is inspired by the investment value of fine wines and collectible art. Each micro-batch is produced in extremely limited quantities, assigned a unique batch number, and released for a limited time. Once sold out, the scent is archived in our digital library, never to be produced again.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              This creates a powerful incentive for collectors: each scent is a one-time opportunity. Miss it, and it's gone forever. This is how we turn fragrance from a consumable into a collectible asset.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Archive Club members receive early access to these micro-batches, exclusive pricing, and invitations to monthly connoisseur workshops where we explore the art and science of fragrance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Limited Production",
                description: "Each micro-batch is produced in quantities of 100–500 units only. Once sold out, it's archived forever."
              },
              {
                title: "Numbered Batches",
                description: "Every bottle is individually numbered (e.g., Batch #001: The Great Karoo Harvest). This creates collectibility and authenticity."
              },
              {
                title: "Investment Value",
                description: "As batches sell out and become rare, their secondary market value increases. Collectors can trade or sell their bottles."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="font-display text-5xl font-bold text-foreground mb-12 text-center">
            Membership Tiers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tier: "Curator",
                price: "R500/month",
                description: "Perfect for those beginning their fragrance journey.",
                features: [
                  "Early access to micro-batches (48 hours before public)",
                  "10% discount on all purchases",
                  "Monthly Scent Passport (digital)",
                  "Access to Curator workshops (quarterly)",
                  "Exclusive Curator badge on profile"
                ],
                cta: "Start as Curator"
              },
              {
                tier: "Connoisseur",
                price: "R1,200/month",
                description: "For serious collectors and fragrance enthusiasts.",
                features: [
                  "Early access to micro-batches (1 week before public)",
                  "15% discount on all purchases",
                  "Monthly Scent Passport (physical + digital)",
                  "Monthly connoisseur workshops (in-person & virtual)",
                  "Exclusive Connoisseur badge + priority customer support",
                  "Quarterly limited-edition exclusive scent"
                ],
                cta: "Join as Connoisseur",
                featured: true
              },
              {
                tier: "Archivist",
                price: "R2,500/month",
                description: "For elite collectors and fragrance connoisseurs.",
                features: [
                  "Lifetime early access to all micro-batches",
                  "20% discount on all purchases",
                  "Monthly Scent Passport (physical + digital + leather case)",
                  "Weekly connoisseur workshops + private consultations",
                  "Exclusive Archivist badge + VIP concierge service",
                  "Monthly limited-edition exclusive scent",
                  "Invitation to annual Tabaq Gala (all-expenses-paid)"
                ],
                cta: "Become an Archivist"
              }
            ].map((tier, idx) => (
              <div key={idx} className={`rounded-lg border transition ${
                tier.featured 
                  ? "bg-primary/5 border-primary shadow-lg scale-105" 
                  : "bg-background border-border"
              } p-8`}>
                <div className="mb-6">
                  <h3 className="font-display text-3xl font-bold text-foreground mb-2">
                    {tier.tier}
                  </h3>
                  <p className="text-primary font-accent font-bold text-2xl mb-3">
                    {tier.price}
                  </p>
                  <p className="text-muted-foreground">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    tier.featured 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scent Quiz Section */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container">
          <h2 className="font-display text-5xl font-bold text-foreground mb-12 text-center">
            Discover Your Terroir
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12 leading-relaxed">
            Not sure which terroir speaks to you? Take our interactive quiz to discover your perfect Tabaq fragrance profile based on your preferences, climate, and scent personality.
          </p>
          <div className="max-w-2xl mx-auto">
            <ScentQuiz />
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container">
          <h2 className="font-display text-5xl font-bold text-foreground mb-12 text-center">
            Founding Member Waitlist
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12 leading-relaxed">
            Join our exclusive founding member waitlist and receive early-bird pricing, lifetime benefits, and first access to limited-edition micro-batches. Be part of the Tabaq movement from day one.
          </p>
          <div className="max-w-2xl mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Monthly Collections */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="font-display text-5xl font-bold text-foreground mb-12 text-center">
            Monthly Micro-Batch Releases
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12 leading-relaxed">
            Every month, Tabaq releases a new micro-batch scent. These are limited-edition, numbered releases that are available exclusively to Archive Club members for the first week, then to the public for a limited time.
          </p>

          <div className="space-y-8">
            {[
              {
                batch: "Batch #001",
                name: "The Great Karoo Harvest",
                origin: "South Africa",
                profile: "Rooibos & Desert Rose",
                quantity: "250 units",
                price: "R2,200",
                status: "Sold Out",
                released: "January 2026"
              },
              {
                batch: "Batch #002",
                name: "Rwanda Mist",
                origin: "Rwanda",
                profile: "Water Lily & Pistachio",
                quantity: "300 units",
                price: "R2,200",
                status: "Available",
                released: "February 2026"
              },
              {
                batch: "Batch #003",
                name: "Moroccan Spice",
                origin: "Morocco",
                profile: "Golden Oud & Ginger",
                quantity: "200 units",
                price: "R2,200",
                status: "Coming March 2026",
                released: "March 2026"
              }
            ].map((batch, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-border hover:border-primary transition">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-primary font-accent font-bold text-sm uppercase tracking-wider mb-2">
                      {batch.batch}
                    </div>
                    <h3 className="font-display text-3xl font-bold text-foreground mb-2">
                      {batch.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {batch.profile}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">Origin</p>
                        <p className="text-foreground">{batch.origin}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">Quantity</p>
                        <p className="text-foreground">{batch.quantity}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">Price</p>
                        <p className="text-foreground">{batch.price}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">Released</p>
                        <p className="text-foreground">{batch.released}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="bg-background p-6 rounded-lg border border-border mb-4">
                      <p className="text-sm text-muted-foreground mb-2">Status</p>
                      <p className={`font-bold text-lg ${
                        batch.status === "Sold Out" ? "text-red-600" :
                        batch.status === "Available" ? "text-green-600" :
                        "text-blue-600"
                      }`}>
                        {batch.status}
                      </p>
                    </div>
                    {batch.status === "Available" && (
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                        Add to Cart
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    )}
                    {batch.status === "Sold Out" && (
                      <Button variant="outline" disabled>
                        Sold Out
                      </Button>
                    )}
                    {batch.status.includes("Coming") && (
                      <Button variant="outline" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connoisseur Workshops */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container">
          <h2 className="font-display text-5xl font-bold text-foreground mb-12 text-center">
            Connoisseur Workshops
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12 leading-relaxed">
            Archive Club members receive exclusive access to monthly workshops where we explore the art and science of fragrance. Topics range from scent terroir and extraction methods to advanced layering techniques and fragrance investment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Scent Terroir Masterclass",
                description: "Explore the origins, climates, and extraction methods that define each scent. Learn how terroir influences fragrance, just like it does in wine.",
                frequency: "Monthly"
              },
              {
                title: "Advanced Layering Techniques",
                description: "Master the art of combining multiple Tabaq scents to create unique, personalized fragrance profiles. Learn from our scent sommeliers.",
                frequency: "Bi-weekly"
              },
              {
                title: "Fragrance Investment Workshop",
                description: "Understand how to build a collectible fragrance portfolio. Learn about batch rarity, secondary market trends, and investment value.",
                frequency: "Quarterly"
              },
              {
                title: "Private Consultations (Archivist Only)",
                description: "One-on-one sessions with our head perfumer to create a custom scent profile or explore rare, unreleased fragrances.",
                frequency: "By appointment"
              }
            ].map((workshop, idx) => (
              <div key={idx} className="bg-background p-8 rounded-lg border border-border hover:border-primary transition">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {workshop.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {workshop.description}
                </p>
                <p className="text-sm text-primary font-accent font-bold">
                  {workshop.frequency}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container text-center">
          <h2 className="font-display text-5xl font-bold text-foreground mb-6">
            Ready to Join the Archive Club?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Start your journey as a Tabaq collector today. Choose your membership tier and gain exclusive access to limited-edition micro-batches, connoisseur workshops, and a community of fragrance enthusiasts.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            Join the Archive Club
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
