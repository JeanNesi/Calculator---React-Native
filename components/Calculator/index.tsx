import React, { useState } from "react";

import { Container, TextButton, Wrapper } from "./styles";
import CalculatorDisplay from "./Display";
import { calculatorKeys } from "@/constants";

const Calculator: React.FC = () => {
  const [currentNumber, setCurrentNumber] = useState("");
  const [lastSelectNumber, setLastSelectNumber] = useState("");

  function isOperatorKey(item: string) {
    return ["C", "+/-", "%", "*", "-", "+", "=", "del", "/", "."].includes(
      item
    );
  }

  function calculator() {
    const splitNumbers = currentNumber.split(" ");
    const operator = splitNumbers[1];

    const firstNumber = parseFloat(splitNumbers[0]);
    const secondNumber = parseFloat(splitNumbers[2]);

    let result = 0;

    switch (operator) {
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        result = firstNumber / secondNumber;
        break;
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "%":
        result = firstNumber % secondNumber;
        break;
    }

    setCurrentNumber(result.toString());
  }

  function handleCalculator(item: string) {
    const hasOperator =
      currentNumber.includes("*") ||
      currentNumber.includes("/") ||
      currentNumber.includes("+") ||
      currentNumber.includes("-");

    if (item === "%") {
      console.log(currentNumber, "#", item);
      const floatCurrentNumber = parseFloat(currentNumber) / 100;
      setCurrentNumber(currentNumber + " " + item + " ");
      return;
    }
    if (item === "del") {
      setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
      return;
    }
    if (item === ".") {
      setCurrentNumber(currentNumber + item);
      return;
    }

    if (item === "C") {
      setLastSelectNumber("");
      setCurrentNumber("");
      return;
    }
    if (item === "=") {
      setLastSelectNumber(currentNumber);
      calculator();
      return;
    }

    if (!hasOperator && ["*", "/", "+", "-"].includes(item)) {
      setCurrentNumber(currentNumber + " " + item + " ");
      return;
    }

    if (!["*", "/", "+", "-"].includes(item)) {
      setCurrentNumber(currentNumber + item);
    }
  }

  return (
    <>
      <CalculatorDisplay
        currentNumber={currentNumber}
        lastSelectedNumber={lastSelectNumber}
      />
      <Wrapper>
        {calculatorKeys.map((item) => (
          <Container
            key={item.label}
            onPress={() => handleCalculator(item.label)}
            isOperatorKey={isOperatorKey(item.label)}
          >
            <TextButton>{item.icon}</TextButton>
          </Container>
        ))}
      </Wrapper>
    </>
  );
};

export default Calculator;
