// src/components/codeeditor/CodeEditor.js

import React, { useState, useEffect } from 'react';
import './codeEditor.css';

import Preview from '../preview/Preview.jsx';
import Panel from '../panel/Panel.jsx';

const CodeEditor = () => {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
    const [srcDoc, setSrcDoc] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
        }, 250);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <div className="code-editor">
            <div className="panels">
                <Panel
                    label="HTML"
                    value={html}
                    onChange={setHtml}
                    placeholder="Write HTML here" />
                <Panel
                    label="CSS"
                    value={css}
                    onChange={setCss}
                    placeholder="Write CSS here" />
                <Panel
                    label="JavaScript"
                    value={js}
                    onChange={setJs}
                    placeholder="Write JavaScript here" />
            </div>
            <div className="output">
                <h3>Output</h3>
                <Preview srcDoc={srcDoc} />
            </div>

        </div>
    );
}

export default CodeEditor;

