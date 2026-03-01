# Project Specification (SPEC.md)

## 1. Project Vision
**Name**: Exam Prep Platform / College Mentor (test-module-page)
**Description**: India's #1 Exam Prep Platform designed to help students ace competitive exams with smart practice, a personalized study planner, and AI-driven analytics. The platform provides tailored preparation paths for various streams including Engineering, Medical, Commerce, Law, Civil Services, and Management.

## 2. Technical Stack
- **Framework**: React 19 + Vite
- **Routing**: `react-router-dom` v7
- **Styling**: Tailwind CSS (via utility classes) + Custom CSS (`App.css`, `index.css`)
- **Animations**: `framer-motion`
- **Icons**: `lucide-react`, Google Material Symbols
- **Linting**: ESLint v9

## 3. Architecture & Structure
The application is a standard Single Page Application (SPA) driven by React Router.
- **Entry Point**: `src/main.jsx`
- **Shell**: `src/App.jsx` holding the `<Header />` and `<Routes>`.
- **Styling Architecture**: Mix of global base styles (`index.css`), component-specific styling (`App.css`, inline `<style>` tags in components), and extensive use of Tailwind CSS utility classes.

## 4. Feature Requirements (Derived)

### Core User Journey
1. **Landing / Exam Prep Library (`/`)**
   - Hero section with animated statistics and social proof.
   - Core value proposition ("Path to Success").
   - Categorized entry points for different streams (Engineering, Medical, Commerce, Law, etc.).
   - Interactive UI elements showcasing the Smart Study Planner.

2. **Stream Selection (`/select-stream`)**
   - Allows users to select their target educational stream before drilling down into specific exams.

3. **Domain-Specific Exam Lists**
   - Engineering Exams (`/studyplanner-engineering-exams-list`)
   - Medical Exams (`/studyplanner-medical-exams-list`)
   - Management Exams (`/studyplanner-management-exams-list`)
   - Commerce Exams (`/studyplanner-commerce-exams-list`)
   - Law Exams (`/studyplanner-law-exams-list`)
   - Civil Services Exams (`/studyplanner-civil-exams-list`)

4. **Exam Setup & Finalization**
   - **Exam Setup (`/studyplanner/:examId/setup`)**: Configuration step for a selected exam.
   - **Plan Finalization (`/studyplanner/:examId/finalize`)**: Finalizes the personalized study planner based on user inputs.

### Differentiators / Key Highlights
- **Smart Study Planner**: Automated scheduling that tracks progress and adjusts daily goals.
- **Micro-Animations**: Extensive use of `framer-motion` for drag-and-drop elements, counters, and smooth layout transitions (e.g., Glassmorphism cards, interactive leaderboards, progress rings).
- **Responsive Design**: Mobile-first approach using grid and flex layouts.
- **Modern UI Patterns**: Dark/light mode support, gradient backgrounds, frosted glass effects.

## 5. Next Steps
*(As part of the GSD planning workflow, this document serves as the baseline context. Based on this SPEC.md, further requirements or new features can be planned in subsequent phases.)*
