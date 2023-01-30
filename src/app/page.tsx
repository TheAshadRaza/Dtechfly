"use client"
import Features from 'components/Features';
import Footer from 'components/Footer';
import HeroSection from 'components/HeroSection';
import Profile from 'components/Profile';
import Main from 'components/Main';
import Motion from 'components/Motion';


export default function Home(){
  return (
  <>
  <Main />
  <Motion />
  <HeroSection />
  <Features /> 
  <Profile />
  <Footer />
  </>
  )
}
