import * as S from "./style";

const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="React Avançado" />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      Typescript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para a tela com um código"
    />
  </S.Wrapper>
);

export default Main;