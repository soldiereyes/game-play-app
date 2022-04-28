import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  
`
export const TextGreeting = styled.Text`
  font-family: ${(theme.font.family.title500)};
  color: ${(theme.colors.heading)};
  font-size: 24px;
  margin-right: 6px;

`
export const ViewUser = styled.View`
  flex-direction: row;
  
`
export const TextUserName = styled.Text`
  color: ${(theme.colors.heading)};
  font-family: ${(theme.font.family.title700)};
  font-size: 24px;
  
`
export const TextMessage = styled.Text`
  font-family: ${(theme.font.family.text400)};
  color: ${(theme.colors.highlight)};
`
export const View = styled.View`

`