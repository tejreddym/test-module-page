import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './Header'
import ExamPrepLibrary from './ExamPrepLibrary'
import SelectStream from './SelectStream'
import EngineeringExamsList from './EngineeringExamsList'
import MedicalExamsList from './MedicalExamsList'
import ManagementExamsList from './ManagementExamsList'
import CommerceExamsList from './CommerceExamsList'
import LawExamsList from './LawExamsList'
import CivilExamsList from './CivilExamsList'
import ExamSetup from './ExamSetup'
import PlanFinalization from './PlanFinalization'
import SuccessBlueprint from './SuccessBlueprint'
import StudyPlannerDashboard from './StudyPlannerDashboard'
import NotFound from './NotFound'
import ScrollToTop from './components/ui/ScrollToTop'

// Imported from Project 2
import Hero from './Hero'
import StepDesign from './StepDesign'
import TopMentors from './TopMentors'
import TrendingMentors from './TrendingMentors'
import StreamWiseTests from './StreamWiseTests'
import AllStreams from './AllStreams'
import StreamMockTests from './StreamMockTests'
import TestInstructions from './TestInstructions'
import MockExamInterface from './MockExamInterface'
import TestAnalytics from './TestAnalytics'
import StudyPlanner from './StudyPlanner'
import UserProfile from './UserProfile'
import RankPredictor from './RankPredictor'

function AppContent() {
  const location = useLocation()

  // Hide global header on specific self-contained pages
  const hideHeaderRoutes = [
    '/mock-exam',
    '/test-instructions',
    '/test-analytics',
    '/study-planner',
    '/rank-predictor'
  ]

  const showHeader = !hideHeaderRoutes.includes(location.pathname)

  return (
    <div className="app">
      {showHeader && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<ExamPrepLibrary />} />
          <Route path="/select-stream" element={<SelectStream />} />
          <Route path="/studyplanner-engineering-exams-list" element={<EngineeringExamsList />} />
          <Route path="/studyplanner-medical-exams-list" element={<MedicalExamsList />} />
          <Route path="/studyplanner-management-exams-list" element={<ManagementExamsList />} />
          <Route path="/studyplanner-commerce-exams-list" element={<CommerceExamsList />} />
          <Route path="/studyplanner-law-exams-list" element={<LawExamsList />} />
          <Route path="/studyplanner-civil-exams-list" element={<CivilExamsList />} />
          <Route path="/studyplanner/:examId/setup" element={<ExamSetup />} />
          <Route path="/studyplanner/:examId/finalize" element={<PlanFinalization />} />
          <Route path="/studyplanner/:examId/blueprint" element={<SuccessBlueprint />} />
          <Route path="/studyplanner/:examId/dashboard" element={<StudyPlannerDashboard />} />

          {/* Routes from Project 2 */}
          <Route path="/hero" element={<Hero />} />
          <Route path="/step-design" element={<StepDesign />} />
          <Route path="/top-mentors" element={<TopMentors />} />
          <Route path="/trending-mentors" element={<TrendingMentors />} />
          <Route path="/stream-wise-tests" element={<StreamWiseTests />} />
          <Route path="/all-streams" element={<AllStreams />} />
          <Route path="/stream-mock-tests" element={<StreamMockTests />} />
          <Route path="/test-instructions" element={<TestInstructions />} />
          <Route path="/mock-exam" element={<MockExamInterface />} />
          <Route path="/test-analytics" element={<TestAnalytics />} />
          <Route path="/study-planner" element={<StudyPlanner />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/rank-predictor" element={<RankPredictor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}

export default App
