import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import Works from './Works'
import About from './About'

export default function Home() {
  const location = useLocation()
  
  // 1. 引入状态捕捉鼠标悬停
  const [isHovered, setIsHovered] = useState(false)

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleScrollToWorks = () => scrollToSection('works-section')

  useEffect(() => {
    const target = location.state && location.state.scrollTo
    if (target) {
      scrollToSection(target)
    }
  }, [location.state])

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory bg-black text-white">
      {/* 2. 在 Hero section 绑定鼠标事件 */}
      <section 
        className="relative h-screen snap-start flex flex-col justify-center bg-black overflow-hidden px-8 sm:px-16 md:px-24 lg:px-32 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* 1. 背景层：还原标准质感与清晰度 */}
        <div className="absolute inset-0 z-0 flex justify-end items-center pointer-events-none">
          {/* 这里微调了容器大小到 right 70%，把 scale-90 拿掉 */}
          <div className="h-full w-full md:w-[70%] overflow-hidden transition-all duration-1000 transform origin-right"> 
            <img 
              src="assets/covers/hero.jpg" 
              alt="Hero" 
              // 🚀 object-position 靠右，避开文字。
              // 🚀 核心修改：去掉 grayscale，让原图微弱的黄金色调浮现出来
              className="h-full w-full object-cover grayscale transition-all duration-1000 ease-out grayscale"
              style={{
                objectPosition: 'right center',
                
                // 🚀 核心修改：还原标准（brightness(1), contrast(1), saturate(1)）
                // 这个状态还原了原图微弱但温润的黄金色调
                filter: isHovered 
                  ? 'brightness(1.05) contrast(1.1) saturate(1)' 
                  : 'brightness(1) contrast(1) saturate(1)', 
                
                // 🚀 还原标准透明度
                opacity: 1, 
                
                // 🚀 激活时保持一点灵动感
                transform: isHovered ? 'scale(1.02)' : 'scale(1)'
              }}
            />
          </div>
        </div>

        {/* 2. 黑色渐变遮罩：实现黑白大气过度的核心 */}
        <div 
          className="absolute inset-0 z-[1]"
          style={{
            // 🚀 让过度发生得更晚，纯黑区域占 30%，过渡延伸到 85%
            background: 'linear-gradient(to right, #000 0%, #000 30%, transparent 85%)'
          }}
        />

        {/* 3. 内容层：纯净、坚定 */}
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="max-w-xl">
            {/* 文字加了阴影，防止在图片亮处看不清 */}
            <h1 className="text-[clamp(3.5rem,12vw,8rem)] font-extralight leading-[0.95] tracking-tighter text-white drop-shadow-lg">
              CHAYLEN<br />CHU
            </h1>
            <p className="mt-6 pl-1 text-[10px] uppercase tracking-[0.8em] text-neutral-500 font-medium">
              Sound Designer & Composer
            </p>
            <p className="mt-8 pl-1 text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-md">
              Dedicated to composing and sculpting sound for immersive, generative audio-visual worlds.
            </p>
            <button
              type="button"
              onClick={handleScrollToWorks}
              className="mt-12 pl-1 inline-flex items-center gap-2 text-xs sm:text-[0.8rem] uppercase tracking-[0.26em] text-neutral-400 hover:text-white transition-colors group"
            >
              <span>explore works</span>
              <ChevronDown size={16} className="opacity-70 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 其余不变 */}
      <section id="works-section" className="snap-start h-screen overflow-y-auto bg-black">
        <Works />
      </section>
    </div>
  )
}