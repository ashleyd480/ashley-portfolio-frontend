import { fetchData } from "../../../../api/api";
import { useState, useEffect } from "react";

const CapstoneScore = () => {
    const [capstoneScore, setCapstoneScore] = useState([]);
    const [error, setError] = useState("")
    
    useEffect(() => {
        const fetchCapstoneScore = async () => {
            try {
                const responseData = await fetchData("scores/capstone-score");
                if (!responseData.hasError) {
                    setGaScores(responseData.data);
                    console.log(responseData.data);
                } else {
                    setError(
                        responseData.error || "An error occurred while fetching capstone score."
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
            <h2 className="blurb-title">GA Scores</h2>
            <div className="blurb-header">
                <p>
                    Below are the details of my capstone scores.
                </p>
                <div className="ga-score-table">
                    {error ? (
                        <h4 className="error-header">{error}</h4>
                    ) : (
                        capstoneScore && <CapstoneScoreTable capstoneScores={capstoneScore} />
                    )}
                </div>
            </div>
            <h2 className="blurb-title">GA Scores</h2>
            <div className="blurb-header">
                {/* my youtube video and note for scores */}
                <iframe
                    width="560"
                    height="315"
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
}
  export default CapstoneScore;