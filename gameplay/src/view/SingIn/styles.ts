import styled from 'styled-components/native';
import theme from '../../global/styles/theme';


export const Container = styled.View`
  flex: 1px;
  align-items: center;
  justify-content: center;

`
export const Input = styled.TextInput`
  height: 50px;
  width: 100px;
  border-bottom-width: 2px;
`
export const Image = styled.Image`
  width: 100%;
  height: 360px;
`
export const View = styled.View`
  margin-top: -40px;
  padding-left: 50px;
  padding-right: 50px;

`
export const TextTitulo = styled.Text`
  color: ${(theme.colors.heading)};
  font-family: ${(theme.font.family.title700)};
  text-align: center;
  line-height: 40px;
  font-size: 40px;
  margin-bottom: 16px;
  
`
export const TextSubtitulo = styled.Text`
  color: ${(theme.colors.heading)};
  font-family: ${(theme.font.family.title500)};
  font-size: 15px;
  text-align: center;
  line-height: 25px;
  margin-bottom: 64px;
`
