
const fs = require("fs");
const file = "c:/Users/mokki/test-module-page/src/jeeTestData.js";
let content = fs.readFileSync(file, "utf8");

let phys = [];

const q1 = {
    id: 1, type: "MCQ", difficulty: "Hard",
    question: "In the arrangement shown in the figure, the mass of block A is m and that of block B is 2m. If the system is released from rest, determine the acceleration of block A.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOoAZeDh1M0oT4d02RLAmS7pc3POGVju7t2eRxXygqyhXvdY_yWc4CrBqM34AQ7H9ncxRMDikkfZS-zQ8bhNEkD_Wva7KT5pIDd23i0IDFXiO3-iK3ztGhUwsERrp_X_L-NDYSG2kSZ0SX--iXkp7rG2ivamMlJhbjl5C1EWq13iImFrbXeU9UWdS5H5-5kapsqBxUVBsbuWKG5NXOO6unwbTHvYMn2AoY2SdkN4_KpZhu8Y4L9rMMfqChqrCUZoq4ArnAm6_ao-H4",
    hint: "Assume g is the acceleration due to gravity",
    options: [{id:"A",text:"g/3"},{id:"B",text:"2g/3"},{id:"C",text:"g/5"},{id:"D",text:"2g/5"}],
    correctAnswer: "A"
};

const q_img_opt = {
    id: 2, type: "MCQ", difficulty: "Medium",
    question: "Identify the correct graph showing the variation of velocity with time for a particle dropped from a height.",
    options: [
        {id:"A", text:"", imageUrl:"https://lh3.googleusercontent.com/aida-public/AB6AXuAy8Xk0Zp7L-y_R3O5vT8e2u9B5Z8Z2B2i6L_Y8T8o_X9C3G2o5u_9u7a_Vv8p_y_H5x_F7a6q2E1Q-U2G9D5h5l7c3m3F5S8N2G9a2e8X3c-Q6M4m7M2C3z_E5q6H9L3Q5w1K-M9v_2C9I8A2p_F2y3X_i7N2M-z-3P5k4D8W9D8L8B2M3Z4e7d4L9H3T7x9p"},
        {id:"B", text:"", imageUrl:"https://lh3.googleusercontent.com/aida-public/AB6AXuD9R_8K3X7G-v0u_7X-s-p_7S2F2D1h9z3X3v5D-T2B3k3T2B4c_9y1W-k5F5V-n0W7M5A2i4s2Z2Y-p-L3v-B5s6T8z7R1u4i-B3H2R-y-N6v-Y4I1U2l8K9Q4N8e2g2C3a5K-x1z0u2b-M-K6k7a3p_9s3l-p8Y-d3V9z3P-q"},
        {id:"C", text:"Constant graph", imageUrl: ""},
        {id:"D", text:"Zero graph", imageUrl: ""}
    ],
    correctAnswer: "A"
};

const q_norm = {
    id: 3, type: "MCQ", difficulty: "Medium",
    question: "The de Broglie wavelength of an electron moving with a velocity c/2 is equal to the wavelength of a photon. The ratio of the kinetic energy of the electron to that of the photon is:",
    options: [{id:"A",text:"1:2"},{id:"B",text:"2:1"},{id:"C",text:"1:4"},{id:"D",text:"4:1"}],
    correctAnswer: "A"
};

const num_q = {
    id: 21, type: "Numerical", difficulty: "Hard",
    question: "A particle of mass 2 kg is subjected to a force F = (3x² + 4) N. Calculate the work done in moving it from x=0 to x=2.",
    hint: "Enter your answer as a numerical value. Round to 2 decimals.",
    correctAnswer: "16.00"
};

for(let i=1; i<=25; i++) {
    let q = {};
    if(i <= 20) {
        if(i === 1 || i === 10) {
            q = {...q1, id: i};
        } else if (i === 5 || i === 15) {
            q = {...q_img_opt, id: i};
            q.options = q.options.map(o => ({...o}));
        } else {
            q = {...q_norm, id: i};
            q.options = q.options.map(o => ({...o}));
        }
    } else {
        q = {...num_q, id: i, question: `Calculate the numerical value for problem ${i}.`};
    }
    phys.push(q);
}

const lines = content.split("\n");
let startIdx = -1;
let endIdx = -1;
for(let i=0; i<lines.length; i++) {
    if(lines[i].includes("Physics: [")) startIdx = i;
    if(lines[i].includes("Chemistry: [") && startIdx > -1) {
        endIdx = i - 1; // back one to avoid the comma maybe
        break;
    }
}
if(startIdx > -1 && endIdx > -1) {
    let newArrayStr = "    Physics: " + JSON.stringify(phys, null, 8) + ",";
    lines.splice(startIdx, endIdx - startIdx + 1, newArrayStr);
    fs.writeFileSync(file, lines.join("\n"));
    console.log("Success");
} else {
    console.log("Failed to find Physics array.");
}

