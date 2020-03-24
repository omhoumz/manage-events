import styled, { css } from 'styled-components'

const center = css`
  --margin-inline: 16px;
  margin-inline-start: var(--margin-inline);
  margin-inline-end: var(--margin-inline);

  @media (min-width: 568px) {
    --margin-inline: 32px;
  }
`

export const HomeWrapper = styled.div`
  overflow: hidden;

  @media (min-width: 960px) {
    min-height: 100vh;
  }
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
    width: 40vw;
    height: 50vh;

    position: absolute;
    right: 0;
  }
`

export const OrangeRectangleWrapper = styled.div`
  background-color: #f2c94e;
  width: 90vw;
  height: 30vh;

  transform: translate(90px, -50px);
  position: absolute;
`

export const Headline = styled.h2`
  margin: 0;
  font-size: 3em;
  line-height: 1;

  z-index: 5;
  font-family: serif;
  letter-spacing: -1px;
  color: #2a2107;
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
`

export const Paragraph = styled.p`
  margin: 3em 0;
  line-height: 1.6;

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

  background-color: #2a2107;
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
  color: black;
  text-decoration: none;
  text-transform: uppercase;

  display: inline-flex;
  align-items: center;
`

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-block-end: 1.4em;

  > :first-child {
    margin-block-end: 1em;
  }

  ${center}

  @media (min-width: 960px) {
    flex-direction: row;

    > :first-child {
      margin-block-end: 0;
    }
  }
`
