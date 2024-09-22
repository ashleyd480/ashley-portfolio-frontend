import { Route, Routes, json } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./container/Home/Home";
import Error from "./container/Error/Error";
import MyStory from "./container/About/MyStory/MyStory";
import Experience from "./container/About/Experience/Experience";
import Hobbies from "./container/About/Hobbies/Hobbies";
import Projects from "./container/Work/Projects/Projects";
import ProjectDetail from "./container/Work/ProjectDetail/ProjectDetail";
import Teachbacks from "./container/Work/Teachbacks/Teachback";
import Whiteboards from "./container/Work/Whiteboards/Whiteboards";
import DevBlog from "./container/DevBlog/DevBlog";
import GAScores from "./container/KPIs/GAScores/GAScores";
import ProjectScores from "./container/KPIs/ProjectScores/ProjectScores";
import SelfEval from "./container/KPIs/SelfEval/SelfEval";
import Mentor from "./container/Feedback/Mentor";
import Program from "./container/Feedback/Program";
import Manager from "./container/Feedback/Manager";
import Adhoc from "./container/Feedback/Adhoc";
import Intern from "./container/Feedback/Intern";
import CapstoneScore from "./container/KPIs/ProjectScoreDetail/CapstoneScore/CapstoneScore";
import LeagueAppScore from "./container/KPIs/ProjectScoreDetail/LeagueAppScore/LeagueAppScore";
import SpringBackendScore from "./container/KPIs/ProjectScoreDetail/SpringBackendScore/SpringBackendScore";
import "./App.css";

const App = () => {
  return (
   
    <>
      <Header />
      <div className="content-padding">

      <Routes>
        <>
          <Route exact path="/" element={<Home />} />

          <Route path="about/my-story" element={<MyStory />} />
          <Route path="about/experience" element={<Experience />} />
          <Route path="about/hobbies" element={<Hobbies />} />

          <Route path="work/projects" element={<Projects />} />
          <Route path="work/projects/:projectId" element={<ProjectDetail />} />

            <Route path="work/teachbacks" element={<Teachbacks />} />
            <Route path="work/whiteboards" element={<Whiteboards />} />
          <Route path="work/blog" element={<DevBlog />} />
          <Route path="kpis/ga-scores" element={<GAScores />} />
            <Route path="kpis/project-scores" element={<ProjectScores />} />
            <Route path="kpis/project-scores/capstone-score" element={<CapstoneScore />} />
            <Route path="kpis/project-scores/league-app-score" element={<LeagueAppScore />}
            />
               <Route path="kpis/project-scores/spring-backend-score" element={<SpringBackendScore />}
            />

        
          <Route path="/feedback/mentor-feedback" element={<Mentor />} />
          <Route
            path="/feedback/program-feedback"
            element={<Program />}
          />
          <Route path="/feedback/manager-feedback" element={<Manager />} />
            <Route path="/feedback/adhoc-feedback" element={<Adhoc />} />
            <Route path="/feedback/intern-feedback" element={<Intern />} />
      
            <Route path="*" element={<Error />} />
        </>
        </Routes>
        </div>
    </>
  );
};

export default App;