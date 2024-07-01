import PDFDownloadLink from "../../../components/DownloadFile/PDFDownloadLink/PDFDownloadLink";

const SelfEval = () => {

  const Q124EvalpdfPath = '/docs/self-eval/q1-2024-self-eval.pdf';
  const Q124pdfFileName = 'q1-2024-self-eval.pdf'; 
  const Q224EvalpdfPath = '/docs/self-eval/q2-2024-self-eval.pdf';
  const Q224pdfFileName = 'q2-2024-self-eval.pdf'; 

  // for self eval stuff
  const googleDocUrl = 'https://docs.google.com/document/d/1IP82ziPF7-nVHBJmHO6dYTlXYNhS1CF97toDqSp6GYY/edit';

    return (
      <div>
        <h2 className="blurb-title">Self Eval 🐾</h2>
        <div className="blurb-section">
          <p>
            Here are links to my self evals since starting the BOOST technical apprenticeship program.
          </p>
          <p>
            You may click the links to download the respective quarterly evals as pdf. As they will require a password to access, feel free to Slack me for that info. 🤗
            ... Or you can open the console and say "Open Sesame!" 😉
          </p>
          <ul>
          <li>
            <PDFDownloadLink pdfPath={Q124EvalpdfPath} pdfFileName={Q124pdfFileName} />
            </li>
            <li>
            <PDFDownloadLink pdfPath={Q224EvalpdfPath} pdfFileName={Q224pdfFileName} />
          </li>
          {/* Add more PDFDownloadLink components for additional self-evaluation files */}
        </ul>
        </div>
  
        <hr className="seperate-line" />
  
        {/* Peer Feedback Images */}
  
        <h2 className="secondary-blurb-title">Formal Indeed Feedback</h2>
      
        <div className="blurb-section">
        <p>
            With self evals, we also receive formal peer and leadership feedback through our Indeed Feedback system. The feedback doc is linked below:
        </p>
         
        <li> <a href={googleDocUrl} target="_blank">2024-Indeed-Feedback</a> </li>
   
   
          
        </div>
      </div>
    );
  };
  
  export default SelfEval;
  