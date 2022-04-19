import styled from "styled-components/native";
import theme from '../../global/styles/theme';

export const Text = styled.Text`
  color: ${(theme.colors.highlight)};
  flex: 1px;
  font-size: 15px;
  text-align: center;
`
export const Image = styled.Image`
`
export const View = styled.View`
  border-color: ${(theme.colors.line)};
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
`
export const TouchableOpacity = styled.TouchableOpacity`
  background-color: ${(theme.colors.primary)};
  width: 100%;
  height: 56px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;

`