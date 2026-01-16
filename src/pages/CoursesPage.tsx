import { motion } from "framer-motion";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";

export default function CoursesPage() {
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
            📚 All Courses
          </span>
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
            Freshman <span className="text-gradient">Courses</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Select a course to start practicing. Each course includes quizzes, mid exams, and final exams.
          </p>
        </motion.div>

        {/* Course Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}