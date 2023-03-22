import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  border: ${props => `1px solid ${props.theme}`};
  background-color: ${props => props.theme.colors.lightBlue};
  font-family: ${props => props.theme.fonts[0]};
`;
