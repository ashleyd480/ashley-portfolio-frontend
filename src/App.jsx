import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./container/Home/Home";
import TheWho from "./container/About/TheWho";
import TheWhy from "./container/About/TheWhy";
import Experience from "./container/About/Experience";
import Projects from "./container/Work/Projects/Projects";
import ProjectDetail from "./container/Work/ProjectDetail/ProjectDetail";
import Teachbacks from "./container/Work/Teachbacks";
import DevBlog from "./container/DevBlog/DevBlog";
import GAScores from "./container/KPIs/GAScores/GAScores";
import ProjectScores from "./container/KPIs/ProjectScores";
import SelfEval from "./container/KPIs/SelfEval";
import Mentor from "./container/Feedback/Mentor";
import Instructors from "./container/Feedback/Instructors";
import Manager from "./container/Feedback/Manager";
import Adhoc from "./container/Feedback/Adhoc";
import CrowdsourceAI from "./container/Hobbies/CrowdsourceAI";
import GoogleMaps from "./container/Hobbies/GoogleMaps";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <>
          <Route exact path="/" element={<Home />} />

          <Route path="about/the-who" element={<TheWho />} />
          <Route path="about/the-why" element={<TheWhy />} />
          <Route path="about/experience" element={<Experience />} />

          <Route path="work/projects" element={<Projects />} />
          <Route path="work/projects/:projectId" element={<ProjectDetail />} />

          <Route path="work/teachbacks" element={<Teachbacks />} />
          <Route path="work/blog" element={<DevBlog />} />
          <Route path="kpis/ga-scores" element={<GAScores />} />
          <Route path="kpis/project-scores" element={<ProjectScores />} />

          <Route path="kpis/self-eval" element={<SelfEval />} />
          <Route path="/feedback/mentor-feedback" element={<Mentor />} />
          <Route
            path="/feedback/instructor-feedback"
            element={<Instructors />}
          />
          <Route path="/feedback/manager-feedback" element={<Manager />} />
          <Route path="/feedback/adhoc-feedback" element={<Adhoc />} />
          <Route path="hobbies/google-maps" element={<GoogleMaps />} />
          <Route path="hobbies/crowdsource-ai" element={<CrowdsourceAI />} />
        </>
      </Routes>
    </>
  );
};

export default App;
