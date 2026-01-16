import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { University } from "@/data/universities";

interface UniversityCardProps {
  university: University;
  index: number;
}

export function UniversityCard({ university, index }: UniversityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <CardHeader className="pb-3">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
              <Building2 className="h-7 w-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {university.name}
              </h3>
              <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                {university.region}
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="gap-1">
              <Calendar className="h-3 w-3" />
              Est. {university.established}
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Users className="h-3 w-3" />
              {university.students}
            </Badge>
            <Badge 
              className={university.type === "Public" 
                ? "bg-success/10 text-success hover:bg-success/20" 
                : "bg-secondary/10 text-secondary hover:bg-secondary/20"
              }
            >
              {university.type}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}