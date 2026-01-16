export interface University {
  id: string;
  name: string;
  region: string;
  established: number;
  type: "Public" | "Private";
  students: string;
}

export const universities: University[] = [
  { id: "aau", name: "Addis Ababa University", region: "Addis Ababa", established: 1950, type: "Public", students: "50,000+" },
  { id: "bdu", name: "Bahir Dar University", region: "Amhara", established: 2000, type: "Public", students: "45,000+" },
  { id: "ju", name: "Jimma University", region: "Oromia", established: 1999, type: "Public", students: "40,000+" },
  { id: "hu", name: "Hawassa University", region: "Sidama", established: 2000, type: "Public", students: "35,000+" },
  { id: "mu", name: "Mekelle University", region: "Tigray", established: 2000, type: "Public", students: "32,000+" },
  { id: "gu", name: "Gondar University", region: "Amhara", established: 2003, type: "Public", students: "30,000+" },
  { id: "hru", name: "Haramaya University", region: "Oromia", established: 1954, type: "Public", students: "28,000+" },
  { id: "astu", name: "Adama Science and Technology University", region: "Oromia", established: 2007, type: "Public", students: "25,000+" },
  { id: "aau-tech", name: "Addis Ababa Science and Technology University", region: "Addis Ababa", established: 2011, type: "Public", students: "20,000+" },
  { id: "dbu", name: "Dilla University", region: "SNNPR", established: 2006, type: "Public", students: "22,000+" },
  { id: "wsu", name: "Wolaita Sodo University", region: "SNNPR", established: 2007, type: "Public", students: "20,000+" },
  { id: "ddu", name: "Dire Dawa University", region: "Dire Dawa", established: 2006, type: "Public", students: "18,000+" },
  { id: "amu", name: "Arba Minch University", region: "SNNPR", established: 2004, type: "Public", students: "25,000+" },
  { id: "wu", name: "Wollega University", region: "Oromia", established: 2007, type: "Public", students: "22,000+" },
  { id: "wku", name: "Wolkite University", region: "SNNPR", established: 2012, type: "Public", students: "15,000+" },
  { id: "dmu", name: "Debre Markos University", region: "Amhara", established: 2007, type: "Public", students: "20,000+" },
  { id: "dtu", name: "Debre Tabor University", region: "Amhara", established: 2008, type: "Public", students: "18,000+" },
  { id: "bbu", name: "Bule Hora University", region: "Oromia", established: 2011, type: "Public", students: "12,000+" },
  { id: "jju", name: "Jigjiga University", region: "Somali", established: 2007, type: "Public", students: "15,000+" },
  { id: "mwu", name: "Madda Walabu University", region: "Oromia", established: 2007, type: "Public", students: "14,000+" },
  { id: "seu", name: "St. Mary's University", region: "Addis Ababa", established: 1998, type: "Private", students: "8,000+" },
  { id: "uog", name: "Unity University", region: "Addis Ababa", established: 1998, type: "Private", students: "6,000+" },
  { id: "rift", name: "Rift Valley University", region: "Addis Ababa", established: 2000, type: "Private", students: "10,000+" },
  { id: "euc", name: "Ethiopian Civil Service University", region: "Addis Ababa", established: 1995, type: "Public", students: "5,000+" }
];

export const regions = [...new Set(universities.map(u => u.region))].sort();

export const getUniversitiesByRegion = (region: string): University[] => {
  if (region === "All") return universities;
  return universities.filter(u => u.region === region);
};