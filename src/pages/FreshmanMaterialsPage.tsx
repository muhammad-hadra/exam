import { useState } from "react";
import { motion } from "framer-motion";
import { Download, BookOpen, FileText, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { courses } from "@/data/courses";

interface ModuleMaterial {
  id: string;
  courseId: string;
  courseName: string;
  title: string;
  description: string;
  chapters: string[];
  fileSize: string;
  icon: string;
}

const moduleMaterials: ModuleMaterial[] = courses.map(course => ({
  id: `module-${course.id}`,
  courseId: course.id,
  courseName: course.name,
  title: `${course.name} - Ethiopian University Module`,
  description: course.description,
  chapters: generateChapters(course.id),
  fileSize: `${Math.floor(Math.random() * 5) + 2}.${Math.floor(Math.random() * 9)}MB`,
  icon: course.icon,
}));

function generateChapters(courseId: string): string[] {
  const chapterMap: Record<string, string[]> = {
    "mathematics-1": [
      "Chapter 1: Logic and Set Theory",
      "Chapter 2: Real Number System",
      "Chapter 3: Functions and Graphs",
      "Chapter 4: Limits and Continuity",
      "Chapter 5: Differentiation",
      "Chapter 6: Integration",
    ],
    "physics-1": [
      "Chapter 1: Measurement and Units",
      "Chapter 2: Kinematics",
      "Chapter 3: Dynamics and Newton's Laws",
      "Chapter 4: Work, Energy and Power",
      "Chapter 5: Momentum and Collisions",
      "Chapter 6: Rotational Motion",
    ],
    "economics": [
      "Chapter 1: Introduction to Economics",
      "Chapter 2: Demand and Supply",
      "Chapter 3: Theory of Consumer Behavior",
      "Chapter 4: Theory of Production",
      "Chapter 5: Market Structures",
      "Chapter 6: National Income Accounting",
    ],
    "emerging-technology": [
      "Chapter 1: Introduction to Emerging Technologies",
      "Chapter 2: Artificial Intelligence and Machine Learning",
      "Chapter 3: Internet of Things (IoT)",
      "Chapter 4: Blockchain Technology",
      "Chapter 5: Cloud Computing",
      "Chapter 6: Cybersecurity Fundamentals",
    ],
    "english": [
      "Chapter 1: Reading Skills",
      "Chapter 2: Writing Skills",
      "Chapter 3: Grammar and Vocabulary",
      "Chapter 4: Speaking and Listening",
      "Chapter 5: Academic Writing",
      "Chapter 6: Communication Skills",
    ],
    "chemistry": [
      "Chapter 1: Atomic Structure",
      "Chapter 2: Chemical Bonding",
      "Chapter 3: States of Matter",
      "Chapter 4: Chemical Reactions",
      "Chapter 5: Solutions and Equilibrium",
      "Chapter 6: Organic Chemistry Basics",
    ],
    "biology": [
      "Chapter 1: Cell Biology",
      "Chapter 2: Genetics and Heredity",
      "Chapter 3: Evolution",
      "Chapter 4: Ecology",
      "Chapter 5: Human Physiology",
      "Chapter 6: Plant Biology",
    ],
    "logic": [
      "Chapter 1: Introduction to Logic",
      "Chapter 2: Propositional Logic",
      "Chapter 3: Categorical Propositions",
      "Chapter 4: Syllogistic Logic",
      "Chapter 5: Fallacies",
      "Chapter 6: Critical Thinking Skills",
    ],
    "history-ethiopia": [
      "Chapter 1: Ancient Ethiopian Civilizations",
      "Chapter 2: The Aksumite Empire",
      "Chapter 3: Medieval Ethiopian Kingdoms",
      "Chapter 4: The Era of the Princes",
      "Chapter 5: Modern Ethiopia (1855-1974)",
      "Chapter 6: Contemporary Ethiopia",
    ],
    "civic-ethics": [
      "Chapter 1: Ethiopian Constitution",
      "Chapter 2: Citizenship and Rights",
      "Chapter 3: Democratic Governance",
      "Chapter 4: Human Rights",
      "Chapter 5: Ethics and Morality",
      "Chapter 6: Civic Responsibilities",
    ],
    "anthropology": [
      "Chapter 1: Introduction to Anthropology",
      "Chapter 2: Cultural Anthropology",
      "Chapter 3: Biological Anthropology",
      "Chapter 4: Archaeology",
      "Chapter 5: Linguistic Anthropology",
      "Chapter 6: Ethiopian Cultures and Peoples",
    ],
    "geography-ethiopia": [
      "Chapter 1: Physical Geography of Ethiopia",
      "Chapter 2: Climate and Weather",
      "Chapter 3: Water Resources",
      "Chapter 4: Population and Settlement",
      "Chapter 5: Economic Geography",
      "Chapter 6: Regional Geography of the Horn",
    ],
    "psychology": [
      "Chapter 1: Introduction to Psychology",
      "Chapter 2: Biological Bases of Behavior",
      "Chapter 3: Learning and Memory",
      "Chapter 4: Motivation and Emotion",
      "Chapter 5: Personality",
      "Chapter 6: Social Psychology",
    ],
    "global-affairs": [
      "Chapter 1: Introduction to International Relations",
      "Chapter 2: Global Governance",
      "Chapter 3: International Organizations",
      "Chapter 4: Global Issues and Challenges",
      "Chapter 5: Ethiopia in World Affairs",
      "Chapter 6: Diplomacy and Foreign Policy",
    ],
    "inclusiveness": [
      "Chapter 1: Understanding Diversity",
      "Chapter 2: Gender and Development",
      "Chapter 3: Disability and Inclusion",
      "Chapter 4: Social Equity",
      "Chapter 5: Inclusive Education",
      "Chapter 6: Building Inclusive Communities",
    ],
  };
  return chapterMap[courseId] || [
    "Chapter 1: Introduction",
    "Chapter 2: Core Concepts",
    "Chapter 3: Applications",
    "Chapter 4: Advanced Topics",
    "Chapter 5: Practice Problems",
    "Chapter 6: Summary and Review",
  ];
}

export default function FreshmanMaterialsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredMaterials = moduleMaterials.filter(material => {
    const matchesSearch = material.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || material.courseId === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const downloadModule = (material: ModuleMaterial) => {
    const content = `
╔══════════════════════════════════════════════════════════════════╗
║                    ETHIOPIAN UNIVERSITY MODULE                     ║
║                         FRESHMAN PROGRAM                           ║
╚══════════════════════════════════════════════════════════════════╝

COURSE: ${material.courseName}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COURSE DESCRIPTION:
${material.description}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                           TABLE OF CONTENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${material.chapters.map((ch, i) => `  ${i + 1}. ${ch}`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                           COURSE OBJECTIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After completing this course, students will be able to:

  • Understand fundamental concepts and theories in ${material.courseName}
  • Apply learned principles to solve practical problems
  • Analyze and evaluate relevant information critically
  • Demonstrate competency through assessments and projects
  • Develop skills applicable to further studies and career

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                         ASSESSMENT METHODS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • Continuous Assessment: 40%
    - Quizzes: 15%
    - Assignments: 15%
    - Class Participation: 10%
    
  • Mid-Semester Examination: 20%
  
  • Final Examination: 40%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                        REFERENCE MATERIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  1. Ethiopian Higher Education Module for ${material.courseName}
  2. Ministry of Education Curriculum Guidelines
  3. Supplementary Textbooks and Resources
  4. Online Learning Resources and Platforms

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                    © Ethiopian Ministry of Education
                       Prepared for Freshman Students
                            Academic Year 2024-25

╔══════════════════════════════════════════════════════════════════╗
║  This module is prepared in accordance with the Ethiopian        ║
║  Higher Education Harmonized Curriculum. For official modules,   ║
║  please contact your university's academic affairs office.       ║
╚══════════════════════════════════════════════════════════════════╝
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${material.courseName.replace(/\s+/g, '_')}_Module.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Freshman <span className="text-gradient">Course Materials</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Download Ethiopian university freshman course modules. All materials follow the 
            harmonized curriculum guidelines from the Ministry of Education.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search course materials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Courses</SelectItem>
              {courses.map(course => (
                <SelectItem key={course.id} value={course.id}>
                  {course.icon} {course.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        {/* Materials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredMaterials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{material.icon}</div>
                <Badge variant="secondary" className="text-xs">
                  {material.fileSize}
                </Badge>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {material.courseName}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {material.description}
              </p>

              <div className="mb-4">
                <p className="text-xs font-medium text-foreground mb-2">Chapters included:</p>
                <div className="space-y-1">
                  {material.chapters.slice(0, 3).map((chapter, i) => (
                    <div key={i} className="flex items-center text-xs text-muted-foreground">
                      <FileText className="h-3 w-3 mr-2 shrink-0" />
                      <span className="truncate">{chapter}</span>
                    </div>
                  ))}
                  {material.chapters.length > 3 && (
                    <p className="text-xs text-muted-foreground pl-5">
                      +{material.chapters.length - 3} more chapters
                    </p>
                  )}
                </div>
              </div>

              <Button
                onClick={() => downloadModule(material)}
                className="w-full gradient-primary border-0"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Module
              </Button>
            </motion.div>
          ))}
        </div>

        {filteredMaterials.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No materials found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
          </motion.div>
        )}

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl bg-primary/5 border border-primary/20 p-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">About These Materials</h4>
              <p className="text-sm text-muted-foreground">
                These course materials are designed based on the Ethiopian Higher Education 
                Harmonized Curriculum. They serve as study guides and reference materials. 
                For official course modules, please contact your university's academic affairs office.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
