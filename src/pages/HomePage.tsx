import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Trophy, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Courses",
    description: "Access all freshman courses with detailed study materials and practice questions.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Trophy,
    title: "Multiple Exam Modes",
    description: "Practice with quizzes, mid exams, and final exams to prepare thoroughly.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Get immediate explanations for quiz answers to learn from your mistakes.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "All Universities",
    description: "Questions designed for students from any Ethiopian university.",
    color: "from-green-500 to-emerald-500",
  },
];

const stats = [
  { value: "8+", label: "Courses" },
  { value: "100+", label: "Questions" },
  { value: "24+", label: "Universities" },
  { value: "3", label: "Exam Types" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,hsl(var(--secondary)/0.15),transparent_50%)]" />
        
        <div className="container relative mx-auto px-4 py-20 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
                🎓 Your Path to Academic Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Ace Your{" "}
              <span className="text-gradient">University Exams</span>{" "}
              with Confidence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto"
            >
              Comprehensive exam preparation for Ethiopian university students. 
              Practice quizzes, mid exams, and finals with instant feedback.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg" className="gradient-primary border-0 font-semibold shadow-glow text-lg px-8">
                <Link to="/courses">
                  Start Practicing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold text-lg px-8">
                <Link to="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 text-center"
              >
                <div className="text-3xl font-extrabold text-gradient sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose <span className="text-gradient">ExamPrep?</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Everything you need to prepare for your university exams in one place.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Popular <span className="text-gradient">Courses</span>
              </h2>
              <p className="mt-2 text-muted-foreground">
                Start practicing with our most popular freshman courses.
              </p>
            </div>
            <Button asChild variant="outline" className="shrink-0">
              <Link to="/courses">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {courses.slice(0, 4).map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>

          {/* Course Materials Links */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">
                📚 Freshman Course Materials
              </h3>
              <p className="text-muted-foreground mb-4">
                Download Ethiopian university modules with chapter outlines for all courses.
              </p>
              <Button asChild className="gradient-primary border-0">
                <Link to="/freshman-materials">
                  Download Materials
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">
                📝 Exam Papers with Solutions
              </h3>
              <p className="text-muted-foreground mb-4">
                Download exam papers with complete solutions to practice offline.
              </p>
              <Button asChild className="gradient-primary border-0">
                <Link to="/exam-papers">
                  View Exam Papers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Ready to Start Your{" "}
              <span className="text-gradient">Exam Preparation?</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Join thousands of students who are already preparing for their exams with ExamPrep.
            </p>
            <Button asChild size="lg" className="mt-8 gradient-primary border-0 font-semibold shadow-glow text-lg px-8">
              <Link to="/courses">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}