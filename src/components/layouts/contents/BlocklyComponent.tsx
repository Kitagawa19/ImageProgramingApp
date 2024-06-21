import React, { useEffect } from 'react';
import * as Blockly from 'blockly';
import 'blockly/blocks';
import 'blockly/javascript';

interface BlocklyComponentProps {
  initialXml: string;
  toolboxXml: string;
  onRunCode: () => void;
}

const BlocklyComponent: React.FC<BlocklyComponentProps> = ({ initialXml, toolboxXml, onRunCode }) => {
  useEffect(() => {
    const workspace = Blockly.inject('blocklyDiv', {
      toolbox: toolboxXml,
      scrollbars: true,
      trashcan: true,
    });

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(initialXml, 'text/xml');
    Blockly.Xml.domToWorkspace(xmlDoc.documentElement, workspace);

    document.getElementById('runButton')?.addEventListener('click', onRunCode);

    return () => {
      workspace.dispose();
      document.getElementById('runButton')?.removeEventListener('click', onRunCode);
    };
  }, [initialXml, toolboxXml, onRunCode]);

  return (
    <div>
      <div id="blocklyDiv" style={{ height: '480px', width: '100%' }}></div>
      <button id="runButton">Run Code</button>
    </div>
  );
};

export default BlocklyComponent;


// useEffect(() => {
//   const workspace = Blockly.inject(blocklyDiv.current!, {
//     toolbox: toolbox.current!,
//   });

//   if (initialXml) {
//     const parser = new DOMParser();
//     const xmlDoc = parser.parseFromString(initialXml, 'text/xml');
//     Blockly.Xml.domToWorkspace(xmlDoc.documentElement, workspace);
//   }

//   return () => workspace.dispose();
// }, [initialXml]);
