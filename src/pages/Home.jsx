import { useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import Works from './Works'
import About from './About'

export default function Home() {
  const location = useLocation()

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleScrollToWorks = () => scrollToSection('works-section')
  const handleScrollToAbout = () => scrollToSection('about-section')

  useEffect(() => {
    const target = location.state && location.state.scrollTo
    if (target) {
      scrollToSection(target)
    }
  }, [location.state])

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      {/* Hero as first snap section */}
      <section className="relative h-screen snap-start flex flex-col justify-center bg-black overflow-hidden px-8 sm:px-16 md:px-24 lg:px-32">
        <div className="relative max-w-6xl mx-auto w-full">
          <div className="max-w-xl">
            <h1 className="text-[clamp(3rem,10vw,7rem)] font-extralight leading-[1.04] tracking-tight text-white">
              <span className="block">CHAYLEN CHU</span>
            </h1>
            <p className="mt-4 pl-1 text-[11px] uppercase tracking-[0.7em] text-neutral-500">
              Sound Designer & Composer
            </p>
            <p className="mt-8 pl-1 text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-md">
              Dedicated to composing and sculpting sound for immersive, generative audio-visual worlds.
            </p>
            <button
              type="button"
              onClick={handleScrollToWorks}
              className="mt-12 pl-1 inline-flex items-center gap-2 text-xs sm:text-[0.8rem] uppercase tracking-[0.26em] text-neutral-400 hover:text-white transition-colors"
            >
              <span>explore works</span>
              <ChevronDown size={16} className="opacity-70" />
            </button>
          </div>
        </div>
      </section>

      {/* Works as second snap section */}
      <section
        id="works-section"
        className="snap-start h-screen overflow-y-auto"
      >
        <Works />
      </section>

      {/* About as third snap section */}
      <section
        id="about-section"
        className="snap-start h-screen"
      >
        <div className="h-full flex items-center justify-center px-5 sm:px-8 md:px-12">
          <div className="w-full max-w-3xl max-h-[80vh] overflow-y-auto">
            <About />
          </div>
        </div>
      </section>
    </div>
  )
}
