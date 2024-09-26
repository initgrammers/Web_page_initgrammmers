import { Box } from '@mui/material';
import React, { useMemo } from 'react';
import HTMLFlipBook from "react-pageflip";
import PdfPage from './PdfPage';

const Book = ({
  showFrontPage,
  setShowFrontPage,
  setCurrentPage,
  pages,
  back,
}) => {
  const bookElement =  useMemo(() => 
    <HTMLFlipBook 
      size="stretch"
      width={550}
      minWidth={315}
      maxWidth={1000}
      height={303}
      minHeight={100}
      maxHeight={500}
      autoSize={true}
      showCover={false}
      mobileScrollSupport={true}
      usePortrait={true}
      // onChangeOrientation="landscape"
      onFlip={(e) => setCurrentPage(e.data)}
    >
      {pages.slice(1, pages.length).map((pdfData, index) => (
        <PdfPage key={index} pdfData={pdfData} />
      ))}
    </HTMLFlipBook>
  , [pages])

  return (
    <Box
      className={`test ${back ? "bookAnimationReverse" : showFrontPage ? '' : 'bookAnimation'}`}
      onClick={()=>setShowFrontPage(false)} 
      sx={{
        width: "95vw",
        height: { xs: "55vw", sm: "min(27.632vw, 525px)" },
        zIndex: 3,
        visibility: `${!showFrontPage ? "visible" : "hidden"}`,
        position: `${!showFrontPage ? "relative" : "absolute"}`,
      }}
    >
      {bookElement}
    </Box>
  );
};

export default Book;