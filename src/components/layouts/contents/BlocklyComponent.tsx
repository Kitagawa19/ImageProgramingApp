import React, { useEffect, useRef } from 'react';
import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import 'blockly/javascript';
import * as locale from 'blockly/msg/en';

Blockly.setLocale(locale);

interface BlocklyComponentProps {
  initialXml: string;
  toolboxXml: string;
}

const BlocklyComponent:React.FC<BlocklyComponentProps> = ({ initialXml, toolboxXml }) => {
  const blocklyDiv = useRef<HTMLDivElement | null>(null);
  const toolbox = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const workspace = Blockly.inject(blocklyDiv.current!, {
      toolbox: toolbox.current!,
    });

    if (initialXml) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(initialXml, 'text/xml');
      Blockly.Xml.domToWorkspace(xmlDoc.documentElement, workspace);
    }

    return () => workspace.dispose();
  }, [initialXml]);

  return (
    <div style={{ display: 'flex' }}>
      <div ref={toolbox} style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: toolboxXml }} />
      <div ref={blocklyDiv} style={{ height: '480px', width: '600px' }} />
    </div>
  );
};

export default BlocklyComponent;
