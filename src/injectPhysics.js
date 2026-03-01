
const fs = require("fs");
const file = "c:/Users/mokki/test-module-page/src/jeeTestData.js";
let content = fs.readFileSync(file, "utf8");

const q = [
  {
    type: "MCQ", difficulty: "Hard",
    question: "In the arrangement shown in the figure, the mass of block A is m and that of block B is 2m. The pulley and the string are ideal (massless and frictionless). If the system is released from rest, determine the acceleration of block A.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOoAZeDh1M0oT4d02RLAmS7pc3POGVju7t2eRxXygqyhXvdY_yWc4CrBqM34AQ7H9ncxRMDikkfZS-zQ8bhNEkD_Wva7KT5pIDd23i0IDFXiO3-iK3ztGhUwsERrp_X_L-NDYSG2kSZ0SX--iXkp7rG2ivamMlJhbjl5C1EWq13iImFrbXeU9UWdS5H5-5kapsqBxUVBsbuWKG5NXOO6unwbTHvYMn2AoY2SdkN4_KpZhu8Y4L9rMMfqChqrCUZoq4ArnAm6_ao-H4",
    hint: "Assume g is the acceleration due to gravity",
    options: [ {id:"A",text:"g/3"}, {id:"B",text:"2g/3"}, {id:"C",text:"g/5"}, {id:"D",text:"2g/5"} ],
    correctAnswer: "A"
  },
  {
    type: "MCQ", difficulty: "Medium",
    question: "A uniform solid cylinder of mass M and radius R rolls without slipping down a plane inclined at an angle ? to the horizontal. The acceleration of the center of mass of the cylinder is:",
    options: [ {id:"A",text:"(2/3)g sin ?"}, {id:"B",text:"(1/3)g sin ?"}, {id:"C",text:"g sin ?"}, {id:"D",text:"(3/4)g sin ?"} ],
    correctAnswer: "A"
  },
  {
        type: "MCQ", difficulty: "Medium",
        question: "The de Broglie wavelength of an electron moving with a velocity c/2 (c = velocity of light in vacuum) is equal to the wavelength of a photon. The ratio of the kinetic energy of the electron to that of the photon is:",
        options: [
            { id: "A", text: "1:2" },
            { id: "B", text: "2:1" },
            { id: "C", text: "1:4" },
            { id: "D", text: "4:1" }
        ],
        correctAnswer: "A"
  },
  {
        type: "MCQ", difficulty: "Hard",
        question: "Identify the correct variation of the magnetic field vector around a long straight current-carrying wire.",
        options: [
            { id: "A", text: "", imageUrl: "https://images.unsplash.com/photo-1636207196024-db0cc84050d2?w=150&q=80" },
            { id: "B", text: "", imageUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=150&q=80" },
            { id: "C", text: "", imageUrl: "https://images.unsplash.com/photo-1647427060183-f8d16a13d789?w=150&q=80" },
            { id: "D", text: "", imageUrl: "https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?w=150&q=80" }
        ],
        correctAnswer: "A"
  },
  {
    type: "MCQ", difficulty: "Medium",
    question: "A capacitor of capacitance 10 µF is charged to 10 V and then connected to a 40 µF uncharged capacitor. The final potential difference across each capacitor will be:",
    options: [ {id:"A",text:"2 V"}, {id:"B",text:"4 V"}, {id:"C",text:"6 V"}, {id:"D",text:"8 V"} ],
    correctAnswer: "A"
  },
  {
    type: "MCQ", difficulty: "Hard",
    question: "In a Youngs double-slit experiment, the intensity at a point where the path difference is ?/6 (? being the wavelength of light used) is I. If I0 denotes the maximum intensity, I/I0 is equal to:",
    options: [ {id:"A",text:"3/4"}, {id:"B",text:"1/2"}, {id:"C",text:"v3/2"}, {id:"D",text:"1/4"} ],
    correctAnswer: "A"
  },
  {
    type: "MCQ", difficulty: "Medium",
    question: "Work done by a non-conservative force around a closed path is:",
    options: [ {id:"A",text:"Zero"}, {id:"B",text:"Positive"}, {id:"C",text:"Negative"}, {id:"D",text:"Not necessarily zero"} ],
    correctAnswer: "D"
  },
  {
    type: "MCQ", difficulty: "Medium",
    question: "Assume the given schematic represents a complex electrical circuit showing varying node junctions. What is the equivalent resistance between the main horizontal terminals if each grid edge is R?",
    imageUrl: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=600",
    options: [ {id:"A",text:"R/2"}, {id:"B",text:"R/3"}, {id:"C",text:"2R/3"}, {id:"D",text:"3R/4"} ],
    correctAnswer: "C"
  },
  {
    type: "MCQ", difficulty: "Easy",
    question: "The time period of a simple pendulum is T. If its length is increased by 21%, what will be the new time period?",
    options: [ {id:"A",text:"1.1 T"}, {id:"B",text:"1.21 T"}, {id:"C",text:"1.15 T"}, {id:"D",text:"1.05 T"} ],
    correctAnswer: "A"
  },
  {
    type: "MCQ", difficulty: "Hard",
    question: "A solid sphere and a hollow sphere of the same material and size are heated to the same temperature and allowed to cool in the same surroundings. If the temperature difference between the body and surroundings is T, then:",
    options: [ {id:"A",text:"Hollow sphere cools faster"}, {id:"B",text:"Solid sphere cools faster"}, {id:"C",text:"Both cool at the same rate"}, {id:"D",text:"Data insufficient"} ],
    correctAnswer: "A"
  },
  {
    type: "MCQ", difficulty: "Medium",
    question: "A particle is moving in a circle of radius R with constant speed v. What is the magnitude of average acceleration after it covers a quarter of the circle?",
    options: [ {id:"A",text:"v² / R"}, {id:"B",text:"2v2 v² / pR"}, {id:"C",text:"v² / pR"}, {id:"D",text:"v2 v² / R"} ],
    correctAnswer: "B"
  },
  {
    type: "MCQ", difficulty: "Hard",
    question: "Which of the following statements is true for a reversible process?",
    options: [ {id:"A",text:"Must be very fast"}, {id:"B",text:"Must be strictly adiabatic"}, {id:"C",text:"Must be quasi-static and frictionless"}, {id:"D",text:"Must be isochoric"} ],
    correctAnswer: "C"
  },
  {
    type: "MCQ", difficulty: "Medium",
    question: "An object is placed at a distance of 10 cm from a convex mirror of focal length 15 cm. Find the properties of the image.",
    options: [ {id:"A",text:"Real, inverted, exactly at focus"}, {id:"B",text:"Virtual, erect, 6 cm behind mirror"}, {id:"C",text:"Virtual, inverted, 10 cm behind mirror"}, {id:"D",text:"Real, erect, at infinity"} ],
    correctAnswer: "B"
  },
  {
    type: "MCQ", difficulty: "Hard",
    question: "A particle of mass m is projected with a velocity v = k v_e from the surface of the earth. (v_e = escape velocity). The maximum height above the surface reached by the particle is:",
    options: [ {id:"A",text:"Rk² / (1-k²)"}, {id:"B",text:"Rk / (1-k)²"}, {id:"C",text:"R(k/(1-k))²"}, {id:"D",text:"Rk²(1-k)"} ],
    correctAnswer: "A"
  },
  {
    type: "MCQ", difficulty: "Hard",
    question: "Identify the abstract representation that accurately describes electromagnetic wave propagation in a vacuum.",
    options: [
        { id: "A", text: "", imageUrl: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=150&q=80" },
        { id: "B", text: "", imageUrl: "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?w=150&q=80" },
        { id: "C", text: "", imageUrl: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=150&q=80" },
        { id: "D", text: "", imageUrl: "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=150&q=80" }
    ],
    correctAnswer: "A"
  },
  {
    type: "MCQ", difficulty: "Easy",
    question: "The dimensional formula of Plancks constant is same as that of:",
    options: [{id:"A",text:"Energy"},{id:"B",text:"Power"},{id:"C",text:"Angular Momentum"},{id:"D",text:"Linear Momentum"}],
    correctAnswer: "C"
  },
  {
    type: "MCQ", difficulty: "Medium",
    question: "A string of length L is fixed at both ends. It is vibrating in its 3rd harmonic with amplitude a at the antinodes. The amplitude of a point at a distance L/6 from one end is:",
    options: [{id:"A",text:"a"},{id:"B",text:"a/2"},{id:"C",text:"av3/2"},{id:"D",text:"a/v2"}],
    correctAnswer: "A"
  },
  {
    type: "MCQ", difficulty: "Medium",
    question: "In Bohrs model of the hydrogen atom, the ratio of the radius of the 2nd orbit to that of the 1st orbit is:",
    options: [{id:"A",text:"2:1"},{id:"B",text:"4:1"},{id:"C",text:"1:2"},{id:"D",text:"1:4"}],
    correctAnswer: "B"
  },
  {
    type: "MCQ", difficulty: "Hard",
    question: "Radioactive material A has decay constant 8?, and B has decay constant ?. Initially they have the same number of nuclei. After what time will the ratio of their nuclei be 1/e?",
    options: [{id:"A",text:"1/7?"},{id:"B",text:"1/8?"},{id:"C",text:"1/9?"},{id:"D",text:"1/?"}],
    correctAnswer: "A"
  },
  {
    type: "MCQ", difficulty: "Medium",
    question: "Which logic gate is represented by the Boolean expression Y = (A` + B`)`?",
    options: [{id:"A",text:"OR"},{id:"B",text:"NOR"},{id:"C",text:"AND"},{id:"D",text:"NAND"}],
    correctAnswer: "C"
  },
  {
    type: "Numerical", difficulty: "Medium",
    question: "A car accelerates uniformly from rest to a speed of 36 km/h in 5 seconds. What is the distance covered by the car during this time in meters?",
    correctAnswer: "25"
  },
  {
    type: "Numerical", difficulty: "Hard",
    question: "Two point charges +4 µC and -1 µC are placed 30 cm apart. At what distance (in cm) from the -1 µC charge on the line joining them is the electric potential zero?",
    correctAnswer: "6"
  },
  {
    type: "Numerical", difficulty: "Medium",
    question: "The half-life of a radioactive substance is 30 days. Find the time (in days) required for 3/4th of the original mass to decay.",
    correctAnswer: "60"
  },
  {
    type: "Numerical", difficulty: "Easy",
    question: "A wire of resistance 10 O is stretched to twice its original length. If its volume remains constant, what is its new resistance in Ohms?",
    correctAnswer: "40"
  },
  {
    type: "Numerical", difficulty: "Hard",
    isHtml: true,
    question: "A Carnot engine operates between temperatures T1 and T2, where T1 > T2. If its efficiency is 40% when T2 = 300 K, what must T2 be (in Kelvin) to increase the efficiency to 50% while keeping T1 constant?",
    correctAnswer: "250"
  }
];

let finalArr = q.map((itm, index) => {
    return { ...itm, id: index + 1 };
});

const lines = content.split("\n");
let startIdx = -1;
let endIdx = -1;
for(let i=0; i<lines.length; i++) {
    if(lines[i].includes("Physics: Array.from") || lines[i].includes("Physics: [")) startIdx = i;
    if(lines[i].includes("Chemistry: [") && startIdx > -1) {
        endIdx = i - 1; 
        break;
    }
}
if(startIdx > -1 && endIdx > -1) {
    let newArrayStr = "    Physics: " + JSON.stringify(finalArr, null, 8) + ",";
    lines.splice(startIdx, endIdx - startIdx + 1, newArrayStr);
    fs.writeFileSync(file, lines.join("\n"));
    console.log("Success replacing Physics questions.");
} else {
    console.log("Failed to find boundaries. Start: " + startIdx + " End: " + endIdx);
}

