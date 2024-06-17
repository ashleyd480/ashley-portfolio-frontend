import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Error = () => {
  const navigate = useNavigate();

  const returnToHome = () => {
    navigate("/");
  };

  return (
    <div className="blurb-title">
      <h2> Error </h2>
      <p> You have navigated to a non-existent page. Please return to the home page.</p>
      <Button onClick={returnToHome}>Return to Home</Button>
    </div>
  );
};

export default Error;
