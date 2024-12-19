import { Footer } from 'flowbite-react';
import React from 'react'

const FooterBar = () => {
  return (
      <Footer className="h-[6vh] pl-10 pr-10 w-[100%]">
          <Footer.Copyright
              href="https://github.com/saprabh20"
              by="Saprabh Anand"
              year={2024}
          />
          <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
      </Footer>
  );
}

export default FooterBar