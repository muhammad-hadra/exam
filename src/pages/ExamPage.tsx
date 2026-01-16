import { useState, useCallback, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { QuestionCard } from "@/components/QuestionCard";
import { QuestionNavigator } from "@/components/QuestionNavigator";
import { ExamTimer } from "@/components/ExamTimer";
import { getCourse, getQuestions, type Question, type ExamType } from "@/data/courses";

const examConfig: Record<ExamType, { questions: number; time: number | null; showFeedback: boolean }> = {
  quiz: { questions: 10, time: null, showFeedback: true },
  mid: { questions: 15, time: 60, showFeedback: false },
  final: { questions: 15, time: 120, showFeedback: false },
};

export default function ExamPage() {
  const { courseId, examType = "quiz" } = useParams<{ courseId: string; examType: string }>();
  const navigate = useNavigate();

  const course = getCourse(courseId || "");
  const config = examConfig[examType as ExamType] || examConfig.quiz;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  // Initialize questions
  useEffect(() => {
    if (course && isStarted) {
      // FIXED: Use the 3-parameter version of getQuestions
      const examQuestions = getQuestions(course.id, examType as ExamType, config.questions);
      setQuestions(examQuestions);
      setAnswers(new Array(examQuestions.length).fill(null));
    }
  }, [course, examType, config.questions, isStarted]);


  const handleSelectAnswer = useCallback((answerIndex: number) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentIndex] = answerIndex;
      return newAnswers;
    });
  }, [currentIndex]);

  const handleSubmit = useCallback(() => {
    // Navigate to results page with state
    navigate(`/results/${courseId}/${examType}`, {
      state: {
        questions,
        answers,
        courseName: course?.name,
        examType,
      },
    });
  }, [navigate, courseId, examType, questions, answers, course?.name]);

  const handleTimeUp = useCallback(() => {
    handleSubmit();
  }, [handleSubmit]);

  const answeredCount = answers.filter((a) => a !== null).length;
  const progress = (answeredCount / questions.length) * 100;

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="h-12 w-12 mx-auto text-destructive mb-4" />
            <h2 className="text-xl font-bold mb-2">Course Not Found</h2>
            <p className="text-muted-foreground mb-4">
              The course you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/courses">View All Courses</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Start screen
  if (!isStarted) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-2">
                <div className="text-5xl mb-4">{course.icon}</div>
                <CardTitle className="text-2xl font-bold">{course.name}</CardTitle>
                <p className="text-muted-foreground">
                  {examType === "quiz" ? "Quiz Mode" : examType === "mid" ? "Mid Exam" : "Final Exam"}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="rounded-lg bg-muted/50 p-4">
                    <div className="text-2xl font-bold text-primary">{config.questions}</div>
                    <div className="text-sm text-muted-foreground">Questions</div>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-4">
                    <div className="text-2xl font-bold text-primary">
                      {config.time ? `${config.time} min` : "No Limit"}
                    </div>
                    <div className="text-sm text-muted-foreground">Time</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Instructions:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
                      Select one answer for each question
                    </li>
                    {config.showFeedback ? (
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
                        You'll see instant feedback after each answer
                      </li>
                    ) : (
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
                        Feedback will be shown after submission
                      </li>
                    )}
                    {config.time && (
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-warning mt-0.5 shrink-0" />
                        Exam auto-submits when time runs out
                      </li>
                    )}
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
                      You can navigate between questions freely
                    </li>
                  </ul>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="outline" asChild className="flex-1">
                    <Link to="/courses">Cancel</Link>
                  </Button>
                  <Button
                    onClick={() => setIsStarted(true)}
                    className="flex-1 gradient-primary border-0 font-semibold"
                  >
                    Start Exam
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading questions...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/courses">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                {course.name} - {examType === "quiz" ? "Quiz" : examType === "mid" ? "Mid Exam" : "Final Exam"}
              </h1>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-sm text-muted-foreground">
                  {answeredCount} of {questions.length} answered
                </span>
                <Progress value={progress} className="w-32 h-2" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {config.time && (
              <ExamTimer initialMinutes={config.time} onTimeUp={handleTimeUp} />
            )}
            <Button
              onClick={() => setShowSubmitDialog(true)}
              disabled={answeredCount === 0}
              className="gradient-primary border-0 font-semibold"
            >
              Submit Exam
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr,280px]">
          {/* Question Area */}
          <div className="space-y-6">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <QuestionCard
                question={currentQuestion}
                questionNumber={currentIndex + 1}
                selectedAnswer={answers[currentIndex]}
                onSelectAnswer={handleSelectAnswer}
                showFeedback={config.showFeedback && answers[currentIndex] !== null}
              />
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <Button
                variant="outline"
                onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                disabled={currentIndex === questions.length - 1}
              >
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Question Navigator</CardTitle>
              </CardHeader>
              <CardContent>
                <QuestionNavigator
                  total={questions.length}
                  current={currentIndex}
                  answers={answers}
                  onNavigate={setCurrentIndex}
                />
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded bg-success" />
                    <span className="text-muted-foreground">Answered</span>
                  </div>
                  <span className="font-semibold">{answeredCount}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded bg-muted" />
                    <span className="text-muted-foreground">Unanswered</span>
                  </div>
                  <span className="font-semibold">{questions.length - answeredCount}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Submit Dialog */}
      <AlertDialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submit Exam?</AlertDialogTitle>
            <AlertDialogDescription>
              You have answered {answeredCount} out of {questions.length} questions.
              {answeredCount < questions.length && (
                <span className="block mt-2 text-warning">
                  Warning: {questions.length - answeredCount} questions are unanswered and will be marked as wrong.
                </span>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Continue Exam</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmit} className="gradient-primary border-0">
              Submit Exam
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}