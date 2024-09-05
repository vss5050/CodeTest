// src/components/panel/Panel.js

import React from 'react';
import './panel.css';

const Panel = ({ label, value, onChange, language }) => {
  return (
    <div className="panel">
      <div className="panel-header">
        <span>{label}</span>
      </div>
      <textarea
        className="panel-editor"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Write ${label} here`}
      />
    </div>
  );
};

export default Panel;
