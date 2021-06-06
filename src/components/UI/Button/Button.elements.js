import styled from 'styled-components'

export const ButtonElement = styled.button`
  border: 1px solid #dee1dd;
  border-radius: 6px;
  padding: 5px 10px;
  cursor: pointer;
  color: #2f575d;
  display: flex;
  align-items: center;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
