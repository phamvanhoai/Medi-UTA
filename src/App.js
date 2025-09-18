import Header from './components/Header/'
import Hero from './components/Sections/Hero'
import TrustedBy from './components/Sections/TrustedBy'
import ExplainerVideos from './components/Sections/ExplainerVideos'
import Testimonials from './components/Sections/Testimonials'
import NewNormal from './components/Sections/NewNormal'
import InsightsDeck from './components/Sections/InsightsDeck'
import GlobalReach from './components/Sections/GlobalReach'
import FreeReport from './components/Sections/FreeReport'
import CaseStudy from './components/Sections/CaseStudy'
import Footer from './components/Sections/Footer'
import CookieBanner from './components/Sections/CookieBanner'


import './styles/global.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <ExplainerVideos />
        <Testimonials />
        <NewNormal />
        <InsightsDeck />
        <GlobalReach />
        <FreeReport />
        <CaseStudy />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}

export default App;
