import styled from "@emotion/styled";
import PropTypes from "prop-types";

export default function InputFilter({ onChange, placeholder }) {
  return (
    <Container>
      <Input
        onInput={(e) => onChange(e.target.value.toLowerCase("en"))}
        type="text"
        placeholder={placeholder}
      ></Input>
    </Container>
  );
}

InputFilter.propTypes = {};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 0;
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  padding: 0.75rem 1rem;
  border: 0;
  outline: 0;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.BackgroundComponent__Accent};

  &:focus {
    background-color: ${({ theme }) => theme.BackgroundComponent__Hover};
  }
`;
