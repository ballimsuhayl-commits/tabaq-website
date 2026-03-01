import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    terroir: string;
  }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What's your ideal climate?",
    options: [
      { text: "Cool, misty highlands", terroir: "Rwanda" },
      { text: "Warm, spiced desert", terroir: "Morocco" },
      { text: "Tropical, humid coast", terroir: "Nigeria" }
    ]
  },
  {
    id: 2,
    question: "What fragrance profile appeals to you most?",
    options: [
      { text: "Fresh, crisp, floral", terroir: "Rwanda" },
      { text: "Warm, spiced, intense", terroir: "Morocco" },
      { text: "Tropical, sensual, fruity", terroir: "Nigeria" }
    ]
  },
  {
    id: 3,
    question: "When do you wear fragrance?",
    options: [
      { text: "Daily, fresh moments", terroir: "Rwanda" },
      { text: "Evening, special occasions", terroir: "Morocco" },
      { text: "All day, warm climates", terroir: "Nigeria" }
    ]
  },
  {
    id: 4,
    question: "What's your scent intensity preference?",
    options: [
      { text: "Subtle, moderate sillage", terroir: "Rwanda" },
      { text: "Strong, bold presence", terroir: "Morocco" },
      { text: "Balanced, versatile", terroir: "Nigeria" }
    ]
  },
  {
    id: 5,
    question: "Which ingredient excites you most?",
    options: [
      { text: "Water lily, pistachio, green tea", terroir: "Rwanda" },
      { text: "Oud, ginger, saffron", terroir: "Morocco" },
      { text: "Coconut, hibiscus, vanilla", terroir: "Nigeria" }
    ]
  }
];

interface TerriorResult {
  name: string;
  profile: string;
  description: string;
  notes: string[];
  longevity: string;
}

const terriorResults: Record<string, TerriorResult> = {
  Rwanda: {
    name: "Rwanda Highlands",
    profile: "Water Lily & Pistachio",
    description: "You're drawn to fresh, sophisticated scents with subtle floral undertones. Your ideal fragrance is crisp and elegant, perfect for daily wear and intimate moments.",
    notes: ["Water Lily", "Bergamot", "Pistachio", "Green Tea", "Cedarwood"],
    longevity: "6–8 hours"
  },
  Morocco: {
    name: "Morocco Desert",
    profile: "Golden Oud & Ginger",
    description: "You appreciate bold, intense fragrances with deep complexity. Your ideal scent makes a statement and lingers in memory—perfect for evening wear and special occasions.",
    notes: ["Ginger", "Cinnamon", "Golden Oud", "Saffron", "Sandalwood"],
    longevity: "8–10 hours"
  },
  Nigeria: {
    name: "Nigeria Coast",
    profile: "Coconut & Hibiscus",
    description: "You love tropical, sensual scents that celebrate warmth and joy. Your ideal fragrance is versatile and inviting—perfect for all-day wear in warm climates.",
    notes: ["Hibiscus", "Lime", "Coconut", "Jasmine", "Vanilla"],
    longevity: "5–7 hours"
  }
};

export default function ScentQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ Rwanda: 0, Morocco: 0, Nigeria: 0 });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (terroir: string) => {
    const newScores = { ...scores, [terroir]: scores[terroir as keyof typeof scores] + 1 };
    setScores(newScores);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const maxScore = Math.max(scores.Rwanda, scores.Morocco, scores.Nigeria);
    if (scores.Rwanda === maxScore) return "Rwanda";
    if (scores.Morocco === maxScore) return "Morocco";
    return "Nigeria";
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ Rwanda: 0, Morocco: 0, Nigeria: 0 });
    setShowResult(false);
  };

  if (showResult) {
    const result = getResult();
    const terriorData = terriorResults[result];

    return (
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20">
        <div className="text-center mb-8">
          <h3 className="font-display text-4xl font-bold text-foreground mb-2">
            Your Terroir
          </h3>
          <p className="text-primary font-accent font-bold text-lg">
            {terriorData.name}
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8 border border-border">
          <h4 className="font-display text-3xl font-bold text-foreground mb-4">
            {terriorData.profile}
          </h4>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {terriorData.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-2">
                Key Notes
              </p>
              <div className="flex flex-wrap gap-2">
                {terriorData.notes.map((note, idx) => (
                  <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {note}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-2">
                Longevity
              </p>
              <p className="text-foreground font-semibold">
                {terriorData.longevity}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            onClick={resetQuiz}
            variant="outline"
            className="flex-1 gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Retake Quiz
          </Button>
          <Button
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
          >
            Explore {terriorData.name}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="bg-white rounded-lg p-8 border border-border shadow-sm">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-display text-2xl font-bold text-foreground">
            Discover Your Terroir
          </h3>
          <span className="text-sm text-muted-foreground font-medium">
            {currentQuestion + 1} / {quizQuestions.length}
          </span>
        </div>
        <div className="w-full bg-border rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mb-8">
        <h4 className="font-display text-2xl font-bold text-foreground mb-6">
          {question.question}
        </h4>

        <div className="space-y-3">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option.terroir)}
              className="w-full p-4 text-left border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
            >
              <p className="text-foreground font-medium group-hover:text-primary transition">
                {option.text}
              </p>
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground text-center">
        Answer all 5 questions to discover your perfect Tabaq terroir.
      </p>
    </div>
  );
}
