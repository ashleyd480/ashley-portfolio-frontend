import { Button } from "react-bootstrap";

// "When you need to provide downloadable files in your React application, it's a common practice to place these files in the public directory."

const ExcelDownloadLink = () => {
    const filePath = '/docs/ga-score-sheet.xlsx';
    const fileName = 'ga-score-sheet.xlsx';
  
  // anchor used to allow files to download when user clicks a button
    const handleDownload = () => {
      const anchor = document.createElement('a'); // create a new "a" element
      anchor.href = filePath; // set the href of that new "a" element
      anchor.download = fileName; // set the filename and gives "a" a download attribute
        anchor.click();
        /* "When a user clicks a link with the download attribute, the browser initiates a download of the linked resource. By triggering anchor.click(), we mimic this behavior, causing the browser to start downloading the file specified in href as fileName."" */

    };
  
    return (
      <Button onClick={handleDownload}>
        Download GA Score Sheet
      </Button>
    );
  };
  
  export default ExcelDownloadLink;