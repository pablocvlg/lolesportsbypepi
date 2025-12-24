import styled, { keyframes } from "styled-components";

type LoadingProps = {
  text?: string;
  fullscreen?: boolean;
};

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div<{ fullscreen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ fullscreen }) => (fullscreen ? "100vh" : "100vh")};
  background-color: ${({ fullscreen }) => (fullscreen ? "#000" : "transparent")};
  position: fixed;   /* fija la posición sobre todo */
  top: 0;
  left: 0;
  z-index: 9999;
`;

const Card = styled.div`
  background: #111;
  border-radius: 12px;
  padding: 3rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 0 30px rgba(0, 255, 128, 0.15);
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid rgba(0, 255, 128, 0.2);
  border-top-color: #00ff80;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;

const Text = styled.span`
  color: white;
  font-size: 1rem;
  letter-spacing: 0.05em;
`;

export default function Loading({
  text = "Loading...",
  fullscreen = false,
}: LoadingProps) {
  return (
    <Wrapper fullscreen={fullscreen}>
      <Card>
        <Spinner />
        <Text>{text}</Text>
      </Card>
    </Wrapper>
  );
}
