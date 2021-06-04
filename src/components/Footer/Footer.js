import React from 'react';
import { Button } from '../../globalStyles';
import { Link } from 'react-router-dom';

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

import logo from '../../images/logo.svg';
function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Boost your links today
        </FooterSubHeading>
        <Link to='/sign-up'>
          <Button big fontBig primary>
                    Get Started
          </Button>
        </Link>
      </FooterSubscription>

      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
              <img src={logo} alt="logo" style={{filter:'brightness(500%'}}/>
        </SocialLogo>
          
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaPinterest />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>

      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Features</FooterLinkTitle>
            <FooterLink to='/sign-up'>Link Shortening</FooterLink>
            <FooterLink to='/'>Branded Links</FooterLink>
            <FooterLink to='/'>Analytics</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Resources</FooterLinkTitle>
            <FooterLink to='/'>Blog</FooterLink>
            <FooterLink to='/'>Developers</FooterLink>
            <FooterLink to='/'>Support</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Company</FooterLinkTitle>
            <FooterLink to='/'>About</FooterLink>
            <FooterLink to='/'>Our Team</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Contact</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      
    </FooterContainer>
  );
}

export default Footer;