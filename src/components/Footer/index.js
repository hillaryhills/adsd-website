import React, { Component } from 'react'
import Footer from './container/Footer'
import SubFooter from '../Footer/container/SubFooter'
import { data } from './container/data'
import { Grid } from 'react-flexbox-grid'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  background: #3b066f;
  display: flex;
  align-items: center;

  @media (min-width: 992px) {
    height: 22vh;
  }
`

const getLinks = (data) => {
  const links = data.links.map((link, index) => (
    <a key={index} href={link.href}>
      {link.title}
    </a>
  ))
  return links
}

export class index extends Component {
  render() {
    return (
      <>
        <FooterWrapper>
          <Grid container="sm">
            <Footer
              //socialLinks={data.links_social_icons}
              phone={data.phone}
              columnFourLinks={getLinks(data.links_column_four)}
              columnFourTitle={data.links_column_four.title}
              columnThreeLinks={getLinks(data.links_column_three)}
              columnThreeTitle={data.links_column_three.title}
              columnTwoLinks={getLinks(data.links_column_two)}
              columnTwoTitle={data.links_column_two.title}
              columnOneLinks={getLinks(data.links_column_one)}
              columnOneTitle={data.links_column_one.title}
            />
          </Grid>
        </FooterWrapper>
        <SubFooter
          copyrightText={'Copyright @ Access disability service 2020'}
          links={[
            <a href="#">Privacy Policy</a>,
            <a href="#">Terms conditions</a>,
          ]}
        />
      </>
    )
  }
}
export default index
