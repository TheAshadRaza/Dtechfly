"use client"
import Features from 'components/Features';
import Footer from 'components/Footer';
import HeroSection from 'components/HeroSection';
import Profile from 'components/Profile';
import Main from 'components/Main';
import Motion from 'components/Motion';
import Content from 'components/Content';
import Serve from 'components/Serve';
export default function Home(){
  return (
  <>
  <Main />
  <Motion />
  <HeroSection />
  <Content />
  <Serve />
  <Features /> 
  <Profile />
  <Footer />
  </>
  )
}
