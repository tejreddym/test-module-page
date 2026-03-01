export const EXAM_STREAMS = {
    engineering: {
        title: 'Engineering',
        subtitle: 'Select Your Engineering Exams',
        description: "Choose the specific engineering exams you wish to target. We'll build your schedule around these.",
        guideLink: 'View Engineering Exam Guide',
        exams: [
            {
                id: 'jee-mains',
                icon: 'menu_book',
                logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/NTA_logo.png/512px-NTA_logo.png',
                bgImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000',
                gradient: 'from-cm-physics/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'JEE Mains',
                desc: 'National level engineering entrance exam for NITs, IIITs, and other GFTIs.',
                tags: ['NTA', 'Engineering']
            },
            {
                id: 'jee-advanced',
                icon: 'school',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/JEE_(Advanced)_2026_Logo.png',
                bgImage: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
                gradient: 'from-cm-primary/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'JEE Advanced',
                desc: 'Gateway to all IITs. Requires clearing JEE Mains first.',
                tags: ['IIT', 'Engineering']
            },
            {
                id: 'bitsat',
                icon: 'science',
                logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/512px-BITS_Pilani-Logo.svg.png',
                bgImage: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1000',
                gradient: 'from-cm-logical/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'BITSAT',
                desc: 'University level exam for admission to BITS Pilani, Goa, and Hyderabad.',
                tags: ['BITS', 'Engineering']
            },
            {
                id: 'viteee',
                icon: 'biotech',
                logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Vellore_Institute_of_Technology_logo.png',
                bgImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000',
                gradient: 'from-cm-accent/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'VITEEE',
                desc: 'University level exam for admission to VIT campuses.',
                tags: ['VIT', 'Engineering']
            },
            {
                id: 'ap-eamcet',
                icon: 'agriculture',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Emblem_of_Andhra_Pradesh.svg/1200px-Emblem_of_Andhra_Pradesh.svg.png',
                bgImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000',
                gradient: 'from-cm-maths/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'AP EAPCET',
                desc: 'State level entrance exam for engineering, agriculture and pharmacy in Andhra Pradesh.',
                tags: ['State Level', 'Engineering']
            },
            {
                id: 'gate',
                icon: 'settings_suggest',
                logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Indian_Institute_of_Science_logo.svg/512px-Indian_Institute_of_Science_logo.svg.png',
                bgImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000',
                gradient: 'from-cm-logical/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'GATE',
                desc: 'Graduate Aptitude Test in Engineering for masters and PSU jobs.',
                tags: ['Masters', 'PSU']
            },
            {
                id: 'mhcet',
                icon: 'apartment',
                logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Seal_of_Maharashtra.svg/512px-Seal_of_Maharashtra.svg.png',
                bgImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000',
                gradient: 'from-cm-urgency/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'MHT CET',
                desc: 'State level entrance test for engineering colleges in Maharashtra.',
                tags: ['State Level', 'Engineering']
            }
        ]
    },
    medical: {
        title: 'Medical',
        subtitle: 'Select Your Medical Exams',
        description: "Choose the specific medical exams you wish to target. We'll build your schedule around these.",
        guideLink: 'View Medical Exam Guide',
        exams: [
            {
                id: 'neet-ug',
                icon: 'health_and_safety',
                logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/NTA_logo.png/512px-NTA_logo.png',
                bgImage: 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1000',
                gradient: 'from-cm-chemistry/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'NEET UG',
                desc: 'National level entrance exam for MBBS, BDS, and AYUSH courses.',
                tags: ['UG', 'Medical']
            },
            {
                id: 'neet-pg',
                icon: 'vaccines',
                logo: 'https://natboard.edu.in/images/logo.png',
                bgImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000',
                gradient: 'from-cm-maths/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'NEET PG',
                desc: 'Eligibility-cum-ranking examination for various MD/MS and PG Diploma Courses.',
                tags: ['PG', 'Medical']
            },
            {
                id: 'aiims',
                icon: 'local_hospital',
                logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/08/All_India_Institute_of_Medical_Sciences_New_Delhi_logo.png/512px-All_India_Institute_of_Medical_Sciences_New_Delhi_logo.png',
                bgImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000',
                gradient: 'from-cm-logical/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'AIIMS INI-CET',
                desc: 'Institute of National Importance Combined Entrance Test for PG courses.',
                tags: ['AIIMS', 'PG']
            },
            {
                id: 'jipmer',
                icon: 'monitor_heart',
                logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Jawaharlal_Institute_of_Postgraduate_Medical_Education_%26_Research_logo.png/512px-Jawaharlal_Institute_of_Postgraduate_Medical_Education_%26_Research_logo.png',
                bgImage: 'https://images.unsplash.com/photo-1581093458791-9f3c3250bb8b?auto=format&fit=crop&q=80&w=1000',
                gradient: 'from-cm-accent/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'JIPMER',
                desc: 'Entrance exam for Jawaharlal Institute of Postgraduate Medical Education & Research.',
                tags: ['JIPMER', 'Medical']
            },
            {
                id: 'fmge',
                icon: 'flight_takeoff',
                logo: 'https://natboard.edu.in/images/logo.png',
                bgImage: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80&w=1000',
                gradient: 'from-cm-logical/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'FMGE',
                desc: 'Foreign Medical Graduate Examination for Indian citizens with medical degrees from abroad.',
                tags: ['FMGE', 'Licensing']
            },
            {
                id: 'neet-mds',
                icon: 'dentistry',
                logo: 'https://natboard.edu.in/images/logo.png',
                bgImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000',
                gradient: 'from-cm-urgency/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'NEET MDS',
                desc: 'Eligibility-cum-ranking examination for Master of Dental Surgery.',
                tags: ['MDS', 'Dental']
            }
        ]
    },
    management: {
        title: 'Management',
        subtitle: 'Select Your Management Exams',
        description: "Choose the specific management exams you wish to target. We'll build your schedule around these.",
        guideLink: 'View Management Exam Guide',
        exams: [
            {
                id: 'cat',
                icon: 'bar_chart',
                logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/IIM_A_Logo.png/512px-IIM_A_Logo.png',
                bgImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000',
                gradient: 'from-cm-logical/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'CAT',
                desc: 'Common Admission Test for IIMs and over 1,200 B-schools in India.',
                tags: ['IIM', 'MBA']
            },
            {
                id: 'xat',
                icon: 'insights',
                logo: 'https://xlri.ac.in/images/logo.png',
                bgImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000',
                gradient: 'from-cm-maths/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'XAT',
                desc: 'Xavier Aptitude Test conducted by XLRI Jamshedpur for over 160 B-schools.',
                tags: ['XLRI', 'MBA']
            },
            {
                id: 'gmat',
                icon: 'trending_up',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/GMAT_logo.svg/512px-GMAT_logo.svg.png',
                bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
                gradient: 'from-cm-chemistry/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'GMAT',
                desc: 'Global exam for admission to graduate business and management programs globally.',
                tags: ['Global', 'MBA']
            },
            {
                id: 'snap',
                icon: 'speed',
                logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Symbiosis_International_University_logo.png/512px-Symbiosis_International_University_logo.png',
                bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
                gradient: 'from-cm-accent/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'SNAP',
                desc: 'Symbiosis National Aptitude Test for admission to Symbiosis International University.',
                tags: ['Symbiosis', 'MBA']
            },
            {
                id: 'cmat',
                icon: 'pie_chart',
                logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/NTA_logo.png/512px-NTA_logo.png',
                bgImage: 'https://images.unsplash.com/photo-1454165833767-020fd3611794?auto=format&fit=crop&q=80&w=1000',
                gradient: 'from-cm-logical/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'CMAT',
                desc: 'Common Management Admission Test conducted by NTA for AICTE affiliated B-schools.',
                tags: ['NTA', 'AICTE']
            },
            {
                id: 'nmat',
                icon: 'stacked_line_chart',
                logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Narsee_Monjee_Institute_of_Management_Studies_logo.png/512px-Narsee_Monjee_Institute_of_Management_Studies_logo.png',
                bgImage: 'https://images.unsplash.com/photo-1571260899304-42ea02fc86c4?auto=format&fit=crop&q=80&w=1000',
                gradient: 'from-cm-urgency/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'NMAT',
                desc: 'NMIMS Management Aptitude Test conducted by GMAC for NMIMS and other colleges.',
                tags: ['NMIMS', 'GMAC']
            }
        ]
    },
    commerce: {
        title: 'Commerce',
        subtitle: 'Select Your Commerce Exams',
        description: "Choose the specific commerce and banking exams you wish to target. We'll build your schedule around these.",
        guideLink: 'View Commerce Exam Guide',
        exams: [
            {
                id: 'ca-foundation',
                icon: 'account_circle',
                gradient: 'from-cm-primary/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'CA Foundation',
                desc: 'Entry-level exam for Chartered Accountancy course conducted by ICAI.',
                tags: ['ICAI', 'CA']
            },
            {
                id: 'cs-cseet',
                icon: 'gavel',
                gradient: 'from-cm-chemistry/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'CS CSEET',
                desc: 'CS Executive Entrance Test conducted by ICSI.',
                tags: ['ICSI', 'CS']
            },
            {
                id: 'cma-foundation',
                icon: 'receipt_long',
                gradient: 'from-cm-maths/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'CMA Foundation',
                desc: 'Cost and Management Accountancy Foundation exam by ICMAI.',
                tags: ['ICMAI', 'CMA']
            },
            {
                id: 'ibps-po',
                icon: 'account_balance_wallet',
                gradient: 'from-cm-logical/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'IBPS PO',
                desc: 'Institute of Banking Personnel Selection exam for Probationary Officers.',
                tags: ['IBPS', 'Banking']
            },
            {
                id: 'sbi-po',
                icon: 'account_balance',
                gradient: 'from-cm-logical/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'SBI PO',
                desc: 'State Bank of India exam for Probationary Officers.',
                tags: ['SBI', 'Banking']
            },
            {
                id: 'rbi-grade-b',
                icon: 'currency_rupee',
                gradient: 'from-cm-urgency/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'RBI Grade B',
                desc: 'Reserve Bank of India exam for Officers in Grade B.',
                tags: ['RBI', 'Banking']
            }
        ]
    },
    law: {
        title: 'Law',
        subtitle: 'Select Your Law Exams',
        description: "Choose the specific law exams you wish to target. We'll build your schedule around these.",
        guideLink: 'View Law Exam Guide',
        exams: [
            {
                id: 'clat',
                icon: 'gavel',
                gradient: 'from-cm-logical/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'CLAT',
                desc: 'Common Law Admission Test for admission to 24 National Law Universities.',
                tags: ['CLAT', 'NLU']
            },
            {
                id: 'ailet',
                icon: 'balance',
                gradient: 'from-cm-chemistry/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'AILET',
                desc: 'All India Law Entrance Test for admission to NLU Delhi.',
                tags: ['AILET', 'NLU Delhi']
            },
            {
                id: 'lsat-india',
                icon: 'menu_book',
                gradient: 'from-cm-maths/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'LSAT India',
                desc: 'Law School Admission Test for admission to multiple law colleges in India.',
                tags: ['LSAT', 'Law']
            },
            {
                id: 'mhcet-law',
                icon: 'apartment',
                gradient: 'from-cm-primary/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'MH CET Law',
                desc: 'State-level exam for admission to law colleges in Maharashtra.',
                tags: ['State Level', 'Law']
            },
            {
                id: 'slat',
                icon: 'school',
                gradient: 'from-cm-logical/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'SLAT',
                desc: 'Symbiosis Law Admission Test for SIU law programs.',
                tags: ['Symbiosis', 'Law']
            },
            {
                id: 'cuet-law',
                icon: 'public',
                gradient: 'from-cm-urgency/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'CUET Law',
                desc: 'Common University Entrance Test for law programs in Central Universities.',
                tags: ['CUET', 'Central']
            }
        ]
    },
    civil: {
        title: 'Civil Services',
        subtitle: 'Select Your Civil & Govt Exams',
        description: "Choose the specific civil service and government exams you wish to target. We'll build your schedule around these.",
        guideLink: 'View Civil Exams Guide',
        exams: [
            {
                id: 'upsc-cse',
                icon: 'account_balance',
                gradient: 'from-cm-urgency/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'UPSC CSE',
                desc: 'Civil Services Examination for recruitment to IAS, IPS, IFS, and other central services.',
                tags: ['UPSC', 'Civil Services']
            },
            {
                id: 'ssc-cgl',
                icon: 'groups',
                gradient: 'from-cm-primary/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'SSC CGL',
                desc: 'Combined Graduate Level Examination for various Group B and C posts in Ministries/Departments.',
                tags: ['SSC', 'Graduate Level']
            },
            {
                id: 'state-psc',
                icon: 'location_city',
                gradient: 'from-cm-chemistry/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'State PSC Base',
                desc: 'Preparation syllabus covering general required state public service commissions.',
                tags: ['State', 'PSC']
            },
            {
                id: 'rrb-ntpc',
                icon: 'train',
                gradient: 'from-cm-maths/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'RRB NTPC',
                desc: 'Railway Recruitment Board Non-Technical Popular Categories exam.',
                tags: ['RRB', 'Railways']
            },
            {
                id: 'upsc-nda',
                icon: 'military_tech',
                gradient: 'from-cm-logical/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'UPSC NDA',
                desc: 'National Defence Academy and Naval Academy Examination.',
                tags: ['UPSC', 'Defence']
            },
            {
                id: 'ssc-chsl',
                icon: 'edit_document',
                gradient: 'from-cm-logical/90 to-cm-dark/30',
                iconBg: 'bg-white/20',
                title: 'SSC CHSL',
                desc: 'Combined Higher Secondary Level exam for LDC, JSA and Postal Assistant posts.',
                tags: ['SSC', '10+2']
            }
        ]
    }
};
