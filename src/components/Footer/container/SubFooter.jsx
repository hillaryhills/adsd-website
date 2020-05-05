import React from "react"
import PropTypes from "prop-types"
import { Grid } from "react-flexbox-grid"
import { Bar, CopyrightText, Row, LegalLink, LegalLinks } from "./footer.style"

const SubFooter = ({ copyrightText, links }) => {
  return (
    <Bar>
      <Grid>
        <Row>
          <CopyrightText
            hasLinks={links.length}
            data-key="sub-footer__copyright"
          >
            {copyrightText}
          </CopyrightText>
          <LegalLinks>
            {links &&
              links.map((item, index) => (
                <LegalLink
                  key={`legal-link-${index}`}
                  data-key={`sub-footer__legal-links__link-${index}`}
                >
                  {item}
                </LegalLink>
              ))}
          </LegalLinks>
        </Row>
      </Grid>
    </Bar>
  )
}
SubFooter.defaultProps = {
  links: [],
}

SubFooter.propTypes = {
  copyrightText: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.node),
}

export default SubFooter
