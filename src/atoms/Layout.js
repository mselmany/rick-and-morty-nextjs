import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Responsive = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 100%;
  max-width: 720px;
  position: relative;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
  padding: 2rem;
  position: relative;
  width: 100%;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.BackgroundComponent};
  box-shadow: 0 2px 5px 0 ${({ theme }) => theme.BackgroundStrong}40;
`;

Page.Title = styled.h2`
  margin: 0 0 2rem 0;
`;
