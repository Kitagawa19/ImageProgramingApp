'use client'
import { usePathname } from 'next/navigation';
import React from 'react';
import BlocklyComponent from '../../../components/layouts/contents/BlocklyComponent';

const BlocklySteps = {
  1: {
    initialXml: `<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="controls_if" x="10" y="10"></block>
    </xml>`,
    toolboxXml: `<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="controls_if"></block>
      <block type="controls_repeat_ext"></block>
      <block type="logic_compare"></block>
      <block type="math_number"></block>
      <block type="math_arithmetic"></block>
    </xml>`,
  },
  2: {
    initialXml: `<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="controls_repeat_ext" x="10" y="10"></block>
    </xml>`,
    toolboxXml: `<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="controls_repeat_ext"></block>
      <block type="logic_compare"></block>
      <block type="math_number"></block>
      <block type="math_arithmetic"></block>
    </xml>`,
  },
  // 必要に応じて追加
};

const StepPage = () => {
  const pathname = usePathname();
  const step = pathname.split('/').pop();

  // stepをstring型に変換する
  const stepNumber = step ? parseInt(step, 10) : 0;
  const blocklyConfig = BlocklySteps[stepNumber];

  if (!blocklyConfig) {
    return <div>ステップが見つかりません。</div>;
  }

  return (
    <div>
      <h1>ステップ {stepNumber}</h1>
      <BlocklyComponent
        initialXml={blocklyConfig.initialXml}
        toolboxXml={blocklyConfig.toolboxXml}
      />
      <div>
        {stepNumber > 1 && (
          <a href={`/app/contents/Variables/${stepNumber - 1}`}>前のステップ</a>
        )}
        {stepNumber < Object.keys(BlocklySteps).length && (
          <a href={`/app/contents/Variables/${stepNumber + 1}`}>次のステップ</a>
        )}
      </div>
    </div>
  );
};

export default StepPage;
