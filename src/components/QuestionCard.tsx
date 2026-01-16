import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Question } from "@/data/courses";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  selectedAnswer: number | null;
  onSelectAnswer: (answerIndex: number) => void;
  showFeedback?: boolean;
  disabled?: boolean;
}

export function QuestionCard({
  question,
  questionNumber,
  selectedAnswer,
  onSelectAnswer,
  showFeedback = false,
  disabled = false,
}: QuestionCardProps) {
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-start gap-3 text-lg">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg gradient-primary text-sm font-bold text-primary-foreground">
            {questionNumber}
          </span>
          <span className="text-foreground">{question.question}</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectOption = index === question.correctAnswer;
          const showAsCorrect = showFeedback && isCorrectOption;
          const showAsWrong = showFeedback && isSelected && !isCorrect;

          return (
            <motion.button
              key={index}
              whileHover={disabled ? {} : { scale: 1.01 }}
              whileTap={disabled ? {} : { scale: 0.99 }}
              onClick={() => !disabled && onSelectAnswer(index)}
              disabled={disabled}
              className={`relative flex w-full items-center gap-3 rounded-xl border-2 p-4 text-left transition-all ${
                showAsCorrect
                  ? "border-success bg-success/10 text-success"
                  : showAsWrong
                  ? "border-destructive bg-destructive/10 text-destructive"
                  : isSelected
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-muted/30 text-foreground hover:border-primary/50 hover:bg-muted/50"
              } ${disabled ? "cursor-not-allowed opacity-75" : "cursor-pointer"}`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                  showAsCorrect
                    ? "bg-success text-success-foreground"
                    : showAsWrong
                    ? "bg-destructive text-destructive-foreground"
                    : isSelected
                    ? "gradient-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex-1">{option}</span>
              {showAsCorrect && <CheckCircle2 className="h-5 w-5 text-success" />}
              {showAsWrong && <XCircle className="h-5 w-5 text-destructive" />}
            </motion.button>
          );
        })}

        {showFeedback && selectedAnswer !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 rounded-lg p-4 ${
              isCorrect ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
            }`}
          >
            <p className="font-semibold">
              {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
            </p>
            <p className="mt-1 text-sm opacity-90">{question.explanation}</p>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}