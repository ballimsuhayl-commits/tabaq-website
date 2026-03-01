import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Terroir() {
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
            <Link href="/terroir" className="text-sm text-primary font-semibold">
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
            Scent Terroir
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Like wine and coffee, fragrance has terroir. Each Tabaq scent tells the story of its origin, harvest, and extraction. We source from the finest African botanicals, each with a unique story and sensory profile.
          </p>
        </div>
      </section>

      {/* Terroir Visual */}
      <section className="py-24 bg-background">
        <div className="container">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663390356998/MrKhvcsBKfn3stqNS9Zs4e/tabaq-scent-terroir-X94Nqt3xsWC2puCCTUKVFw.webp"
            alt="Scent Terroir"
            className="w-full rounded-lg shadow-lg mb-12"
          />
        </div>
      </section>

      {/* Origins */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="font-display text-5xl font-bold text-foreground mb-12 text-center">
            The Three Origins
          </h2>

          <div className="space-y-24">
            {[
              {
                region: "Rwanda Highlands",
                climate: "High Altitude, Tropical",
                elevation: "1,500–2,500m",
                season: "Year-round",
                hero_note: "Water Lily & Pistachio",
                description: "The Rwanda Highlands are home to some of Africa's most pristine botanical gardens. High-altitude botanicals create a fresh, crisp profile with subtle floral undertones. The water lily blooms in the misty mornings, while pistachio notes add a nutty, sophisticated depth.",
                notes: [
                  { name: "Top Note", value: "Water Lily, Bergamot" },
                  { name: "Middle Note", value: "Pistachio, Green Tea" },
                  { name: "Base Note", value: "Cedarwood, Musk" }
                ],
                longevity: "6–8 hours",
                sillage: "Moderate",
                best_for: "Daily wear, fresh moments"
              },
              {
                region: "Morocco Desert",
                climate: "Arid, Hot",
                elevation: "500–1,200m",
                season: "Spring & Fall",
                hero_note: "Golden Oud & Ginger",
                description: "The Moroccan desert is the heart of African luxury fragrance. Warm, spiced, and intensely aromatic, these botanicals have been used in Moroccan rituals for centuries. Golden oud brings depth and mystery, while ginger adds warmth and spice.",
                notes: [
                  { name: "Top Note", value: "Ginger, Cinnamon" },
                  { name: "Middle Note", value: "Golden Oud, Saffron" },
                  { name: "Base Note", value: "Sandalwood, Amber" }
                ],
                longevity: "8–10 hours",
                sillage: "Strong",
                best_for: "Evening wear, special occasions"
              },
              {
                region: "Nigeria Coast",
                climate: "Tropical, Humid",
                elevation: "Sea Level–500m",
                season: "Year-round",
                hero_note: "Coconut & Hibiscus",
                description: "The Nigerian coast is a celebration of tropical beauty. Coconut brings a creamy, sensual quality, while hibiscus adds a floral, slightly tart character. These botanicals are harvested at peak ripeness to capture their full aromatic potential.",
                notes: [
                  { name: "Top Note", value: "Hibiscus, Lime" },
                  { name: "Middle Note", value: "Coconut, Jasmine" },
                  { name: "Base Note", value: "Vanilla, Coconut Husk" }
                ],
                longevity: "5–7 hours",
                sillage: "Moderate to Strong",
                best_for: "Daytime wear, warm climates"
              }
            ].map((origin, idx) => (
              <div key={idx} className="border-b border-border pb-24 last:border-b-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <div className="text-primary font-accent font-bold text-sm uppercase tracking-wider mb-2">
                      {origin.region}
                    </div>
                    <h2 className="font-display text-5xl font-bold text-foreground mb-6">
                      {origin.hero_note}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {origin.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">Climate</p>
                        <p className="text-foreground">{origin.climate}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">Elevation</p>
                        <p className="text-foreground">{origin.elevation}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">Season</p>
                        <p className="text-foreground">{origin.season}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">Longevity</p>
                        <p className="text-foreground">{origin.longevity}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {origin.notes.map((note, i) => (
                      <div key={i} className="bg-background p-6 rounded-lg border border-border">
                        <p className="text-xs uppercase tracking-wider text-primary font-bold mb-2">
                          {note.name}
                        </p>
                        <p className="text-foreground">
                          {note.value}
                        </p>
                      </div>
                    ))}
                    <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                      <p className="text-xs uppercase tracking-wider text-primary font-bold mb-2">
                        Sillage
                      </p>
                      <p className="text-foreground">
                        {origin.sillage}
                      </p>
                    </div>
                    <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                      <p className="text-xs uppercase tracking-wider text-primary font-bold mb-2">
                        Best For
                      </p>
                      <p className="text-foreground">
                        {origin.best_for}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extraction Methods */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="font-display text-5xl font-bold text-foreground mb-12 text-center">
            Extraction Methods
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                method: "Steam Distillation",
                description: "The traditional method used for delicate botanicals. Steam carries the aromatic compounds, which are then condensed and separated from water. This method preserves the natural complexity of the scent.",
                used_for: "Water Lily, Hibiscus, Jasmine"
              },
              {
                method: "Solvent Extraction",
                description: "Used for botanicals that cannot withstand heat. A solvent dissolves the aromatic compounds, which are then evaporated to leave behind a concentrated essence. This method captures the full depth of the scent.",
                used_for: "Oud, Saffron, Sandalwood"
              },
              {
                method: "Cold Pressing",
                description: "Used for citrus and spice botanicals. The plant material is mechanically pressed to release the aromatic oils. This method preserves the fresh, vibrant character of the scent.",
                used_for: "Ginger, Cinnamon, Bergamot, Lime"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {item.method}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>
                <p className="text-sm text-primary font-accent font-bold">
                  Used for: {item.used_for}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-5xl font-bold text-foreground mb-6">
              Regenerative Sourcing
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Tabaq is committed to regenerative sourcing of African botanicals. We invest in local communities and ecological restoration, ensuring that our supply chains support both people and planet. Every bottle of Tabaq represents a commitment to sustainable luxury.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              Learn About Our Impact
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container text-center">
          <h2 className="font-display text-5xl font-bold text-foreground mb-6">
            Explore Our Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Each origin has its own collection of scents. Discover which terroir speaks to you.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            Shop by Origin
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
