/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return <progress 
  role="progressbar"
  id="progress"
  tabindex="0"
  class="progress"
  value={value}
  ria-label="Progress bar name"
  aria-valuemin="0"
  aria-valuenow={value}
  aria-valuemax="100"
  max="100"></progress>
};

// note: worked on this for an hour and turning in
export default ProgressBar;
