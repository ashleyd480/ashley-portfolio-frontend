import { fetchData } from "../../../../api/api";
import { useState, useEffect } from "react";
import CapstoneScoreTable from "../../../../components/KPITable/ProjectScoreTable/CapstoneScoreTable/CapstoneScoreTable";
import ExcelDownloadLink from "../../../../components/DownloadFile/ExcelDownloadLink/ExcelDownloadLink";
import "./CapstoneScore.css";

const CapstoneScore = () => {
  const [capstoneScore, setCapstoneScore] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCapstoneScore = async () => {
      try {
        const responseData = await fetchData("scores/capstone-score");
        if (!responseData.hasError) {
          setCapstoneScore(responseData.data);
          console.log(responseData.data);
        } else {
          setError(
            responseData.error ||
              "An error occurred while fetching capstone score."
          );
        }
      } catch (error) {
        setError("A connection error occurred while fetching capstone score.");
      }
    };
    fetchCapstoneScore();
  }, []);

  return (
    <>
      <h2 className="blurb-title">Capstone Score</h2>
      <div className="blurb-section">
        <p>Below are the details of my capstone scores.</p>
        <p>
          You may find the full capstone demo recording along with live video
          feedback following the capstone detail score table.{" "}
        </p>
        <hr className="seperate-line" />
        <div className="score-table">
          {error ? (
            <div className="error-container">
              <h4 className="error-header">{error}</h4>
              <ExcelDownloadLink />
            </div>
          ) : (
            capstoneScore && (
              <CapstoneScoreTable capstoneScore={capstoneScore} />
            )
          )}
        </div>
      </div>
      <hr className="seperate-line" />

      <h2 className="capstone-video-title">Capstone Live Presentation</h2>
      <div className="blurb-section">
        <p>
          You may hear teacher feedback and Q&A starting at{" "}
          <a
            href={"https://youtu.be/rflr2XKJkzg?feature=shared&t=2580"}
            target="_blank"
          >
            43:00
          </a>
          .
        </p>
        <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/rflr2XKJkzg?si=h_KhPVMirq-_q-hz"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};
export default CapstoneScore;
