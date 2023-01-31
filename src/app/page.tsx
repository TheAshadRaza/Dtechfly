"use client"
import Features from 'components/Features';
import Footer from 'components/Footer';
import HeroSection from 'components/HeroSection';
import Profile from 'components/Profile';
import Main from 'components/Main';
import Motion from 'components/Motion';
import Content from 'components/Content';

export default function Home(){
  return (
  <>
  <Main />
  <Motion />
  <HeroSection />
  <Content />
  <Features /> 
  <Profile />
  <Footer />
  </>
  )
}
