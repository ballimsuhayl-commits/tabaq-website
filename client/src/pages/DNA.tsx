import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function DNA() {
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
            <Link href="/dna" className="text-sm text-primary font-semibold">
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
            The Global Brand DNA
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Tabaq is built on the success principles of global luxury brands like Nespresso, TWG Tea, and Penfolds. We've decoded their DNA and applied it to fragrance, creating a brand that is standardized for quality but localized for resonance.
          </p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="font-display text-5xl font-bold text-foreground mb-12 text-center">
            The Three Strategic Pillars
          </h2>

          <div className="space-y-24">
            {[
              {
                pillar: "Ecosystem Lock-in",
                inspiration: "The Nespresso Model",
                description: "Nespresso transformed coffee consumption by creating a proprietary capsule system. The machine is the gateway; the capsules are the lifetime engagement. Tabaq applies this same principle to fragrance.",
                strategy: [
                  {
                    title: "The Layering Kit",
                    detail: "Your entry point into Tabaq. The kit includes 2x5ml oils, 1x30ml EDT, and 1x100ml Mist—everything you need for the complete ritual."
                  },
                  {
                    title: "The Refill Ecosystem",
                    detail: "5ml oil rollers and 30ml EDT refills encourage continuous engagement. You're not just buying fragrance; you're buying into a lifestyle."
                  },
                  {
                    title: "The Archive Club",
                    detail: "Exclusive access to limited-edition micro-batches and monthly connoisseur workshops. This is your lifetime engagement with Tabaq."
                  }
                ]
              },
              {
                pillar: "Sensory Theater",
                inspiration: "The TWG Tea Model",
                description: "TWG Tea transformed tea from a commodity into a luxury fashion statement. They do this through artisanal packaging, extreme variety, and educational curation. Tabaq brings the same theatrical approach to fragrance.",
                strategy: [
                  {
                    title: "Artisanal Packaging",
                    detail: "Each Tabaq kit features bespoke, minimalist design with tactile elements (textured paper, engraved glass) that evoke African luxury."
                  },
                  {
                    title: "The Scent Passport",
                    detail: "A beautifully designed, collectible item that tells the story of each scent's origin, terroir, and extraction method."
                  },
                  {
                    title: "Scent Sommelier Program",
                    detail: "Trained brand ambassadors guide you through the Tabaq Systematic Approach to Scent (TSAS), educating you on scent terroir and the layering ritual."
                  }
                ]
              },
              {
                pillar: "Investment Value",
                inspiration: "The Penfolds Model",
                description: "Penfolds created collectible wines that appreciate in value. Their tiered portfolio (from $20 entry-level to $150,000+ collectible Grange) captures both volume and prestige. Tabaq applies this to fragrance.",
                strategy: [
                  {
                    title: "Tiered Collections",
                    detail: "Discovery Sets (entry-level), Core Layering Kits (mid-tier), and Micro-Batch Series (limited edition) capture different consumer segments."
                  },
                  {
                    title: "Numbered Reserve Batches",
                    detail: "Each micro-batch is individually numbered and released in extremely limited quantities. Once sold out, the scent is archived, never to be reproduced."
                  },
                  {
                    title: "The Archive Club",
                    detail: "Members receive exclusive access to collectible batches, turning fragrances into desirable assets that appreciate in value."
                  }
                ]
              }
            ].map((item, idx) => (
              <div key={idx} className="border-b border-border pb-24 last:border-b-0">
                <div className="mb-12">
                  <div className="text-primary font-accent font-bold text-sm uppercase tracking-wider mb-2">
                    {item.inspiration}
                  </div>
                  <h2 className="font-display text-5xl font-bold text-foreground mb-6">
                    {item.pillar}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {item.strategy.map((strategy, i) => (
                    <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition">
                      <h3 className="font-display text-xl font-bold text-foreground mb-3">
                        {strategy.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {strategy.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global-Local */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="font-display text-5xl font-bold text-foreground mb-12 text-center">
            The Global-Local Paradox
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Global Standardization
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Maintain consistent product quality, packaging, and brand messaging across all markets. The Tabaq Layering Kit and TSAS will be universally applied, ensuring a recognizable and reliable luxury experience globally.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Consistent product formulations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Unified packaging design</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Universal brand narrative</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Standardized retail experience</span>
                </li>
              </ul>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Local Resonance
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Adapt marketing narratives and ingredient highlights to resonate with local cultural preferences. Emphasize specific African botanicals in African markets, and the exoticism of these ingredients in Western markets.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Localized marketing campaigns</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Cultural storytelling</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Regional ingredient highlights</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Community partnerships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Digital-First */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="font-display text-5xl font-bold text-foreground mb-12 text-center">
            Digital-First, Experiential-Second
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                E-commerce Dominance
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Build a robust, immersive e-commerce platform that seamlessly integrates the TSAS and Scent Passport digitally. Leverage AI-powered scent recommendations to guide online discovery, catering to the 773 million people expected to buy fragrance online by 2026.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>AI-powered scent discovery</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Interactive TSAS guides</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Personalized recommendations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Seamless checkout experience</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Strategic Physical Touchpoints
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Focus on high-impact physical experiences: pop-up stores during key cultural events, partnerships with luxury hotels, and curated concept stores in major cities.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>"Detty December" pop-ups in Ghana</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Luxury hotel partnerships (Rwanda)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Concept stores (Morocco, US, UK/EU)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Scent sommelier workshops</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container">
          <h2 className="font-display text-5xl font-bold text-foreground mb-12 text-center">
            Sustainability as a Core Value
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Regenerative Sourcing
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Go beyond "sustainable" to "regenerative" sourcing of African botanicals, investing in local communities and ecological restoration, similar to Nespresso's $20 million investment in DRC coffee production.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Direct partnerships with African farmers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Ecological restoration initiatives</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Fair-trade pricing and premiums</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Community investment programs</span>
                </li>
              </ul>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Refill & Recycle Program
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Implement a comprehensive refill program for the 30ml EDT and 100ml Mist, and a recycling initiative for all packaging, reinforcing Tabaq's commitment to environmental stewardship.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Refill discounts (10–15% off)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Packaging recycling program</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Glass bottle reuse initiatives</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Carbon-neutral shipping</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container text-center">
          <h2 className="font-display text-5xl font-bold text-foreground mb-6">
            Join the Tabaq Movement
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Tabaq is more than a fragrance brand. It's a movement toward intentional living, cultural celebration, and sustainable luxury. Join thousands of collectors who are transforming fragrance into a daily ritual.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            Get Started Today
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
