import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useCallback } from "react";

const status = {
  count: 27,
  pages: 2,
  next: "https://rickandmortyapi.com/api/location/?page=2&name=earth",
  prev: null,
};

export default function Pager({ status, adapter, onFetched }) {
  console.log({ status });
  const getPageData = useCallback(
    async (pageUrl) => {
      const page = getParameterByName("page", pageUrl);
      const data = await adapter({ page });
      onFetched?.(data);
    },
    [status]
  );

  return (
    <Container>
      {status.prev && (
        <Page onClick={() => getPageData(status.prev)}>Önceki sayfa</Page>
      )}
      {status.next && (
        <Page onClick={() => getPageData(status.next)}>Sonraki sayfa</Page>
      )}
    </Container>
  );
}

Pager.propTypes = {
  status: PropTypes.shape({
    count: PropTypes.number,
    pages: PropTypes.any,
    next: PropTypes.string,
    prev: PropTypes.string,
  }).isRequired,

  adapter: PropTypes.func.isRequired,
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 0;
`;

const Page = styled.div`
  display: flex;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.BackgroundComponent__Accent};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.BackgroundComponent__Hover};
  }
  & + & {
    margin-left: 1rem;
  }
`;

function getParameterByName(name, url) {
  name = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
