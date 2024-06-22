import PDFDownloadLink from "../../../components/DownloadFile/PDFDownloadLink/PDFDownloadLink";

const SelfEval = () => {

  const Q124EvalpdfPath = '/docs/self-eval/q1-2024-self-eval.pdf';
  const Q124pdfFileName = 'q1-2024-self-eval.pdf'; 
    return (
      <div>
        <h2 className="blurb-title">Self Eval 🐾</h2>
        <div className="blurb-section">
          <p>
            Here are links to my self evals since starting the BOOST technical apprenticeship program.
          </p>
          <p>
            You may click the links to download the respective quarterly evals as pdf. As they will require a password to access, feel free to Slack me for that info. 🤗
          </p>
          <ul>
          <li>
            <PDFDownloadLink pdfPath={Q124EvalpdfPath} pdfFileName={Q124pdfFileName} />
          </li>
          {/* Add more PDFDownloadLink components for additional self-evaluation files */}
        </ul>
        </div>
  
        <hr className="seperate-line" />
  
        {/* Peer Feedback Images */}
  
        <h2 className="blurb-title">Formal Indeed Feedback</h2>
      
        <div className="blurb-section">
        <p>
            Here are links to my formal Indeed Feedback received.
        </p>
        <p>
            Placeholder text
          </p>
        </div>
      </div>
    );
  };
  
  export default SelfEval;
  