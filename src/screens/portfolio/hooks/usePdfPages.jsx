import React, { useEffect, useState } from 'react';
import { PDFDocument } from 'pdf-lib';


const usePdfPages = (pdfPath) => {
  const [pages, setPages] = useState([]);

  const extractPages = async (pdf) => {
    const pdfDoc = await PDFDocument.load(pdf);
    const totalPages = pdfDoc.getPageCount();
    const pages = [];

    for (let i = 0; i < totalPages; i++) {
      const newPdfDoc = await PDFDocument.create();
      const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [i]);
      newPdfDoc.addPage(copiedPage);
      const pdfBytes = await newPdfDoc.save();
      pages.push(new Blob([pdfBytes], { type: 'application/pdf' }));
    }

    return pages;
  }

  async function loadPages(pdfPath) {
    const response = await fetch(pdfPath);
    const pdfArrayBuffer = await response.arrayBuffer();
    const extractedPages = await extractPages(pdfArrayBuffer);
    setPages(extractedPages);
  }

  useEffect(() => {
    loadPages(pdfPath);
  }, []);

  return pages
};

export default usePdfPages;