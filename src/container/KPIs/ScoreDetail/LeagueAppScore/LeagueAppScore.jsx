import { fetchData } from "../../../../api/api";
import { useState, useEffect } from "react";
import LeagueAppScoreDetail from "../../../../components/KPITable/ProjectScoreDetail/LeagueAppScoreDetail/LeagueAppScoreDetail";
import ExcelDownloadLink from "../../../../components/ExcelDownloadLink/ExcelDownloadLink";

const LeagueAppScore = () => {
  const [leagueAppScore, setLeagueAppScore] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLeagueAppScore = async () => {
      try {
        const responseData = await fetchData("scores/league-app-score");
        if (!responseData.hasError) {
          setLeagueAppScore(responseData.data);
          console.log(responseData.data);
        } else {
          setError(
            responseData.error ||
              "An error occurred while fetching League App pair project score."
          );
        }
      } catch (error) {
        setError(
          "A connection error occurred while fetching League App pair project score."
        );
      }
    };
    fetchLeagueAppScore();
  }, []);

  return (
    <>
      <h2 className="blurb-title">League App Score</h2>
      <div className="blurb-section">
        <p>Below are the details of my League App pair project score.</p>
        <p> Here is the grading criteria</p>
        <ul>
          <li>0 - Incomplete</li>
          <li>1 - Does not meet expectations</li>
          <li>2 - Meets expectations</li>
          <li>3 - Exceeds Expectations</li>
        </ul>
        <hr className="separate-line" />
        <div className="score-table">
          {error ? (
            <div className="error-container">
              <h4 className="error-header">{error}</h4>
              <ExcelDownloadLink />
            </div>
          ) : (
            leagueAppScore && (
              <LeagueAppScoreDetail leagueAppScore={leagueAppScore} />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default LeagueAppScore;
