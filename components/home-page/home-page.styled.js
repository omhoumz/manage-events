import styled, { css } from 'styled-components'

const center = css`
  --margin-inline: 16px;
  margin-inline-start: var(--margin-inline);
  margin-inline-end: var(--margin-inline);

  @media (min-width: 568px) {
    --margin-inline: 32px;
  }
  @media (min-width: 960px) {
    --margin-inline: 100px;
  }
`

export const HomeWrapper = styled.div`
  --b-color: #333333;
  color: var(--b-color);
  overflow: hidden;

  @media (min-width: 960px) {
    min-height: 100vh;
  }
`

export const HomeSection = styled.section`
  margin-block-end: 22vh;
`

export const HeroImageWrapper = styled.div`
  width: 90vw;
  height: 30vh;
  background-color: #ce9e74;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 960px) {
    width: 50vw;
    height: 50vh;

    position: absolute;
    right: 0;
  }
`

export const Headline = styled.h2`
  margin: 0;
  max-width: 24ch;
  font-size: 3em;
  line-height: 1;

  z-index: 5;
  font-family: serif;
  letter-spacing: -1px;
  color: var(--b-color);
  text-transform: uppercase;

  ::before {
    content: '';
    --padding: 0.8em;
    padding: var(--padding);
    background-color: #f2c94e;
    width: 90vw;
    height: 100%;
    transform: translate(82px, calc(var(--padding) * -1));
    position: absolute;
    z-index: -1;
  }

  ${center}

  @media (min-width: 960px) {
    padding-block-start: 4em;
    font-size: 3.4em;

    ::before {
      transform: translate(25vw, calc(var(--padding) * -1.4));

      width: 30vw;
      height: 120%;
    }
  }
`

export const Paragraph = styled.p`
  margin: 3em 0;
  line-height: 1.6;
  z-index: 10;

  @media (min-width: 960px) {
    max-width: 65ch;
    font-size: 1.1em;
  }

  ${center}
`

export const CtaButton = styled.a`
  height: 42px;
  padding: 0 2em;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  font-size: 1em;
  color: white;
  text-decoration: none;
  text-transform: uppercase;

  background-color: var(--b-color);
  border: none;
  border-radius: 0.2em;
  cursor: pointer;

  > :first-child {
    margin-inline-start: -0.4em;
  }
`

export const BtnLabel = styled.span`
  margin-inline-start: 1em;
`

export const MoreLink = styled.a`
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;

  display: inline-flex;
  align-items: center;

  ::before {
    content: '';
    height: 1px;
    width: 10vw;
    background-color: var(--b-color);
    margin-inline-end: 1em;
  }
`

export const MoreLinkLabel = styled.span`
  margin-inline-end: 1em;
`

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-block-end: 1.4em;
  z-index: 10;

  > :first-child {
    margin-block-end: 1em;
  }

  ${center}

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > :first-child {
      margin-block-end: 0;
    }
  }
`

export const FooterSection = styled.footer`
  max-width: 1240px;
  width: 90%;
  margin-inline-start: auto;
  margin-inline-end: auto;
`
