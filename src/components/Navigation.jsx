import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: block;
  position: relative;
  top: 0;
  width: 75%;
  margin: 0 auto;
  padding: 0.5rem;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */
  border-bottom: 1px solid #eee;

  @media(max-width: 60rem) {
    width: 90%;
  }

  @media(max-width: 43.4375rem) {
    width: 95%;
    flex-direction: column;
  }
`;


const ImageWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 15rem;
  flex-basis: 15rem;
  height: 15rem;
  padding: 0;
  margin: 0;
`;


const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-basis: 50%;

  a {
    font-size: 1.25rem;
    text-decoration: none;
    margin: 1rem;
    color: #707070;
  }

  a:hover, a.active {
    color: #000;
  }

  @media(max-width: 25rem) {
    flex-direction: column;
  }
`;

const options = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

function Navigation({ location }) {

  return (
    <Wrapper>
      <ImageWrapper to="/">
        <Img src="https://logodix.com/logo/1008481.jpg" alt="Page Logo" />
      </ImageWrapper>
      <Links>
        {options.map(opt => (
          <Link 
            to={opt.href}
            className={opt.href === location.pathname ? 'active' : ''}
          >
            {opt.label}
          </Link>
        ))}
      </Links>
    </Wrapper>
  )
}

export default withRouter(Navigation);
