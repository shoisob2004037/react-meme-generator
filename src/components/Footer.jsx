import React from 'react';
import { Navbar as BootstrapNavbar, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" fixed="bottom">
      <Container>
        <p className="m-0 text-white" style={{ fontSize: '14px' }}>
          © 2025 Meme Generator || Mahadi Hasan Shaisob -{' '}
          <a
            href="https://shoisob2004037.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            Check my Portfolio
          </a>
        </p>
      </Container>
    </BootstrapNavbar>
  );
};

export default Footer;