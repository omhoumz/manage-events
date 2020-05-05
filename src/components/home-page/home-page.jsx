import React, { memo } from 'react'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import AddIcon from '@material-ui/icons/Add'
import Helmet from 'react-helmet'

import {
  HomeWrapper,
  HeroImageWrapper,
  Headline,
  Paragraph,
  CtaButton,
  ActionsWrapper,
  MoreLink,
  BtnLabel,
  MoreLinkLabel,
  HomeSection,
  FooterSection,
} from './home-page.styled'

import HERO_IMAGE from './bg.jpg'

const HeroImage = memo(function HeroImage() {
  return (
    <HeroImageWrapper>
      <img
        src={HERO_IMAGE}
        loading='lazy'
        alt='vintage brown and white watch lot'
        title='Photo by Heather Zabriskie (@heatherz) on unsplash.com'
      />
    </HeroImageWrapper>
  )
})

const HomePage = memo(function HomePage() {
  return (
    <HomeWrapper>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <main>
        <HomeSection>
          <HeroImage />
          <Headline>It's how you manage your events</Headline>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            voluptatum debitis, totam temporibus maxime odit.
          </Paragraph>
          <ActionsWrapper>
            <CtaButton to='/app'>
              <ArrowRightAltIcon />
              <BtnLabel>Show me the app</BtnLabel>
            </CtaButton>
            <MoreLink to='/about'>
              <MoreLinkLabel>More About Event Manager</MoreLinkLabel>
              <AddIcon />
            </MoreLink>
          </ActionsWrapper>
        </HomeSection>
        <FooterSection>Social Links</FooterSection>
      </main>
    </HomeWrapper>
  )
})

HomePage.propTypes = {}

export default HomePage
