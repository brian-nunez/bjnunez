import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div.attrs({
  className: 'fadeIn',
})`
  display: block;
  width: 75%;
  margin: 0 auto;
  padding: 2rem 0.5rem;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  @media(max-width: 60rem) {
    width: 90%;
  }

  @media(max-width: 43.4375rem) {
    width: 95%;
  }
`;

export default PageWrapper;
