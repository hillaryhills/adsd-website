import styled, { css } from 'styled-components'
import { Grid } from 'react-flexbox-grid'

// export const resizeImage = (
//   path,
//   width = 768,
//   height = 'auto',
//   config = {}
// ) => {
//   if (!path('//image.ctfassets.net')) return path
//   const { crop = true, quality = 80, overlay = null } = config
//   const defaultTransforms = `?auto=webp&format=pjpg&quality=${quality}`
//   const paramWidth = `&width=${width}`
//   const paramHeight = `&height=${height}`
//   const paramFit = height !== 'auto' ? `&fit=${crop ? 'crop' : 'bounds'}` : ''
//   const paramOverlay = overlay ? `&overlay=${overlay}&overlay-repeat=both` : ''

//   return `${path}${defaultTransforms}${paramWidth}${paramHeight}${paramFit}${paramOverlay}`
// }

export const FullWidthGrid = styled(Grid)`
  width: 100%;

  @media (min-width: 552px) {
    margin-top: 14px 0;
  }
`

export const Banner = styled.section`
  background-color: rgb(45, 47, 61);
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  overflow: hidden;
  position: relative;

  @media (min-width: 320px) {
    height: 40vw;
  }

  @media (min-width: 552px) {
    max-height: 848px;
  }

  /* LoadingBG */
  ${({ image }) =>
    image &&
    css`
      background-image: url(${image});
    `}

  /* Dark overlay */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: rgb(16, 38, 48);
    opacity: 0.5;
  }

  /* Load full bg */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-position: center;
    background-size: cover;
    ${({ image }) => {
      return image && image
    }}
  }
`
export const Inner = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 36px 0;
`

export const Headings = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 320px) {
    padding: 0 8px;
  }

  > * {
    &::first-letter {
      text-transform: capitalize;
    }
  }
`
export const BannerTitle = styled.h1`
  font-size: 60px;
  color #FFFFFF;
`

export const SubBannerTitle = styled.p`
  color: #ffffff;
  font-size: 34px;
  margin-top: -1em;
`
