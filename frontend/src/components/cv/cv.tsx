import React from "react";
import { Document, Page } from '../../../node_modules/react-pdf/dist/esm/entry.webpack';
import { useEffect, useRef } from "react";
import { simpleFade, fadeY } from "../../animations/myFadeAnimation"

import cvPresentation from "../../static/pdf/cv_presentation.pdf";

const Resume: React.FC = () => {
    return (
      <div className='main-container'>
        <Document file={cvPresentation}>
          <Page pageNumber={1} />
        </Document>
      </div>
    );
  }
  
  export default Resume;