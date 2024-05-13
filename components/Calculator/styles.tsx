import styled from "styled-components/native";

interface KeyProps {
  isOperatorKey: boolean;
}

export const Wrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.TouchableOpacity<KeyProps>`
  background-color: ${({ isOperatorKey }) =>
    isOperatorKey ? "#fd7a00 " : "#2b2b2b"};
  width: 70px;
  height: 70px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const TextButton = styled.Text`
  font-size: 25px;
  font-weight: 900;
  color: #fff;
`;
