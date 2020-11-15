import styled from "@emotion/styled";
import PropTypes from "prop-types";

export default function Sorter({ onSelect, list, placeholder }) {
  return (
    <Container>
      <Select onInput={(e) => onSelect(e.target.value)}>
        <option>{placeholder}</option>
        {list.map((li) => (
          <option key={li.field} value={li.field}>
            {li.label}
          </option>
        ))}
      </Select>
    </Container>
  );
}

Sorter.propTypes = {};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 0;
`;

const Select = styled.select`
  display: flex;
  width: 100%;
  border-width: 0.75rem 1rem;
  border-color: transparent;
  outline: 0;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.BackgroundComponent__Accent};

  &:focus {
    background-color: ${({ theme }) => theme.BackgroundComponent__Hover};
  }
`;
