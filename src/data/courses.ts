export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

/*export interface Course {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  questions: Question[];
}*/


export interface Course {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  questions: Question[] | {
    quiz: Question[];
    mid: Question[];
    final: Question[];
  };
}



// In courses.ts
export type ExamType = "quiz" | "mid" | "final";

export interface Course {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  questions: Question[] | {
    quiz: Question[];
    mid: Question[];
    final: Question[];
  };
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

// ... rest of your codessss
















export const courses: Course[] = [
  {
    id: "mathematics-1",
    name: "Mathematics I",
    description: "Calculus, algebra, and fundamental mathematical concepts for engineering and science students.",
    icon: "📐",
    color: "from-blue-500 to-cyan-500",

    questions: {
      // Quiz sample questions (5)
      quiz: [
        {
          id: 1,
          question: "What is the derivative of f(x) = x³?",
          options: ["3x²", "x²", "3x", "x³"],
          correctAnswer: 0,
          explanation: "Using the power rule, d/dx(x³) = 3x²"
        },
        {
          id: 2,
          question: "What is the integral of ∫2x dx?",
          options: ["x²", "x² + C", "2x² + C", "x + C"],
          correctAnswer: 1,
          explanation: "The integral of 2x is x² + C, where C is the constant of integration."
        },
        {
          id: 3,
          question: "What is the limit of (x² - 1)/(x - 1) as x approaches 1?",
          options: ["0", "1", "2", "Undefined"],
          correctAnswer: 2,
          explanation: "Factor numerator: (x-1)(x+1)/(x-1) = x+1, then substitute x=1 → 2"
        },
        {
          id: 4,
          question: "Which of the following is a solution to x² - 5x + 6 = 0?",
          options: ["x = 1", "x = 2", "x = 4", "x = 5"],
          correctAnswer: 1,
          explanation: "Factoring: (x-2)(x-3)=0, so x=2 or x=3"
        },
        {
          id: 5,
          question: "What is the value of sin(π/2)?",
          options: ["0", "1", "-1", "1/2"],
          correctAnswer: 1,
          explanation: "sin(π/2) = sin(90°) = 1"
        }
      ],

      // Mid exam sample questions (5)
      mid: [
        {
          id: 101,
          question: "Evaluate the limit of (x² − 1)/(x − 1) as x → 1",
          options: ["0", "1", "2", "Undefined"],
          correctAnswer: 2,
          explanation: "Factor numerator to get x+1, then substitute x=1 → 2"
        },
        {
          id: 102,
          question: "If f(x) = 3x² + 2x - 1, what is f(2)?",
          options: ["11", "13", "15", "17"],
          correctAnswer: 2,
          explanation: "f(2) = 3*4 + 4 - 1 = 15"
        },
        {
          id: 103,
          question: "Find the derivative of f(x) = 5x⁴",
          options: ["20x³", "5x³", "4x⁵", "x⁴"],
          correctAnswer: 0,
          explanation: "Power rule: d/dx(5x⁴)=20x³"
        },
        {
          id: 104,
          question: "What is the integral of ∫(3x² + 2x) dx?",
          options: ["x³ + x² + C", "3x³ + x² + C", "x³ + 2x + C", "6x² + 2x + C"],
          correctAnswer: 0,
          explanation: "Integrate term by term: ∫3x² dx = x³, ∫2x dx = x² → x³ + x² + C"
        },
        {
          id: 105,
          question: "What is the value of √144?",
          options: ["11", "12", "13", "14"],
          correctAnswer: 1,
          explanation: "12 × 12 = 144, so √144 = 12"
        }
      ],

      // Final exam sample questions (5)
      final: [
        {
          id: 201,
          question: "Solve for x: 2x + 5 = 13",
          options: ["3", "4", "5", "6"],
          correctAnswer: 3,
          explanation: "2x + 5 = 13 → 2x = 8 → x = 4"
        },
        {
          id: 202,
          question: "If f(x) = 2x + 3, find f⁻¹(x)",
          options: ["x-3", "(x-3)/2", "2x-3", "x/2-3"],
          correctAnswer: 1,
          explanation: "Solve y = 2x + 3 for x: x = (y-3)/2"
        },
        {
          id: 203,
          question: "Compute derivative of f(x) = sin(x)",
          options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
          correctAnswer: 0,
          explanation: "d/dx(sin(x)) = cos(x)"
        },
        {
          id: 204,
          question: "Compute ∫x dx",
          options: ["x² + C", "x²/2 + C", "2x + C", "ln(x)"],
          correctAnswer: 1,
          explanation: "Integral ∫x dx = x²/2 + C"
        },
        {
          id: 205,
          question: "What is the sum of first 10 natural numbers?",
          options: ["45", "50", "55", "60"],
          correctAnswer: 2,
          explanation: "n(n+1)/2 = 10*11/2 = 55"
        }
      ]
  }
},






{
  id: "physics-1",
  name: "Physics I",
  description: "Mechanics, thermodynamics, and waves - foundational physics for science majors.",
  icon: "⚛️",
  color: "from-purple-500 to-pink-500",

  questions: {
    // Quiz questions (basic)
    quiz: [
      {
        id: 1,
        question: "What is Newton's Second Law of Motion?",
        options: ["F = ma", "E = mc²", "p = mv", "F = Gm₁m₂/r²"],
        correctAnswer: 0,
        explanation: "Newton's Second Law states that force equals mass times acceleration (F = ma)."
      },
      {
        id: 2,
        question: "What is the SI unit of force?",
        options: ["Joule", "Watt", "Newton", "Pascal"],
        correctAnswer: 2,
        explanation: "The SI unit of force is the Newton (N)."
      },
      {
        id: 3,
        question: "What type of energy does a moving object have?",
        options: ["Potential energy", "Kinetic energy", "Thermal energy", "Chemical energy"],
        correctAnswer: 1,
        explanation: "A moving object possesses kinetic energy."
      },
      {
        id: 4,
        question: "What is the acceleration due to gravity on Earth?",
        options: ["8.8 m/s²", "9.8 m/s²", "10.8 m/s²", "11.8 m/s²"],
        correctAnswer: 1,
        explanation: "The acceleration due to gravity on Earth is approximately 9.8 m/s²."
      },
      {
        id: 5,
        question: "Which of the following is a vector quantity?",
        options: ["Speed", "Distance", "Velocity", "Energy"],
        correctAnswer: 2,
        explanation: "Velocity has both magnitude and direction, so it is a vector."
      }
    ],

    // Mid exam questions (medium)
    mid: [
      {
        id: 101,
        question: "What is the formula for kinetic energy?",
        options: ["KE = mgh", "KE = ½mv²", "KE = Fd", "KE = ma"],
        correctAnswer: 1,
        explanation: "Kinetic energy is given by KE = ½mv²."
      },
      {
        id: 102,
        question: "A body of mass 2 kg moves with a velocity of 3 m/s. What is its kinetic energy?",
        options: ["6 J", "9 J", "12 J", "18 J"],
        correctAnswer: 1,
        explanation: "KE = ½mv² = ½ × 2 × 3² = 9 J."
      },
      {
        id: 103,
        question: "Which law states that energy cannot be created or destroyed?",
        options: [
          "Newton's First Law",
          "Law of Conservation of Energy",
          "Ohm's Law",
          "Law of Gravitation"
        ],
        correctAnswer: 1,
        explanation: "Energy can only be transformed, not created or destroyed."
      },
      {
        id: 104,
        question: "What is the momentum of a 5 kg object moving at 4 m/s?",
        options: ["9 kg·m/s", "20 kg·m/s", "25 kg·m/s", "40 kg·m/s"],
        correctAnswer: 1,
        explanation: "Momentum p = mv = 5 × 4 = 20 kg·m/s."
      },
      {
        id: 105,
        question: "Which physical quantity is measured in Joules?",
        options: ["Force", "Power", "Energy", "Pressure"],
        correctAnswer: 2,
        explanation: "Energy is measured in Joules (J)."
      }
    ],

    // Final exam questions (harder)
    final: [
      {
        id: 201,
        question: "A force of 10 N acts on a mass of 2 kg. What is the acceleration?",
        options: ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"],
        correctAnswer: 1,
        explanation: "Using F = ma → a = F/m = 10/2 = 5 m/s²."
      },
      {
        id: 202,
        question: "What happens to the kinetic energy of an object if its velocity is doubled?",
        options: [
          "Doubles",
          "Triples",
          "Quadruples",
          "Remains the same"
        ],
        correctAnswer: 2,
        explanation: "KE ∝ v². Doubling velocity increases KE by 4 times."
      },
      {
        id: 203,
        question: "A stone is thrown vertically upward. At the highest point, what is its velocity?",
        options: ["Maximum", "Zero", "Negative", "Constant"],
        correctAnswer: 1,
        explanation: "At the highest point, the velocity becomes zero."
      },
      {
        id: 204,
        question: "What is the SI unit of power?",
        options: ["Joule", "Newton", "Watt", "Pascal"],
        correctAnswer: 2,
        explanation: "Power is measured in Watts (W)."
      },
      {
        id: 205,
        question: "Which equation represents uniform linear motion?",
        options: [
          "v = u + at",
          "s = ut + ½at²",
          "v² = u² + 2as",
          "All of the above"
        ],
        correctAnswer: 3,
        explanation: "All listed equations are valid for uniform linear motion."
      }
    ]
  }
}
,








  {
    id: "economics",
    name: "Economics",
    description: "Microeconomics and macroeconomics principles for business and social science students.",
    icon: "📊",
    color: "from-green-500 to-emerald-500",
    questions:{
      
      quiz: [
      {
        id: 1,
        question: "What is the law of demand?",
        options: ["Higher price = higher demand", "Higher price = lower demand", "Price doesn't affect demand", "Demand creates supply"],
        correctAnswer: 1,
        explanation: "The law of demand states that as price increases, quantity demanded decreases, assuming all else is equal"
      },
      {
        id: 2,
        question: "What is GDP?",
        options: ["Government Domestic Product", "Gross Domestic Product", "General Domestic Price", "Gross Development Program"],
        correctAnswer: 1,
        explanation: "GDP stands for Gross Domestic Product - the total value of goods and services produced in a country"
      },
      {
        id: 3,
        question: "What is inflation?",
        options: ["Decrease in price levels", "Increase in unemployment", "General increase in price levels", "Decrease in money supply"],
        correctAnswer: 2,
        explanation: "Inflation is a general increase in prices and fall in the purchasing value of money"
      },
      {
        id: 4,
        question: "What does the invisible hand refer to in economics?",
        options: ["Government regulation", "Self-regulating nature of markets", "Tax collection", "Central planning"],
        correctAnswer: 1,
        explanation: "Adam Smith's 'invisible hand' describes how self-interest guides the most efficient use of resources"
      },
      {
        id: 5,
        question: "What is opportunity cost?",
        options: ["The cost of production", "The next best alternative foregone", "The profit margin", "The market price"],
        correctAnswer: 1,
        explanation: "Opportunity cost is the value of the next best alternative that must be given up"
      },
    ],

    mid: [
      {
        id: 6,
        question: "What type of market has only one seller?",
        options: ["Perfect competition", "Oligopoly", "Monopoly", "Monopsony"],
        correctAnswer: 2,
        explanation: "A monopoly is a market structure with only one seller who controls the entire supply"
      },
      {
        id: 7,
        question: "What is the equilibrium price?",
        options: ["Highest possible price", "Lowest possible price", "Price where supply equals demand", "Government-set price"],
        correctAnswer: 2,
        explanation: "Equilibrium price is where quantity supplied equals quantity demanded"
      },
      {
        id: 8,
        question: "What is fiscal policy?",
        options: ["Central bank money supply", "Government spending and taxation", "Interest rate changes", "Exchange rate policy"],
        correctAnswer: 1,
        explanation: "Fiscal policy involves government decisions about spending and taxation"
      },
      {
        id: 9,
        question: "What does the Consumer Price Index measure?",
        options: ["Stock prices", "Unemployment rate", "Changes in price level", "Interest rates"],
        correctAnswer: 2,
        explanation: "CPI measures the average change in prices paid by consumers for goods and services"
      },
      {
        id: 10,
        question: "What is a normal good?",
        options: ["Demand decreases with income", "Demand increases with income", "Demand is constant", "Has no substitutes"],
        correctAnswer: 1,
        explanation: "A normal good is one where demand increases as consumer income rises"
      },
    ],
    
    final: [
      {
        id: 11,
        question: "What causes a shift in the supply curve?",
        options: ["Price change", "Change in production costs", "Change in quantity demanded", "Consumer preferences"],
        correctAnswer: 1,
        explanation: "Changes in production costs, technology, or input prices shift the supply curve"
      },
      {
        id: 12,
        question: "What is the multiplier effect?",
        options: ["Spending creates more spending", "Taxes reduce income", "Imports exceed exports", "Inflation increases"],
        correctAnswer: 0,
        explanation: "The multiplier effect shows how initial spending leads to larger increases in national income"
      },
      {
        id: 13,
        question: "What is a tariff?",
        options: ["Export subsidy", "Tax on imports", "Trade agreement", "Currency devaluation"],
        correctAnswer: 1,
        explanation: "A tariff is a tax imposed on imported goods and services"
      },
      {
        id: 14,
        question: "What is monetary policy?",
        options: ["Government spending", "Central bank controlling money supply", "Tax collection", "Budget allocation"],
        correctAnswer: 1,
        explanation: "Monetary policy involves central bank actions to control money supply and interest rates"
      },
      {
        id: 15,
        question: "What is the unemployment rate?",
        options: ["% of population without jobs", "% of labor force without jobs", "Total jobless people", "New job openings"],
        correctAnswer: 1,
        explanation: "Unemployment rate is the percentage of the labor force that is jobless and seeking employment"
      }
    ]
  },
  },





  {
    id: "emerging-technology",
    name: "Emerging Technology",
    description: "Artificial Intelligence, IoT, Blockchain, and modern technological innovations.",
    icon: "🚀",
    color: "from-orange-500 to-red-500",
    questions: {
      quiz: [
      {
        id: 1,
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Core Processing Unit"],
        correctAnswer: 0,
        explanation: "CPU stands for Central Processing Unit, the main processor of a computer"
      },
      {
        id: 2,
        question: "Which of the following is an input device?",
        options: ["Monitor", "Printer", "Keyboard", "Speaker"],
        correctAnswer: 2,
        explanation: "A keyboard is an input device used to enter data into a computer"
      },
      {
        id: 3,
        question: "What is RAM?",
        options: ["Read Access Memory", "Random Access Memory", "Run Application Memory", "Rapid Access Module"],
        correctAnswer: 1,
        explanation: "RAM stands for Random Access Memory, the computer's short-term memory"
      },
      {
        id: 4,
        question: "What is the binary representation of the number 5?",
        options: ["101", "110", "011", "100"],
        correctAnswer: 0,
        explanation: "5 in binary is 101 (4 + 0 + 1 = 5)"
      },
      {
        id: 5,
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Link", "Home Tool Markup Language"],
        correctAnswer: 0,
        explanation: "HTML stands for Hyper Text Markup Language, used for creating web pages"
      },
    ],
    mid: [
      {
        id: 6,
        question: "What is an operating system?",
        options: ["Application software", "System software managing hardware and software", "Programming language", "Web browser"],
        correctAnswer: 1,
        explanation: "An operating system is system software that manages computer hardware and software resources"
      },
      {
        id: 7,
        question: "What is the function of a router?",
        options: ["Store data", "Process calculations", "Connect networks and direct traffic", "Display output"],
        correctAnswer: 2,
        explanation: "A router connects different networks and directs data traffic between them"
      },
      {
        id: 8,
        question: "What does URL stand for?",
        options: ["Universal Resource Locator", "Uniform Resource Locator", "United Reference Link", "Universal Reference Link"],
        correctAnswer: 1,
        explanation: "URL stands for Uniform Resource Locator, the address of a web resource"
      },
      {
        id: 9,
        question: "Which is a programming language?",
        options: ["HTTP", "Python", "PDF", "USB"],
        correctAnswer: 1,
        explanation: "Python is a popular programming language used for various applications"
      },
      {
        id: 10,
        question: "What is cloud computing?",
        options: ["Weather prediction", "Storing/accessing data over internet", "Fast processing", "Wireless networking"],
        correctAnswer: 1,
        explanation: "Cloud computing is the delivery of computing services over the internet"
      },

    ],
    final: [
      {
        id: 11,
        question: "What is a firewall?",
        options: ["A virus", "Network security system", "A web browser", "An operating system"],
        correctAnswer: 1,
        explanation: "A firewall is a network security system that monitors and controls network traffic"
      },
      {
        id: 12,
        question: "What is 1 GB in MB?",
        options: ["100 MB", "500 MB", "1000 MB", "1024 MB"],
        correctAnswer: 3,
        explanation: "1 Gigabyte equals 1024 Megabytes (using binary system)"
      },
      {
        id: 13,
        question: "What is the purpose of an IP address?",
        options: ["Identify websites", "Identify devices on a network", "Encrypt data", "Speed up internet"],
        correctAnswer: 1,
        explanation: "An IP address uniquely identifies a device on a network"
      },
      {
        id: 14,
        question: "What is phishing?",
        options: ["A game", "A programming technique", "A cyber attack to steal information", "A search engine"],
        correctAnswer: 2,
        explanation: "Phishing is a cyber attack that uses deceptive emails or websites to steal information"
      },
      {
        id: 15,
        question: "What does SSD stand for?",
        options: ["Solid State Drive", "Super Speed Disk", "System Storage Device", "Standard Storage Drive"],
        correctAnswer: 0,
        explanation: "SSD stands for Solid State Drive, a fast storage device with no moving parts"
      }
    ]
  },
  },


  {
    id: "english",
    name: "English Language",
    description: "English grammar, composition, and communication skills.",
    icon: "📝",
    color: "from-indigo-500 to-blue-500",
    questions: {
      quiz: [
      {
        id: 1,
        question: "Which is a correct sentence?",
        options: ["She don't like apples.", "She doesn't likes apples.", "She doesn't like apples.", "She not like apples."],
        correctAnswer: 2,
        explanation: "With third person singular (she), we use 'doesn't' + base verb 'like'"
      },
      {
        id: 2,
        question: "What is the past tense of 'go'?",
        options: ["Goed", "Gone", "Went", "Goes"],
        correctAnswer: 2,
        explanation: "'Went' is the simple past tense of the irregular verb 'go'"
      },
      {
        id: 3,
        question: "Which word is an adjective?",
        options: ["Quickly", "Beautiful", "Running", "Happily"],
        correctAnswer: 1,
        explanation: "'Beautiful' is an adjective that describes a noun"
      },
      {
        id: 4,
        question: "What is the plural of 'child'?",
        options: ["Childs", "Childes", "Children", "Childrens"],
        correctAnswer: 2,
        explanation: "'Children' is the irregular plural form of 'child'"
      },
      {
        id: 5,
        question: "Which sentence uses the correct punctuation?",
        options: ["Its a beautiful day", "It's a beautiful day.", "Its' a beautiful day.", "It's a beautiful day"],
        correctAnswer: 1,
        explanation: "'It's' is the contraction of 'it is', and sentences end with a period"
      },
    ],
    mid: [
      {
        id: 6,
        question: "What type of word is 'and'?",
        options: ["Noun", "Verb", "Conjunction", "Adverb"],
        correctAnswer: 2,
        explanation: "'And' is a conjunction used to connect words, phrases, or clauses"
      },
      {
        id: 7,
        question: "Which is the correct comparative form of 'good'?",
        options: ["Gooder", "More good", "Better", "Best"],
        correctAnswer: 2,
        explanation: "'Better' is the irregular comparative form of 'good'"
      },
      {
        id: 8,
        question: "What is a synonym for 'happy'?",
        options: ["Sad", "Joyful", "Angry", "Tired"],
        correctAnswer: 1,
        explanation: "'Joyful' is a synonym (similar meaning) for 'happy'"
      },
      {
        id: 9,
        question: "Which sentence is in passive voice?",
        options: ["The cat ate the mouse.", "The mouse was eaten by the cat.", "The cat is eating.", "Cats eat mice."],
        correctAnswer: 1,
        explanation: "In passive voice, the object of the action becomes the subject of the sentence"
      },
      {
        id: 10,
        question: "What is the antonym of 'ancient'?",
        options: ["Old", "Historic", "Modern", "Traditional"],
        correctAnswer: 2,
        explanation: "'Modern' is the antonym (opposite meaning) of 'ancient'"
      },
    ],
    final: [
      {
        id: 11,
        question: "Which is a complex sentence?",
        options: ["I like pizza.", "I like pizza and pasta.", "Although I was tired, I finished my work.", "Pizza is delicious."],
        correctAnswer: 2,
        explanation: "A complex sentence contains an independent clause and a dependent clause (Although...)"
      },
      {
        id: 12,
        question: "What is the subject in: 'The quick brown fox jumps over the lazy dog'?",
        options: ["Quick", "Fox", "Dog", "Jumps"],
        correctAnswer: 1,
        explanation: "'Fox' is the subject - the one performing the action of jumping"
      },
      {
        id: 13,
        question: "Which is the correct possessive form?",
        options: ["The dogs bone", "The dog's bone", "The dogs' bones (one dog)", "The dog bone"],
        correctAnswer: 1,
        explanation: "For singular possession, add apostrophe + s: dog's bone"
      },
      {
        id: 14,
        question: "What is a thesis statement?",
        options: ["A question", "The main argument of an essay", "A conclusion", "A bibliography"],
        correctAnswer: 1,
        explanation: "A thesis statement presents the main argument or claim of an essay"
      },
      {
        id: 15,
        question: "Which is an example of alliteration?",
        options: ["The cat sat on the mat", "Peter Piper picked peppers", "She sells seashells", "Both B and C"],
        correctAnswer: 3,
        explanation: "Alliteration is the repetition of initial consonant sounds in nearby words"
      }
    ]
  },
  },



  {
    id: "chemistry",
    name: "Chemistry I",
    description: "General chemistry including atomic structure, bonding, and reactions.",
    icon: "🧪",
    color: "from-teal-500 to-cyan-500",
    questions: {

      quiz: [
        {
          id: 1,
          question: "What is the atomic number of Carbon?",
          options: ["4", "6", "8", "12"],
          correctAnswer: 1,
        explanation: "Carbon has an atomic number of 6, meaning it has 6 protons in its nucleus"
      },
      {
        id: 2,
        question: "What is H₂O commonly known as?",
        options: ["Hydrogen peroxide", "Water", "Heavy water", "Hydroxide"],
        correctAnswer: 1,
        explanation: "H₂O is the chemical formula for water - two hydrogen atoms and one oxygen atom"
      },
      {
        id: 3,
        question: "What type of bond forms between sodium and chlorine?",
        options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
        correctAnswer: 1,
        explanation: "Sodium chloride (NaCl) forms through ionic bonding - transfer of electrons"
      },
      {
        id: 4,
        question: "What is the pH of a neutral solution?",
        options: ["0", "7", "14", "1"],
        correctAnswer: 1,
        explanation: "A neutral solution has a pH of 7, like pure water at 25°C"
      },
      {
        id: 5,
        question: "Which element has the symbol 'Fe'?",
        options: ["Fluorine", "Francium", "Iron", "Fermium"],
        correctAnswer: 2,
        explanation: "Fe is the symbol for Iron, from its Latin name 'Ferrum'"
      },
    ],
    mid: [
      {
        id: 6,
        question: "What is the most abundant gas in Earth's atmosphere?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
        correctAnswer: 2,
        explanation: "Nitrogen makes up about 78% of Earth's atmosphere"
      },
      {
        id: 7,
        question: "What is an isotope?",
        options: ["Same protons, different neutrons", "Same neutrons, different protons", "Same electrons, different protons", "Different element"],
        correctAnswer: 0,
        explanation: "Isotopes have the same number of protons but different numbers of neutrons"
      },
      {
        id: 8,
        question: "What is the molar mass of H₂O?",
        options: ["16 g/mol", "18 g/mol", "20 g/mol", "2 g/mol"],
        correctAnswer: 1,
        explanation: "H₂O = 2(1) + 16 = 18 g/mol (hydrogen = 1, oxygen = 16)"
      },
      {
        id: 9,
        question: "What type of reaction is: 2H₂ + O₂ → 2H₂O?",
        options: ["Decomposition", "Synthesis/Combination", "Single replacement", "Double replacement"],
        correctAnswer: 1,
        explanation: "This is a synthesis reaction where elements combine to form a compound"
      },
      {
        id: 10,
        question: "What is Avogadro's number?",
        options: ["6.022 × 10²³", "3.14 × 10²³", "6.022 × 10²²", "9.81 × 10²³"],
        correctAnswer: 0,
        explanation: "Avogadro's number is 6.022 × 10²³, the number of particles in one mole"
      },
    ],
    final: [
      {
        id: 11,
        question: "Which subatomic particle has a negative charge?",
        options: ["Proton", "Neutron", "Electron", "Nucleus"],
        correctAnswer: 2,
        explanation: "Electrons carry a negative charge and orbit the nucleus"
      },
      {
        id: 12,
        question: "What is a catalyst?",
        options: ["Speeds up reaction without being consumed", "Slows down reaction", "Is consumed in reaction", "Stops reaction"],
        correctAnswer: 0,
        explanation: "A catalyst speeds up a chemical reaction without being consumed"
      },
      {
        id: 13,
        question: "What is the valence of oxygen in most compounds?",
        options: ["+2", "-2", "+1", "-1"],
        correctAnswer: 1,
        explanation: "Oxygen typically has a valence of -2 in most compounds"
      },
      {
        id: 14,
        question: "What state of matter has a definite volume but no definite shape?",
        options: ["Solid", "Liquid", "Gas", "Plasma"],
        correctAnswer: 1,
        explanation: "Liquids have definite volume but take the shape of their container"
      },
      {
        id: 15,
        question: "Which is an exothermic reaction?",
        options: ["Melting ice", "Photosynthesis", "Combustion", "Evaporation"],
        correctAnswer: 2,
        explanation: "Combustion releases heat energy, making it an exothermic reaction"
      }
    ]
  },
  },



  {
    id: "biology",
    name: "Biology I",
    description: "Cell biology, genetics, and basic life sciences.",
    icon: "🧬",
    color: "from-lime-500 to-green-500",
    questions: {
      quiz: [
        {
          id: 1,
          question: "What is the powerhouse of the cell?",
          options: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic reticulum"],
          correctAnswer: 2,
        explanation: "Mitochondria are called the powerhouse as they produce ATP through cellular respiration"
      },
      {
        id: 2,
        question: "What is DNA?",
        options: ["Deoxyribonucleic acid", "Dinitrogen acid", "Dioxin nucleic acid", "Dynamic nucleic acid"],
        correctAnswer: 0,
        explanation: "DNA stands for Deoxyribonucleic Acid, the genetic material in most organisms"
      },
      {
        id: 3,
        question: "What process do plants use to make food?",
        options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"],
        correctAnswer: 1,
        explanation: "Plants use photosynthesis to convert sunlight, water, and CO₂ into glucose"
      },
      {
        id: 4,
        question: "What is the basic unit of life?",
        options: ["Atom", "Molecule", "Cell", "Tissue"],
        correctAnswer: 2,
        explanation: "The cell is the basic structural and functional unit of all living organisms"
      },
      {
        id: 5,
        question: "How many chromosomes do humans have?",
        options: ["23", "46", "44", "48"],
        correctAnswer: 1,
        explanation: "Humans have 46 chromosomes (23 pairs) in most cells"
      },
    ],
    mid: [
      {
        id: 6,
        question: "What carries genetic information from DNA to ribosomes?",
        options: ["tRNA", "mRNA", "rRNA", "DNA polymerase"],
        correctAnswer: 1,
        explanation: "mRNA (messenger RNA) carries genetic information from DNA to ribosomes"
      },
      {
        id: 7,
        question: "What is the function of the cell membrane?",
        options: ["Protein synthesis", "Control what enters/exits cell", "Store genetic material", "Produce energy"],
        correctAnswer: 1,
        explanation: "The cell membrane controls what substances enter and leave the cell"
      },
      {
        id: 8,
        question: "What is mitosis?",
        options: ["Cell death", "Cell division producing identical cells", "Cell fusion", "Cell differentiation"],
        correctAnswer: 1,
        explanation: "Mitosis is cell division that produces two identical daughter cells"
      },
      {
        id: 9,
        question: "Which blood cells fight infection?",
        options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        correctAnswer: 1,
        explanation: "White blood cells (leukocytes) are part of the immune system and fight infections"
      },
      {
        id: 10,
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Brain", "Skin", "Heart"],
        correctAnswer: 2,
        explanation: "The skin is the largest organ, covering the entire body surface"
      },
    ],
    final: [
      {
        id: 11,
        question: "What is homeostasis?",
        options: ["Cell division", "Maintaining stable internal conditions", "Genetic mutation", "Protein synthesis"],
        correctAnswer: 1,
        explanation: "Homeostasis is the maintenance of stable internal conditions in an organism"
      },
      {
        id: 12,
        question: "What type of organism has no nucleus?",
        options: ["Eukaryote", "Prokaryote", "Virus", "Fungus"],
        correctAnswer: 1,
        explanation: "Prokaryotes (like bacteria) lack a membrane-bound nucleus"
      },
      {
        id: 13,
        question: "What is the function of chlorophyll?",
        options: ["Digest food", "Absorb light for photosynthesis", "Transport water", "Store energy"],
        correctAnswer: 1,
        explanation: "Chlorophyll absorbs light energy needed for photosynthesis"
      },
      {
        id: 14,
        question: "What are the building blocks of proteins?",
        options: ["Nucleotides", "Amino acids", "Fatty acids", "Glucose"],
        correctAnswer: 1,
        explanation: "Amino acids are the monomers that combine to form proteins"
      },
      {
        id: 15,
        question: "What is natural selection?",
        options: ["Random mating", "Survival and reproduction of the fittest", "Genetic engineering", "Artificial breeding"],
        correctAnswer: 1,
        explanation: "Natural selection is the process where organisms better adapted to their environment survive and reproduce"
      }
    ]
  },
  },


  {
    id: "logic",
    name: "Logic & Critical Thinking",
    description: "Fundamentals of logical reasoning and critical analysis.",
    icon: "🧠",
    color: "from-violet-500 to-purple-500",
    questions: {
      quiz: [
        {
          id: 1,
          question: "What is a valid argument?",
          options: ["True premises only", "True conclusion only", "If premises are true, conclusion must be true", "Popular opinion"],
          correctAnswer: 2,
        explanation: "A valid argument is one where if the premises are true, the conclusion must be true"
      },
      {
        id: 2,
        question: "What is a syllogism?",
        options: ["A type of fallacy", "A form of deductive reasoning with two premises", "An inductive argument", "A rhetorical device"],
        correctAnswer: 1,
        explanation: "A syllogism is a form of deductive reasoning with two premises leading to a conclusion"
      },
      {
        id: 3,
        question: "What is the ad hominem fallacy?",
        options: ["Attacking the person instead of the argument", "Appeal to emotion", "False cause", "Circular reasoning"],
        correctAnswer: 0,
        explanation: "Ad hominem attacks the character of the person making the argument rather than the argument itself"
      },
      {
        id: 4,
        question: "What is inductive reasoning?",
        options: ["From general to specific", "From specific to general", "Purely mathematical", "Based on authority"],
        correctAnswer: 1,
        explanation: "Inductive reasoning moves from specific observations to general conclusions"
      },
      {
        id: 5,
        question: "What is a premise?",
        options: ["The conclusion of an argument", "A statement supporting the conclusion", "A question", "An opinion"],
        correctAnswer: 1,
        explanation: "A premise is a statement that provides support or evidence for the conclusion"
      },
    ],
    mid: [
      {
        id: 6,
        question: "What is the straw man fallacy?",
        options: ["Misrepresenting someone's argument", "Using weak evidence", "Appeal to tradition", "False dichotomy"],
        correctAnswer: 0,
        explanation: "Straw man involves misrepresenting an opponent's argument to make it easier to attack"
      },
      {
        id: 7,
        question: "What makes an argument sound?",
        options: ["Valid only", "True premises only", "Valid with true premises", "Popular acceptance"],
        correctAnswer: 2,
        explanation: "A sound argument is both valid and has all true premises"
      },
      {
        id: 8,
        question: "What is the appeal to authority fallacy?",
        options: ["Using expert testimony", "Claiming truth because an authority said so", "Citing sources", "Logical proof"],
        correctAnswer: 1,
        explanation: "Appeal to authority claims something is true simply because an authority figure said so, without proper evidence"
      },
      {
        id: 9,
        question: "What is deductive reasoning?",
        options: ["From specific to general", "From general to specific", "Based on probability", "Based on emotion"],
        correctAnswer: 1,
        explanation: "Deductive reasoning moves from general premises to specific conclusions"
      },
      {
        id: 10,
        question: "What is circular reasoning?",
        options: ["Using logic", "Conclusion is used as a premise", "Multiple premises", "Strong evidence"],
        correctAnswer: 1,
        explanation: "Circular reasoning occurs when the conclusion is assumed in one of the premises"
      },
    ],
    final: [
      {
        id: 11,
        question: "What is a logical contradiction?",
        options: ["Two statements that can both be true", "Two statements that cannot both be true", "An unsupported claim", "A valid argument"],
        correctAnswer: 1,
        explanation: "A contradiction occurs when two statements cannot both be true simultaneously"
      },
      {
        id: 12,
        question: "What is the false dichotomy fallacy?",
        options: ["Presenting only two options when more exist", "Using false statistics", "Appealing to emotion", "Personal attack"],
        correctAnswer: 0,
        explanation: "False dichotomy presents only two options when there are actually more possibilities"
      },
      {
        id: 13,
        question: "What is critical thinking?",
        options: ["Negative thinking", "Objective analysis and evaluation", "Memorizing facts", "Following authority"],
        correctAnswer: 1,
        explanation: "Critical thinking is the objective analysis and evaluation of an issue to form a judgment"
      },
      {
        id: 14,
        question: "What is the slippery slope fallacy?",
        options: ["Claiming one event will lead to extreme consequences", "Using weak arguments", "Attacking character", "Circular logic"],
        correctAnswer: 0,
        explanation: "Slippery slope argues that one action will inevitably lead to extreme negative consequences"
      },
      {
        id: 15,
        question: "What is a counterexample?",
        options: ["A supporting example", "An example that disproves a claim", "A similar example", "A hypothetical case"],
        correctAnswer: 1,
        explanation: "A counterexample is an example that demonstrates a claim or argument is false"
      }
    ]
  },
  },

  {
    id: "history-ethiopia",
    name: "History of Ethiopia and the Horn",
    description: "Ancient civilizations, medieval kingdoms, and modern history of Ethiopia and the Horn of Africa.",
    icon: "🏛️",
    color: "from-amber-500 to-orange-500",
    questions:{
      quiz: [
      { id: 1, question: "When was the Aksumite Empire at its peak?", options: ["1st-7th century AD", "10th-12th century AD", "15th-16th century AD", "18th-19th century AD"], correctAnswer: 0, explanation: "The Aksumite Empire reached its peak between the 1st and 7th century AD, becoming one of the four great powers of the ancient world." },
      { id: 2, question: "Who is credited with founding the Solomonic Dynasty?", options: ["Menelik I", "Lalibela", "Tewodros II", "Haile Selassie"], correctAnswer: 0, explanation: "Menelik I, son of King Solomon and Queen of Sheba, is credited with founding the Solomonic Dynasty according to Ethiopian tradition." },
      { id: 3, question: "What was the Battle of Adwa significant for?", options: ["Ethiopian defeat of Italian forces", "Unification of Ethiopia", "End of slavery", "Beginning of monarchy"], correctAnswer: 0, explanation: "The Battle of Adwa in 1896 was a decisive Ethiopian victory against Italian colonial forces, making Ethiopia one of only two African nations to resist colonization." },
      { id: 4, question: "Who built the rock-hewn churches of Lalibela?", options: ["Emperor Lalibela", "Emperor Menelik II", "Emperor Tewodros", "Emperor Yohannes"], correctAnswer: 0, explanation: "Emperor Lalibela built the 11 rock-hewn churches in the 12th century, which are now UNESCO World Heritage Sites." },
      { id: 5, question: "When did Ethiopia adopt Christianity as a state religion?", options: ["4th century AD", "1st century AD", "7th century AD", "10th century AD"], correctAnswer: 0, explanation: "Ethiopia adopted Christianity as the state religion in the 4th century AD under King Ezana of Aksum." },
      ],
      mid: [
      { id: 6, question: "What is the Ge'ez script?", options: ["Ancient Ethiopian writing system", "A type of architecture", "A religious practice", "A trade route"], correctAnswer: 0, explanation: "Ge'ez is an ancient Ethiopian script that is still used in the Ethiopian Orthodox Church and is the basis for Amharic and Tigrinya scripts." },


      { id: 7, question: "Who was Emperor Tewodros II?", options: ["Unifier of modern Ethiopia", "Last emperor of Ethiopia", "Founder of Addis Ababa", "Leader of Adwa battle"], correctAnswer: 0, explanation: "Emperor Tewodros II (1855-1868) is credited with beginning the unification of modern Ethiopia after the Era of Princes." },
      { id: 8, question: "When was Addis Ababa founded?", options: ["1886", "1896", "1906", "1916"], correctAnswer: 0, explanation: "Addis Ababa was founded in 1886 by Emperor Menelik II and his wife Empress Taytu." },
      { id: 9, question: "What was the Era of the Princes (Zemene Mesafint)?", options: ["Period of regional warlords ruling Ethiopia", "Golden age of Ethiopian empire", "Colonial period", "Democratic era"], correctAnswer: 0, explanation: "The Zemene Mesafint (1769-1855) was a period when Ethiopian emperors were powerless and regional warlords held real power." },
      
      { id: 10, question: "Which country briefly occupied Ethiopia from 1936-1941?", options: ["Italy", "Britain", "France", "Portugal"], correctAnswer: 0, explanation: "Italy occupied Ethiopia from 1936 to 1941 under Mussolini, ending with British-assisted liberation." },
      ],
      final: [
      { id: 11, question: "What is the Kebra Nagast?", options: ["Ethiopian national epic", "Ancient law code", "Religious hymn book", "Historical chronicle"], correctAnswer: 0, explanation: "The Kebra Nagast (Glory of Kings) is Ethiopia's national epic describing the lineage of Ethiopian kings from Solomon and Sheba." },

      { id: 12, question: "When did the Derg regime come to power?", options: ["1974", "1984", "1964", "1994"], correctAnswer: 0, explanation: "The Derg, a military junta, seized power in 1974 after deposing Emperor Haile Selassie." },
      { id: 13, question: "What was the significance of Harar in Ethiopian history?", options: ["Ancient Islamic center and trading hub", "Site of first Ethiopian church", "Capital of Aksumite Empire", "Location of Battle of Adwa"], correctAnswer: 0, explanation: "Harar was an important Islamic center and trading hub, known as the fourth holiest city in Islam." },
      { id: 14, question: "Who led Ethiopia during the Battle of Adwa?", options: ["Emperor Menelik II", "Emperor Tewodros II", "Emperor Yohannes IV", "Ras Teferi"], correctAnswer: 0, explanation: "Emperor Menelik II led Ethiopian forces to victory at the Battle of Adwa in 1896." },
      { id: 15, question: "What is the Lucy fossil's significance to Ethiopia?", options: ["Oldest human ancestor found in Ethiopia", "Ethiopian queen", "Religious artifact", "Ancient text"], correctAnswer: 0, explanation: "Lucy (Dinkinesh in Amharic) is a 3.2 million-year-old hominid fossil discovered in Ethiopia in 1974, crucial to understanding human evolution." }
    ]
  },
  },

  {
    id: "civic-ethics",
    name: "Civic and Ethical Education",
    description: "Ethiopian constitution, citizenship, human rights, and ethical principles.",
    icon: "⚖️",
    color: "from-blue-600 to-indigo-500",
    questions: {
      quiz: [
      { id: 1, question: "When was the current Ethiopian Constitution adopted?", options: ["1995", "1991", "2000", "1987"], correctAnswer: 0, explanation: "The current Constitution of the Federal Democratic Republic of Ethiopia was adopted in 1995." },
      { id: 2, question: "What type of government system does Ethiopia have?", options: ["Federal parliamentary republic", "Unitary presidential", "Constitutional monarchy", "Military dictatorship"], correctAnswer: 0, explanation: "Ethiopia is a federal parliamentary republic with power distributed between federal and regional governments." },
      { id: 3, question: "How many regional states does Ethiopia have?", options: ["11", "9", "10", "12"], correctAnswer: 0, explanation: "Ethiopia currently has 11 regional states as per the federal structure." },
      { id: 4, question: "What is the basis of Ethiopian federalism?", options: ["Ethnic federalism", "Geographic federalism", "Economic federalism", "Administrative federalism"], correctAnswer: 0, explanation: "Ethiopian federalism is based on ethnic/linguistic lines, with regional states organized around major ethnic groups." },
      
      
      { id: 5, question: "What does Article 39 of the Ethiopian Constitution address?", options: ["Rights of Nations and Nationalities", "Presidential powers", "Economic policy", "Military organization"], correctAnswer: 0, explanation: "Article 39 addresses the rights of Nations, Nationalities and Peoples, including the right to self-determination." },

      ],
      mid: [
      { id: 6, question: "What is the role of the House of Federation?", options: ["Represents nations and nationalities", "Makes laws", "Commands military", "Manages economy"], correctAnswer: 0, explanation: "The House of Federation represents the nations, nationalities and peoples of Ethiopia and interprets the constitution." },
      { id: 7, question: "What ethical principle emphasizes treating others fairly?", options: ["Justice", "Charity", "Loyalty", "Courage"], correctAnswer: 0, explanation: "Justice is the ethical principle of treating others fairly and giving them what they deserve." },
      { id: 8, question: "What is civic responsibility?", options: ["Duties citizens owe to their community", "Government obligations", "International relations", "Economic duties"], correctAnswer: 0, explanation: "Civic responsibility refers to the duties and obligations that citizens have towards their community and nation." },
      { id: 9, question: "What is the purpose of the Ethiopian Human Rights Commission?", options: ["Protect and promote human rights", "Make laws", "Conduct elections", "Manage economy"], correctAnswer: 0, explanation: "The Ethiopian Human Rights Commission is established to protect and promote human rights in Ethiopia." },
      { id: 10, question: "What is the significance of tolerance in a diverse society?", options: ["Accepting differences peacefully", "Ignoring others", "Imposing beliefs", "Avoiding interaction"], correctAnswer: 0, explanation: "Tolerance means accepting and respecting differences among people, essential for peaceful coexistence in diverse societies." },
      ],
      final: [
      { id: 11, question: "What is democratic governance?", options: ["Rule by the people through elected representatives", "Rule by military", "Rule by monarchy", "Rule by religious leaders"], correctAnswer: 0, explanation: "Democratic governance is a system where power derives from the people and is exercised through elected representatives." },
      { id: 12, question: "What is the rule of law?", options: ["Everyone is subject to the law equally", "Laws made by rulers", "Traditional customs", "Religious law"], correctAnswer: 0, explanation: "Rule of law means all persons and institutions, including government, are accountable to laws that are publicly known and equally enforced." },
      { id: 13, question: "What does transparency in government mean?", options: ["Open and accessible decision-making", "Secret operations", "Limited information", "Controlled media"], correctAnswer: 0, explanation: "Transparency means government actions and decisions are open to public scrutiny and information is accessible to citizens." },
      { id: 14, question: "What is good governance?", options: ["Effective, accountable, and inclusive government", "Strong military rule", "Centralized power", "Limited citizen participation"], correctAnswer: 0, explanation: "Good governance involves effective, participatory, transparent, accountable, and inclusive decision-making." },
      { id: 15, question: "What is the purpose of elections in a democracy?", options: ["Allow citizens to choose their leaders", "Confirm existing leaders", "Create conflict", "Distribute wealth"], correctAnswer: 0, explanation: "Elections allow citizens to exercise their democratic right to choose and hold accountable their leaders." }
    ]
  },
  },

  {
    id: "anthropology",
    name: "Introduction to Anthropology",
    description: "Study of human societies, cultures, and their development across time.",
    icon: "🌍",
    color: "from-teal-500 to-cyan-500",
    questions: {
      quiz: [
      { id: 1, question: "What is anthropology?", options: ["Study of human beings and their societies", "Study of animals", "Study of plants", "Study of geology"], correctAnswer: 0, explanation: "Anthropology is the scientific study of humans, human behavior, and societies in the past and present." },
      { id: 2, question: "What are the four main branches of anthropology?", options: ["Cultural, Archaeological, Biological, Linguistic", "Social, Political, Economic, Religious", "Historical, Modern, Ancient, Future", "Eastern, Western, Northern, Southern"], correctAnswer: 0, explanation: "The four main branches are cultural anthropology, archaeology, biological/physical anthropology, and linguistic anthropology." },
      { id: 3, question: "What is cultural relativism?", options: ["Understanding cultures on their own terms", "Judging other cultures", "Cultural superiority", "Ignoring differences"], correctAnswer: 0, explanation: "Cultural relativism is the principle of understanding and evaluating a culture based on its own values and beliefs, not those of another culture." },
      { id: 4, question: "What is ethnocentrism?", options: ["Judging other cultures by one's own standards", "Accepting all cultures equally", "Studying ethnic groups", "Cultural exchange"], correctAnswer: 0, explanation: "Ethnocentrism is the tendency to evaluate other cultures according to the standards of one's own culture, often viewing one's own as superior." },
      { id: 5, question: "What is participant observation?", options: ["Living among people being studied", "Observing from distance", "Reading about cultures", "Conducting surveys only"], correctAnswer: 0, explanation: "Participant observation is a research method where anthropologists immerse themselves in the community they are studying." },
      ],
      mid: [
      
      { id: 6, question: "What is ethnography?", options: ["Detailed description of a culture", "Study of ethnic conflicts", "Population statistics", "Language study"], correctAnswer: 0, explanation: "Ethnography is the systematic study and written description of a people's culture based on firsthand observation." },
      { id: 7, question: "What is a kinship system?", options: ["Social relationships based on family ties", "Political organization", "Economic system", "Religious beliefs"], correctAnswer: 0, explanation: "Kinship systems are the culturally defined relationships based on blood ties and marriage that organize social life." },
      { id: 8, question: "What is material culture?", options: ["Physical objects made by humans", "Beliefs and values", "Languages", "Social norms"], correctAnswer: 0, explanation: "Material culture consists of the physical objects, resources, and spaces that people use to define their culture." },
      { id: 9, question: "What is the significance of the Omo Valley to anthropology?", options: ["Home to diverse ethnic groups in Ethiopia", "First human fossils", "Ancient civilization", "Trade route"], correctAnswer: 0, explanation: "The Omo Valley in Ethiopia is home to numerous distinct ethnic groups and is important for studying cultural diversity." },
      { id: 10, question: "What is socialization?", options: ["Process of learning cultural norms", "Making friends", "Building societies", "Political participation"], correctAnswer: 0, explanation: "Socialization is the lifelong process by which individuals learn and internalize the values, beliefs, and norms of their culture." },
      ],
      final: [
      { id: 11, question: "What is a rite of passage?", options: ["Ceremony marking life transitions", "Religious prayer", "Legal process", "Educational achievement"], correctAnswer: 0, explanation: "Rites of passage are ceremonies that mark important transitions in a person's life, such as birth, coming of age, or marriage." },
      { id: 12, question: "What is cultural diffusion?", options: ["Spread of cultural elements between societies", "Cultural isolation", "Cultural preservation", "Cultural extinction"], correctAnswer: 0, explanation: "Cultural diffusion is the spread of cultural beliefs, practices, and items from one society to another." },
      { id: 13, question: "What is a society?", options: ["Group of people sharing a culture", "Government structure", "Economic system", "Religious organization"], correctAnswer: 0, explanation: "A society is a group of people who share a common culture, territory, and identity." },
      { id: 14, question: "What is holism in anthropology?", options: ["Studying all aspects of human life together", "Focusing on one aspect only", "Comparing cultures", "Historical analysis"], correctAnswer: 0, explanation: "Holism is the anthropological approach of studying all aspects of human existence—biological, cultural, social—as interconnected." },
      { id: 15, question: "What is applied anthropology?", options: ["Using anthropological knowledge to solve problems", "Theoretical study only", "Academic research", "Historical documentation"], correctAnswer: 0, explanation: "Applied anthropology uses anthropological knowledge and methods to address real-world problems in areas like development, health, and education." }
    ]
  },
  },


  {
    id: "geography-ethiopia",
    name: "Geography of Ethiopia and the Horn",
    description: "Physical geography, climate, resources, and human geography of Ethiopia and neighboring regions.",
    icon: "🗺️",
    color: "from-green-600 to-lime-500",
    questions: {
      quiz: [
        { id: 1, question: "What is the highest peak in Ethiopia?", options: ["Ras Dashen", "Mount Batu", "Mount Tullu Dimtu", "Mount Abuna Yosef"], correctAnswer: 0, explanation: "Ras Dashen at 4,550 meters is the highest peak in Ethiopia and the fourth highest in Africa." },
        { id: 2, question: "What is the Great Rift Valley?", options: ["A geological fault line running through Ethiopia", "A river system", "A mountain range", "A desert region"], correctAnswer: 0, explanation: "The Great Rift Valley is a geological fault system that runs through Ethiopia, creating lakes and shaping the landscape." },
        { id: 3, question: "Which river is the main tributary of the Nile from Ethiopia?", options: ["Blue Nile (Abbay)", "Awash River", "Omo River", "Wabe Shebelle"], correctAnswer: 0, explanation: "The Blue Nile (Abbay in Amharic) originates from Lake Tana and provides about 85% of the Nile's water." },
        { id: 4, question: "What type of climate does the Ethiopian Highlands have?", options: ["Tropical highland climate", "Desert climate", "Mediterranean climate", "Tropical rainforest"], correctAnswer: 0, explanation: "The Ethiopian Highlands have a tropical highland climate with moderate temperatures and distinct wet and dry seasons." },
        { id: 5, question: "What is the Danakil Depression known for?", options: ["One of the hottest places on Earth", "Highest elevation", "Largest forest", "Biggest lake"], correctAnswer: 0, explanation: "The Danakil Depression is one of the hottest places on Earth, lying 125 meters below sea level with volcanic activity." },
      ],
      mid: [
        { id: 6, question: "Which lake is the largest in Ethiopia?", options: ["Lake Tana", "Lake Abaya", "Lake Chamo", "Lake Ziway"], correctAnswer: 0, explanation: "Lake Tana is the largest lake in Ethiopia and the source of the Blue Nile." },
      { id: 7, question: "What is the Simien Mountains known for?", options: ["UNESCO World Heritage Site with unique wildlife", "Gold mining", "Agricultural center", "Industrial zone"], correctAnswer: 0, explanation: "The Simien Mountains are a UNESCO World Heritage Site, home to endemic species like the Gelada baboon and Ethiopian wolf." },
      { id: 8, question: "What percentage of the Nile's water comes from Ethiopia?", options: ["About 85%", "About 50%", "About 25%", "About 10%"], correctAnswer: 0, explanation: "Ethiopia contributes approximately 85% of the Nile River's water, primarily through the Blue Nile." },
      { id: 9, question: "What is Ethiopia's population rank in Africa?", options: ["Second most populous", "Most populous", "Third most populous", "Fourth most populous"], correctAnswer: 0, explanation: "Ethiopia is the second most populous country in Africa after Nigeria." },
      { id: 10, question: "Which countries share borders with Ethiopia?", options: ["Eritrea, Djibouti, Somalia, Kenya, South Sudan, Sudan", "Only Eritrea and Kenya", "Only Sudan and Somalia", "Only Djibouti and Kenya"], correctAnswer: 0, explanation: "Ethiopia is bordered by Eritrea, Djibouti, Somalia, Kenya, South Sudan, and Sudan." },
      ],
      final: [
      { id: 11, question: "What is the Awash River important for?", options: ["Irrigation and hydropower in eastern Ethiopia", "Source of Blue Nile", "Border with Kenya", "Largest waterfall"], correctAnswer: 0, explanation: "The Awash River is important for irrigation and hydropower in eastern Ethiopia, supporting agriculture and industry." },
      { id: 12, question: "What natural resources is Ethiopia known for?", options: ["Coffee, gold, tantalum, and hydropower potential", "Oil and diamonds", "Coal and iron", "Uranium and copper"], correctAnswer: 0, explanation: "Ethiopia is known for coffee (its birthplace), gold, tantalum, and enormous hydropower potential from its rivers." },
      { id: 13, question: "What is the Ogaden region characterized by?", options: ["Semi-arid lowlands in eastern Ethiopia", "Highland forests", "Rift Valley lakes", "Northern mountains"], correctAnswer: 0, explanation: "The Ogaden is a semi-arid region in eastern Ethiopia, home to Somali pastoralist communities." },
      { id: 14, question: "What is the significance of Addis Ababa's elevation?", options: ["One of the highest capital cities in the world", "At sea level", "Below sea level", "Moderate elevation"], correctAnswer: 0, explanation: "At about 2,355 meters, Addis Ababa is one of the highest capital cities in the world, giving it a mild climate." },
      { id: 15, question: "What is enset cultivation unique to?", options: ["Ethiopian Highlands", "Sahara Desert", "Nile Valley", "East African Coast"], correctAnswer: 0, explanation: "Enset (false banana) cultivation is unique to the Ethiopian Highlands, serving as a staple food for millions." }
    ]
  },
  },


  {
    id: "psychology",
    name: "General Psychology",
    description: "Introduction to psychological concepts, human behavior, and mental processes.",
    icon: "🧠",
    color: "from-pink-500 to-rose-500",
    questions: {
      quiz: [
        { id: 1, question: "What is psychology?", options: ["Scientific study of mind and behavior", "Study of society", "Study of history", "Study of philosophy"], correctAnswer: 0, explanation: "Psychology is the scientific study of the mind and behavior, including conscious and unconscious phenomena." },
        { id: 2, question: "Who is considered the father of modern psychology?", options: ["Wilhelm Wundt", "Sigmund Freud", "B.F. Skinner", "Carl Jung"], correctAnswer: 0, explanation: "Wilhelm Wundt established the first psychology laboratory in 1879 and is considered the father of modern psychology." },
        { id: 3, question: "What is the unconscious mind according to Freud?", options: ["Part of mind containing hidden thoughts and desires", "Conscious awareness", "Sleep state", "Memory storage"], correctAnswer: 0, explanation: "Freud proposed that the unconscious mind contains thoughts, memories, and desires that are not accessible to conscious awareness but influence behavior." },
        { id: 4, question: "What is classical conditioning?", options: ["Learning through association", "Learning through rewards", "Genetic learning", "Social learning"], correctAnswer: 0, explanation: "Classical conditioning, discovered by Pavlov, is learning that occurs through associating two stimuli together." },
        { id: 5, question: "What is operant conditioning?", options: ["Learning through consequences", "Learning through observation", "Innate behavior", "Emotional learning"], correctAnswer: 0, explanation: "Operant conditioning, developed by Skinner, is learning where behavior is strengthened or weakened by its consequences (rewards or punishments)." },
      ],
      mid: [
        { id: 6, question: "What are the stages of Piaget's cognitive development?", options: ["Sensorimotor, Preoperational, Concrete, Formal", "Oral, Anal, Phallic, Latent", "Trust, Autonomy, Initiative, Industry", "Id, Ego, Superego, Self"], correctAnswer: 0, explanation: "Piaget's four stages are: Sensorimotor (0-2 years), Preoperational (2-7), Concrete Operational (7-11), and Formal Operational (11+)." },
      { id: 7, question: "What is Maslow's hierarchy of needs?", options: ["Theory of human motivation based on needs levels", "Classification of mental disorders", "Memory model", "Learning theory"], correctAnswer: 0, explanation: "Maslow's hierarchy organizes human needs from basic (physiological, safety) to higher-level (belonging, esteem, self-actualization)." },
      { id: 8, question: "What is short-term memory capacity?", options: ["About 7 items (plus or minus 2)", "Unlimited", "About 20 items", "About 3 items"], correctAnswer: 0, explanation: "George Miller found that short-term memory can hold about 7 items (plus or minus 2), known as Miller's Law." },
      { id: 9, question: "What is cognitive dissonance?", options: ["Mental discomfort from conflicting beliefs", "Memory loss", "Learning difficulty", "Attention deficit"], correctAnswer: 0, explanation: "Cognitive dissonance is the mental discomfort experienced when holding contradictory beliefs or when behavior contradicts beliefs." },
      { id: 10, question: "What is the nature vs. nurture debate?", options: ["Genetic vs. environmental influences on development", "Good vs. evil", "Mind vs. body", "Conscious vs. unconscious"], correctAnswer: 0, explanation: "The nature vs. nurture debate concerns the relative importance of genetic (nature) versus environmental (nurture) factors in human development." },
      ],
      final: [
      { id: 11, question: "What is stress according to psychology?", options: ["Response to demands exceeding resources", "A type of emotion", "A mental disorder", "Physical tiredness"], correctAnswer: 0, explanation: "Stress is the psychological and physical response when demands placed on us exceed our perceived ability to cope." },
      { id: 12, question: "What is emotional intelligence?", options: ["Ability to understand and manage emotions", "Academic intelligence", "Creative ability", "Physical coordination"], correctAnswer: 0, explanation: "Emotional intelligence is the ability to recognize, understand, and manage our own emotions and those of others." },
      { id: 13, question: "What is social psychology?", options: ["Study of how people influence each other", "Individual therapy", "Brain science", "Child development"], correctAnswer: 0, explanation: "Social psychology studies how people's thoughts, feelings, and behaviors are influenced by the presence of others." },
      { id: 14, question: "What is perception?", options: ["Process of organizing and interpreting sensory information", "Memory storage", "Learning process", "Emotional response"], correctAnswer: 0, explanation: "Perception is the process by which we organize and interpret sensory information to understand our environment." },
      { id: 15, question: "What is a defense mechanism?", options: ["Unconscious strategy to reduce anxiety", "Physical protection", "Conscious decision", "Learning technique"], correctAnswer: 0, explanation: "Defense mechanisms are unconscious psychological strategies used to protect oneself from anxiety and unpleasant thoughts." }
    ]
  },
  },


  {
    id: "global-affairs",
    name: "Global Affairs",
    description: "International relations, global issues, diplomacy, and Ethiopia's role in world affairs.",
    icon: "🌐",
    color: "from-sky-500 to-blue-500",
    questions:{
      quiz: [
      { id: 1, question: "When was the United Nations established?", options: ["1945", "1919", "1955", "1935"], correctAnswer: 0, explanation: "The United Nations was established in 1945 after World War II to promote international cooperation and prevent future conflicts." },
      { id: 2, question: "What is Ethiopia's role in the African Union?", options: ["Headquarters location in Addis Ababa", "Largest economy", "Most military power", "Oldest democracy"], correctAnswer: 0, explanation: "Ethiopia hosts the African Union headquarters in Addis Ababa, making it a center of African diplomacy." },
      { id: 3, question: "What is globalization?", options: ["Increasing interconnection of world economies and cultures", "National isolation", "Regional trade only", "Military alliances"], correctAnswer: 0, explanation: "Globalization is the process of increasing interconnection and interdependence among the world's economies, cultures, and populations." },
      { id: 4, question: "What are the Sustainable Development Goals?", options: ["UN goals for global development by 2030", "Trade agreements", "Military alliances", "Regional organizations"], correctAnswer: 0, explanation: "The SDGs are 17 interlinked global goals adopted by the UN in 2015 as a blueprint for peace and prosperity." },
      { id: 5, question: "What is sovereignty?", options: ["Supreme authority of a state over its territory", "International law", "Trade policy", "Military power"], correctAnswer: 0, explanation: "Sovereignty is the supreme authority of a state to govern itself and make decisions within its territory without external interference." },
      ],
      mid: [
      { id: 6, question: "What is diplomacy?", options: ["Managing international relations through negotiation", "Military action", "Economic sanctions", "Trade agreements"], correctAnswer: 0, explanation: "Diplomacy is the art and practice of conducting negotiations and managing relations between nations." },
      { id: 7, question: "What is the World Trade Organization?", options: ["Organization regulating international trade", "Military alliance", "Human rights body", "Environmental agency"], correctAnswer: 0, explanation: "The WTO is an international organization that regulates and facilitates international trade between nations." },
      { id: 8, question: "What is a non-governmental organization (NGO)?", options: ["Non-profit organization independent of government", "Government agency", "International business", "Political party"], correctAnswer: 0, explanation: "NGOs are non-profit organizations that operate independently of governments, often focusing on humanitarian, environmental, or social issues." },
      { id: 9, question: "What is climate change's global impact?", options: ["Rising temperatures and extreme weather worldwide", "Local weather changes", "Seasonal variation", "Regional cooling"], correctAnswer: 0, explanation: "Climate change causes global impacts including rising temperatures, sea level rise, extreme weather events, and ecosystem disruption." },
      { id: 10, question: "What is the significance of the Horn of Africa strategically?", options: ["Control of Red Sea and Indian Ocean trade routes", "Oil reserves", "Diamond mining", "Technology hub"], correctAnswer: 0, explanation: "The Horn of Africa is strategically significant for its location controlling access to the Red Sea and major international shipping routes." },
      ],
      final: [
      { id: 11, question: "What is human rights?", options: ["Rights inherent to all human beings", "Legal privileges", "Government permissions", "Cultural traditions"], correctAnswer: 0, explanation: "Human rights are rights inherent to all human beings, regardless of race, sex, nationality, ethnicity, language, religion, or any other status." },
      { id: 12, question: "What is IGAD?", options: ["Intergovernmental Authority on Development in East Africa", "European Union body", "Asian trade organization", "American defense alliance"], correctAnswer: 0, explanation: "IGAD is a regional organization of eight East African countries working on development, peace, and security, headquartered in Djibouti." },
      { id: 13, question: "What is the purpose of international law?", options: ["Regulate relations between states", "Govern domestic affairs", "Control trade only", "Manage military only"], correctAnswer: 0, explanation: "International law establishes norms and rules that govern relations between states and international organizations." },
      { id: 14, question: "What is foreign policy?", options: ["A country's strategy in dealing with other nations", "Domestic economic policy", "Internal security", "Local governance"], correctAnswer: 0, explanation: "Foreign policy is a government's strategy for dealing with other nations, covering diplomacy, trade, military, and more." },
      { id: 15, question: "What is peacekeeping?", options: ["International efforts to maintain peace in conflict areas", "Domestic policing", "Military conquest", "Economic sanctions"], correctAnswer: 0, explanation: "Peacekeeping involves international military and civilian personnel deployed to help countries transition from conflict to peace." }
    ]
  },
  },


  {
    id: "inclusiveness",
    name: "Inclusiveness",
    description: "Diversity, equity, disability rights, gender equality, and inclusive development.",
    icon: "🤝",
    color: "from-purple-500 to-violet-500",
    questions: {
      quiz: [
        { id: 1, question: "What is inclusiveness?", options: ["Practice of including all people regardless of differences", "Excluding certain groups", "Homogeneous society", "Selective participation"], correctAnswer: 0, explanation: "Inclusiveness is the practice of providing equal access and opportunities to all people, regardless of their differences or backgrounds." },
        { id: 2, question: "What is diversity?", options: ["Variety of different backgrounds and characteristics", "Uniformity", "Single culture", "Exclusion"], correctAnswer: 0, explanation: "Diversity refers to the variety of different social and cultural identities among people existing together in a setting." },
        { id: 3, question: "What does equity mean?", options: ["Fair treatment based on individual needs", "Equal treatment for all", "Preferential treatment", "No treatment"], correctAnswer: 0, explanation: "Equity means providing fair treatment and opportunities by addressing different needs and circumstances, unlike equality which gives everyone the same." },
        { id: 4, question: "What is gender equality?", options: ["Equal rights and opportunities for all genders", "Women's superiority", "Men's superiority", "Gender separation"], correctAnswer: 0, explanation: "Gender equality means that all genders have equal rights, responsibilities, and opportunities in all areas of life." },
        { id: 5, question: "What is a disability?", options: ["Physical or mental condition that limits activities", "Inability to work", "Personal weakness", "Temporary illness"], correctAnswer: 0, explanation: "Disability is a physical or mental condition that limits a person's movements, senses, or activities, often requiring accommodations." },
      ],

      mid: [
        { id: 6, question: "What is accessibility?", options: ["Design of products usable by people with disabilities", "Luxury features", "Extra costs", "Optional additions"], correctAnswer: 0, explanation: "Accessibility refers to designing products, services, and environments that can be used by people with disabilities." },
      { id: 7, question: "What is discrimination?", options: ["Unfair treatment based on group membership", "Fair competition", "Equal treatment", "Merit-based selection"], correctAnswer: 0, explanation: "Discrimination is the unjust treatment of different categories of people, especially on grounds of race, age, sex, or disability." },
      { id: 8, question: "What is social inclusion?", options: ["Ensuring marginalized groups can participate in society", "Social clubs", "Entertainment", "Economic growth"], correctAnswer: 0, explanation: "Social inclusion is the process of improving the ability of marginalized individuals and groups to participate in society." },
      { id: 9, question: "What are affirmative actions?", options: ["Policies to increase representation of disadvantaged groups", "Punishment policies", "Immigration laws", "Trade regulations"], correctAnswer: 0, explanation: "Affirmative actions are policies that aim to increase representation of disadvantaged groups in education and employment." },
      { id: 10, question: "What is the social model of disability?", options: ["Society creates barriers for disabled people", "Disability is a personal problem", "Medical condition only", "Genetic defect"], correctAnswer: 0, explanation: "The social model views disability as created by barriers in society rather than by the individual's impairment." },
      ],
      final: [
      { id: 11, question: "What is intersectionality?", options: ["How different forms of discrimination overlap", "Road intersections", "Cultural mixing", "Economic theory"], correctAnswer: 0, explanation: "Intersectionality examines how different forms of discrimination (race, gender, class, disability) overlap and create compounded effects." },
      { id: 12, question: "What is inclusive education?", options: ["All students learning together regardless of differences", "Separate schools", "Online only", "Home schooling"], correctAnswer: 0, explanation: "Inclusive education means all students, including those with disabilities, learn together in regular schools with appropriate support." },
      { id: 13, question: "What is reasonable accommodation?", options: ["Modifications to enable participation despite disability", "Luxury services", "Extra payment", "Optional features"], correctAnswer: 0, explanation: "Reasonable accommodation refers to modifications or adjustments that enable people with disabilities to participate equally." },
      { id: 14, question: "What is the purpose of diversity training?", options: ["Increase awareness of different backgrounds", "Enforce uniformity", "Reduce workforce", "Increase profits only"], correctAnswer: 0, explanation: "Diversity training aims to increase awareness and understanding of different backgrounds and reduce bias in organizations." },
      { id: 15, question: "What is universal design?", options: ["Design usable by all people without adaptation", "Expensive design", "Custom design", "Temporary design"], correctAnswer: 0, explanation: "Universal design creates products and environments usable by all people, to the greatest extent possible, without adaptation." }
    ]
  }
}];












export const getCourse = (courseId: string): Course | undefined => {
  return courses.find(course => course.id === courseId);
};

export const getQuestions = (courseId: string, examType: ExamType, count: number): Question[] => {
  const course = getCourse(courseId);
  if (!course) return [];
  
  let questionPool: Question[] = [];
  
  // Check if questions are organized by exam type
  if (!Array.isArray(course.questions)) {
    // Use the specific exam type's questions
    questionPool = course.questions[examType] || [];
  } else {
    // Use the general question bank (for backward compatibility)
    questionPool = course.questions;
  }
  
  // Check if we have enough questions
  if (questionPool.length === 0) {
    console.warn(`No questions found for course ${courseId}, exam type ${examType}`);
    return [];
  }
  
  if (questionPool.length < count) {
    console.warn(`Not enough questions in pool. Requested: ${count}, Available: ${questionPool.length}`);
    return questionPool; // Return all available
  }
  
  // Shuffle and return requested number of questions
  const shuffled = [...questionPool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const getAllCourses = (): Course[] => {
  return courses;
};

