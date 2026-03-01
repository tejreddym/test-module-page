
const fs = require("fs");
const file = "c:/Users/mokki/test-module-page/src/jeeTestData.js";
let content = fs.readFileSync(file, "utf8");

const chemArr = [
  {
    type: "MCQ", difficulty: "Medium",
    question: "Identify the major product formed when 2-bromopentane is treated with alcoholic KOH.",
    options: [{id:"A",text:"Pent-1-ene"},{id:"B",text:"Pent-2-ene"},{id:"C",text:"Pentan-2-ol"},{id:"D",text:"Pentan-1-ol"}],
    correctAnswer: "B"
  },
  {
    type: "MCQ", difficulty: "Hard",
    question: "Which of the following complexes is diamagnetic?",
    options: [{id:"A",text:"[Fe(CN)6]3-"},{id:"B",text:"[CoF6]3-"},{id:"C",text:"[Co(NH3)6]3+"},{id:"D",text:"[NiCl4]2-"}],
    correctAnswer: "C"
  },
  {
    type: "MCQ", difficulty: "Medium",
    question: "Based on the provided orbital overlap diagram, identify the type of hybridization present in the central carbon atom.",
    imageUrl: "https://images.unsplash.com/photo-1603126859738-12d7c2f6d628?w=200&q=80",
    options: [{id:"A",text:"sp"},{id:"B",text:"sp2"},{id:"C",text:"sp3"},{id:"D",text:"dsp2"}],
    correctAnswer: "B"
  },
  {
    type: "MCQ", difficulty: "Hard",
    question: "Which represents the correct structure for the compound formed in the Cannizzaro reaction of benzaldehyde?",
    options: [
        {id:"A", text:"", imageUrl:"https://images.unsplash.com/photo-1636207196024-db0cc84050d2?w=150&q=80"},
        {id:"B", text:"", imageUrl:"https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=150&q=80"},
        {id:"C", text:"", imageUrl:"https://images.unsplash.com/photo-1647427060183-f8d16a13d789?w=150&q=80"},
        {id:"D", text:"", imageUrl:"https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?w=150&q=80"}
    ],
    correctAnswer: "D"
  },
  {
    type: "MCQ", difficulty: "Medium",
    question: "The correct sequence of decreasing bond lengths is:",
    options: [{id:"A",text:"O2 > O2+ > O2-"},{id:"B",text:"O2- > O2 > O2+"},{id:"C",text:"O2+ > O2 > O2-"},{id:"D",text:"O2- > O2+ > O2"}],
    correctAnswer: "B"
  },
  {
    type: "MCQ", difficulty: "Easy",
    question: "Which inert gas is most abundant in the atmosphere?",
    options: [{id:"A",text:"Helium"},{id:"B",text:"Neon"},{id:"C",text:"Argon"},{id:"D",text:"Krypton"}],
    correctAnswer: "C"
  },
  {
    type: "MCQ", difficulty: "Medium",
    question: "According to crystal field theory, the t2g orbitals in an octahedral complex are:",
    options: [{id:"A",text:"dxy, dyz, dxz"},{id:"B",text:"dx2-y2, dz2"},{id:"C",text:"dxy, dz2"},{id:"D",text:"dxz, dx2-y2"}],
    correctAnswer: "A"
  },
  {
    type: "MCQ", difficulty: "Hard",
    question: "Observe the given reaction sequence. Identify intermediate X and final product Y.",
    imageUrl: "https://images.unsplash.com/photo-1532156821815-46fd4fbabef3?w=300&q=80",
    options: [{id:"A",text:"X: Carbocation, Y: Alkene"},{id:"B",text:"X: Carbanion, Y: Alkane"},{id:"C",text:"X: Free radical, Y: Alkane"},{id:"D",text:"X: Carbene, Y: Cyclopropane"}],
    correctAnswer: "A"
  },
  {
    type: "MCQ", difficulty: "Medium",
    question: "For a first-order gas-phase reaction, the half-life is 10 min. What fraction of the reactant remains after 30 min?",
    options: [{id:"A",text:"1/8"},{id:"B",text:"1/4"},{id:"C",text:"1/16"},{id:"D",text:"1/2"}],
    correctAnswer: "A"
  },
  {
    type: "MCQ", difficulty: "Medium",
    question: "Which defect in crystals lowers the density of the solid?",
    options: [{id:"A",text:"Frenkel defect"},{id:"B",text:"Schottky defect"},{id:"C",text:"Interstitial defect"},{id:"D",text:"F-center defect"}],
    correctAnswer: "B"
  },
  {
    type: "MCQ", difficulty: "Hard",
    question: "Identify the product in the following reaction: Phenol + Chloroform + aq. NaOH ? ?",
    options: [{id:"A",text:"Salicylic acid"},{id:"B",text:"Salicylaldehyde"},{id:"C",text:"Benzoic acid"},{id:"D",text:"p-Hydroxybenzaldehyde"}],
    correctAnswer: "B"
  },
  {
    type: "MCQ", difficulty: "Hard",
    question: "Which curve correctly represents the adsorption isotherm defined by Freundlich?",
    options: [
        {id:"A", text:"", imageUrl:"https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=150&q=80"},
        {id:"B", text:"", imageUrl:"https://images.unsplash.com/photo-1563461660947-507ef49e9c47?w=150&q=80"},
        {id:"C", text:"", imageUrl:"https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=150&q=80"},
        {id:"D", text:"", imageUrl:"https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=150&q=80"}
    ],
    correctAnswer: "A"
  },
  {
    type: "MCQ", difficulty: "Medium",
    question: "What is the IUPAC name of the compound [Co(NH3)5Cl]Cl2?",
    options: [{id:"A",text:"Pentaamminechloridocobalt(III) chloride"},{id:"B",text:"Chloridopentaamminecobalt(III) chloride"},{id:"C",text:"Pentaamminechlorocobalt(II) chloride"},{id:"D",text:"Chloridopentaamminecobalt(II) chloride"}],
    correctAnswer: "A"
  },
  {
    type: "MCQ", difficulty: "Easy",
    question: "Which of the following is an amphoteric oxide?",
    options: [{id:"A",text:"Na2O"},{id:"B",text:"Al2O3"},{id:"C",text:"SO2"},{id:"D",text:"CaO"}],
    correctAnswer: "B"
  },
  {
    type: "MCQ", difficulty: "Hard",
    question: "Which of the following pairs represents linkage isomers?",
    options: [{id:"A",text:"[Co(NH3)5(NO2)]Cl2 and [Co(NH3)5(ONO)]Cl2"},{id:"B",text:"[Pt(NH3)4Cl2]Br2 and [Pt(NH3)4Br2]Cl2"},{id:"C",text:"[Cr(H2O)6]Cl3 and [Cr(H2O)5Cl]Cl2·H2O"},{id:"D",text:"[Co(en)3]3+ and [Cr(en)3]3+"}],
    correctAnswer: "A"
  },
  {
    type: "MCQ", difficulty: "Medium",
    question: "Azeotropic mixture of HCl and water has:",
    options: [{id:"A",text:"84% HCl"},{id:"B",text:"22.2% HCl"},{id:"C",text:"63% HCl"},{id:"D",text:"20.2% HCl"}],
    correctAnswer: "D"
  },
  {
    type: "MCQ", difficulty: "Medium",
    question: "Identify the distinguishing test for primary, secondary, and tertiary aliphatic amines.",
    options: [{id:"A",text:"Hinsberg test"},{id:"B",text:"Lucas test"},{id:"C",text:"Carbylamine test"},{id:"D",text:"Mulliken test"}],
    correctAnswer: "A"
  },
  {
    type: "MCQ", difficulty: "Medium",
    question: "What is the order of reaction when the rate constant has units L mol^-1 s^-1?",
    options: [{id:"A",text:"Zero order"},{id:"B",text:"First order"},{id:"C",text:"Second order"},{id:"D",text:"Third order"}],
    correctAnswer: "C"
  },
  {
    type: "MCQ", difficulty: "Hard",
    question: "Polymers of the type [-O-Si(R)2-O-n] are called:",
    options: [{id:"A",text:"Silicones"},{id:"B",text:"Silanes"},{id:"C",text:"Silicates"},{id:"D",text:"Silicic acids"}],
    correctAnswer: "A"
  },
  {
    type: "MCQ", difficulty: "Easy",
    question: "Vitamin B12 contains which transition metal?",
    options: [{id:"A",text:"Iron"},{id:"B",text:"Cobalt"},{id:"C",text:"Zinc"},{id:"D",text:"Copper"}],
    correctAnswer: "B"
  },
  {
    type: "Numerical", difficulty: "Medium",
    question: "The standard electrode potential for Daniel cell is 1.1V. Calculate the standard Gibbs energy for the reaction in kJ/mol (F = 96487 C/mol).",
    correctAnswer: "212.27"
  },
  {
    type: "Numerical", difficulty: "Hard",
    question: "50 mL of 0.2 M NaOH is titrated against 0.1 M HCl. What is the pH of the solution after the addition of 100 mL of HCl?",
    correctAnswer: "7.00"
  },
  {
    type: "Numerical", difficulty: "Medium",
    question: "An element crystallizes in a face-centered cubic lattice. The edge length of the unit cell is 400 pm. Calculate the atomic radius of the element in pm.",
    correctAnswer: "141.42"
  },
  {
    type: "Numerical", difficulty: "Hard",
    question: "10 grams of a non-volatile solute (molar mass = 100 g/mol) is dissolved in 100 g of water. Calculate the elevation in boiling point (Kb for water = 0.52 K kg/mol).",
    correctAnswer: "0.52"
  },
  {
    type: "Numerical", difficulty: "Medium",
    question: "The rate constant of a reaction increases by 5% when its temperature is raised from 27°C to 28°C. Evaluate the activation energy (in kJ/mol).",
    correctAnswer: "36.6"
  }
];

let finalChem = chemArr.map((itm, index) => {
    return { ...itm, id: index + 1 };
});

const lines = content.split("\n");
let startIdx = -1;
let endIdx = -1;
for(let i=0; i<lines.length; i++) {
    if(lines[i].includes("Chemistry: [") || lines[i].includes("Chemistry: Array.from")) startIdx = i;
    if(lines[i].includes("Mathematics: [") && startIdx > -1) {
        endIdx = i - 1; 
        break;
    }
}

if(startIdx > -1 && endIdx > -1) {
    let newArrayStr = "    Chemistry: " + JSON.stringify(finalChem, null, 8) + ",";
    lines.splice(startIdx, endIdx - startIdx + 1, newArrayStr);
    fs.writeFileSync(file, lines.join("\n"));
    console.log("Success replacing Chemistry questions.");
} else {
    // maybe it goes to the end of file
    for(let i=0; i<lines.length; i++) {
        if(lines[i].includes("Chemistry: [") || lines[i].includes("Chemistry: Array.from")) startIdx = i;
    }
    if (startIdx > -1) {
       endIdx = lines.length - 2; // right before closing brace of module
       let newArrayStr = "    Chemistry: " + JSON.stringify(finalChem, null, 8) + "\n}";
       lines.splice(startIdx, endIdx - startIdx + 1, newArrayStr);
       fs.writeFileSync(file, lines.join("\n"));
       console.log("Success replacing Chemistry questions at EOF.");
    } else {
       console.log("Failed to find boundaries for Chemistry.");
    }
}

