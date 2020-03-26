import React, { memo } from 'react'
import Link from 'next/link'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import AddIcon from '@material-ui/icons/Add'

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

const HERO_IMAGE = '/bg.jpg'

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
      <main>
        <HomeSection>
          <HeroImage />
          <Headline>It's how you manage your events</Headline>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            voluptatum debitis, totam temporibus maxime odit.
          </Paragraph>
          <ActionsWrapper>
            <Link href='/app' passHref>
              <CtaButton>
                <ArrowRightAltIcon />
                <BtnLabel>Show me the app</BtnLabel>
              </CtaButton>
            </Link>
            <Link href='/about' passHref>
              <MoreLink>
                <MoreLinkLabel>More About Event Manager</MoreLinkLabel>
                <AddIcon />
              </MoreLink>
            </Link>
          </ActionsWrapper>
        </HomeSection>
        <FooterSection>Social Links</FooterSection>
      </main>
    </HomeWrapper>
  )
})

HomePage.propTypes = {}

export default HomePage
