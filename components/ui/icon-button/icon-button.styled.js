import styled from 'styled-components'
import { blue500 } from '../theme/colors'

export const IconWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  --size: 24px;
  width: var(--size);
  height: var(--size);
  padding: 0;

  text-decoration: none;
  background-color: transparent;
  color: ${({ color }) => color || 'inherit'};

  border: none;
  border-radius: 50%;

  cursor: pointer;

  position: relative;
  z-index: 1;

  :before {
    content: '';
    display: block;
    --bg-icon-size: 141%;
    height: var(--bg-icon-size);
    width: var(--bg-icon-size);
    position: absolute;
    background-color: transparent;
    z-index: -1;
    border: 1px solid transparent;
    border-radius: 50%;
    transform: scale(0.4);

    transition: 160ms cubic-bezier(0, 0.41, 0.2, 0.98);
    transition-property: transform, background-color, border;
  }

  :hover:before,
  :focus:before {
    transform: scale(1);
    background-color: rgba(9, 48, 79, 0.18);
  }
  :focus:before {
    border-color: ${blue500};
  }

  :focus {
    outline: none;
  }
`
