import { Mail, Music2 } from "lucide-react"

export default function About() {
  return (
    <div className="w-full text-neutral-200">

      <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">

        {/* Left narrative */}
        <div className="space-y-8">

          <header className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.7em] text-neutral-500">
              About
            </p>

            <h2 className="flex flex-col gap-2 uppercase text-white">
  {/* 名字部分：保持大字号与原本的间距 */}
  <span className="text-2xl md:text-3xl font-light tracking-[0.16em]">
    Chaylen Chu
  </span>
  
  {/* 身份部分：换行显示，字号变小，颜色调淡 */}
  <span className="text-[10px] md:text-xs tracking-[0.4em] text-neutral-500 font-extralight normal-case">
    Composer / Sound Designer
  </span>
</h2>
          </header>

          <p className="text-sm md:text-[0.95rem] leading-relaxed text-neutral-300 font-extralight tracking-wide">
         
          Holding a Master’s degree in Electronic Music Composition from the Zhejiang Conservatory of Music, Chaylen specializes in Acousmatic Music and the development of Interactive Sonic Systems. His expertise lies in the architecture of game audio interactions and the craft of bespoke sound design, integrating rigorous algorithmic logic with emotive sonic landscapes.
          </p>

         <div className="space-y-8">
 

  {/* 2. 核心履历：中等字号，带呼吸感 */}
  <div className="space-y-6 max-w-2xl">
    <p className="text-sm md:text-[0.95rem] leading-relaxed text-neutral-300 font-extralight tracking-wide">
      硕士毕业于浙江音乐学院电子音乐作曲专业。研究方向涵盖幻听电子音乐创作与交互音乐系统开发。
  
      在游戏音频交互架构及深度声音设计领域拥有扎实的实践积累，致力于将严谨的算法逻辑转化为极具叙事张力的沉浸式听觉体验。
    </p>
  </div>
</div>

        </div>

        {/* Right meta */}
        <aside className="space-y-8 md:pl-6 border-t md:border-t-0 md:border-l border-neutral-800 pt-6 md:pt-0">

          {/* Research */}
          <div className="space-y-2">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-neutral-500">
              Research
            </p>

            <p className="text-sm text-neutral-200 font-light tracking-wide">
              Game Audio · Interactive Music · Immersive Sound
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-neutral-500">
              Contact
            </p>

            <div className="space-y-2 text-sm font-light tracking-wide">

              <a
                href="mailto:your@email.com"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
              >
                <Mail size={16} className="opacity-80" />
                chaylenchu@163.com
              </a>

              <a
                href="https://soundcloud.com/yourname"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
              >
                <Music2 size={16} className="opacity-80" />
                Sound Archive
              </a>

            </div>
          </div>

        </aside>
      </div>

    </div>
  )
}