import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
    <NativeSelect value={value} onChange={onChange}>
      {children}
    </NativeSelect>
    <PresentationalBit>
      {displayedValue} <IconWrapper style={{'--size': 24 + 'px'}}><Icon id="chevron-down" strokeWidth={1} size={24}></Icon></IconWrapper>
    </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
position: relative;
width: max-content;
`

const IconWrapper = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
margin: auto;
width: var(--size);
height: var(--size);
pointer-events: none;
`



const NativeSelect = styled.select`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
opacity: 0;
appearance: none;
`

const PresentationalBit = styled.div`
background-color: hsla(0, 0%, 50%, 0.15);
width: 191px;
height: 43px;
border-radius: 8px;
font-family: "Roboto", sans-serif;
font-size: 1rem;
color: hsla(0, 0%, 40%, 1);
padding: 12px 16px;
padding-right: 52px;
${NativeSelect}:focus + & {
  outline: 1px dotted black;
  outline:5px auto -webkit-focus-ring-color;
}

${NativeSelect}:hover + & {
color: black;
}
`


export default Select;
