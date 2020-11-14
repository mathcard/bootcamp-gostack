import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh; // Altura total do navegador
  display: flex;
  align-items: stretch; // Itens tenham o tamnho total da tela
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 100%;
  max-width: 700px;
`;

export const Background = styled.div``;
