const PDFDownloadLink = ({ pdfPath, pdfFileName }) => {
    const handleDownload = (event) => {
    
        const anchor = document.createElement('a');
        anchor.href = pdfPath;
        anchor.download = pdfFileName;
        anchor.style.display = 'none'; // Hide the anchor element
        document.body.appendChild(anchor); // Append the anchor to the document body
        anchor.click(); // Programmatically click the anchor
        document.body.removeChild(anchor); // Clean up: remove the anchor from the document body
      };
    
      return (
        <div>
          <a href="/" onClick={handleDownload}>
            Download {pdfFileName}
          </a>
        </div>
      );
    };
  
  export default PDFDownloadLink