import React from 'react';
import { Box } from '@mui/material';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const pageLayout = {
  buildPageStyles: () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bd5389',
    cursor: 'pointer',
  }),
};

const pageAlone = {
  buildPageStyles: () => ({
    backgroundColor: '#bd5389',
    cursor: 'pointer',
  }),
};

const PdfPage = React.forwardRef(({
  pdfData,
  justOne,
}, ref) => {
  if (!(pdfData instanceof Blob)) {
    return null;
  }
  const fileUrl = URL.createObjectURL(pdfData);
  return (
    <>
      {justOne ? (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer
            fileUrl={fileUrl}
            defaultScale={SpecialZoomLevel.PageWidth}
            pageLayout={pageAlone}
          />
        </Worker>
      ) : (
        <Box ref={ref}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer
              fileUrl={fileUrl}
              defaultScale={SpecialZoomLevel.PageWidth}
              pageLayout={pageLayout}
            />
          </Worker>
        </Box>
      )}
    </>
  );
});

export default PdfPage;
