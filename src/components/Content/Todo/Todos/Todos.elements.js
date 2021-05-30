import styled from 'styled-components'

export const TodoItem = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${(props) => (props.last ? 'none' : '1px solid #dee1dd')};
`

export const TodoCheckbox = styled.input`
  margin-right: 10px;

  &:checked + label {
    text-decoration: line-through;
  }
`
