import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import NotFound from './NotFound'
import ScrollToTop from './components/ui/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
