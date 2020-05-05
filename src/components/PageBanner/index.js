import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import {
  Banner,
  FullWidthGrid,
  Headings,
  Inner,
  BannerTitle,
  SubBannerTitle,
} from './styles'
const PageBanner = ({ image, title, subtitle }) => {
  return (
    <>
      <Banner image={image} data-key="page-banner">
        <Inner>
          <FullWidthGrid>
            <Row center="xs">
              <Col lg={9} xs={12}>
                <Headings>
                  <BannerTitle>{title}</BannerTitle>
                  <SubBannerTitle>{subtitle}</SubBannerTitle>
                </Headings>
              </Col>
            </Row>
          </FullWidthGrid>
        </Inner>
      </Banner>
    </>
  )
}

PageBanner.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  subtitle: PropTypes.string,
  title: PropTypes.string,
}

export default PageBanner
