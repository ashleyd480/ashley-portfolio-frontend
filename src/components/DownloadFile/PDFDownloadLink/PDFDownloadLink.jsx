const PDFDownloadLink = ({ pdfPath, pdfFileName }) => {
  return (
    <div>
      <a href={pdfPath} download={pdfFileName}>
        {pdfFileName}
      </a>
    </div>
  );
};

export default PDFDownloadLink;

// My learnings
/*
 * do not need to include "public" in the URL path because the server configuration automatically treats the public directory as the root for static files.
 * starting the path with a slash (/) creates an absolute URL, meaning it starts from the root of the domain; without it -it would treat it as a relative URL which was why it initally wasn't working
 */
