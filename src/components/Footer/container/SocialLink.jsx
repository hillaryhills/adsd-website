import React from 'react'
import { SocialIcon } from './footer.style'
import { Facebook } from '../../../assets/social/facebook.svg'
import { Instagram } from '../../../assets/social/instagram.svg'
import { Twitter } from '../../../assets/social/twitter.svg'

const icons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
}

export default function SocialLink({ link }) {
  return (
    <SocialIcon
      href={link.href}
      target="_blank"
      data-key={`footer__social-icons__${link.title}`}
    >
      {React.createElement(icons[link.title], { size: 'sm' })}
    </SocialIcon>
  )
}
