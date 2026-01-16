import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, FileText, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
        
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${course.color} text-2xl shadow-lg`}>
              {course.icon}
            </div>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {course.questions.length} Questions
            </span>
          </div>
          <CardTitle className="mt-4 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {course.name}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-muted-foreground">
            {course.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2">
            <Button
              asChild
              size="sm"
              className="flex-1 gap-2 bg-success hover:bg-success/90 text-success-foreground border-0"
            >
              <Link to={`/exam/${course.id}/quiz`}>
                <BookOpen className="h-4 w-4" />
                Quiz
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="flex-1 gap-2 bg-warning hover:bg-warning/90 text-warning-foreground border-0"
            >
              <Link to={`/exam/${course.id}/mid`}>
                <FileText className="h-4 w-4" />
                Mid Exam
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="flex-1 gap-2 gradient-secondary text-secondary-foreground border-0"
            >
              <Link to={`/exam/${course.id}/final`}>
                <GraduationCap className="h-4 w-4" />
                Final
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}