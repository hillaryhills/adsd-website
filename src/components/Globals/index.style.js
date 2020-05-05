import styled from 'styled-components'

export const Grid = styled.div`
  width: calc(100% - 10vmin);
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 34px;
  }

  @media (min-width: 500px) {
    padding: 0;
  }
`

export const Section = styled.section`
  background-color: #ffffff;
  padding: 86px 0;

  @media (min-width: 768px) {
    padding: 34px 0;
  }
`

export const Contained = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`
