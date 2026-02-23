export const examData = {
    'jee-mains': {
        title: 'JEE Mains',
        subjects: [
            {
                id: 'physics',
                name: 'Physics',
                icon: 'science',
                iconColor: 'text-blue-500',
                iconBg: 'bg-blue-100',
                totalChapters: 21,
                categories: [
                    {
                        name: 'MECHANICS',
                        colorClass: 'bg-blue-500',
                        chapters: [
                            { id: 'jm-p1', name: 'Physics and Measurement', weightage: 'normal' },
                            { id: 'jm-p2', name: 'Kinematics', weightage: 'normal' },
                            { id: 'jm-p3', name: 'Laws of Motion', weightage: 'high' },
                            { id: 'jm-p4', name: 'Work, Energy and Power', weightage: 'normal' },
                            { id: 'jm-p5', name: 'Rotational Motion', weightage: 'high' },
                            { id: 'jm-p6', name: 'Gravitation', weightage: 'normal' },
                            { id: 'jm-p7', name: 'Properties of Solids and Liquids', weightage: 'normal' }
                        ]
                    },
                    {
                        name: 'THERMODYNAMICS & KINETIC THEORY',
                        colorClass: 'bg-red-500',
                        chapters: [
                            { id: 'jm-p8', name: 'Thermodynamics', weightage: 'high' },
                            { id: 'jm-p9', name: 'Kinetic Theory of Gases', weightage: 'normal' }
                        ]
                    },
                    {
                        name: 'ELECTROMAGNETISM',
                        colorClass: 'bg-yellow-500',
                        chapters: [
                            { id: 'jm-p10', name: 'Electrostatics', weightage: 'high' },
                            { id: 'jm-p11', name: 'Current Electricity', weightage: 'high' },
                            { id: 'jm-p12', name: 'Magnetic Effects of Current and Magnetism', weightage: 'normal' },
                            { id: 'jm-p13', name: 'Electromagnetic Induction and Alternating Currents', weightage: 'high' },
                            { id: 'jm-p14', name: 'Electromagnetic Waves', weightage: 'normal' }
                        ]
                    },
                    {
                        name: 'OPTICS & MODERN PHYSICS',
                        colorClass: 'bg-purple-500',
                        chapters: [
                            { id: 'jm-p15', name: 'Optics (Ray and Wave)', weightage: 'high' },
                            { id: 'jm-p16', name: 'Dual Nature of Matter and Radiation', weightage: 'normal' },
                            { id: 'jm-p17', name: 'Atoms and Nuclei', weightage: 'normal' },
                            { id: 'jm-p18', name: 'Electronic Devices', weightage: 'high' },
                            { id: 'jm-p19', name: 'Experimental Skills', weightage: 'normal' }
                        ]
                    }
                ]
            },
            {
                id: 'chemistry',
                name: 'Chemistry',
                icon: 'biotech',
                iconColor: 'text-teal-600',
                iconBg: 'bg-teal-50',
                totalChapters: 28,
                categories: [
                    {
                        name: 'PHYSICAL CHEMISTRY',
                        colorClass: 'bg-teal-500',
                        chapters: [
                            { id: 'jm-c1', name: 'Some Basic Concepts in Chemistry', weightage: 'normal' },
                            { id: 'jm-c2', name: 'Atomic Structure', weightage: 'normal' },
                            { id: 'jm-c3', name: 'Chemical Bonding and Molecular Structure', weightage: 'high' },
                            { id: 'jm-c4', name: 'Chemical Thermodynamics', weightage: 'high' },
                            { id: 'jm-c5', name: 'Solutions', weightage: 'normal' },
                            { id: 'jm-c6', name: 'Equilibrium', weightage: 'high' },
                            { id: 'jm-c7', name: 'Redox Reactions and Electrochemistry', weightage: 'high' },
                            { id: 'jm-c8', name: 'Chemical Kinetics', weightage: 'normal' }
                        ]
                    },
                    {
                        name: 'INORGANIC CHEMISTRY',
                        colorClass: 'bg-indigo-500',
                        chapters: [
                            { id: 'jm-c9', name: 'Classification of Elements and Periodicity in Properties', weightage: 'normal' },
                            { id: 'jm-c10', name: 'p-Block Elements', weightage: 'high' },
                            { id: 'jm-c11', name: 'd- and f- Block Elements', weightage: 'high' },
                            { id: 'jm-c12', name: 'Coordination Compounds', weightage: 'high' },
                            { id: 'jm-c13', name: 'Principles Related to Practical Chemistry', weightage: 'normal' }
                        ]
                    },
                    {
                        name: 'ORGANIC CHEMISTRY',
                        colorClass: 'bg-orange-500',
                        chapters: [
                            { id: 'jm-c14', name: 'Purification and Characterisation of Organic Compounds', weightage: 'normal' },
                            { id: 'jm-c15', name: 'Some Basic Principles of Organic Chemistry', weightage: 'high' },
                            { id: 'jm-c16', name: 'Hydrocarbons', weightage: 'normal' },
                            { id: 'jm-c17', name: 'Organic Compounds Containing Halogens', weightage: 'normal' },
                            { id: 'jm-c18', name: 'Organic Compounds Containing Oxygen', weightage: 'high' },
                            { id: 'jm-c19', name: 'Organic Compounds Containing Nitrogen', weightage: 'high' },
                            { id: 'jm-c20', name: 'Biomolecules', weightage: 'normal' },
                            { id: 'jm-c21', name: 'Principles Related to Practical Chemistry', weightage: 'normal' }
                        ]
                    }
                ]
            },
            {
                id: 'mathematics',
                name: 'Mathematics',
                icon: 'calculate',
                iconColor: 'text-orange-500',
                iconBg: 'bg-orange-50',
                totalChapters: 16,
                categories: [
                    {
                        name: 'ALGEBRA',
                        colorClass: 'bg-orange-500',
                        chapters: [
                            { id: 'jm-m1', name: 'Sets, Relations and Functions', weightage: 'normal' },
                            { id: 'jm-m2', name: 'Complex Numbers and Quadratic Equations', weightage: 'normal' },
                            { id: 'jm-m3', name: 'Matrices and Determinants', weightage: 'high' },
                            { id: 'jm-m4', name: 'Permutations and Combinations', weightage: 'high' },
                            { id: 'jm-m5', name: 'Binomial Theorem and its Simple Applications', weightage: 'normal' },
                            { id: 'jm-m6', name: 'Sequence and Series', weightage: 'high' }
                        ]
                    },
                    {
                        name: 'CALCULUS',
                        colorClass: 'bg-green-500',
                        chapters: [
                            { id: 'jm-m7', name: 'Limit, Continuity and Differentiability', weightage: 'high' },
                            { id: 'jm-m8', name: 'Integral Calculus', weightage: 'high' },
                            { id: 'jm-m9', name: 'Differential Equations', weightage: 'high' }
                        ]
                    },
                    {
                        name: 'COORDINATE GEOMETRY',
                        colorClass: 'bg-pink-500',
                        chapters: [
                            { id: 'jm-m10', name: 'Coordinate Geometry (Straight Lines & Conic Sections)', weightage: 'high' }
                        ]
                    },
                    {
                        name: 'VECTORS & 3D GEOMETRY',
                        colorClass: 'bg-blue-600',
                        chapters: [
                            { id: 'jm-m11', name: 'Vector Algebra', weightage: 'normal' },
                            { id: 'jm-m12', name: 'Three Dimensional Geometry', weightage: 'high' }
                        ]
                    },
                    {
                        name: 'STATISTICS & PROBABILITY',
                        colorClass: 'bg-yellow-600',
                        chapters: [
                            { id: 'jm-m13', name: 'Statistics and Probability', weightage: 'high' }
                        ]
                    },
                    {
                        name: 'TRIGONOMETRY',
                        colorClass: 'bg-rose-500',
                        chapters: [
                            { id: 'jm-m14', name: 'Trigonometry', weightage: 'normal' }
                        ]
                    }
                ]
            }
        ]
    },
    'neet-ug': {
        title: 'NEET UG',
        subjects: [
            {
                id: 'physics',
                name: 'Physics',
                icon: 'science',
                iconColor: 'text-blue-500',
                iconBg: 'bg-blue-100',
                totalChapters: 20,
                categories: [
                    {
                        name: 'MECHANICS',
                        colorClass: 'bg-blue-500',
                        chapters: [
                            { id: 'nu-p1', name: 'Physics and Measurement', weightage: 'normal' },
                            { id: 'nu-p2', name: 'Kinematics', weightage: 'normal' },
                            { id: 'nu-p3', name: 'Laws of Motion', weightage: 'high' },
                            { id: 'nu-p4', name: 'Work, Energy and Power', weightage: 'normal' },
                            { id: 'nu-p5', name: 'Rotational Motion', weightage: 'high' },
                            { id: 'nu-p6', name: 'Gravitation', weightage: 'normal' },
                            { id: 'nu-p7', name: 'Properties of Bulk Matter', weightage: 'normal' }
                        ]
                    },
                    {
                        name: 'THERMODYNAMICS',
                        colorClass: 'bg-red-500',
                        chapters: [
                            { id: 'nu-p8', name: 'Thermodynamics', weightage: 'high' },
                            { id: 'nu-p9', name: 'Behavior of Perfect Gas and Kinetic Theory', weightage: 'normal' }
                        ]
                    },
                    {
                        name: 'ELECTROMAGNETISM',
                        colorClass: 'bg-yellow-500',
                        chapters: [
                            { id: 'nu-p10', name: 'Electrostatics', weightage: 'high' },
                            { id: 'nu-p11', name: 'Current Electricity', weightage: 'high' },
                            { id: 'nu-p12', name: 'Magnetic Effects of Current and Magnetism', weightage: 'normal' },
                            { id: 'nu-p13', name: 'Electromagnetic Induction and Alternating Currents', weightage: 'high' },
                            { id: 'nu-p14', name: 'Electromagnetic Waves', weightage: 'normal' }
                        ]
                    },
                    {
                        name: 'OPTICS & MODERN PHYSICS',
                        colorClass: 'bg-purple-500',
                        chapters: [
                            { id: 'nu-p15', name: 'Optics', weightage: 'high' },
                            { id: 'nu-p16', name: 'Dual Nature of Matter and Radiation', weightage: 'normal' },
                            { id: 'nu-p17', name: 'Atoms and Nuclei', weightage: 'normal' },
                            { id: 'nu-p18', name: 'Electronic Devices', weightage: 'high' }
                        ]
                    }
                ]
            },
            {
                id: 'chemistry',
                name: 'Chemistry',
                icon: 'biotech',
                iconColor: 'text-teal-600',
                iconBg: 'bg-teal-50',
                totalChapters: 20,
                categories: [
                    {
                        name: 'PHYSICAL CHEMISTRY',
                        colorClass: 'bg-teal-500',
                        chapters: [
                            { id: 'nu-c1', name: 'Some Basic Concepts of Chemistry', weightage: 'normal' },
                            { id: 'nu-c2', name: 'Structure of Atom', weightage: 'normal' },
                            { id: 'nu-c3', name: 'Chemical Thermodynamics', weightage: 'high' },
                            { id: 'nu-c4', name: 'Solutions', weightage: 'normal' },
                            { id: 'nu-c5', name: 'Equilibrium', weightage: 'high' },
                            { id: 'nu-c6', name: 'Redox Reactions and Electrochemistry', weightage: 'high' },
                            { id: 'nu-c7', name: 'Chemical Kinetics', weightage: 'normal' }
                        ]
                    },
                    {
                        name: 'INORGANIC CHEMISTRY',
                        colorClass: 'bg-indigo-500',
                        chapters: [
                            { id: 'nu-c8', name: 'Classification of Elements and Periodicity', weightage: 'normal' },
                            { id: 'nu-c9', name: 'Chemical Bonding and Molecular Structure', weightage: 'high' },
                            { id: 'nu-c10', name: 'p-Block Elements', weightage: 'high' },
                            { id: 'nu-c11', name: 'd and f Block Elements', weightage: 'high' },
                            { id: 'nu-c12', name: 'Coordination Compounds', weightage: 'high' }
                        ]
                    },
                    {
                        name: 'ORGANIC CHEMISTRY',
                        colorClass: 'bg-orange-500',
                        chapters: [
                            { id: 'nu-c13', name: 'Organic Chemistry - Some Basic Principles and Techniques', weightage: 'high' },
                            { id: 'nu-c14', name: 'Hydrocarbons', weightage: 'normal' },
                            { id: 'nu-c15', name: 'Haloalkanes and Haloarenes', weightage: 'normal' },
                            { id: 'nu-c16', name: 'Alcohols, Phenols and Ethers', weightage: 'high' },
                            { id: 'nu-c17', name: 'Aldehydes, Ketones and Carboxylic Acids', weightage: 'high' },
                            { id: 'nu-c18', name: 'Organic Compounds Containing Nitrogen', weightage: 'high' },
                            { id: 'nu-c19', name: 'Biomolecules', weightage: 'normal' }
                        ]
                    }
                ]
            },
            {
                id: 'biology',
                name: 'Biology',
                icon: 'forest',
                iconColor: 'text-green-600',
                iconBg: 'bg-green-50',
                totalChapters: 10,
                categories: [
                    {
                        name: 'DIVERSITY & STRUCTURE',
                        colorClass: 'bg-green-600',
                        chapters: [
                            { id: 'nu-b1', name: 'Diversity in Living World', weightage: 'high' },
                            { id: 'nu-b2', name: 'Structural Organisation in Animals and Plants', weightage: 'high' },
                            { id: 'nu-b3', name: 'Cell Structure and Function', weightage: 'high' }
                        ]
                    },
                    {
                        name: 'PHYSIOLOGY',
                        colorClass: 'bg-red-500',
                        chapters: [
                            { id: 'nu-b4', name: 'Plant Physiology', weightage: 'high' },
                            { id: 'nu-b5', name: 'Human Physiology', weightage: 'high' }
                        ]
                    },
                    {
                        name: 'REPRODUCTION & GENETICS',
                        colorClass: 'bg-blue-500',
                        chapters: [
                            { id: 'nu-b6', name: 'Reproduction', weightage: 'high' },
                            { id: 'nu-b7', name: 'Genetics and Evolution', weightage: 'high' }
                        ]
                    },
                    {
                        name: 'BIOLOGY IN HUMAN WELFARE & ECOLOGY',
                        colorClass: 'bg-yellow-600',
                        chapters: [
                            { id: 'nu-b8', name: 'Biology and Human Welfare', weightage: 'normal' },
                            { id: 'nu-b9', name: 'Biotechnology and Its Applications', weightage: 'high' },
                            { id: 'nu-b10', name: 'Ecology and Environment', weightage: 'high' }
                        ]
                    }
                ]
            }
        ]
    }
    // ... we can easily add more here or dynamically load them
};
