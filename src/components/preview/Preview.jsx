// src/components/preview/Preview.js

import React from 'react';
import './preview.css'; // If you need specific styles

const Preview = ({ srcDoc }) => {
  return (
    <div className="iframe-container">
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Preview;
