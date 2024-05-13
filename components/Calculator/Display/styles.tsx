import styled from "styled-components/native";

interface TextProps {
  isResult?: boolean;
}

export const Container = styled.View`
  background-color: #eee;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
`;
export const Content = styled.View`
  width: 100%;
  height: 30%;
  align-items: flex-end;
  margin-top: 30px;
  border-radius: 20px;
  margin-bottom: 50px;
`;

export const TextButton = styled.Text<TextProps>`
  font-size: 40px;
  color: ${(props) => (props.isResult ? "#ffffff" : "#a1a1a1")};
  margin-right: 20px;
  margin-top: 20px;
`;
