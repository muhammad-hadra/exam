import { motion } from "framer-motion";
import { CheckCircle2, Target, Users, Award, BookOpen, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
/*
const team = [
  { name: "Dr. Abebe Kebede", role: "Academic Director", icon: "👨‍🏫" },
  { name: "Tigist Haile", role: "Content Manager", icon: "👩‍💼" },
  { name: "Yonas Tadesse", role: "Lead Developer", icon: "👨‍💻" },
  { name: "Sara Mulugeta", role: "Student Success", icon: "👩‍🎓" },
];
*/
const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every question, explanation, and feature we build.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "Making quality education accessible to every student, regardless of background.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "Providing accurate, well-researched content that students can trust.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always improving our platform based on student feedback and needs.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            ℹ️ About Us
          </span>
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
            Empowering <span className="text-gradient">Students</span> to Succeed
          </h1>
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            ExamPrep was founded with a simple mission: to help Ethiopian university students 
            prepare for their exams with confidence. We believe that every student deserves 
            access to quality practice materials and resources.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We're on a mission to democratize exam preparation for university students 
                across Ethiopia. Our platform provides comprehensive practice exams, instant 
                feedback, and detailed explanations to help students understand concepts deeply.
              </p>
              <ul className="space-y-3">
                {[
                  "Free access to quality exam preparation",
                  "Questions aligned with university curricula",
                  "Multiple exam formats for thorough practice",
                  "Instant feedback to accelerate learning",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <Card className="relative border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: "1000+", label: "Students Helped" },
                      { value: "100+", label: "Practice Questions" },
                      { value: "8+", label: "Courses" },
                      { value: "24+", label: "Universities" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our <span className="text-gradient">Values</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-primary text-primary-foreground mb-4">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          
    
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
            <CardContent className="p-12">
              <MessageCircle className="h-12 w-12 mx-auto text-primary mb-6" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Have Questions?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                We'd love to hear from you! Reach out to us for any questions, suggestions, 
                or feedback about our platform.
              </p>
              <p className="text-lg font-semibold text-primary">muhammadbr1997@gmail.com</p>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}