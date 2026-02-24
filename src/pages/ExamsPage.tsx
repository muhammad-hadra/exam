import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, FileText, GraduationCap, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";

const examTypes = [
  {
    type: "quiz",
    name: "Quiz Mode",
    icon: BookOpen,
    description: "Quick 10-question practice with instant feedback",
    duration: "No time limit",
    questions: "5 questions",
    features: ["Instant feedback", "Explanations shown", "Retry anytime"],
    color: "from-green-500 to-emerald-500",
    buttonText: "Start Quiz",
  },
  {
    type: "mid",
    name: "Mid Exam",
    icon: FileText,
    description: "Simulate a real mid-semester examination",
    duration: "60 minutes",
    questions: "30 questions",
    features: ["Timed exam", "Submit at end", "Auto-submit on timeout"],
    color: "from-orange-500 to-amber-500",
    buttonText: "Take Mid Exam",
  },
  {
    type: "final",
    name: "Final Exam",
    icon: GraduationCap,
    description: "Full-length final examination simulation",
    duration: "120 minutes",
    questions: "60 questions",
    features: ["Strict timing", "Full exam mode", "Comprehensive review"],
    color: "from-purple-500 to-pink-500",
    buttonText: "Take Final Exam",
  },
];

export default function ExamsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            📝 Exam Modes
          </span>
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
            Practice <span className="text-gradient">Exams</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose your exam type and course to start practicing. Each mode is designed to help you prepare effectively.
          </p>
        </motion.div>

        {/* Exam Types */}
        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {examTypes.map((exam, index) => (
            <motion.div
              key={exam.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${exam.color} text-white mb-4`}>
                    <exam.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{exam.name}</CardTitle>
                  <CardDescription className="text-base">{exam.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      {exam.duration}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <FileText className="h-4 w-4 text-primary" />
                      {exam.questions}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exam.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-success" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-3">Select a course:</p>
                    <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                      {courses.map((course) => (
                        <Button
                          key={course.id}
                          asChild
                          variant="outline"
                          size="sm"
                          className="text-xs justify-start"
                        >
                          <Link to={`/exam/${course.id}/${exam.type}`}>
                            {course.icon} {course.name.split(" ")[0]}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Access */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Or browse all courses
          </h2>
          <Button asChild size="lg" className="gradient-primary border-0 font-semibold">
            <Link to="/courses">View All Courses</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}