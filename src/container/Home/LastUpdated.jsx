// to track when repo was last updated to reflect date on my portfolio 
import React, { useState, useEffect } from "react";
import { fetchGitData } from "../../api/api"

const LastUpdated = () => {
    const [lastUpdated, setLastUpdated] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchLastUpdated = async () => {
            try {
                const responseData = await fetchGitData("https://api.github.com/repos/ashleyd480/ashley-portfolio-frontend/commits");
                if (!responseData.hasError && responseData.length > 0) {
                    const lastCommitDate = responseData[0].commit.author.date;
                    setLastUpdated(lastCommitDate);

                } else {
                    setError(
                        responseData.error ||
                        "An error occurred while fetching last updated date."
                    );
                }
            } catch (error) {
                setError("A connection error occurred while fetching last updated date.");
            }
        };
        fetchLastUpdated();
    }, []);

    return (
        <>
            {error ? (
                <div className="error-container">
                    <h4 className="error-header">{error}</h4>
                </div>
            ) : (
                <>
                    {
                        <p><em>Last Updated: {lastUpdated}</em></p>

                    }

                </>
            )}
        </>
    )
}
export default LastUpdated;