const fs = require('fs');
const file = 'c:/Users/mokki/test-module-page/src/jeeTestData.js';
let content = fs.readFileSync(file, 'utf8');

const mathArr = [
    {
        type: "MCQ", difficulty: "Medium",
        question: "The value of lim (x→0) (sin x - x) / x³ is:",
        options: [{ id: "A", text: "1/6" }, { id: "B", text: "-1/6" }, { id: "C", text: "1/3" }, { id: "D", text: "-1/3" }],
        correctAnswer: "B"
    },
    {
        type: "MCQ", difficulty: "Hard",
        question: "If A = [a_ij] is a 3x3 matrix such that a_ij = i² - j², then det(A) is:",
        options: [{ id: "A", text: "1" }, { id: "B", text: "-1" }, { id: "C", text: "0" }, { id: "D", text: "i - j" }],
        correctAnswer: "C"
    },
    {
        type: "MCQ", difficulty: "Medium",
        question: "Evaluate the integral ∫ (sin x) / (sin x + cos x) dx from 0 to π/2.",
        options: [{ id: "A", text: "π/4" }, { id: "B", text: "π/2" }, { id: "C", text: "π/8" }, { id: "D", text: "0" }],
        correctAnswer: "A"
    },
    {
        type: "MCQ", difficulty: "Hard",
        question: "Identify the correct graph of the function f(x) = |x| - |x-1| + |x-2|.",
        options: [
            { id: "A", text: "", imageUrl: "https://images.unsplash.com/photo-1636207196024-db0cc84050d2?w=150&q=80" },
            { id: "B", text: "", imageUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=150&q=80" },
            { id: "C", text: "", imageUrl: "https://images.unsplash.com/photo-1647427060183-f8d16a13d789?w=150&q=80" },
            { id: "D", text: "", imageUrl: "https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?w=150&q=80" }
        ],
        correctAnswer: "D"
    },
    {
        type: "MCQ", difficulty: "Medium",
        question: "The shortest distance between the line y = x and the parabola y² = x - 2 is:",
        options: [{ id: "A", text: "7 / 4√2" }, { id: "B", text: "7 / 8√2" }, { id: "C", text: "11 / 4√2" }, { id: "D", text: "5 / 4√2" }],
        correctAnswer: "B"
    },
    {
        type: "MCQ", difficulty: "Easy",
        question: "What is the principal value of arg(-1 - i)?",
        options: [{ id: "A", text: "3π/4" }, { id: "B", text: "-3π/4" }, { id: "C", text: "π/4" }, { id: "D", text: "-π/4" }],
        correctAnswer: "B"
    },
    {
        type: "MCQ", difficulty: "Medium",
        question: "In a triangle ABC, if a = 3, b = 4, c = 5, then the value of sin 2A is:",
        options: [{ id: "A", text: "24/25" }, { id: "B", text: "12/25" }, { id: "C", text: "7/25" }, { id: "D", text: "3/5" }],
        correctAnswer: "A"
    },
    {
        type: "MCQ", difficulty: "Hard",
        question: "Consider the geometric interpretation of the complex roots of z^n = 1. What shape do they form in the complex plane?",
        imageUrl: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=200&q=80",
        options: [{ id: "A", text: "Line segment" }, { id: "B", text: "Circle" }, { id: "C", text: "Regular n-gon inscribed in a unit circle" }, { id: "D", text: "Ellipse" }],
        correctAnswer: "C"
    },
    {
        type: "MCQ", difficulty: "Medium",
        question: "The area of the region bounded by the curve y = √(16 - x²) and the x-axis is:",
        options: [{ id: "A", text: "16π" }, { id: "B", text: "8π" }, { id: "C", text: "4π" }, { id: "D", text: "32π" }],
        correctAnswer: "B"
    },
    {
        type: "MCQ", difficulty: "Medium",
        question: "The probability of getting a sum of 7 when two dice are thrown is:",
        options: [{ id: "A", text: "1/6" }, { id: "B", text: "1/12" }, { id: "C", text: "1/36" }, { id: "D", text: "1/4" }],
        correctAnswer: "A"
    },
    {
        type: "MCQ", difficulty: "Hard",
        question: "Number of solutions of the equation 2sin(x) = x in the interval (0, 3π) is:",
        options: [{ id: "A", text: "1" }, { id: "B", text: "2" }, { id: "C", text: "3" }, { id: "D", text: "4" }],
        correctAnswer: "B"
    },
    {
        type: "MCQ", difficulty: "Hard",
        question: "Which of the following graphs accurately represents the derivative of the given curve?",
        options: [
            { id: "A", text: "", imageUrl: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=150&q=80" },
            { id: "B", text: "", imageUrl: "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?w=150&q=80" },
            { id: "C", text: "", imageUrl: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=150&q=80" },
            { id: "D", text: "", imageUrl: "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=150&q=80" }
        ],
        correctAnswer: "A"
    },
    {
        type: "MCQ", difficulty: "Medium",
        question: "The equation of the tangent planes to the sphere x² + y² + z² = r² parallel to the plane ax + by + cz = 0 are:",
        options: [{ id: "A", text: "ax + by + cz ± r√(a²+b²+c²) = 0" }, { id: "B", text: "ax + by + cz ± r(a+b+c) = 0" }, { id: "C", text: "ax + by + cz ± r² = 0" }, { id: "D", text: "ax + by + cz ± √(a²+b²+c²) = 0" }],
        correctAnswer: "A"
    },
    {
        type: "MCQ", difficulty: "Easy",
        question: "The boolean expression ~(p ∨ q) ∨ (~p ∧ q) is equivalent to:",
        options: [{ id: "A", text: "p" }, { id: "B", text: "~p" }, { id: "C", text: "q" }, { id: "D", text: "~q" }],
        correctAnswer: "B"
    },
    {
        type: "MCQ", difficulty: "Hard",
        question: "Find the sum of the series: 1·2 + 2·3 + 3·4 + ... up to n terms.",
        options: [{ id: "A", text: "n(n+1)(n+2)/3" }, { id: "B", text: "n(n+1)(2n+1)/6" }, { id: "C", text: "n²(n+1)²/4" }, { id: "D", text: "n(n+1)(n+2)/6" }],
        correctAnswer: "A"
    },
    {
        type: "MCQ", difficulty: "Medium",
        question: "What is the period of the function f(x) = sin(πx) + cos(πx/2)?",
        options: [{ id: "A", text: "1" }, { id: "B", text: "2" }, { id: "C", text: "4" }, { id: "D", text: "8" }],
        correctAnswer: "C"
    },
    {
        type: "MCQ", difficulty: "Medium",
        question: "The coefficient of x^5 in the expansion of (1 + x²)^5 (1 + x)^4 is:",
        options: [{ id: "A", text: "60" }, { id: "B", text: "50" }, { id: "C", text: "40" }, { id: "D", text: "30" }],
        correctAnswer: "A"
    },
    {
        type: "MCQ", difficulty: "Medium",
        question: "If the roots of the equation x² - bx + c = 0 be two consecutive integers, then b² - 4c equals:",
        options: [{ id: "A", text: "-2" }, { id: "B", text: "3" }, { id: "C", text: "2" }, { id: "D", text: "1" }],
        correctAnswer: "D"
    },
    {
        type: "MCQ", difficulty: "Hard",
        question: "Let A and B be two sets containing 2 members and 4 members respectively. The number of subsets of A x B having 3 or more members is:",
        options: [{ id: "A", text: "256" }, { id: "B", text: "219" }, { id: "C", text: "246" }, { id: "D", text: "228" }],
        correctAnswer: "B"
    },
    {
        type: "MCQ", difficulty: "Easy",
        question: "Find the distance of the point (1, -1, 2) from the plane x + 2y - 2z = -5.",
        options: [{ id: "A", text: "2" }, { id: "B", text: "1" }, { id: "C", text: "3" }, { id: "D", text: "0" }],
        correctAnswer: "D"
    },
    {
        type: "Numerical", difficulty: "Medium",
        question: "Find the maximum value of 3cos(x) + 4sin(x).",
        correctAnswer: "5.00"
    },
    {
        type: "Numerical", difficulty: "Hard",
        question: "A line passing through the point (-1, 2) and inclined at an angle of 135 degrees with the x-axis intersects the line x + y - 4 = 0 at the point P. The length of the segment is represented as √k. Find k.",
        correctAnswer: "4.5"
    },
    {
        type: "Numerical", difficulty: "Medium",
        question: "Let f(x) = x³ - 3x² + 2x. If the minimum value of the slope of the tangent to the curve is M, calculate |M|.",
        correctAnswer: "1.00"
    },
    {
        type: "Numerical", difficulty: "Easy",
        question: "If log₂ x + log₂ (x - 3) = 2, find the value of x.",
        correctAnswer: "4.00"
    },
    {
        type: "Numerical", difficulty: "Hard",
        isHtml: true,
        question: "Evaluate the definite integral ∫ from 0 to π/2 of ln(tan x) dx.",
        correctAnswer: "0.00"
    }
];

let finalMath = mathArr.map((itm, index) => {
    return { ...itm, id: index + 1 };
});

const lines = content.split('\n');
let startIdx = -1;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('Mathematics: [') || lines[i].includes('Mathematics: Array.from')) startIdx = i;
}

if (startIdx > -1) {
    let newArrayStr = "    Mathematics: " + JSON.stringify(finalMath, null, 8) + "\n}";
    // Replace till end
    lines.splice(startIdx, lines.length - startIdx, newArrayStr);
    fs.writeFileSync(file, lines.join('\n'));
    console.log("Success replacing Mathematics questions.");
} else {
    // maybe it doesn't exist, we just append it
    let noBrace = content.lastIndexOf("}");
    if (noBrace > -1) {
        let nContent = content.substring(0, noBrace) + ",\n    Mathematics: " + JSON.stringify(finalMath, null, 8) + "\n}";
        fs.writeFileSync(file, nContent);
        console.log("Appended Mathematics questions at end.");
    } else {
        console.log("Error finding EOF");
    }
}
