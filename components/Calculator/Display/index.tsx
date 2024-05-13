import React from "react";

import * as Style from "./styles";

interface CalculatorDisplayProps {
  currentNumber: string;
  lastSelectedNumber: string;
  isResult?: boolean;
}

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({
  currentNumber,
  lastSelectedNumber,
}) => {
  return (
    <Style.Content>
      <Style.TextButton>{lastSelectedNumber}</Style.TextButton>
      <Style.TextButton isResult>{currentNumber}</Style.TextButton>
    </Style.Content>
  );
};

export default CalculatorDisplay;
