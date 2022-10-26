import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
export default function PdfDisplayer({ pdfBlob }) {
  const [maxPages, setMaxPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  const previus = () => {
    // console.log("Previus: " + pageNumber)
    if (pageNumber == 1) {
      setPageNumber(6)
      return
    }
    setPageNumber(pageNumber - 1)
  }
  const next = () => {
    // console.log("Next: " + pageNumber)
    if (pageNumber == 6) {
      setPageNumber(1)
      return
    }
    setPageNumber(pageNumber + 1)
  }

  function onDocumentLoadSuccess({ maxPages }) {
    setMaxPages(maxPages);
    console.log(maxPages)
    setPageNumber(1);
  }

  pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker
  return (
    <div className="flex items-center gap-2 ">
      {/* shadow-xl shadow-gray-500 */}
      <div
        className="flex justify-center items-center gap-3 pb-2"
      >
        <div
          onClick={previus}
          disabled={(pageNumber === 1) ? true : false}
          className=" bg-yellow-gamy text-white font-lg text-lg leading-tight uppercase rounded-full shadow-md  hover:bg-gray-gamy hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          <NavigateBeforeIcon />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <Document
          file={`data:application/pdf;base64,${pdfBlob}`}
          onLoadSuccess={onDocumentLoadSuccess}
          className="border-x border-y border-slate-500 border-spacing-3"
        >
          <Page pageNumber={pageNumber} />
        </Document>

        <div className="flex justify-center items-center text-xl font-medium">
          Page {pageNumber}
          {/*out of {maxPages}*/}
        </div>
      </div>
      <div
        className="flex justify-center items-center gap-3 pb-2"
      >
        <div
          onClick={next}
          disabled={pageNumber >= maxPages}
          className=" bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:bg-gray-gamy hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          <NavigateNextIcon />
        </div>
      </div>
    </div>
  )
}
