import React, { useEffect, useMemo, useState } from 'react';
import HTMLFlipBook from "react-pageflip";
import { Box } from '@mui/material';
import PdfPage from '../components/PdfPage';
import FrontPage from '../components/FrontPage';
import usePdfPages from '../hooks/usePdfPages';
import styles from '../styles/PortfolioSection';
import '../styles/animation.css'
import Book from '../components/Book';
import BackButton from '../components/BackButton';

const PortfolioSection = () => {
  const [showFrontPage, setShowFrontPage] = useState(true)
  const [currentPage, setCurrentPage] = useState(0); 
  const [back, setBack] = useState(false); 

  const pdfPath = '/Catalogo_2024.pdf';
  const pages = usePdfPages(pdfPath);

  useEffect(() => {
    setTimeout(() => {
      setBack(false)      
    }, 4000);
  },[back])

  const frontElement =  useMemo(() => 
    <PdfPage pdfData={pages[0]} justOne />
  ,[pages])

  return (
    <Box sx={styles.container}>
      {showFrontPage &&
        <FrontPage 
          showFrontPage={showFrontPage}
          setShowFrontPage={setShowFrontPage}
          back={back}
        >
          {frontElement}
        </FrontPage>
      }

      <Book 
        showFrontPage={showFrontPage}
        setShowFrontPage={setShowFrontPage}
        pages={pages}
        setCurrentPage={setCurrentPage}
        back={back}
      />

      {currentPage === 0 &&
        <BackButton 
          setShowFrontPage={setShowFrontPage}
          setBack={setBack}
        />
      }
    </Box>
  );
};

export default PortfolioSection;
