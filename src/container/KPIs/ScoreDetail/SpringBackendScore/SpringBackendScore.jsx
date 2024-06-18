import { fetchData } from "../../../../api/api";
import { useState, useEffect } from "react";
import SpringBackendScoreDetail from "../../../../components/KPITable/ProjectScoreDetail/SpringBackendScoreDetail/SpringBackendScoreDetail";
import ExcelDownloadLink from "../../../../components/ExcelDownloadLink/ExcelDownloadLink";
const SpringBackendScore = () => {

    const [springBackendScore, setSpringBackendScore] = useState([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const fetchSpringBackendScore = async () => {
        try {
          const responseData = await fetchData("scores/spring-backend-score");
          if (!responseData.hasError) {
            setSpringBackendScore(responseData.data);
            console.log(responseData.data);
          } else {
            setError(
              responseData.error ||
                "An error occurred while fetching Spring Backend project score."
            );
          }
        } catch (error) {
          setError("A connection error occurred while fetching Spring Backend project score.");
        }
      };
      fetchSpringBackendScore();
    }, []);
  
    return (
      <>
        <h2 className="blurb-title">Spring Backend Score</h2>
        <div className="blurb-header">
          <p>
            Below are the details of my Spring backend scores.
          </p>
    
          <hr className="separate-line" />
          <div className="score-table">
            {error ? (
                  <>
                  <h4 className="error-header">{error}</h4>
                  <ExcelDownloadLink />
                </>
            ) : (
              springBackendScore && (
                <SpringBackendScoreDetail springBackendScore={springBackendScore} />
              )
            )}
          </div>
        </div>
      </>
    );
  };
  
 
  export default SpringBackendScore
;