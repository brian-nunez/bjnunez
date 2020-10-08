import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  display: block;
  width: 75%;
  margin: 0 auto;
  padding: 0.5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 60rem) {
    width: 90%;
  }

  @media(max-width: 43.4375rem) {
    width: 95%;
  }
`;

function Footer() {
  return (
    <Wrapper>
      Footer
    </Wrapper>
  )
}

export default Footer;
