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
                gradient: 'from-[#ff6b00] to-[#e63900]',
                iconBg: 'bg-white/20',
                title: 'JEE Mains',
                desc: 'National level engineering entrance exam for NITs, IIITs, and other GFTIs.',
                tags: ['NTA', 'Engineering']
            },
            {
                id: 'jee-advanced',
                icon: 'school',
                gradient: 'from-[#12cd9b] to-[#04a572]',
                iconBg: 'bg-white/20',
                title: 'JEE Advanced',
                desc: 'Gateway to all IITs. Requires clearing JEE Mains first.',
                tags: ['IIT', 'Engineering']
            },
            {
                id: 'bitsat',
                icon: 'science',
                gradient: 'from-[#bc13fe] to-[#8f00f0]',
                iconBg: 'bg-white/20',
                title: 'BITSAT',
                desc: 'University level exam for admission to BITS Pilani, Goa, and Hyderabad.',
                tags: ['BITS', 'Engineering']
            },
            {
                id: 'viteee',
                icon: 'biotech',
                gradient: 'from-[#426df8] to-[#1241df]',
                iconBg: 'bg-white/20',
                title: 'VITEEE',
                desc: 'University level exam for admission to VIT campuses.',
                tags: ['VIT', 'Engineering']
            },
            {
                id: 'gate',
                icon: 'settings_suggest',
                gradient: 'from-[#9b4dca] to-[#7f32a8]',
                iconBg: 'bg-white/20',
                title: 'GATE',
                desc: 'Graduate Aptitude Test in Engineering for masters and PSU jobs.',
                tags: ['Masters', 'PSU']
            },
            {
                id: 'mhcet',
                icon: 'apartment',
                gradient: 'from-[#ef4444] to-[#c71717]',
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
                gradient: 'from-[#12cd9b] to-[#04a572]',
                iconBg: 'bg-white/20',
                title: 'NEET UG',
                desc: 'National level entrance exam for MBBS, BDS, and AYUSH courses.',
                tags: ['UG', 'Medical']
            },
            {
                id: 'neet-pg',
                icon: 'vaccines',
                gradient: 'from-[#ff6b00] to-[#e63900]',
                iconBg: 'bg-white/20',
                title: 'NEET PG',
                desc: 'Eligibility-cum-ranking examination for various MD/MS and PG Diploma Courses.',
                tags: ['PG', 'Medical']
            },
            {
                id: 'aiims',
                icon: 'local_hospital',
                gradient: 'from-[#bc13fe] to-[#8f00f0]',
                iconBg: 'bg-white/20',
                title: 'AIIMS INI-CET',
                desc: 'Institute of National Importance Combined Entrance Test for PG courses.',
                tags: ['AIIMS', 'PG']
            },
            {
                id: 'jipmer',
                icon: 'monitor_heart',
                gradient: 'from-[#426df8] to-[#1241df]',
                iconBg: 'bg-white/20',
                title: 'JIPMER',
                desc: 'Entrance exam for Jawaharlal Institute of Postgraduate Medical Education & Research.',
                tags: ['JIPMER', 'Medical']
            },
            {
                id: 'fmge',
                icon: 'flight_takeoff',
                gradient: 'from-[#9b4dca] to-[#7f32a8]',
                iconBg: 'bg-white/20',
                title: 'FMGE',
                desc: 'Foreign Medical Graduate Examination for Indian citizens with medical degrees from abroad.',
                tags: ['FMGE', 'Licensing']
            },
            {
                id: 'neet-mds',
                icon: 'dentistry',
                gradient: 'from-[#ef4444] to-[#c71717]',
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
                gradient: 'from-[#bc13fe] to-[#8f00f0]',
                iconBg: 'bg-white/20',
                title: 'CAT',
                desc: 'Common Admission Test for IIMs and over 1,200 B-schools in India.',
                tags: ['IIM', 'MBA']
            },
            {
                id: 'xat',
                icon: 'insights',
                gradient: 'from-[#ff6b00] to-[#e63900]',
                iconBg: 'bg-white/20',
                title: 'XAT',
                desc: 'Xavier Aptitude Test conducted by XLRI Jamshedpur for over 160 B-schools.',
                tags: ['XLRI', 'MBA']
            },
            {
                id: 'gmat',
                icon: 'trending_up',
                gradient: 'from-[#12cd9b] to-[#04a572]',
                iconBg: 'bg-white/20',
                title: 'GMAT',
                desc: 'Global exam for admission to graduate business and management programs globally.',
                tags: ['Global', 'MBA']
            },
            {
                id: 'snap',
                icon: 'speed',
                gradient: 'from-[#426df8] to-[#1241df]',
                iconBg: 'bg-white/20',
                title: 'SNAP',
                desc: 'Symbiosis National Aptitude Test for admission to Symbiosis International University.',
                tags: ['Symbiosis', 'MBA']
            },
            {
                id: 'cmat',
                icon: 'pie_chart',
                gradient: 'from-[#9b4dca] to-[#7f32a8]',
                iconBg: 'bg-white/20',
                title: 'CMAT',
                desc: 'Common Management Admission Test conducted by NTA for AICTE affiliated B-schools.',
                tags: ['NTA', 'AICTE']
            },
            {
                id: 'nmat',
                icon: 'stacked_line_chart',
                gradient: 'from-[#ef4444] to-[#c71717]',
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
                gradient: 'from-[#426df8] to-[#1241df]',
                iconBg: 'bg-white/20',
                title: 'CA Foundation',
                desc: 'Entry-level exam for Chartered Accountancy course conducted by ICAI.',
                tags: ['ICAI', 'CA']
            },
            {
                id: 'cs-cseet',
                icon: 'gavel',
                gradient: 'from-[#12cd9b] to-[#04a572]',
                iconBg: 'bg-white/20',
                title: 'CS CSEET',
                desc: 'CS Executive Entrance Test conducted by ICSI.',
                tags: ['ICSI', 'CS']
            },
            {
                id: 'cma-foundation',
                icon: 'receipt_long',
                gradient: 'from-[#ff6b00] to-[#e63900]',
                iconBg: 'bg-white/20',
                title: 'CMA Foundation',
                desc: 'Cost and Management Accountancy Foundation exam by ICMAI.',
                tags: ['ICMAI', 'CMA']
            },
            {
                id: 'ibps-po',
                icon: 'account_balance_wallet',
                gradient: 'from-[#bc13fe] to-[#8f00f0]',
                iconBg: 'bg-white/20',
                title: 'IBPS PO',
                desc: 'Institute of Banking Personnel Selection exam for Probationary Officers.',
                tags: ['IBPS', 'Banking']
            },
            {
                id: 'sbi-po',
                icon: 'account_balance',
                gradient: 'from-[#9b4dca] to-[#7f32a8]',
                iconBg: 'bg-white/20',
                title: 'SBI PO',
                desc: 'State Bank of India exam for Probationary Officers.',
                tags: ['SBI', 'Banking']
            },
            {
                id: 'rbi-grade-b',
                icon: 'currency_rupee',
                gradient: 'from-[#ef4444] to-[#c71717]',
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
                gradient: 'from-[#9b4dca] to-[#7f32a8]',
                iconBg: 'bg-white/20',
                title: 'CLAT',
                desc: 'Common Law Admission Test for admission to 24 National Law Universities.',
                tags: ['CLAT', 'NLU']
            },
            {
                id: 'ailet',
                icon: 'balance',
                gradient: 'from-[#12cd9b] to-[#04a572]',
                iconBg: 'bg-white/20',
                title: 'AILET',
                desc: 'All India Law Entrance Test for admission to NLU Delhi.',
                tags: ['AILET', 'NLU Delhi']
            },
            {
                id: 'lsat-india',
                icon: 'menu_book',
                gradient: 'from-[#ff6b00] to-[#e63900]',
                iconBg: 'bg-white/20',
                title: 'LSAT India',
                desc: 'Law School Admission Test for admission to multiple law colleges in India.',
                tags: ['LSAT', 'Law']
            },
            {
                id: 'mhcet-law',
                icon: 'apartment',
                gradient: 'from-[#426df8] to-[#1241df]',
                iconBg: 'bg-white/20',
                title: 'MH CET Law',
                desc: 'State-level exam for admission to law colleges in Maharashtra.',
                tags: ['State Level', 'Law']
            },
            {
                id: 'slat',
                icon: 'school',
                gradient: 'from-[#bc13fe] to-[#8f00f0]',
                iconBg: 'bg-white/20',
                title: 'SLAT',
                desc: 'Symbiosis Law Admission Test for SIU law programs.',
                tags: ['Symbiosis', 'Law']
            },
            {
                id: 'cuet-law',
                icon: 'public',
                gradient: 'from-[#ef4444] to-[#c71717]',
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
                gradient: 'from-[#ef4444] to-[#c71717]',
                iconBg: 'bg-white/20',
                title: 'UPSC CSE',
                desc: 'Civil Services Examination for recruitment to IAS, IPS, IFS, and other central services.',
                tags: ['UPSC', 'Civil Services']
            },
            {
                id: 'ssc-cgl',
                icon: 'groups',
                gradient: 'from-[#426df8] to-[#1241df]',
                iconBg: 'bg-white/20',
                title: 'SSC CGL',
                desc: 'Combined Graduate Level Examination for various Group B and C posts in Ministries/Departments.',
                tags: ['SSC', 'Graduate Level']
            },
            {
                id: 'state-psc',
                icon: 'location_city',
                gradient: 'from-[#12cd9b] to-[#04a572]',
                iconBg: 'bg-white/20',
                title: 'State PSC Base',
                desc: 'Preparation syllabus covering general required state public service commissions.',
                tags: ['State', 'PSC']
            },
            {
                id: 'rrb-ntpc',
                icon: 'train',
                gradient: 'from-[#ff6b00] to-[#e63900]',
                iconBg: 'bg-white/20',
                title: 'RRB NTPC',
                desc: 'Railway Recruitment Board Non-Technical Popular Categories exam.',
                tags: ['RRB', 'Railways']
            },
            {
                id: 'upsc-nda',
                icon: 'military_tech',
                gradient: 'from-[#9b4dca] to-[#7f32a8]',
                iconBg: 'bg-white/20',
                title: 'UPSC NDA',
                desc: 'National Defence Academy and Naval Academy Examination.',
                tags: ['UPSC', 'Defence']
            },
            {
                id: 'ssc-chsl',
                icon: 'edit_document',
                gradient: 'from-[#bc13fe] to-[#8f00f0]',
                iconBg: 'bg-white/20',
                title: 'SSC CHSL',
                desc: 'Combined Higher Secondary Level exam for LDC, JSA and Postal Assistant posts.',
                tags: ['SSC', '10+2']
            }
        ]
    }
};
