/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/material';
import dynamic from 'next/dynamic';
import usePdfPages from '../hooks/usePdfPages';
import styles from '../styles/PortfolioSection';
import '../styles/animation.css';

const PdfPage = dynamic(() => import('../components/PdfPage'), { ssr: false });
const FrontPage = dynamic(() => import('../components/FrontPage'), { ssr: false });
const Book = dynamic(() => import('../components/Book'), { ssr: false });
const BackButton = dynamic(() => import('../components/BackButton'), { ssr: false });

const PortfolioSection = () => {
  const [showFrontPage, setShowFrontPage] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [back, setBack] = useState(false);

  const pdfPath = '/Catalogo_2024.pdf';
  const pages = usePdfPages(pdfPath);

  useEffect(() => {
    if (back) {
      setTimeout(() => {
        setBack(false);
      }, 4000);
    }
  }, [back]);

  const frontElement = useMemo(() => pages?.length > 0 && <PdfPage pdfData={pages[0]} justOne />, [
    pages,
  ]);

  return (
    <Box sx={styles.container}>
      {showFrontPage && (
        <FrontPage
          showFrontPage={showFrontPage}
          setShowFrontPage={setShowFrontPage}
          back={back}
        >
          {frontElement}
        </FrontPage>
      )}

      <Book
        showFrontPage={showFrontPage}
        setShowFrontPage={setShowFrontPage}
        pages={pages}
        setCurrentPage={setCurrentPage}
        back={back}
      />

      {currentPage === 0 && (
        <BackButton setShowFrontPage={setShowFrontPage} setBack={setBack} />
      )}
    </Box>
  );
};

export default PortfolioSection;
