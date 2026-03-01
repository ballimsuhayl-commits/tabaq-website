import { Button } from "@/components/ui/button";
import { Mail, Check } from "lucide-react";
import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [tier, setTier] = useState("Connoisseur");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate API call - in production, this would send to your backend
    try {
      // Validate email
      if (!email || !email.includes("@")) {
        setError("Please enter a valid email address");
        setLoading(false);
        return;
      }

      // Simulate 1 second delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitted(true);
      setEmail("");
      setTier("Connoisseur");

      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 rounded-full p-3">
            <Check className="w-6 h-6 text-green-600" />
          </div>
        </div>
        <h3 className="font-display text-2xl font-bold text-green-900 mb-2">
          Welcome to the Waitlist!
        </h3>
        <p className="text-green-800 mb-4">
          We've added you to the Archive Club waitlist. You'll receive exclusive early-bird pricing and first access to founding member benefits.
        </p>
        <p className="text-sm text-green-700">
          Check your email for confirmation and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border border-border shadow-sm">
      <h3 className="font-display text-2xl font-bold text-foreground mb-2">
        Join the Waitlist
      </h3>
      <p className="text-muted-foreground mb-6">
        Be among the first to access the Archive Club. Founding members receive exclusive early-bird pricing and lifetime benefits.
      </p>

      <div className="space-y-4">
        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              required
            />
          </div>
        </div>

        {/* Tier Selection */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Preferred Membership Tier
          </label>
          <select
            value={tier}
            onChange={(e) => setTier(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
          >
            <option value="Curator">Curator (R500/month)</option>
            <option value="Connoisseur">Connoisseur (R1,200/month)</option>
            <option value="Archivist">Archivist (R2,500/month)</option>
          </select>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
        >
          {loading ? "Joining..." : "Join the Waitlist"}
        </Button>

        {/* Privacy Notice */}
        <p className="text-xs text-muted-foreground text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </form>
  );
}
