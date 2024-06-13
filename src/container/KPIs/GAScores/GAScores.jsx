import { fetchData } from "../../../api/api";
import { useState, useEffect } from "react";
import GAScoreTable from "../../../components/KPITable/GAScoreTable/GAScoreTable";
import "./GAScores.css";

const GAScores = () => {
  const [gaScores, setGaScores] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchGAScores = async () => {
      try {
        const responseData = await fetchData("bootcampscore");
        if (!responseData.hasError) {
          setGaScores(responseData.data);
          console.log(responseData.data);
        } else {
          setError(
            responseData.error || "An error occurred while fetching GA scores."
          );
        }
      } catch (error) {
        setError("A connection error occurred while fetching GA scores.");
      }
    };
    fetchGAScores();
  }, []);

  return (
    <>
      <h2 className="blurb-title">GA Scores </h2>
      <div className="blurb-header">
        <p>
          {" "}
          Below are my General Assembly Scores for our 16 weeks of Bootcamp, as
          well as my mentor (Chad) scores.{" "}
        </p>
        <p>
          {" "}
          Verbal comments are provided from instructors and my mentor where
          relevant. I have used those areas of ideas to grow myself in areas
          such as code approach and to celebrate wins.{" "}
        </p>
        <p>
          We started out with a color tracking system.
          Color system was initially as follows: 
          <ul>
                      <li>Blue - Excellent</li>
                      <li> Green - On Track</li>
                      <li> Yellow - Light Concerns</li>
                      <li> Red- A Little Behind</li>

          </ul>
              </p>
              <p> The first week I was yellow due to confidence issues as instructor mentioned, and second week I was green. After that I was able to receive blue ratings. </p>
              <p> In Week 8, we moved away from colors to allow for more concrete grading by attendance, homework completion, and engagement. I have tracked at 100% for subsequent weeks. </p>
      </div>
      <div className="ga-score-table">
        {gaScores ? <GAScoreTable gaScores={gaScores} /> : <h4>{error}</h4>}
      </div>
    </>
  );
};

export default GAScores;
