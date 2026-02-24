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
        },

        { 
  id: 1, 
  question: "What is the derivative of x^2?", 
  options: ["2x", "x", "x^3", "2"], 
  correctAnswer: 0, 
  explanation: "Using the power rule, the derivative of x^n is nx^(n-1). Therefore, the derivative of x^2 is 2x." 
},

{ 
  id: 2, 
  question: "What is the integral of 2x dx?", 
  options: ["x^2 + C", "2x + C", "x + C", "x^2"], 
  correctAnswer: 0, 
  explanation: "The integral of 2x is x^2 + C." 
},

{ 
  id: 3, 
  question: "What is the limit of (1/x) as x approaches infinity?", 
  options: ["1", "0", "Infinity", "-1"], 
  correctAnswer: 1, 
  explanation: "As x becomes very large, 1/x approaches 0." 
},

{ 
  id: 4, 
  question: "Solve: 2x + 5 = 13", 
  options: ["3", "4", "5", "6"], 
  correctAnswer: 1, 
  explanation: "2x = 8, therefore x = 4." 
},

{ 
  id: 5, 
  question: "What is the determinant of matrix [[1,2],[3,4]]?", 
  options: ["-2", "2", "10", "0"], 
  correctAnswer: 0, 
  explanation: "Determinant = (1)(4) - (2)(3) = 4 - 6 = -2." 
},

{ 
  id: 6, 
  question: "What is sin(90°)?", 
  options: ["0", "1", "-1", "1/2"], 
  correctAnswer: 1, 
  explanation: "The sine of 90 degrees equals 1." 
},

{ 
  id: 7, 
  question: "If f(x) = 3x + 2, find f(4).", 
  options: ["10", "12", "14", "16"], 
  correctAnswer: 2, 
  explanation: "f(4) = 3(4) + 2 = 12 + 2 = 14." 
},

{ 
  id: 8, 
  question: "What is the value of log10(100)?", 
  options: ["1", "2", "10", "100"], 
  correctAnswer: 1, 
  explanation: "10^2 = 100, so log10(100) = 2." 
},

{ 
  id: 9, 
  question: "What is the solution to x^2 - 9 = 0?", 
  options: ["±3", "3", "-3", "0"], 
  correctAnswer: 0, 
  explanation: "x^2 = 9, so x = ±3." 
},

{ 
  id: 10, 
  question: "What is the area of a circle with radius r?", 
  options: ["2πr", "πr^2", "πd", "r^2"], 
  correctAnswer: 1, 
  explanation: "The area formula of a circle is πr^2." 
},

{ 
  id: 11, 
  question: "What is the derivative of sin(x)?", 
  options: ["cos(x)", "-sin(x)", "-cos(x)", "tan(x)"], 
  correctAnswer: 0, 
  explanation: "The derivative of sin(x) is cos(x)." 
},

{ 
  id: 12, 
  question: "Find the inverse of 5 under multiplication.", 
  options: ["5", "-5", "1/5", "0"], 
  correctAnswer: 2, 
  explanation: "The multiplicative inverse of 5 is 1/5." 
},

{ 
  id: 13, 
  question: "What is the slope of the line y = 4x + 1?", 
  options: ["1", "4", "-4", "0"], 
  correctAnswer: 1, 
  explanation: "In slope-intercept form y = mx + b, the slope is m. Here m = 4." 
},

{ 
  id: 14, 
  question: "What is the probability of getting a head when tossing a fair coin?", 
  options: ["0", "1", "1/2", "1/3"], 
  correctAnswer: 2, 
  explanation: "A fair coin has two equally likely outcomes, so probability is 1/2." 
},

{ 
  id: 15, 
  question: "What is the value of 3! (3 factorial)?", 
  options: ["3", "6", "9", "12"], 
  correctAnswer: 1, 
  explanation: "3! = 3 × 2 × 1 = 6." 
},

{ 
  id: 16, 
  question: "What is the standard form of a quadratic equation?", 
  options: ["ax + b = 0", "ax^2 + bx + c = 0", "a/x + b", "ax^3 + bx^2"], 
  correctAnswer: 1, 
  explanation: "The standard quadratic form is ax^2 + bx + c = 0." 
},

{ 
  id: 17, 
  question: "What is the mean of the numbers 2, 4, 6, 8?", 
  options: ["4", "5", "6", "7"], 
  correctAnswer: 1, 
  explanation: "Mean = (2+4+6+8)/4 = 20/4 = 5." 
},

{ 
  id: 18, 
  question: "What is the distance formula in coordinate geometry?", 
  options: ["√((x2-x1)^2 + (y2-y1)^2)", "x2-x1+y2-y1", "x1x2+y1y2", "(x+y)^2"], 
  correctAnswer: 0, 
  explanation: "Distance between two points is √((x2-x1)^2 + (y2-y1)^2)." 
},

{ 
  id: 19, 
  question: "What is e approximately equal to?", 
  options: ["2.14", "3.14", "2.71", "1.61"], 
  correctAnswer: 2, 
  explanation: "The mathematical constant e is approximately 2.71." 
},

{ 
  id: 20, 
  question: "What is the derivative of e^x?", 
  options: ["x e^x", "e^x", "1", "ln x"], 
  correctAnswer: 1, 
  explanation: "The derivative of e^x is e^x." 
},

{ 
  id: 21, 
  question: "If A = {1,2,3} and B = {3,4,5}, what is A ∩ B?", 
  options: ["{1,2}", "{3}", "{4,5}", "{1,2,3,4,5}"], 
  correctAnswer: 1, 
  explanation: "The intersection contains common elements, which is {3}." 
},

{ 
  id: 22, 
  question: "What is the value of cos(0°)?", 
  options: ["0", "1", "-1", "1/2"], 
  correctAnswer: 1, 
  explanation: "Cosine of 0 degrees equals 1." 
},

{ 
  id: 23, 
  question: "What is the solution of log(x) = 1 (base 10)?", 
  options: ["1", "10", "0", "100"], 
  correctAnswer: 1, 
  explanation: "10^1 = 10, so x = 10." 
},

{ 
  id: 24, 
  question: "What is the sum of the first 5 natural numbers?", 
  options: ["10", "15", "20", "25"], 
  correctAnswer: 1, 
  explanation: "1+2+3+4+5 = 15." 
},

{ 
  id: 25, 
  question: "What is the derivative of ln(x)?", 
  options: ["1/x", "x", "ln(x)", "e^x"], 
  correctAnswer: 0, 
  explanation: "The derivative of ln(x) is 1/x." 
},
      ],

      // Final exam sample questions (5)
      final:
      [
  {
    id: 301,
    question: "Which of the following is a subset of {1, 2, 3, 4}?",
    options: ["{5}", "{1, 2}", "{0, 1}", "{6, 7}"],
    correctAnswer: 1,
    explanation: "A subset contains elements all of which are in the original set. {1, 2} ⊆ {1, 2, 3, 4}"
  },
  {
    id: 302,
    question: "If A = {1, 2, 3} and B = {2, 3, 4}, what is A ∪ B?",
    options: ["{1, 2, 3}", "{2, 3, 4}", "{1, 2, 3, 4}", "{1, 4}"],
    correctAnswer: 2,
    explanation: "The union of two sets includes all elements from both sets without repetition: {1,2,3,4}"
  },
  {
    "id": 303,
    "question": "Which relation on set {1,2,3} is reflexive?",
    "options": ["{(1,1),(2,2)}", "{(1,2),(2,3)}", "{(1,1),(2,2),(3,3)}", "{(1,3)}"],
    "correctAnswer": 2,
    "explanation": "A relation is reflexive if every element is related to itself. {(1,1),(2,2),(3,3)} is reflexive."
  },
  {
    "id": 304,
    "question": "Let f(x) = 2x + 3. What type of function is f(x)?",
    "options": ["Linear", "Quadratic", "Polynomial of degree 2", "Exponential"],
    "correctAnswer": 0,
    "explanation": "f(x) = 2x + 3 is a linear function because it has the form f(x) = mx + b."
  },
  {
    "id": 305,
    "question": "Which of the following is a polynomial of degree 3?",
    "options": ["x² + 2x + 1", "x³ - 4x² + x - 7", "2x + 5", "x⁴ - 1"],
    "correctAnswer": 1,
    "explanation": "A polynomial of degree 3 has the highest exponent as 3. x³ - 4x² + x - 7 satisfies this."
  },
  {
    "id": 306,
    "question": "If f(x) = x² + 1 and g(x) = x + 2, what is (f ∘ g)(x)?",
    "options": ["x² + 2", "x² + 4x + 5", "x³ + 2", "x² + x + 2"],
    "correctAnswer": 1,
    "explanation": "(f ∘ g)(x) = f(g(x)) = (x+2)² + 1 = x² + 4x + 5"
  },
  {
    "id": 307,
    "question": "Which set represents the range of f(x) = x²?",
    "options": ["All real numbers", "All positive real numbers", "[0, ∞)", "(-∞,0]"],
    "correctAnswer": 2,
    "explanation": "The square of any real number is non-negative, so the range is [0, ∞)."
  },
  {
    "id": 308,
    "question": "A function f is one-to-one if:",
    "options": ["f(a) = f(b) implies a = b", "f(a) = f(b) implies a ≠ b", "Every y has multiple x", "Domain equals codomain"],
    "correctAnswer": 0,
    "explanation": "A function is one-to-one (injective) if different inputs map to different outputs."
  },
          { 
  id: 1, 
  question: "What is the derivative of x^2?", 
  options: ["2x", "x", "x^3", "2"], 
  correctAnswer: 0, 
  explanation: "Using the power rule, the derivative of x^n is nx^(n-1). Therefore, the derivative of x^2 is 2x." 
},

{ 
  id: 2, 
  question: "What is the integral of 2x dx?", 
  options: ["x^2 + C", "2x + C", "x + C", "x^2"], 
  correctAnswer: 0, 
  explanation: "The integral of 2x is x^2 + C." 
},

{ 
  id: 3, 
  question: "What is the limit of (1/x) as x approaches infinity?", 
  options: ["1", "0", "Infinity", "-1"], 
  correctAnswer: 1, 
  explanation: "As x becomes very large, 1/x approaches 0." 
},

{ 
  id: 4, 
  question: "Solve: 2x + 5 = 13", 
  options: ["3", "4", "5", "6"], 
  correctAnswer: 1, 
  explanation: "2x = 8, therefore x = 4." 
},

{ 
  id: 5, 
  question: "What is the determinant of matrix [[1,2],[3,4]]?", 
  options: ["-2", "2", "10", "0"], 
  correctAnswer: 0, 
  explanation: "Determinant = (1)(4) - (2)(3) = 4 - 6 = -2." 
},

{ 
  id: 6, 
  question: "What is sin(90°)?", 
  options: ["0", "1", "-1", "1/2"], 
  correctAnswer: 1, 
  explanation: "The sine of 90 degrees equals 1." 
},

{ 
  id: 7, 
  question: "If f(x) = 3x + 2, find f(4).", 
  options: ["10", "12", "14", "16"], 
  correctAnswer: 2, 
  explanation: "f(4) = 3(4) + 2 = 12 + 2 = 14." 
},

{ 
  id: 8, 
  question: "What is the value of log10(100)?", 
  options: ["1", "2", "10", "100"], 
  correctAnswer: 1, 
  explanation: "10^2 = 100, so log10(100) = 2." 
},

{ 
  id: 9, 
  question: "What is the solution to x^2 - 9 = 0?", 
  options: ["±3", "3", "-3", "0"], 
  correctAnswer: 0, 
  explanation: "x^2 = 9, so x = ±3." 
},

{ 
  id: 10, 
  question: "What is the area of a circle with radius r?", 
  options: ["2πr", "πr^2", "πd", "r^2"], 
  correctAnswer: 1, 
  explanation: "The area formula of a circle is πr^2." 
},

{ 
  id: 11, 
  question: "What is the derivative of sin(x)?", 
  options: ["cos(x)", "-sin(x)", "-cos(x)", "tan(x)"], 
  correctAnswer: 0, 
  explanation: "The derivative of sin(x) is cos(x)." 
},

{ 
  id: 12, 
  question: "Find the inverse of 5 under multiplication.", 
  options: ["5", "-5", "1/5", "0"], 
  correctAnswer: 2, 
  explanation: "The multiplicative inverse of 5 is 1/5." 
},

{ 
  id: 13, 
  question: "What is the slope of the line y = 4x + 1?", 
  options: ["1", "4", "-4", "0"], 
  correctAnswer: 1, 
  explanation: "In slope-intercept form y = mx + b, the slope is m. Here m = 4." 
},

{ 
  id: 14, 
  question: "What is the probability of getting a head when tossing a fair coin?", 
  options: ["0", "1", "1/2", "1/3"], 
  correctAnswer: 2, 
  explanation: "A fair coin has two equally likely outcomes, so probability is 1/2." 
},

{ 
  id: 15, 
  question: "What is the value of 3! (3 factorial)?", 
  options: ["3", "6", "9", "12"], 
  correctAnswer: 1, 
  explanation: "3! = 3 × 2 × 1 = 6." 
},

{ 
  id: 16, 
  question: "What is the standard form of a quadratic equation?", 
  options: ["ax + b = 0", "ax^2 + bx + c = 0", "a/x + b", "ax^3 + bx^2"], 
  correctAnswer: 1, 
  explanation: "The standard quadratic form is ax^2 + bx + c = 0." 
},

{ 
  id: 17, 
  question: "What is the mean of the numbers 2, 4, 6, 8?", 
  options: ["4", "5", "6", "7"], 
  correctAnswer: 1, 
  explanation: "Mean = (2+4+6+8)/4 = 20/4 = 5." 
},

{ 
  id: 18, 
  question: "What is the distance formula in coordinate geometry?", 
  options: ["√((x2-x1)^2 + (y2-y1)^2)", "x2-x1+y2-y1", "x1x2+y1y2", "(x+y)^2"], 
  correctAnswer: 0, 
  explanation: "Distance between two points is √((x2-x1)^2 + (y2-y1)^2)." 
},

{ 
  id: 19, 
  question: "What is e approximately equal to?", 
  options: ["2.14", "3.14", "2.71", "1.61"], 
  correctAnswer: 2, 
  explanation: "The mathematical constant e is approximately 2.71." 
},

{ 
  id: 20, 
  question: "What is the derivative of e^x?", 
  options: ["x e^x", "e^x", "1", "ln x"], 
  correctAnswer: 1, 
  explanation: "The derivative of e^x is e^x." 
},

{ 
  id: 21, 
  question: "If A = {1,2,3} and B = {3,4,5}, what is A ∩ B?", 
  options: ["{1,2}", "{3}", "{4,5}", "{1,2,3,4,5}"], 
  correctAnswer: 1, 
  explanation: "The intersection contains common elements, which is {3}." 
},

{ 
  id: 22, 
  question: "What is the value of cos(0°)?", 
  options: ["0", "1", "-1", "1/2"], 
  correctAnswer: 1, 
  explanation: "Cosine of 0 degrees equals 1." 
},

{ 
  id: 23, 
  question: "What is the solution of log(x) = 1 (base 10)?", 
  options: ["1", "10", "0", "100"], 
  correctAnswer: 1, 
  explanation: "10^1 = 10, so x = 10." 
},

{ 
  id: 24, 
  question: "What is the sum of the first 5 natural numbers?", 
  options: ["10", "15", "20", "25"], 
  correctAnswer: 1, 
  explanation: "1+2+3+4+5 = 15." 
},

{ 
  id: 25, 
  question: "What is the derivative of ln(x)?", 
  options: ["1/x", "x", "ln(x)", "e^x"], 
  correctAnswer: 0, 
  explanation: "The derivative of ln(x) is 1/x." 
},
  {
    "id": 309,
    "question": "If P(x) = x³ - 3x² + 2x, how many roots does P(x) have at most?",
    "options": ["1", "2", "3", "4"],
    "correctAnswer": 2,
    "explanation": "A polynomial of degree 3 has at most 3 real roots."
  },
  {
    "id": 310,
    "question": "Which of the following is an example of an equivalence relation?",
    "options": ["x < y", "x = y", "x > y", "x + y = 0"],
    "correctAnswer": 1,
    "explanation": "Equality (=) is reflexive, symmetric, and transitive, so it is an equivalence relation."
  }
 
      ,
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
      },
      { 
  id: 1, 
  question: "What is the SI unit of force?", 
  options: ["Joule", "Newton", "Watt", "Pascal"], 
  correctAnswer: 1, 
  explanation: "The SI unit of force is the Newton (N)." 
},

{ 
  id: 2, 
  question: "According to Newton’s First Law, an object will:", 
  options: ["Always accelerate", "Remain at rest or in uniform motion unless acted upon by a force", "Move in a circle", "Stop immediately"], 
  correctAnswer: 1, 
  explanation: "Newton’s First Law states that an object remains at rest or moves uniformly unless acted upon by an external force." 
},

{ 
  id: 3, 
  question: "What is the formula for kinetic energy?", 
  options: ["mv", "1/2 mv^2", "mgh", "F = ma"], 
  correctAnswer: 1, 
  explanation: "Kinetic energy is given by KE = 1/2 mv^2." 
},

{ 
  id: 4, 
  question: "What is the acceleration due to gravity on Earth?", 
  options: ["9.8 m/s^2", "10 m/s", "8.9 m/s", "9.8 m"], 
  correctAnswer: 0, 
  explanation: "The acceleration due to gravity on Earth is approximately 9.8 m/s^2." 
},

{ 
  id: 5, 
  question: "Which law states F = ma?", 
  options: ["Newton’s First Law", "Newton’s Second Law", "Newton’s Third Law", "Law of Gravitation"], 
  correctAnswer: 1, 
  explanation: "Newton’s Second Law relates force, mass, and acceleration." 
},

{ 
  id: 6, 
  question: "What is the SI unit of electric current?", 
  options: ["Volt", "Ampere", "Ohm", "Coulomb"], 
  correctAnswer: 1, 
  explanation: "The SI unit of electric current is the Ampere (A)." 
},

{ 
  id: 7, 
  question: "Ohm’s Law is expressed as:", 
  options: ["V = IR", "P = IV", "F = qE", "E = mc^2"], 
  correctAnswer: 0, 
  explanation: "Ohm’s Law states that voltage equals current times resistance." 
},

{ 
  id: 8, 
  question: "What type of wave is a sound wave?", 
  options: ["Transverse wave", "Longitudinal wave", "Electromagnetic wave", "Surface wave"], 
  correctAnswer: 1, 
  explanation: "Sound waves are longitudinal waves that require a medium." 
},

{ 
  id: 9, 
  question: "What is the SI unit of power?", 
  options: ["Joule", "Newton", "Watt", "Volt"], 
  correctAnswer: 2, 
  explanation: "The SI unit of power is the Watt (W)." 
},

{ 
  id: 10, 
  question: "What is the speed of light in vacuum?", 
  options: ["3 × 10^8 m/s", "3 × 10^6 m/s", "3 × 10^5 km/s", "3 × 10^3 m/s"], 
  correctAnswer: 0, 
  explanation: "The speed of light in vacuum is approximately 3 × 10^8 m/s." 
},

{ 
  id: 11, 
  question: "What principle explains why airplanes can fly?", 
  options: ["Pascal’s principle", "Bernoulli’s principle", "Archimedes’ principle", "Hooke’s law"], 
  correctAnswer: 1, 
  explanation: "Bernoulli’s principle explains lift due to pressure differences." 
},

{ 
  id: 12, 
  question: "What is momentum?", 
  options: ["Force × time", "Mass × velocity", "Energy per unit time", "Work done"], 
  correctAnswer: 1, 
  explanation: "Momentum is defined as mass multiplied by velocity (p = mv)." 
},

{ 
  id: 13, 
  question: "The unit of frequency is:", 
  options: ["Hertz", "Second", "Meter", "Decibel"], 
  correctAnswer: 0, 
  explanation: "Frequency is measured in Hertz (Hz)." 
},

{ 
  id: 14, 
  question: "What does E = mc^2 represent?", 
  options: ["Newton’s law", "Energy-mass equivalence", "Ohm’s law", "Wave equation"], 
  correctAnswer: 1, 
  explanation: "Einstein’s equation shows the relationship between energy and mass." 
},

{ 
  id: 15, 
  question: "Which device measures electric current?", 
  options: ["Voltmeter", "Ammeter", "Barometer", "Thermometer"], 
  correctAnswer: 1, 
  explanation: "An ammeter measures electric current." 
},

{ 
  id: 16, 
  question: "What is the SI unit of pressure?", 
  options: ["Pascal", "Newton", "Joule", "Watt"], 
  correctAnswer: 0, 
  explanation: "Pressure is measured in Pascals (Pa)." 
},

{ 
  id: 17, 
  question: "Hooke’s Law applies to:", 
  options: ["Electric circuits", "Elastic materials", "Light waves", "Magnetism"], 
  correctAnswer: 1, 
  explanation: "Hooke’s Law describes the behavior of elastic materials (F = -kx)." 
},

{ 
  id: 18, 
  question: "Which law states that every action has an equal and opposite reaction?", 
  options: ["Newton’s First Law", "Newton’s Second Law", "Newton’s Third Law", "Law of Thermodynamics"], 
  correctAnswer: 2, 
  explanation: "Newton’s Third Law describes action-reaction forces." 
},

{ 
  id: 19, 
  question: "What is the unit of electric resistance?", 
  options: ["Volt", "Ohm", "Ampere", "Watt"], 
  correctAnswer: 1, 
  explanation: "Resistance is measured in Ohms (Ω)." 
},

{ 
  id: 20, 
  question: "Which energy is stored in a stretched spring?", 
  options: ["Kinetic energy", "Chemical energy", "Elastic potential energy", "Thermal energy"], 
  correctAnswer: 2, 
  explanation: "A stretched spring stores elastic potential energy." 
},

{ 
  id: 21, 
  question: "The first law of thermodynamics is about conservation of:", 
  options: ["Mass", "Energy", "Momentum", "Charge"], 
  correctAnswer: 1, 
  explanation: "The first law of thermodynamics states that energy cannot be created or destroyed." 
},

{ 
  id: 22, 
  question: "Which type of lens converges light rays?", 
  options: ["Concave lens", "Convex lens", "Flat lens", "Diverging lens"], 
  correctAnswer: 1, 
  explanation: "A convex lens converges (focuses) parallel light rays." 
},

{ 
  id: 23, 
  question: "What is work done equal to?", 
  options: ["Force × distance", "Mass × acceleration", "Power × time", "Velocity × time"], 
  correctAnswer: 0, 
  explanation: "Work is calculated as force multiplied by distance (W = Fd)." 
},

{ 
  id: 24, 
  question: "Which particle has a negative charge?", 
  options: ["Proton", "Neutron", "Electron", "Photon"], 
  correctAnswer: 2, 
  explanation: "Electrons carry a negative electric charge." 
},

{ 
  id: 25, 
  question: "Refraction occurs when light:", 
  options: ["Reflects off a surface", "Changes direction in a different medium", "Stops completely", "Increases speed infinitely"], 
  correctAnswer: 1, 
  explanation: "Refraction is the bending of light as it passes from one medium to another." 
}
    ],

    // Final exam questions (harder)
    final:
    [
  {
    id: 1,
    question: "What is the SI unit of force?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    correctAnswer: 1,
    explanation: "The SI unit of force is Newton (N), named after Sir Isaac Newton."
  },
  {
    "id": 2,
    "question": "Which law states that for every action, there is an equal and opposite reaction?",
    "options": ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
    "correctAnswer": 2,
    "explanation": "Newton's Third Law states that for every action, there is an equal and opposite reaction."
  },
  {
    "id": 3,
    "question": "What is the acceleration due to gravity on Earth approximately?",
    "options": ["5.8 m/s²", "7.6 m/s²", "9.8 m/s²", "12.2 m/s²"],
    "correctAnswer": 2,
    "explanation": "The standard acceleration due to gravity on Earth is approximately 9.8 m/s²."
  },
  {
    "id": 4,
    "question": "Which of the following is a vector quantity?",
    "options": ["Mass", "Time", "Temperature", "Velocity"],
    "correctAnswer": 3,
    "explanation": "Velocity is a vector quantity because it has both magnitude and direction."
  },
  {
    "id": 5,
    "question": "What is the formula for kinetic energy?",
    "options": ["mgh", "mv²/2", "ma", "F/d"],
    "correctAnswer": 1,
    "explanation": "Kinetic energy is given by KE = ½ mv², where m is mass and v is velocity."
  },
  {
    "id": 6,
    "question": "What is the speed of light in a vacuum?",
    "options": ["3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁸ m/s", "3 × 10⁹ m/s"],
    "correctAnswer": 2,
    "explanation": "The speed of light in a vacuum is approximately 3 × 10⁸ m/s."
  },
  {
    "id": 7,
    "question": "Which of the following is NOT a type of electromagnetic wave?",
    "options": ["Radio waves", "Sound waves", "X-rays", "Gamma rays"],
    "correctAnswer": 1,
    "explanation": "Sound waves are mechanical waves, not electromagnetic waves."
  },
  {
    "id": 8,
    "question": "What is the unit of electrical resistance?",
    "options": ["Volt", "Ampere", "Ohm", "Watt"],
    "correctAnswer": 2,
    "explanation": "The SI unit of electrical resistance is Ohm (Ω)."
  },
  {
    "id": 9,
    "question": "Ohm's law relates which three quantities?",
    "options": ["Current, voltage, resistance", "Force, mass, acceleration", "Power, work, time", "Energy, charge, voltage"],
    "correctAnswer": 0,
    "explanation": "Ohm's law states that V = IR, relating voltage, current, and resistance."
  },
  {
    "id": 10,
    "question": "What is the phenomenon of splitting of white light into its constituent colors called?",
    "options": ["Reflection", "Refraction", "Diffraction", "Dispersion"],
    "correctAnswer": 3,
    "explanation": "Dispersion is the phenomenon where white light splits into its constituent colors."
  },
  {
    "id": 11,
    "question": "Which particle has a positive charge?",
    "options": ["Electron", "Neutron", "Proton", "Photon"],
    "correctAnswer": 2,
    "explanation": "Proton has a positive charge, electron has negative charge, and neutron is neutral."
  },
  {
    "id": 12,
    "question": "What is the unit of frequency?",
    "options": ["Second", "Hertz", "Meter", "Joule"],
    "correctAnswer": 1,
    "explanation": "Frequency is measured in Hertz (Hz), which is cycles per second."
  },
  {
    "id": 13,
    "question": "Which law of thermodynamics states that entropy always increases?",
    "options": ["Zeroth law", "First law", "Second law", "Third law"],
    "correctAnswer": 2,
    "explanation": "The second law of thermodynamics states that the total entropy of an isolated system always increases over time."
  },
  {
    "id": 14,
    "question": "What is the formula for potential energy near Earth's surface?",
    "options": ["mgh", "mv²/2", "ma", "Fd"],
    "correctAnswer": 0,
    "explanation": "Gravitational potential energy near Earth's surface is given by PE = mgh."
  },
  {
    "id": 15,
    "question": "Which of the following is a scalar quantity?",
    "options": ["Velocity", "Acceleration", "Force", "Temperature"],
    "correctAnswer": 3,
    "explanation": "Temperature is a scalar quantity as it has magnitude only."
  },
  {
    "id": 16,
    "question": "What type of lens is used to correct nearsightedness?",
    "options": ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"],
    "correctAnswer": 1,
    "explanation": "Nearsightedness (myopia) is corrected using a concave lens."
  },
  {
    "id": 17,
    "question": "What is the SI unit of electric current?",
    "options": ["Volt", "Ohm", "Ampere", "Coulomb"],
    "correctAnswer": 2,
    "explanation": "The SI unit of electric current is Ampere (A)."
  },
  {
    "id": 18,
    "question": "Which force is responsible for holding the nucleus together?",
    "options": ["Gravitational force", "Electromagnetic force", "Strong nuclear force", "Weak nuclear force"],
    "correctAnswer": 2,
    "explanation": "The strong nuclear force holds protons and neutrons together in the nucleus."
  },
  {
    "id": 19,
    "question": "What is the wavelength range of visible light?",
    "options": ["100-200 nm", "200-400 nm", "400-700 nm", "700-1000 nm"],
    "correctAnswer": 2,
    "explanation": "Visible light has wavelengths approximately between 400 nm and 700 nm."
  },
  {
    "id": 20,
    "question": "Which of the following is NOT a state of matter?",
    "options": ["Solid", "Liquid", "Gas", "Energy"],
    "correctAnswer": 3,
    "explanation": "Energy is not a state of matter; the common states are solid, liquid, gas, and plasma."
  },
  {
    "id": 21,
    "question": "What is the law of conservation of energy?",
    "options": ["Energy can be created", "Energy can be destroyed", "Energy cannot be created or destroyed", "Energy is always increasing"],
    "correctAnswer": 2,
    "explanation": "The law of conservation of energy states that energy cannot be created or destroyed, only transformed."
  },
  {
    "id": 22,
    "question": "What is the unit of power?",
    "options": ["Joule", "Newton", "Watt", "Pascal"],
    "correctAnswer": 2,
    "explanation": "Power is measured in Watts (W), which is joules per second."
  },
  {
    "id": 23,
    "question": "Which phenomenon explains the bending of light around obstacles?",
    "options": ["Reflection", "Refraction", "Diffraction", "Interference"],
    "correctAnswer": 2,
    "explanation": "Diffraction is the bending of waves around obstacles or through apertures."
  },
  {
    "id": 24,
    "question": "What is the charge of an electron?",
    "options": ["Positive", "Negative", "Neutral", "Variable"],
    "correctAnswer": 1,
    "explanation": "An electron has a negative charge of approximately -1.6 × 10⁻¹⁹ C."
  },
  {
    "id": 25,
    "question": "Which type of mirror is used in car rearview mirrors?",
    "options": ["Plane mirror", "Concave mirror", "Convex mirror", "Parabolic mirror"],
    "correctAnswer": 2,
    "explanation": "Convex mirrors are used in car rearview mirrors because they provide a wider field of view."
  },
  {
    "id": 26,
    "question": "What is the formula for momentum?",
    "options": ["mv", "ma", "F/d", "mgh"],
    "correctAnswer": 0,
    "explanation": "Momentum is given by p = mv, where m is mass and v is velocity."
  },
  {
    "id": 27,
    "question": "Which law states that the pressure of a gas is inversely proportional to its volume at constant temperature?",
    "options": ["Charles's law", "Boyle's law", "Gay-Lussac's law", "Avogadro's law"],
    "correctAnswer": 1,
    "explanation": "Boyle's law states that P ∝ 1/V at constant temperature."
  },
  {
    "id": 28,
    "question": "What is the SI unit of capacitance?",
    "options": ["Farad", "Henry", "Tesla", "Weber"],
    "correctAnswer": 0,
    "explanation": "Capacitance is measured in Farads (F)."
  },
  {
    "id": 29,
    "question": "Which of the following is a ferromagnetic material?",
    "options": ["Copper", "Aluminum", "Iron", "Wood"],
    "correctAnswer": 2,
    "explanation": "Iron is a ferromagnetic material, meaning it can be magnetized."
  },
  {
    "id": 30,
    "question": "What is the phenomenon of production of electricity from light called?",
    "options": ["Photoelectric effect", "Compton effect", "Thermionic emission", "Photovoltaic effect"],
    "correctAnswer": 3,
    "explanation": "The photovoltaic effect is the production of electricity from light."
  },
  {
    "id": 31,
    "question": "What is the unit of magnetic field strength?",
    "options": ["Tesla", "Gauss", "Both Tesla and Gauss", "Weber"],
    "correctAnswer": 2,
    "explanation": "Magnetic field strength is measured in Tesla (SI unit) or Gauss (CGS unit)."
  },
  {
    "id": 32,
    "question": "Which color of light has the highest frequency?",
    "options": ["Red", "Green", "Blue", "Violet"],
    "correctAnswer": 3,
    "explanation": "Violet light has the highest frequency in the visible spectrum."
  },
  {
    "id": 33,
    "question": "What is the boiling point of water at standard atmospheric pressure?",
    "options": ["90°C", "100°C", "110°C", "120°C"],
    "correctAnswer": 1,
    "explanation": "Water boils at 100°C (212°F) at standard atmospheric pressure."
  },
  {
    "id": 34,
    "question": "Which device is used to measure electric current?",
    "options": ["Voltmeter", "Ammeter", "Ohmmeter", "Galvanometer"],
    "correctAnswer": 1,
    "explanation": "An ammeter is used to measure electric current in a circuit."
  },
  {
    "id": 35,
    "question": "What type of wave is sound?",
    "options": ["Transverse wave", "Longitudinal wave", "Electromagnetic wave", "Surface wave"],
    "correctAnswer": 1,
    "explanation": "Sound waves are longitudinal waves where particles vibrate parallel to wave direction."
  },
  {
    "id": 36,
    "question": "Which of the following is NOT a unit of energy?",
    "options": ["Joule", "Calorie", "Watt", "Electron-volt"],
    "correctAnswer": 2,
    "explanation": "Watt is a unit of power, not energy."
  },
  {
    "id": 37,
    "question": "What is the half-life of a radioactive substance?",
    "options": ["Time to decay completely", "Time for half the atoms to decay", "Time for half the mass to disappear", "Time to become stable"],
    "correctAnswer": 1,
    "explanation": "Half-life is the time required for half of the radioactive atoms to decay."
  },
  {
    "id": 38,
    "question": "Which law states that the current through a conductor is directly proportional to the voltage across it?",
    "options": ["Faraday's law", "Ohm's law", "Kirchhoff's law", "Lenz's law"],
    "correctAnswer": 1,
    "explanation": "Ohm's law states that V ∝ I at constant temperature."
  },
  {
    "id": 39,
    "question": "What is the process by which a solid turns directly into a gas called?",
    "options": ["Melting", "Evaporation", "Sublimation", "Condensation"],
    "correctAnswer": 2,
    "explanation": "Sublimation is the process where a solid changes directly into a gas without passing through the liquid phase."
  },
  {
    "id": 40,
    "question": "Which particle has no charge?",
    "options": ["Proton", "Electron", "Neutron", "Positron"],
    "correctAnswer": 2,
    "explanation": "The neutron is a subatomic particle with no net electric charge."
  }
 
    ,
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
},








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
  id: 1, 
  question: "What is economics primarily concerned with?", 
  options: ["Weather patterns", "Scarcity and resource allocation", "Political campaigns", "Medical treatment"], 
  correctAnswer: 1, 
  explanation: "Economics studies how societies allocate scarce resources to satisfy unlimited wants." 
},

{ 
  id: 2, 
  question: "What does GDP measure?", 
  options: ["Government debt", "Total value of goods and services produced in a country", "Inflation rate only", "Exports minus imports"], 
  correctAnswer: 1, 
  explanation: "Gross Domestic Product (GDP) measures the total value of final goods and services produced within a country." 
},

{ 
  id: 3, 
  question: "What is opportunity cost?", 
  options: ["Money spent on production", "The next best alternative foregone", "Tax revenue", "Profit earned"], 
  correctAnswer: 1, 
  explanation: "Opportunity cost is the value of the next best alternative that is given up." 
},

{ 
  id: 4, 
  question: "Which curve shows the relationship between price and quantity demanded?", 
  options: ["Supply curve", "Demand curve", "Phillips curve", "Laffer curve"], 
  correctAnswer: 1, 
  explanation: "The demand curve shows how quantity demanded changes with price." 
},

{ 
  id: 5, 
  question: "When price increases, quantity demanded generally:", 
  options: ["Increases", "Decreases", "Stays the same", "Becomes zero"], 
  correctAnswer: 1, 
  explanation: "According to the law of demand, quantity demanded decreases as price rises." 
},

{ 
  id: 6, 
  question: "Inflation refers to:", 
  options: ["Decrease in prices", "General rise in price levels", "Increase in unemployment", "Economic recession"], 
  correctAnswer: 1, 
  explanation: "Inflation is a sustained increase in the general price level of goods and services." 
},

{ 
  id: 7, 
  question: "What is a market equilibrium?", 
  options: ["When supply exceeds demand", "When demand exceeds supply", "When quantity supplied equals quantity demanded", "When prices are fixed by government"], 
  correctAnswer: 2, 
  explanation: "Market equilibrium occurs where quantity supplied equals quantity demanded." 
},

{ 
  id: 8, 
  question: "Which factor shifts the demand curve?", 
  options: ["Change in price of the good itself", "Change in consumer income", "Quantity supplied", "Production cost"], 
  correctAnswer: 1, 
  explanation: "Changes in income shift the entire demand curve." 
},

{ 
  id: 9, 
  question: "Unemployment rate measures:", 
  options: ["Total population", "Number of employed workers", "Percentage of labor force without jobs", "Number of students"], 
  correctAnswer: 2, 
  explanation: "The unemployment rate is the percentage of the labor force that is jobless and actively seeking work." 
},

{ 
  id: 10, 
  question: "Which economic system relies mainly on private ownership?", 
  options: ["Command economy", "Market economy", "Traditional economy", "Mixed economy"], 
  correctAnswer: 1, 
  explanation: "A market economy is based on private ownership and voluntary exchange." 
},

{ 
  id: 11, 
  question: "Elasticity measures:", 
  options: ["Government spending", "Responsiveness of quantity to price change", "Total revenue", "Tax rate"], 
  correctAnswer: 1, 
  explanation: "Price elasticity measures how responsive quantity demanded is to price changes." 
},

{ 
  id: 12, 
  question: "What is a budget deficit?", 
  options: ["When revenue exceeds spending", "When spending exceeds revenue", "Balanced budget", "Zero taxation"], 
  correctAnswer: 1, 
  explanation: "A budget deficit occurs when government expenditures exceed revenues." 
},

{ 
  id: 13, 
  question: "Which is a factor of production?", 
  options: ["Land", "Inflation", "Tax", "Subsidy"], 
  correctAnswer: 0, 
  explanation: "Land, labor, capital, and entrepreneurship are factors of production." 
},

{ 
  id: 14, 
  question: "What is monopoly?", 
  options: ["Many sellers", "Single seller controlling the market", "Government tax system", "Free trade agreement"], 
  correctAnswer: 1, 
  explanation: "A monopoly exists when one firm dominates the market." 
},

{ 
  id: 15, 
  question: "The Phillips Curve shows the relationship between:", 
  options: ["Inflation and unemployment", "GDP and exports", "Supply and demand", "Taxes and revenue"], 
  correctAnswer: 0, 
  explanation: "The Phillips Curve illustrates the trade-off between inflation and unemployment." 
},

{ 
  id: 16, 
  question: "Which policy involves government spending and taxation?", 
  options: ["Monetary policy", "Fiscal policy", "Trade policy", "Labor policy"], 
  correctAnswer: 1, 
  explanation: "Fiscal policy refers to government decisions on spending and taxation." 
},

{ 
  id: 17, 
  question: "Monetary policy is controlled by:", 
  options: ["Central bank", "Ministry of education", "Private firms", "Households"], 
  correctAnswer: 0, 
  explanation: "Central banks control monetary policy through interest rates and money supply." 
},

{ 
  id: 18, 
  question: "What is supply?", 
  options: ["Desire to buy goods", "Amount producers are willing to sell at a price", "Government subsidy", "Total income"], 
  correctAnswer: 1, 
  explanation: "Supply is the quantity producers are willing to offer at various prices." 
},

{ 
  id: 19, 
  question: "Comparative advantage refers to:", 
  options: ["Producing at lower opportunity cost", "Producing more goods overall", "Higher wages", "Trade barriers"], 
  correctAnswer: 0, 
  explanation: "Comparative advantage occurs when a country produces goods at lower opportunity cost." 
},

{ 
  id: 20, 
  question: "What is recession?", 
  options: ["Rapid growth", "Significant decline in economic activity", "Stable economy", "High exports"], 
  correctAnswer: 1, 
  explanation: "A recession is a period of declining economic activity." 
},

{ 
  id: 21, 
  question: "Which measure tracks changes in consumer prices?", 
  options: ["GDP", "CPI", "GNP", "FDI"], 
  correctAnswer: 1, 
  explanation: "The Consumer Price Index (CPI) measures changes in consumer prices." 
},

{ 
  id: 22, 
  question: "A subsidy is:", 
  options: ["Tax increase", "Government financial support", "Import ban", "Interest rate cut"], 
  correctAnswer: 1, 
  explanation: "A subsidy is financial assistance provided by the government to support businesses or consumers." 
},

{ 
  id: 23, 
  question: "Free trade encourages:", 
  options: ["High tariffs", "Exchange without trade barriers", "Monopoly power", "Inflation"], 
  correctAnswer: 1, 
  explanation: "Free trade allows exchange of goods without tariffs or quotas." 
},

{ 
  id: 24, 
  question: "Marginal cost is:", 
  options: ["Total cost", "Cost of producing one additional unit", "Fixed cost", "Average revenue"], 
  correctAnswer: 1, 
  explanation: "Marginal cost is the additional cost of producing one more unit." 
},

{ 
  id: 25, 
  question: "What is foreign direct investment (FDI)?", 
  options: ["Government loan", "Investment by a firm in another country", "Local tax policy", "Stock market index"], 
  correctAnswer: 1, 
  explanation: "FDI occurs when a company invests directly in business operations in another country." 
},


      {
        id: 26,
        question: "What type of market has only one seller?",
        options: ["Perfect competition", "Oligopoly", "Monopoly", "Monopsony"],
        correctAnswer: 2,
        explanation: "A monopoly is a market structure with only one seller who controls the entire supply"
      },
      {
        id: 27,
        question: "What is the equilibrium price?",
        options: ["Highest possible price", "Lowest possible price", "Price where supply equals demand", "Government-set price"],
        correctAnswer: 2,
        explanation: "Equilibrium price is where quantity supplied equals quantity demanded"
      },
      {
        id: 28,
        question: "What is fiscal policy?",
        options: ["Central bank money supply", "Government spending and taxation", "Interest rate changes", "Exchange rate policy"],
        correctAnswer: 1,
        explanation: "Fiscal policy involves government decisions about spending and taxation"
      },
      {
        id: 29,
        question: "What does the Consumer Price Index measure?",
        options: ["Stock prices", "Unemployment rate", "Changes in price level", "Interest rates"],
        correctAnswer: 2,
        explanation: "CPI measures the average change in prices paid by consumers for goods and services"
      },
      {
        id: 30,
        question: "What is a normal good?",
        options: ["Demand decreases with income", "Demand increases with income", "Demand is constant", "Has no substitutes"],
        correctAnswer: 1,
        explanation: "A normal good is one where demand increases as consumer income rises"
      },


    ],
    
    final: 
    [
      
      { 
  id: 1, 
  question: "What is economics primarily concerned with?", 
  options: ["Weather patterns", "Scarcity and resource allocation", "Political campaigns", "Medical treatment"], 
  correctAnswer: 1, 
  explanation: "Economics studies how societies allocate scarce resources to satisfy unlimited wants." 
},

{ 
  id: 2, 
  question: "What does GDP measure?", 
  options: ["Government debt", "Total value of goods and services produced in a country", "Inflation rate only", "Exports minus imports"], 
  correctAnswer: 1, 
  explanation: "Gross Domestic Product (GDP) measures the total value of final goods and services produced within a country." 
},

{ 
  id: 3, 
  question: "What is opportunity cost?", 
  options: ["Money spent on production", "The next best alternative foregone", "Tax revenue", "Profit earned"], 
  correctAnswer: 1, 
  explanation: "Opportunity cost is the value of the next best alternative that is given up." 
},

{ 
  id: 4, 
  question: "Which curve shows the relationship between price and quantity demanded?", 
  options: ["Supply curve", "Demand curve", "Phillips curve", "Laffer curve"], 
  correctAnswer: 1, 
  explanation: "The demand curve shows how quantity demanded changes with price." 
},

{ 
  id: 5, 
  question: "When price increases, quantity demanded generally:", 
  options: ["Increases", "Decreases", "Stays the same", "Becomes zero"], 
  correctAnswer: 1, 
  explanation: "According to the law of demand, quantity demanded decreases as price rises." 
},

{ 
  id: 6, 
  question: "Inflation refers to:", 
  options: ["Decrease in prices", "General rise in price levels", "Increase in unemployment", "Economic recession"], 
  correctAnswer: 1, 
  explanation: "Inflation is a sustained increase in the general price level of goods and services." 
},

{ 
  id: 7, 
  question: "What is a market equilibrium?", 
  options: ["When supply exceeds demand", "When demand exceeds supply", "When quantity supplied equals quantity demanded", "When prices are fixed by government"], 
  correctAnswer: 2, 
  explanation: "Market equilibrium occurs where quantity supplied equals quantity demanded." 
},

{ 
  id: 8, 
  question: "Which factor shifts the demand curve?", 
  options: ["Change in price of the good itself", "Change in consumer income", "Quantity supplied", "Production cost"], 
  correctAnswer: 1, 
  explanation: "Changes in income shift the entire demand curve." 
},

{ 
  id: 9, 
  question: "Unemployment rate measures:", 
  options: ["Total population", "Number of employed workers", "Percentage of labor force without jobs", "Number of students"], 
  correctAnswer: 2, 
  explanation: "The unemployment rate is the percentage of the labor force that is jobless and actively seeking work." 
},

{ 
  id: 10, 
  question: "Which economic system relies mainly on private ownership?", 
  options: ["Command economy", "Market economy", "Traditional economy", "Mixed economy"], 
  correctAnswer: 1, 
  explanation: "A market economy is based on private ownership and voluntary exchange." 
},

{ 
  id: 11, 
  question: "Elasticity measures:", 
  options: ["Government spending", "Responsiveness of quantity to price change", "Total revenue", "Tax rate"], 
  correctAnswer: 1, 
  explanation: "Price elasticity measures how responsive quantity demanded is to price changes." 
},

{ 
  id: 12, 
  question: "What is a budget deficit?", 
  options: ["When revenue exceeds spending", "When spending exceeds revenue", "Balanced budget", "Zero taxation"], 
  correctAnswer: 1, 
  explanation: "A budget deficit occurs when government expenditures exceed revenues." 
},

{ 
  id: 13, 
  question: "Which is a factor of production?", 
  options: ["Land", "Inflation", "Tax", "Subsidy"], 
  correctAnswer: 0, 
  explanation: "Land, labor, capital, and entrepreneurship are factors of production." 
},

{ 
  id: 14, 
  question: "What is monopoly?", 
  options: ["Many sellers", "Single seller controlling the market", "Government tax system", "Free trade agreement"], 
  correctAnswer: 1, 
  explanation: "A monopoly exists when one firm dominates the market." 
},

{ 
  id: 15, 
  question: "The Phillips Curve shows the relationship between:", 
  options: ["Inflation and unemployment", "GDP and exports", "Supply and demand", "Taxes and revenue"], 
  correctAnswer: 0, 
  explanation: "The Phillips Curve illustrates the trade-off between inflation and unemployment." 
},

{ 
  id: 16, 
  question: "Which policy involves government spending and taxation?", 
  options: ["Monetary policy", "Fiscal policy", "Trade policy", "Labor policy"], 
  correctAnswer: 1, 
  explanation: "Fiscal policy refers to government decisions on spending and taxation." 
},

{ 
  id: 17, 
  question: "Monetary policy is controlled by:", 
  options: ["Central bank", "Ministry of education", "Private firms", "Households"], 
  correctAnswer: 0, 
  explanation: "Central banks control monetary policy through interest rates and money supply." 
},

{ 
  id: 18, 
  question: "What is supply?", 
  options: ["Desire to buy goods", "Amount producers are willing to sell at a price", "Government subsidy", "Total income"], 
  correctAnswer: 1, 
  explanation: "Supply is the quantity producers are willing to offer at various prices." 
},

{ 
  id: 19, 
  question: "Comparative advantage refers to:", 
  options: ["Producing at lower opportunity cost", "Producing more goods overall", "Higher wages", "Trade barriers"], 
  correctAnswer: 0, 
  explanation: "Comparative advantage occurs when a country produces goods at lower opportunity cost." 
},

{ 
  id: 20, 
  question: "What is recession?", 
  options: ["Rapid growth", "Significant decline in economic activity", "Stable economy", "High exports"], 
  correctAnswer: 1, 
  explanation: "A recession is a period of declining economic activity." 
},

{ 
  id: 21, 
  question: "Which measure tracks changes in consumer prices?", 
  options: ["GDP", "CPI", "GNP", "FDI"], 
  correctAnswer: 1, 
  explanation: "The Consumer Price Index (CPI) measures changes in consumer prices." 
},

{ 
  id: 22, 
  question: "A subsidy is:", 
  options: ["Tax increase", "Government financial support", "Import ban", "Interest rate cut"], 
  correctAnswer: 1, 
  explanation: "A subsidy is financial assistance provided by the government to support businesses or consumers." 
},

{ 
  id: 23, 
  question: "Free trade encourages:", 
  options: ["High tariffs", "Exchange without trade barriers", "Monopoly power", "Inflation"], 
  correctAnswer: 1, 
  explanation: "Free trade allows exchange of goods without tariffs or quotas." 
},

{ 
  id: 24, 
  question: "Marginal cost is:", 
  options: ["Total cost", "Cost of producing one additional unit", "Fixed cost", "Average revenue"], 
  correctAnswer: 1, 
  explanation: "Marginal cost is the additional cost of producing one more unit." 
},

{ 
  id: 25, 
  question: "What is foreign direct investment (FDI)?", 
  options: ["Government loan", "Investment by a firm in another country", "Local tax policy", "Stock market index"], 
  correctAnswer: 1, 
  explanation: "FDI occurs when a company invests directly in business operations in another country." 
},


      {
        id: 26,
        question: "What type of market has only one seller?",
        options: ["Perfect competition", "Oligopoly", "Monopoly", "Monopsony"],
        correctAnswer: 2,
        explanation: "A monopoly is a market structure with only one seller who controls the entire supply"
      },
      {
        id: 27,
        question: "What is the equilibrium price?",
        options: ["Highest possible price", "Lowest possible price", "Price where supply equals demand", "Government-set price"],
        correctAnswer: 2,
        explanation: "Equilibrium price is where quantity supplied equals quantity demanded"
      },
      {
        id: 28,
        question: "What is fiscal policy?",
        options: ["Central bank money supply", "Government spending and taxation", "Interest rate changes", "Exchange rate policy"],
        correctAnswer: 1,
        explanation: "Fiscal policy involves government decisions about spending and taxation"
      },
      {
        id: 29,
        question: "What does the Consumer Price Index measure?",
        options: ["Stock prices", "Unemployment rate", "Changes in price level", "Interest rates"],
        correctAnswer: 2,
        explanation: "CPI measures the average change in prices paid by consumers for goods and services"
      },
      {
        id: 30,
        question: "What is a normal good?",
        options: ["Demand decreases with income", "Demand increases with income", "Demand is constant", "Has no substitutes"],
        correctAnswer: 1,
        explanation: "A normal good is one where demand increases as consumer income rises"
      },
  {
    id: 551,
    question: "What is the law of demand?",
    options: [
      "As price rises, quantity demanded rises",
      "As price rises, quantity demanded falls",
      "Quantity demanded is independent of price",
      "Supply equals demand"
    ],
    correctAnswer: 1,
    explanation: "The law of demand states that, ceteris paribus, as price increases, quantity demanded decreases."
  },
  
{ 
  id: 12, 
  question: "What is a budget deficit?", 
  options: ["When revenue exceeds spending", "When spending exceeds revenue", "Balanced budget", "Zero taxation"], 
  correctAnswer: 1, 
  explanation: "A budget deficit occurs when government expenditures exceed revenues." 
},

{ 
  id: 13, 
  question: "Which is a factor of production?", 
  options: ["Land", "Inflation", "Tax", "Subsidy"], 
  correctAnswer: 0, 
  explanation: "Land, labor, capital, and entrepreneurship are factors of production." 
},

{ 
  id: 14, 
  question: "What is monopoly?", 
  options: ["Many sellers", "Single seller controlling the market", "Government tax system", "Free trade agreement"], 
  correctAnswer: 1, 
  explanation: "A monopoly exists when one firm dominates the market." 
},

{ 
  id: 15, 
  question: "The Phillips Curve shows the relationship between:", 
  options: ["Inflation and unemployment", "GDP and exports", "Supply and demand", "Taxes and revenue"], 
  correctAnswer: 0, 
  explanation: "The Phillips Curve illustrates the trade-off between inflation and unemployment." 
},

{ 
  id: 16, 
  question: "Which policy involves government spending and taxation?", 
  options: ["Monetary policy", "Fiscal policy", "Trade policy", "Labor policy"], 
  correctAnswer: 1, 
  explanation: "Fiscal policy refers to government decisions on spending and taxation." 
},

{ 
  id: 17, 
  question: "Monetary policy is controlled by:", 
  options: ["Central bank", "Ministry of education", "Private firms", "Households"], 
  correctAnswer: 0, 
  explanation: "Central banks control monetary policy through interest rates and money supply." 
},

{ 
  id: 18, 
  question: "What is supply?", 
  options: ["Desire to buy goods", "Amount producers are willing to sell at a price", "Government subsidy", "Total income"], 
  correctAnswer: 1, 
  explanation: "Supply is the quantity producers are willing to offer at various prices." 
},

{ 
  id: 19, 
  question: "Comparative advantage refers to:", 
  options: ["Producing at lower opportunity cost", "Producing more goods overall", "Higher wages", "Trade barriers"], 
  correctAnswer: 0, 
  explanation: "Comparative advantage occurs when a country produces goods at lower opportunity cost." 
},

{ 
  id: 20, 
  question: "What is recession?", 
  options: ["Rapid growth", "Significant decline in economic activity", "Stable economy", "High exports"], 
  correctAnswer: 1, 
  explanation: "A recession is a period of declining economic activity." 
},

{ 
  id: 21, 
  question: "Which measure tracks changes in consumer prices?", 
  options: ["GDP", "CPI", "GNP", "FDI"], 
  correctAnswer: 1, 
  explanation: "The Consumer Price Index (CPI) measures changes in consumer prices." 
},

{ 
  id: 22, 
  question: "A subsidy is:", 
  options: ["Tax increase", "Government financial support", "Import ban", "Interest rate cut"], 
  correctAnswer: 1, 
  explanation: "A subsidy is financial assistance provided by the government to support businesses or consumers." 
},

{ 
  id: 23, 
  question: "Free trade encourages:", 
  options: ["High tariffs", "Exchange without trade barriers", "Monopoly power", "Inflation"], 
  correctAnswer: 1, 
  explanation: "Free trade allows exchange of goods without tariffs or quotas." 
},

{ 
  id: 24, 
  question: "Marginal cost is:", 
  options: ["Total cost", "Cost of producing one additional unit", "Fixed cost", "Average revenue"], 
  correctAnswer: 1, 
  explanation: "Marginal cost is the additional cost of producing one more unit." 
},

{ 
  id: 25, 
  question: "What is foreign direct investment (FDI)?", 
  options: ["Government loan", "Investment by a firm in another country", "Local tax policy", "Stock market index"], 
  correctAnswer: 1, 
  explanation: "FDI occurs when a company invests directly in business operations in another country." 
},


      {
        id: 26,
        question: "What type of market has only one seller?",
        options: ["Perfect competition", "Oligopoly", "Monopoly", "Monopsony"],
        correctAnswer: 2,
        explanation: "A monopoly is a market structure with only one seller who controls the entire supply"
      },
      {
        id: 27,
        question: "What is the equilibrium price?",
        options: ["Highest possible price", "Lowest possible price", "Price where supply equals demand", "Government-set price"],
        correctAnswer: 2,
        explanation: "Equilibrium price is where quantity supplied equals quantity demanded"
      },
      
  {
    "id": 552,
    "question": "Which of the following is considered a factor of production?",
    "options": ["Money", "Labor", "Stocks", "Bonds"],
    "correctAnswer": 1,
    "explanation": "Factors of production are resources used to produce goods/services: land, labor, capital, entrepreneurship."
  },
  {
    "id": 553,
    "question": "If the price elasticity of demand for a product is greater than 1, the demand is:",
    "options": ["Elastic", "Inelastic", "Unitary", "Perfectly inelastic"],
    "correctAnswer": 0,
    "explanation": "Demand is elastic when quantity demanded responds strongly to price changes (elasticity > 1)."
  },
  {
    "id": 554,
    "question": "GDP measures:",
    "options": [
      "The total value of all goods produced in a country in a year",
      "The total population of a country",
      "The total income of households only",
      "The total exports of a country"
    ],
    "correctAnswer": 0,
    "explanation": "Gross Domestic Product (GDP) is the total monetary value of all final goods and services produced within a country in a given period."
  },
  {
    "id": 555,
    "question": "Which market structure has many firms selling identical products?",
    "options": ["Perfect competition", "Monopoly", "Oligopoly", "Monopolistic competition"],
    "correctAnswer": 0,
    "explanation": "Perfect competition features many firms, identical products, and free entry/exit."
  },
  {
    "id": 556,
    "question": "Which policy is used by governments to control inflation?",
    "options": ["Monetary policy", "Fiscal policy", "Both monetary and fiscal", "Trade policy"],
    "correctAnswer": 2,
    "explanation": "Governments can use fiscal policy (tax/spending) and central bank monetary policy (interest rates, money supply) to manage inflation."
  },
  {
    "id": 557,
    "question": "If the price of a substitute good rises, the demand for the original good:",
    "options": ["Increases", "Decreases", "Remains the same", "Becomes zero"],
    "correctAnswer": 0,
    "explanation": "Demand for a good increases if the price of a substitute rises, since consumers switch to the cheaper option."
  },
  {
    "id": 558,
    "question": "Which of the following best describes opportunity cost?",
    "options": [
      "The price paid in money for a good",
      "The value of the next best alternative forgone",
      "All costs combined",
      "The marginal cost of production"
    ],
    "correctAnswer": 1,
    "explanation": "Opportunity cost is the value of what you give up when making a choice."
  },
  {
    "id": 559,
    "question": "Unemployment that occurs due to the normal turnover in the labor market is called:",
    "options": ["Structural unemployment", "Frictional unemployment", "Cyclical unemployment", "Seasonal unemployment"],
    "correctAnswer": 1,
    "explanation": "Frictional unemployment arises from people moving between jobs or entering the labor force."
  },
  {
    "id": 560,
    "question": "Which of the following is a characteristic of a monopoly?",
    "options": [
      "Many sellers",
      "Single seller with unique product",
      "Easy entry and exit",
      "Perfect information"
    ],
    "correctAnswer": 1,
    "explanation": "A monopoly has a single seller offering a unique product with high barriers to entry."
  }

    ,
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
    }
  },
  





  {
    id: "emerging-technology",
    name: "Emerging-Technology",
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
  id: 1, 
  question: "What is Artificial Intelligence (AI)?", 
  options: ["Human intelligence only", "Machines simulating human intelligence", "Computer hardware repair", "Internet connection"], 
  correctAnswer: 1, 
  explanation: "Artificial Intelligence refers to machines designed to simulate human intelligence such as learning and problem-solving." 
},

{ 
  id: 2, 
  question: "Which technology enables secure and transparent digital transactions?", 
  options: ["Cloud computing", "Blockchain", "Virtual reality", "3D printing"], 
  correctAnswer: 1, 
  explanation: "Blockchain provides a decentralized and secure ledger for digital transactions." 
},

{ 
  id: 3, 
  question: "Cloud computing allows users to:", 
  options: ["Store and access data over the internet", "Repair hardware", "Build physical servers only", "Disconnect from networks"], 
  correctAnswer: 0, 
  explanation: "Cloud computing enables storage and access of data and services via the internet." 
},

{ 
  id: 4, 
  question: "What does IoT stand for?", 
  options: ["Internet of Technology", "Internet of Things", "Integration of Tools", "Innovation of Telecommunication"], 
  correctAnswer: 1, 
  explanation: "IoT stands for Internet of Things, connecting devices to the internet for data exchange." 
},

{ 
  id: 5, 
  question: "Which technology creates immersive digital environments?", 
  options: ["Artificial Intelligence", "Virtual Reality", "Blockchain", "Big Data"], 
  correctAnswer: 1, 
  explanation: "Virtual Reality (VR) creates immersive, computer-generated environments." 
},

{ 
  id: 6, 
  question: "Big Data refers to:", 
  options: ["Small structured data", "Extremely large datasets analyzed computationally", "Manual records", "Printed reports"], 
  correctAnswer: 1, 
  explanation: "Big Data involves analyzing very large and complex datasets." 
},

{ 
  id: 7, 
  question: "Which field focuses on protecting digital systems from attacks?", 
  options: ["Cybersecurity", "Biotechnology", "Robotics", "Nanotechnology"], 
  correctAnswer: 0, 
  explanation: "Cybersecurity protects systems, networks, and data from cyber threats." 
},

{ 
  id: 8, 
  question: "Robotics combines engineering with:", 
  options: ["Medicine only", "Computer science and automation", "Agriculture only", "Philosophy"], 
  correctAnswer: 1, 
  explanation: "Robotics integrates engineering and computer science to design automated machines." 
},

{ 
  id: 9, 
  question: "Machine learning is a subset of:", 
  options: ["Blockchain", "Artificial Intelligence", "Cloud storage", "IoT"], 
  correctAnswer: 1, 
  explanation: "Machine learning is a branch of AI that enables systems to learn from data." 
},

{ 
  id: 10, 
  question: "5G technology mainly improves:", 
  options: ["Internet speed and connectivity", "Battery size", "Screen resolution", "Hard disk storage"], 
  correctAnswer: 0, 
  explanation: "5G enhances speed, reliability, and connectivity in wireless communication." 
},

{ 
  id: 11, 
  question: "Which technology uses layers to create physical objects from digital designs?", 
  options: ["3D printing", "VR", "AI", "Cloud computing"], 
  correctAnswer: 0, 
  explanation: "3D printing builds objects layer by layer from digital models." 
},

{ 
  id: 12, 
  question: "Augmented Reality (AR) differs from VR because it:", 
  options: ["Replaces the real world", "Overlays digital information onto the real world", "Works offline only", "Has no visual effect"], 
  correctAnswer: 1, 
  explanation: "AR enhances the real environment with digital elements." 
},

{ 
  id: 13, 
  question: "Which technology is commonly used in cryptocurrencies?", 
  options: ["Blockchain", "IoT", "Cloud computing", "Nanotech"], 
  correctAnswer: 0, 
  explanation: "Cryptocurrencies rely on blockchain technology for secure transactions." 
},

{ 
  id: 14, 
  question: "Quantum computing differs from classical computing by using:", 
  options: ["Binary bits only", "Qubits", "Hard drives", "Analog signals"], 
  correctAnswer: 1, 
  explanation: "Quantum computers use qubits, enabling complex computations." 
},

{ 
  id: 15, 
  question: "Biotechnology applies technology to:", 
  options: ["Biological systems", "Mechanical engines", "Space travel only", "Financial markets"], 
  correctAnswer: 0, 
  explanation: "Biotechnology uses living organisms or biological systems for innovation." 
},

{ 
  id: 16, 
  question: "Autonomous vehicles rely heavily on:", 
  options: ["Artificial Intelligence and sensors", "Manual control only", "Paper maps", "Typewriters"], 
  correctAnswer: 0, 
  explanation: "Self-driving vehicles use AI, sensors, and machine learning." 
},

{ 
  id: 17, 
  question: "Data analytics is used to:", 
  options: ["Destroy data", "Analyze and interpret data", "Print books", "Repair networks"], 
  correctAnswer: 1, 
  explanation: "Data analytics extracts useful insights from raw data." 
},

{ 
  id: 18, 
  question: "Edge computing processes data:", 
  options: ["At centralized servers only", "Near the source of data generation", "Without electricity", "On paper"], 
  correctAnswer: 1, 
  explanation: "Edge computing processes data closer to where it is generated." 
},

{ 
  id: 19, 
  question: "Digital transformation refers to:", 
  options: ["Removing all technology", "Integrating digital technologies into business", "Manual paperwork", "Offline systems only"], 
  correctAnswer: 1, 
  explanation: "Digital transformation integrates technology into business processes." 
},

{ 
  id: 20, 
  question: "Which emerging technology improves supply chain transparency?", 
  options: ["Blockchain", "VR", "AR", "3D printing"], 
  correctAnswer: 0, 
  explanation: "Blockchain improves transparency and traceability in supply chains." 
},

{ 
  id: 21, 
  question: "Smart cities use technology to:", 
  options: ["Reduce efficiency", "Improve infrastructure and services", "Limit communication", "Remove automation"], 
  correctAnswer: 1, 
  explanation: "Smart cities use IoT and data to improve urban services." 
},

{ 
  id: 22, 
  question: "Nanotechnology works at what scale?", 
  options: ["Large buildings", "Microscopic atomic scale", "Kilometers", "Planets"], 
  correctAnswer: 1, 
  explanation: "Nanotechnology manipulates matter at the atomic and molecular scale." 
},

{ 
  id: 23, 
  question: "Which field focuses on ethical issues in technology?", 
  options: ["Tech ethics", "Cyber hacking", "Robotics repair", "Hardware installation"], 
  correctAnswer: 0, 
  explanation: "Technology ethics studies moral issues related to emerging technologies." 
},

{ 
  id: 24, 
  question: "A chatbot commonly uses:", 
  options: ["Artificial Intelligence", "Mechanical engines", "Paper forms", "Manual switches"], 
  correctAnswer: 0, 
  explanation: "Chatbots use AI and natural language processing to interact with users." 
},

{ 
  id: 25, 
  question: "Digital currency differs from traditional currency because it:", 
  options: ["Exists physically only", "Operates electronically", "Has no value", "Is always illegal"], 
  correctAnswer: 1, 
  explanation: "Digital currencies operate electronically and often use blockchain systems." 
}
      ,
      {
        id: 26,
        question: "What is an operating system?",
        options: ["Application software", "System software managing hardware and software", "Programming language", "Web browser"],
        correctAnswer: 1,
        explanation: "An operating system is system software that manages computer hardware and software resources"
      },
      {
        id: 27,
        question: "What is the function of a router?",
        options: ["Store data", "Process calculations", "Connect networks and direct traffic", "Display output"],
        correctAnswer: 2,
        explanation: "A router connects different networks and directs data traffic between them"
      },
      {
        id: 28,
        question: "What does URL stand for?",
        options: ["Universal Resource Locator", "Uniform Resource Locator", "United Reference Link", "Universal Reference Link"],
        correctAnswer: 1,
        explanation: "URL stands for Uniform Resource Locator, the address of a web resource"
      },
      {
        id: 29,
        question: "Which is a programming language?",
        options: ["HTTP", "Python", "PDF", "USB"],
        correctAnswer: 1,
        explanation: "Python is a popular programming language used for various applications"
      },
      {
        id: 30,
        question: "What is cloud computing?",
        options: ["Weather prediction", "Storing/accessing data over internet", "Fast processing", "Wireless networking"],
        correctAnswer: 1,
        explanation: "Cloud computing is the delivery of computing services over the internet"
      },

    ],
    final: 
    [
  {
    "id": 1,
    "question": "What does the term 'Emerging Technology' mean?",
    "options": ["Brand new ideas that are still in the design phase", "Technologies focused only on environmental impact", "New technologies currently developing that will substantially alter the business and social environment over the next five to ten years", "New materials that have only recently been developed"],
    "correctAnswer": 2,
    "explanation": "Emerging technologies are new technologies currently developing or will be developed over the next five to ten years, which will substantially alter the business and social environment [citation:3]."
  },
  {
    "id": 2,
    "question": "Which of the following is NOT a characteristic of emerging technologies?",
    "options": ["Novelty", "Disruptive potential", "Rapid advancement", "They only include hardware"],
    "correctAnswer": 3,
    "explanation": "Emerging technologies include both hardware and software, and are characterized by their novelty, disruptive potential, and rapid advancement [citation:1]."
  },
  {
    "id": 3,
    "question": "Which of the following can be considered emerging technologies?",
    "options": ["Augmented reality only", "Virtual reality only", "Internet of Things only", "Augmented reality, virtual reality, Internet of Things, and artificial intelligence"],
    "correctAnswer": 3,
    "explanation": "Augmented reality, virtual reality, Internet of Things, and artificial intelligence can all be considered emerging technologies [citation:1]."
  },
  {
    "id": 4,
    "question": "What is the primary characteristic of the progressive nature of emerging technologies?",
    "options": ["They remain isolated from other technologies", "They allow for synergies with other technologies", "They replace all existing technologies", "They only work independently"],
    "correctAnswer": 1,
    "explanation": "The progressive nature of emerging technologies allows for synergies with other technologies [citation:1]."
  },
  {
    "id": 5,
    "question": "What term refers to digital money used for online transactions?",
    "options": ["Artificial intelligence", "Blockchain", "Bitcoin", "Augmented reality"],
    "correctAnswer": 2,
    "explanation": "Bitcoin is a form of digital money used for online transactions [citation:1]."
  },
  {
    "id": 6,
    "question": "What best describes the convergence of frontiers of information systems and emerging technologies?",
    "options": ["It creates a disruptive environment that negatively impacts user experiences", "It enables organizations to create new opportunities for innovation and growth", "It leads to profit losses for organizations", "It eliminates the need for data analysts"],
    "correctAnswer": 1,
    "explanation": "The convergence of information systems and emerging technologies enables organizations to create new opportunities for innovation and growth [citation:1]."
  },
  {
    "id": 7,
    "question": "Which of the following is an opportunity presented by frontiers of information systems?",
    "options": ["Data breaches", "Regulatory compliance challenges", "Increased compatibility between networked systems", "Increased data processing costs"],
    "correctAnswer": 2,
    "explanation": "Increased compatibility between networked systems is an opportunity presented by frontiers of information systems [citation:1]."
  },
  {
    "id": 8,
    "question": "Which statement is true about societal and global impacts of emerging technologies?",
    "options": ["They only affect small groups", "They have had only a small effect on communities", "Academia is the only area of societal change", "Artificial intelligence-enabled systems are examples of societal and global impacts"],
    "correctAnswer": 3,
    "explanation": "Artificial intelligence-enabled systems are examples of the societal and global impacts of emerging technologies [citation:1]."
  },
  {
    "id": 9,
    "question": "Why is solar power considered an emerging technology?",
    "options": ["It has seen widespread adoption helping consumers lower bills", "Laws prevent companies from marketing it", "Economies have been negatively impacted by its use", "It has decreased dependency on fossil fuels"],
    "correctAnswer": 3,
    "explanation": "Solar power is considered an emerging technology because it has decreased dependency on fossil fuels [citation:1]."
  },
  {
    "id": 10,
    "question": "How do data analytics support healthcare efforts?",
    "options": ["By identifying different strands of flu and its prevalence", "By reducing efficiencies in healthcare supply chains", "By providing information on healthcare resourcing to identify staffing and financial needs", "By initiating targeted marketing campaigns"],
    "correctAnswer": 2,
    "explanation": "Data analytics supports healthcare by providing information on healthcare resourcing to help organizations identify staffing and financial needs [citation:1]."
  },
  {
    "id": 11,
    "question": "What is the purpose of research as it relates to technology?",
    "options": ["It is the precursor to innovation", "It is a secondary component in design", "It provides the full picture of how technology functions", "It prevents innovation from being adopted"],
    "correctAnswer": 0,
    "explanation": "Research is the precursor to innovation in technology development [citation:1]."
  },
  {
    "id": 12,
    "question": "What is a key feature of blockchain technology?",
    "options": ["Centralized data storage", "Decentralized and distributed record-keeping", "Manual data entry", "Single-point data failure"],
    "correctAnswer": 1,
    "explanation": "A key feature of blockchain technology is decentralized and distributed record-keeping [citation:3]."
  },
  {
    "id": 13,
    "question": "Why is blockchain technology considered highly secure?",
    "options": ["Because it uses simple passwords", "Because each block stores data with a hash", "Because it is stored on a single server", "Because it is only accessible to administrators"],
    "correctAnswer": 1,
    "explanation": "Blockchain is considered highly secure because each block stores data with a cryptographic hash [citation:3]."
  },
  {
    "id": 14,
    "question": "Which of the following are advantages of emerging technologies?",
    "options": ["Less chance of human error", "Reduces employment workforce", "Lower running costs", "Opportunities for higher skilled workers"],
    "correctAnswer": 0,
    "explanation": "Advantages of emerging technologies include less chance of human error, lower running costs, and opportunities for higher skilled workers [citation:3]."
  },
  {
    "id": 15,
    "question": "What is the definition of a Robot?",
    "options": ["A machine which resembles a human being", "A machine capable of carrying out complex series of actions automatically, especially one programmable by a computer", "A machine which can think for itself", "Any machine which can follow instructions"],
    "correctAnswer": 1,
    "explanation": "A robot is a machine capable of carrying out complex series of actions automatically, especially one programmable by a computer [citation:3]."
  },
  {
    "id": 16,
    "question": "Which of the following is NOT an advantage of robots?",
    "options": ["They can be used in dangerous environments", "They can assist humans with disabilities", "They can replace jobs", "They don't get tired or require a break"],
    "correctAnswer": 2,
    "explanation": "Job replacement is often considered a disadvantage rather than an advantage, as it can lead to unemployment [citation:3]."
  },
  {
    "id": 17,
    "question": "What is Artificial Intelligence?",
    "options": ["A technology that enables machines to learn autonomously", "A technology for complex calculations", "A technology that enables machines to imitate human behavior", "All of the above"],
    "correctAnswer": 3,
    "explanation": "Artificial Intelligence encompasses technologies that enable machines to learn autonomously, perform complex calculations, and imitate human behavior [citation:7]."
  },
  {
    "id": 18,
    "question": "What is Virtual Reality?",
    "options": ["A network of connected devices", "3D printing technology", "The creation of immersive experiences in a digital world simulating real or fictional environments", "Robotic automation"],
    "correctAnswer": 2,
    "explanation": "Virtual reality is the creation of immersive experiences in a digital world, simulating a real or fictional environment for users [citation:7]."
  },
  {
    "id": 19,
    "question": "What is the Internet of Things (IoT)?",
    "options": ["A network of smart objects connected to the internet", "A network of sensors only", "A network of cameras only", "A type of cloud computing"],
    "correctAnswer": 0,
    "explanation": "The Internet of Things (IoT) is a network of smart objects and devices connected to the internet [citation:7]."
  },
  {
    "id": 20,
    "question": "What is the objective of robotics?",
    "options": ["Automate repetitive and dangerous tasks", "Improve production efficiency", "Design, construction, programming and utilization of robots", "All of the above"],
    "correctAnswer": 3,
    "explanation": "Robotics encompasses the design, construction, programming, and utilization of robots to automate tasks and improve efficiency [citation:7]."
  },
  {
    "id": 21,
    "question": "What is 5G technology?",
    "options": ["A high-speed data transmission technology", "An augmented reality technology", "An online security technology", "A cloud computing platform"],
    "correctAnswer": 0,
    "explanation": "5G is a technology for high-speed data transmission [citation:7]."
  },
  {
    "id": 22,
    "question": "What is Augmented Reality?",
    "options": ["A technology for complex calculations", "A technology that overlays digital images onto the real world", "A technology for autonomous learning", "A fully immersive digital environment"],
    "correctAnswer": 1,
    "explanation": "Augmented reality is a technology that superimposes digital images and information onto the real world [citation:7]."
  },
  {
    "id": 23,
    "question": "What is cloud technology?",
    "options": ["An IT infrastructure for storing and accessing information from anywhere", "An online storage system for secure file sharing", "A technology for accessing online services without downloading", "All of the above"],
    "correctAnswer": 3,
    "explanation": "Cloud technology encompasses IT infrastructure for remote storage and access, online file sharing, and access to services without downloading [citation:7]."
  },
  {
    "id": 24,
    "question": "What is a token in the context of Large Language Models?",
    "options": ["A special password to access the AI", "The smallest unit of text that the model processes", "A type of computer memory", "A reward system for the AI"],
    "correctAnswer": 1,
    "explanation": "In Large Language Models, a token is the smallest unit of text that the model processes, such as words or parts of words [citation:5]."
  },
  {
    "id": 25,
    "question": "How do Large Language Models (LLMs) like ChatGPT work?",
    "options": ["They memorize and repeat exact answers from a database", "They understand patterns in language to generate contextually appropriate responses", "They connect directly to the internet to find current information", "They require human operators to type responses"],
    "correctAnswer": 1,
    "explanation": "Large Language Models work by understanding patterns in language to generate contextually appropriate responses [citation:5]."
  },
  {
    "id": 26,
    "question": "How does an LLM derive meaning from text?",
    "options": ["By looking up each word in a dictionary", "By asking human experts for explanations", "By analyzing mathematical relationships and patterns between words", "By searching the internet for similar sentences"],
    "correctAnswer": 2,
    "explanation": "LLMs derive meaning by analyzing the mathematical relationships and patterns between words [citation:5]."
  },
  {
    "id": 27,
    "question": "What distinguishes Agentic AI from regular AI chatbots?",
    "options": ["Agentic AI is more expensive to operate", "Agentic AI can independently complete multi-step tasks and make decisions to achieve goals", "Agentic AI only works with other AI agents", "Agentic AI requires constant human supervision"],
    "correctAnswer": 1,
    "explanation": "Agentic AI differs from regular chatbots by its ability to independently complete multi-step tasks and make decisions to achieve business goals [citation:5]."
  },
  {
    "id": 28,
    "question": "What is the primary opportunity for startups in emerging industries?",
    "options": ["Consolidating the industry and establishing leadership", "Focusing only on service innovation", "Pursuing a narrow niche strategy", "Capturing a first-mover advantage"],
    "correctAnswer": 3,
    "explanation": "Capturing a first-mover advantage is a primary opportunity for startups in emerging industries [citation:6]."
  },
  {
    "id": 29,
    "question": "What does primary research consist of?",
    "options": ["Data collected by someone else", "Data collected by the person completing the analysis", "Published data only", "Historical data"],
    "correctAnswer": 1,
    "explanation": "Primary research consists of data that has been collected by the person completing the analysis [citation:6]."
  },
  {
    "id": 30,
    "question": "What type of financial statement projects the firm's future financial situation based on current trends?",
    "options": ["Chronological", "Pro forma", "Concurrent", "Historical"],
    "correctAnswer": 1,
    "explanation": "Pro forma financial statements project the firm's financial situation in the future based on current trends and assumptions [citation:6]."
  },
  {
    "id": 31,
    "question": "Value-based pricing takes which approach?",
    "options": ["Product-oriented", "Company-oriented", "Customer-oriented", "Cost-oriented"],
    "correctAnswer": 2,
    "explanation": "Value-based pricing takes a customer-oriented approach [citation:6]."
  },
  {
    "id": 32,
    "question": "What is the Metaverse?",
    "options": ["A type of cryptocurrency", "An interoperable network of 3D virtual worlds accessible by millions of users who can exert property rights over virtual items", "A big data analytics platform", "A virtual matrix for computing"],
    "correctAnswer": 1,
    "explanation": "The Metaverse is an interoperable network of 3D virtual worlds that can be accessed simultaneously by millions of users, who can exert property rights over virtual items [citation:10]."
  },
  {
    "id": 33,
    "question": "What is the exhaust pipe emission from Fuel Cell Electric Vehicles powered by hydrogen?",
    "options": ["Hydrogen peroxide", "Hydronium", "Oxygen", "Water vapor"],
    "correctAnswer": 3,
    "explanation": "Fuel Cell Electric Vehicles powered by hydrogen emit water vapor as exhaust [citation:10]."
  },
  {
    "id": 34,
    "question": "What is pumped-storage hydropower used for?",
    "options": ["Irrigation", "Lift irrigation", "Long-duration energy storage", "Rainwater harvesting"],
    "correctAnswer": 2,
    "explanation": "Pumped-storage hydropower is used for long-duration energy storage [citation:10]."
  },
  {
    "id": 35,
    "question": "Where are Membrane Bioreactors commonly used?",
    "options": ["Assisted reproductive technologies", "Drug delivery", "Vaccine production", "Wastewater treatment technologies"],
    "correctAnswer": 3,
    "explanation": "Membrane Bioreactors are often used in wastewater treatment technologies [citation:10]."
  },
  {
    "id": 36,
    "question": "Which of the following is true about green hydrogen?",
    "options": ["It can be used directly as fuel for internal combustion", "It can be blended with natural gas for heat or power generation", "It can be used in hydrogen fuel cells to run vehicles", "All of the above"],
    "correctAnswer": 3,
    "explanation": "Green hydrogen can be used directly as fuel, blended with natural gas, and used in fuel cells for vehicles [citation:10]."
  },
  {
    "id": 37,
    "question": "What is the 'Wolbachia method' used for?",
    "options": ["Converting crop residues", "Producing biodegradable plastics", "Controlling viral diseases spread by mosquitoes", "Producing biochar"],
    "correctAnswer": 2,
    "explanation": "The Wolbachia method is used for controlling viral diseases spread by mosquitoes [citation:10]."
  },
  {
    "id": 38,
    "question": "What does 'aerial metagenomics' refer to?",
    "options": ["Studying bird genetics", "Collecting DNA samples from air in a habitat at one go", "Using drones for animal sampling", "Analyzing plant DNA from water bodies"],
    "correctAnswer": 1,
    "explanation": "Aerial metagenomics refers to collecting DNA samples from air in a habitat at one go [citation:10]."
  },
  {
    "id": 39,
    "question": "What is 'Open Innovation' in the context of digital transformation?",
    "options": ["Using open-source software", "Collaborating beyond organizational boundaries to drive innovation", "Keeping innovations transparent to the public", "Prioritizing internal ideas over external influences"],
    "correctAnswer": 1,
    "explanation": "Open Innovation involves collaborating beyond organizational boundaries to drive innovation [citation:5]."
  },
  {
    "id": 40,
    "question": "Why is employee trust (psychological safety) crucial during digital transformation?",
    "options": ["It ensures employees work without asking questions", "It encourages employees to participate without fear", "It convinces employees to work longer hours", "It ensures positive feedback is shared"],
    "correctAnswer": 1,
    "explanation": "Psychological safety is crucial because it encourages employees to participate without fear during digital transformation [citation:5]."
  },
  {
    "id": 41,
    "question": "What is a characteristic of Distributed Energy Resources?",
    "options": ["Centralized power generation", "Large nuclear power plants", "Battery storage, biomass generators, fuel cells, and rooftop solar", "Coal-fired power stations"],
    "correctAnswer": 2,
    "explanation": "Distributed Energy Resources include battery storage, biomass generators, fuel cells, and rooftop solar photovoltaic units [citation:10]."
  },
  {
    "id": 42,
    "question": "What are radioisotope thermoelectric generators (RTGs) used for?",
    "options": ["Powering homes", "Powering onboard systems of spacecraft", "Medical applications", "Industrial heating"],
    "correctAnswer": 1,
    "explanation": "RTGs are used for powering the onboard systems of spacecraft [citation:10]."
  },
  {
    "id": 43,
    "question": "Which substance is synthesized in the human body that dilates blood vessels and increases blood flow?",
    "options": ["Nitrous oxide", "Nitrogen dioxide", "Nitric oxide", "Nitrogen pentoxide"],
    "correctAnswer": 2,
    "explanation": "Nitric oxide is synthesized in the human body and dilates blood vessels, increasing blood flow [citation:10]."
  },
  {
    "id": 44,
    "question": "In which activities can radars be used?",
    "options": ["Identification of narcotics only", "Monitoring precipitation only", "Tracking animal migration only", "All of the above"],
    "correctAnswer": 3,
    "explanation": "Radars can be used for identification of narcotics, monitoring precipitation, and tracking animal migration [citation:10]."
  },
  {
    "id": 45,
    "question": "What are hydrogels used for?",
    "options": ["Controlled drug delivery only", "Mobile air-conditioning systems only", "Industrial lubricants only", "Controlled drug delivery, mobile air-conditioning, and industrial lubricants"],
    "correctAnswer": 3,
    "explanation": "Hydrogels are used in controlled drug delivery, mobile air-conditioning systems, and preparation of industrial lubricants [citation:10]."
  },
  {
    "id": 46,
    "question": "What is quantum computing?",
    "options": ["Computing using classical bits", "Computing using quantum bits (qubits) that can exist in multiple states simultaneously", "Faster traditional computing", "Cloud-based computing"],
    "correctAnswer": 1,
    "explanation": "Quantum computing uses quantum bits (qubits) that can exist in multiple states simultaneously, enabling complex calculations."
  },
  {
    "id": 47,
    "question": "What is blockchain primarily used for?",
    "options": ["Social media", "Decentralized and secure record-keeping", "Video streaming", "Word processing"],
    "correctAnswer": 1,
    "explanation": "Blockchain is primarily used for decentralized and secure record-keeping and transactions."
  },
  {
    "id": 48,
    "question": "What is 3D printing?",
    "options": ["Printing photos in 3D", "Additive manufacturing process creating three-dimensional objects from digital files", "Printing on 3D surfaces", "A type of scanner"],
    "correctAnswer": 1,
    "explanation": "3D printing is an additive manufacturing process that creates three-dimensional objects layer by layer from digital files."
  },
  {
    "id": 49,
    "question": "What is nanotechnology?",
    "options": ["Technology using small computers", "Manipulation of matter at atomic and molecular scale", "Microscopy techniques", "Miniature electronics"],
    "correctAnswer": 1,
    "explanation": "Nanotechnology involves the manipulation of matter at the atomic and molecular scale, typically between 1 and 100 nanometers."
  },
  {
    "id": 50,
    "question": "What is edge computing?",
    "options": ["Computing at the edge of devices", "Processing data near the source instead of in a centralized cloud", "Fringe technology", "Computing on mobile phones only"],
    "correctAnswer": 1,
    "explanation": "Edge computing processes data near the source of data generation rather than in a centralized cloud, reducing latency."
  },
  {
    "id": 51,
    "question": "What is CRISPR-Cas9?",
    "options": ["A type of computer virus", "A gene-editing technology", "A new programming language", "A cybersecurity protocol"],
    "correctAnswer": 1,
    "explanation": "CRISPR-Cas9 is a revolutionary gene-editing technology that allows precise modification of DNA."
  },
  {
    "id": 52,
    "question": "What is autonomous vehicles technology based on?",
    "options": ["Magnetic fields", "GPS only", "Combination of sensors, AI, cameras, and radar", "Pre-programmed routes"],
    "correctAnswer": 2,
    "explanation": "Autonomous vehicles use a combination of sensors, artificial intelligence, cameras, radar, and lidar to navigate."
  },
  {
    "id": 53,
    "question": "What is biometrics used for in emerging technology?",
    "options": ["Measuring biodiversity", "Authentication and identification based on physical or behavioral characteristics", "Biological research", "Medical imaging"],
    "correctAnswer": 1,
    "explanation": "Biometrics uses physical or behavioral characteristics like fingerprints, facial recognition, or iris scans for authentication."
  },
  {
    "id": 54,
    "question": "What is digital twin technology?",
    "options": ["Copying digital files", "A virtual replica of a physical object, system, or process", "Twin computers", "Dual-screen technology"],
    "correctAnswer": 1,
    "explanation": "Digital twin technology creates virtual replicas of physical objects, systems, or processes for simulation and analysis."
  },
  {
    "id": 55,
    "question": "What is the main goal of sustainable technology?",
    "options": ["Maximizing profits", "Meeting present needs without compromising future generations' ability to meet their own needs", "Faster product development", "Global market dominance"],
    "correctAnswer": 1,
    "explanation": "Sustainable technology aims to meet present needs without compromising the ability of future generations to meet their own needs, considering environmental, social, and economic factors."
  }

    ,
      {
        id: 111,
        question: "What is a firewall?",
        options: ["A virus", "Network security system", "A web browser", "An operating system"],
        correctAnswer: 1,
        explanation: "A firewall is a network security system that monitors and controls network traffic"
      },
      {
        id: 121,
        question: "What is 1 GB in MB?",
        options: ["100 MB", "500 MB", "1000 MB", "1024 MB"],
        correctAnswer: 3,
        explanation: "1 Gigabyte equals 1024 Megabytes (using binary system)"
      },
      {
        id: 131,
        question: "What is the purpose of an IP address?",
        options: ["Identify websites", "Identify devices on a network", "Encrypt data", "Speed up internet"],
        correctAnswer: 1,
        explanation: "An IP address uniquely identifies a device on a network"
      },
      {
        id: 141,
        question: "What is phishing?",
        options: ["A game", "A programming technique", "A cyber attack to steal information", "A search engine"],
        correctAnswer: 2,
        explanation: "Phishing is a cyber attack that uses deceptive emails or websites to steal information"
      },
      {
        id: 151,
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
    name: "English-Language",
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
  id: 1, 
  question: "Choose the correct sentence:", 
  options: ["She go to school every day.", "She goes to school every day.", "She going to school every day.", "She gone to school every day."], 
  correctAnswer: 1, 
  explanation: "For third-person singular in the present simple tense, we add 's' to the verb: 'She goes'." 
},

{ 
  id: 2, 
  question: "Identify the noun in the sentence: 'The students are studying.'", 
  options: ["The", "Students", "Studying", "Are"], 
  correctAnswer: 1, 
  explanation: "'Students' is the noun because it names people." 
},

{ 
  id: 3, 
  question: "Choose the correct synonym for 'happy':", 
  options: ["Sad", "Angry", "Joyful", "Tired"], 
  correctAnswer: 2, 
  explanation: "'Joyful' has a similar meaning to 'happy'." 
},

{ 
  id: 4, 
  question: "Which sentence is in the past tense?", 
  options: ["They play football.", "They are playing football.", "They played football.", "They will play football."], 
  correctAnswer: 2, 
  explanation: "'Played' is the past tense of 'play'." 
},

{ 
  id: 5, 
  question: "Choose the correct article: ___ apple a day keeps the doctor away.", 
  options: ["A", "An", "The", "No article"], 
  correctAnswer: 1, 
  explanation: "'An' is used before words beginning with a vowel sound like 'apple'." 
},

{ 
  id: 6, 
  question: "Which word is an adjective?", 
  options: ["Quickly", "Happiness", "Beautiful", "Run"], 
  correctAnswer: 2, 
  explanation: "'Beautiful' describes a noun, so it is an adjective." 
},

{ 
  id: 7, 
  question: "What is the plural form of 'child'?", 
  options: ["Childs", "Children", "Childes", "Childrens"], 
  correctAnswer: 1, 
  explanation: "The correct irregular plural form is 'children'." 
},

{ 
  id: 8, 
  question: "Choose the correct preposition: She is interested ___ music.", 
  options: ["on", "at", "in", "for"], 
  correctAnswer: 2, 
  explanation: "The correct preposition is 'interested in'." 
},

{ 
  id: 9, 
  question: "Identify the verb in the sentence: 'They are running fast.'", 
  options: ["They", "Are", "Running", "Fast"], 
  correctAnswer: 2, 
  explanation: "'Running' is the main verb showing action." 
},

{ 
  id: 10, 
  question: "Which sentence is grammatically correct?", 
  options: ["He don’t like coffee.", "He doesn’t likes coffee.", "He doesn’t like coffee.", "He not like coffee."], 
  correctAnswer: 2, 
  explanation: "The correct negative form is 'He doesn’t like coffee.'." 
},

{ 
  id: 11, 
  question: "What is the antonym of 'increase'?", 
  options: ["Rise", "Grow", "Decrease", "Improve"], 
  correctAnswer: 2, 
  explanation: "'Decrease' is the opposite of 'increase'." 
},

{ 
  id: 12, 
  question: "Choose the correct conjunction: I was tired, ___ I finished my homework.", 
  options: ["but", "and", "or", "so"], 
  correctAnswer: 0, 
  explanation: "'But' is used to show contrast." 
},

{ 
  id: 13, 
  question: "Which sentence is in the future tense?", 
  options: ["She studies hard.", "She studied hard.", "She will study hard.", "She studying hard."], 
  correctAnswer: 2, 
  explanation: "'Will study' indicates future tense." 
},

{ 
  id: 14, 
  question: "Identify the adverb in the sentence: 'He speaks clearly.'", 
  options: ["He", "Speaks", "Clearly", "None"], 
  correctAnswer: 2, 
  explanation: "'Clearly' describes how he speaks, so it is an adverb." 
},

{ 
  id: 15, 
  question: "Which sentence shows correct punctuation?", 
  options: ["Its a nice day.", "It’s a nice day.", "Its' a nice day.", "It is a nice day"], 
  correctAnswer: 1, 
  explanation: "'It’s' is the contraction of 'It is'." 
},

{ 
  id: 16, 
  question: "What is a paragraph?", 
  options: ["A single word", "A group of related sentences", "A punctuation mark", "A verb form"], 
  correctAnswer: 1, 
  explanation: "A paragraph is a group of related sentences about one main idea." 
},

{ 
  id: 17, 
  question: "Choose the correct comparative form of 'good':", 
  options: ["Gooder", "More good", "Better", "Best"], 
  correctAnswer: 2, 
  explanation: "'Better' is the comparative form of 'good'." 
},

{ 
  id: 18, 
  question: "Which word is a pronoun?", 
  options: ["Table", "Quick", "They", "Walk"], 
  correctAnswer: 2, 
  explanation: "'They' replaces a noun, so it is a pronoun." 
},

{ 
  id: 19, 
  question: "Choose the correct sentence structure:", 
  options: ["Because I was late.", "Running in the park.", "She completed the assignment.", "After the rain."], 
  correctAnswer: 2, 
  explanation: "'She completed the assignment.' is a complete sentence with subject and verb." 
},

{ 
  id: 20, 
  question: "What is the main idea of a text?", 
  options: ["A small detail", "The central message", "The title only", "A grammar rule"], 
  correctAnswer: 1, 
  explanation: "The main idea is the central message of a text." 
},

{ 
  id: 21, 
  question: "Choose the correct possessive form: This is ___ book.", 
  options: ["John", "Johns", "John’s", "Johns’"], 
  correctAnswer: 2, 
  explanation: "'John’s' shows possession." 
},

{ 
  id: 22, 
  question: "Which is a complex sentence?", 
  options: ["I like tea.", "She ran fast.", "Although it was raining, we went outside.", "He reads books."], 
  correctAnswer: 2, 
  explanation: "A complex sentence contains an independent and a dependent clause." 
},

{ 
  id: 23, 
  question: "What is the purpose of an introduction paragraph?", 
  options: ["To summarize everything", "To present the main topic", "To give examples only", "To end the essay"], 
  correctAnswer: 1, 
  explanation: "The introduction presents the topic and main idea." 
},

{ 
  id: 24, 
  question: "Choose the correct word: She has lived here ___ 2020.", 
  options: ["for", "since", "at", "by"], 
  correctAnswer: 1, 
  explanation: "'Since' is used with a specific starting point in time." 
},

{ 
  id: 25, 
  question: "Which sentence is in passive voice?", 
  options: ["The teacher explained the lesson.", "The lesson was explained by the teacher.", "The teacher explains the lesson.", "The teacher is explaining the lesson."], 
  correctAnswer: 1, 
  explanation: "Passive voice focuses on the action receiver: 'The lesson was explained by the teacher.'." 
}
      ,
      {
        id: 26,
        question: "What type of word is 'and'?",
        options: ["Noun", "Verb", "Conjunction", "Adverb"],
        correctAnswer: 2,
        explanation: "'And' is a conjunction used to connect words, phrases, or clauses"
      },
      {
        id: 27,
        question: "Which is the correct comparative form of 'good'?",
        options: ["Gooder", "More good", "Better", "Best"],
        correctAnswer: 2,
        explanation: "'Better' is the irregular comparative form of 'good'"
      },
      {
        id: 28,
        question: "What is a synonym for 'happy'?",
        options: ["Sad", "Joyful", "Angry", "Tired"],
        correctAnswer: 1,
        explanation: "'Joyful' is a synonym (similar meaning) for 'happy'"
      },
      {
        id: 29,
        question: "Which sentence is in passive voice?",
        options: ["The cat ate the mouse.", "The mouse was eaten by the cat.", "The cat is eating.", "Cats eat mice."],
        correctAnswer: 1,
        explanation: "In passive voice, the object of the action becomes the subject of the sentence"
      },
      {
        id: 30,
        question: "What is the antonym of 'ancient'?",
        options: ["Old", "Historic", "Modern", "Traditional"],
        correctAnswer: 2,
        explanation: "'Modern' is the antonym (opposite meaning) of 'ancient'"
      },
    ],
    final: 
    [
  {
    "id": 551,
    "question": "Choose the correctly punctuated sentence:",
    "options": [
      "I went to the store but I forgot my wallet.",
      "I went to the store, but I forgot my wallet.",
      "I went to the store but, I forgot my wallet.",
      "I went to the store; but I forgot my wallet."
    ],
    "correctAnswer": 1,
    "explanation": "A comma is needed before 'but' when joining two independent clauses."
  },
  {
    "id": 552,
    "question": "Select the word that is a synonym for 'happy':",
    "options": ["Sad", "Elated", "Angry", "Tired"],
    "correctAnswer": 1,
    "explanation": "'Elated' is a synonym for 'happy'."
  },
  {
    "id": 553,
    "question": "Identify the subject in the sentence: 'The quick brown fox jumps over the lazy dog.'",
    "options": ["jumps", "fox", "dog", "over"],
    "correctAnswer": 1,
    "explanation": "The subject of the sentence is 'fox'."
  },
  {
    "id": 554,
    "question": "Which sentence uses the correct form of 'their'?",
    "options": [
      "Their going to the park later.",
      "They are taking their books with them.",
      "There taking their lunch now.",
      "They're going to loose their keys."
    ],
    "correctAnswer": 1,
    "explanation": "'Their' shows possession: 'their books'."
  },
  {
    "id": 555,
    "question": "Identify the figurative device: 'The wind whispered through the trees.'",
    "options": ["Metaphor", "Personification", "Simile", "Alliteration"],
    "correctAnswer": 1,
    "explanation": "Personification gives human qualities to non-human things, e.g., 'wind whispered'."
  },
  {
    "id": 556,
    "question": "Choose the sentence that is in active voice:",
    "options": [
      "The cake was eaten by the children.",
      "The children ate the cake.",
      "The cake being eaten by the children.",
      "The cake is eaten."
    ],
    "correctAnswer": 1,
    "explanation": "Active voice shows the subject performing the action: 'The children ate the cake.'"
  },
  {
    "id": 557,
    "question": "Select the correctly spelled word:",
    "options": ["Accomodate", "Acommodate", "Accommodate", "Acomadate"],
    "correctAnswer": 2,
    "explanation": "'Accommodate' is the correct spelling."
  },
  {
    "id": 558,
    "question": "Which word is an antonym of 'generous'?",
    "options": ["Selfish", "Kind", "Helpful", "Charitable"],
    "correctAnswer": 0,
    "explanation": "'Selfish' is the opposite of 'generous'."
  },
  {
    "id": 559,
    "question": "What is the main idea of the passage: 'Many students struggle with time management, but those who plan their schedules carefully are more likely to succeed.'",
    "options": [
      "Students always succeed.",
      "Time management is important for success.",
      "Planning is unnecessary.",
      "Students never plan."
    ],
    "correctAnswer": 1,
    "explanation": "The passage emphasizes that effective time management leads to better success."
  },
  {
    "id": 560,
    "question": "Choose the correct form: 'If I ___ the answer, I would have told you.'",
    "options": ["know", "knew", "had known", "knows"],
    "correctAnswer": 2,
    "explanation": "The correct past perfect form for conditional sentences: 'If I had known...'"
  },
         { 
  id: 1, 
  question: "Choose the correct sentence:", 
  options: ["She go to school every day.", "She goes to school every day.", "She going to school every day.", "She gone to school every day."], 
  correctAnswer: 1, 
  explanation: "For third-person singular in the present simple tense, we add 's' to the verb: 'She goes'." 
},

{ 
  id: 2, 
  question: "Identify the noun in the sentence: 'The students are studying.'", 
  options: ["The", "Students", "Studying", "Are"], 
  correctAnswer: 1, 
  explanation: "'Students' is the noun because it names people." 
},

{ 
  id: 3, 
  question: "Choose the correct synonym for 'happy':", 
  options: ["Sad", "Angry", "Joyful", "Tired"], 
  correctAnswer: 2, 
  explanation: "'Joyful' has a similar meaning to 'happy'." 
},

{ 
  id: 4, 
  question: "Which sentence is in the past tense?", 
  options: ["They play football.", "They are playing football.", "They played football.", "They will play football."], 
  correctAnswer: 2, 
  explanation: "'Played' is the past tense of 'play'." 
},

{ 
  id: 5, 
  question: "Choose the correct article: ___ apple a day keeps the doctor away.", 
  options: ["A", "An", "The", "No article"], 
  correctAnswer: 1, 
  explanation: "'An' is used before words beginning with a vowel sound like 'apple'." 
},

{ 
  id: 6, 
  question: "Which word is an adjective?", 
  options: ["Quickly", "Happiness", "Beautiful", "Run"], 
  correctAnswer: 2, 
  explanation: "'Beautiful' describes a noun, so it is an adjective." 
},

{ 
  id: 7, 
  question: "What is the plural form of 'child'?", 
  options: ["Childs", "Children", "Childes", "Childrens"], 
  correctAnswer: 1, 
  explanation: "The correct irregular plural form is 'children'." 
},

{ 
  id: 8, 
  question: "Choose the correct preposition: She is interested ___ music.", 
  options: ["on", "at", "in", "for"], 
  correctAnswer: 2, 
  explanation: "The correct preposition is 'interested in'." 
},

{ 
  id: 9, 
  question: "Identify the verb in the sentence: 'They are running fast.'", 
  options: ["They", "Are", "Running", "Fast"], 
  correctAnswer: 2, 
  explanation: "'Running' is the main verb showing action." 
},

{ 
  id: 10, 
  question: "Which sentence is grammatically correct?", 
  options: ["He don’t like coffee.", "He doesn’t likes coffee.", "He doesn’t like coffee.", "He not like coffee."], 
  correctAnswer: 2, 
  explanation: "The correct negative form is 'He doesn’t like coffee.'." 
},

{ 
  id: 11, 
  question: "What is the antonym of 'increase'?", 
  options: ["Rise", "Grow", "Decrease", "Improve"], 
  correctAnswer: 2, 
  explanation: "'Decrease' is the opposite of 'increase'." 
},

{ 
  id: 12, 
  question: "Choose the correct conjunction: I was tired, ___ I finished my homework.", 
  options: ["but", "and", "or", "so"], 
  correctAnswer: 0, 
  explanation: "'But' is used to show contrast." 
},

{ 
  id: 13, 
  question: "Which sentence is in the future tense?", 
  options: ["She studies hard.", "She studied hard.", "She will study hard.", "She studying hard."], 
  correctAnswer: 2, 
  explanation: "'Will study' indicates future tense." 
},

{ 
  id: 14, 
  question: "Identify the adverb in the sentence: 'He speaks clearly.'", 
  options: ["He", "Speaks", "Clearly", "None"], 
  correctAnswer: 2, 
  explanation: "'Clearly' describes how he speaks, so it is an adverb." 
},

{ 
  id: 15, 
  question: "Which sentence shows correct punctuation?", 
  options: ["Its a nice day.", "It’s a nice day.", "Its' a nice day.", "It is a nice day"], 
  correctAnswer: 1, 
  explanation: "'It’s' is the contraction of 'It is'." 
},

{ 
  id: 16, 
  question: "What is a paragraph?", 
  options: ["A single word", "A group of related sentences", "A punctuation mark", "A verb form"], 
  correctAnswer: 1, 
  explanation: "A paragraph is a group of related sentences about one main idea." 
},

{ 
  id: 17, 
  question: "Choose the correct comparative form of 'good':", 
  options: ["Gooder", "More good", "Better", "Best"], 
  correctAnswer: 2, 
  explanation: "'Better' is the comparative form of 'good'." 
},

{ 
  id: 18, 
  question: "Which word is a pronoun?", 
  options: ["Table", "Quick", "They", "Walk"], 
  correctAnswer: 2, 
  explanation: "'They' replaces a noun, so it is a pronoun." 
},

{ 
  id: 19, 
  question: "Choose the correct sentence structure:", 
  options: ["Because I was late.", "Running in the park.", "She completed the assignment.", "After the rain."], 
  correctAnswer: 2, 
  explanation: "'She completed the assignment.' is a complete sentence with subject and verb." 
},

{ 
  id: 20, 
  question: "What is the main idea of a text?", 
  options: ["A small detail", "The central message", "The title only", "A grammar rule"], 
  correctAnswer: 1, 
  explanation: "The main idea is the central message of a text." 
},

{ 
  id: 21, 
  question: "Choose the correct possessive form: This is ___ book.", 
  options: ["John", "Johns", "John’s", "Johns’"], 
  correctAnswer: 2, 
  explanation: "'John’s' shows possession." 
},

{ 
  id: 22, 
  question: "Which is a complex sentence?", 
  options: ["I like tea.", "She ran fast.", "Although it was raining, we went outside.", "He reads books."], 
  correctAnswer: 2, 
  explanation: "A complex sentence contains an independent and a dependent clause." 
},

{ 
  id: 23, 
  question: "What is the purpose of an introduction paragraph?", 
  options: ["To summarize everything", "To present the main topic", "To give examples only", "To end the essay"], 
  correctAnswer: 1, 
  explanation: "The introduction presents the topic and main idea." 
},

{ 
  id: 24, 
  question: "Choose the correct word: She has lived here ___ 2020.", 
  options: ["for", "since", "at", "by"], 
  correctAnswer: 1, 
  explanation: "'Since' is used with a specific starting point in time." 
},

{ 
  id: 25, 
  question: "Which sentence is in passive voice?", 
  options: ["The teacher explained the lesson.", "The lesson was explained by the teacher.", "The teacher explains the lesson.", "The teacher is explaining the lesson."], 
  correctAnswer: 1, 
  explanation: "Passive voice focuses on the action receiver: 'The lesson was explained by the teacher.'." 
},
  {
    "id": 561,
    "question": "Choose the sentence with correct punctuation:",
    "options": [
      "She said 'I am coming.'",
      "She said, 'I am coming.'",
      "She said 'I am coming',",
      "She said I am coming."
    ],
    "correctAnswer": 1,
    "explanation": "Commas should precede a quotation when introducing it."
  },
  {
    "id": 562,
    "question": "Identify the correctly punctuated sentence:",
    "options": [
      "Its a beautiful day.",
      "It's a beautiful day.",
      "Its' a beautiful day.",
      "It is' a beautiful day."
    ],
    "correctAnswer": 1,
    "explanation": "'It's' is the contraction of 'It is', which is correct here."
  },
  {
    "id": 563,
    "question": "Choose the correctly punctuated sentence:",
    "options": [
      "I bought apples oranges and bananas.",
      "I bought apples, oranges, and bananas.",
      "I bought apples oranges, and bananas.",
      "I bought, apples, oranges and bananas."
    ],
    "correctAnswer": 1,
    "explanation": "Use commas to separate items in a list; include the Oxford comma if desired."
  },
  {
    "id": 564,
    "question": "Select the sentence with correct subject-verb agreement:",
    "options": [
      "The dogs runs fast.",
      "The dog run fast.",
      "The dog runs fast.",
      "The dogs running fast."
    ],
    "correctAnswer": 2,
    "explanation": "Singular subject 'dog' takes singular verb 'runs'."
  },
  {
    "id": 565,
    "question": "Choose the sentence with correct capitalization:",
    "options": [
      "i went to Paris last summer.",
      "I went to paris last summer.",
      "I went to Paris last summer.",
      "I went to paris last Summer."
    ],
    "correctAnswer": 2,
    "explanation": "Proper nouns like 'Paris' and the first word of the sentence should be capitalized."
  },
  {
    "id": 566,
    "question": "Select the sentence with correct punctuation for possession:",
    "options": [
      "The cats toy is missing.",
      "The cat's toy is missing.",
      "The cats' toy is missing.",
      "The cat toy's missing."
    ],
    "correctAnswer": 1,
    "explanation": "Singular possessive requires an apostrophe before 's'."
  },
  {
    "id": 567,
    "question": "Choose the correct word: 'She has a very ___ attitude.'",
    "options": ["positve", "positive", "positiv", "positively"],
    "correctAnswer": 1,
    "explanation": "'Positive' is the correct spelling and fits grammatically."
  },
  {
    "id": 568,
    "question": "Select the synonym of 'difficult':",
    "options": ["Easy", "Hard", "Simple", "Clear"],
    "correctAnswer": 1,
    "explanation": "'Hard' is a synonym for 'difficult'."
  },
  {
    "id": 569,
    "question": "Choose the antonym of 'ancient':",
    "options": ["Old", "Modern", "Historic", "Classic"],
    "correctAnswer": 1,
    "explanation": "'Modern' is the opposite of 'ancient'."
  },
  {
    "id": 570,
    "question": "Choose the correctly punctuated sentence with quotation:",
    "options": [
      "He asked 'Are you ready?'",
      "He asked, 'Are you ready?'",
      "He asked 'Are you ready?'?",
      "He asked 'Are you ready?'"
    ],
    "correctAnswer": 1,
    "explanation": "A comma introduces a quotation, and the question mark stays inside the quotation marks."
  },
  {
    "id": 571,
    "question": "Choose the correct word to complete the sentence: 'She is very good ___ playing chess.'",
    "options": ["at", "in", "on", "with"],
    "correctAnswer": 0,
    "explanation": "The correct preposition is 'at': 'good at playing chess'."
  },
  {
    "id": 572,
    "question": "Select the correct word: 'He is the ___ of the family.'",
    "options": ["eldest", "older", "oldestest", "old"],
    "correctAnswer": 0,
    "explanation": "'Eldest' is used for the oldest person in a group or family."
  },
  {
    "id": 573,
    "question": "Choose the correctly punctuated sentence:",
    "options": [
      "I cant believe it's already noon!",
      "I can't believe its already noon!",
      "I can't believe it's already noon!",
      "I cant believe its already noon!"
    ],
    "correctAnswer": 2,
    "explanation": "The contraction 'can't' needs an apostrophe; 'it's' is correct for 'it is'."
  },
  {
    "id": 574,
    "question": "Select the synonym of 'rapid':",
    "options": ["Slow", "Quick", "Late", "Weak"],
    "correctAnswer": 1,
    "explanation": "'Quick' is a synonym for 'rapid'."
  },
  {
    "id": 575,
    "question": "Choose the word that best fits: 'He has a very ___ sense of humor.'",
    "options": ["witty", "wise", "wild", "weary"],
    "correctAnswer": 0,
    "explanation": "'Witty' means clever and humorous, fitting the sentence context."
  },
  {
    "id": 576,
    "question": "Select the correctly punctuated sentence:",
    "options": [
      "After the rain the sun came out.",
      "After the rain, the sun came out.",
      "After the rain the sun, came out.",
      "After, the rain the sun came out."
    ],
    "correctAnswer": 1,
    "explanation": "A comma separates introductory phrases from the main clause."
  },
  {
    "id": 577,
    "question": "Choose the antonym of 'brave':",
    "options": ["Courageous", "Cowardly", "Valiant", "Heroic"],
    "correctAnswer": 1,
    "explanation": "'Cowardly' is the opposite of 'brave'."
  },
  {
    "id": 578,
    "question": "Choose the correct word: 'I have never seen a ___ performance.'",
    "options": ["spectacular", "specticuler", "spectacularly", "specticlar"],
    "correctAnswer": 0,
    "explanation": "'Spectacular' is the correct spelling and fits the sentence."
  },
  {
    "id": 579,
    "question": "Select the correct sentence:",
    "options": [
      "Who is coming to the party?",
      "Whom is coming to the party?",
      "Who whom is coming to the party?",
      "Whose coming to the party?"
    ],
    "correctAnswer": 0,
    "explanation": "'Who' is correct as the subject of the sentence."
  },
  {
    "id": 580,
    "question": "Choose the correct word: 'The child was ___ by the magician.'",
    "options": ["amazed", "amazing", "amazement", "amazes"],
    "correctAnswer": 0,
    "explanation": "'Amazed' describes the feeling of the child."
  }

    ,
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
  id: 1, 
  question: "What is the atomic number of an element?", 
  options: ["Number of neutrons", "Number of protons", "Number of electrons and neutrons", "Atomic mass"], 
  correctAnswer: 1, 
  explanation: "The atomic number represents the number of protons in the nucleus of an atom." 
},
{ 
  id: 2, 
  question: "Which particle has a negative charge?", 
  options: ["Proton", "Neutron", "Electron", "Nucleus"], 
  correctAnswer: 2, 
  explanation: "Electrons carry a negative charge and move around the nucleus." 
},
{ 
  id: 3, 
  question: "What is the chemical symbol for Sodium?", 
  options: ["So", "Sd", "Na", "S"], 
  correctAnswer: 2, 
  explanation: "The chemical symbol for Sodium is Na, derived from its Latin name Natrium." 
},
{ 
  id: 4, 
  question: "Which state of matter has a definite volume but no definite shape?", 
  options: ["Solid", "Liquid", "Gas", "Plasma"], 
  correctAnswer: 1, 
  explanation: "Liquids have a fixed volume but take the shape of their container." 
},
{ 
  id: 5, 
  question: "What type of bond involves sharing of electrons?", 
  options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"], 
  correctAnswer: 1, 
  explanation: "Covalent bonds form when atoms share electrons." 
},
{ 
  id: 6, 
  question: "The pH value of a neutral solution is:", 
  options: ["0", "7", "14", "10"], 
  correctAnswer: 1, 
  explanation: "A neutral solution at 25°C has a pH of 7." 
},
{ 
  id: 7, 
  question: "Which gas is most abundant in Earth's atmosphere?", 
  options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], 
  correctAnswer: 2, 
  explanation: "Nitrogen makes up about 78% of Earth's atmosphere." 
},
{ 
  id: 8, 
  question: "Avogadro’s number is approximately:", 
  options: ["6.02 × 10^23", "3.00 × 10^8", "9.81 m/s²", "1.60 × 10^-19"], 
  correctAnswer: 0, 
  explanation: "Avogadro’s number is 6.02 × 10^23 particles per mole." 
},
{ 
  id: 9, 
  question: "Which element is a noble gas?", 
  options: ["Oxygen", "Helium", "Nitrogen", "Hydrogen"], 
  correctAnswer: 1, 
  explanation: "Helium is a noble gas found in Group 18 of the periodic table." 
},
{ 
  id: 10, 
  question: "What is H2O commonly known as?", 
  options: ["Hydrogen peroxide", "Water", "Ozone", "Salt"], 
  correctAnswer: 1, 
  explanation: "H2O is the chemical formula for water." 
},
{ 
  id: 11, 
  question: "Which law states that mass is neither created nor destroyed?", 
  options: ["Boyle’s Law", "Law of Conservation of Mass", "Charles’s Law", "Ohm’s Law"], 
  correctAnswer: 1, 
  explanation: "The Law of Conservation of Mass states that mass remains constant in a chemical reaction." 
},
{ 
  id: 12, 
  question: "Which type of reaction involves oxygen and produces heat?", 
  options: ["Synthesis", "Decomposition", "Combustion", "Replacement"], 
  correctAnswer: 2, 
  explanation: "Combustion reactions involve oxygen and release heat." 
},
{ 
  id: 13, 
  question: "The smallest unit of a compound is called:", 
  options: ["Atom", "Molecule", "Element", "Ion"], 
  correctAnswer: 1, 
  explanation: "A molecule is the smallest unit of a compound that retains its properties." 
},
{ 
  id: 14, 
  question: "What is the charge of a proton?", 
  options: ["Negative", "Neutral", "Positive", "Variable"], 
  correctAnswer: 2, 
  explanation: "Protons carry a positive charge." 
},
{ 
  id: 15, 
  question: "Which element has the chemical symbol O?", 
  options: ["Gold", "Osmium", "Oxygen", "Oxide"], 
  correctAnswer: 2, 
  explanation: "Oxygen has the chemical symbol O." 
},
{ 
  id: 16, 
  question: "What is the process of a solid changing directly to gas?", 
  options: ["Condensation", "Evaporation", "Sublimation", "Melting"], 
  correctAnswer: 2, 
  explanation: "Sublimation is the direct transition from solid to gas." 
},
{ 
  id: 17, 
  question: "Which subatomic particle determines the identity of an element?", 
  options: ["Neutron", "Electron", "Proton", "Ion"], 
  correctAnswer: 2, 
  explanation: "The number of protons defines the element." 
},
{ 
  id: 18, 
  question: "Which acid is found in the stomach?", 
  options: ["Sulfuric acid", "Hydrochloric acid", "Nitric acid", "Acetic acid"], 
  correctAnswer: 1, 
  explanation: "Hydrochloric acid is present in the stomach to aid digestion." 
},
{ 
  id: 19, 
  question: "Which type of mixture has uniform composition?", 
  options: ["Heterogeneous mixture", "Suspension", "Colloid", "Homogeneous mixture"], 
  correctAnswer: 3, 
  explanation: "A homogeneous mixture has uniform composition throughout." 
},
{ 
  id: 20, 
  question: "What is the formula for carbon dioxide?", 
  options: ["CO", "CO2", "C2O", "O2C"], 
  correctAnswer: 1, 
  explanation: "Carbon dioxide has one carbon atom and two oxygen atoms (CO2)." 
},
{ 
  id: 21, 
  question: "Which particle is found in the nucleus but has no charge?", 
  options: ["Proton", "Electron", "Neutron", "Ion"], 
  correctAnswer: 2, 
  explanation: "Neutrons are neutral particles found in the nucleus." 
},
{ 
  id: 22, 
  question: "What does the periodic table organize elements by?", 
  options: ["Atomic mass only", "Atomic number", "Color", "Density"], 
  correctAnswer: 1, 
  explanation: "Elements are arranged by increasing atomic number." 
},
{ 
  id: 23, 
  question: "Which bond forms between metals and nonmetals?", 
  options: ["Covalent bond", "Ionic bond", "Hydrogen bond", "Peptide bond"], 
  correctAnswer: 1, 
  explanation: "Ionic bonds form when electrons are transferred between metals and nonmetals." 
},
{ 
  id: 24, 
  question: "What is the main component of natural gas?", 
  options: ["Methane", "Ethane", "Propane", "Butane"], 
  correctAnswer: 0, 
  explanation: "Methane (CH4) is the primary component of natural gas." 
},
{ 
  id: 25, 
  question: "Which unit is used to measure amount of substance?", 
  options: ["Gram", "Liter", "Mole", "Newton"], 
  correctAnswer: 2, 
  explanation: "The mole is the SI unit for the amount of substance." 
}

      ,
      {
        id: 26,
        question: "What is the most abundant gas in Earth's atmosphere?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
        correctAnswer: 2,
        explanation: "Nitrogen makes up about 78% of Earth's atmosphere"
      },
      {
        id: 27,
        question: "What is an isotope?",
        options: ["Same protons, different neutrons", "Same neutrons, different protons", "Same electrons, different protons", "Different element"],
        correctAnswer: 0,
        explanation: "Isotopes have the same number of protons but different numbers of neutrons"
      },
      {
        id: 28,
        question: "What is the molar mass of H₂O?",
        options: ["16 g/mol", "18 g/mol", "20 g/mol", "2 g/mol"],
        correctAnswer: 1,
        explanation: "H₂O = 2(1) + 16 = 18 g/mol (hydrogen = 1, oxygen = 16)"
      },
      {
        id: 29,
        question: "What type of reaction is: 2H₂ + O₂ → 2H₂O?",
        options: ["Decomposition", "Synthesis/Combination", "Single replacement", "Double replacement"],
        correctAnswer: 1,
        explanation: "This is a synthesis reaction where elements combine to form a compound"
      },
      {
        id: 30,
        question: "What is Avogadro's number?",
        options: ["6.022 × 10²³", "3.14 × 10²³", "6.022 × 10²²", "9.81 × 10²³"],
        correctAnswer: 0,
        explanation: "Avogadro's number is 6.022 × 10²³, the number of particles in one mole"
      },
    ],
    final: [
  {
    "id": 1,
    "question": "What is the chemical symbol for gold?",
    "options": ["Go", "Gd", "Au", "Ag"],
    "correctAnswer": 2,
    "explanation": "The chemical symbol for gold is Au, derived from the Latin word 'aurum'."
  },
  {
    "id": 2,
    "question": "What is the pH of a neutral solution at 25°C?",
    "options": ["0", "7", "14", "1"],
    "correctAnswer": 1,
    "explanation": "A neutral solution has a pH of exactly 7 at 25°C."
  },
  {
    "id": 3,
    "question": "Which element has the atomic number 1?",
    "options": ["Helium", "Oxygen", "Hydrogen", "Carbon"],
    "correctAnswer": 2,
    "explanation": "Hydrogen has atomic number 1, making it the lightest and most abundant element in the universe."
  },
  {
    "id": 4,
    "question": "What is the chemical formula for water?",
    "options": ["H2O2", "H2O", "HO2", "OH2"],
    "correctAnswer": 1,
    "explanation": "Water has the chemical formula H2O, consisting of two hydrogen atoms bonded to one oxygen atom."
  },
  {
    "id": 5,
    "question": "Which of the following is a noble gas?",
    "options": ["Oxygen", "Nitrogen", "Helium", "Chlorine"],
    "correctAnswer": 2,
    "explanation": "Helium is a noble gas with a full outer electron shell, making it chemically inert."
  },
  {
    "id": 6,
    "question": "What is the process of a solid changing directly into a gas called?",
    "options": ["Melting", "Evaporation", "Sublimation", "Condensation"],
    "correctAnswer": 2,
    "explanation": "Sublimation is the process where a solid changes directly into a gas without passing through the liquid phase, like dry ice."
  },
  {
    "id": 7,
    "question": "Which subatomic particle has a negative charge?",
    "options": ["Proton", "Neutron", "Electron", "Positron"],
    "correctAnswer": 2,
    "explanation": "Electrons are negatively charged subatomic particles that orbit the nucleus of an atom."
  },
  {
    "id": 8,
    "question": "What is the chemical formula for table salt?",
    "options": ["KCl", "NaCl", "CaCl2", "NaHCO3"],
    "correctAnswer": 1,
    "explanation": "Table salt is sodium chloride, with the chemical formula NaCl."
  },
  {
    "id": 9,
    "question": "What type of bond involves the sharing of electron pairs between atoms?",
    "options": ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
    "correctAnswer": 1,
    "explanation": "A covalent bond involves the sharing of electron pairs between atoms."
  },
  {
    "id": 10,
    "question": "Which gas do plants absorb from the atmosphere during photosynthesis?",
    "options": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    "correctAnswer": 2,
    "explanation": "Plants absorb carbon dioxide (CO2) from the atmosphere during photosynthesis to produce glucose and oxygen."
  },
  {
    "id": 11,
    "question": "What is the most abundant gas in Earth's atmosphere?",
    "options": ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
    "correctAnswer": 2,
    "explanation": "Nitrogen makes up about 78% of Earth's atmosphere, making it the most abundant gas."
  },
  {
    "id": 12,
    "question": "What is the chemical symbol for iron?",
    "options": ["Ir", "In", "Fe", "I"],
    "correctAnswer": 2,
    "explanation": "The chemical symbol for iron is Fe, derived from the Latin word 'ferrum'."
  },
  {
    "id": 13,
    "question": "Which of the following is an acid?",
    "options": ["NaOH", "HCl", "KOH", "NaCl"],
    "correctAnswer": 1,
    "explanation": "HCl (hydrochloric acid) is an acid, while NaOH and KOH are bases, and NaCl is a salt."
  },
  {
    "id": 14,
    "question": "What is the atomic mass of carbon?",
    "options": ["6", "12", "14", "16"],
    "correctAnswer": 1,
    "explanation": "Carbon has an atomic mass of approximately 12 atomic mass units."
  },
  {
    "id": 15,
    "question": "What is the name for a substance that speeds up a chemical reaction without being consumed?",
    "options": ["Reactant", "Product", "Catalyst", "Inhibitor"],
    "correctAnswer": 2,
    "explanation": "A catalyst speeds up a chemical reaction without being consumed in the process."
  },
  {
    "id": 16,
    "question": "Which element is represented by the symbol 'K'?",
    "options": ["Potassium", "Krypton", "Kryptonite", "Krypton"],
    "correctAnswer": 0,
    "explanation": "K is the chemical symbol for Potassium, derived from the Latin word 'kalium'."
  },
  {
    "id": 17,
    "question": "What is the chemical formula for methane?",
    "options": ["CH4", "C2H6", "CO2", "C2H5OH"],
    "correctAnswer": 0,
    "explanation": "Methane, the simplest hydrocarbon, has the chemical formula CH4."
  },
  {
    "id": 18,
    "question": "Which of the following is a halogen?",
    "options": ["Sodium", "Calcium", "Fluorine", "Helium"],
    "correctAnswer": 2,
    "explanation": "Fluorine is a halogen (Group 17 element), along with chlorine, bromine, iodine, and astatine."
  },
  {
    "id": 19,
    "question": "What is the SI unit for amount of substance?",
    "options": ["Gram", "Mole", "Kilogram", "Liter"],
    "correctAnswer": 1,
    "explanation": "The mole (mol) is the SI unit for amount of substance."
  },
  {
    "id": 20,
    "question": "What type of reaction is represented by A + B → AB?",
    "options": ["Decomposition", "Single displacement", "Synthesis", "Combustion"],
    "correctAnswer": 2,
    "explanation": "A synthesis (or combination) reaction occurs when two or more substances combine to form a single product."
  },
  {
    "id": 21,
    "question": "Which metal is liquid at room temperature?",
    "options": ["Iron", "Aluminum", "Mercury", "Copper"],
    "correctAnswer": 2,
    "explanation": "Mercury is the only metal that is liquid at standard room temperature and pressure."
  },
  {
    "id": 22,
    "question": "What is the chemical name for H2SO4?",
    "options": ["Hydrochloric acid", "Nitric acid", "Sulfuric acid", "Acetic acid"],
    "correctAnswer": 2,
    "explanation": "H2SO4 is sulfuric acid, a strong mineral acid."
  },
  {
    "id": 23,
    "question": "Which particle determines the identity of an element?",
    "options": ["Electron", "Neutron", "Proton", "Photon"],
    "correctAnswer": 2,
    "explanation": "The number of protons (atomic number) determines the identity of an element."
  },
  {
    "id": 24,
    "question": "What is the chemical formula for carbon dioxide?",
    "options": ["CO", "CO2", "C2O", "C2O4"],
    "correctAnswer": 1,
    "explanation": "Carbon dioxide consists of one carbon atom bonded to two oxygen atoms, giving the formula CO2."
  },
  {
    "id": 25,
    "question": "What is the process of a liquid changing into a gas at the surface called?",
    "options": ["Boiling", "Evaporation", "Condensation", "Sublimation"],
    "correctAnswer": 1,
    "explanation": "Evaporation is the process where a liquid changes into a gas at its surface below its boiling point."
  },
  {
    "id": 26,
    "question": "Which of the following is a strong base?",
    "options": ["NaOH", "NH3", "CH3COOH", "H2CO3"],
    "correctAnswer": 0,
    "explanation": "NaOH (sodium hydroxide) is a strong base that completely dissociates in water."
  },
  {
    "id": 27,
    "question": "What is the chemical symbol for silver?",
    "options": ["Si", "Ag", "Au", "Sr"],
    "correctAnswer": 1,
    "explanation": "The chemical symbol for silver is Ag, derived from the Latin word 'argentum'."
  },
  {
    "id": 28,
    "question": "What is the pH of a strong acid?",
    "options": ["Close to 0", "7", "Close to 14", "8"],
    "correctAnswer": 0,
    "explanation": "Strong acids have pH values close to 0, indicating high hydrogen ion concentration."
  },
  {
    "id": 29,
    "question": "Which element has the symbol 'Na'?",
    "options": ["Nitrogen", "Neon", "Sodium", "Nickel"],
    "correctAnswer": 2,
    "explanation": "Na is the chemical symbol for Sodium, derived from the Latin word 'natrium'."
  },
  {
    "id": 30,
    "question": "What is the chemical formula for ammonia?",
    "options": ["NH4", "N2H4", "NH3", "N2H2"],
    "correctAnswer": 2,
    "explanation": "Ammonia has the chemical formula NH3, consisting of one nitrogen and three hydrogen atoms."
  },
  {
    "id": 31,
    "question": "Which of the following is an alkali metal?",
    "options": ["Calcium", "Magnesium", "Potassium", "Aluminum"],
    "correctAnswer": 2,
    "explanation": "Potassium is an alkali metal (Group 1), along with lithium, sodium, rubidium, cesium, and francium."
  },
  {
    "id": 32,
    "question": "What is the name for the electrons in the outermost shell of an atom?",
    "options": ["Core electrons", "Valence electrons", "Free electrons", "Bound electrons"],
    "correctAnswer": 1,
    "explanation": "Valence electrons are the electrons in the outermost shell of an atom that participate in chemical bonding."
  },
  {
    "id": 33,
    "question": "What type of bond is formed by the transfer of electrons?",
    "options": ["Covalent bond", "Metallic bond", "Ionic bond", "Hydrogen bond"],
    "correctAnswer": 2,
    "explanation": "An ionic bond is formed when electrons are completely transferred from one atom to another."
  },
  {
    "id": 34,
    "question": "What is the chemical formula for sulfuric acid?",
    "options": ["HCl", "HNO3", "H2SO4", "CH3COOH"],
    "correctAnswer": 2,
    "explanation": "Sulfuric acid has the chemical formula H2SO4."
  },
  {
    "id": 35,
    "question": "Which gas is known as 'laughing gas'?",
    "options": ["Nitrogen", "Nitrous oxide", "Nitric oxide", "Nitrogen dioxide"],
    "correctAnswer": 1,
    "explanation": "Nitrous oxide (N2O) is known as laughing gas and is used as an anesthetic."
  },
  {
    "id": 36,
    "question": "What is the atomic number of oxygen?",
    "options": ["6", "7", "8", "16"],
    "correctAnswer": 2,
    "explanation": "Oxygen has atomic number 8, meaning it has 8 protons in its nucleus."
  },
  {
    "id": 37,
    "question": "Which of the following is a diatomic element?",
    "options": ["Helium", "Neon", "Oxygen", "Argon"],
    "correctAnswer": 2,
    "explanation": "Oxygen naturally exists as a diatomic molecule (O2), while helium, neon, and argon are monatomic."
  },
  {
    "id": 38,
    "question": "What is the chemical formula for ethanol?",
    "options": ["CH3OH", "C2H5OH", "C3H7OH", "C4H9OH"],
    "correctAnswer": 1,
    "explanation": "Ethanol, or drinking alcohol, has the chemical formula C2H5OH."
  },
  {
    "id": 39,
    "question": "What is the process of a gas changing directly into a solid called?",
    "options": ["Melting", "Evaporation", "Sublimation", "Deposition"],
    "correctAnswer": 3,
    "explanation": "Deposition is the process where a gas changes directly into a solid without passing through the liquid phase, like frost formation."
  },
  {
    "id": 40,
    "question": "Which element has the highest electronegativity?",
    "options": ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"],
    "correctAnswer": 2,
    "explanation": "Fluorine is the most electronegative element on the periodic table."
  },
  {
    "id": 41,
    "question": "What is the chemical symbol for lead?",
    "options": ["Ld", "Pb", "Pl", "Le"],
    "correctAnswer": 1,
    "explanation": "The chemical symbol for lead is Pb, derived from the Latin word 'plumbum'."
  },
  {
    "id": 42,
    "question": "What is the name for a solution that resists changes in pH?",
    "options": ["Acid", "Base", "Buffer", "Salt"],
    "correctAnswer": 2,
    "explanation": "A buffer solution resists changes in pH when small amounts of acid or base are added."
  },
  {
    "id": 43,
    "question": "Which of the following is an example of a chemical change?",
    "options": ["Melting ice", "Dissolving sugar", "Rusting iron", "Cutting paper"],
    "correctAnswer": 2,
    "explanation": "Rusting iron is a chemical change because it produces a new substance (iron oxide), while the others are physical changes."
  },
  {
    "id": 44,
    "question": "What is the chemical formula for nitric acid?",
    "options": ["HCl", "HNO3", "H2SO4", "H3PO4"],
    "correctAnswer": 1,
    "explanation": "Nitric acid has the chemical formula HNO3."
  },
  {
    "id": 45,
    "question": "What is the atomic number of carbon?",
    "options": ["4", "6", "12", "14"],
    "correctAnswer": 1,
    "explanation": "Carbon has atomic number 6, with 6 protons in its nucleus."
  },
  {
    "id": 46,
    "question": "Which of the following is NOT a state of matter?",
    "options": ["Solid", "Liquid", "Gas", "Energy"],
    "correctAnswer": 3,
    "explanation": "Energy is not a state of matter; the four fundamental states are solid, liquid, gas, and plasma."
  },
  {
    "id": 47,
    "question": "What is the chemical symbol for potassium?",
    "options": ["P", "Po", "K", "Pt"],
    "correctAnswer": 2,
    "explanation": "The chemical symbol for potassium is K, derived from the Latin word 'kalium'."
  },
  {
    "id": 48,
    "question": "What is the process of separating mixtures based on differences in boiling points?",
    "options": ["Filtration", "Chromatography", "Distillation", "Decantation"],
    "correctAnswer": 2,
    "explanation": "Distillation separates mixtures based on differences in boiling points of the components."
  },
  {
    "id": 49,
    "question": "Which element is essential for all organic compounds?",
    "options": ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"],
    "correctAnswer": 2,
    "explanation": "Carbon is the essential element in all organic compounds due to its ability to form stable bonds with many elements."
  },
  {
    "id": 50,
    "question": "What is the pH of a strong base?",
    "options": ["Close to 0", "7", "Close to 14", "5"],
    "correctAnswer": 2,
    "explanation": "Strong bases have pH values close to 14, indicating high hydroxide ion concentration."
  },
  {
    "id": 51,
    "question": "What is the chemical name for baking soda?",
    "options": ["Sodium carbonate", "Sodium bicarbonate", "Sodium hydroxide", "Sodium chloride"],
    "correctAnswer": 1,
    "explanation": "Baking soda is sodium bicarbonate with the chemical formula NaHCO3."
  },
  {
    "id": 52,
    "question": "Which subatomic particle has no charge?",
    "options": ["Proton", "Electron", "Neutron", "Positron"],
    "correctAnswer": 2,
    "explanation": "Neutrons are neutral subatomic particles found in the nucleus of atoms."
  },
  {
    "id": 53,
    "question": "What is the chemical formula for hydrochloric acid?",
    "options": ["HCl", "HNO3", "H2SO4", "CH3COOH"],
    "correctAnswer": 0,
    "explanation": "Hydrochloric acid has the chemical formula HCl."
  },
  {
    "id": 54,
    "question": "Which of the following is a transition metal?",
    "options": ["Sodium", "Calcium", "Iron", "Aluminum"],
    "correctAnswer": 2,
    "explanation": "Iron is a transition metal found in the d-block of the periodic table."
  },
  {
    "id": 55,
    "question": "What is the law of conservation of mass in chemical reactions?",
    "options": ["Mass can be created", "Mass can be destroyed", "Mass is neither created nor destroyed", "Mass is converted to energy"],
    "correctAnswer": 2,
    "explanation": "The law of conservation of mass states that mass is neither created nor destroyed in chemical reactions, only rearranged."
  }
   ,
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
  id: 1, 
  question: "What is the basic unit of life?", 
  options: ["Atom", "Molecule", "Cell", "Tissue"], 
  correctAnswer: 2, 
  explanation: "The cell is the basic structural and functional unit of life." 
},
{ 
  id: 2, 
  question: "Which organelle is known as the powerhouse of the cell?", 
  options: ["Nucleus", "Ribosome", "Mitochondrion", "Chloroplast"], 
  correctAnswer: 2, 
  explanation: "The mitochondrion produces ATP through cellular respiration." 
},
{ 
  id: 3, 
  question: "What molecule carries genetic information?", 
  options: ["RNA", "Protein", "DNA", "Lipid"], 
  correctAnswer: 2, 
  explanation: "DNA stores and transmits genetic information in living organisms." 
},
{ 
  id: 4, 
  question: "Photosynthesis occurs in which organelle?", 
  options: ["Mitochondria", "Chloroplast", "Golgi apparatus", "Lysosome"], 
  correctAnswer: 1, 
  explanation: "Chloroplasts contain chlorophyll and are the site of photosynthesis." 
},
{ 
  id: 5, 
  question: "Which kingdom includes bacteria?", 
  options: ["Plantae", "Animalia", "Fungi", "Monera"], 
  correctAnswer: 3, 
  explanation: "Bacteria belong to the kingdom Monera in the five-kingdom classification system." 
},
{ 
  id: 6, 
  question: "What is the process by which cells divide to form two identical cells?", 
  options: ["Meiosis", "Mitosis", "Fertilization", "Binary fission"], 
  correctAnswer: 1, 
  explanation: "Mitosis produces two genetically identical daughter cells." 
},
{ 
  id: 7, 
  question: "Which blood cells help fight infection?", 
  options: ["Red blood cells", "White blood cells", "Platelets", "Plasma cells"], 
  correctAnswer: 1, 
  explanation: "White blood cells are responsible for immune defense." 
},
{ 
  id: 8, 
  question: "What is the main function of red blood cells?", 
  options: ["Fight infection", "Clot blood", "Carry oxygen", "Produce hormones"], 
  correctAnswer: 2, 
  explanation: "Red blood cells transport oxygen using hemoglobin." 
},
{ 
  id: 9, 
  question: "Which biomolecule is the main source of energy for cells?", 
  options: ["Protein", "Lipid", "Carbohydrate", "Vitamin"], 
  correctAnswer: 2, 
  explanation: "Carbohydrates are the primary energy source for cells." 
},
{ 
  id: 10, 
  question: "What is the process by which plants lose water vapor?", 
  options: ["Respiration", "Transpiration", "Digestion", "Diffusion"], 
  correctAnswer: 1, 
  explanation: "Transpiration is the evaporation of water from plant leaves." 
},
{ 
  id: 11, 
  question: "Which part of the plant conducts photosynthesis?", 
  options: ["Root", "Stem", "Leaf", "Flower"], 
  correctAnswer: 2, 
  explanation: "Leaves contain chloroplasts where photosynthesis occurs." 
},
{ 
  id: 12, 
  question: "What is homeostasis?", 
  options: ["Cell division", "Internal balance maintenance", "Energy production", "Growth process"], 
  correctAnswer: 1, 
  explanation: "Homeostasis is the maintenance of stable internal conditions." 
},
{ 
  id: 13, 
  question: "Which process produces gametes?", 
  options: ["Mitosis", "Meiosis", "Photosynthesis", "Respiration"], 
  correctAnswer: 1, 
  explanation: "Meiosis produces haploid gametes for sexual reproduction." 
},
{ 
  id: 14, 
  question: "What is the main function of the nucleus?", 
  options: ["Energy production", "Protein synthesis", "Store genetic material", "Transport substances"], 
  correctAnswer: 2, 
  explanation: "The nucleus contains DNA and controls cell activities." 
},
{ 
  id: 15, 
  question: "Which system controls body activities using hormones?", 
  options: ["Nervous system", "Digestive system", "Endocrine system", "Respiratory system"], 
  correctAnswer: 2, 
  explanation: "The endocrine system regulates body functions through hormones." 
},
{ 
  id: 16, 
  question: "Which type of organism makes its own food?", 
  options: ["Heterotroph", "Autotroph", "Parasite", "Consumer"], 
  correctAnswer: 1, 
  explanation: "Autotrophs produce their own food through photosynthesis or chemosynthesis." 
},
{ 
  id: 17, 
  question: "What is the function of ribosomes?", 
  options: ["Store DNA", "Produce energy", "Synthesize proteins", "Digest waste"], 
  correctAnswer: 2, 
  explanation: "Ribosomes are responsible for protein synthesis." 
},
{ 
  id: 18, 
  question: "Which macromolecule is made of amino acids?", 
  options: ["Carbohydrate", "Protein", "Lipid", "Nucleic acid"], 
  correctAnswer: 1, 
  explanation: "Proteins are polymers made of amino acids." 
},
{ 
  id: 19, 
  question: "What is an ecosystem?", 
  options: ["A single species", "A group of cells", "Living and nonliving interactions", "A population only"], 
  correctAnswer: 2, 
  explanation: "An ecosystem includes interactions between organisms and their physical environment." 
},
{ 
  id: 20, 
  question: "Which organ pumps blood throughout the body?", 
  options: ["Lungs", "Brain", "Heart", "Liver"], 
  correctAnswer: 2, 
  explanation: "The heart pumps blood through the circulatory system." 
},
{ 
  id: 21, 
  question: "What is the process of converting glucose into energy?", 
  options: ["Photosynthesis", "Fermentation", "Cellular respiration", "Transpiration"], 
  correctAnswer: 2, 
  explanation: "Cellular respiration breaks down glucose to produce ATP." 
},
{ 
  id: 22, 
  question: "Which structure controls what enters and leaves the cell?", 
  options: ["Cell wall", "Cell membrane", "Nucleus", "Cytoplasm"], 
  correctAnswer: 1, 
  explanation: "The cell membrane regulates movement of substances in and out of the cell." 
},
{ 
  id: 23, 
  question: "Which level of organization is above tissue?", 
  options: ["Cell", "Organ", "Organ system", "Organism"], 
  correctAnswer: 1, 
  explanation: "An organ is made of different tissues working together." 
},
{ 
  id: 24, 
  question: "Which gas do plants absorb for photosynthesis?", 
  options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], 
  correctAnswer: 1, 
  explanation: "Plants absorb carbon dioxide to produce glucose during photosynthesis." 
},
{ 
  id: 25, 
  question: "What is natural selection?", 
  options: ["Random mutation", "Survival of the fittest", "Artificial breeding", "Cell reproduction"], 
  correctAnswer: 1, 
  explanation: "Natural selection is the process where organisms better adapted to their environment survive and reproduce." 
}

      ,
      {
        id: 26,
        question: "What carries genetic information from DNA to ribosomes?",
        options: ["tRNA", "mRNA", "rRNA", "DNA polymerase"],
        correctAnswer: 1,
        explanation: "mRNA (messenger RNA) carries genetic information from DNA to ribosomes"
      },
      {
        id: 27,
        question: "What is the function of the cell membrane?",
        options: ["Protein synthesis", "Control what enters/exits cell", "Store genetic material", "Produce energy"],
        correctAnswer: 1,
        explanation: "The cell membrane controls what substances enter and leave the cell"
      },
      {
        id: 28,
        question: "What is mitosis?",
        options: ["Cell death", "Cell division producing identical cells", "Cell fusion", "Cell differentiation"],
        correctAnswer: 1,
        explanation: "Mitosis is cell division that produces two identical daughter cells"
      },
      {
        id: 29,
        question: "Which blood cells fight infection?",
        options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        correctAnswer: 1,
        explanation: "White blood cells (leukocytes) are part of the immune system and fight infections"
      },
      {
        id: 30,
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Brain", "Skin", "Heart"],
        correctAnswer: 2,
        explanation: "The skin is the largest organ, covering the entire body surface"
      },
    ],
    final: 
   [
  {
    "id": 1,
    "question": "Which of the following is NOT a part of the modern cell theory?",
    "options": ["All living organisms are composed of cells and cell products", "Most cells come from the division of preexisting cells", "Cells can spontaneously generate from non-living matter", "The cell is the simplest structural and functional unit of life"],
    "correctAnswer": 2,
    "explanation": "The modern cell theory states that all living things are composed of cells, cells are the basic units of structure and function, and all cells come from pre-existing cells. Spontaneous generation is not part of cell theory. [citation:9]"
  },
  {
    "id": 2,
    "question": "What is the primary function of the rough endoplasmic reticulum?",
    "options": ["Cellular respiration", "Lipid synthesis", "Translation of some proteins", "Photosynthesis"],
    "correctAnswer": 2,
    "explanation": "The rough endoplasmic reticulum is involved in protein synthesis and translation of some proteins due to the ribosomes attached to its surface. [citation:4]"
  },
  {
    "id": 3,
    "question": "Which organelle is the major site of ATP production in the cell?",
    "options": ["Golgi complex", "Lysosome", "Mitochondrion", "Endoplasmic reticulum"],
    "correctAnswer": 2,
    "explanation": "Mitochondria are known as the powerhouses of the cell because they produce most of the cell's ATP through cellular respiration. [citation:9]"
  },
  {
    "id": 4,
    "question": "Which of the following best describes the flow of energy through an ecosystem?",
    "options": ["Chemical energy enters, is converted, and is washed out", "Sunlight energy enters, is converted to chemical energy, and is released as heat", "Heat enters, is converted to chemical energy, and is released as light", "Sunlight energy is permanently stored as fossil fuels"],
    "correctAnswer": 1,
    "explanation": "Sunlight energy enters ecosystems, is converted to chemical energy by producers through photosynthesis, and eventually leaves the ecosystem as heat after being used by organisms. [citation:4]"
  },
  {
    "id": 5,
    "question": "What is the function of the style in a flower?",
    "options": ["To produce pollen", "To receive pollen", "To force pollen tubes to race to fertilize the egg", "To produce fruit"],
    "correctAnswer": 2,
    "explanation": "The style's function is to force pollen tubes and sperm cells to 'race' to fertilize the egg, ensuring the most vigorous pollen tube succeeds in fertilization. [citation:5]"
  },
  {
    "id": 6,
    "question": "In cellular respiration, which of the following occurs?",
    "options": ["ATP is converted to ADP", "Insulin is converted to glucagon", "Glucose, oxygen, ADP and Pi are converted to carbon dioxide, water and ATP", "Carbon dioxide and energy are converted to glucose"],
    "correctAnswer": 2,
    "explanation": "Cellular respiration involves the breakdown of glucose and oxygen to produce carbon dioxide, water, and ATP. This process converts energy stored in glucose into usable cellular energy (ATP). [citation:4]"
  },
  {
    "id": 7,
    "question": "Which of the following is found only in chordates?",
    "options": ["Bilateral symmetry", "A coelom", "Gill slits in pharynx and notochord", "Endoskeleton"],
    "correctAnswer": 2,
    "explanation": "Chordates are characterized by having pharyngeal gill slits, a notochord, a dorsal hollow nerve cord, and a post-anal tail at some stage of their development. These features are unique to chordates. [citation:6]"
  },
  {
    "id": 8,
    "question": "What is the function of the capsule in some bacteria?",
    "options": ["DNA replication", "Protein synthesis", "Protection from phagocytosis by host cells", "Movement"],
    "correctAnswer": 2,
    "explanation": "The capsule is a slippery outer covering in some bacteria that protects them from phagocytosis by host immune cells, contributing to their pathogenicity. [citation:10]"
  },
  {
    "id": 9,
    "question": "What happens during oxidative phosphorylation?",
    "options": ["Glucose is oxidized to pyruvate", "ATP is broken down into ADP", "Oxygen carries electrons through ATP synthase", "The energy in a proton gradient makes ATP by chemiosmosis"],
    "correctAnswer": 3,
    "explanation": "During oxidative phosphorylation, the energy stored in a proton (H+) gradient across the inner mitochondrial membrane is used to make ATP through chemiosmosis. [citation:4]"
  },
  {
    "id": 10,
    "question": "Which of the following is NOT a function of roots?",
    "options": ["Reproduction", "Storage", "Support", "Water acquisition"],
    "correctAnswer": 0,
    "explanation": "While roots primarily function in anchorage, water and nutrient absorption, and storage, reproduction is typically not a primary function of roots. Some plants can reproduce vegetatively from roots, but this is not a universal root function. [citation:5]"
  },
  {
    "id": 11,
    "question": "The X and Y chromosomes are called:",
    "options": ["Autosomes", "Sex chromosomes", "Homologous chromosomes", " sister chromatids"],
    "correctAnswer": 1,
    "explanation": "The X and Y chromosomes are sex chromosomes that determine the sex of an individual. In humans, females have XX and males have XY. [citation:1]"
  },
  {
    "id": 12,
    "question": "What is the role of mycorrhizae?",
    "options": ["Photosynthesis", "Nitrogen fixation", "Fungi associated with plant roots", "Pathogen defense"],
    "correctAnswer": 2,
    "explanation": "Mycorrhizae are symbiotic associations between fungi and plant roots that help plants absorb water and minerals more efficiently. [citation:5]"
  },
  {
    "id": 13,
    "question": "During DNA replication, if a portion of the original strand is CCTAGCT, what will the new strand be?",
    "options": ["GGATCGA", "CCTAGCT", "AAGCTAG", "TTAGCTA"],
    "correctAnswer": 0,
    "explanation": "DNA replication follows complementary base pairing: C pairs with G, T pairs with A. So CCTAGCT would pair with GGATCGA. [citation:1]"
  },
  {
    "id": 14,
    "question": "Which of the following happens LAST during mitosis?",
    "options": ["Microtubules emerge from centrosomes", "Tetrads form", "The sister chromatids separate", "Sister chromatids align on the metaphase plate"],
    "correctAnswer": 2,
    "explanation": "During mitosis, sister chromatids separate during anaphase, which occurs after metaphase (alignment) and before telophase. [citation:4]"
  },
  {
    "id": 15,
    "question": "What is the common name of Drosophila melanogaster?",
    "options": ["Zebrafish", "Chlamydia", "Roundworm", "Fruit fly"],
    "correctAnswer": 3,
    "explanation": "Drosophila melanogaster is the scientific name for the common fruit fly, a model organism widely used in genetic research. [citation:8]"
  },
  {
    "id": 16,
    "question": "In a biological system being maintained in homeostasis, which mechanism is used to bring parameters back into range?",
    "options": ["Temperature", "Diabetes", "Negative feedback", "Positive feedback"],
    "correctAnswer": 2,
    "explanation": "Negative feedback mechanisms work to maintain homeostasis by counteracting changes and bringing conditions back to their set points. [citation:4]"
  },
  {
    "id": 17,
    "question": "Plants contain starches and cellulose. The carbon in starches comes from:",
    "options": ["Cellulose from the dirt", "Minerals from the dirt", "Carbon dioxide", "Pesticides"],
    "correctAnswer": 2,
    "explanation": "Plants fix carbon from atmospheric carbon dioxide during photosynthesis and use it to build carbohydrates like starch and cellulose. [citation:4]"
  },
  {
    "id": 18,
    "question": "Which of the following is a prokaryotic cell example?",
    "options": ["Plant cell", "Animal cell", "Bacteria", "Fungi"],
    "correctAnswer": 2,
    "explanation": "Bacteria are prokaryotic cells, meaning they lack a membrane-bound nucleus and organelles. [citation:1]"
  },
  {
    "id": 19,
    "question": "What is the function of the Casparian strip in plants?",
    "options": ["Water absorption", "Gas exchange", "Forces water to enter the symplast", "Photosynthesis"],
    "correctAnswer": 2,
    "explanation": "The Casparian strip in the endodermis forces water and dissolved minerals to pass through the symplast (through living cytoplasm) rather than through cell walls, allowing selective absorption. [citation:5]"
  },
  {
    "id": 20,
    "question": "Which of the following is NOT found in RNA?",
    "options": ["Adenine", "Guanine", "Thymine", "Uracil"],
    "correctAnswer": 2,
    "explanation": "RNA contains adenine, guanine, cytosine, and uracil. Thymine is found in DNA instead of uracil. [citation:1]"
  },
  {
    "id": 21,
    "question": "The breakdown of glucose to pyruvate is called:",
    "options": ["Krebs cycle", "Electron transport chain", "Glycolysis", "Fermentation"],
    "correctAnswer": 2,
    "explanation": "Glycolysis is the first step in cellular respiration where glucose is broken down into pyruvate, producing a small amount of ATP. [citation:10]"
  },
  {
    "id": 22,
    "question": "In humans, gametes contain:",
    "options": ["46 chromosomes", "23 chromosomes", "The diploid number", "Pairs of homologous chromosomes"],
    "correctAnswer": 1,
    "explanation": "Human gametes (sperm and egg cells) are haploid and contain 23 chromosomes, half the diploid number found in somatic cells. [citation:1]"
  },
  {
    "id": 23,
    "question": "When yeast cells exhaust the oxygen supply in their growth medium, what is most likely to occur?",
    "options": ["Lactic acid will accumulate", "Fermentation will regenerate NAD+, and glycolysis will continue", "ATP production will cease", "Carbon dioxide production will stop"],
    "correctAnswer": 1,
    "explanation": "In the absence of oxygen, yeast undergo fermentation, converting pyruvate to ethanol and regenerating NAD+ so glycolysis can continue producing small amounts of ATP. [citation:3]"
  },
  {
    "id": 24,
    "question": "What structure allows water and hydrophilic solutions to pass through the plasma membrane?",
    "options": ["Channel proteins", "Glycoproteins", "Lipoproteins", "Cholesterol"],
    "correctAnswer": 0,
    "explanation": "Channel proteins form pores in the membrane that allow water and hydrophilic substances to pass through via facilitated diffusion. [citation:9]"
  },
  {
    "id": 25,
    "question": "Which of the following is a characteristic feature of angiosperms?",
    "options": ["Naked seeds", "Flowers and fruits", "Cones", "Vascular tissue only"],
    "correctAnswer": 1,
    "explanation": "Angiosperms (flowering plants) are characterized by producing flowers and fruits, which are unique to this group of plants. [citation:5]"
  },
  {
    "id": 26,
    "question": "The genetic material that provides instructions for making proteins is:",
    "options": ["RNA", "DNA", "Lipids", "Carbohydrates"],
    "correctAnswer": 1,
    "explanation": "DNA (deoxyribonucleic acid) contains the genetic instructions used in the development and functioning of all living organisms, including protein synthesis. [citation:1]"
  },
  {
    "id": 27,
    "question": "When flagella are distributed all around a bacterial cell, the arrangement is called:",
    "options": ["Polar", "Random", "Peritrichous", "Encapsulated"],
    "correctAnswer": 2,
    "explanation": "Peritrichous refers to flagella distributed all around the bacterial cell surface, while polar flagella are located at one or both ends. [citation:10]"
  },
  {
    "id": 28,
    "question": "What is the function of stomata in plants?",
    "options": ["Absorb water", "Gas exchange and transpiration", "Photosynthesis", "Reproduction"],
    "correctAnswer": 1,
    "explanation": "Stomata are pores in plant leaves that allow for gas exchange (CO2 in, O2 out) and water vapor release during transpiration. [citation:5]"
  },
  {
    "id": 29,
    "question": "Which of the following pairs contains unrelated items based on complementary base pairing?",
    "options": ["A-T", "G-C", "A-U", "T-G"],
    "correctAnswer": 3,
    "explanation": "In DNA, A pairs with T and G pairs with C. In RNA, A pairs with U. T-G is not a valid complementary base pair. [citation:1]"
  },
  {
    "id": 30,
    "question": "Bacterial leaf blight of rice is caused by a species of:",
    "options": ["Envinia", "Xanthomonas", "Alternaria", "Pseudomonas"],
    "correctAnswer": 1,
    "explanation": "Xanthomonas species are known to cause bacterial leaf blight in rice, an important agricultural disease. [citation:8]"
  },
  {
    "id": 31,
    "question": "Which of the following is NOT a type of cell junction?",
    "options": ["Desmosome", "Tight junction", "Ribosomal junction", "Gap junction"],
    "correctAnswer": 2,
    "explanation": "Ribosomal junction is not a type of cell junction. Cell junctions include desmosomes, tight junctions, and gap junctions that connect cells together. [citation:9]"
  },
  {
    "id": 32,
    "question": "In an angiosperm, what is the female gametophyte?",
    "options": ["Anther", "Ovule", "Ovary", "Embryo sac"],
    "correctAnswer": 3,
    "explanation": "The female gametophyte in angiosperms is the embryo sac, which develops within the ovule and contains the egg cell. [citation:5]"
  },
  {
    "id": 33,
    "question": "Which of the following is a symbiotic relationship where one species benefits and the other is not affected?",
    "options": ["Parasitism", "Mutualism", "Commensalism", "Predation"],
    "correctAnswer": 2,
    "explanation": "Commensalism is a symbiotic relationship where one organism benefits while the other is neither helped nor harmed. [citation:8]"
  },
  {
    "id": 34,
    "question": "What is the function of tRNA during protein synthesis?",
    "options": ["Carries genetic information from DNA", "Forms the structure of ribosomes", "Brings amino acids to the ribosome", "Catalyzes peptide bond formation"],
    "correctAnswer": 2,
    "explanation": "Transfer RNA (tRNA) molecules bring specific amino acids to the ribosome during translation, matching them to the codons on mRNA. [citation:1]"
  },
  {
    "id": 35,
    "question": "When a freshwater protozoan is placed in marine water, what happens to its contractile vacuole?",
    "options": ["It increases in size", "The number increases", "It disappears", "It remains the same"],
    "correctAnswer": 2,
    "explanation": "In marine water, which is hypertonic compared to freshwater, water tends to leave the cell, so the contractile vacuole becomes less active or disappears. [citation:2]"
  },
  {
    "id": 36,
    "question": "What is the role of the Calvin cycle in photosynthesis?",
    "options": ["Light absorption", "Electron transport", "Carbon fixation", "Water splitting"],
    "correctAnswer": 2,
    "explanation": "The Calvin cycle (light-independent reactions) fixes carbon dioxide into organic molecules like glucose using ATP and NADPH from the light reactions."
  },
  {
    "id": 37,
    "question": "Which kingdom contains only microorganisms?",
    "options": ["Plantae and Animalia", "Monera and Protista", "Fungi only", "All kingdoms"],
    "correctAnswer": 1,
    "explanation": "Monera (bacteria) and Protista (protozoa and algae) are kingdoms that consist primarily or entirely of microscopic organisms. [citation:8]"
  },
  {
    "id": 38,
    "question": "What is the main difference between prokaryotic and eukaryotic cells?",
    "options": ["Prokaryotes have no DNA", "Eukaryotes lack ribosomes", "Prokaryotes lack membrane-bound organelles", "Eukaryotes are always smaller"],
    "correctAnswer": 2,
    "explanation": "Prokaryotic cells lack membrane-bound organelles including a nucleus, while eukaryotic cells have membrane-bound organelles and a true nucleus. [citation:10]"
  },
  {
    "id": 39,
    "question": "During which phase of mitosis do chromosomes align along the equator of the cell?",
    "options": ["Prophase", "Metaphase", "Anaphase", "Telophase"],
    "correctAnswer": 1,
    "explanation": "During metaphase, chromosomes line up along the metaphase plate (equator) of the cell before separating. [citation:1]"
  },
  {
    "id": 40,
    "question": "Which of the following is an example of a vestigial structure in humans?",
    "options": ["Heart", "Brain", "Appendix", "Lungs"],
    "correctAnswer": 2,
    "explanation": "The appendix is considered a vestigial structure in humans—a reduced structure that had a function in ancestors but has lost most or all of its original function. [citation:7]"
  },
  {
    "id": 41,
    "question": "What is the function of the Golgi apparatus?",
    "options": ["Energy production", "Protein synthesis", "Modifying, sorting, and packaging proteins", "DNA replication"],
    "correctAnswer": 2,
    "explanation": "The Golgi apparatus modifies, sorts, and packages proteins for secretion or delivery to other organelles. [citation:9]"
  },
  {
    "id": 42,
    "question": "Which of the following is NOT a characteristic of all living things?",
    "options": ["Growth and development", "Response to stimuli", "Ability to photosynthesize", "Reproduction"],
    "correctAnswer": 2,
    "explanation": "Photosynthesis is a characteristic of plants and some protists, but not all living things. Animals, fungi, and many bacteria do not photosynthesize."
  },
  {
    "id": 43,
    "question": "What is the role of decomposers in an ecosystem?",
    "options": ["Produce oxygen", "Fix nitrogen", "Break down dead organic matter", "Consume living organisms"],
    "correctAnswer": 2,
    "explanation": "Decomposers (like bacteria and fungi) break down dead organic matter, releasing nutrients back into the ecosystem for reuse by producers. [citation:2]"
  },
  {
    "id": 44,
    "question": "Which of the following is a greenhouse gas produced by cattle digestion?",
    "options": ["Oxygen", "Nitrogen", "Methane", "Hydrogen"],
    "correctAnswer": 2,
    "explanation": "Methane is produced by methanogenic bacteria in the digestive systems of ruminants like cattle and is a potent greenhouse gas. [citation:8]"
  },
  {
    "id": 45,
    "question": "What is the function of insulin in the human body?",
    "options": ["Increase blood glucose", "Decrease blood glucose", "Digest proteins", "Transport oxygen"],
    "correctAnswer": 1,
    "explanation": "Insulin, produced by the pancreas, lowers blood glucose levels by promoting glucose uptake by cells and storage as glycogen. [citation:8]"
  },
  {
    "id": 46,
    "question": "Which of the following correctly represents the Central Dogma of molecular biology?",
    "options": ["Protein → RNA → DNA", "DNA → Protein → RNA", "DNA → RNA → Protein", "RNA → DNA → Protein"],
    "correctAnswer": 2,
    "explanation": "The Central Dogma describes the flow of genetic information: DNA is transcribed into RNA, which is then translated into protein. [citation:4]"
  },
  {
    "id": 47,
    "question": "What is the primary source of energy for most ecosystems?",
    "options": ["Geothermal heat", "The sun", "Chemical reactions", "Tidal energy"],
    "correctAnswer": 1,
    "explanation": "The sun is the primary energy source for most ecosystems, providing energy captured by producers through photosynthesis. [citation:1]"
  },
  {
    "id": 48,
    "question": "In which organelle does photosynthesis occur?",
    "options": ["Mitochondria", "Nucleus", "Chloroplast", "Ribosome"],
    "correctAnswer": 2,
    "explanation": "Photosynthesis occurs in chloroplasts, which contain chlorophyll and other pigments that capture light energy. [citation:1]"
  },
  {
    "id": 49,
    "question": "What happens during crossing over?",
    "options": ["Chromosomes duplicate", "Sister chromatids separate", "Homologous chromosomes exchange genetic material", "The nuclear envelope reforms"],
    "correctAnswer": 2,
    "explanation": "Crossing over occurs during prophase I of meiosis when homologous chromosomes exchange segments, increasing genetic diversity. [citation:1]"
  },
  {
    "id": 50,
    "question": "Which of the following is an example of active transport?",
    "options": ["Osmosis", "Diffusion", "Sodium-potassium pump", "Facilitated diffusion"],
    "correctAnswer": 2,
    "explanation": "The sodium-potassium pump requires ATP to move ions against their concentration gradient, making it an active transport process. [citation:9]"
  },
  {
    "id": 51,
    "question": "Which of the following is NOT a characteristic of water that makes it essential for life?",
    "options": ["High specific heat", "Cohesion and adhesion", "Ability to dissolve many substances", "Low boiling point"],
    "correctAnswer": 3,
    "explanation": "Water actually has a relatively high boiling point due to hydrogen bonding, which is important for life. A low boiling point would make water evaporate too easily."
  },
  {
    "id": 52,
    "question": "What is the function of a bacterium's endospore?",
    "options": ["Photosynthesis", "Movement", "Survival in harsh conditions", "Reproduction"],
    "correctAnswer": 2,
    "explanation": "Endospores are dormant structures formed by some bacteria to survive extreme conditions like heat, drought, and chemicals. [citation:2]"
  },
  {
    "id": 53,
    "question": "In a food chain, which trophic level contains the most energy?",
    "options": ["Primary consumers", "Secondary consumers", "Producers", "Tertiary consumers"],
    "correctAnswer": 2,
    "explanation": "Producers (autotrophs) contain the most energy in a food chain because they directly capture energy from the sun. Energy decreases at each successive trophic level."
  },
  {
    "id": 54,
    "question": "What is the role of restriction enzymes in genetic engineering?",
    "options": ["Join DNA fragments", "Cut DNA at specific sequences", "Amplify DNA", "Sequence DNA"],
    "correctAnswer": 1,
    "explanation": "Restriction enzymes (restriction endonucleases) cut DNA at specific recognition sequences, allowing scientists to insert genes into plasmids or other vectors."
  },
  {
    "id": 55,
    "question": "Which of the following best explains carbon's central role in biomolecules?",
    "options": ["Carbon exists as a solid at room temperature", "Carbon's four valence electrons allow it to bond in many ways", "Carbon is the most electronegative element", "Carbon is the most abundant element on Earth"],
    "correctAnswer": 1,
    "explanation": "Carbon has four valence electrons, allowing it to form stable covalent bonds with many elements and create diverse, complex molecules essential for life. [citation:3]"
  }

    ,
      {
        id: 111,
        question: "What is homeostasis?",
        options: ["Cell division", "Maintaining stable internal conditions", "Genetic mutation", "Protein synthesis"],
        correctAnswer: 1,
        explanation: "Homeostasis is the maintenance of stable internal conditions in an organism"
      },
      {
        id: 121,
        question: "What type of organism has no nucleus?",
        options: ["Eukaryote", "Prokaryote", "Virus", "Fungus"],
        correctAnswer: 1,
        explanation: "Prokaryotes (like bacteria) lack a membrane-bound nucleus"
      },
      {
        id: 131,
        question: "What is the function of chlorophyll?",
        options: ["Digest food", "Absorb light for photosynthesis", "Transport water", "Store energy"],
        correctAnswer: 1,
        explanation: "Chlorophyll absorbs light energy needed for photosynthesis"
      },
      {
        id: 141,
        question: "What are the building blocks of proteins?",
        options: ["Nucleotides", "Amino acids", "Fatty acids", "Glucose"],
        correctAnswer: 1,
        explanation: "Amino acids are the monomers that combine to form proteins"
      },
      {
        id: 151,
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
  id: 1, 
  question: "Which statement is an example of a valid syllogism?", 
  options: ["All cats are animals. All animals are cats. Therefore, all cats are cats.", "All humans are mortal. Socrates is a human. Therefore, Socrates is mortal.", "Some birds are fish. All fish swim. Therefore, some birds swim.", "All cars are vehicles. All trucks are vehicles. Therefore, all cars are trucks."], 
  correctAnswer: 1, 
  explanation: "This is a valid syllogism: All humans are mortal, Socrates is a human, so Socrates is mortal." 
},
{ 
  id: 2, 
  question: "Which is an example of deductive reasoning?", 
  options: ["Predicting the weather based on patterns", "Concluding that all men are mortal because Socrates is mortal", "Noticing trends in stock prices", "Making a guess about a new restaurant"], 
  correctAnswer: 1, 
  explanation: "Deductive reasoning starts from general premises and derives a specific conclusion." 
},
{ 
  id: 3, 
  question: "If all A are B, and all B are C, then:", 
  options: ["All A are C", "All C are A", "Some A are C", "No A are C"], 
  correctAnswer: 0, 
  explanation: "By transitive logic, if all A are B and all B are C, then all A are C." 
},
{ 
  id: 4, 
  question: "Which is a logical fallacy?", 
  options: ["Ad hominem", "Modus ponens", "Syllogism", "Deduction"], 
  correctAnswer: 0, 
  explanation: "Ad hominem attacks a person instead of addressing the argument, which is a fallacy." 
},
{ 
  id: 5, 
  question: "If today is Monday, then tomorrow is Tuesday. Today is Monday. Therefore:", 
  options: ["Tomorrow is Monday", "Tomorrow is Tuesday", "Today is Tuesday", "It cannot be determined"], 
  correctAnswer: 1, 
  explanation: "Using modus ponens: if P then Q; P is true, so Q is true." 
},
{ 
  id: 6, 
  question: "Which is an example of inductive reasoning?", 
  options: ["All swans observed are white, so all swans are white", "All humans are mortal. Socrates is human. Therefore, Socrates is mortal", "If it rains, the ground gets wet. It rains. Therefore, the ground gets wet", "A square has four sides, so a rectangle has four sides"], 
  correctAnswer: 0, 
  explanation: "Inductive reasoning draws general conclusions from specific observations." 
},
{ 
  id: 7, 
  question: "Which symbol represents logical 'AND' in propositional logic?", 
  options: ["∨", "∧", "→", "¬"], 
  correctAnswer: 1, 
  explanation: "The symbol ∧ represents logical 'AND'." 
},
{ 
  id: 8, 
  question: "What is a contradiction?", 
  options: ["A statement that is always true", "A statement that is always false", "A conditional statement", "An assumption"], 
  correctAnswer: 1, 
  explanation: "A contradiction is a statement that is always false." 
},
{ 
  id: 9, 
  question: "Which of the following is an example of a conditional statement?", 
  options: ["All dogs bark", "If it rains, then the ground is wet", "Socrates is a human", "Two plus two equals four"], 
  correctAnswer: 1, 
  explanation: "A conditional statement has an 'if-then' structure." 
},
{ 
  id: 10, 
  question: "Which is an example of a tautology?", 
  options: ["It will either rain or it will not rain", "All cats are dogs", "Some humans are immortal", "This statement is false"], 
  correctAnswer: 0, 
  explanation: "A tautology is a statement that is always true, e.g., 'It will either rain or not rain'." 
},
{ 
  id: 11, 
  question: "Which is an example of reasoning by analogy?", 
  options: ["This medicine worked for one patient, so it will work for another", "All men are mortal. John is a man. Therefore, John is mortal", "If it rains, then the street is wet", "A triangle has three sides"], 
  correctAnswer: 0, 
  explanation: "Analogy compares similar cases to draw a conclusion." 
},
{ 
  id: 12, 
  question: "What is the negation of the statement 'All birds can fly'?", 
  options: ["Some birds cannot fly", "No birds can fly", "All birds can swim", "All birds are mammals"], 
  correctAnswer: 0, 
  explanation: "The negation of 'All birds can fly' is 'Some birds cannot fly'." 
},
{ 
  id: 13, 
  question: "Which fallacy occurs when someone assumes because one event follows another, the first caused the second?", 
  options: ["Post hoc", "Ad hominem", "Circular reasoning", "Red herring"], 
  correctAnswer: 0, 
  explanation: "Post hoc fallacy assumes causation just because of sequence." 
},
{ 
  id: 14, 
  question: "If P → Q and ¬Q are true, what can be concluded?", 
  options: ["P is true", "P is false", "Q is true", "Cannot conclude"], 
  correctAnswer: 1, 
  explanation: "By modus tollens: if P implies Q and Q is false, then P must be false." 
},
{ 
  id: 15, 
  question: "Which type of reasoning starts from specific facts and moves to a general conclusion?", 
  options: ["Deductive", "Inductive", "Abductive", "Reductive"], 
  correctAnswer: 1, 
  explanation: "Inductive reasoning generalizes from specific observations." 
},
{ 
  id: 16, 
  question: "What is an argument?", 
  options: ["A disagreement between people", "A set of statements where some support a conclusion", "A question", "A random opinion"], 
  correctAnswer: 1, 
  explanation: "An argument is a series of statements intended to support a conclusion." 
},
{ 
  id: 17, 
  question: "Which is the conclusion in the argument: 'All humans are mortal. Socrates is human. Therefore, Socrates is mortal.'?", 
  options: ["All humans are mortal", "Socrates is human", "Socrates is mortal", "None"], 
  correctAnswer: 2, 
  explanation: "The conclusion is 'Socrates is mortal'." 
},
{ 
  id: 18, 
  question: "Which is an example of circular reasoning?", 
  options: ["The Bible is true because it says so in the Bible", "All mammals are warm-blooded. A whale is a mammal. Therefore, a whale is warm-blooded", "If it rains, the ground is wet", "Some birds cannot fly"], 
  correctAnswer: 0, 
  explanation: "Circular reasoning assumes the truth of the conclusion in the premise." 
},
{ 
  id: 19, 
  question: "Which reasoning form is used when we choose the best explanation?", 
  options: ["Deduction", "Induction", "Abduction", "Analogy"], 
  correctAnswer: 2, 
  explanation: "Abductive reasoning selects the most likely explanation for observations." 
},
{ 
  id: 20, 
  question: "Which symbol represents logical 'OR'?", 
  options: ["∧", "∨", "¬", "→"], 
  correctAnswer: 1, 
  explanation: "The symbol ∨ represents logical 'OR'." 
},
{ 
  id: 21, 
  question: "Which is a paradox?", 
  options: ["All bachelors are unmarried men", "This statement is false", "All cats are animals", "Water boils at 100°C"], 
  correctAnswer: 1, 
  explanation: "A paradox is a statement that contradicts itself or defies intuition." 
},
{ 
  id: 22, 
  question: "What is the opposite of a valid argument?", 
  options: ["Sound argument", "Invalid argument", "Deductive argument", "Inductive argument"], 
  correctAnswer: 1, 
  explanation: "An invalid argument has premises that do not logically guarantee the conclusion." 
},
{ 
  id: 23, 
  question: "Which is an example of a disjunctive statement?", 
  options: ["P or Q", "If P then Q", "Not P", "P and Q"], 
  correctAnswer: 0, 
  explanation: "A disjunctive statement presents alternatives using 'or'." 
},
{ 
  id: 24, 
  question: "What is the main goal of critical thinking?", 
  options: ["Memorize facts", "Accept opinions blindly", "Evaluate arguments logically", "Ignore evidence"], 
  correctAnswer: 2, 
  explanation: "Critical thinking is the systematic evaluation of arguments and evidence." 
},
{ 
  id: 25, 
  question: "Which reasoning identifies patterns and infers rules from them?", 
  options: ["Deductive", "Inductive", "Abductive", "Analogical"], 
  correctAnswer: 1, 
  explanation: "Inductive reasoning observes patterns to infer general rules." 
}


      ,
      {
        id: 26,
        question: "What is the straw man fallacy?",
        options: ["Misrepresenting someone's argument", "Using weak evidence", "Appeal to tradition", "False dichotomy"],
        correctAnswer: 0,
        explanation: "Straw man involves misrepresenting an opponent's argument to make it easier to attack"
      },
      {
        id: 27,
        question: "What makes an argument sound?",
        options: ["Valid only", "True premises only", "Valid with true premises", "Popular acceptance"],
        correctAnswer: 2,
        explanation: "A sound argument is both valid and has all true premises"
      },
      {
        id: 28,
        question: "What is the appeal to authority fallacy?",
        options: ["Using expert testimony", "Claiming truth because an authority said so", "Citing sources", "Logical proof"],
        correctAnswer: 1,
        explanation: "Appeal to authority claims something is true simply because an authority figure said so, without proper evidence"
      },
      {
        id: 29,
        question: "What is deductive reasoning?",
        options: ["From specific to general", "From general to specific", "Based on probability", "Based on emotion"],
        correctAnswer: 1,
        explanation: "Deductive reasoning moves from general premises to specific conclusions"
      },
      {
        id: 30,
        question: "What is circular reasoning?",
        options: ["Using logic", "Conclusion is used as a premise", "Multiple premises", "Strong evidence"],
        correctAnswer: 1,
        explanation: "Circular reasoning occurs when the conclusion is assumed in one of the premises"
      },
    ],
    final: [
  {
    id: 1,
    question: "Which of the following is a proposition?",
    options: ["Close the door!", "2 + 2 = 4", "What time is it?", "Please sit down."],
    correctAnswer: 1,
    explanation: "A proposition is a declarative statement that is either true or false. '2 + 2 = 4' is true."
  },
  {
    id: 2,
    question: "If p: 'It is raining', q: 'I have an umbrella', what is p ∧ q?",
    options: ["It is raining or I have an umbrella", "If it is raining, then I have an umbrella", "It is raining and I have an umbrella", "It is not raining"],
    correctAnswer: 2,
    explanation: "∧ represents logical 'and', so p ∧ q means 'It is raining and I have an umbrella'."
  },
  {
    id: 3,
    question: "The negation of 'All birds can fly' is:",
    options: ["No birds can fly", "Some birds cannot fly", "All birds cannot fly", "Some birds can fly"],
    correctAnswer: 1,
    explanation: "The negation of a universal statement 'All X are Y' is 'Some X are not Y'."
  },
  {
    id: 4,
    question: "If p: 'I study', q: 'I pass', what is the meaning of p → q?",
    options: ["I pass only if I study", "If I study, then I pass", "I study and pass", "I study or pass"],
    correctAnswer: 1,
    explanation: "→ represents implication. p → q means 'If p then q'."
  },
  {
    id: 5,
    question: "Which truth table corresponds to p ∨ q?",
    options: ["True only if both are true", "True if at least one is true", "False only if both are true", "Always false"],
    correctAnswer: 1,
    explanation: "∨ represents logical 'or'. It is true if at least one of p or q is true."
  },
  {
    id: 6,
    question: "Which statement is a tautology?",
    options: ["p ∨ ¬p", "p ∧ ¬p", "p → q", "p ∨ q"],
    correctAnswer: 0,
    explanation: "p ∨ ¬p is always true, so it is a tautology."
  },
  {
    id: 7,
    question: "Which statement is a contradiction?",
    options: ["p ∨ ¬p", "p ∧ ¬p", "p → p", "p ∨ q"],
    correctAnswer: 1,
    explanation: "p ∧ ¬p is always false, so it is a contradiction."
  },
  {
    id: 8,
    question: "The contrapositive of 'If it rains, then I take an umbrella' is:",
    options: ["If I take an umbrella, then it rains", "If I do not take an umbrella, then it does not rain", "If it does not rain, then I take an umbrella", "If it rains, then I do not take an umbrella"],
    correctAnswer: 1,
    explanation: "The contrapositive of p → q is ¬q → ¬p, which is logically equivalent."
  },
  {
    "id": 9,
    "question": "Which of the following is an example of a biconditional (↔)?",
    "options": ["p → q", "p ∧ q", "p ↔ q", "¬p"],
    "correctAnswer": 2,
    "explanation": "↔ represents 'if and only if', meaning both sides imply each other."
  },
  {
    "id": 10,
    "question": "The negation of p ∧ q is equivalent to:",
    "options": ["¬p ∧ ¬q", "¬p ∨ ¬q", "¬p → ¬q", "p ∨ q"],
    "correctAnswer": 1,
    "explanation": "By De Morgan's law, ¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "id": 11,
    "question": "The negation of p ∨ q is equivalent to:",
    "options": ["¬p ∧ ¬q", "¬p ∨ ¬q", "¬p → ¬q", "p ∧ q"],
    "correctAnswer": 0,
    "explanation": "By De Morgan's law, ¬(p ∨ q) ≡ ¬p ∧ ¬q."
  },
  {
    "id": 12,
    "question": "Which statement is logically equivalent to ¬(p → q)?",
    "options": ["p → q", "p ∧ ¬q", "¬p ∧ q", "¬p ∨ q"],
    "correctAnswer": 1,
    "explanation": "¬(p → q) ≡ ¬(¬p ∨ q) ≡ p ∧ ¬q."
  },
  {
    "id": 13,
    "question": "If all humans are mortal and Socrates is a human, then Socrates is mortal. This is an example of:",
    "options": ["Modus ponens", "Modus tollens", "Contradiction", "Biconditional"],
    "correctAnswer": 0,
    "explanation": "This is an example of modus ponens: If p → q and p, then q."
  },
  {
    "id": 14,
    "question": "If p → q and ¬q, what can we conclude?",
    "options": ["p", "¬p", "q", "¬q"],
    "correctAnswer": 1,
    "explanation": "By modus tollens: If p → q and ¬q, then ¬p."
  },
  {
    "id": 15,
    "question": "The converse of p → q is:",
    "options": ["q → p", "¬q → ¬p", "¬p → ¬q", "p ∧ q"],
    "correctAnswer": 0,
    "explanation": "The converse swaps the hypothesis and conclusion."
  },
  {
    "id": 16,
    "question": "Which of the following is a valid argument?",
    "options": ["p ∧ q, therefore p", "p ∨ q, therefore ¬p", "p → q, therefore q → p", "p ∧ ¬p, therefore q"],
    "correctAnswer": 0,
    "explanation": "From p ∧ q, we can validly conclude p (simplification rule)."
  },
  {
    "id": 17,
    "question": "Which is the negation of 'Some cats are black'?",
    "options": ["All cats are black", "No cats are black", "Some cats are not black", "All cats are not black"],
    "correctAnswer": 3,
    "explanation": "The negation of '∃x: cat(x) ∧ black(x)' is '∀x: cat(x) → ¬black(x)'."
  },
  {
    "id": 18,
    "question": "Which is the negation of 'No dogs are friendly'?",
    "options": ["All dogs are friendly", "Some dogs are friendly", "No dogs are unfriendly", "All dogs are unfriendly"],
    "correctAnswer": 1,
    "explanation": "The negation of '∀x: dog(x) → ¬friendly(x)' is '∃x: dog(x) ∧ friendly(x)'."
  },
  {
    "id": 19,
    "question": "The statement 'If it is snowing, then it is cold' is false when:",
    "options": ["It is snowing and cold", "It is snowing and not cold", "It is not snowing and cold", "It is not snowing and not cold"],
    "correctAnswer": 1,
    "explanation": "p → q is false only when p is true and q is false."
  },
  {
    "id": 20,
    "question": "Which is a logically equivalent statement to 'p ↔ q'?",
    "options": ["(p → q) ∧ (q → p)", "(p ∧ q) ∨ (¬p ∧ ¬q)", "Both A and B", "None"],
    "correctAnswer": 2,
    "explanation": "A biconditional is equivalent to both the conditional in both directions and also to (p ∧ q) ∨ (¬p ∧ ¬q)."
  }

  ,
  {
    "id": 21,
    "question": "Which of the following statements is a conditional?",
    "options": ["All humans are mortal", "If it rains, then I take an umbrella", "Socrates is a human", "2 + 2 = 4"],
    "correctAnswer": 1,
    "explanation": "A conditional statement has the form 'If p, then q'."
  },
  {
    "id": 22,
    "question": "Which of the following is the contrapositive of 'If it is hot, then I drink water'?",
    "options": ["If I drink water, then it is hot", "If I do not drink water, then it is not hot", "If it is not hot, then I drink water", "If it is hot, then I do not drink water"],
    "correctAnswer": 1,
    "explanation": "The contrapositive of p → q is ¬q → ¬p."
  },
  {
    "id": 23,
    "question": "If p: 'I study', q: 'I pass', r: 'I celebrate', which is a valid compound statement?",
    "options": ["p ∧ q → r", "(p ∧ q) → r", "p ∧ (q → r)", "All of the above"],
    "correctAnswer": 3,
    "explanation": "All the listed forms are valid compound statements combining logical connectives."
  },
  {
    "id": 24,
    "question": "Which of the following is an example of a valid argument using modus tollens?",
    "options": ["If it rains, then I take an umbrella. It rains. Therefore, I take an umbrella.", "If it rains, then I take an umbrella. I do not take an umbrella. Therefore, it does not rain.", "It is raining and I take an umbrella. Therefore, it rains.", "None of the above"],
    "correctAnswer": 1,
    "explanation": "Modus tollens: p → q, ¬q, therefore ¬p."
  },
  {
    "id": 25,
    "question": "Which of the following is the correct truth table for ¬p?",
    "options": ["True when p is true", "False when p is false", "True when p is false", "Always true"],
    "correctAnswer": 2,
    "explanation": "¬p is the negation of p: true when p is false, false when p is true."
  },
  {
    "id": 26,
    "question": "Which of the following is a logical equivalence?",
    "options": ["p ∨ q ≡ q ∨ p", "p ∧ q ≡ q ∧ p", "¬(p ∧ q) ≡ ¬p ∨ ¬q", "All of the above"],
    "correctAnswer": 3,
    "explanation": "All listed statements are examples of logical equivalences."
  },
  {
    "id": 27,
    "question": "If ∀x P(x) is true, which of the following is true?",
    "options": ["P(x) is true for at least one x", "P(x) is true for all x", "P(x) is false for all x", "P(x) is false for at least one x"],
    "correctAnswer": 1,
    "explanation": "∀x P(x) means P(x) is true for every element x in the domain."
  },
  {
    "id": 28,
    "question": "The statement ∃x Q(x) means:",
    "options": ["Q(x) is true for all x", "Q(x) is true for some x", "Q(x) is false for all x", "Q(x) is false for some x"],
    "correctAnswer": 1,
    "explanation": "∃x Q(x) indicates that there exists at least one x for which Q(x) is true."
  },
  {
    "id": 29,
    "question": "Which of the following is a tautology?",
    "options": ["p ∨ ¬p", "p ∧ ¬p", "p → ¬p", "p ∨ q"],
    "correctAnswer": 0,
    "explanation": "p ∨ ¬p is always true, making it a tautology."
  },
  {
    "id": 30,
    "question": "Which of the following is a contradiction?",
    "options": ["p ∨ ¬p", "p ∧ ¬p", "p → q", "¬p ∨ q"],
    "correctAnswer": 1,
    "explanation": "p ∧ ¬p is always false, so it is a contradiction."
  },
  {
    "id": 31,
    "question": "Which is the converse of 'If I exercise, then I feel healthy'?",
    "options": ["If I feel healthy, then I exercise", "If I do not exercise, then I do not feel healthy", "If I exercise, then I do not feel healthy", "If I feel healthy, then I do not exercise"],
    "correctAnswer": 0,
    "explanation": "The converse of p → q is q → p."
  },
  {
    "id": 32,
    "question": "Which of the following is logically equivalent to p ↔ q?",
    "options": ["(p → q) ∧ (q → p)", "(p ∧ q) ∨ (¬p ∧ ¬q)", "Both A and B", "None of the above"],
    "correctAnswer": 2,
    "explanation": "A biconditional can be expressed both ways equivalently."
  },
  {
    "id": 33,
    "question": "Which of the following is valid reasoning?",
    "options": ["p ∨ q, ¬p, therefore q", "p ∧ q, therefore ¬p", "p → q, q, therefore p", "None"],
    "correctAnswer": 0,
    "explanation": "Disjunctive syllogism: p ∨ q, ¬p, therefore q."
  },
  {
    "id": 34,
    "question": "Which of the following statements is a conditional with a false hypothesis?",
    "options": ["If 2+2=5, then pigs fly", "If it rains, then I take an umbrella", "If the sun rises, then it is morning", "If I study, then I pass"],
    "correctAnswer": 0,
    "explanation": "The hypothesis 2+2=5 is false."
  },
  {
    "id": 35,
    "question": "The negation of 'Some students failed the exam' is:",
    "options": ["All students failed the exam", "No student failed the exam", "Some students passed the exam", "All students passed the exam"],
    "correctAnswer": 1,
    "explanation": "The negation of '∃x: student(x) ∧ failed(x)' is '∀x: ¬failed(x)'."
  },
  {
    "id": 36,
    "question": "Which of the following is the correct De Morgan's law?",
    "options": ["¬(p ∧ q) ≡ ¬p ∧ ¬q", "¬(p ∨ q) ≡ ¬p ∨ ¬q", "¬(p ∧ q) ≡ ¬p ∨ ¬q", "¬(p ∨ q) ≡ p ∧ q"],
    "correctAnswer": 2,
    "explanation": "De Morgan's laws: ¬(p ∧ q) ≡ ¬p ∨ ¬q and ¬(p ∨ q) ≡ ¬p ∧ ¬q."
  },
  {
    "id": 37,
    "question": "If p is false and q is true, what is the truth value of p → q?",
    "options": ["True", "False", "Cannot determine", "Depends on context"],
    "correctAnswer": 0,
    "explanation": "A conditional is true if the hypothesis is false."
  },
  {
    "id": 38,
    "question": "If p ∨ q is true and p is false, what is q?",
    "options": ["True", "False", "Cannot determine", "Either true or false"],
    "correctAnswer": 0,
    "explanation": "Since p ∨ q is true and p is false, q must be true."
  },
  {
    "id": 39,
    "question": "Which of the following is logically equivalent to ¬(p → q)?",
    "options": ["p ∧ ¬q", "¬p ∧ q", "¬p ∨ q", "p ∨ ¬q"],
    "correctAnswer": 0,
    "explanation": "¬(p → q) ≡ ¬(¬p ∨ q) ≡ p ∧ ¬q."
  },
  {
    "id": 40,
    "question": "Which is a valid use of universal instantiation?",
    "options": ["From ∀x P(x), infer P(a) for a specific a", "From ∃x P(x), infer P(a)", "From ¬∀x P(x), infer ¬P(a)", "From ∀x P(x), infer ∃x P(x)"],
    "correctAnswer": 0,
    "explanation": "Universal instantiation allows us to infer that P(a) is true for any specific a from ∀x P(x)."
  },
  {
    "id": 41,
    "question": "Which of the following statements is logically equivalent to ¬(∀x P(x))?",
    "options": ["∃x ¬P(x)", "∀x ¬P(x)", "¬∃x P(x)", "∃x P(x)"],
    "correctAnswer": 0,
    "explanation": "The negation of a universal statement is an existential statement with negation."
  },
  {
    "id": 42,
    "question": "Which of the following statements is logically equivalent to ¬(∃x P(x))?",
    "options": ["∀x ¬P(x)", "∃x ¬P(x)", "¬∀x P(x)", "None"],
    "correctAnswer": 0,
    "explanation": "The negation of an existential statement is a universal statement with negation."
  },
  {
    "id": 43,
    "question": "Which of the following is an example of a valid syllogism?",
    "options": ["All men are mortal. Socrates is a man. Therefore, Socrates is mortal.", "All men are mortal. Socrates is mortal. Therefore, Socrates is a man.", "All men are mortal. Therefore, Socrates is mortal.", "Socrates is a man. Therefore, all men are mortal."],
    "correctAnswer": 0,
    "explanation": "This is a classic valid syllogism using modus ponens."
  },
  {
    "id": 44,
    "question": "Which of the following is a sound argument?",
    "options": ["Valid argument with true premises", "Invalid argument with true premises", "Valid argument with false premises", "Invalid argument with false premises"],
    "correctAnswer": 0,
    "explanation": "A sound argument is valid and has all true premises."
  },
  {
    "id": 45,
    "question": "Which of the following statements is an existential statement?",
    "options": ["All cats are cute", "Some cats are cute", "No cats are cute", "Cats are cute"],
    "correctAnswer": 1,
    "explanation": "Existential statements assert that there exists at least one element satisfying the property."
  },
  {
    "id": 46,
    "question": "If p ∧ q is false, what can we conclude?",
    "options": ["p is false, q is false", "Either p or q is false", "Both p and q are true", "Cannot determine anything"],
    "correctAnswer": 1,
    "explanation": "For a conjunction to be false, at least one of the components must be false."
  },
  {
    "id": 47,
    "question": "Which of the following is logically equivalent to p ∨ (q ∧ r)?",
    "options": ["(p ∨ q) ∧ (p ∨ r)", "(p ∧ q) ∨ r", "p ∧ (q ∨ r)", "¬p ∨ ¬q ∨ ¬r"],
    "correctAnswer": 0,
    "explanation": "By distributive law: p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)."
  },
  {
    "id": 48,
    "question": "Which of the following is the distributive law in logic?",
    "options": ["p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)", "p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)", "Both A and B", "None"],
    "correctAnswer": 2,
    "explanation": "Both forms are examples of distributive laws in propositional logic."
  },
  {
    "id": 49,
    "question": "Which of the following is a logically valid argument?",
    "options": ["p → q, p, therefore q", "p → q, q, therefore p", "p ∨ q, p, therefore q", "p ∧ q, p, therefore q"],
    "correctAnswer": 0,
    "explanation": "This is modus ponens: if p → q and p, then q."
  },
  {
    "id": 50,
    "question": "Which of the following is the biconditional truth table?",
    "options": ["True when p and q are both true or both false", "True when at least one of p or q is true", "False only when p is true", "Always true"],
    "correctAnswer": 0,
    "explanation": "A biconditional (p ↔ q) is true when p and q have the same truth value."
  },
  {
    "id": 51,
    "question": "If p ↔ q is true and p is false, what is q?",
    "options": ["True", "False", "Cannot determine", "Either true or false"],
    "correctAnswer": 1,
    "explanation": "For p ↔ q to be true, q must have the same truth value as p."
  },
  {
    "id": 52,
    "question": "Which of the following is logically equivalent to ¬(p ↔ q)?",
    "options": ["p ∧ ¬q ∨ ¬p ∧ q", "p ∨ q", "p → q", "p ∧ q"],
    "correctAnswer": 0,
    "explanation": "¬(p ↔ q) ≡ (p ∧ ¬q) ∨ (¬p ∧ q), meaning p and q have different truth values."
  },
  {
    "id": 53,
    "question": "Which of the following is the inverse of 'If p then q'?",
    "options": ["If ¬p then ¬q", "If ¬q then ¬p", "If q then p", "If p then ¬q"],
    "correctAnswer": 0,
    "explanation": "The inverse of p → q is ¬p → ¬q."
  },
  {
    "id": 54,
    "question": "Which of the following is an example of universal generalization?",
    "options": ["From P(a), P(b), P(c), conclude ∀x P(x)", "From ∀x P(x), infer P(a)", "From ∃x P(x), infer P(a)", "None of the above"],
    "correctAnswer": 0,
    "explanation": "Universal generalization allows us to conclude that a property holds for all elements if it holds for arbitrary examples."
  },
  {
    "id": 55,
    "question": "Which of the following is a logically valid argument?",
    "options": ["p ∧ q, therefore p", "p ∨ q, p, therefore q", "p → q, q, therefore p", "¬p ∧ p, therefore q"],
    "correctAnswer": 0,
    "explanation": "Simplification: from p ∧ q we can validly conclude p."
  }
,
  
      {
        id: 111,
        question: "What is a logical contradiction?",
        options: ["Two statements that can both be true", "Two statements that cannot both be true", "An unsupported claim", "A valid argument"],
        correctAnswer: 1,
        explanation: "A contradiction occurs when two statements cannot both be true simultaneously"
      },
      {
        id: 121,
        question: "What is the false dichotomy fallacy?",
        options: ["Presenting only two options when more exist", "Using false statistics", "Appealing to emotion", "Personal attack"],
        correctAnswer: 0,
        explanation: "False dichotomy presents only two options when there are actually more possibilities"
      },
      {
        id: 131,
        question: "What is critical thinking?",
        options: ["Negative thinking", "Objective analysis and evaluation", "Memorizing facts", "Following authority"],
        correctAnswer: 1,
        explanation: "Critical thinking is the objective analysis and evaluation of an issue to form a judgment"
      },
      {
        id: 141,
        question: "What is the slippery slope fallacy?",
        options: ["Claiming one event will lead to extreme consequences", "Using weak arguments", "Attacking character", "Circular logic"],
        correctAnswer: 0,
        explanation: "Slippery slope argues that one action will inevitably lead to extreme negative consequences"
      },
      {
        id: 151,
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
      { id: 26, question: "What is the Ge'ez script?", options: ["Ancient Ethiopian writing system", "A type of architecture", "A religious practice", "A trade route"], correctAnswer: 0, explanation: "Ge'ez is an ancient Ethiopian script that is still used in the Ethiopian Orthodox Church and is the basis for Amharic and Tigrinya scripts." },


      { id: 27, question: "Who was Emperor Tewodros II?", options: ["Unifier of modern Ethiopia", "Last emperor of Ethiopia", "Founder of Addis Ababa", "Leader of Adwa battle"], correctAnswer: 0, explanation: "Emperor Tewodros II (1855-1868) is credited with beginning the unification of modern Ethiopia after the Era of Princes." },
      { id: 28, question: "When was Addis Ababa founded?", options: ["1886", "1896", "1906", "1916"], correctAnswer: 0, explanation: "Addis Ababa was founded in 1886 by Emperor Menelik II and his wife Empress Taytu." },
      { id: 29, question: "What was the Era of the Princes (Zemene Mesafint)?", options: ["Period of regional warlords ruling Ethiopia", "Golden age of Ethiopian empire", "Colonial period", "Democratic era"], correctAnswer: 0, explanation: "The Zemene Mesafint (1769-1855) was a period when Ethiopian emperors were powerless and regional warlords held real power." },
      
      { id: 30, question: "Which country briefly occupied Ethiopia from 1936-1941?", options: ["Italy", "Britain", "France", "Portugal"], correctAnswer: 0, explanation: "Italy occupied Ethiopia from 1936 to 1941 under Mussolini, ending with British-assisted liberation." },
     ,
{ 
  id: 1, 
  question: "Who was the first President of the United States?", 
  options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"], 
  correctAnswer: 1, 
  explanation: "George Washington became the first President of the United States in 1789." 
},
{ 
  id: 2, 
  question: "The Renaissance was primarily a movement in which field?", 
  options: ["Science only", "Art, culture, and intellectual activity", "Military strategy", "Economics"], 
  correctAnswer: 1, 
  explanation: "The Renaissance was a cultural and intellectual movement that began in Europe in the 14th century." 
},
{ 
  id: 3, 
  question: "Which empire was ruled by Julius Caesar?", 
  options: ["Roman Empire", "Greek Empire", "Ottoman Empire", "Persian Empire"], 
  correctAnswer: 0, 
  explanation: "Julius Caesar was a key leader in the Roman Empire." 
},
{ 
  id: 4, 
  question: "What was the main cause of World War I?", 
  options: ["Assassination of Archduke Franz Ferdinand", "Rise of the Internet", "Discovery of America", "Industrial Revolution"], 
  correctAnswer: 0, 
  explanation: "The assassination of Archduke Franz Ferdinand of Austria triggered World War I." 
},
{ 
  id: 5, 
  question: "Who was known as the 'Father of Modern India'?", 
  options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Bhagat Singh"], 
  correctAnswer: 0, 
  explanation: "Mahatma Gandhi led India’s nonviolent struggle for independence from British rule." 
},
{ 
  id: 6, 
  question: "The Industrial Revolution began in which country?", 
  options: ["France", "Germany", "United Kingdom", "United States"], 
  correctAnswer: 2, 
  explanation: "The Industrial Revolution started in the United Kingdom in the late 18th century." 
},
{ 
  id: 7, 
  question: "Who was the first Emperor of China?", 
  options: ["Qin Shi Huang", "Sun Yat-sen", "Mao Zedong", "Confucius"], 
  correctAnswer: 0, 
  explanation: "Qin Shi Huang unified China and became its first emperor in 221 BCE." 
},
{ 
  id: 8, 
  question: "Which war ended with the Treaty of Versailles?", 
  options: ["World War I", "World War II", "American Civil War", "Napoleonic Wars"], 
  correctAnswer: 0, 
  explanation: "World War I officially ended with the Treaty of Versailles in 1919." 
},
{ 
  id: 9, 
  question: "Who discovered America in 1492?", 
  options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Leif Erikson"], 
  correctAnswer: 1, 
  explanation: "Christopher Columbus reached the Americas in 1492." 
},
{ 
  id: 10, 
  question: "Which ancient civilization built the pyramids?", 
  options: ["Mesopotamia", "Egypt", "Greece", "Rome"], 
  correctAnswer: 1, 
  explanation: "The ancient Egyptians constructed the pyramids as monumental tombs." 
},
{ 
  id: 11, 
  question: "The Cold War was primarily between which two countries?", 
  options: ["USA and China", "USA and USSR", "UK and Germany", "France and Russia"], 
  correctAnswer: 1, 
  explanation: "The Cold War was a political and ideological struggle between the USA and the USSR." 
},
{ 
  id: 12, 
  question: "Who wrote the Declaration of Independence?", 
  options: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"], 
  correctAnswer: 1, 
  explanation: "Thomas Jefferson was the primary author of the Declaration of Independence in 1776." 
},
{ 
  id: 13, 
  question: "Which empire was led by Genghis Khan?", 
  options: ["Mongol Empire", "Ottoman Empire", "Roman Empire", "Persian Empire"], 
  correctAnswer: 0, 
  explanation: "Genghis Khan founded and led the Mongol Empire in the 13th century." 
},
{ 
  id: 14, 
  question: "The French Revolution began in which year?", 
  options: ["1789", "1776", "1804", "1799"], 
  correctAnswer: 0, 
  explanation: "The French Revolution started in 1789, overthrowing the monarchy." 
},
{ 
  id: 15, 
  question: "Who was the first President of South Africa after the end of apartheid?", 
  options: ["Nelson Mandela", "F.W. de Klerk", "Thabo Mbeki", "Desmond Tutu"], 
  correctAnswer: 0, 
  explanation: "Nelson Mandela became South Africa’s first black president in 1994." 
},
{ 
  id: 16, 
  question: "Which event marked the start of World War II?", 
  options: ["Invasion of Poland", "Attack on Pearl Harbor", "Treaty of Versailles", "Fall of Berlin Wall"], 
  correctAnswer: 0, 
  explanation: "Germany invaded Poland in 1939, marking the beginning of World War II." 
},
{ 
  id: 17, 
  question: "The Berlin Wall fell in which year?", 
  options: ["1989", "1991", "1975", "1961"], 
  correctAnswer: 0, 
  explanation: "The Berlin Wall fell in 1989, symbolizing the end of the Cold War." 
},
{ 
  id: 18, 
  question: "Who was the first emperor of the Roman Empire?", 
  options: ["Julius Caesar", "Augustus", "Nero", "Caligula"], 
  correctAnswer: 1, 
  explanation: "Augustus became the first emperor of Rome in 27 BCE." 
},
{ 
  id: 19, 
  question: "The Enlightenment period emphasized:", 
  options: ["Religious authority", "Reason, science, and individual rights", "Military conquest", "Medieval traditions"], 
  correctAnswer: 1, 
  explanation: "The Enlightenment focused on reason, science, and human rights." 
},
{ 
  id: 20, 
  question: "Which country was the first to industrialize?", 
  options: ["Germany", "United Kingdom", "France", "United States"], 
  correctAnswer: 1, 
  explanation: "The United Kingdom was the first country to undergo the Industrial Revolution." 
},
{ 
  id: 21, 
  question: "Who led India’s independence movement through nonviolent resistance?", 
  options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Vallabhbhai Patel"], 
  correctAnswer: 0, 
  explanation: "Gandhi led India’s independence struggle using nonviolent civil disobedience." 
},
{ 
  id: 22, 
  question: "Which ancient civilization is credited with developing democracy?", 
  options: ["Rome", "Egypt", "Greece", "Mesopotamia"], 
  correctAnswer: 2, 
  explanation: "Ancient Greece, especially Athens, developed early forms of democracy." 
},
{ 
  id: 23, 
  question: "Which empire controlled much of the Middle East during the 16th century?", 
  options: ["Ottoman Empire", "Mughal Empire", "Roman Empire", "Persian Empire"], 
  correctAnswer: 0, 
  explanation: "The Ottoman Empire dominated the Middle East in the 16th century." 
},
{ 
  id: 24, 
  question: "Who was the leader of Nazi Germany during World War II?", 
  options: ["Adolf Hitler", "Joseph Stalin", "Benito Mussolini", "Winston Churchill"], 
  correctAnswer: 0, 
  explanation: "Adolf Hitler was the dictator of Nazi Germany from 1933 to 1945." 
},
{ 
  id: 25, 
  question: "Which event marked the end of the American Civil War?", 
  options: ["Battle of Gettysburg", "Surrender at Appomattox Court House", "Emancipation Proclamation", "Boston Tea Party"], 
  correctAnswer: 1, 
  explanation: "The Civil War ended with General Lee’s surrender at Appomattox in 1865." 
}

      ],
      final: 
      [
  {
    "id": 1,
    "question": "Who was the first Governor-General of India?",
    "options": ["Lord Dalhousie", "Lord William Bentinck", "Lord Cornwallis", "Warren Hastings"],
    "correctAnswer": 1,
    "explanation": "Lord William Bentinck served as the first Governor-General of India from 1828 to 1835 [citation:8]."
  },
  {
    "id": 2,
    "question": "Who is called the Father of the Indian Constitution?",
    "options": ["Mahatma Gandhi", "Jawaharlal Nehru", "Dr. B. R. Ambedkar", "Sardar Vallabhbhai Patel"],
    "correctAnswer": 2,
    "explanation": "Dr. B. R. Ambedkar is known as the Father of the Indian Constitution for his role as the chairman of the drafting committee [citation:8]."
  },
  {
    "id": 3,
    "question": "Who founded the Maurya Empire?",
    "options": ["Ashoka", "Chandragupta Maurya", "Bindusara", "Harsha"],
    "correctAnswer": 1,
    "explanation": "Chandragupta Maurya founded the Maurya Empire in 322 BCE, establishing the first major empire in ancient India [citation:8]."
  },
  {
    "id": 4,
    "question": "In which year did the Revolt of 1857 take place?",
    "options": ["1857", "1858", "1856", "1860"],
    "correctAnswer": 0,
    "explanation": "The Indian Rebellion of 1857, also known as the Sepoy Mutiny, began in May 1857 against the rule of the British East India Company [citation:8]."
  },
  {
    "id": 5,
    "question": "Who gave the slogan 'Do or Die'?",
    "options": ["Subhas Chandra Bose", "Bhagat Singh", "Mahatma Gandhi", "Jawaharlal Nehru"],
    "correctAnswer": 2,
    "explanation": "Mahatma Gandhi gave the slogan 'Do or Die' (Karo Ya Maro) during the Quit India Movement in 1942 [citation:8]."
  },
  {
    "id": 6,
    "question": "Where was the Jallianwala Bagh massacre held?",
    "options": ["Delhi", "Lahore", "Amritsar", "Lucknow"],
    "correctAnswer": 2,
    "explanation": "The Jallianwala Bagh massacre occurred on April 13, 1919, in Amritsar, Punjab, when British troops fired on a peaceful gathering [citation:8]."
  },
  {
    "id": 7,
    "question": "Who wrote Arthashastra?",
    "options": ["Kalidasa", "Chanakya", "Valmiki", "Vishnu Sharma"],
    "correctAnswer": 1,
    "explanation": "Chanakya (also known as Kautilya) wrote the Arthashastra, an ancient Indian treatise on statecraft, economics, and military strategy [citation:8]."
  },
  {
    "id": 8,
    "question": "Which is the oldest civilisation in India?",
    "options": ["Vedic Civilization", "Mauryan Empire", "Indus Valley Civilisation", "Gupta Empire"],
    "correctAnswer": 2,
    "explanation": "The Indus Valley Civilisation (c. 3300-1300 BCE) is the oldest known civilization in India, known for its advanced urban planning [citation:8]."
  },
  {
    "id": 9,
    "question": "Who was India's first President?",
    "options": ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Jawaharlal Nehru", "V. V. Giri"],
    "correctAnswer": 0,
    "explanation": "Dr. Rajendra Prasad was the first President of independent India, serving from 1950 to 1962 [citation:8]."
  },
  {
    "id": 10,
    "question": "When did India gain independence?",
    "options": ["26 January 1950", "15 August 1947", "15 August 1945", "26 January 1947"],
    "correctAnswer": 1,
    "explanation": "India gained independence from British rule on 15 August 1947, following the Indian Independence Act of 1947 [citation:8]."
  },
  {
    "id": 11,
    "question": "Who was the first Indian woman to become President of India?",
    "options": ["Indira Gandhi", "Pratibha Patil", "Sarojini Naidu", "Droupadi Murmu"],
    "correctAnswer": 1,
    "explanation": "Pratibha Patil served as the first woman President of India from 2007 to 2012 [citation:8]."
  },
  {
    "id": 12,
    "question": "Who is known as Iron Man of India?",
    "options": ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Lal Bahadur Shastri", "Subhas Chandra Bose"],
    "correctAnswer": 1,
    "explanation": "Sardar Vallabhbhai Patel is known as the Iron Man of India for his leadership in integrating the princely states into the Indian Union [citation:8]."
  },
  {
    "id": 13,
    "question": "Which king built the Qutub Minar?",
    "options": ["Akbar", "Shah Jahan", "Qutb-ud-din Aibak", "Alauddin Khilji"],
    "correctAnswer": 2,
    "explanation": "Qutb-ud-din Aibak, the founder of the Delhi Sultanate, started the construction of Qutub Minar in the early 13th century [citation:8]."
  },
  {
    "id": 14,
    "question": "Who founded the Mughal Empire?",
    "options": ["Akbar", "Babur", "Humayun", "Shah Jahan"],
    "correctAnswer": 1,
    "explanation": "Babur founded the Mughal Empire in 1526 after defeating Ibrahim Lodi in the First Battle of Panipat [citation:8]."
  },
  {
    "id": 15,
    "question": "Which social reformer started the Brahmo Samaj?",
    "options": ["Swami Vivekananda", "Dayanand Saraswati", "Raja Ram Mohan Roy", "Ishwar Chandra Vidyasagar"],
    "correctAnswer": 2,
    "explanation": "Raja Ram Mohan Roy, known as the Father of Modern India, founded the Brahmo Samaj in 1828 to reform Hindu society [citation:8]."
  },
  {
    "id": 16,
    "question": "Who was the first Indian to win a Nobel Prize?",
    "options": ["C. V. Raman", "Rabindranath Tagore", "Amartya Sen", "Mother Teresa"],
    "correctAnswer": 1,
    "explanation": "Rabindranath Tagore was the first Indian to receive the Nobel Prize in Literature in 1913 for Gitanjali [citation:8]."
  },
  {
    "id": 17,
    "question": "In which year was the Battle of Plassey fought?",
    "options": ["1757", "1764", "1761", "1746"],
    "correctAnswer": 0,
    "explanation": "The Battle of Plassey was fought in 1757 between the British East India Company and Siraj-ud-Daulah, marking the beginning of British rule in India [citation:8]."
  },
  {
    "id": 18,
    "question": "Who built the Taj Mahal?",
    "options": ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
    "correctAnswer": 2,
    "explanation": "Shah Jahan built the Taj Mahal in Agra between 1632 and 1653 in memory of his wife Mumtaz Mahal [citation:8]."
  },
  {
    "id": 19,
    "question": "Who introduced the Doctrine of Lapse?",
    "options": ["Lord Wellesley", "Lord Dalhousie", "Lord Cornwallis", "Lord Hastings"],
    "correctAnswer": 1,
    "explanation": "Lord Dalhousie introduced the Doctrine of Lapse, allowing the British to annex princely states without a natural heir [citation:8]."
  },
  {
    "id": 20,
    "question": "Who started the Quit India Movement?",
    "options": ["Subhas Chandra Bose", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel"],
    "correctAnswer": 2,
    "explanation": "Mahatma Gandhi launched the Quit India Movement in August 1942, demanding an end to British rule in India [citation:8]."
  },
  {
    "id": 21,
    "question": "Who was the first woman ruler of Delhi?",
    "options": ["Noor Jahan", "Razia Sultan", "Mumtaz Mahal", "Jahanara Begum"],
    "correctAnswer": 1,
    "explanation": "Razia Sultan, daughter of Iltutmish, was the first and only woman to rule the Delhi Sultanate from 1236 to 1240 [citation:8]."
  },
  {
    "id": 22,
    "question": "Which Indian leader is called Netaji?",
    "options": ["Jawaharlal Nehru", "Subhas Chandra Bose", "Bhagat Singh", "Chandrashekhar Azad"],
    "correctAnswer": 1,
    "explanation": "Subhas Chandra Bose is respectfully called Netaji, a title given to him for his leadership of the Indian National Army [citation:8]."
  },
  {
    "id": 23,
    "question": "When was the Indian National Congress founded?",
    "options": ["1885", "1905", "1857", "1890"],
    "correctAnswer": 0,
    "explanation": "The Indian National Congress was founded in 1885 by A.O. Hume, with W.C. Banerjee as its first president [citation:8]."
  },
  {
    "id": 24,
    "question": "Who was the first Prime Minister of India?",
    "options": ["Mahatma Gandhi", "Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi"],
    "correctAnswer": 1,
    "explanation": "Jawaharlal Nehru was the first Prime Minister of independent India, serving from 1947 until his death in 1964 [citation:8]."
  },
  {
    "id": 25,
    "question": "Who gave the slogan 'Jai Jawan Jai Kisan'?",
    "options": ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Morarji Desai"],
    "correctAnswer": 1,
    "explanation": "Lal Bahadur Shastri gave the slogan 'Jai Jawan Jai Kisan' (Hail the soldier, Hail the farmer) during the Indo-Pak war of 1965 [citation:8]."
  },
  {
    "id": 26,
    "question": "Who introduced Permanent Settlement in Bengal?",
    "options": ["Warren Hastings", "Lord Cornwallis", "Lord Wellesley", "Lord Dalhousie"],
    "correctAnswer": 1,
    "explanation": "Lord Cornwallis introduced the Permanent Settlement system in Bengal in 1793, fixing land revenue permanently [citation:8]."
  },
  {
    "id": 27,
    "question": "Who is known as Frontier Gandhi?",
    "options": ["Mahatma Gandhi", "Khan Abdul Ghaffar Khan", "Maulana Azad", "Abdul Kalam Azad"],
    "correctAnswer": 1,
    "explanation": "Khan Abdul Ghaffar Khan, a close associate of Mahatma Gandhi, was known as Frontier Gandhi for his non-violent resistance in the North-West Frontier Province [citation:8]."
  },
  {
    "id": 28,
    "question": "Who built the Sanchi Stupa?",
    "options": ["Chandragupta Maurya", "Ashoka", "Harsha", "Samudragupta"],
    "correctAnswer": 1,
    "explanation": "Emperor Ashoka built the Sanchi Stupa in the 3rd century BCE to enshrine Buddhist relics [citation:8]."
  },
  {
    "id": 29,
    "question": "Which was the first newspaper in India?",
    "options": ["The Times of India", "The Hindu", "Bengal Gazette", "The Statesman"],
    "correctAnswer": 2,
    "explanation": "The Bengal Gazette, started by James Augustus Hicky in 1780, was the first newspaper published in India [citation:8]."
  },
  {
    "id": 30,
    "question": "Who is known as Father of Modern India?",
    "options": ["Mahatma Gandhi", "Raja Ram Mohan Roy", "Swami Vivekananda", "Jawaharlal Nehru"],
    "correctAnswer": 1,
    "explanation": "Raja Ram Mohan Roy is known as the Father of Modern India for his social and educational reforms in the 19th century [citation:8]."
  },
  {
    "id": 31,
    "question": "Who built the Red Fort in Delhi?",
    "options": ["Akbar", "Shah Jahan", "Jahangir", "Aurangzeb"],
    "correctAnswer": 1,
    "explanation": "Shah Jahan built the Red Fort in Delhi when he shifted his capital from Agra to Shahjahanabad in 1638 [citation:8]."
  },
  {
    "id": 32,
    "question": "Who started the Aligarh Movement?",
    "options": ["Maulana Azad", "Sir Syed Ahmed Khan", "Iqbal", "Muhammad Ali Jinnah"],
    "correctAnswer": 1,
    "explanation": "Sir Syed Ahmed Khan started the Aligarh Movement to promote modern education among Indian Muslims [citation:8]."
  },
  {
    "id": 33,
    "question": "When was the Simon Commission formed?",
    "options": ["1919", "1927", "1928", "1930"],
    "correctAnswer": 1,
    "explanation": "The Simon Commission was formed in 1927 to review constitutional reforms in India, but was boycotted for having no Indian members [citation:8]."
  },
  {
    "id": 34,
    "question": "Which Indian freedom fighter is called Punjab Kesari?",
    "options": ["Bhagat Singh", "Lala Lajpat Rai", "Chandrashekhar Azad", "Rajguru"],
    "correctAnswer": 1,
    "explanation": "Lala Lajpat Rai is respectfully called Punjab Kesari (Lion of Punjab) for his leadership in the freedom struggle [citation:8]."
  },
  {
    "id": 35,
    "question": "Who was the last Mughal Emperor?",
    "options": ["Aurangzeb", "Bahadur Shah Zafar", "Shah Alam II", "Akbar II"],
    "correctAnswer": 1,
    "explanation": "Bahadur Shah Zafar was the last Mughal Emperor, reigning from 1837 to 1857 before being exiled by the British after the Revolt of 1857 [citation:8]."
  },
  {
    "id": 36,
    "question": "Who discovered the sea route to India?",
    "options": ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "James Cook"],
    "correctAnswer": 1,
    "explanation": "Vasco da Gama discovered the sea route to India in 1498, arriving in Calicut and opening direct trade between Europe and India [citation:8]."
  },
  {
    "id": 37,
    "question": "Where did Vasco da Gama land in India?",
    "options": ["Goa", "Bombay", "Calicut", "Cochin"],
    "correctAnswer": 2,
    "explanation": "Vasco da Gama first landed in Calicut (now Kozhikode) on the Malabar Coast of Kerala in 1498 [citation:8]."
  },
  {
    "id": 38,
    "question": "Who gave the slogan 'Inquilab Zindabad'?",
    "options": ["Mahatma Gandhi", "Bhagat Singh", "Subhas Chandra Bose", "Hasrat Mohani"],
    "correctAnswer": 1,
    "explanation": "Bhagat Singh popularized the slogan 'Inquilab Zindabad' (Long Live the Revolution) during India's freedom struggle [citation:8]."
  },
  {
    "id": 39,
    "question": "Who was the founder of Arya Samaj?",
    "options": ["Raja Ram Mohan Roy", "Swami Dayanand Saraswati", "Swami Vivekananda", "Ramakrishna Paramahamsa"],
    "correctAnswer": 1,
    "explanation": "Swami Dayanand Saraswati founded the Arya Samaj in 1875, a Hindu reform movement advocating a return to Vedic principles [citation:8]."
  },
  {
    "id": 40,
    "question": "Who wrote the book 'India Wins Freedom'?",
    "options": ["Jawaharlal Nehru", "Maulana Abul Kalam Azad", "Mahatma Gandhi", "Sardar Patel"],
    "correctAnswer": 1,
    "explanation": "Maulana Abul Kalam Azad wrote 'India Wins Freedom', an account of India's struggle for independence [citation:8]."
  },
  {
    "id": 41,
    "question": "Who started the Home Rule Movement?",
    "options": ["Bal Gangadhar Tilak", "Annie Besant", "Both Tilak and Annie Besant", "Gopal Krishna Gokhale"],
    "correctAnswer": 2,
    "explanation": "The Home Rule Movement was started by both Bal Gangadhar Tilak and Annie Besant in 1916 to demand self-governance [citation:8]."
  },
  {
    "id": 42,
    "question": "Who was the Viceroy during the partition of Bengal?",
    "options": ["Lord Curzon", "Lord Minto", "Lord Hardinge", "Lord Chelmsford"],
    "correctAnswer": 0,
    "explanation": "Lord Curzon was the Viceroy of India when the partition of Bengal was announced in 1905, leading to widespread protests [citation:8]."
  },
  {
    "id": 43,
    "question": "Which king built the Charminar?",
    "options": ["Qutb Shah", "Sultan Muhammad Quli Qutb Shah", "Ibrahim Qutb Shah", "Abdullah Qutb Shah"],
    "correctAnswer": 1,
    "explanation": "Sultan Muhammad Quli Qutb Shah built the Charminar in 1591 in Hyderabad to commemorate the end of a plague epidemic [citation:8]."
  },
  {
    "id": 44,
    "question": "Who founded the Ramakrishna Mission?",
    "options": ["Ramakrishna Paramahamsa", "Swami Vivekananda", "Swami Dayanand", "Swami Shraddhanand"],
    "correctAnswer": 1,
    "explanation": "Swami Vivekananda founded the Ramakrishna Mission in 1897 to carry forward the teachings of his guru Ramakrishna Paramahamsa [citation:8]."
  },
  {
    "id": 45,
    "question": "Who started the Bhoodan Movement?",
    "options": ["Jayaprakash Narayan", "Vinoba Bhave", "Ram Manohar Lohia", "Acharya Kripalani"],
    "correctAnswer": 1,
    "explanation": "Vinoba Bhave started the Bhoodan (Land Gift) Movement in 1951, encouraging landowners to voluntarily donate land to landless peasants [citation:8]."
  },
  {
    "id": 46,
    "question": "What was the largest contiguous empire in history?",
    "options": ["Roman Empire", "British Empire", "Mongol Empire", "Ottoman Empire"],
    "correctAnswer": 2,
    "explanation": "The Mongol Empire, founded by Genghis Khan, was the largest contiguous land empire in history [citation:1]."
  },
  {
    "id": 47,
    "question": "When was the Declaration of Independence signed?",
    "options": ["4 July 1776", "2 August 1776", "4 July 1776 – 2 August 1776", "2 August 1776 – 4 July 1776"],
    "correctAnswer": 2,
    "explanation": "The Declaration of Independence was signed between 4 July 1776 and 2 August 1776, with most delegates signing on August 2 [citation:1]."
  },
  {
    "id": 48,
    "question": "What started the Great Chicago Fire of 1871?",
    "options": ["A lantern in a barn", "The exact cause remains a mystery", "A gas explosion", "Arson by a political opponent"],
    "correctAnswer": 1,
    "explanation": "While the fire started in a barn owned by the O'Leary family, the exact cause of the Great Chicago Fire remains a mystery [citation:1]."
  },
  {
    "id": 49,
    "question": "Why does the Liberty Bell have a crack?",
    "options": ["It was damaged during transport", "The metal was too brittle and it cracked during testing", "It was hit by cannon fire", "It cracked during the Revolutionary War"],
    "correctAnswer": 1,
    "explanation": "The Liberty Bell cracked during a test strike because the metal was too brittle, and it had to be recast twice [citation:1]."
  },
  {
    "id": 50,
    "question": "When did the American Civil War end?",
    "options": ["12 April 1861", "9 April 1865", "12 April 1865", "9 April 1861"],
    "correctAnswer": 1,
    "explanation": "The American Civil War began on April 12, 1861, and ended on April 9, 1865, when General Lee surrendered at Appomattox [citation:1]."
  },
  {
    "id": 51,
    "question": "Which of the following was a leader of the Mughal Empire?",
    "options": ["Genghis Khan", "Akbar", "Suleiman", "Cyrus the Great"],
    "correctAnswer": 1,
    "explanation": "Akbar was one of the greatest leaders of the Mughal Empire, reigning from 1556 to 1605 [citation:2]."
  },
  {
    "id": 52,
    "question": "The Mongol conqueror Tamerlane centered his empire around which city?",
    "options": ["Baghdad", "Samarkand", "Damascus", "Tehran"],
    "correctAnswer": 1,
    "explanation": "Samarkand, now in Uzbekistan, was the wealthy capital of Tamerlane's empire [citation:2]."
  },
  {
    "id": 53,
    "question": "The purpose of the Berlin Conference of 1884 was to",
    "options": ["End World War I", "Carve up Africa among European powers", "Establish trade with China", "Form the League of Nations"],
    "correctAnswer": 1,
    "explanation": "The Berlin Conference of 1884-85 regulated European colonization and trade in Africa, carving up the continent among European powers [citation:2]."
  },
  {
    "id": 54,
    "question": "Who became Führer after Hitler committed suicide?",
    "options": ["Hermann Göring", "Heinrich Himmler", "Karl Doenitz", "Joseph Goebbels"],
    "correctAnswer": 2,
    "explanation": "Karl Doenitz became Germany's leader after Hitler's suicide and ordered the unconditional surrender of Germany to the Allies [citation:2]."
  },
  {
    "id": 55,
    "question": "Which of the following was NOT a ruler of Cambodia?",
    "options": ["Pol Pot", "Prince Sihanouk", "Angkor Wat", "France"],
    "correctAnswer": 2,
    "explanation": "Angkor Wat is a temple in Cambodia, not a ruler. Pol Pot, Prince Sihanouk, and France all ruled Cambodia at various times [citation:2]."
  }

      ,
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
        
{ 
  id: 1, 
  question: "What is the primary purpose of government?", 
  options: ["To entertain citizens", "To organize and manage society", "To avoid taxes", "To control the weather"], 
  correctAnswer: 1, 
  explanation: "The government exists to organize society, create laws, and provide public services." 
},
{ 
  id: 2, 
  question: "Which document is considered the supreme law of the United States?", 
  options: ["Declaration of Independence", "The Constitution", "Bill of Rights", "Emancipation Proclamation"], 
  correctAnswer: 1, 
  explanation: "The U.S. Constitution is the supreme law that governs the country." 
},
{ 
  id: 3, 
  question: "What are the three branches of government in the United States?", 
  options: ["Legislative, Judicial, Executive", "Federal, State, Local", "Monarchy, Parliament, Judiciary", "Police, Army, Senate"], 
  correctAnswer: 0, 
  explanation: "The three branches are Legislative (makes laws), Executive (enforces laws), Judicial (interprets laws)." 
},
{ 
  id: 4, 
  question: "Which right is guaranteed by the First Amendment?", 
  options: ["Right to bear arms", "Freedom of speech", "Right to vote", "Right to property"], 
  correctAnswer: 1, 
  explanation: "The First Amendment guarantees freedoms such as speech, religion, and assembly." 
},
{ 
  id: 5, 
  question: "Who is considered the head of state in a parliamentary system?", 
  options: ["Prime Minister", "President", "Monarch or ceremonial leader", "Speaker of Parliament"], 
  correctAnswer: 2, 
  explanation: "In many parliamentary systems, the monarch or ceremonial leader is the head of state." 
},
{ 
  id: 6, 
  question: "Which system divides power between national and state governments?", 
  options: ["Unitary system", "Federal system", "Confederation", "Monarchy"], 
  correctAnswer: 1, 
  explanation: "A federal system shares power between central and regional governments." 
},
{ 
  id: 7, 
  question: "What is the main responsibility of a citizen?", 
  options: ["Paying taxes, obeying laws, participating in civic life", "Traveling internationally", "Owning property", "Running for office"], 
  correctAnswer: 0, 
  explanation: "Citizens have duties such as obeying laws, paying taxes, and participating in civic duties." 
},
{ 
  id: 8, 
  question: "Which international organization promotes peace and security?", 
  options: ["World Trade Organization", "United Nations", "NATO", "IMF"], 
  correctAnswer: 1, 
  explanation: "The United Nations aims to maintain international peace and security." 
},
{ 
  id: 9, 
  question: "What is the principle of separation of powers?", 
  options: ["Power is concentrated in one branch", "Government powers are divided among branches", "The legislature has all power", "The judiciary controls taxes"], 
  correctAnswer: 1, 
  explanation: "Separation of powers prevents one branch from gaining too much authority." 
},
{ 
  id: 10, 
  question: "What is a democracy?", 
  options: ["Government by a single ruler", "Government by the wealthy", "Government by the people", "Government by military only"], 
  correctAnswer: 2, 
  explanation: "In a democracy, power is exercised by the people through voting and participation." 
},
{ 
  id: 11, 
  question: "Which civic responsibility involves participating in elections?", 
  options: ["Voting", "Paying fines", "Obeying traffic rules", "Running a business"], 
  correctAnswer: 0, 
  explanation: "Voting is a key responsibility in a democratic system." 
},
{ 
  id: 12, 
  question: "What is the purpose of a constitution?", 
  options: ["To regulate traffic", "To define government structure and citizens' rights", "To collect taxes", "To organize sports events"], 
  correctAnswer: 1, 
  explanation: "A constitution establishes government structure and protects citizens' rights." 
},
{ 
  id: 13, 
  question: "Which type of government is ruled by one person?", 
  options: ["Democracy", "Monarchy", "Autocracy", "Oligarchy"], 
  correctAnswer: 2, 
  explanation: "An autocracy is ruled by a single individual with absolute power." 
},
{ 
  id: 14, 
  question: "What is civil society?", 
  options: ["Government agencies", "Community organizations and citizens’ groups", "Military units", "Courts"], 
  correctAnswer: 1, 
  explanation: "Civil society includes non-governmental organizations and citizen groups that engage in social and political life." 
},
{ 
  id: 15, 
  question: "Which right allows citizens to express their opinions publicly?", 
  options: ["Freedom of speech", "Right to bear arms", "Right to property", "Right to a fair trial"], 
  correctAnswer: 0, 
  explanation: "Freedom of speech allows individuals to express their views freely." 
},
{ 
  id: 16, 
  question: "What is the role of the judiciary?", 
  options: ["Enforce laws", "Make laws", "Interpret laws", "Collect taxes"], 
  correctAnswer: 2, 
  explanation: "The judiciary interprets laws and ensures they are applied fairly." 
},
{ 
  id: 17, 
  question: "Which form of government is based on the rule of law?", 
  options: ["Democracy", "Aristocracy", "Dictatorship", "Monarchy"], 
  correctAnswer: 0, 
  explanation: "Democracies are based on laws that apply equally to all citizens." 
},
{ 
  id: 18, 
  question: "What is civic engagement?", 
  options: ["Voting, volunteering, participating in community activities", "Paying taxes only", "Traveling abroad", "Running businesses"], 
  correctAnswer: 0, 
  explanation: "Civic engagement involves participating actively in the community and governance." 
},
{ 
  id: 19, 
  question: "What does 'rule of law' mean?", 
  options: ["Government leaders are above the law", "Everyone is subject to the law", "Law applies only to citizens", "Law changes daily"], 
  correctAnswer: 1, 
  explanation: "Rule of law means all people, including leaders, must obey the law." 
},
{ 
  id: 20, 
  question: "Which type of democracy allows citizens to vote directly on laws?", 
  options: ["Representative democracy", "Direct democracy", "Monarchy", "Autocracy"], 
  correctAnswer: 1, 
  explanation: "In direct democracy, citizens vote on laws themselves rather than electing representatives." 
},
{ 
  id: 21, 
  question: "What is the main function of local government?", 
  options: ["Manage community services like schools and roads", "Declare war", "Print money", "Set national foreign policy"], 
  correctAnswer: 0, 
  explanation: "Local governments manage services and infrastructure within communities." 
},
{ 
  id: 22, 
  question: "Which principle limits government power through checks and balances?", 
  options: ["Separation of powers", "Popular sovereignty", "Rule by majority", "Civil rights"], 
  correctAnswer: 0, 
  explanation: "Separation of powers divides authority among branches and ensures checks and balances." 
},
{ 
  id: 23, 
  question: "What is the significance of voting in a democracy?", 
  options: ["It chooses government leaders and influences policies", "It is only symbolic", "It pays taxes", "It enforces laws"], 
  correctAnswer: 0, 
  explanation: "Voting allows citizens to choose representatives and influence decisions." 
},
{ 
  id: 24, 
  question: "Which document guarantees basic human rights internationally?", 
  options: ["Universal Declaration of Human Rights", "Magna Carta", "Constitution", "Declaration of Independence"], 
  correctAnswer: 0, 
  explanation: "The Universal Declaration of Human Rights (1948) sets international human rights standards." 
},
{ 
  id: 25, 
  question: "What is civic duty?", 
  options: ["Optional hobbies", "Responsibilities of citizens to society", "Earning money", "Travelling abroad"], 
  correctAnswer: 1, 
  explanation: "Civic duty includes obligations like obeying laws, paying taxes, and participating in civic life." 
}

        ,
      { id: 26, question: "What is the role of the House of Federation?", options: ["Represents nations and nationalities", "Makes laws", "Commands military", "Manages economy"], correctAnswer: 0, explanation: "The House of Federation represents the nations, nationalities and peoples of Ethiopia and interprets the constitution." },
      { id: 27, question: "What ethical principle emphasizes treating others fairly?", options: ["Justice", "Charity", "Loyalty", "Courage"], correctAnswer: 0, explanation: "Justice is the ethical principle of treating others fairly and giving them what they deserve." },
      { id: 28, question: "What is civic responsibility?", options: ["Duties citizens owe to their community", "Government obligations", "International relations", "Economic duties"], correctAnswer: 0, explanation: "Civic responsibility refers to the duties and obligations that citizens have towards their community and nation." },
      { id: 29, question: "What is the purpose of the Ethiopian Human Rights Commission?", options: ["Protect and promote human rights", "Make laws", "Conduct elections", "Manage economy"], correctAnswer: 0, explanation: "The Ethiopian Human Rights Commission is established to protect and promote human rights in Ethiopia." },
      { id: 30, question: "What is the significance of tolerance in a diverse society?", options: ["Accepting differences peacefully", "Ignoring others", "Imposing beliefs", "Avoiding interaction"], correctAnswer: 0, explanation: "Tolerance means accepting and respecting differences among people, essential for peaceful coexistence in diverse societies." },
       
      ],
      final:
       [
  {
    "id": 1,
    "question": "When did the Constitution of India come into effect?",
    "options": ["15 August 1947", "26 January 1950", "26 November 1949", "30 January 1948"],
    "correctAnswer": 1,
    "explanation": "The Constitution of India came into effect on 26 January 1950, which is celebrated as Republic Day."
  },
  {
    "id": 2,
    "question": "How many schedules does the Indian Constitution contain?",
    "options": ["10", "12", "14", "8"],
    "correctAnswer": 1,
    "explanation": "The Indian Constitution originally had 8 schedules, but currently contains 12 schedules."
  },
  {
    "id": 3,
    "question": "Which of the following is NOT a fundamental right?",
    "options": ["Right to Equality", "Right to Freedom", "Right to Property", "Right against Exploitation"],
    "correctAnswer": 2,
    "explanation": "Right to Property was originally a fundamental right but was removed by the 44th Amendment Act, 1978 and is now a legal right under Article 300A."
  },
  {
    "id": 4,
    "question": "Who is the father of the Indian Constitution?",
    "options": ["Mahatma Gandhi", "Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Sardar Vallabhbhai Patel"],
    "correctAnswer": 2,
    "explanation": "Dr. B.R. Ambedkar is known as the father of the Indian Constitution for his role as the Chairman of the Drafting Committee."
  },
  {
    "id": 5,
    "question": "What is the minimum age to become the Prime Minister of India?",
    "options": ["25 years", "30 years", "35 years", "21 years"],
    "correctAnswer": 0,
    "explanation": "The minimum age to become the Prime Minister of India is 25 years, as they must be a member of Lok Sabha or Rajya Sabha."
  },
  {
    "id": 6,
    "question": "How many members can the President nominate to the Rajya Sabha?",
    "options": ["10", "12", "14", "16"],
    "correctAnswer": 1,
    "explanation": "The President can nominate 12 members to the Rajya Sabha from among persons having special knowledge or practical experience in literature, science, art and social service."
  },
  {
    "id": 7,
    "question": "Who appoints the Chief Election Commissioner of India?",
    "options": ["Prime Minister", "President", "Chief Justice of India", "Parliament"],
    "correctAnswer": 1,
    "explanation": "The President of India appoints the Chief Election Commissioner and other Election Commissioners."
  },
  {
    "id": 8,
    "question": "What is the term of office of the President of India?",
    "options": ["4 years", "5 years", "6 years", "3 years"],
    "correctAnswer": 1,
    "explanation": "The President of India holds office for a term of 5 years from the date on which they enter their office."
  },
  {
    "id": 9,
    "question": "Which article of the Indian Constitution abolishes untouchability?",
    "options": ["Article 14", "Article 15", "Article 17", "Article 18"],
    "correctAnswer": 2,
    "explanation": "Article 17 abolishes 'untouchability' and forbids its practice in any form."
  },
  {
    "id": 10,
    "question": "Who was the first woman Chief Minister of an Indian state?",
    "options": ["Indira Gandhi", "Sucheta Kripalani", "Mayawati", "Jayalalithaa"],
    "correctAnswer": 1,
    "explanation": "Sucheta Kripalani was the first woman Chief Minister, serving as the CM of Uttar Pradesh from 1963 to 1967."
  },
  {
    "id": 11,
    "question": "How many schedules were there in the original Constitution of India?",
    "options": ["8", "9", "10", "12"],
    "correctAnswer": 0,
    "explanation": "The original Constitution of India had 8 schedules."
  },
  {
    "id": 12,
    "question": "Which of the following is a political right?",
    "options": ["Right to vote", "Right to property", "Right to education", "Right to equality"],
    "correctAnswer": 0,
    "explanation": "Right to vote is a political right that enables citizens to participate in the democratic process."
  },
  {
    "id": 13,
    "question": "Who has the power to declare war or peace under the Indian Constitution?",
    "options": ["Prime Minister", "President", "Parliament", "Defence Minister"],
    "correctAnswer": 1,
    "explanation": "The President of India is the Supreme Commander of the Armed Forces and has the power to declare war or peace."
  },
  {
    "id": 14,
    "question": "What is the minimum age to vote in India?",
    "options": ["18 years", "21 years", "25 years", "16 years"],
    "correctAnswer": 0,
    "explanation": "The minimum age to vote in India is 18 years, as per the 61st Amendment Act, 1988 which reduced it from 21 years."
  },
  {
    "id": 15,
    "question": "Who appoints the Governor of a state?",
    "options": ["Prime Minister", "Chief Minister", "President", "Home Minister"],
    "correctAnswer": 2,
    "explanation": "The Governor of a state is appointed by the President of India and holds office during the pleasure of the President."
  },
  {
    "id": 16,
    "question": "Which of the following is NOT a fundamental duty?",
    "options": ["To abide by the Constitution", "To protect the environment", "To pay taxes", "To defend the country"],
    "correctAnswer": 2,
    "explanation": "Paying taxes is a legal duty, not a fundamental duty. Fundamental duties are listed in Article 51A."
  },
  {
    "id": 17,
    "question": "What is the maximum strength of the Lok Sabha?",
    "options": ["545", "552", "550", "543"],
    "correctAnswer": 1,
    "explanation": "The maximum strength of the Lok Sabha is 552 members: 530 from states, 20 from union territories, and 2 nominated from the Anglo-Indian community."
  },
  {
    "id": 18,
    "question": "Who is the ex-officio Chairman of the Rajya Sabha?",
    "options": ["President", "Prime Minister", "Vice President", "Speaker"],
    "correctAnswer": 2,
    "explanation": "The Vice President of India is the ex-officio Chairman of the Rajya Sabha."
  },
  {
    "id": 19,
    "question": "Under which article can the President promulgate an ordinance?",
    "options": ["Article 352", "Article 356", "Article 123", "Article 370"],
    "correctAnswer": 2,
    "explanation": "Article 123 gives the President the power to promulgate ordinances when Parliament is not in session."
  },
  {
    "id": 20,
    "question": "What is the term of a member of the Rajya Sabha?",
    "options": ["5 years", "6 years", "4 years", "3 years"],
    "correctAnswer": 1,
    "explanation": "Members of the Rajya Sabha have a term of 6 years, with one-third of the members retiring every two years."
  },
  {
    "id": 21,
    "question": "Who was the first Speaker of the Lok Sabha?",
    "options": ["Sardar Hukam Singh", "G.V. Mavalankar", "M.A. Ayyangar", "Neelam Sanjiva Reddy"],
    "correctAnswer": 1,
    "explanation": "G.V. Mavalankar was the first Speaker of the Lok Sabha (1952-1956)."
  },
  {
    "id": 22,
    "question": "Which part of the Indian Constitution deals with fundamental rights?",
    "options": ["Part I", "Part III", "Part IV", "Part II"],
    "correctAnswer": 1,
    "explanation": "Part III of the Indian Constitution (Articles 12-35) deals with fundamental rights."
  },
  {
    "id": 23,
    "question": "What is the literal meaning of 'Lok Sabha'?",
    "options": ["Council of States", "House of the People", "Upper House", "Legislative Assembly"],
    "correctAnswer": 1,
    "explanation": "'Lok Sabha' literally means 'House of the People' in Hindi."
  },
  {
    "id": 24,
    "question": "Who appoints the judges of the Supreme Court?",
    "options": ["Prime Minister", "Chief Justice of India", "President", "Law Minister"],
    "correctAnswer": 2,
    "explanation": "The President of India appoints the judges of the Supreme Court after consultation with the Chief Justice and other judges."
  },
  {
    "id": 25,
    "question": "What is the retirement age of a judge of the Supreme Court?",
    "options": ["62 years", "65 years", "60 years", "68 years"],
    "correctAnswer": 1,
    "explanation": "A judge of the Supreme Court retires at the age of 65 years."
  },
  {
    "id": 26,
    "question": "Which of the following is a Directive Principle of State Policy?",
    "options": ["Right to equality", "Right to freedom of speech", "Right to work", "Right to constitutional remedies"],
    "correctAnswer": 2,
    "explanation": "Right to work is a Directive Principle under Article 41, while the others are fundamental rights."
  },
  {
    "id": 27,
    "question": "How many types of emergencies are mentioned in the Indian Constitution?",
    "options": ["2", "3", "4", "5"],
    "correctAnswer": 1,
    "explanation": "The Indian Constitution mentions three types of emergencies: National Emergency (Article 352), State Emergency (Article 356), and Financial Emergency (Article 360)."
  },
  {
    "id": 28,
    "question": "Who has the power to dissolve the Lok Sabha?",
    "options": ["Prime Minister", "Speaker", "President", "Vice President"],
    "correctAnswer": 2,
    "explanation": "The President of India has the power to dissolve the Lok Sabha."
  },
  {
    "id": 29,
    "question": "What is the minimum age to become the Governor of a state?",
    "options": ["25 years", "30 years", "35 years", "40 years"],
    "correctAnswer": 2,
    "explanation": "The minimum age to become the Governor of a state is 35 years."
  },
  {
    "id": 30,
    "question": "Who is known as the first law officer of India?",
    "options": ["Attorney General", "Solicitor General", "Law Minister", "Chief Justice"],
    "correctAnswer": 0,
    "explanation": "The Attorney General of India is the first law officer of the country."
  },
  {
    "id": 31,
    "question": "Which amendment is known as the 'Mini-Constitution'?",
    "options": ["42nd Amendment", "44th Amendment", "52nd Amendment", "73rd Amendment"],
    "correctAnswer": 0,
    "explanation": "The 42nd Amendment Act (1976) is known as the 'Mini-Constitution' due to the numerous changes it made to the Constitution."
  },
  {
    "id": 32,
    "question": "What is the Preamble of the Indian Constitution?",
    "options": ["A list of fundamental rights", "An introduction that states the objectives of the Constitution", "A set of directive principles", "A schedule of languages"],
    "correctAnswer": 1,
    "explanation": "The Preamble is an introduction to the Constitution that states its objectives, guiding principles, and the source of authority."
  },
  {
    "id": 33,
    "question": "Who was the President of the Constituent Assembly?",
    "options": ["Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Dr. Rajendra Prasad", "Sardar Patel"],
    "correctAnswer": 2,
    "explanation": "Dr. Rajendra Prasad was the President of the Constituent Assembly."
  },
  {
    "id": 34,
    "question": "How many members signed the Indian Constitution?",
    "options": ["284", "389", "250", "299"],
    "correctAnswer": 0,
    "explanation": "A total of 284 members of the Constituent Assembly signed the Indian Constitution."
  },
  {
    "id": 35,
    "question": "Which article abolishes titles in India?",
    "options": ["Article 14", "Article 17", "Article 18", "Article 15"],
    "correctAnswer": 2,
    "explanation": "Article 18 abolishes titles, except military and academic distinctions."
  },
  {
    "id": 36,
    "question": "Who decides the disqualification of members of Parliament under the anti-defection law?",
    "options": ["President", "Speaker", "Chief Election Commissioner", "Supreme Court"],
    "correctAnswer": 1,
    "explanation": "The Speaker of the House decides the disqualification of members under the anti-defection law."
  },
  {
    "id": 37,
    "question": "What is the term of the Vice President of India?",
    "options": ["4 years", "5 years", "6 years", "3 years"],
    "correctAnswer": 1,
    "explanation": "The Vice President of India holds office for a term of 5 years."
  },
  {
    "id": 38,
    "question": "Which schedule of the Constitution contains the three lists: Union, State, and Concurrent?",
    "options": ["Fifth Schedule", "Seventh Schedule", "Eighth Schedule", "Tenth Schedule"],
    "correctAnswer": 1,
    "explanation": "The Seventh Schedule contains the Union List, State List, and Concurrent List."
  },
  {
    "id": 39,
    "question": "Who is the Supreme Commander of the Defence Forces of India?",
    "options": ["Prime Minister", "Defence Minister", "President", "Chief of Army Staff"],
    "correctAnswer": 2,
    "explanation": "The President of India is the Supreme Commander of the Defence Forces."
  },
  {
    "id": 40,
    "question": "What is the retirement age of a judge of the High Court?",
    "options": ["60 years", "62 years", "65 years", "58 years"],
    "correctAnswer": 1,
    "explanation": "A judge of the High Court retires at the age of 62 years."
  },
  {
    "id": 41,
    "question": "Which article deals with the Uniform Civil Code?",
    "options": ["Article 44", "Article 40", "Article 48", "Article 51"],
    "correctAnswer": 0,
    "explanation": "Article 44, a Directive Principle, states that the State shall endeavor to secure a Uniform Civil Code for citizens."
  },
  {
    "id": 42,
    "question": "Who appoints the Chief Justice of India?",
    "options": ["Prime Minister", "Law Minister", "President", "Outgoing Chief Justice"],
    "correctAnswer": 2,
    "explanation": "The President of India appoints the Chief Justice of India."
  },
  {
    "id": 43,
    "question": "How many languages are recognized in the Eighth Schedule of the Indian Constitution?",
    "options": ["18", "22", "15", "20"],
    "correctAnswer": 1,
    "explanation": "Currently, the Eighth Schedule recognizes 22 languages."
  },
  {
    "id": 44,
    "question": "What is the maximum gap between two sessions of Parliament?",
    "options": ["3 months", "6 months", "4 months", "5 months"],
    "correctAnswer": 1,
    "explanation": "The maximum gap between two sessions of Parliament is 6 months."
  },
  {
    "id": 45,
    "question": "Which part of the Indian Constitution deals with the Directive Principles of State Policy?",
    "options": ["Part III", "Part IV", "Part II", "Part V"],
    "correctAnswer": 1,
    "explanation": "Part IV (Articles 36-51) deals with the Directive Principles of State Policy."
  },
  {
    "id": 46,
    "question": "Who was the first woman Governor of an Indian state?",
    "options": ["Sarojini Naidu", "Vijaya Lakshmi Pandit", "Sucheta Kripalani", "Indira Gandhi"],
    "correctAnswer": 0,
    "explanation": "Sarojini Naidu was the first woman Governor, serving as the Governor of Uttar Pradesh from 1947 to 1949."
  },
  {
    "id": 47,
    "question": "What is the literal meaning of 'Rajya Sabha'?",
    "options": ["House of the People", "Council of States", "Upper House", "Legislative Council"],
    "correctAnswer": 1,
    "explanation": "'Rajya Sabha' literally means 'Council of States' in Hindi."
  },
  {
    "id": 48,
    "question": "Which article guarantees the right to education as a fundamental right?",
    "options": ["Article 21", "Article 21A", "Article 45", "Article 19"],
    "correctAnswer": 1,
    "explanation": "Article 21A, inserted by the 86th Amendment Act, guarantees the right to education as a fundamental right for children aged 6-14 years."
  },
  {
    "id": 49,
    "question": "Who has the power to grant pardons, reprieves, or remissions of punishment?",
    "options": ["Prime Minister", "Chief Justice", "President", "Home Minister"],
    "correctAnswer": 2,
    "explanation": "The President has the power to grant pardons, reprieves, respites, or remissions of punishment under Article 72."
  },
  {
    "id": 50,
    "question": "How many members are nominated to the Lok Sabha by the President?",
    "options": ["2", "4", "6", "0"],
    "correctAnswer": 0,
    "explanation": "The President can nominate 2 members to the Lok Sabha from the Anglo-Indian community if they are not adequately represented."
  },
  {
    "id": 51,
    "question": "What is the minimum age to become the President of India?",
    "options": ["30 years", "35 years", "40 years", "45 years"],
    "correctAnswer": 1,
    "explanation": "The minimum age to become the President of India is 35 years."
  },
  {
    "id": 52,
    "question": "Which of the following is NOT a feature of the Indian Constitution?",
    "options": ["Federal system", "Parliamentary government", "Unitary bias", "Presidential system"],
    "correctAnswer": 3,
    "explanation": "India has a parliamentary system of government, not a presidential system."
  },
  {
    "id": 53,
    "question": "Who was the first Chief Election Commissioner of India?",
    "options": ["Sukumar Sen", "K.V.K. Sundaram", "T. Swaminathan", "S.P. Sen Verma"],
    "correctAnswer": 0,
    "explanation": "Sukumar Sen was the first Chief Election Commissioner of India, serving from 1950 to 1958."
  },
  {
    "id": 54,
    "question": "What is the quorum required for the Lok Sabha?",
    "options": ["One-fifth of total members", "One-sixth of total members", "One-tenth of total members", "One-half of total members"],
    "correctAnswer": 2,
    "explanation": "The quorum required for the Lok Sabha is one-tenth of the total membership."
  },
  {
    "id": 55,
    "question": "Which article of the Indian Constitution deals with the impeachment of the President?",
    "options": ["Article 61", "Article 56", "Article 71", "Article 62"],
    "correctAnswer": 0,
    "explanation": "Article 61 provides the procedure for the impeachment of the President of India."
  }

      ,
      { id: 111, question: "What is democratic governance?", options: ["Rule by the people through elected representatives", "Rule by military", "Rule by monarchy", "Rule by religious leaders"], correctAnswer: 0, explanation: "Democratic governance is a system where power derives from the people and is exercised through elected representatives." },
      { id: 121, question: "What is the rule of law?", options: ["Everyone is subject to the law equally", "Laws made by rulers", "Traditional customs", "Religious law"], correctAnswer: 0, explanation: "Rule of law means all persons and institutions, including government, are accountable to laws that are publicly known and equally enforced." },
      { id: 131, question: "What does transparency in government mean?", options: ["Open and accessible decision-making", "Secret operations", "Limited information", "Controlled media"], correctAnswer: 0, explanation: "Transparency means government actions and decisions are open to public scrutiny and information is accessible to citizens." },
      { id: 141, question: "What is good governance?", options: ["Effective, accountable, and inclusive government", "Strong military rule", "Centralized power", "Limited citizen participation"], correctAnswer: 0, explanation: "Good governance involves effective, participatory, transparent, accountable, and inclusive decision-making." },
      { id: 151, question: "What is the purpose of elections in a democracy?", options: ["Allow citizens to choose their leaders", "Confirm existing leaders", "Create conflict", "Distribute wealth"], correctAnswer: 0, explanation: "Elections allow citizens to exercise their democratic right to choose and hold accountable their leaders." }
    ]
  },
  },

  {
    id: "anthropology",
    name: "Introduction-to-Anthropology",
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
      mid: 
      [
{ 
  id: 1, 
  question: "What is anthropology the study of?", 
  options: ["Rocks and minerals", "Humans and their societies", "Stars and planets", "Plants and animals"], 
  correctAnswer: 1, 
  explanation: "Anthropology studies humans, their cultures, societies, and biological aspects." 
},
{ 
  id: 2, 
  question: "Which subfield of anthropology studies human evolution and biology?", 
  options: ["Cultural anthropology", "Archaeology", "Biological/Physical anthropology", "Linguistics"], 
  correctAnswer: 2, 
  explanation: "Biological anthropology focuses on human evolution, genetics, and physical development." 
},
{ 
  id: 3, 
  question: "Which branch studies past human societies through artifacts?", 
  options: ["Archaeology", "Cultural anthropology", "Linguistic anthropology", "Sociology"], 
  correctAnswer: 0, 
  explanation: "Archaeology examines artifacts to understand past human cultures." 
},
{ 
  id: 4, 
  question: "What does cultural anthropology study?", 
  options: ["Languages", "Modern human societies and cultures", "Ancient fossils", "Chemical reactions"], 
  correctAnswer: 1, 
  explanation: "Cultural anthropology focuses on living societies, customs, traditions, and social norms." 
},
{ 
  id: 5, 
  question: "Which anthropologist is famous for studying kinship and social structure?", 
  options: ["Margaret Mead", "Claude Lévi-Strauss", "Jane Goodall", "Franz Boas"], 
  correctAnswer: 1, 
  explanation: "Claude Lévi-Strauss studied social structures and kinship systems." 
},
{ 
  id: 6, 
  question: "Linguistic anthropology studies:", 
  options: ["Human bones", "Human languages and communication", "Human DNA", "Human tools"], 
  correctAnswer: 1, 
  explanation: "Linguistic anthropology examines how language influences culture and social life." 
},
{ 
  id: 7, 
  question: "What is participant observation?", 
  options: ["Reading books about a culture", "Actively participating in a community to study it", "Only taking surveys", "Watching videos online"], 
  correctAnswer: 1, 
  explanation: "Participant observation involves living within a community to understand its culture firsthand." 
},
{ 
  id: 8, 
  question: "Which theory suggests that culture shapes human thought and behavior?", 
  options: ["Cultural relativism", "Natural selection", "Structuralism", "Ethnocentrism"], 
  correctAnswer: 0, 
  explanation: "Cultural relativism emphasizes understanding cultures in their own context." 
},
{ 
  id: 9, 
  question: "Ethnocentrism is:", 
  options: ["Judging another culture by its own standards", "Believing one's culture is superior", "Studying fossils", "Living in a foreign country"], 
  correctAnswer: 1, 
  explanation: "Ethnocentrism is evaluating other cultures as inferior to one’s own." 
},
{ 
  id: 10, 
  question: "Who is considered the 'Father of American Anthropology'?", 
  options: ["Franz Boas", "Margaret Mead", "Claude Lévi-Strauss", "E.B. Tylor"], 
  correctAnswer: 0, 
  explanation: "Franz Boas is recognized for founding modern American anthropology." 
},
{ 
  id: 11, 
  question: "What is applied anthropology?", 
  options: ["Studying artifacts in a lab", "Using anthropological methods to solve practical problems", "Studying fossils only", "Learning languages"], 
  correctAnswer: 1, 
  explanation: "Applied anthropology applies knowledge to address social, economic, and cultural issues." 
},
{ 
  id: 12, 
  question: "Which method is commonly used in cultural anthropology?", 
  options: ["Excavation", "Participant observation", "DNA sequencing", "Carbon dating"], 
  correctAnswer: 1, 
  explanation: "Participant observation is a key method for studying living cultures." 
},
{ 
  id: 13, 
  question: "What does forensic anthropology study?", 
  options: ["Languages", "Human remains for legal purposes", "Ancient cultures", "Plant biology"], 
  correctAnswer: 1, 
  explanation: "Forensic anthropology examines human remains to assist in legal investigations." 
},
{ 
  id: 14, 
  question: "Which subfield of anthropology studies human prehistory?", 
  options: ["Linguistic anthropology", "Archaeology", "Cultural anthropology", "Medical anthropology"], 
  correctAnswer: 1, 
  explanation: "Archaeology studies material evidence to understand prehistoric human life." 
},
{ 
  id: 15, 
  question: "What is enculturation?", 
  options: ["Learning one's culture as a child", "Studying fossils", "Learning a foreign language", "Writing history"], 
  correctAnswer: 0, 
  explanation: "Enculturation is the process by which individuals learn their own culture." 
},
{ 
  id: 16, 
  question: "Which anthropologist studied adolescence in Samoa?", 
  options: ["Franz Boas", "Margaret Mead", "Claude Lévi-Strauss", "E.B. Tylor"], 
  correctAnswer: 1, 
  explanation: "Margaret Mead conducted ethnographic research on Samoan youth and culture." 
},
{ 
  id: 17, 
  question: "What is a fossil?", 
  options: ["A living organism", "Preserved remains or traces of ancient organisms", "A type of soil", "A human artifact"], 
  correctAnswer: 1, 
  explanation: "Fossils are preserved remains or imprints of past life forms." 
},
{ 
  id: 18, 
  question: "Which term refers to the study of human adaptation to environments?", 
  options: ["Cultural anthropology", "Biological anthropology", "Archaeology", "Ethnography"], 
  correctAnswer: 1, 
  explanation: "Biological anthropology examines human adaptation, genetics, and evolution." 
},
{ 
  id: 19, 
  question: "What is the main goal of ethnography?", 
  options: ["To write novels", "To describe and analyze cultures in detail", "To study rocks", "To analyze DNA"], 
  correctAnswer: 1, 
  explanation: "Ethnography involves detailed description and analysis of cultures." 
},
{ 
  id: 20, 
  question: "Which concept emphasizes that cultures should be understood on their own terms?", 
  options: ["Ethnocentrism", "Cultural relativism", "Structuralism", "Functionalism"], 
  correctAnswer: 1, 
  explanation: "Cultural relativism encourages understanding cultures without bias." 
},
{ 
  id: 21, 
  question: "Which tool is commonly used in archaeology?", 
  options: ["Participant observation", "Excavation tools and trowels", "DNA sequencers", "Cameras"], 
  correctAnswer: 1, 
  explanation: "Archaeologists use excavation tools to uncover artifacts." 
},
{ 
  id: 22, 
  question: "What does medical anthropology study?", 
  options: ["Diseases in animals", "Human health, illness, and healthcare practices", "Ancient artifacts", "Languages"], 
  correctAnswer: 1, 
  explanation: "Medical anthropology examines health, disease, and healthcare across cultures." 
},
{ 
  id: 23, 
  question: "Which term refers to the study of human culture and society?", 
  options: ["Physical anthropology", "Cultural anthropology", "Linguistics", "Paleontology"], 
  correctAnswer: 1, 
  explanation: "Cultural anthropology focuses on human social life, beliefs, and practices." 
},
{ 
  id: 24, 
  question: "Which anthropologist proposed the theory of cultural evolution?", 
  options: ["E.B. Tylor", "Margaret Mead", "Franz Boas", "Claude Lévi-Strauss"], 
  correctAnswer: 0, 
  explanation: "E.B. Tylor suggested that cultures evolve from simple to complex forms." 
},
{ 
  id: 25, 
  question: "What is the difference between society and culture?", 
  options: ["Society is the environment; culture is the language", "Society is a group of people; culture is their shared beliefs and practices", "Culture is food; society is clothing", "There is no difference"], 
  correctAnswer: 1, 
  explanation: "Society is a group of people living together; culture includes their shared customs, beliefs, and practices." 
}

      ,
      { id: 26, question: "What is ethnography?", options: ["Detailed description of a culture", "Study of ethnic conflicts", "Population statistics", "Language study"], correctAnswer: 0, explanation: "Ethnography is the systematic study and written description of a people's culture based on firsthand observation." },
      { id: 27, question: "What is a kinship system?", options: ["Social relationships based on family ties", "Political organization", "Economic system", "Religious beliefs"], correctAnswer: 0, explanation: "Kinship systems are the culturally defined relationships based on blood ties and marriage that organize social life." },
      { id: 28, question: "What is material culture?", options: ["Physical objects made by humans", "Beliefs and values", "Languages", "Social norms"], correctAnswer: 0, explanation: "Material culture consists of the physical objects, resources, and spaces that people use to define their culture." },
      { id: 29, question: "What is the significance of the Omo Valley to anthropology?", options: ["Home to diverse ethnic groups in Ethiopia", "First human fossils", "Ancient civilization", "Trade route"], correctAnswer: 0, explanation: "The Omo Valley in Ethiopia is home to numerous distinct ethnic groups and is important for studying cultural diversity." },
      { id: 30, question: "What is socialization?", options: ["Process of learning cultural norms", "Making friends", "Building societies", "Political participation"], correctAnswer: 0, explanation: "Socialization is the lifelong process by which individuals learn and internalize the values, beliefs, and norms of their culture." },
      ],
      final: 
      [
  {
    "id": 1,
    "question": "What is the field of study that explores the systematic analysis of human societies, focusing on the interactions between social forces and individual characteristics?",
    "options": ["Sociology", "Psychology", "Anthropology", "Economics"],
    "correctAnswer": 2,
    "explanation": "Anthropology is the field that explores systematic analysis of human societies, focusing on interactions between social forces and individual characteristics [citation:5]."
  },
  {
    "id": 2,
    "question": "What are the four main branches of anthropology?",
    "options": ["Biological, Cultural, Archaeology, Linguistics", "Physical, Social, Economic, Political", "Human, Animal, Plant, Mineral", "Ancient, Modern, Tribal, Urban"],
    "correctAnswer": 0,
    "explanation": "The four main branches of anthropology are Biological Anthropology, Cultural Anthropology, Archaeology, and Linguistic Anthropology [citation:5]."
  },
  {
    "id": 3,
    "question": "What is the focus of Biological Anthropology?",
    "options": ["The study of languages and communication", "The study of human biological variation and evolution", "The study of ancient civilizations", "The study of political systems"],
    "correctAnswer": 1,
    "explanation": "Biological anthropology focuses on the study of human biological variation and evolution [citation:8]."
  },
  {
    "id": 4,
    "question": "Which anthropologist is known for their work with primates?",
    "options": ["Karl Marx", "Sigmund Freud", "Charles Darwin", "Jane Goodall"],
    "correctAnswer": 3,
    "explanation": "Jane Goodall is known for her groundbreaking work with primates, particularly chimpanzees [citation:8]."
  },
  {
    "id": 5,
    "question": "What is Archaeology primarily focused on?",
    "options": ["The study of computer science", "The study of literature", "The study of animal behavior", "The study of past human societies through material remains"],
    "correctAnswer": 3,
    "explanation": "Archaeology is primarily focused on the study of past human societies through material remains such as artifacts, architecture, and ecofacts [citation:8]."
  },
  {
    "id": 6,
    "question": "What method do Archaeologists use to date artifacts?",
    "options": ["Guessing", "Magic", "Reading tea leaves", "Radiocarbon dating"],
    "correctAnswer": 3,
    "explanation": "Radiocarbon dating is one of the key scientific methods archaeologists use to date organic artifacts [citation:8]."
  },
  {
    "id": 7,
    "question": "What is the term for the study of language and its relation to culture?",
    "options": ["Geology", "Linguistic Anthropology", "Astronomy", "Sociology"],
    "correctAnswer": 1,
    "explanation": "Linguistic Anthropology is the branch of anthropology that studies language and its relation to culture [citation:8]."
  },
  {
    "id": 8,
    "question": "Who is considered the founding figure of modern American Anthropology?",
    "options": ["Sigmund Freud", "Karl Marx", "Émile Durkheim", "Franz Boas"],
    "correctAnswer": 3,
    "explanation": "Franz Boas is considered the founding figure of modern American anthropology [citation:8]."
  },
  {
    "id": 9,
    "question": "Which type of marriage involves multiple spouses?",
    "options": ["Polygamy", "Exogamy", "Monogamy", "Endogamy"],
    "correctAnswer": 0,
    "explanation": "Polygamy refers to marriage involving multiple spouses [citation:8]."
  },
  {
    "id": 10,
    "question": "Who developed the theory of cultural materialism?",
    "options": ["Marvin Harris", "Mary Douglas", "Clifford Geertz", "Roy Rappaport"],
    "correctAnswer": 0,
    "explanation": "Marvin Harris developed the theory of cultural materialism [citation:8]."
  },
  {
    "id": 11,
    "question": "What is the term for the belief that one's own culture is superior to others?",
    "options": ["Cultural relativism", "Ethnocentrism", "Multiculturalism", "Xenocentrism"],
    "correctAnswer": 1,
    "explanation": "Ethnocentrism is the belief that one's own culture is superior to others [citation:7][citation:8]."
  },
  {
    "id": 12,
    "question": "What is Cultural Relativism?",
    "options": ["Judging other cultures by one's own standards", "The belief that all cultures are inferior", "Understanding a culture on its own terms", "The spread of cultural traits"],
    "correctAnswer": 2,
    "explanation": "Cultural relativism is the principle of understanding a culture on its own terms rather than judging it by the standards of another culture."
  },
  {
    "id": 13,
    "question": "Who conducted the controversial study on gender roles in Samoa?",
    "options": ["Margaret Mead", "Sigmund Freud", "Karl Marx", "John Locke"],
    "correctAnswer": 0,
    "explanation": "Margaret Mead conducted the controversial study on gender roles in Samoa, published in 'Coming of Age in Samoa' [citation:8]."
  },
  {
    "id": 14,
    "question": "What is the term for the social process of acquiring culture?",
    "options": ["Recreation", "Synchronization", "Enculturation", "Isolation"],
    "correctAnswer": 2,
    "explanation": "Enculturation is the social process through which individuals acquire their culture [citation:8]."
  },
  {
    "id": 15,
    "question": "What does the term 'emic' refer to in Anthropology?",
    "options": ["A neutral perspective in cultural observations", "An insider's perspective within a cultural group", "A biased interpretation of cultural practices", "An outsider's perspective towards a cultural group"],
    "correctAnswer": 1,
    "explanation": "'Emic' refers to an insider's perspective within a cultural group [citation:8]."
  },
  {
    "id": 16,
    "question": "Which anthropologist is known for their research on the Yanomami people of the Amazon?",
    "options": ["Ferdinand de Saussure", "Zora Neale Hurston", "Napoleon Chagnon", "Ruth Benedict"],
    "correctAnswer": 2,
    "explanation": "Napoleon Chagnon is known for his controversial research on the Yanomami people of the Amazon [citation:8]."
  },
  {
    "id": 17,
    "question": "Who developed the theory of structuralism in anthropology?",
    "options": ["Margaret Mead", "Franz Boas", "Bronisław Malinowski", "Claude Lévi-Strauss"],
    "correctAnswer": 3,
    "explanation": "Claude Lévi-Strauss developed the theory of structuralism, emphasizing the underlying structures of human thought [citation:8]."
  },
  {
    "id": 18,
    "question": "What is the term for the process of integrating information from multiple disciplines to understand human societies?",
    "options": ["Holistic Approach", "Isolationism", "Specialization", "Reductionism"],
    "correctAnswer": 0,
    "explanation": "The holistic approach in anthropology involves integrating information from multiple disciplines to understand human societies [citation:8]."
  },
  {
    "id": 19,
    "question": "What is the branch of anthropology that focuses on understanding human biological evolution by examining fossils?",
    "options": ["Cultural Anthropology", "Paleoanthropology", "Linguistic Anthropology", "Archaeological Anthropology"],
    "correctAnswer": 1,
    "explanation": "Paleoanthropology is the branch that focuses on understanding human biological evolution by examining fossils [citation:5]."
  },
  {
    "id": 20,
    "question": "What field is dedicated to understanding our closest animal relatives, the primates?",
    "options": ["Zoology", "Anthropology", "Primatology", "Ecology"],
    "correctAnswer": 2,
    "explanation": "Primatology is the field dedicated to understanding our closest animal relatives, the primates [citation:5]."
  },
  {
    "id": 21,
    "question": "According to Mauss, how did he define anthropology?",
    "options": ["The study of ancient civilizations", "The total of sciences that considers man as a living, conscious, and sociable being", "The study of physical characteristics only", "The comparison of different body types"],
    "correctAnswer": 1,
    "explanation": "According to Mauss, anthropology is 'the total of sciences that considers man as a living, conscious, and sociable being' [citation:1]."
  },
  {
    "id": 22,
    "question": "Which of the following is NOT studied by anthropology?",
    "options": ["Cultures", "Languages of communities", "Social practices", "Mathematical formulas only"],
    "correctAnswer": 3,
    "explanation": "Anthropology studies cultures, languages, and practices, but not exclusively mathematical formulas [citation:1]."
  },
  {
    "id": 23,
    "question": "What is the name of the tool industry associated with Homo habilis?",
    "options": ["Acheulean", "Mousterian", "Oldowan", "Levallois"],
    "correctAnswer": 2,
    "explanation": "The Oldowan tool industry is associated with Homo habilis, consisting of simple stone tools [citation:4]."
  },
  {
    "id": 24,
    "question": "Which Homo species is associated with the Acheulean tool industry?",
    "options": ["Homo habilis", "Homo erectus", "Homo neanderthalensis", "Homo sapiens"],
    "correctAnswer": 1,
    "explanation": "Homo erectus is associated with the Acheulean tool industry, characterized by hand axes and cleavers [citation:4]."
  },
  {
    "id": 25,
    "question": "What is the Mousterian tool industry associated with?",
    "options": ["Homo habilis", "Homo erectus", "Neanderthals", "Homo floresiensis"],
    "correctAnswer": 2,
    "explanation": "The Mousterian tool industry is associated with Neanderthals (Homo neanderthalensis) [citation:4]."
  },
  {
    "id": 26,
    "question": "What is the Levallois technique?",
    "options": ["A method of making fire", "A specialized stone tool production method", "A burial practice", "A hunting strategy"],
    "correctAnswer": 1,
    "explanation": "The Levallois technique is a specialized stone tool production method associated with archaic humans [citation:4]."
  },
  {
    "id": 27,
    "question": "Which model proposes that modern humans arose simultaneously in different regions from local archaic populations?",
    "options": ["African replacement model", "Multiregional evolution model", "Assimilation model", "Out of Africa model"],
    "correctAnswer": 1,
    "explanation": "The multiregional evolution model proposes that modern humans arose simultaneously in different regions from local archaic populations [citation:4]."
  },
  {
    "id": 28,
    "question": "What does the African replacement model propose?",
    "options": ["Modern humans evolved only in Africa and replaced other populations", "Modern humans evolved in multiple regions", "Neanderthals evolved into modern Europeans", "All hominins originated in Asia"],
    "correctAnswer": 0,
    "explanation": "The African replacement model (Out of Africa) proposes that modern humans evolved only in Africa and then migrated to replace other archaic populations [citation:4]."
  },
  {
    "id": 29,
    "question": "What is an 'occipital bun'?",
    "options": ["A type of stone tool", "A Neanderthal cranial feature", "A burial mound", "A ceremonial object"],
    "correctAnswer": 1,
    "explanation": "An occipital bun is a cranial feature characteristic of Neanderthals, referring to a projection at the back of the skull [citation:4]."
  },
  {
    "id": 30,
    "question": "What is the term for a shared system of symbols, beliefs, attitudes, and values?",
    "options": ["Ethnicity", "Culture", "Race", "Class"],
    "correctAnswer": 1,
    "explanation": "Culture is defined as a shared system of symbols, beliefs, attitudes, and values [citation:7]."
  },
  {
    "id": 31,
    "question": "According to E.O. Wilson, what is sociobiology?",
    "options": ["The study of social insects", "The application of evolutionary theory to human social behavior", "The study of animal societies", "The combination of sociology and biology"],
    "correctAnswer": 1,
    "explanation": "According to E.O. Wilson, sociobiology is the application of evolutionary theory to human social behavior [citation:7]."
  },
  {
    "id": 32,
    "question": "What is the fastest growing demographic in America according to the source?",
    "options": ["Asian-American", "Native-Americans", "Multiracial", "Hispanic"],
    "correctAnswer": 2,
    "explanation": "According to the source, multiracial is the fastest growing demographic in America [citation:7]."
  },
  {
    "id": 33,
    "question": "What is the difference between enculturation and acculturation?",
    "options": ["They are the same process", "Enculturation is learning one's own culture; acculturation is adopting traits from another culture", "Enculturation is forced; acculturation is voluntary", "There is no difference"],
    "correctAnswer": 1,
    "explanation": "Enculturation is the process of learning one's own culture, while acculturation involves adopting traits from another culture [citation:8]."
  },
  {
    "id": 34,
    "question": "What is kinship in anthropological terms?",
    "options": ["Biological relationships only", "Socially recognized relationships based on descent and marriage", "Legal contracts", "Economic partnerships"],
    "correctAnswer": 1,
    "explanation": "Kinship refers to socially recognized relationships based on descent and marriage."
  },
  {
    "id": 35,
    "question": "What is participant observation?",
    "options": ["Watching from a distance", "A research method where the anthropologist lives among and participates in the community being studied", "Survey research", "Laboratory experimentation"],
    "correctAnswer": 1,
    "explanation": "Participant observation is a key research method in cultural anthropology where the researcher lives among and participates in the community being studied."
  },
  {
    "id": 36,
    "question": "Who is known for developing the theory of functionalism in anthropology?",
    "options": ["Claude Lévi-Strauss", "Franz Boas", "Bronisław Malinowski", "Margaret Mead"],
    "correctAnswer": 2,
    "explanation": "Bronisław Malinowski is known for developing the theory of functionalism, which views cultural practices as serving basic human needs [citation:1]."
  },
  {
    "id": 37,
    "question": "What is a 'burin' in archaeological terms?",
    "options": ["A burial site", "A type of stone tool used for engraving", "A ceremonial object", "A type of pottery"],
    "correctAnswer": 1,
    "explanation": "A burin is a type of stone tool from the Upper Paleolithic used for engraving and working bone and antler [citation:4]."
  },
  {
    "id": 38,
    "question": "What period is known for its advanced tools and art, including the crafting of ancient figurines?",
    "options": ["Bronze Age", "Upper Paleolithic", "Mesolithic period", "Neolithic period"],
    "correctAnswer": 1,
    "explanation": "The Upper Paleolithic is known for its advanced tools and art, including the crafting of ancient figurines [citation:5]."
  },
  {
    "id": 39,
    "question": "What is the term for marriage within a specific group or community?",
    "options": ["Exogamy", "Endogamy", "Polygamy", "Monogamy"],
    "correctAnswer": 1,
    "explanation": "Endogamy is the practice of marrying within a specific social group, caste, or ethnic group."
  },
  {
    "id": 40,
    "question": "What is the term for marriage outside one's own group?",
    "options": ["Exogamy", "Endogamy", "Polygamy", "Monogamy"],
    "correctAnswer": 0,
    "explanation": "Exogamy is the practice of marrying outside one's own social group or community."
  },
  {
    "id": 41,
    "question": "What is a 'band' in anthropological terms?",
    "options": ["A musical group", "A small, egalitarian, kin-based group of foragers", "A chiefdom", "A state-level society"],
    "correctAnswer": 1,
    "explanation": "A band is a small, egalitarian, kin-based group typical of foraging societies."
  },
  {
    "id": 42,
    "question": "What is a 'chiefdom'?",
    "options": ["A type of government", "A form of social organization with ranked lineages and a chief", "An egalitarian society", "A state-level society"],
    "correctAnswer": 1,
    "explanation": "A chiefdom is a form of social organization with hereditary ranking and a central chief, intermediate between tribes and states."
  },
  {
    "id": 43,
    "question": "What is the definition of 'animism'?",
    "options": ["Worship of animals", "The belief that natural objects and phenomena have souls or consciousness", "A type of ritual", "A form of magic"],
    "correctAnswer": 1,
    "explanation": "Animism is the belief that natural objects, phenomena, and the universe itself possess souls or consciousness."
  },
  {
    "id": 44,
    "question": "What is a 'shaman'?",
    "options": ["A type of chief", "A religious specialist who interacts with the spirit world on behalf of the community", "A warrior", "A healer only"],
    "correctAnswer": 1,
    "explanation": "A shaman is a religious specialist who interacts with the spirit world through altered states of consciousness on behalf of the community."
  },
  {
    "id": 45,
    "question": "What is 'potlatch'?",
    "options": ["A type of cooking vessel", "A ceremonial feast among indigenous peoples of the Northwest Coast involving gift-giving", "A marriage ceremony", "A hunting ritual"],
    "correctAnswer": 1,
    "explanation": "Potlatch is a ceremonial feast among indigenous peoples of the Northwest Coast involving elaborate gift-giving and status display."
  },
  {
    "id": 46,
    "question": "Who wrote 'The Interpretation of Cultures'?",
    "options": ["Claude Lévi-Strauss", "Clifford Geertz", "Bronisław Malinowski", "Franz Boas"],
    "correctAnswer": 1,
    "explanation": "Clifford Geertz wrote 'The Interpretation of Cultures', a foundational text in symbolic anthropology [citation:8]."
  },
  {
    "id": 47,
    "question": "What is 'thick description'?",
    "options": ["Detailed measurement of artifacts", "An interpretive method that explains cultural phenomena in context", "A statistical technique", "A type of excavation"],
    "correctAnswer": 1,
    "explanation": "Thick description, a term associated with Clifford Geertz, is an interpretive method that explains cultural phenomena in their full context and meaning."
  },
  {
    "id": 48,
    "question": "What is 'Homo floresiensis'?",
    "options": ["A species of large ape", "A small-bodied hominin species discovered on the island of Flores", "An early modern human", "A type of Neanderthal"],
    "correctAnswer": 1,
    "explanation": "Homo floresiensis is a small-bodied hominin species discovered on the island of Flores in Indonesia [citation:4]."
  },
  {
    "id": 49,
    "question": "What is 'island dwarfism'?",
    "options": ["A cultural practice", "The evolutionary reduction in body size of large animals isolated on islands", "A type of malnutrition", "A genetic disorder"],
    "correctAnswer": 1,
    "explanation": "Island dwarfism is the evolutionary process where large animals isolated on islands evolve reduced body size over generations [citation:4]."
  },
  {
    "id": 50,
    "question": "What is 'dental anthropology'?",
    "options": ["The study of teeth in archaeological populations", "Dentistry", "Tooth decoration practices", "Modern orthodontics"],
    "correctAnswer": 0,
    "explanation": "Dental anthropology is the study of teeth in archaeological and biological anthropology to understand diet, health, and evolution."
  },
  {
    "id": 51,
    "question": "What is 'bioarchaeology'?",
    "options": ["The study of ancient DNA only", "The study of human skeletal remains from archaeological sites", "The study of animal bones", "The study of plant remains"],
    "correctAnswer": 1,
    "explanation": "Bioarchaeology is the study of human skeletal remains from archaeological contexts to understand past populations."
  },
  {
    "id": 52,
    "question": "What is 'zooarchaeology'?",
    "options": ["The study of ancient zoos", "The study of animal remains from archaeological sites", "The study of modern animals", "The study of animal behavior"],
    "correctAnswer": 1,
    "explanation": "Zooarchaeology is the study of animal remains from archaeological sites to understand human-animal relationships and subsistence."
  },
  {
    "id": 53,
    "question": "What is 'paleopathology'?",
    "options": ["The study of ancient writing", "The study of disease and trauma in ancient populations", "The study of paleolithic tools", "The study of ancient languages"],
    "correctAnswer": 1,
    "explanation": "Paleopathology is the study of disease, injury, and abnormalities in ancient human and animal remains."
  },
  {
    "id": 54,
    "question": "What is 'ethnomusicology'?",
    "options": ["The study of musical instruments", "The study of music in its cultural context", "Modern music theory", "The history of Western music"],
    "correctAnswer": 1,
    "explanation": "Ethnomusicology is the study of music within its cultural and social context, often through ethnographic methods."
  },
  {
    "id": 55,
    "question": "What is 'applied anthropology'?",
    "options": ["Theoretical anthropology only", "The use of anthropological knowledge to solve practical problems", "Archaeological fieldwork", "Laboratory analysis"],
    "correctAnswer": 1,
    "explanation": "Applied anthropology is the use of anthropological methods and knowledge to address real-world problems and implement solutions."
  }

        ,
      { id: 111, question: "What is a rite of passage?", options: ["Ceremony marking life transitions", "Religious prayer", "Legal process", "Educational achievement"], correctAnswer: 0, explanation: "Rites of passage are ceremonies that mark important transitions in a person's life, such as birth, coming of age, or marriage." },
      { id: 121, question: "What is cultural diffusion?", options: ["Spread of cultural elements between societies", "Cultural isolation", "Cultural preservation", "Cultural extinction"], correctAnswer: 0, explanation: "Cultural diffusion is the spread of cultural beliefs, practices, and items from one society to another." },
      { id: 131, question: "What is a society?", options: ["Group of people sharing a culture", "Government structure", "Economic system", "Religious organization"], correctAnswer: 0, explanation: "A society is a group of people who share a common culture, territory, and identity." },
      { id: 141, question: "What is holism in anthropology?", options: ["Studying all aspects of human life together", "Focusing on one aspect only", "Comparing cultures", "Historical analysis"], correctAnswer: 0, explanation: "Holism is the anthropological approach of studying all aspects of human existence—biological, cultural, social—as interconnected." },
      { id: 151, question: "What is applied anthropology?", options: ["Using anthropological knowledge to solve problems", "Theoretical study only", "Academic research", "Historical documentation"], correctAnswer: 0, explanation: "Applied anthropology uses anthropological knowledge and methods to address real-world problems in areas like development, health, and education." }
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
      mid: 
      [
{ 
  id: 1, 
  question: "Which is the largest continent by area?", 
  options: ["Africa", "Asia", "Europe", "North America"], 
  correctAnswer: 1, 
  explanation: "Asia is the largest continent, covering about 44.5 million square kilometers." 
},
{ 
  id: 2, 
  question: "Which river is the longest in the world?", 
  options: ["Amazon", "Nile", "Yangtze", "Mississippi"], 
  correctAnswer: 1, 
  explanation: "The Nile River in Africa is generally considered the longest river in the world." 
},
{ 
  id: 3, 
  question: "What is the capital of Canada?", 
  options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], 
  correctAnswer: 2, 
  explanation: "Ottawa is the capital city of Canada." 
},
{ 
  id: 4, 
  question: "Which country has the largest population?", 
  options: ["India", "United States", "China", "Indonesia"], 
  correctAnswer: 2, 
  explanation: "China has the largest population in the world, over 1.4 billion people." 
},
{ 
  id: 5, 
  question: "Which desert is the largest in the world?", 
  options: ["Sahara", "Gobi", "Kalahari", "Arabian"], 
  correctAnswer: 0, 
  explanation: "The Sahara Desert in northern Africa is the largest hot desert in the world." 
},
{ 
  id: 6, 
  question: "Which ocean is the largest by area?", 
  options: ["Atlantic", "Indian", "Pacific", "Arctic"], 
  correctAnswer: 2, 
  explanation: "The Pacific Ocean is the largest ocean on Earth." 
},
{ 
  id: 7, 
  question: "What is the highest mountain in the world?", 
  options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"], 
  correctAnswer: 1, 
  explanation: "Mount Everest in the Himalayas is the highest peak, at 8,848 meters." 
},
{ 
  id: 8, 
  question: "Which line divides the Earth into Northern and Southern Hemispheres?", 
  options: ["Prime Meridian", "Equator", "Tropic of Cancer", "International Date Line"], 
  correctAnswer: 1, 
  explanation: "The Equator is the 0° latitude line dividing North and South Hemispheres." 
},
{ 
  id: 9, 
  question: "Which country has the most natural lakes?", 
  options: ["United States", "Canada", "Russia", "Brazil"], 
  correctAnswer: 1, 
  explanation: "Canada has more natural lakes than any other country in the world." 
},
{ 
  id: 10, 
  question: "What is the capital of Japan?", 
  options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"], 
  correctAnswer: 2, 
  explanation: "Tokyo is the capital of Japan." 
},
{ 
  id: 11, 
  question: "Which continent is known as the 'Dark Continent'?", 
  options: ["Asia", "Africa", "South America", "Oceania"], 
  correctAnswer: 1, 
  explanation: "Africa was historically referred to as the 'Dark Continent' due to limited knowledge by Europeans." 
},
{ 
  id: 12, 
  question: "Which country is both in Europe and Asia?", 
  options: ["Turkey", "Egypt", "Spain", "Italy"], 
  correctAnswer: 0, 
  explanation: "Turkey spans both Europe and Asia." 
},
{ 
  id: 13, 
  question: "Which desert is located in northern China and southern Mongolia?", 
  options: ["Gobi", "Sahara", "Kalahari", "Arabian"], 
  correctAnswer: 0, 
  explanation: "The Gobi Desert spans northern China and southern Mongolia." 
},
{ 
  id: 14, 
  question: "Which is the largest island in the world?", 
  options: ["Greenland", "Madagascar", "Borneo", "Sumatra"], 
  correctAnswer: 0, 
  explanation: "Greenland is the largest island by area." 
},
{ 
  id: 15, 
  question: "Which sea is the saltiest in the world?", 
  options: ["Red Sea", "Dead Sea", "Mediterranean Sea", "Caspian Sea"], 
  correctAnswer: 1, 
  explanation: "The Dead Sea has the highest salt concentration among major bodies of water." 
},
{ 
  id: 16, 
  question: "Which line divides the Earth into Eastern and Western Hemispheres?", 
  options: ["Tropic of Capricorn", "Equator", "Prime Meridian", "Arctic Circle"], 
  correctAnswer: 2, 
  explanation: "The Prime Meridian (0° longitude) separates East and West Hemispheres." 
},
{ 
  id: 17, 
  question: "Which country has the longest coastline?", 
  options: ["Australia", "Canada", "United States", "Russia"], 
  correctAnswer: 1, 
  explanation: "Canada has the longest coastline in the world." 
},
{ 
  id: 18, 
  question: "Which river flows through Egypt?", 
  options: ["Nile", "Amazon", "Yangtze", "Mississippi"], 
  correctAnswer: 0, 
  explanation: "The Nile River flows north through Egypt into the Mediterranean Sea." 
},
{ 
  id: 19, 
  question: "Which continent has the most countries?", 
  options: ["Africa", "Asia", "Europe", "South America"], 
  correctAnswer: 0, 
  explanation: "Africa has 54 recognized countries, the most of any continent." 
},
{ 
  id: 20, 
  question: "Which US state is the largest by area?", 
  options: ["Texas", "California", "Alaska", "Montana"], 
  correctAnswer: 2, 
  explanation: "Alaska is the largest US state by area." 
},
{ 
  id: 21, 
  question: "Which country is known as the 'Land of the Rising Sun'?", 
  options: ["China", "Japan", "Thailand", "South Korea"], 
  correctAnswer: 1, 
  explanation: "Japan is called the 'Land of the Rising Sun'." 
},
{ 
  id: 22, 
  question: "Which desert is in southwestern United States?", 
  options: ["Mojave", "Sahara", "Gobi", "Kalahari"], 
  correctAnswer: 0, 
  explanation: "The Mojave Desert is in the southwestern United States." 
},
{ 
  id: 23, 
  question: "Which mountain range separates Europe from Asia?", 
  options: ["Alps", "Himalayas", "Ural Mountains", "Andes"], 
  correctAnswer: 2, 
  explanation: "The Ural Mountains form a natural boundary between Europe and Asia." 
},
{ 
  id: 24, 
  question: "Which ocean touches the east coast of Africa?", 
  options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], 
  correctAnswer: 1, 
  explanation: "The Indian Ocean borders the eastern coast of Africa." 
},
{ 
  id: 25, 
  question: "Which country has the most time zones?", 
  options: ["Russia", "United States", "France", "China"], 
  correctAnswer: 2, 
  explanation: "France has the most time zones when including overseas territories." 
}

        ,
        { id: 26, question: "Which lake is the largest in Ethiopia?", options: ["Lake Tana", "Lake Abaya", "Lake Chamo", "Lake Ziway"], correctAnswer: 0, explanation: "Lake Tana is the largest lake in Ethiopia and the source of the Blue Nile." },
      { id: 27, question: "What is the Simien Mountains known for?", options: ["UNESCO World Heritage Site with unique wildlife", "Gold mining", "Agricultural center", "Industrial zone"], correctAnswer: 0, explanation: "The Simien Mountains are a UNESCO World Heritage Site, home to endemic species like the Gelada baboon and Ethiopian wolf." },
      { id: 28, question: "What percentage of the Nile's water comes from Ethiopia?", options: ["About 85%", "About 50%", "About 25%", "About 10%"], correctAnswer: 0, explanation: "Ethiopia contributes approximately 85% of the Nile River's water, primarily through the Blue Nile." },
      { id: 29, question: "What is Ethiopia's population rank in Africa?", options: ["Second most populous", "Most populous", "Third most populous", "Fourth most populous"], correctAnswer: 0, explanation: "Ethiopia is the second most populous country in Africa after Nigeria." },
      { id: 30, question: "Which countries share borders with Ethiopia?", options: ["Eritrea, Djibouti, Somalia, Kenya, South Sudan, Sudan", "Only Eritrea and Kenya", "Only Sudan and Somalia", "Only Djibouti and Kenya"], correctAnswer: 0, explanation: "Ethiopia is bordered by Eritrea, Djibouti, Somalia, Kenya, South Sudan, and Sudan." },
      ],
      final: 
      [
  {
    "id": 1,
    "question": "Which layer of the Earth is liquid?",
    "options": ["Crust", "Mantle", "Outer core", "Inner core"],
    "correctAnswer": 2,
    "explanation": "The outer core is liquid iron and nickel; the inner core is solid."
  },
  {
    "id": 2,
    "question": "What type of plate boundary is responsible for earthquakes and volcanoes?",
    "options": ["Divergent", "Convergent", "Transform", "All of the above"],
    "correctAnswer": 3,
    "explanation": "All types of plate boundaries can cause seismic and volcanic activity, though in different ways."
  },
  {
    "id": 3,
    "question": "Which is the longest river in the world?",
    "options": ["Nile", "Amazon", "Yangtze", "Mississippi"],
    "correctAnswer": 0,
    "explanation": "The Nile River is generally considered the longest, about 6,650 km."
  },
  {
    "id": 4,
    "question": "Which climate type is characterized by high temperatures and heavy rainfall year-round?",
    "options": ["Tropical rainforest", "Desert", "Tundra", "Mediterranean"],
    "correctAnswer": 0,
    "explanation": "Tropical rainforest climates have high temperatures and rainfall throughout the year."
  },
  {
    "id": 5,
    "question": "Which is an example of a renewable resource?",
    "options": ["Coal", "Oil", "Solar energy", "Natural gas"],
    "correctAnswer": 2,
    "explanation": "Solar energy is renewable because it is naturally replenished."
  },
  {
    "id": 6,
    "question": "Which soil type is most suitable for agriculture?",
    "options": ["Sandy soil", "Clay soil", "Loamy soil", "Rocky soil"],
    "correctAnswer": 2,
    "explanation": "Loamy soil has good texture, nutrients, and water-holding capacity, making it ideal for farming."
  },
  {
    "id": 7,
    "question": "Which of the following is the largest desert in the world?",
    "options": ["Sahara", "Gobi", "Kalahari", "Arabian"],
    "correctAnswer": 0,
    "explanation": "The Sahara Desert in Africa is the largest hot desert in the world."
  },
  {
    "id": 8,
    "question": "Which is the correct order of Earth’s layers from the surface to the center?",
    "options": ["Crust, Mantle, Outer core, Inner core", "Crust, Outer core, Mantle, Inner core", "Mantle, Crust, Outer core, Inner core", "Crust, Mantle, Inner core, Outer core"],
    "correctAnswer": 0,
    "explanation": "The layers are Crust → Mantle → Outer core → Inner core."
  },
  {
    "id": 9,
    "question": "Which type of volcano has gently sloping sides and is built from fluid lava?",
    "options": ["Shield volcano", "Composite volcano", "Cinder cone", "Caldera"],
    "correctAnswer": 0,
    "explanation": "Shield volcanoes are broad and gently sloping due to low-viscosity lava."
  },
  {
    "id": 10,
    "question": "Which ocean is the largest by surface area?",
    "options": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    "correctAnswer": 2,
    "explanation": "The Pacific Ocean covers about 63 million square miles, the largest of any ocean."
  },
  {
    "id": 11,
    "question": "The imaginary lines that run parallel to the Equator are called:",
    "options": ["Meridians", "Parallels", "Longitude", "Prime meridian"],
    "correctAnswer": 1,
    "explanation": "Parallels run east-west and measure latitude."
  },
  {
    "id": 12,
    "question": "Which of the following is a major effect of deforestation?",
    "options": ["Increased rainfall", "Soil erosion", "Global cooling", "Expansion of deserts"],
    "correctAnswer": 1,
    "explanation": "Deforestation leads to soil erosion due to loss of tree roots that hold soil."
  },
    {
    "id": 49,
    "question": "Which of the following is an example of a landlocked country?",
    "options": ["Ethiopia", "Egypt", "Somalia", "Kenya"],
    "correctAnswer": 0,
    "explanation": "Ethiopia has no access to the sea, making it landlocked."
  },
  {
    "id": 50,
    "question": "Which type of rainfall occurs due to heating of the earth’s surface?",
    "options": ["Convectional rainfall", "Orographic rainfall", "Cyclonic rainfall", "Frontal rainfall"],
    "correctAnswer": 0,
    "explanation": "Convectional rainfall occurs when warm air rises, cools, and condenses."
  },
  {
    "id": 51,
    "question": "Which of the following is an example of a primary city in Ethiopia?",
    "options": ["Addis Ababa", "Mekelle", "Bahir Dar", "Hawassa"],
    "correctAnswer": 0,
    "explanation": "Addis Ababa is the capital and largest city of Ethiopia."
  },
  {
    "id": 13,
    "question": "Which country has the largest population?",
    "options": ["India", "United States", "China", "Brazil"],
    "correctAnswer": 2,
    "explanation": "China has the largest population, over 1.4 billion people."
  },
  {
    "id": 14,
    "question": "Which of the following is the main cause of tides?",
    "options": ["Wind", "Earth’s rotation", "Moon’s gravitational pull", "Sun’s radiation"],
    "correctAnswer": 2,
    "explanation": "Tides are caused primarily by the gravitational pull of the moon on Earth."
  },
  {
    "id": 15,
    "question": "Which type of map shows elevation and landforms?",
    "options": ["Political map", "Topographic map", "Climate map", "Road map"],
    "correctAnswer": 1,
    "explanation": "Topographic maps use contour lines to show elevation and landforms."
  },
  {
    "id": 16,
    "question": "Which of the following rivers flows into the Mediterranean Sea?",
    "options": ["Nile", "Amazon", "Yangtze", "Ganges"],
    "correctAnswer": 0,
    "explanation": "The Nile River flows north into the Mediterranean Sea."
  },
  {
    "id": 17,
    "question": "Which is the primary factor affecting climate?",
    "options": ["Altitude", "Latitude", "Distance from ocean", "All of the above"],
    "correctAnswer": 3,
    "explanation": "Climate is influenced by latitude, altitude, distance from oceans, and other factors."
  },
  {
    "id": 18,
    "question": "Which is an example of a natural disaster caused by tectonic activity?",
    "options": ["Hurricane", "Earthquake", "Flood", "Drought"],
    "correctAnswer": 1,
    "explanation": "Earthquakes are caused by movement of tectonic plates."
  },
  {
    "id": 19,
    "question": "Which continent has the largest desert?",
    "options": ["Asia", "Africa", "Australia", "Antarctica"],
    "correctAnswer": 3,
    "explanation": "Antarctica is the largest desert by area, classified as a cold desert."
  },
  {
    "id": 20,
    "question": "Which of the following is the correct order of the water cycle?",
    "options": ["Evaporation, Condensation, Precipitation, Collection", "Precipitation, Evaporation, Condensation, Collection", "Condensation, Evaporation, Collection, Precipitation", "Collection, Precipitation, Evaporation, Condensation"],
    "correctAnswer": 0,
    "explanation": "The water cycle follows: Evaporation → Condensation → Precipitation → Collection."
  },
  {
    "id": 21,
    "question": "Which of the following is the fastest ocean current?",
    "options": ["Gulf Stream", "Kuroshio Current", "Agulhas Current", "Brazil Current"],
    "correctAnswer": 2,
    "explanation": "The Agulhas Current off the southeast coast of Africa is one of the fastest."
  },
  {
    "id": 22,
    "question": "Which landform is formed by river deposition?",
    "options": ["Delta", "Mountain", "Plateau", "Volcano"],
    "correctAnswer": 0,
    "explanation": "A delta forms at a river mouth where sediment is deposited."
  },
  {
    "id": 23,
    "question": "Which type of rock is formed from cooled lava?",
    "options": ["Igneous", "Sedimentary", "Metamorphic", "Fossiliferous"],
    "correctAnswer": 0,
    "explanation": "Igneous rocks are formed from cooled lava or magma."
  },
  {
    "id": 24,
    "question": "Which natural region is characterized by coniferous forests?",
    "options": ["Tropical rainforest", "Taiga", "Savanna", "Tundra"],
    "correctAnswer": 1,
    "explanation": "Taiga, or boreal forest, consists mainly of coniferous trees."
  },
  {
    "id": 25,
    "question": "Which of the following is the largest lake in Africa?",
    "options": ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
    "correctAnswer": 0,
    "explanation": "Lake Victoria is the largest lake in Africa by surface area."
  },
  {
    "id": 26,
    "question": "Which type of rainfall occurs when warm, moist air rises over mountains?",
    "options": ["Convectional rainfall", "Orographic rainfall", "Cyclonic rainfall", "Frontal rainfall"],
    "correctAnswer": 1,
    "explanation": "Orographic rainfall occurs when air is forced to rise over mountains, cooling and condensing."
  },
  {
    "id": 27,
    "question": "Which continent has the highest average elevation?",
    "options": ["Asia", "Africa", "Europe", "Antarctica"],
    "correctAnswer": 3,
    "explanation": "Antarctica has the highest average elevation due to its ice sheet."
  },
  {
    "id": 28,
    "question": "Which of the following countries has the most volcanoes?",
    "options": ["Indonesia", "Japan", "Italy", "Philippines"],
    "correctAnswer": 0,
    "explanation": "Indonesia has over 130 active volcanoes, the highest in the world."
  },
  {
    "id": 29,
    "question": "Which type of soil is found in deserts?",
    "options": ["Podzol", "Chernozem", "Aridisol", "Laterite"],
    "correctAnswer": 2,
    "explanation": "Aridisol is typical in dry desert regions."
  },
  {
    "id": 30,
    "question": "Which natural disaster is most common in Japan?",
    "options": ["Tornadoes", "Earthquakes", "Volcanic eruptions", "Floods"],
    "correctAnswer": 1,
    "explanation": "Japan lies on the Pacific Ring of Fire, making earthquakes very common."
  },
  {
    "id": 31,
    "question": "Which type of plate boundary forms mid-ocean ridges?",
    "options": ["Convergent", "Divergent", "Transform", "Subduction zones"],
    "correctAnswer": 1,
    "explanation": "Divergent boundaries create mid-ocean ridges as plates move apart."
  },
  {
    "id": 32,
    "question": "Which desert is located in Asia?",
    "options": ["Sahara", "Gobi", "Kalahari", "Patagonian"],
    "correctAnswer": 1,
    "explanation": "The Gobi Desert is located in northern China and southern Mongolia."
  },
  {
    "id": 33,
    "question": "Which continent has the most countries?",
    "options": ["Africa", "Europe", "Asia", "South America"],
    "correctAnswer": 0,
    "explanation": "Africa has 54 recognized countries, the most of any continent."
  },
  {
    "id": 34,
    "question": "Which type of forest is found in equatorial regions?",
    "options": ["Tropical rainforest", "Taiga", "Deciduous forest", "Savanna"],
    "correctAnswer": 0,
    "explanation": "Tropical rainforests are found near the equator with high rainfall and biodiversity."
  },
  {
    "id": 35,
    "question": "Which of the following is the smallest ocean?",
    "options": ["Atlantic", "Indian", "Arctic", "Pacific"],
    "correctAnswer": 2,
    "explanation": "The Arctic Ocean is the smallest in surface area."
  },
  {
    "id": 36,
    "question": "Which country is known as the Land of a Thousand Lakes?",
    "options": ["Canada", "Finland", "Sweden", "Norway"],
    "correctAnswer": 1,
    "explanation": "Finland has roughly 188,000 lakes, earning this nickname."
  },
  {
    "id": 37,
    "question": "Which process breaks rocks into smaller pieces without changing their composition?",
    "options": ["Erosion", "Weathering", "Deposition", "Volcanism"],
    "correctAnswer": 1,
    "explanation": "Physical weathering breaks rocks mechanically without altering their chemical composition."
  },
  {
    "id": 38,
    "question": "Which of the following is a primary economic activity?",
    "options": ["Fishing", "Manufacturing", "Banking", "Retail"],
    "correctAnswer": 0,
    "explanation": "Primary activities involve natural resources, such as fishing, mining, and farming."
  },
  {
    "id": 39,
    "question": "Which time zone is 5 hours ahead of UTC?",
    "options": ["UTC+5", "UTC-5", "UTC+3", "UTC-3"],
    "correctAnswer": 0,
    "explanation": "UTC+5 is 5 hours ahead of Coordinated Universal Time."
  },
  {
    "id": 40,
    "question": "Which natural vegetation dominates the tundra?",
    "options": ["Coniferous trees", "Grass", "Mosses and lichens", "Broadleaf trees"],
    "correctAnswer": 2,
    "explanation": "Tundra vegetation is limited to mosses, lichens, and small shrubs due to cold temperatures."
  },
  {
    "id": 41,
    "question": "Which is the largest continent by land area?",
    "options": ["Africa", "Asia", "North America", "Europe"],
    "correctAnswer": 1,
    "explanation": "Asia is the largest continent, covering about 44.5 million km²."
  },
  {
    "id": 42,
    "question": "Which of the following rivers flows into the Atlantic Ocean?",
    "options": ["Nile", "Amazon", "Yangtze", "Mekong"],
    "correctAnswer": 1,
    "explanation": "The Amazon River flows into the Atlantic Ocean in Brazil."
  },
  {
    "id": 43,
    "question": "Which of the following is an example of a man-made lake?",
    "options": ["Lake Victoria", "Lake Tahoe", "Lake Nasser", "Lake Baikal"],
    "correctAnswer": 2,
    "explanation": "Lake Nasser was formed by the construction of the Aswan High Dam."
  },
  {
    "id": 44,
    "question": "Which continent has the fewest freshwater resources?",
    "options": ["Africa", "Asia", "Australia", "Antarctica"],
    "correctAnswer": 2,
    "explanation": "Australia has limited freshwater resources due to its arid climate."
  },
  {
    "id": 45,
    "question": "Which type of natural hazard is a tsunami?",
    "options": ["Atmospheric", "Geological", "Hydrological", "Biological"],
    "correctAnswer": 2,
    "explanation": "Tsunamis are water-based hazards, often caused by undersea earthquakes or landslides."
  },
  {
    "id": 46,
    "question": "Which factor primarily determines the distribution of deserts?",
    "options": ["Latitude", "Rain shadow effect", "Ocean currents", "All of the above"],
    "correctAnswer": 3,
    "explanation": "Deserts are influenced by latitude, rain shadow effect, and cold ocean currents."
  },
  {
    "id": 47,
    "question": "Which of the following is a megacity?",
    "options": ["New York City", "Tokyo", "Lagos", "All of the above"],
    "correctAnswer": 3,
    "explanation": "Megacities are urban areas with populations over 10 million; all listed qualify."
  },
  {
    "id": 48,
    "question": "Which ocean current warms the west coast of Europe?",
    "options": ["Gulf Stream", "California Current", "Benguela Current", "Kuroshio Current"],
    "correctAnswer": 0,
    "explanation": "The Gulf Stream carries warm water from the tropics to the North Atlantic, warming Europe."
  },
  {
    "id": 49,
    "question": "Which of the following is an example of a landlocked country?",
    "options": ["Ethiopia", "Egypt", "Somalia", "Kenya"],
    "correctAnswer": 0,
    "explanation": "Ethiopia has no access to the sea, making it landlocked."
  },
  {
    "id": 50,
    "question": "Which type of rainfall occurs due to heating of the earth’s surface?",
    "options": ["Convectional rainfall", "Orographic rainfall", "Cyclonic rainfall", "Frontal rainfall"],
    "correctAnswer": 0,
    "explanation": "Convectional rainfall occurs when warm air rises, cools, and condenses."
  },
  {
    "id": 51,
    "question": "Which of the following is an example of a primary city in Ethiopia?",
    "options": ["Addis Ababa", "Mekelle", "Bahir Dar", "Hawassa"],
    "correctAnswer": 0,
    "explanation": "Addis Ababa is the capital and largest city of Ethiopia."
  },
  {
    "id": 52,
    "question": "Which of the following is the highest mountain in the world?",
    "options": ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
    "correctAnswer": 1,
    "explanation": "Mount Everest is 8,848 meters high, the tallest peak on Earth."}

,
      { id: 111, question: "What is the Awash River important for?", options: ["Irrigation and hydropower in eastern Ethiopia", "Source of Blue Nile", "Border with Kenya", "Largest waterfall"], correctAnswer: 0, explanation: "The Awash River is important for irrigation and hydropower in eastern Ethiopia, supporting agriculture and industry." },
      { id: 121, question: "What natural resources is Ethiopia known for?", options: ["Coffee, gold, tantalum, and hydropower potential", "Oil and diamonds", "Coal and iron", "Uranium and copper"], correctAnswer: 0, explanation: "Ethiopia is known for coffee (its birthplace), gold, tantalum, and enormous hydropower potential from its rivers." },
      { id: 131, question: "What is the Ogaden region characterized by?", options: ["Semi-arid lowlands in eastern Ethiopia", "Highland forests", "Rift Valley lakes", "Northern mountains"], correctAnswer: 0, explanation: "The Ogaden is a semi-arid region in eastern Ethiopia, home to Somali pastoralist communities." },
      { id: 141, question: "What is the significance of Addis Ababa's elevation?", options: ["One of the highest capital cities in the world", "At sea level", "Below sea level", "Moderate elevation"], correctAnswer: 0, explanation: "At about 2,355 meters, Addis Ababa is one of the highest capital cities in the world, giving it a mild climate." },
      { id: 151, question: "What is enset cultivation unique to?", options: ["Ethiopian Highlands", "Sahara Desert", "Nile Valley", "East African Coast"], correctAnswer: 0, explanation: "Enset (false banana) cultivation is unique to the Ethiopian Highlands, serving as a staple food for millions." }
    ]
  },
  },


  {
    id: "psychology",
    name: "General_Psychology",
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
        { 
  id: 1, 
  question: "Who is considered the father of psychoanalysis?", 
  options: ["B.F. Skinner", "Sigmund Freud", "John Watson", "Carl Rogers"], 
  correctAnswer: 1, 
  explanation: "Sigmund Freud developed psychoanalysis, focusing on the unconscious mind and early childhood experiences." 
},

{ 
  id: 2, 
  question: "Which part of the brain controls balance and coordination?", 
  options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"], 
  correctAnswer: 1, 
  explanation: "The cerebellum is responsible for balance and coordination." 
},

{ 
  id: 3, 
  question: "What is the basic unit of the nervous system?", 
  options: ["Hormone", "Neuron", "Synapse", "Stimulus"], 
  correctAnswer: 1, 
  explanation: "The neuron is the basic functional unit of the nervous system." 
},

{ 
  id: 4, 
  question: "Which learning theory is associated with B.F. Skinner?", 
  options: ["Classical conditioning", "Operant conditioning", "Observational learning", "Cognitive learning"], 
  correctAnswer: 1, 
  explanation: "Skinner developed operant conditioning, which focuses on reinforcement and punishment." 
},

{ 
  id: 5, 
  question: "Who conducted the famous 'Little Albert' experiment?", 
  options: ["Ivan Pavlov", "John Watson", "Albert Bandura", "Erik Erikson"], 
  correctAnswer: 1, 
  explanation: "John Watson conducted the Little Albert experiment on classical conditioning." 
},

{ 
  id: 6, 
  question: "Short-term memory typically lasts for:", 
  options: ["A few seconds to about 30 seconds", "Several years", "A lifetime", "One day"], 
  correctAnswer: 0, 
  explanation: "Short-term memory holds information briefly, usually up to 30 seconds." 
},

{ 
  id: 7, 
  question: "Which psychologist is known for the hierarchy of needs?", 
  options: ["Maslow", "Freud", "Piaget", "Skinner"], 
  correctAnswer: 0, 
  explanation: "Abraham Maslow proposed the hierarchy of needs theory." 
},

{ 
  id: 8, 
  question: "What is cognition?", 
  options: ["Physical growth", "Mental processes like thinking and memory", "Emotional reaction", "Reflex action"], 
  correctAnswer: 1, 
  explanation: "Cognition refers to mental processes such as thinking, memory, and problem-solving." 
},

{ 
  id: 9, 
  question: "Which part of the brain regulates heartbeat and breathing?", 
  options: ["Medulla", "Cerebellum", "Frontal lobe", "Amygdala"], 
  correctAnswer: 0, 
  explanation: "The medulla controls vital functions like breathing and heartbeat." 
},

{ 
  id: 10, 
  question: "Classical conditioning was first studied by:", 
  options: ["Pavlov", "Skinner", "Freud", "Bandura"], 
  correctAnswer: 0, 
  explanation: "Ivan Pavlov studied classical conditioning through experiments with dogs." 
},

{ 
  id: 11, 
  question: "What is reinforcement in psychology?", 
  options: ["A punishment", "Something that increases a behavior", "Ignoring behavior", "A memory loss"], 
  correctAnswer: 1, 
  explanation: "Reinforcement increases the likelihood of a behavior being repeated." 
},

{ 
  id: 12, 
  question: "Which stage of Piaget’s theory involves logical thinking about concrete objects?", 
  options: ["Sensorimotor", "Preoperational", "Concrete operational", "Formal operational"], 
  correctAnswer: 2, 
  explanation: "In the concrete operational stage, children think logically about concrete events." 
},

{ 
  id: 13, 
  question: "What is perception?", 
  options: ["The detection of stimuli", "The interpretation of sensory information", "Memory storage", "Dream analysis"], 
  correctAnswer: 1, 
  explanation: "Perception involves interpreting sensory information." 
},

{ 
  id: 14, 
  question: "Which approach focuses on free will and self-actualization?", 
  options: ["Behavioral", "Humanistic", "Psychoanalytic", "Biological"], 
  correctAnswer: 1, 
  explanation: "The humanistic approach emphasizes personal growth and self-actualization." 
},

{ 
  id: 15, 
  question: "What is stress?", 
  options: ["A type of memory", "A physical and psychological response to demands", "A learning method", "A brain disorder"], 
  correctAnswer: 1, 
  explanation: "Stress is the body’s response to challenges or demands." 
},

{ 
  id: 16, 
  question: "Which neurotransmitter is linked to mood regulation?", 
  options: ["Dopamine", "Serotonin", "Adrenaline", "Acetylcholine"], 
  correctAnswer: 1, 
  explanation: "Serotonin plays a key role in mood regulation." 
},

{ 
  id: 17, 
  question: "What is observational learning?", 
  options: ["Learning by trial and error", "Learning by watching others", "Learning by punishment", "Learning by memorization"], 
  correctAnswer: 1, 
  explanation: "Observational learning occurs by observing and imitating others." 
},

{ 
  id: 18, 
  question: "Which psychologist developed the theory of psychosocial development?", 
  options: ["Erik Erikson", "Freud", "Maslow", "Watson"], 
  correctAnswer: 0, 
  explanation: "Erik Erikson proposed the psychosocial stages of development." 
},

{ 
  id: 19, 
  question: "What is intelligence?", 
  options: ["Physical strength", "Ability to learn and adapt", "Emotional reaction only", "Memory loss"], 
  correctAnswer: 1, 
  explanation: "Intelligence refers to the ability to learn, reason, and adapt to new situations." 
},

{ 
  id: 20, 
  question: "Which lobe of the brain is responsible for decision-making?", 
  options: ["Occipital lobe", "Frontal lobe", "Temporal lobe", "Parietal lobe"], 
  correctAnswer: 1, 
  explanation: "The frontal lobe controls reasoning and decision-making." 
},

{ 
  id: 21, 
  question: "What is motivation?", 
  options: ["A reflex action", "The process that initiates and directs behavior", "Memory storage", "Dream interpretation"], 
  correctAnswer: 1, 
  explanation: "Motivation drives behavior toward goals." 
},

{ 
  id: 22, 
  question: "Which sleep stage is associated with vivid dreams?", 
  options: ["REM sleep", "Stage 1", "Stage 2", "Deep sleep"], 
  correctAnswer: 0, 
  explanation: "REM sleep is the stage where vivid dreaming occurs." 
},

{ 
  id: 23, 
  question: "What is personality?", 
  options: ["Temporary emotion", "Stable patterns of behavior and thinking", "Memory ability", "Physical appearance"], 
  correctAnswer: 1, 
  explanation: "Personality consists of enduring behavior patterns and mental processes." 
},

{ 
  id: 24, 
  question: "Which method is commonly used in psychological research?", 
  options: ["Astrology", "Scientific method", "Guesswork", "Mythology"], 
  correctAnswer: 1, 
  explanation: "Psychology uses the scientific method to study behavior and mental processes." 
},

{ 
  id: 25, 
  question: "What is abnormal behavior?", 
  options: ["Behavior that is socially unacceptable and harmful", "Normal daily routine", "High intelligence", "Creative thinking"], 
  correctAnswer: 0, 
  explanation: "Abnormal behavior deviates from norms and may cause distress or impairment." 
}
        ,
        { id: 26, question: "What are the stages of Piaget's cognitive development?", options: ["Sensorimotor, Preoperational, Concrete, Formal", "Oral, Anal, Phallic, Latent", "Trust, Autonomy, Initiative, Industry", "Id, Ego, Superego, Self"], correctAnswer: 0, explanation: "Piaget's four stages are: Sensorimotor (0-2 years), Preoperational (2-7), Concrete Operational (7-11), and Formal Operational (11+)." },
      { id: 27, question: "What is Maslow's hierarchy of needs?", options: ["Theory of human motivation based on needs levels", "Classification of mental disorders", "Memory model", "Learning theory"], correctAnswer: 0, explanation: "Maslow's hierarchy organizes human needs from basic (physiological, safety) to higher-level (belonging, esteem, self-actualization)." },
      { id: 28, question: "What is short-term memory capacity?", options: ["About 7 items (plus or minus 2)", "Unlimited", "About 20 items", "About 3 items"], correctAnswer: 0, explanation: "George Miller found that short-term memory can hold about 7 items (plus or minus 2), known as Miller's Law." },
      { id: 29, question: "What is cognitive dissonance?", options: ["Mental discomfort from conflicting beliefs", "Memory loss", "Learning difficulty", "Attention deficit"], correctAnswer: 0, explanation: "Cognitive dissonance is the mental discomfort experienced when holding contradictory beliefs or when behavior contradicts beliefs." },
      { id: 30, question: "What is the nature vs. nurture debate?", options: ["Genetic vs. environmental influences on development", "Good vs. evil", "Mind vs. body", "Conscious vs. unconscious"], correctAnswer: 0, explanation: "The nature vs. nurture debate concerns the relative importance of genetic (nature) versus environmental (nurture) factors in human development." },
      ],
      final: 
      [
  {
    "id": 1,
    "question": "Who is widely regarded as the father of psychology?",
    "options": ["Sigmund Freud", "Wilhelm Wundt", "William James", "John B. Watson"],
    "correctAnswer": 1,
    "explanation": "Wilhelm Wundt established the first psychology laboratory in Leipzig, Germany, in 1879, marking psychology's emergence as a separate scientific discipline ."
  },
  {
    "id": 2,
    "question": "Which school of psychology focused on the basic elements of consciousness?",
    "options": ["Functionalism", "Behaviorism", "Structuralism", "Psychoanalysis"],
    "correctAnswer": 2,
    "explanation": "Structuralism, founded by Edward Titchener, aimed to identify the basic elements or 'structures' of consciousness through introspection ."
  },
  {
    "id": 3,
    "question": "Who developed the theory of psychoanalysis?",
    "options": ["Carl Jung", "Alfred Adler", "Sigmund Freud", "Karen Horney"],
    "correctAnswer": 2,
    "explanation": "Sigmund Freud developed psychoanalysis, emphasizing the role of unconscious conflicts in shaping behavior and personality ."
  },
  {
    "id": 4,
    "question": "Which perspective emphasizes the role of observable behavior and environmental factors?",
    "options": ["Cognitive perspective", "Behavioral perspective", "Humanistic perspective", "Biological perspective"],
    "correctAnswer": 1,
    "explanation": "The behavioral perspective, associated with Watson and Skinner, focuses on observable behavior and how it is learned through conditioning ."
  },
  {
    "id": 5,
    "question": "What is the correct order of the four primary goals of psychology?",
    "options": ["Explain, predict, control, describe", "Describe, explain, predict, control", "Predict, describe, explain, control", "Control, predict, describe, explain"],
    "correctAnswer": 1,
    "explanation": "The four primary goals of psychology are to describe, explain, predict, and control or change behavior and mental processes ."
  },
  {
    "id": 6,
    "question": "Who is known for the concept of the hierarchy of needs?",
    "options": ["Carl Rogers", "Abraham Maslow", "B.F. Skinner", "Albert Bandura"],
    "correctAnswer": 1,
    "explanation": "Abraham Maslow proposed the hierarchy of needs, a motivational theory comprising physiological, safety, love/belonging, esteem, and self-actualization needs ."
  },
  {
    "id": 7,
    "question": "Which part of the neuron receives signals from other neurons?",
    "options": ["Axon", "Cell body", "Dendrites", "Synapse"],
    "correctAnswer": 2,
    "explanation": "Dendrites are branch-like structures that receive signals from other neurons and transmit them toward the cell body ."
  },
  {
    "id": 8,
    "question": "What is the function of the myelin sheath?",
    "options": ["Produce neurotransmitters", "Receive signals", "Speed up neural transmission", "Store genetic material"],
    "correctAnswer": 2,
    "explanation": "The myelin sheath is an insulating layer that surrounds axons and speeds up the transmission of neural impulses ."
  },
  {
    "id": 9,
    "question": "Which neurotransmitter is associated with muscle movement and reward?",
    "options": ["Serotonin", "GABA", "Dopamine", "Endorphins"],
    "correctAnswer": 2,
    "explanation": "Dopamine is involved in voluntary movement, reward processing, and feelings of pleasure ."
  },
  {
    "id": 10,
    "question": "The 'little brain' that coordinates balance and motor movements is the:",
    "options": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
    "correctAnswer": 1,
    "explanation": "The cerebellum, meaning 'little brain,' coordinates voluntary movements, balance, and fine motor control ."
  },
  {
    "id": 11,
    "question": "Which lobe of the brain is primarily responsible for visual processing?",
    "options": ["Frontal lobe", "Parietal lobe", "Temporal lobe", "Occipital lobe"],
    "correctAnswer": 3,
    "explanation": "The occipital lobe, located at the back of the brain, is the primary visual processing center ."
  },
  {
    "id": 12,
    "question": "What is the role of the amygdala?",
    "options": ["Memory formation", "Emotional processing, especially fear", "Language comprehension", "Decision making"],
    "correctAnswer": 1,
    "explanation": "The amygdala is involved in emotional processing, particularly fear responses and emotional memories ."
  },
  {
    "id": 13,
    "question": "Who is known for the theory of operant conditioning?",
    "options": ["Ivan Pavlov", "John B. Watson", "B.F. Skinner", "Edward Thorndike"],
    "correctAnswer": 2,
    "explanation": "B.F. Skinner developed the theory of operant conditioning, which focuses on how behavior is shaped by reinforcement and punishment ."
  },
  {
    "id": 14,
    "question": "In Pavlov's experiment, what was the conditioned stimulus?",
    "options": ["Food", "Salivation", "Bell or tone", "The dog"],
    "correctAnswer": 2,
    "explanation": "The bell (or tone) was the neutral stimulus that became the conditioned stimulus after being paired with food, eliciting salivation ."
  },
  {
    "id": 15,
    "question": "What is negative reinforcement?",
    "options": ["Punishing a behavior", "Removing an unpleasant stimulus to increase a behavior", "Adding an unpleasant stimulus", "Removing a pleasant stimulus"],
    "correctAnswer": 1,
    "explanation": "Negative reinforcement involves removing an aversive stimulus to increase the likelihood of a desired behavior occurring again ."
  },
  {
    "id": 16,
    "question": "In classical conditioning, what is extinction?",
    "options": ["The initial learning phase", "The weakening of a conditioned response when the CS is presented without the UCS", "The reappearance of a conditioned response after a rest period", "The tendency to respond to similar stimuli"],
    "correctAnswer": 1,
    "explanation": "Extinction in classical conditioning is the gradual weakening and disappearance of the conditioned response when the conditioned stimulus is repeatedly presented without the unconditioned stimulus ."
  },
  {
    "id": 17,
    "question": "Who conducted the 'Little Albert' experiment?",
    "options": ["John B. Watson and Rosalie Rayner", "B.F. Skinner", "Ivan Pavlov", "Edward Thorndike"],
    "correctAnswer": 0,
    "explanation": "Watson and Rayner conditioned a fear response in 'Little Albert,' demonstrating that emotional responses could be classically conditioned in humans ."
  },
  {
    "id": 18,
    "question": "What is the capacity of short-term memory according to Miller's Law?",
    "options": ["3-5 items", "7 plus or minus 2 items", "10-12 items", "Unlimited"],
    "correctAnswer": 1,
    "explanation": "George Miller's classic research suggested that short-term memory has a capacity of about 7 (plus or minus 2) items or chunks of information ."
  },
  {
    "id": 19,
    "question": "Which type of memory is also known as 'knowing how'?",
    "options": ["Semantic memory", "Episodic memory", "Procedural memory", "Declarative memory"],
    "correctAnswer": 2,
    "explanation": "Procedural memory is a type of implicit memory that involves knowing how to perform tasks and skills, such as riding a bike or typing ."
  },
  {
    "id": 20,
    "question": "What is the serial position effect?",
    "options": ["Remembering the middle items best", "Remembering items at the beginning and end of a list best", "Forgetting items after sleep", "The effect of mood on memory"],
    "correctAnswer": 1,
    "explanation": "The serial position effect refers to the tendency to recall the first items (primacy effect) and last items (recency effect) in a list more easily than middle items ."
  },
  {
    "id": 21,
    "question": "Who proposed the theory of multiple intelligences?",
    "options": ["Alfred Binet", "Charles Spearman", "Howard Gardner", "Robert Sternberg"],
    "correctAnswer": 2,
    "explanation": "Howard Gardner proposed the theory of multiple intelligences, suggesting that intelligence is not a single entity but comprises distinct modalities such as linguistic, logical-mathematical, musical, and spatial intelligence ."
  },
  {
    "id": 22,
    "question": "What does the Stanford-Binet test measure?",
    "options": ["Personality", "Intelligence", "Aptitude", "Achievement"],
    "correctAnswer": 1,
    "explanation": "The Stanford-Binet is a standardized test that measures intelligence and cognitive abilities, providing an intelligence quotient (IQ) score ."
  },
  {
    "id": 23,
    "question": "Which psychologist is known for the stages of cognitive development?",
    "options": ["Lev Vygotsky", "Jean Piaget", "Erik Erikson", "Lawrence Kohlberg"],
    "correctAnswer": 1,
    "explanation": "Jean Piaget proposed a stage theory of cognitive development, including sensorimotor, preoperational, concrete operational, and formal operational stages ."
  },
  {
    "id": 24,
    "question": "During which of Piaget's stages does object permanence develop?",
    "options": ["Preoperational", "Concrete operational", "Sensorimotor", "Formal operational"],
    "correctAnswer": 2,
    "explanation": "Object permanence, the understanding that objects continue to exist even when out of sight, develops during the sensorimotor stage (birth to about 2 years) ."
  },
  {
    "id": 25,
    "question": "Who developed the theory of psychosocial development across the lifespan?",
    "options": ["Sigmund Freud", "Jean Piaget", "Erik Erikson", "John Bowlby"],
    "correctAnswer": 2,
    "explanation": "Erik Erikson proposed an eight-stage theory of psychosocial development, with each stage characterized by a specific conflict to resolve ."
  },
  {
    "id": 26,
    "question": "In Erikson's theory, what is the crisis of adolescence?",
    "options": ["Trust vs. Mistrust", "Initiative vs. Guilt", "Identity vs. Role Confusion", "Intimacy vs. Isolation"],
    "correctAnswer": 2,
    "explanation": "According to Erikson, the primary psychosocial crisis of adolescence is Identity vs. Role Confusion, where individuals explore who they are and their place in the world ."
  },
  {
    "id": 27,
    "question": "What is the term for the strong emotional bond between an infant and caregiver?",
    "options": ["Imprinting", "Attachment", "Temperament", "Social referencing"],
    "correctAnswer": 1,
    "explanation": "Attachment is the deep, enduring emotional bond that connects one person to another across time and space, particularly between infant and caregiver ."
  },
  {
    "id": 28,
    "question": "Who conducted the 'Strange Situation' experiment to study attachment?",
    "options": ["Harry Harlow", "John Bowlby", "Mary Ainsworth", "Diana Baumrind"],
    "correctAnswer": 2,
    "explanation": "Mary Ainsworth developed the 'Strange Situation' procedure to observe and classify infant attachment styles ."
  },
  {
    "id": 29,
    "question": "Which attachment style is characterized by distress upon separation and difficulty being comforted upon reunion?",
    "options": ["Secure", "Avoidant", "Ambivalent/Resistant", "Disorganized"],
    "correctAnswer": 2,
    "explanation": "Ambivalent/resistant attachment is characterized by intense distress when the caregiver leaves and difficulty being comforted upon their return, often showing mixed feelings ."
  },
  {
    "id": 30,
    "question": "Who proposed the hierarchy of needs?",
    "options": ["Carl Rogers", "Abraham Maslow", "Rollo May", "Viktor Frankl"],
    "correctAnswer": 1,
    "explanation": "Abraham Maslow proposed the hierarchy of needs, often depicted as a pyramid with physiological needs at the base and self-actualization at the peak ."
  },
  {
    "id": 31,
    "question": "In Maslow's hierarchy, which need must be satisfied first?",
    "options": ["Safety needs", "Esteem needs", "Physiological needs", "Love and belonging"],
    "correctAnswer": 2,
    "explanation": "According to Maslow, physiological needs (air, water, food, shelter) are the most basic and must be met before higher-level needs can be addressed ."
  },
  {
    "id": 32,
    "question": "What is the focus of positive psychology?",
    "options": ["Mental illness", "Unconscious conflicts", "Human strengths and flourishing", "Behavior modification"],
    "correctAnswer": 2,
    "explanation": "Positive psychology, pioneered by Martin Seligman, focuses on studying and promoting human strengths, well-being, and optimal functioning ."
  },
  {
    "id": 33,
    "question": "Which of the following is NOT a symptom of major depressive disorder according to the DSM?",
    "options": ["Depressed mood most of the day", "Diminished interest in activities", "Elevated, expansive mood", "Significant weight loss or gain"],
    "correctAnswer": 2,
    "explanation": "Elevated or expansive mood is characteristic of manic episodes in bipolar disorder, not major depressive disorder ."
  },
  {
    "id": 34,
    "question": "What is the primary feature of generalized anxiety disorder?",
    "options": ["Panic attacks", "Excessive worry about multiple things", "Fear of social situations", "Intrusive thoughts"],
    "correctAnswer": 1,
    "explanation": "Generalized anxiety disorder (GAD) is characterized by persistent, excessive, and uncontrollable worry about various aspects of life ."
  },
  {
    "id": 35,
    "question": "Which therapy approach focuses on challenging and changing irrational thoughts?",
    "options": ["Psychoanalysis", "Person-centered therapy", "Cognitive-behavioral therapy", "Gestalt therapy"],
    "correctAnswer": 2,
    "explanation": "Cognitive-behavioral therapy (CBT) focuses on identifying and challenging irrational or maladaptive thoughts and beliefs to change emotional responses and behaviors ."
  },
  {
    "id": 36,
    "question": "Who developed client-centered therapy?",
    "options": ["Albert Ellis", "Aaron Beck", "Carl Rogers", "Fritz Perls"],
    "correctAnswer": 2,
    "explanation": "Carl Rogers developed client-centered (or person-centered) therapy, emphasizing unconditional positive regard, empathy, and genuineness ."
  },
  {
    "id": 37,
    "question": "What is unconditional positive regard?",
    "options": ["Loving someone only when they meet expectations", "Accepting and valuing a person without conditions", "Positive reinforcement", "Agreeing with everything the client says"],
    "correctAnswer": 1,
    "explanation": "Unconditional positive regard is accepting and valuing a person without judgment or conditions, a key component of Roger's therapeutic approach ."
  },
  {
    "id": 38,
    "question": "Which psychological perspective emphasizes free will and human potential?",
    "options": ["Behaviorism", "Psychoanalysis", "Humanism", "Biological perspective"],
    "correctAnswer": 2,
    "explanation": "The humanistic perspective, associated with Rogers and Maslow, emphasizes human potential, free will, and the drive toward self-actualization ."
  },
  {
    "id": 39,
    "question": "What is the fundamental attribution error?",
    "options": ["Overestimating situational factors and underestimating personal factors", "Overestimating personal factors and underestimating situational factors", "Attributing success to luck", "Attributing failure to others"],
    "correctAnswer": 1,
    "explanation": "The fundamental attribution error is the tendency to overestimate dispositional (personality) factors and underestimate situational factors when explaining others' behavior ."
  },
  {
    "id": 40,
    "question": "What is cognitive dissonance?",
    "options": ["Agreement between beliefs and behaviors", "The discomfort caused by conflicting beliefs or behaviors", "A type of memory distortion", "A learning disability"],
    "correctAnswer": 1,
    "explanation": "Cognitive dissonance is the psychological discomfort experienced when holding two or more conflicting beliefs, attitudes, or when behavior conflicts with beliefs ."
  },
  {
    "id": 41,
    "question": "Who conducted the Stanford prison experiment?",
    "options": ["Stanley Milgram", "Solomon Asch", "Philip Zimbardo", "Muzafer Sherif"],
    "correctAnswer": 2,
    "explanation": "Philip Zimbardo conducted the Stanford prison experiment, which demonstrated how situational factors can influence behavior and lead to abusive actions ."
  },
  {
    "id": 42,
    "question": "Milgram's obedience experiment studied:",
    "options": ["Conformity to group pressure", "Willingness to obey authority figures", "Helping behavior in emergencies", "Formation of social norms"],
    "correctAnswer": 1,
    "explanation": "Stanley Milgram's experiment studied the willingness of participants to obey an authority figure who instructed them to administer shocks to another person ."
  },
  {
    "id": 43,
    "question": "What is the bystander effect?",
    "options": ["People are more likely to help in a group", "The presence of others decreases likelihood of helping", "Only trained professionals help in emergencies", "People always help when alone"],
    "correctAnswer": 1,
    "explanation": "The bystander effect is the phenomenon where individuals are less likely to offer help to a victim when other people are present ."
  },
  {
    "id": 44,
    "question": "Which of the following is NOT one of the Big Five personality traits?",
    "options": ["Openness", "Neuroticism", "Extraversion", "Locus of control"],
    "correctAnswer": 3,
    "explanation": "The Big Five personality traits are Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism (OCEAN). Locus of control is a different personality concept ."
  },
  {
    "id": 45,
    "question": "Who developed the theory of the collective unconscious and archetypes?",
    "options": ["Sigmund Freud", "Alfred Adler", "Carl Jung", "Karen Horney"],
    "correctAnswer": 2,
    "explanation": "Carl Jung proposed the collective unconscious, a universal layer of the unconscious mind containing archetypes—universal symbols and themes ."
  },
  {
    "id": 46,
    "question": "What is the Rorschach inkblot test designed to measure?",
    "options": ["Intelligence", "Achievement", "Personality and emotional functioning", "Aptitude"],
    "correctAnswer": 2,
    "explanation": "The Rorschach inkblot test is a projective psychological test used to assess personality, emotional functioning, and thought processes ."
  },
  {
    "id": 47,
    "question": "Which sleep stage is associated with vivid dreaming?",
    "options": ["Stage 1 NREM", "Stage 2 NREM", "Stage 3 NREM", "REM sleep"],
    "correctAnswer": 3,
    "explanation": "REM (Rapid Eye Movement) sleep is the stage most associated with vivid, story-like dreaming ."
  },
  {
    "id": 48,
    "question": "What is the difference between a psychologist and a psychiatrist?",
    "options": ["They are the same", "Psychiatrists can prescribe medication; psychologists typically cannot", "Psychologists can perform surgery", "Psychiatrists only do research"],
    "correctAnswer": 1,
    "explanation": "The main difference is that psychiatrists are medical doctors who can prescribe medication, while psychologists typically have doctoral degrees in psychology and focus on therapy and assessment ."
  },
  {
    "id": 49,
    "question": "What is the DSM used for?",
    "options": ["Measuring intelligence", "Diagnosing mental disorders", "Assessing personality", "Treating phobias"],
    "correctAnswer": 1,
    "explanation": "The Diagnostic and Statistical Manual of Mental Disorders (DSM) is the standard classification of mental disorders used by mental health professionals for diagnosis ."
  },
  {
    "id": 50,
    "question": "What is the placebo effect?",
    "options": ["A real treatment effect", "A harmful effect of treatment", "Improvement due to belief in treatment rather than the treatment itself", "No effect at all"],
    "correctAnswer": 2,
    "explanation": "The placebo effect is a positive therapeutic effect resulting from a patient's belief in the treatment rather than the specific treatment itself ."
  },
  {
    "id": 51,
    "question": "Which part of the eye contains photoreceptors?",
    "options": ["Cornea", "Iris", "Retina", "Lens"],
    "correctAnswer": 2,
    "explanation": "The retina, at the back of the eye, contains photoreceptor cells (rods and cones) that convert light into neural signals ."
  },
  {
    "id": 52,
    "question": "What is the difference between sensation and perception?",
    "options": ["They are the same", "Sensation is detection; perception is interpretation", "Perception is detection; sensation is interpretation", "Both involve interpretation"],
    "correctAnswer": 1,
    "explanation": "Sensation is the process of detecting stimuli from the environment, while perception is the process of organizing and interpreting those sensations ."
  },
  {
    "id": 53,
    "question": "What is the absolute threshold in sensation?",
    "options": ["The minimum difference between two stimuli", "The smallest amount of stimulation needed to detect a stimulus 50% of the time", "The point where a stimulus becomes painful", "The maximum amount of stimulation"],
    "correctAnswer": 1,
    "explanation": "The absolute threshold is the minimum amount of stimulus energy required for a stimulus to be detected 50% of the time ."
  },
  {
    "id": 54,
    "question": "What does the Yerkes-Dodson law describe?",
    "options": ["The relationship between reward and learning", "The relationship between arousal and performance", "The relationship between stress and illness", "The relationship between age and memory"],
    "correctAnswer": 1,
    "explanation": "The Yerkes-Dodson law describes that performance increases with arousal to a certain point, after which further arousal impairs performance (an inverted U-shaped curve) ."
  },
  {
    "id": 55,
    "question": "Which research method involves in-depth study of a single individual or small group?",
    "options": ["Survey", "Experiment", "Correlational study", "Case study"],
    "correctAnswer": 3,
    "explanation": "A case study is an in-depth investigation of a single individual, group, or event, often used to explore unique phenomena or generate hypotheses ."
  }

      ,
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

      { 
  id: 11, 
  question: "Which organization promotes political and economic integration among African countries?", 
  options: ["European Union", "African Union", "United Nations", "Arab League"], 
  correctAnswer: 1, 
  explanation: "The African Union (AU) promotes unity, peace, and economic integration across Africa." 
},

{ 
  id: 12, 
  question: "Which country hosts the headquarters of the African Union?", 
  options: ["Kenya", "Nigeria", "Ethiopia", "South Africa"], 
  correctAnswer: 2, 
  explanation: "The African Union headquarters is located in Addis Ababa, Ethiopia." 
},

{ 
  id: 13, 
  question: "Which global organization is primarily responsible for maintaining international peace and security?", 
  options: ["World Bank", "United Nations", "IMF", "WTO"], 
  correctAnswer: 1, 
  explanation: "The United Nations is responsible for maintaining international peace and security." 
},

{ 
  id: 14, 
  question: "What is NATO primarily known for?", 
  options: ["Economic aid", "Military alliance", "Environmental protection", "Trade regulation"], 
  correctAnswer: 1, 
  explanation: "NATO is a military alliance formed for collective defense among member states." 
},

{ 
  id: 15, 
  question: "Which strait connects the Red Sea to the Gulf of Aden?", 
  options: ["Strait of Hormuz", "Bab el-Mandeb", "Suez Canal", "Bosphorus"], 
  correctAnswer: 1, 
  explanation: "Bab el-Mandeb is a key maritime chokepoint connecting the Red Sea to the Gulf of Aden." 
},

{ 
  id: 16, 
  question: "Which country is the largest economy in Africa by GDP?", 
  options: ["Ethiopia", "Egypt", "Nigeria", "Kenya"], 
  correctAnswer: 2, 
  explanation: "Nigeria has the largest economy in Africa by GDP." 
},

{ 
  id: 17, 
  question: "What is the main objective of the World Trade Organization (WTO)?", 
  options: ["Military cooperation", "Promote free trade", "Environmental protection", "Human rights advocacy"], 
  correctAnswer: 1, 
  explanation: "The WTO regulates and promotes international trade between nations." 
},

{ 
  id: 18, 
  question: "Which region is often referred to as the Middle East's major oil hub?", 
  options: ["Levant", "Gulf Region", "Maghreb", "Horn of Africa"], 
  correctAnswer: 1, 
  explanation: "The Gulf Region holds some of the world's largest oil reserves." 
},

{ 
  id: 19, 
  question: "What is the main purpose of the International Monetary Fund (IMF)?", 
  options: ["Provide military aid", "Promote financial stability", "Build infrastructure", "Regulate internet governance"], 
  correctAnswer: 1, 
  explanation: "The IMF works to ensure global financial stability and provides financial assistance to countries." 
},

{ 
  id: 20, 
  question: "Which country controls the Suez Canal?", 
  options: ["Sudan", "Egypt", "Saudi Arabia", "Turkey"], 
  correctAnswer: 1, 
  explanation: "Egypt controls the Suez Canal, a key global shipping route." 
},

{ 
  id: 21, 
  question: "Which concept refers to the use of cultural influence in global politics?", 
  options: ["Hard power", "Soft power", "Sanctions", "Militarization"], 
  correctAnswer: 1, 
  explanation: "Soft power involves influencing others through culture, diplomacy, and values rather than force." 
},

{ 
  id: 22, 
  question: "Which body of the United Nations has veto power?", 
  options: ["General Assembly", "Security Council", "UNESCO", "ICJ"], 
  correctAnswer: 1, 
  explanation: "The UN Security Council has five permanent members with veto power." 
},

{ 
  id: 23, 
  question: "What is BRICS an acronym for?", 
  options: ["Brazil, Russia, India, China, South Africa", "Belgium, Romania, Italy, Canada, Spain", "Britain, Russia, Iran, China, سوريا", "None"], 
  correctAnswer: 0, 
  explanation: "BRICS represents Brazil, Russia, India, China, and South Africa." 
},

{ 
  id: 24, 
  question: "Which global issue is primarily addressed by the Paris Agreement?", 
  options: ["Trade tariffs", "Climate change", "Nuclear weapons", "Migration"], 
  correctAnswer: 1, 
  explanation: "The Paris Agreement focuses on reducing global greenhouse gas emissions." 
},

{ 
  id: 25, 
  question: "Which African country has one of the busiest ports in East Africa (Mombasa Port)?", 
  options: ["Tanzania", "Kenya", "Djibouti", "Somalia"], 
  correctAnswer: 1, 
  explanation: "Kenya's Port of Mombasa is one of the busiest in East Africa." 
},

{ 
  id: 26, 
  question: "What is the primary goal of sanctions in international relations?", 
  options: ["Encourage tourism", "Punish and pressure governments", "Promote sports diplomacy", "Increase trade"], 
  correctAnswer: 1, 
  explanation: "Sanctions are used to pressure governments to change policies." 
},

{ 
  id: 27, 
  question: "Which country is a permanent member of the UN Security Council?", 
  options: ["Germany", "Japan", "France", "India"], 
  correctAnswer: 2, 
  explanation: "France is one of the five permanent members of the UN Security Council." 
},

{ 
  id: 28, 
  question: "What does the term 'geopolitics' refer to?", 
  options: ["Sports competition between countries", "Geographical influence on political power", "Religious governance", "Economic inflation"], 
  correctAnswer: 1, 
  explanation: "Geopolitics studies how geography influences political power and international relations." 
},

{ 
  id: 29, 
  question: "Which organization focuses on global public health?", 
  options: ["WHO", "WTO", "UNICEF", "OPEC"], 
  correctAnswer: 0, 
  explanation: "The World Health Organization (WHO) leads global public health efforts." 
},

{ 
  id: 30, 
  question: "Which country is part of the Horn of Africa?", 
  options: ["Ethiopia", "Ghana", "Senegal", "Algeria"], 
  correctAnswer: 0, 
  explanation: "Ethiopia is one of the core countries in the Horn of Africa region." 
},

{ 
  id: 31, 
  question: "Which canal significantly reduces travel distance between Europe and Asia?", 
  options: ["Panama Canal", "Suez Canal", "Kiel Canal", "Corinth Canal"], 
  correctAnswer: 1, 
  explanation: "The Suez Canal connects the Mediterranean Sea to the Red Sea, shortening global shipping routes." 
},

{ 
  id: 32, 
  question: "Which country is the world's largest oil exporter?", 
  options: ["USA", "Russia", "Saudi Arabia", "Canada"], 
  correctAnswer: 2, 
  explanation: "Saudi Arabia is one of the world's largest oil exporters." 
},

{ 
  id: 33, 
  question: "What does ASEAN stand for?", 
  options: ["African Economic Security Alliance", "Association of Southeast Asian Nations", "American Security Alliance Network", "Asian Energy Security Agreement"], 
  correctAnswer: 1, 
  explanation: "ASEAN stands for Association of Southeast Asian Nations." 
},

{ 
  id: 34, 
  question: "Which international court settles disputes between states?", 
  options: ["ICC", "ICJ", "Interpol", "WFP"], 
  correctAnswer: 1, 
  explanation: "The International Court of Justice (ICJ) resolves disputes between states." 
},

{ 
  id: 35, 
  question: "What is the main objective of OPEC?", 
  options: ["Promote tourism", "Coordinate oil production policies", "Environmental protection", "Military cooperation"], 
  correctAnswer: 1, 
  explanation: "OPEC coordinates oil production policies among member countries." 
}
      ],
      final:
      [
  {
    "id": 1,
    "question": "What is the definition of global affairs?",
    "options": ["The study of domestic policy only", "The interdisciplinary study of global macro-processes including political, economic, and cultural interactions between nations", "The study of international business only", "The analysis of historical events only"],
    "correctAnswer": 1,
    "explanation": "Global affairs (or global studies) is the interdisciplinary study of global macro-processes, including political science, economics, law, ecology, and cultural interactions between nations [citation:4]."
  },
  {
    "id": 2,
    "question": "How does global affairs differ from international relations?",
    "options": ["They are exactly the same", "Global affairs focuses less on the nation-state and more on broader global processes", "International relations studies everything while global affairs is limited", "Global affairs only studies economics"],
    "correctAnswer": 1,
    "explanation": "Global affairs distinguishes itself from international relations by its comparatively lesser focus on the nation-state as a fundamental analytical unit, instead focusing on broader issues relating to cultural and economic globalization [citation:4]."
  },
  {
    "id": 3,
    "question": "Which of the following is NOT a characteristic of global studies identified by the Global Studies Consortium?",
    "options": ["Transnationality", "Interdisciplinary approach", "Postcolonial perspective", "Nation-state centric analysis"],
    "correctAnswer": 3,
    "explanation": "The Global Studies Consortium identified transnationality, interdisciplinary approach, and postcolonial perspective as key characteristics. Nation-state centric analysis is more typical of traditional international relations [citation:4]."
  },
  {
    "id": 4,
    "question": "Where is the headquarters of the United Nations located?",
    "options": ["Geneva, Switzerland", "Vienna, Austria", "New York City, USA", "The Hague, Netherlands"],
    "correctAnswer": 2,
    "explanation": "The headquarters of the United Nations is located in New York City, USA [citation:9]."
  },
  {
    "id": 5,
    "question": "Which treaty signed in 1945 established the United Nations?",
    "options": ["Treaty of Versailles", "Charter of the United Nations", "Paris Agreement", "Lisbon Treaty"],
    "correctAnswer": 1,
    "explanation": "The Charter of the United Nations was signed in 1945 and established the United Nations [citation:9]."
  },
  {
    "id": 6,
    "question": "Which of the following countries is a permanent member of the United Nations Security Council?",
    "options": ["Germany", "India", "Japan", "United States"],
    "correctAnswer": 3,
    "explanation": "The United States is a permanent member of the UN Security Council, along with Russia, China, France, and the United Kingdom [citation:9]."
  },
  {
    "id": 7,
    "question": "Where is the headquarters of the International Court of Justice located?",
    "options": ["New York City, USA", "Geneva, Switzerland", "The Hague, Netherlands", "Vienna, Austria"],
    "correctAnswer": 2,
    "explanation": "The International Court of Justice is headquartered in The Hague, Netherlands [citation:9]."
  },
  {
    "id": 8,
    "question": "What does NATO stand for?",
    "options": ["North American Trade Organization", "National Alliance for Transparency and Oversight", "North Atlantic Treaty Organization", "New Aviation Technological Order"],
    "correctAnswer": 2,
    "explanation": "NATO stands for North Atlantic Treaty Organization, a military alliance established in 1949 [citation:9]."
  },
  {
    "id": 9,
    "question": "Which country withdrew from the European Union in 2020 in a process known as Brexit?",
    "options": ["France", "Germany", "United Kingdom", "Italy"],
    "correctAnswer": 2,
    "explanation": "The United Kingdom withdrew from the European Union in 2020 in a process known as Brexit [citation:9]."
  },
  {
    "id": 10,
    "question": "Where is the headquarters of the European Union located?",
    "options": ["Paris, France", "Berlin, Germany", "Brussels, Belgium", "Strasbourg, France"],
    "correctAnswer": 2,
    "explanation": "The headquarters of the European Union is located in Brussels, Belgium [citation:9]."
  },
  {
    "id": 11,
    "question": "Who is the current Secretary-General of the United Nations?",
    "options": ["Ban Ki-moon", "Kofi Annan", "António Guterres", "Dag Hammarskjöld"],
    "correctAnswer": 2,
    "explanation": "António Guterres is the current Secretary-General of the United Nations [citation:9]."
  },
  {
    "id": 12,
    "question": "The Arab League has its headquarters in which city?",
    "options": ["Dubai", "Riyadh", "Cairo", "Amman"],
    "correctAnswer": 2,
    "explanation": "The Arab League has its headquarters in Cairo, Egypt [citation:9]."
  },
  {
    "id": 13,
    "question": "Which of the following are member countries of the Organisation of the Petroleum Exporting Countries (OPEC)?",
    "options": ["Russia, Oman, and Brazil", "Algeria, Venezuela, Iran, and Gabon", "China, India, and Japan", "United States, Canada, and Mexico"],
    "correctAnswer": 1,
    "explanation": "OPEC member countries include Algeria, Venezuela, Iran, Gabon, along with others like Saudi Arabia, Iraq, Kuwait, and the UAE. Russia is not an OPEC member (though part of OPEC+) [citation:6]."
  },
  {
    "id": 14,
    "question": "When was OPEC founded?",
    "options": ["1945", "1950", "1960", "1973"],
    "correctAnswer": 2,
    "explanation": "OPEC was founded on September 14, 1960, in Baghdad, Iraq, by five founding members: Iran, Iraq, Kuwait, Saudi Arabia, and Venezuela [citation:6]."
  },
  {
    "id": 15,
    "question": "Which country is India's largest trade partner in Latin America?",
    "options": ["Argentina", "Chile", "Brazil", "Mexico"],
    "correctAnswer": 2,
    "explanation": "Brazil is India's largest trade partner in Latin America. In 2025, bilateral trade between India and Brazil surpassed $15 billion for the first time [citation:6]."
  },
  {
    "id": 16,
    "question": "The 'Emissions Gap Report' is published by which organization?",
    "options": ["Intergovernmental Panel on Climate Change", "World Meteorological Organization", "United Nations Environment Programme", "International Energy Agency"],
    "correctAnswer": 2,
    "explanation": "The Emissions Gap Report is published by the United Nations Environment Programme (UNEP) [citation:6]."
  },
  {
    "id": 17,
    "question": "What is 'Area 51'?",
    "options": ["A commercial space launch center", "A highly classified US military testing facility in Nevada", "A nuclear power generation site", "A joint military base of the US and Canada"],
    "correctAnswer": 1,
    "explanation": "Area 51 is a highly classified US military testing facility in Nevada, about 83 miles north of Las Vegas [citation:6]."
  },
  {
    "id": 18,
    "question": "Which country is closest to the Great Nicobar Islands?",
    "options": ["Tamil Nadu coast of India", "Sri Lanka", "Northern tip of Sumatra, Indonesia", "Malaysia"],
    "correctAnswer": 2,
    "explanation": "The Northern tip of Sumatra, Indonesia, is closest to the Great Nicobar Islands at approximately 150-200 km distance [citation:6]."
  },
  {
    "id": 19,
    "question": "Which international organization deals with global public health issues?",
    "options": ["International Monetary Fund", "World Trade Organization", "World Health Organization", "World Bank"],
    "correctAnswer": 2,
    "explanation": "The World Health Organization (WHO) is the international organization that deals with global public health issues [citation:9]."
  },
  {
    "id": 20,
    "question": "The Marshall Plan was an economic recovery initiative for which region?",
    "options": ["Asia", "Africa", "Europe", "South America"],
    "correctAnswer": 2,
    "explanation": "The Marshall Plan was an economic recovery initiative for Europe after World War II [citation:9]."
  },
  {
    "id": 21,
    "question": "According to the WEF Global Risks Report 2026, what is the most significant risk for 2026?",
    "options": ["Climate change", "Cyber attacks", "Geoeconomic confrontation", "Pandemics"],
    "correctAnswer": 2,
    "explanation": "According to the WEF Global Risks Report 2026, geoeconomic confrontation is ranked as the most significant risk for 2026 [citation:2]."
  },
  {
    "id": 22,
    "question": "What percentage of global experts expressed a pessimistic world outlook over the next two years in the WEF 2026 report?",
    "options": ["25%", "50%", "75%", "10%"],
    "correctAnswer": 1,
    "explanation": "In the WEF Global Risks Report 2026, 50 percent of some 1,300 global experts expressed a pessimistic world outlook over the next two years [citation:2][citation:5]."
  },
  {
    "id": 23,
    "question": "What are the top three short-term risks identified in the WEF 2026 report?",
    "options": ["Climate change, biodiversity loss, natural disasters", "Geoeconomic confrontation, misinformation, societal polarization", "Cyber attacks, terrorism, organized crime", "Debt crises, inflation, asset bubbles"],
    "correctAnswer": 1,
    "explanation": "The WEF 2026 report identifies geoeconomic confrontation, misinformation and disinformation, and societal polarization as the top three short-term risks [citation:2][citation:5]."
  },
  {
    "id": 24,
    "question": "What are the top three long-term risks (10-year horizon) according to the WEF 2026 report?",
    "options": ["Geopolitical conflicts, terrorism, nuclear weapons", "Extreme weather events, biodiversity loss, critical change to Earth systems", "AI risks, cyber attacks, technological inequality", "Debt crises, inflation, economic stagnation"],
    "correctAnswer": 1,
    "explanation": "The top three long-term risks are extreme weather events, biodiversity loss and ecosystem collapse, and critical change to Earth systems [citation:2][citation:5]."
  },
  {
    "id": 25,
    "question": "What was the total global debt in 2024 according to the WEF report?",
    "options": ["100 trillion USD", "150 trillion USD", "251 trillion USD", "300 trillion USD"],
    "correctAnswer": 2,
    "explanation": "According to the WEF 2026 report, global debt reached 251 trillion USD in 2024, representing 235% of global GDP [citation:2]."
  },
  {
    "id": 26,
    "question": "Which territory is in dispute between India and Pakistan?",
    "options": ["Tibet", "Kashmir", "Falkland Islands", "Taiwan"],
    "correctAnswer": 1,
    "explanation": "Kashmir is the territory in dispute between India and Pakistan [citation:9]."
  },
  {
    "id": 27,
    "question": "The Good Friday Agreement is associated with peace efforts in which region?",
    "options": ["Middle East", "Western Balkans", "Northern Ireland", "South Asia"],
    "correctAnswer": 2,
    "explanation": "The Good Friday Agreement is associated with peace efforts in Northern Ireland [citation:9]."
  },
  {
    "id": 28,
    "question": "In which year did the Berlin Wall fall?",
    "options": ["1985", "1989", "1991", "1993"],
    "correctAnswer": 1,
    "explanation": "The Berlin Wall fell in 1989, leading to German reunification [citation:9]."
  },
  {
    "id": 29,
    "question": "What is the main religion of Saudi Arabia?",
    "options": ["Christianity", "Hinduism", "Buddhism", "Islam"],
    "correctAnswer": 3,
    "explanation": "Islam is the main religion of Saudi Arabia [citation:9]."
  },
  {
    "id": 30,
    "question": "The Baltic states include Estonia, Latvia, and which other country?",
    "options": ["Finland", "Belarus", "Lithuania", "Poland"],
    "correctAnswer": 2,
    "explanation": "The Baltic states include Estonia, Latvia, and Lithuania [citation:9]."
  },
  {
    "id": 31,
    "question": "What is the official language of Brazil?",
    "options": ["Spanish", "French", "Portuguese", "English"],
    "correctAnswer": 2,
    "explanation": "The official language of Brazil is Portuguese [citation:9]."
  },
  {
    "id": 32,
    "question": "The Arab Spring (2010-2012) primarily affected countries in which region?",
    "options": ["Latin America", "Southeast Asia", "Middle East and North Africa", "Sub-Saharan Africa"],
    "correctAnswer": 2,
    "explanation": "The Arab Spring primarily affected countries in the Middle East and North Africa [citation:9]."
  },
  {
    "id": 33,
    "question": "Which country is not a member of the G7?",
    "options": ["Germany", "Japan", "Canada", "China"],
    "correctAnswer": 3,
    "explanation": "China is not a member of the G7. The G7 members are Canada, France, Germany, Italy, Japan, the United Kingdom, and the United States [citation:9]."
  },
  {
    "id": 34,
    "question": "Who was the first woman to serve as the United States Secretary of State?",
    "options": ["Hillary Clinton", "Condoleezza Rice", "Madeleine Albright", "Margaret Thatcher"],
    "correctAnswer": 2,
    "explanation": "Madeleine Albright was the first woman to serve as the United States Secretary of State [citation:9]."
  },
  {
    "id": 35,
    "question": "Where are the headquarters of the International Atomic Energy Agency (IAEA) located?",
    "options": ["Geneva, Switzerland", "Paris, France", "Vienna, Austria", "The Hague, Netherlands"],
    "correctAnswer": 2,
    "explanation": "The International Atomic Energy Agency (IAEA) is headquartered in Vienna, Austria [citation:9]."
  },
  {
    "id": 36,
    "question": "Which country is known for its policy of 'neutrality' and has not been involved in any armed conflict since 1815?",
    "options": ["Sweden", "Finland", "Austria", "Switzerland"],
    "correctAnswer": 3,
    "explanation": "Switzerland is known for its policy of neutrality and has not been involved in any armed conflict since 1815 [citation:9]."
  },
  {
    "id": 37,
    "question": "Which country is home to the headquarters of the African Union?",
    "options": ["Kenya", "South Africa", "Nigeria", "Ethiopia"],
    "correctAnswer": 3,
    "explanation": "The African Union is headquartered in Addis Ababa, Ethiopia [citation:9]."
  },
  {
    "id": 38,
    "question": "What is the term used to describe the negotiation process between countries to resolve conflicts peacefully?",
    "options": ["Warfare", "Isolationism", "Diplomacy", "Revolution"],
    "correctAnswer": 2,
    "explanation": "Diplomacy is the term used to describe the negotiation process between countries to resolve conflicts peacefully [citation:9]."
  },
  {
    "id": 39,
    "question": "Which famous city is divided by the Bosphorus Strait between Europe and Asia?",
    "options": ["Athens", "Rome", "Istanbul", "Cairo"],
    "correctAnswer": 2,
    "explanation": "Istanbul is divided by the Bosphorus Strait between Europe and Asia [citation:9]."
  },
  {
    "id": 40,
    "question": "What is the name of the agreement signed in 2015 to combat climate change?",
    "options": ["Kyoto Protocol", "Montreal Protocol", "Paris Agreement", "Copenhagen Accord"],
    "correctAnswer": 2,
    "explanation": "The Paris Agreement was signed in 2015 to combat climate change [citation:9]."
  },
  {
    "id": 41,
    "question": "Which of the following is a core subject area within global affairs according to ASU's framework?",
    "options": ["Only diplomacy and international cooperation", "Diplomacy, global economics, human rights, security, and climate policy", "Only security and military strategy", "Only trade and development"],
    "correctAnswer": 1,
    "explanation": "Core subject areas in global affairs include diplomacy and international cooperation, global economics and development, human rights and global justice, global and national security, and climate change and environmental policy [citation:7]."
  },
  {
    "id": 42,
    "question": "According to INSEAD faculty, what was identified as the leading threat to business in 2026?",
    "options": ["Climate change", "AI and digital transformation", "Geopolitical crises", "Income inequality"],
    "correctAnswer": 2,
    "explanation": "According to INSEAD faculty, 64 percent identified geopolitical crises as the leading threat to business in 2026 [citation:5]."
  },
  {
    "id": 43,
    "question": "What percentage of INSEAD faculty identified AI as a key threat to business in 2026?",
    "options": ["24%", "44%", "61%", "29%"],
    "correctAnswer": 1,
    "explanation": "44 percent of INSEAD faculty identified AI as a key threat to business in 2026, while 61 percent said it was a leading area businesses should address [citation:5]."
  },
  {
    "id": 44,
    "question": "According to the World Bank's Global Economic Prospects report, what percentage of advanced economies have per capita incomes above pre-pandemic levels?",
    "options": ["60%", "75%", "90%", "100%"],
    "correctAnswer": 2,
    "explanation": "According to the World Bank's report, 90 percent of advanced economies now have per capita incomes above pre-pandemic levels [citation:5]."
  },
  {
    "id": 45,
    "question": "What is the projected global economic growth rate for 2026 according to the UN Department of Economic and Social Affairs?",
    "options": ["3.2%", "2.8%", "2.7%", "2.5%"],
    "correctAnswer": 2,
    "explanation": "According to the UN Department of Economic and Social Affairs, global economic growth will decline slightly to 2.7 percent in 2026 [citation:5]."
  },
  {
    "id": 46,
    "question": "According to economic analysis, how do US tariffs in 2026 compare historically?",
    "options": ["They are lower than in the 1990s", "They are at average historical levels", "They are higher than they have been since the 1930s", "They are the highest in US history"],
    "correctAnswer": 2,
    "explanation": "Tariffs imposed by the US are higher than they have been since the 1930s, even if threats were typically for higher levels than what was implemented [citation:8]."
  },
  {
    "id": 47,
    "question": "What percentage of job postings require AI skills according to recent data?",
    "options": ["Below 4%", "10-15%", "20-25%", "Over 30%"],
    "correctAnswer": 0,
    "explanation": "Despite AI's growing presence, job postings requiring AI skills remain below 4 percent, raising questions about its immediate economic impact [citation:8]."
  },
  {
    "id": 48,
    "question": "What was the US public debt level in 2024?",
    "options": ["$15 trillion", "$25 trillion", "$35 trillion", "$45 trillion"],
    "correctAnswer": 2,
    "explanation": "US public debt rose from roughly $8.5 trillion in 2005 to $35 trillion in 2024 [citation:8]."
  },
  {
    "id": 49,
    "question": "What is the debt-to-GDP ratio of the United States?",
    "options": ["Around 80%", "Around 100%", "Around 120%", "Around 150%"],
    "correctAnswer": 2,
    "explanation": "The US debt-to-GDP ratio is around 120 percent [citation:8]."
  },
  {
    "id": 50,
    "question": "Which European countries have debt-to-GDP ratios exceeding 100%?",
    "options": ["Germany only", "France, United Kingdom, and Italy", "Spain and Portugal only", "All EU members"],
    "correctAnswer": 1,
    "explanation": "France, the United Kingdom, and Italy all exceed 100 percent debt-to-GDP, with France facing particularly severe challenges [citation:8]."
  },
  {
    "id": 51,
    "question": "According to the Edelman Trust Barometer, which sector continues to be viewed as the most competent and ethical?",
    "options": ["Governments", "NGOs", "Media", "Business sector"],
    "correctAnswer": 3,
    "explanation": "Compared with governments, NGOs and the media, business continues to be viewed as the most competent and ethical, putting business leaders in the position of being 'trust brokers' [citation:5]."
  },
  {
    "id": 52,
    "question": "What percentage of respondents in a Reuters Institute survey were concerned about distinguishing real and fake online news?",
    "options": ["38%", "48%", "58%", "68%"],
    "correctAnswer": 2,
    "explanation": "A recent survey by the Reuters Institute showed that 58 percent of respondents were concerned about distinguishing real and fake online news [citation:5]."
  },
  {
    "id": 53,
    "question": "According to the WEF report, how is inequality characterized in relation to other global risks?",
    "options": ["As the least interconnected risk", "As the most interconnected risk", "As unrelated to other risks", "As a declining risk"],
    "correctAnswer": 1,
    "explanation": "The WEF report identified inequality as the 'most interconnected' risk because of how it's affected by other aspects such as climate change and AI [citation:5]."
  },
  {
    "id": 54,
    "question": "When was the first Global Studies conference held?",
    "options": ["2000", "2005", "2008", "2010"],
    "correctAnswer": 2,
    "explanation": "The first Global Studies conference was held at the University of Illinois Chicago in 2008 [citation:4]."
  },
  {
    "id": 55,
    "question": "Which of the following is a transnational challenge addressed by global affairs?",
    "options": ["Only border disputes", "Only trade agreements", "Climate change, terrorism, health crises, and refugee movements", "Only diplomatic protocols"],
    "correctAnswer": 2,
    "explanation": "International affairs address transnational challenges such as climate change, terrorism, health crises, and refugee movements [citation:9]."
  }
 
      ,
      { id: 111, question: "What is human rights?", options: ["Rights inherent to all human beings", "Legal privileges", "Government permissions", "Cultural traditions"], correctAnswer: 0, explanation: "Human rights are rights inherent to all human beings, regardless of race, sex, nationality, ethnicity, language, religion, or any other status." },
      { id: 121, question: "What is IGAD?", options: ["Intergovernmental Authority on Development in East Africa", "European Union body", "Asian trade organization", "American defense alliance"], correctAnswer: 0, explanation: "IGAD is a regional organization of eight East African countries working on development, peace, and security, headquartered in Djibouti." },
      { id: 131, question: "What is the purpose of international law?", options: ["Regulate relations between states", "Govern domestic affairs", "Control trade only", "Manage military only"], correctAnswer: 0, explanation: "International law establishes norms and rules that govern relations between states and international organizations." },
      { id: 141, question: "What is foreign policy?", options: ["A country's strategy in dealing with other nations", "Domestic economic policy", "Internal security", "Local governance"], correctAnswer: 0, explanation: "Foreign policy is a government's strategy for dealing with other nations, covering diplomacy, trade, military, and more." },
      { id: 151, question: "What is peacekeeping?", options: ["International efforts to maintain peace in conflict areas", "Domestic policing", "Military conquest", "Economic sanctions"], correctAnswer: 0, explanation: "Peacekeeping involves international military and civilian personnel deployed to help countries transition from conflict to peace." }
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
      { 
  id: 1, 
  question: "What does inclusiveness primarily promote in society?", 
  options: ["Exclusion of minorities", "Equal opportunity and participation", "Cultural isolation", "Uniform thinking"], 
  correctAnswer: 1, 
  explanation: "Inclusiveness promotes equal opportunity, respect, and participation for all individuals regardless of background." 
},

{ 
  id: 2, 
  question: "Which term refers to the presence of differences within a group?", 
  options: ["Equality", "Diversity", "Equity", "Integration"], 
  correctAnswer: 1, 
  explanation: "Diversity refers to the presence of differences such as race, gender, culture, and beliefs within a group." 
},

{ 
  id: 3, 
  question: "What is equity focused on?", 
  options: ["Treating everyone exactly the same", "Providing resources based on individual needs", "Ignoring differences", "Promoting competition only"], 
  correctAnswer: 1, 
  explanation: "Equity ensures fairness by providing resources and opportunities according to individual needs." 
},

{ 
  id: 4, 
  question: "Inclusive education aims to:", 
  options: ["Separate students by ability", "Provide equal learning opportunities for all students", "Exclude students with disabilities", "Standardize all learning styles"], 
  correctAnswer: 1, 
  explanation: "Inclusive education ensures all students, including those with disabilities, learn together." 
},

{ 
  id: 5, 
  question: "Which concept means showing respect for different cultural practices?", 
  options: ["Discrimination", "Cultural competence", "Bias", "Segregation"], 
  correctAnswer: 1, 
  explanation: "Cultural competence involves understanding and respecting different cultural backgrounds." 
},

{ 
  id: 6, 
  question: "What is discrimination?", 
  options: ["Fair treatment", "Unjust treatment based on characteristics", "Equal opportunity", "Teamwork"], 
  correctAnswer: 1, 
  explanation: "Discrimination refers to unfair treatment of individuals based on race, gender, religion, or other characteristics." 
},

{ 
  id: 7, 
  question: "Gender equality means:", 
  options: ["Only men have leadership roles", "All genders have equal rights and opportunities", "Women are superior", "Ignoring gender differences"], 
  correctAnswer: 1, 
  explanation: "Gender equality ensures equal rights and opportunities for all genders." 
},

{ 
  id: 8, 
  question: "Which of the following is an example of inclusive language?", 
  options: ["Chairman", "Mankind", "Chairperson", "He should decide"], 
  correctAnswer: 2, 
  explanation: "Chairperson is gender-neutral and promotes inclusiveness." 
},

{ 
  id: 9, 
  question: "Accessibility in institutions ensures:", 
  options: ["Limited entry", "Physical and digital access for all people", "High tuition fees", "Selective participation"], 
  correctAnswer: 1, 
  explanation: "Accessibility ensures that facilities and services are usable by everyone, including persons with disabilities." 
},

{ 
  id: 10, 
  question: "Stereotyping refers to:", 
  options: ["Judging individuals based on group assumptions", "Equal treatment", "Open-mindedness", "Respecting diversity"], 
  correctAnswer: 0, 
  explanation: "Stereotyping involves making generalized assumptions about individuals based on group identity." 
},

{ 
  id: 11, 
  question: "An inclusive workplace benefits organizations by:", 
  options: ["Reducing creativity", "Encouraging innovation and collaboration", "Limiting diversity", "Promoting bias"], 
  correctAnswer: 1, 
  explanation: "Inclusive workplaces encourage innovation through diverse perspectives." 
},

{ 
  id: 12, 
  question: "What does cultural diversity include?", 
  options: ["Language, traditions, and beliefs", "Only religion", "Only nationality", "Only race"], 
  correctAnswer: 0, 
  explanation: "Cultural diversity includes language, traditions, beliefs, and customs." 
},

{ 
  id: 13, 
  question: "Bullying in schools contradicts inclusiveness because it:", 
  options: ["Promotes equality", "Creates exclusion and harm", "Builds teamwork", "Encourages respect"], 
  correctAnswer: 1, 
  explanation: "Bullying excludes and harms individuals, opposing inclusive values." 
},

{ 
  id: 14, 
  question: "Which policy promotes fairness in hiring?", 
  options: ["Nepotism", "Affirmative action", "Favoritism", "Segregation"], 
  correctAnswer: 1, 
  explanation: "Affirmative action promotes equal opportunity in employment and education." 
},

{ 
  id: 15, 
  question: "Inclusion differs from diversity because inclusion:", 
  options: ["Means having differences only", "Focuses on involvement and belonging", "Eliminates diversity", "Ignores participation"], 
  correctAnswer: 1, 
  explanation: "Inclusion ensures that diverse individuals feel valued and involved." 
},

{ 
  id: 16, 
  question: "Which practice supports people with disabilities?", 
  options: ["Building ramps and elevators", "Ignoring accessibility needs", "Segregating classrooms", "Limiting communication"], 
  correctAnswer: 0, 
  explanation: "Physical accommodations like ramps support accessibility." 
},

{ 
  id: 17, 
  question: "What is unconscious bias?", 
  options: ["Intentional discrimination", "Automatic judgments without awareness", "Equal treatment", "Cultural respect"], 
  correctAnswer: 1, 
  explanation: "Unconscious bias refers to hidden attitudes that influence decisions unknowingly." 
},

{ 
  id: 18, 
  question: "Social inclusion helps to:", 
  options: ["Increase inequality", "Strengthen community unity", "Promote segregation", "Limit participation"], 
  correctAnswer: 1, 
  explanation: "Social inclusion builds stronger, more united communities." 
},

{ 
  id: 19, 
  question: "Respecting religious diversity means:", 
  options: ["Forcing one belief", "Allowing freedom of worship", "Ignoring faith differences", "Banning traditions"], 
  correctAnswer: 1, 
  explanation: "Religious inclusion supports freedom of belief and practice." 
},

{ 
  id: 20, 
  question: "Which is a barrier to inclusiveness?", 
  options: ["Open dialogue", "Prejudice", "Equal opportunity", "Accessibility"], 
  correctAnswer: 1, 
  explanation: "Prejudice creates unfair judgments and prevents inclusion." 
},

{ 
  id: 21, 
  question: "Inclusive leadership involves:", 
  options: ["Ignoring minority voices", "Valuing diverse perspectives", "Centralizing decisions only", "Promoting favoritism"], 
  correctAnswer: 1, 
  explanation: "Inclusive leaders actively seek and value diverse viewpoints." 
},

{ 
  id: 22, 
  question: "Which law principle supports non-discrimination?", 
  options: ["Human rights protection", "Segregation policy", "Exclusive hiring", "Censorship"], 
  correctAnswer: 0, 
  explanation: "Human rights laws promote equality and protect against discrimination." 
},

{ 
  id: 23, 
  question: "Community participation is important because it:", 
  options: ["Limits involvement", "Encourages shared responsibility", "Promotes exclusion", "Creates division"], 
  correctAnswer: 1, 
  explanation: "Participation fosters ownership and shared growth." 
},

{ 
  id: 24, 
  question: "Intersectionality refers to:", 
  options: ["Single identity only", "Overlapping social identities and related discrimination", "Economic growth", "Geographical diversity"], 
  correctAnswer: 1, 
  explanation: "Intersectionality recognizes how multiple identities combine to shape experiences." 
},

{ 
  id: 25, 
  question: "An inclusive campus environment ensures:", 
  options: ["Equal respect and safety for all students", "Preference for one group", "Exclusion of minorities", "Limited dialogue"], 
  correctAnswer: 0, 
  explanation: "Inclusive campuses promote safety, respect, and equal opportunity for all." 
}
      ],
      final: 
      [
  {
    "id": 1,
    "question": "What is the definition of inclusiveness?",
    "options": ["Excluding certain groups from participation", "The practice or policy of providing equal access to opportunities and resources for people who might otherwise be excluded", "Focusing only on majority groups", "Creating barriers for marginalized communities"],
    "correctAnswer": 1,
    "explanation": "Inclusiveness is the practice or policy of providing equal access to opportunities and resources for people who might otherwise be excluded or marginalized ."
  },
  {
    "id": 2,
    "question": "What is the difference between equality and equity?",
    "options": ["They are exactly the same", "Equality means everyone gets the same, equity means everyone gets what they need", "Equity means everyone gets the same, equality means everyone gets what they need", "There is no difference"],
    "correctAnswer": 1,
    "explanation": "Equality means giving everyone the same resources or opportunities, while equity recognizes that different groups have different needs and provides resources accordingly to achieve fair outcomes ."
  },
  {
    "id": 3,
    "question": "What does diversity refer to in the context of inclusiveness?",
    "options": ["Uniformity among group members", "The presence of differences within a given setting including race, gender, age, religion, and disability", "Excluding people with different backgrounds", "Focusing only on one type of difference"],
    "correctAnswer": 1,
    "explanation": "Diversity refers to the presence of differences within a given setting, encompassing various dimensions such as race, ethnicity, gender, age, religion, disability, and sexual orientation ."
  },
  {
    "id": 4,
    "question": "What is the social model of disability?",
    "options": ["Disability is caused by individual medical conditions", "Society disables people by creating barriers and failing to accommodate differences", "Disabled people need to be cured", "Disability is solely a personal tragedy"],
    "correctAnswer": 1,
    "explanation": "The social model of disability distinguishes between impairment (individual limitation) and disability (the disadvantage caused by societal barriers that fail to accommodate differences) ."
  },
  {
    "id": 5,
    "question": "What is the medical model of disability?",
    "options": ["Society creates barriers for disabled people", "Disability is viewed as a problem of the individual caused by disease or trauma requiring medical intervention", "Disability is a social construct", "Accommodations should be provided without question"],
    "correctAnswer": 1,
    "explanation": "The medical model views disability as a problem of the individual, caused by disease, trauma, or health conditions, requiring medical intervention to 'fix' or cure the person ."
  },
  {
    "id": 6,
    "question": "According to the UN Convention on the Rights of Persons with Disabilities, persons with disabilities include those who have:",
    "options": ["Only physical impairments", "Long-term physical, mental, intellectual, or sensory impairments which in interaction with barriers may hinder full participation", "Only visible disabilities", "Only developmental disabilities"],
    "correctAnswer": 1,
    "explanation": "The UNCRPD states that persons with disabilities include those who have long-term physical, mental, intellectual, or sensory impairments which in interaction with various barriers may hinder their full and effective participation in society ."
  },
  {
    "id": 7,
    "question": "What is reasonable accommodation in the context of disability?",
    "options": ["Unnecessary modifications", "Necessary and appropriate modifications and adjustments to ensure persons with disabilities enjoy rights on an equal basis", "Lowering standards for disabled people", "Providing special privileges"],
    "correctAnswer": 1,
    "explanation": "Reasonable accommodation means necessary and appropriate modification and adjustments not imposing a disproportionate burden, to ensure persons with disabilities enjoy rights and freedoms on an equal basis with others ."
  },
  {
    "id": 8,
    "question": "What is universal design?",
    "options": ["Design for only one group of people", "The design of products and environments to be usable by all people to the greatest extent possible without adaptation", "Design that requires specialized adaptations", "Design only for disabled people"],
    "correctAnswer": 1,
    "explanation": "Universal design is the design of products, environments, programs, and services to be usable by all people, to the greatest extent possible, without the need for adaptation or specialized design ."
  },
  {
    "id": 9,
    "question": "What are the seven principles of universal design?",
    "options": ["Only accessibility and safety", "Equitable use, flexibility in use, simple and intuitive, perceptible information, tolerance for error, low physical effort, size and space for approach", "Beauty, cost, durability, popularity", "Functionality, aesthetics, marketability, simplicity"],
    "correctAnswer": 1,
    "explanation": "The seven principles of universal design are: equitable use, flexibility in use, simple and intuitive use, perceptible information, tolerance for error, low physical effort, and size and space for approach and use ."
  },
  {
    "id": 10,
    "question": "What is gender equality?",
    "options": ["Treating men and women exactly the same in all situations", "The equal rights, responsibilities, and opportunities of all genders", "Focusing only on women's rights", "Ignoring gender differences completely"],
    "correctAnswer": 1,
    "explanation": "Gender equality means that all genders have equal rights, responsibilities, and opportunities. It does not mean treating everyone exactly the same, as different needs may require different approaches ."
  },
  {
    "id": 11,
    "question": "What is gender equity?",
    "options": ["The same as gender equality", "Fairness of treatment for all genders according to their respective needs", "Preferential treatment for men", "Ignoring gender issues"],
    "correctAnswer": 1,
    "explanation": "Gender equity refers to fairness of treatment for all genders according to their respective needs. This may include equal treatment or differential treatment considered equivalent in rights and benefits ."
  },
  {
    "id": 12,
    "question": "What is the difference between sex and gender?",
    "options": ["They are exactly the same", "Sex refers to biological characteristics; gender refers to socially constructed roles and identities", "Sex is social, gender is biological", "There is no difference"],
    "correctAnswer": 1,
    "explanation": "Sex refers to biological and physiological characteristics that define humans as male, female, or intersex. Gender refers to the socially constructed roles, behaviors, expressions, and identities of women, men, and gender-diverse people ."
  },
  {
    "id": 13,
    "question": "What does LGBTQIA+ stand for?",
    "options": ["A type of food", "Lesbian, Gay, Bisexual, Transgender, Queer, Intersex, Asexual, and other identities", "A political party", "A medical condition"],
    "correctAnswer": 1,
    "explanation": "LGBTQIA+ stands for Lesbian, Gay, Bisexual, Transgender, Queer, Intersex, Asexual, and the '+' represents other sexual orientations and gender identities ."
  },
  {
    "id": 14,
    "question": "What is the difference between sexual orientation and gender identity?",
    "options": ["They are the same thing", "Sexual orientation is about who you're attracted to; gender identity is about who you are", "Gender identity is about attraction; sexual orientation is about identity", "Both are about biology"],
    "correctAnswer": 1,
    "explanation": "Sexual orientation refers to a person's pattern of emotional, romantic, and/or sexual attraction to others. Gender identity refers to a person's internal, deeply held sense of their own gender ."
  },
  {
    "id": 15,
    "question": "What is a microaggression?",
    "options": ["A physical attack", "Everyday verbal, nonverbal, or environmental slights that communicate hostile or negative messages", "A formal complaint", "A legal term"],
    "correctAnswer": 1,
    "explanation": "Microaggressions are everyday verbal, nonverbal, or environmental slights, whether intentional or unintentional, that communicate hostile, derogatory, or negative messages to marginalized groups ."
  },
  {
    "id": 16,
    "question": "What is unconscious bias?",
    "options": ["Conscious discrimination", "Social stereotypes about certain groups that individuals form outside their own conscious awareness", "Legal protections", "Formal policies"],
    "correctAnswer": 1,
    "explanation": "Unconscious bias refers to social stereotypes about certain groups of people that individuals form outside their own conscious awareness. Everyone holds unconscious beliefs about various social groups ."
  },
  {
    "id": 17,
    "question": "What is intersectionality?",
    "options": ["A traffic intersection", "The interconnected nature of social categorizations like race, class, and gender creating overlapping systems of discrimination", "A mathematical concept", "A type of road design"],
    "correctAnswer": 1,
    "explanation": "Intersectionality refers to the interconnected nature of social categorizations such as race, class, gender, and disability, as they apply to a given individual or group, creating overlapping and interdependent systems of discrimination or disadvantage ."
  },
  {
    "id": 18,
    "question": "Who coined the term 'intersectionality'?",
    "options": ["Kimberlé Crenshaw", "Martin Luther King Jr.", "Rosa Parks", "Malcolm X"],
    "correctAnswer": 0,
    "explanation": "Legal scholar Kimberlé Crenshaw coined the term 'intersectionality' in 1989 to describe how social identities overlap and create unique experiences of oppression and privilege ."
  },
  {
    "id": 19,
    "question": "What is systemic discrimination?",
    "options": ["Individual acts of prejudice", "Discrimination embedded in the policies and practices of institutions and systems", "Personal biases", "Occasional unfair treatment"],
    "correctAnswer": 1,
    "explanation": "Systemic discrimination refers to patterns of behavior, policies, or practices that are part of the structures of an organization or an entire system, creating and perpetuating disadvantage for marginalized groups ."
  },
  {
    "id": 20,
    "question": "What is cultural competence?",
    "options": ["Knowing one's own culture only", "The ability to understand, communicate with, and effectively interact with people across cultures", "Speaking multiple languages", "Traveling to different countries"],
    "correctAnswer": 1,
    "explanation": "Cultural competence is the ability to understand, communicate with, and effectively interact with people across cultures, involving awareness of one's own cultural worldview, attitude toward cultural differences, and knowledge of different cultural practices ."
  },
  {
    "id": 21,
    "question": "What is an ally in the context of inclusiveness?",
    "options": ["A member of a marginalized group", "Someone from a privileged group who actively supports and advocates for marginalized groups", "A neutral observer", "Someone who ignores discrimination"],
    "correctAnswer": 1,
    "explanation": "An ally is typically a person from a privileged or dominant group who actively supports and advocates for marginalized groups, working to dismantle systems of oppression ."
  },
  {
    "id": 22,
    "question": "What is privilege in the context of social justice?",
    "options": ["Unearned advantages enjoyed by certain groups in society", "Money and wealth only", "Something everyone has equally", "A negative concept that should be eliminated"],
    "correctAnswer": 0,
    "explanation": "Privilege refers to unearned advantages and benefits that individuals receive automatically by being part of a dominant social group, often without being aware of it ."
  },
  {
    "id": 23,
    "question": "What is the Americans with Disabilities Act (ADA)?",
    "options": ["A healthcare law", "A civil rights law that prohibits discrimination based on disability", "An education law only", "A transportation law"],
    "correctAnswer": 1,
    "explanation": "The Americans with Disabilities Act (ADA) is a civil rights law that prohibits discrimination against individuals with disabilities in all areas of public life, including jobs, schools, transportation, and public spaces ."
  },
  {
    "id": 24,
    "question": "What is affirmative action?",
    "options": ["Reverse discrimination", "Policies that take factors like race, gender, and ethnicity into account to provide opportunities to historically excluded groups", "Quotas for all groups", "Preferential treatment without qualification"],
    "correctAnswer": 1,
    "explanation": "Affirmative action refers to policies that take factors including race, color, religion, sex, or national origin into account to provide opportunities to members of groups that have historically been excluded or underrepresented ."
  },
  {
    "id": 25,
    "question": "What is the purpose of accessibility?",
    "options": ["To make things difficult", "To ensure that people with disabilities can independently access and use spaces, products, and services", "To provide special treatment", "To separate people with disabilities"],
    "correctAnswer": 1,
    "explanation": "Accessibility means ensuring that people with disabilities can independently access, use, and benefit from spaces, products, services, and information on an equal basis with others ."
  },
  {
    "id": 26,
    "question": "What is inclusive language?",
    "options": ["Complex vocabulary", "Language that avoids biases, slang, and expressions that discriminate against groups", "Technical terminology", "Only using gender-neutral terms"],
    "correctAnswer": 1,
    "explanation": "Inclusive language is language that avoids biases, slang, and expressions that discriminate against groups of people based on race, gender, socioeconomic status, ability, or other characteristics ."
  },
  {
    "id": 27,
    "question": "What is person-first language?",
    "options": ["Language that puts the person before the disability or condition", "Language that emphasizes the disability first", "Formal language", "Simple language"],
    "correctAnswer": 0,
    "explanation": "Person-first language puts the person before their disability or condition (e.g., 'person with a disability' rather than 'disabled person'), emphasizing that the person is not defined by their condition ."
  },
  {
    "id": 28,
    "question": "What is identity-first language?",
    "options": ["Language that puts identity first", "Language that emphasizes disability as an integral part of identity (e.g., 'disabled person')", "Language about identity", "Formal language"],
    "correctAnswer": 1,
    "explanation": "Identity-first language positions disability as an integral part of a person's identity (e.g., 'disabled person' rather than 'person with a disability'), which many in the disability community prefer ."
  },
  {
    "id": 29,
    "question": "What is the neurodiversity paradigm?",
    "options": ["A medical condition", "The concept that neurological differences are natural variations in the human genome and should be respected", "A mental illness", "A learning disability"],
    "correctAnswer": 1,
    "explanation": "The neurodiversity paradigm is the concept that neurological differences like autism, ADHD, and dyslexia are natural variations in the human genome, not disorders to be cured, and should be respected and accommodated ."
  },
  {
    "id": 30,
    "question": "What is ableism?",
    "options": ["Support for disabled people", "Discrimination and social prejudice against people with disabilities", "Medical treatment for disabilities", "Disability rights advocacy"],
    "correctAnswer": 1,
    "explanation": "Ableism is discrimination and social prejudice against people with disabilities, based on the belief that typical abilities are superior and that people with disabilities need to be 'fixed' ."
  },
  {
    "id": 31,
    "question": "What is racism?",
    "options": ["Prejudice based on age", "Prejudice, discrimination, or antagonism directed against a person or people on the basis of their membership in a particular racial or ethnic group", "Cultural appreciation", "Celebrating diversity"],
    "correctAnswer": 1,
    "explanation": "Racism is prejudice, discrimination, or antagonism directed against a person or people on the basis of their membership in a particular racial or ethnic group, typically one that is marginalized or oppressed ."
  },
  {
    "id": 32,
    "question": "What is sexism?",
    "options": ["Prejudice based on age", "Prejudice, stereotyping, or discrimination based on sex or gender", "Gender equality", "Equal treatment of all genders"],
    "correctAnswer": 1,
    "explanation": "Sexism is prejudice, stereotyping, or discrimination, typically against women, on the basis of sex or gender ."
  },
  {
    "id": 33,
    "question": "What is ageism?",
    "options": ["Discrimination based on race", "Stereotyping and discrimination against individuals or groups based on their age", "Respect for elders", "Youth culture"],
    "correctAnswer": 1,
    "explanation": "Ageism is stereotyping, prejudice, and discrimination against people based on their age, affecting both younger and older individuals ."
  },
  {
    "id": 34,
    "question": "What is classism?",
    "options": ["Educational discrimination", "Prejudice against or in favor of people belonging to a particular social class", "Discrimination based on gender", "Economic policy"],
    "correctAnswer": 1,
    "explanation": "Classism is prejudice against or in favor of people belonging to a particular social class, involving institutional and cultural assumptions that favor upper classes and disadvantage lower classes ."
  },
  {
    "id": 35,
    "question": "What is religious discrimination?",
    "options": ["Treating all religions equally", "Treating a person or group differently because of their religious beliefs or practices", "Freedom of religion", "Religious education"],
    "correctAnswer": 1,
    "explanation": "Religious discrimination is treating a person or group unfavorably because of their religious beliefs or practices, or because of their lack of religious beliefs ."
  },
  {
    "id": 36,
    "question": "What is xenophobia?",
    "options": ["Love of foreign cultures", "Fear or hatred of foreigners, people from different cultures, or strangers", "International travel", "Cultural exchange"],
    "correctAnswer": 1,
    "explanation": "Xenophobia is the fear or hatred of foreigners, people from different cultures, or strangers, often leading to discrimination and prejudice ."
  },
  {
    "id": 37,
    "question": "What is the purpose of diversity training?",
    "options": ["To make everyone the same", "To educate individuals about diversity, reduce bias, and promote inclusive behaviors", "To promote discrimination", "To exclude certain groups"],
    "correctAnswer": 1,
    "explanation": "Diversity training aims to educate individuals about diversity, raise awareness of biases, and promote inclusive behaviors and practices in organizations ."
  },
  {
    "id": 38,
    "question": "What is an Employee Resource Group (ERG)?",
    "options": ["A management committee", "Voluntary, employee-led groups that foster a diverse, inclusive workplace aligned with organizational mission", "A labor union", "A social club"],
    "correctAnswer": 1,
    "explanation": "Employee Resource Groups (ERGs) are voluntary, employee-led groups that foster a diverse, inclusive workplace, providing support, career development, and networking opportunities for members ."
  },
  {
    "id": 39,
    "question": "What is the purpose of a Diversity, Equity, and Inclusion (DEI) policy?",
    "options": ["To create barriers", "To establish an organization's commitment to creating a fair and inclusive environment and outline strategies to achieve it", "To exclude certain groups", "To maintain the status quo"],
    "correctAnswer": 1,
    "explanation": "A DEI policy establishes an organization's commitment to creating a fair, equitable, and inclusive environment, outlining specific strategies, practices, and accountability measures to achieve these goals ."
  },
  {
    "id": 40,
    "question": "What is the difference between integration and inclusion?",
    "options": ["They are the same", "Integration places diverse individuals into existing systems; inclusion changes systems to ensure everyone can fully participate", "Inclusion is temporary; integration is permanent", "Integration is better than inclusion"],
    "correctAnswer": 1,
    "explanation": "Integration places diverse individuals into existing systems without changing those systems, while inclusion involves transforming systems, policies, and practices to ensure everyone can fully and authentically participate and belong ."
  },
  {
    "id": 41,
    "question": "What is tokenism?",
    "options": ["Making genuine efforts to include diverse perspectives", "The practice of making only a symbolic effort to include marginalized people to give the appearance of equality", "Celebrating diversity", "Inclusive hiring practices"],
    "correctAnswer": 1,
    "explanation": "Tokenism is the practice of making only a perfunctory or symbolic effort to include marginalized people, often by including one or a few individuals from underrepresented groups to give the appearance of diversity without meaningful inclusion ."
  },
  {
    "id": 42,
    "question": "What is the 'diversity tax' or 'minority tax'?",
    "options": ["Higher taxes for minorities", "The additional burden placed on underrepresented individuals who are asked to serve on diversity committees and represent their group", "Economic disparities", "Tax benefits for diverse organizations"],
    "correctAnswer": 1,
    "explanation": "The 'diversity tax' or 'minority tax' refers to the additional, often uncompensated burden placed on underrepresented individuals who are disproportionately asked to serve on diversity committees, mentor other diverse individuals, and represent their group ."
  },
  {
    "id": 43,
    "question": "What is psychological safety in the workplace?",
    "options": ["Physical safety measures", "The belief that one can speak up, take risks, and be vulnerable without fear of negative consequences", "Mental health treatment", "Job security"],
    "correctAnswer": 1,
    "explanation": "Psychological safety is the belief that one can speak up with ideas, questions, concerns, or mistakes without fear of punishment or humiliation, creating an environment where diverse perspectives can be shared ."
  },
  {
    "id": 44,
    "question": "What is the purpose of a bias interruptor?",
    "options": ["A device that blocks signals", "A strategy or tool designed to identify and disrupt unconscious bias in organizational processes", "A legal requirement", "A training program only"],
    "correctAnswer": 1,
    "explanation": "A bias interruptor is a strategy or tool designed to identify and disrupt unconscious bias in organizational processes like hiring, performance evaluations, and promotions to create more equitable outcomes ."
  },
  {
    "id": 45,
    "question": "What is a blind recruitment process?",
    "options": ["Hiring blind people", "Removing identifying information from applications to reduce unconscious bias", "Recruiting without job descriptions", "Secret hiring"],
    "correctAnswer": 1,
    "explanation": "Blind recruitment involves removing identifying information such as name, gender, age, and educational background from applications to reduce unconscious bias in the initial screening process ."
  },
  {
    "id": 46,
    "question": "What is cultural appropriation?",
    "options": ["Cultural exchange", "The adoption of elements of one culture by members of another culture, typically when the dominant culture adopts from a marginalized culture without understanding or respect", "Cultural preservation", "Learning about other cultures"],
    "correctAnswer": 1,
    "explanation": "Cultural appropriation is the adoption of elements of one culture by members of another culture, typically when the dominant culture adopts from a marginalized culture without understanding, respect, or acknowledgment of the original context ."
  },
  {
    "id": 47,
    "question": "What is the difference between cultural appropriation and cultural appreciation?",
    "options": ["They are the same", "Appreciation involves respect, understanding, and permission; appropriation involves taking without understanding or respect", "Appropriation is good; appreciation is bad", "Both are harmful"],
    "correctAnswer": 1,
    "explanation": "Cultural appreciation involves learning about and respecting another culture with understanding and permission, while cultural appropriation involves taking elements from a marginalized culture without understanding, respect, or context, often for personal gain ."
  },
  {
    "id": 48,
    "question": "What is the purpose of accessibility standards like WCAG?",
    "options": ["To make websites look the same", "Web Content Accessibility Guidelines provide standards for making digital content accessible to people with disabilities", "To slow down web development", "To increase profits"],
    "correctAnswer": 1,
    "explanation": "WCAG (Web Content Accessibility Guidelines) provides international standards for making web content more accessible to people with disabilities, including guidelines for perceivable, operable, understandable, and robust content ."
  },
  {
    "id": 49,
    "question": "What is assistive technology?",
    "options": ["Technology that makes things harder", "Any device, equipment, or system that helps individuals with disabilities perform functions that might otherwise be difficult or impossible", "Medical equipment only", "Communication devices only"],
    "correctAnswer": 1,
    "explanation": "Assistive technology refers to any device, equipment, software, or system that helps individuals with disabilities perform tasks, improve functional capabilities, and participate more fully in daily activities ."
  },
  {
    "id": 50,
    "question": "What is the social construction of race?",
    "options": ["Race is biological", "The concept that race is not based on biology but is a social category created to justify inequality", "Race is determined by genetics", "Race is universal and unchanging"],
    "correctAnswer": 1,
    "explanation": "The social construction of race is the concept that race is not a biological reality but a social category created historically to justify social inequality, with racial categories varying across societies and time ."
  },
  {
    "id": 51,
    "question": "What is the purpose of a land acknowledgement?",
    "options": ["A legal document", "A formal statement recognizing Indigenous peoples as traditional stewards of the land and their enduring relationship with it", "A property deed", "A tourist information sign"],
    "correctAnswer": 1,
    "explanation": "A land acknowledgement is a formal statement that recognizes Indigenous peoples as the traditional stewards of the land and their enduring relationship with it, often delivered at public events and gatherings ."
  },
  {
    "id": 52,
    "question": "What is the difference between equality of opportunity and equality of outcome?",
    "options": ["They are the same", "Equality of opportunity ensures everyone has the same chance; equality of outcome aims for similar results across groups", "Equality of outcome is about opportunities; equality of opportunity is about results", "Both focus on results"],
    "correctAnswer": 1,
    "explanation": "Equality of opportunity focuses on ensuring everyone has the same chances to succeed, while equality of outcome focuses on achieving similar results or representation across different groups, recognizing that equal opportunities may not lead to equal outcomes due to historical disadvantages ."
  },
  {
    "id": 53,
    "question": "What is the purpose of a DEI audit?",
    "options": ["Financial audit", "A systematic assessment of an organization's policies, practices, and culture to evaluate diversity, equity, and inclusion efforts", "A security check", "A performance review"],
    "correctAnswer": 1,
    "explanation": "A DEI audit is a systematic assessment of an organization's policies, practices, culture, and climate to evaluate the effectiveness of diversity, equity, and inclusion efforts and identify areas for improvement ."
  },
  {
    "id": 54,
    "question": "What is the concept of 'nothing about us without us'?",
    "options": ["A political slogan", "A principle stating that policies and decisions affecting marginalized groups should involve meaningful participation from those groups", "An exclusionary practice", "A legal requirement"],
    "correctAnswer": 1,
    "explanation": "'Nothing about us without us' is a principle stating that policies, programs, and decisions affecting marginalized groups should be developed and implemented with the meaningful participation and leadership of those groups ."
  },
  {
    "id": 55,
    "question": "What is the purpose of inclusive leadership?",
    "options": ["Managing everyone the same way", "Leadership that actively seeks out, values, and leverages diverse perspectives to create an environment where everyone can contribute and thrive", "Focusing only on majority groups", "Avoiding difficult conversations"],
    "correctAnswer": 1,
    "explanation": "Inclusive leadership is leadership that actively seeks out, values, and leverages diverse perspectives, creating an environment where all individuals feel respected, connected, and able to contribute their best work ."
  }


      ,
      { id: 111, question: "What is intersectionality?", options: ["How different forms of discrimination overlap", "Road intersections", "Cultural mixing", "Economic theory"], correctAnswer: 0, explanation: "Intersectionality examines how different forms of discrimination (race, gender, class, disability) overlap and create compounded effects." },
      { id: 121, question: "What is inclusive education?", options: ["All students learning together regardless of differences", "Separate schools", "Online only", "Home schooling"], correctAnswer: 0, explanation: "Inclusive education means all students, including those with disabilities, learn together in regular schools with appropriate support." },
      { id: 131, question: "What is reasonable accommodation?", options: ["Modifications to enable participation despite disability", "Luxury services", "Extra payment", "Optional features"], correctAnswer: 0, explanation: "Reasonable accommodation refers to modifications or adjustments that enable people with disabilities to participate equally." },
      { id: 141, question: "What is the purpose of diversity training?", options: ["Increase awareness of different backgrounds", "Enforce uniformity", "Reduce workforce", "Increase profits only"], correctAnswer: 0, explanation: "Diversity training aims to increase awareness and understanding of different backgrounds and reduce bias in organizations." },
      { id: 1511, question: "What is universal design?", options: ["Design usable by all people without adaptation", "Expensive design", "Custom design", "Temporary design"], correctAnswer: 0, explanation: "Universal design creates products and environments usable by all people, to the greatest extent possible, without adaptation." }
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

