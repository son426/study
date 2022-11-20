import styled, { keyframes } from "styled-components";

const Text = styled.h1``;

const Wrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
  ${Text} {
    font-size: 50px;
    color: ${(props) => props.theme.textColor};
  }
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 25px;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  animation: ${rotateAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    font-size: 25px;
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

function App() {
  return (
    <Wrapper as="header">
      <Box bgColor="teal">
        <Emoji>😁</Emoji>
      </Box>
      <Emoji>😁</Emoji>
      <Text>HI</Text>
    </Wrapper>
  );
}

export default App;
