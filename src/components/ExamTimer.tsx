import { useEffect, useState, useCallback } from "react";
import { Clock, AlertTriangle } from "lucide-react";

interface ExamTimerProps {
  initialMinutes: number;
  onTimeUp: () => void;
  isPaused?: boolean;
}

export function ExamTimer({ initialMinutes, onTimeUp, isPaused = false }: ExamTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  const formatTime = useCallback((seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }, []);

  useEffect(() => {
    if (isPaused || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, timeLeft, onTimeUp]);

  const percentage = (timeLeft / (initialMinutes * 60)) * 100;
  const isWarning = percentage <= 20;
  const isCritical = percentage <= 10;

  return (
    <div
      className={`flex items-center gap-2 rounded-lg px-4 py-2 font-mono text-lg font-bold transition-colors ${
        isCritical
          ? "bg-destructive/10 text-destructive animate-pulse"
          : isWarning
          ? "bg-warning/10 text-warning"
          : "bg-primary/10 text-primary"
      }`}
    >
      {isCritical ? (
        <AlertTriangle className="h-5 w-5" />
      ) : (
        <Clock className="h-5 w-5" />
      )}
      {formatTime(timeLeft)}
    </div>
  );
}