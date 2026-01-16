import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UniversityCard } from "@/components/UniversityCard";
import { universities, regions } from "@/data/universities";

export default function UniversitiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredUniversities = useMemo(() => {
    return universities.filter((uni) => {
      const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = selectedRegion === "All" || uni.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  const displayedUniversities = showAll ? filteredUniversities : filteredUniversities.slice(0, 12);

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
            🏛️ Universities
          </span>
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
            Ethiopian <span className="text-gradient">Universities</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore universities across Ethiopia. Our exam questions are designed for students from all institutions.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 flex flex-col sm:flex-row gap-4"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search universities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card/50"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            <Button
              variant={selectedRegion === "All" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedRegion("All")}
              className={selectedRegion === "All" ? "gradient-primary border-0" : ""}
            >
              <Filter className="h-4 w-4 mr-1" />
              All Regions
            </Button>
            {regions.slice(0, 5).map((region) => (
              <Button
                key={region}
                variant={selectedRegion === region ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedRegion(region)}
                className={`whitespace-nowrap ${selectedRegion === region ? "gradient-primary border-0" : ""}`}
              >
                {region}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex items-center justify-between"
        >
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{displayedUniversities.length}</span> of{" "}
            <span className="font-semibold text-foreground">{filteredUniversities.length}</span> universities
          </p>
        </motion.div>

        {/* University Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedUniversities.map((university, index) => (
            <UniversityCard key={university.id} university={university} index={index} />
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && filteredUniversities.length > 12 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowAll(true)}
              className="font-semibold"
            >
              View All Universities ({filteredUniversities.length})
            </Button>
          </motion.div>
        )}

        {filteredUniversities.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">
              No universities found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}