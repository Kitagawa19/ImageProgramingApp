'use client'

import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import BlocklyComponent from '../../../components/elements/Block/BlocklyComponent';
import * as Blockly from 'blockly';
import 'blockly/blocks';
import 'blockly/javascript';
import { javascriptGenerator } from 'blockly/javascript';
import Header from '@/components/layouts/Header';

interface BlocklyStepConfig {
  initialXml: string;
  toolboxXml: string;
}

const BlocklySteps: { [key: number]: BlocklyStepConfig } = {
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
      <block type="text_print"></block>
      <block type="text"></block>
    </xml>`,
  },
  2: {
    initialXml: `<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="controls_repeat_ext" x="10" y="10">
        <value name="TIMES">
          <block type="math_number">
            <field name="NUM">5</field>
          </block>
        </value>
        <statement name="DO">
          <block type="text_print">
            <value name="TEXT">
              <block type="text">
                <field name="TEXT">こんにちは</field>
              </block>
            </value>
          </block>
        </statement>
      </block>
    </xml>`,
    toolboxXml: `<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="controls_repeat_ext"></block>
      <block type="logic_compare"></block>
      <block type="math_number"></block>
      <block type="math_arithmetic"></block>
      <block type="text_print"></block>
      <block type="text"></block>
    </xml>`,
  },
  3: {
    initialXml: `<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="math_arithmetic" x="10" y="10">
        <field name="OP">ADD</field>
        <value name="A">
          <block type="math_number">
            <field name="NUM">1</field>
          </block>
        </value>
        <value name="B">
          <block type="math_number">
            <field name="NUM">2</field>
          </block>
        </value>
      </block>
    </xml>`,
    toolboxXml: `<xml xmlns="https://developers.google.com/blockly/xml">
      <block type="math_number"></block>
      <block type="math_arithmetic"></block>
      <block type="text_print"></block>
      <block type="text"></block>
    </xml>`,
  },
};

const StepPage = () => {
  const pathname = usePathname();
  const step = pathname.split('/').pop();
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    if (Blockly.JavaScript) { // Ensure Blockly.JavaScript is defined
      Blockly.JavaScript['text_print'] = function(block: Blockly.Block) {
        var msg = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || '\'\'';
        // Use window.setResult to ensure it's called in the global scope
        return `window.setResult(${msg});\n`;
      };
    } else {
      console.error('Blockly.JavaScript is not defined.');
    }
  }, []);

  // stepをstring型に変換する
  const stepNumber = step ? parseInt(step, 10) : 0;
  const blocklyConfig = BlocklySteps[stepNumber];

  if (!blocklyConfig) {
    return <div>ステップが見つかりません。</div>;
  }

  const executeCode = () => {
    const workspace = Blockly.getMainWorkspace();
    const code = javascriptGenerator.workspaceToCode(workspace);
    console.log(code); // 生成されたコードを出力
    try {
      // eslint-disable-next-line no-eval
      eval(code);
    } catch (error) {
      if (error instanceof Error) {
        setResult(`エラー: ${error.message}`);
      } else {
        setResult('不明なエラーが発生しました。');
      }
    }
  };

  return (
    <div>
      <Header />
      <h1>ステップ {stepNumber}</h1>
      <BlocklyComponent
        initialXml={blocklyConfig.initialXml}
        toolboxXml={blocklyConfig.toolboxXml}
        onRunCode={executeCode}
      />
      <div>
        <h2>実行結果</h2>
        <pre>{result}</pre>
      </div>
      <div>
        {stepNumber > 1 && (
          <a href={`/Variables/${stepNumber - 1}`}>前へ</a>
        )}
        </div>
        <div>
        {stepNumber < Object.keys(BlocklySteps).length && (
          <a href={`/Variables/${stepNumber + 1}`}>次へ</a>
        )}
      </div>
    </div>
  );
};

export default StepPage;
