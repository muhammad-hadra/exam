import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import CoursesPage from "@/pages/CoursesPage";
import ExamsPage from "@/pages/ExamsPage";
import ExamPage from "@/pages/ExamPage";
import ResultsPage from "@/pages/ResultsPage";
import UniversitiesPage from "@/pages/UniversitiesPage";
import AboutPage from "@/pages/AboutPage";
import ExamPapersPage from "@/pages/ExamPapersPage";
import FreshmanMaterialsPage from "@/pages/FreshmanMaterialsPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/exams" element={<ExamsPage />} />
            <Route path="/exam/:courseId/:examType" element={<ExamPage />} />
            <Route path="/results/:courseId/:examType" element={<ResultsPage />} />
            <Route path="/universities" element={<UniversitiesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/exam-papers" element={<ExamPapersPage />} />
            <Route path="/freshman-materials" element={<FreshmanMaterialsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;