import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 0;
  margin-top: 2em;

  @media (min-width: 992px) {
    padding: 0 18px;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const CallButton = styled.div`
  align-items: center;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  margin-top: 18px;
  padding: 0;
  text-decoration: none;
  text-align: center;
  margin-top: 3em;

  @media (min-width: 992px) {
    text-align: left;
    font-weight: 700;
    font-size: 20px;
  }
`

export const LinkList = styled.ul`
  padding-bottom: 14px;

  @media (min-width: 992px) {
    padding: 0;
  }
`

export const NavLink = styled.li`
  display: flex;
  font-size: 14px;
  line-height: 1;

  a,
  button {
    width: 100%;
    font-size: 16px;
    color: #ffffff;
    width: 100%;
    padding: 5px 0 !important;
    color: #ffffff;
    text-decoration: none;

    @media (min-width: 992px) {
      padding: 0;
      margin-top: 4px;
    }

    &:hover,
    &:active {
      color: #6d7981;
    }
  }

  button {
    display: flex;
    cursor: pointer;
    width: 100%;
  }
`

const containerStyle = css`
  margin-bottom: 24px;

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`

export const Container = styled.div`
  ${containerStyle}
  @media (min-width: 992px ) {
    padding-right: 16px;
  }
`

export const StyledP = styled.p`
  font-weight: 600;
`

export const SocialIconsContainer = styled.div`
  margin: 24px 0;
  display: flex;

  @media (min-width: 992px) {
    margin-top: 4px;
  }
`

export const SocialIcon = styled.a`
  transition: ;
  margin: 0 14px;

  & svg {
    width: 20px;
  }

  @media (min-width: 992px) {
    margin: 0 12px 0 0;
    &:last-child {
      margin-right: 0;
    }
  }
`

export const NavigationWrapper = styled.div`
  width: 100%;
  @media (min-width: 400px) {
    max-width: 320px;
  }

  @media (min-width: 992px) {
    width: auto;
    padding-right: 18px;
  }
`

// Sub footer

export const Bar = styled.div`
  align-items: center;
  display: flex;
  background: #673ab7;
  color: #ffffff;
  font-size: 14px;
  padding: 10px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  line-height: 1;
  width: 100%;
  align-items: center;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`

export const CopyrightText = styled.div`
  text-align: center;

  @media (min-width: 992px) {
    max-width: ${({ hasLinks }) => (hasLinks ? '50%' : '100%')};
    text-align: left;
    margin-top: 0;
  }
`

export const LegalLinks = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  font-weight: 600;
  margin-top: 8px;
}

  @media (min-width: 992px) {
    align-items: center;
    flex-direction: row;
    margin-bottom: 0;
  }
`

export const LegalLink = styled.li`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;

  @media (min-width: 992px) {
    display: inline-block;
    justify-content: flex-start;
    margin-bottom: 0;
    margin-left: 16px;
  }

  a {
    color: #dddddd;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      color: #999999;
    }
  }
`
