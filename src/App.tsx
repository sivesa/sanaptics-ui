import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./features/AuthPages/SignIn";
import NotFound from "./features/OtherPage/NotFound";
import UserProfiles from "./features/UserProfiles";
import LineChart from "./features/Charts/LineChart";
import BarChart from "./features/Charts/BarChart";
import BasicTables from "./features/Tables/BasicTables";
import FormElements from "./features/Forms/FormElements";
// import other for student
import Home from "./features/Dashboard/Home";
import Performance from "./features/Performance";
import Feedback from "./features/Feedback";
import Resources from "./features/Resources";
import Settings from "./features/Settings";
// import for teacher
import Dashboard from "./features/Teacher/Dashboard";
import Marks from "./features/Teacher/Marks";
import AtRisk from "./features/Teacher/AtRisk";
import MyFeedback from "./features/Teacher/MyFeedback";
import Announcements from "./features/Teacher/Announcements";
//import for parent
import ParentDashboard from "./features/Parent/ParentDashboard";
import AcademicHistory from "./features/Parent/AcademicHistory";
import ParentProfiles from "./features/Parent/ParentProfiles";
import TeacherChat from "./features/Parent/Contacts";

import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";



export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/settings" element={<Settings />} />

            {/* Teacher */}
            <Route path="/maindashboard" element={<Dashboard />} />
            <Route path="/marks" element={<Marks />} />
            <Route path="/at-risk" element={<AtRisk />} />
            <Route path="/myfeedback" element={<MyFeedback />} />
            <Route path="/announcements" element={<Announcements />} />

            {/* Parent */}
            <Route path="/parentdashboard" element={<ParentDashboard />} /> {/* Alerts */}
            <Route path="/academichistory" element={<AcademicHistory />} />
            <Route path="/parentprofile" element={<ParentProfiles />} />
            <Route path="/contact" element={<TeacherChat />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />

            {/* Useful Forms elements */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Useful Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
