import React from 'react'
import PropTypes from 'prop-types'
import SocialLink from './SocialLink'
import NavigationColumn from './NavigationColumn'
import {
  CallButton,
  Container,
  SocialIconsContainer,
  Wrapper,
} from './footer.style'

const Footer = ({
  columnOneLinks,
  columnOneTitle,
  columnTwoLinks,
  columnTwoTitle,
  columnThreeLinks,
  columnThreeTitle,
  phone,
  socialLinks,
}) => {
  const navigationColumns = [
    {
      title: columnOneTitle,
      links: columnOneLinks,
    },
    {
      title: columnTwoTitle,
      links: columnTwoLinks,
    },
    {
      title: columnThreeTitle,
      links: columnThreeLinks,
    },
  ].filter(({ title, links }) => title && links)
  return (
    <Wrapper>
      <Container>
        <SocialIconsContainer>
          {socialLinks &&
            socialLinks.map((link) => (
              <SocialLink key={`footer-social-${link.title}`} link={link} />
            ))}
        </SocialIconsContainer>
        {phone && <CallButton>{phone}</CallButton>}
      </Container>

      {navigationColumns.map((column, index) => {
        const showBorder = index !== navigationColumns.length - 1
        return (
          column.title &&
          column.links.length && (
            <NavigationColumn
              showBorder={showBorder}
              key={`footer-nav-${index}`}
              title={column.title}
              links={column.links}
              dataKey={`footer-nav-${index}`}
            />
          )
        )
      })}
    </Wrapper>
  )
}

Footer.propTypes = {
  logo: PropTypes.node.isRequired,
  phone: PropTypes.node,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  columnOneLinks: PropTypes.arrayOf(PropTypes.node),
  columnOneTitle: PropTypes.string.isRequired,
  columnTwoLinks: PropTypes.arrayOf(PropTypes.node),
  columnTwoTitle: PropTypes.string,
  columnThreeLinks: PropTypes.arrayOf(PropTypes.node),
  columnThreeTitle: PropTypes.string,
}
export default Footer
