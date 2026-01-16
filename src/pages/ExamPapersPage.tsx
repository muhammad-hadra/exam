import { motion } from "framer-motion";
import { Download, FileText, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExamPaper {
  id: string;
  title: string;
  course: string;
  year: string;
  type: "mid" | "final";
  questions: number;
  color: string;
}

const examPapers: ExamPaper[] = [
  {
    id: "1",
    title: "Mathematics Mid Exam 2024",
    course: "Mathematics",
    year: "2024",
    type: "mid",
    questions: 25,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "2",
    title: "Mathematics Final Exam 2024",
    course: "Mathematics",
    year: "2024",
    type: "final",
    questions: 50,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "3",
    title: "Physics Mid Exam 2024",
    course: "Physics",
    year: "2024",
    type: "mid",
    questions: 25,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "4",
    title: "Physics Final Exam 2024",
    course: "Physics",
    year: "2024",
    type: "final",
    questions: 50,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "5",
    title: "Chemistry Mid Exam 2024",
    course: "Chemistry",
    year: "2024",
    type: "mid",
    questions: 25,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "6",
    title: "Chemistry Final Exam 2024",
    course: "Chemistry",
    year: "2024",
    type: "final",
    questions: 50,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "7",
    title: "Biology Mid Exam 2024",
    course: "Biology",
    year: "2024",
    type: "mid",
    questions: 25,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "8",
    title: "Biology Final Exam 2024",
    course: "Biology",
    year: "2024",
    type: "final",
    questions: 50,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "9",
    title: "English Mid Exam 2024",
    course: "English",
    year: "2024",
    type: "mid",
    questions: 25,
    color: "from-indigo-500 to-violet-500",
  },
  {
    id: "10",
    title: "English Final Exam 2024",
    course: "English",
    year: "2024",
    type: "final",
    questions: 50,
    color: "from-indigo-500 to-violet-500",
  },
  {
    id: "11",
    title: "Economics Mid Exam 2024",
    course: "Economics",
    year: "2024",
    type: "mid",
    questions: 25,
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: "12",
    title: "Economics Final Exam 2024",
    course: "Economics",
    year: "2024",
    type: "final",
    questions: 50,
    color: "from-teal-500 to-cyan-500",
  },
];

const generatePaperContent = (paper: ExamPaper): string => {
  const lines = [
    `${paper.title}`,
    `${"=".repeat(50)}`,
    ``,
    `Course: ${paper.course}`,
    `Year: ${paper.year}`,
    `Type: ${paper.type.charAt(0).toUpperCase() + paper.type.slice(1)} Exam`,
    `Total Questions: ${paper.questions}`,
    `Time Allowed: ${paper.type === "mid" ? "1 hour 30 minutes" : "3 hours"}`,
    ``,
    `${"=".repeat(50)}`,
    `INSTRUCTIONS`,
    `${"=".repeat(50)}`,
    `1. Read all questions carefully before answering.`,
    `2. Answer all questions.`,
    `3. Show all your work for full credit.`,
    `4. No electronic devices allowed.`,
    ``,
    `${"=".repeat(50)}`,
    `QUESTIONS`,
    `${"=".repeat(50)}`,
    ``,
  ];

  for (let i = 1; i <= paper.questions; i++) {
    lines.push(`Question ${i}:`);
    lines.push(`Sample question ${i} for ${paper.course} ${paper.type} exam.`);
    lines.push(`A) Option A`);
    lines.push(`B) Option B`);
    lines.push(`C) Option C`);
    lines.push(`D) Option D`);
    lines.push(``);
  }

  lines.push(`${"=".repeat(50)}`);
  lines.push(`SOLUTIONS`);
  lines.push(`${"=".repeat(50)}`);
  lines.push(``);

  for (let i = 1; i <= paper.questions; i++) {
    const answer = ["A", "B", "C", "D"][Math.floor(Math.random() * 4)];
    lines.push(`Question ${i}: ${answer}`);
    lines.push(`Explanation: This is the solution explanation for question ${i}.`);
    lines.push(``);
  }

  return lines.join("\n");
};

const handleDownload = (paper: ExamPaper) => {
  const content = generatePaperContent(paper);
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${paper.title.replace(/\s+/g, "_")}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export default function ExamPapersPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white mb-6">
            <FileText className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
            Exam Papers with <span className="text-gradient">Solutions</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Download past exam papers with complete solutions to help you prepare for your exams.
          </p>
        </motion.div>

        {/* Papers Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {examPapers.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm h-full">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${paper.color} text-white shrink-0`}>
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <Badge variant={paper.type === "final" ? "default" : "secondary"}>
                      {paper.type === "final" ? "Final" : "Mid"}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mt-4">{paper.title}</CardTitle>
                  <CardDescription>
                    {paper.questions} questions • {paper.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => handleDownload(paper)}
                    className="w-full gradient-primary border-0"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download with Solutions
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
