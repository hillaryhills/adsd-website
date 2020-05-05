import React from 'react'
import { SocialIcon } from './footer.style'

function SocialLink({ link }) {
  return (
    <SocialIcon href={link.href} target="_blank">
      {(<Twitter />)[link.title]}
    </SocialIcon>
  )
}
export default SocialLink
