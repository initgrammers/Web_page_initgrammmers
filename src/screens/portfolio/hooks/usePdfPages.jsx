import { useEffect, useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const usePdfPages = (pdfPath) => {
  const [pages, setPages] = useState([]);

  const extractPages = async (pdf) => {
    const pdfDoc = await PDFDocument.load(pdf);
    const totalPages = pdfDoc.getPageCount();

    const pagePromises = Array.from({ length: totalPages }, async (_, i) => {
      const newPdfDoc = await PDFDocument.create();
      const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [i]);
      newPdfDoc.addPage(copiedPage);
      const pdfBytes = await newPdfDoc.save();
      return new Blob([pdfBytes], { type: 'application/pdf' });
    });

    return Promise.all(pagePromises);
  };

  async function loadPages(path) {
    const response = await fetch(path);
    const pdfArrayBuffer = await response.arrayBuffer();
    const extractedPages = await extractPages(pdfArrayBuffer);
    setPages(extractedPages);
  }

  useEffect(() => {
    loadPages(pdfPath);
  }, [pdfPath]);

  return pages;
};

export default usePdfPages;
