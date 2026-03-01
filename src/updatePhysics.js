
const fs = require("fs");
const file = "c:/Users/mokki/test-module-page/src/jeeTestData.js";

let content = fs.readFileSync(file, "utf8");

const createMCQ = (id, hasImg, hasOptImg) => {
    let q = {
        id,
        type: "MCQ",
        difficulty: id % 3 === 0 ? "Hard" : "Medium",
        question: `Sample Physics MCQ Question ${id}. This is a dummy question string for testing purposes.`,
        options: [
            { id: "A", text: "Option A" },
            { id: "B", text: "Option B" },
            { id: "C", text: "Option C" },
            { id: "D", text: "Option D" }
        ],
        correctAnswer: "A"
    };
    if (hasImg) {
        q.imageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuAOoAZeDh1M0oT4d02RLAmS7pc3POGVju7t2eRxXygqyhXvdY_yWc4CrBqM34AQ7H9ncxRMDikkfZS-zQ8bhNEkD_Wva7KT5pIDd23i0IDFXiO3-iK3ztGhUwsERrp_X_L-NDYSG2kSZ0SX--iXkp7rG2ivamMlJhbjl5C1EWq13iImFrbXeU9UWdS5H5-5kapsqBxUVBsbuWKG5NXOO6unwbTHvYMn2AoY2SdkN4_KpZhu8Y4L9rMMfqChqrCUZoq4ArnAm6_ao-H4";
    }
    if (hasOptImg) {
        q.options = q.options.map((opt, i) => ({
            ...opt,
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFo4oQ9Q5A_Xf5_s6E0P3E8_m5vD2vLw2_7H-L-N_lJ-S6J_3B9M-Zq-X-Pz5t_E7R0k2_P5E1w4a0x9-C4Vz6o7l_y1v8_x0z-x_V-Y3f_w_X_Y2k-m6o7q_Z_c-Q_x8l-v6o7G4j2n3F_l-Z-X8o_w8c1-y_Z7K8k-v_W2i_l8_c_w4A",
            text: ""
        }));
    }
    return q;
};

const createNum = (id) => {
    return {
        id,
        type: "Numerical",
        difficulty: "Medium",
        question: `Calculate the specific value for physics problem ${id}.`,
        hint: "Enter your answer as a numerical value. Round off to 2 decimal places.",
        correctAnswer: "10.50"
    };
};

let physicsQuestions = [];
for (let i = 1; i <= 20; i++) {
    physicsQuestions.push(createMCQ(i, i === 1 || i === 8, i === 4 || i === 15));
}
for (let i = 21; i <= 25; i++) {
    physicsQuestions.push(createNum(i));
}

// Replace the Physics array in the file
const regex = /Physics:\s*\[[\s\S]*?\](?=,\s*Chemistry:|\s*\n\s*};\s*$)/;
content = content.replace(regex, "Physics: " + JSON.stringify(physicsQuestions, null, 8));

fs.writeFileSync(file, content);
console.log("Updated jeeTestData.js with 25 Physics questions.");

