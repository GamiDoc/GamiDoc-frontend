import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export default function PdfDisplayer({ pdfBlob }) {
  const [maxPages, setMaxPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  const previus = () => {
    setPageNumber(pageNumber - 1)
  }
  const next = () => {
    setPageNumber(pageNumber + 1)
  }

  function onDocumentLoadSuccess({ maxPages }) {
    setMaxPages(maxPages);
    setPageNumber(1);
  }

  return (
    <div className="flex-col items-center">
      <Document
        file={pdfBlob}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        Page {pageNumber} out of {maxPages}
      </div>
      <div
        onClick={previus}
        disabled={pageNumber <= 1}
        className="py-4 inline-block px-8 xs:px-4 xs:py-2 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
      >
        Previus
      </div>
      <div
        onClick={next}
        disabled={pageNumber >= maxPages}
        className="py-4 inline-block px-8 xs:px-4 xs:py-2 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
      >
        Next
      </div>
    </div>
  )
}
