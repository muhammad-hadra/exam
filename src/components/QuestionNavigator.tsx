import { motion } from "framer-motion";

interface QuestionNavigatorProps {
  total: number;
  current: number;
  answers: (number | null)[];
  onNavigate: (index: number) => void;
}

export function QuestionNavigator({ total, current, answers, onNavigate }: QuestionNavigatorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {Array.from({ length: total }, (_, i) => {
        const isAnswered = answers[i] !== null;
        const isCurrent = i === current;

        return (
          <motion.button
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate(i)}
            className={`relative flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition-all ${
              isCurrent
                ? "gradient-primary text-primary-foreground shadow-lg"
                : isAnswered
                ? "bg-success text-success-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {i + 1}
            {isCurrent && (
              <motion.div
                layoutId="current-question"
                className="absolute inset-0 rounded-lg ring-2 ring-primary ring-offset-2 ring-offset-background"
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}