import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./container/Home/Home";
import TheWho from "./container/About/TheWho";
import TheWhy from "./container/About/TheWhy";
import Experience from "./container/About/Experience";
import Projects from "./container/Work/Projects";
import ProjectDetail from "./container/Work/ProjectDetail";
import Teachbacks from "./container/Work/Teachbacks";
import DevBlog from "./container/Work/DevBlog";
import GAScores from "./container/KPIs/GAScores";
import ProjectScores from "./container/KPIs/ProjectScores";
import Feedback from "react-bootstrap/esm/Feedback";
import SelfEval from "./container/KPIs/SelfEval";
import CrowdsourceAI from "./container/Hobbies/CrowdsourceAI";
import GoogleMaps from "./container/Hobbies/GoogleMaps";
import './App.css'


import { useState } from 'react'


const App = () => {


  return (
    <>
     
 
     <Header/>
      
  

  <Routes>
      <>
        <Route exact path="/" element={<Home />} />

        <Route path="about/the-who" element={<TheWho />} /> 
          <Route path="about/the-why" element={<TheWhy />} />
          <Route path="about/experience" element={<Experience />} />

          <Route path="work/projects" element={<Projects />} /> 
          <Route
                
                path="work/projects/:projectId"
                element={<ProjectDetail/>}
              />

        <Route path="work/teachbacks" element={<Teachbacks />} /> 
        <Route path="work/blog" element={<DevBlog />} /> 
        <Route path="kpis/ga-scores" element={<GAScores />} /> 
          <Route path="kpis/project-scores" element={<ProjectScores />} /> 

        <Route path="kpis/feedback" element={<Feedback />} /> 
        <Route path="kpis/self-eval" element={<SelfEval />} /> 
        <Route path="hobbies/google-maps" element={<GoogleMaps />} /> 
        <Route path="hobbies/crowdsource-ai" element={<CrowdsourceAI />} /> 
      </>
    </Routes> 
    </>
  )
}

export default App
