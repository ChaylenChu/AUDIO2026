import { useState } from 'react'
import MediaModal from '../components/MediaModal'

const works = [
  {
    id: '1',
    title: '形遁',
    year: '2025.05',
    type: 'Interactive Electronic Music',
    cover: 'assets/covers/xingdun.png',
    mediaUrl: 'assets/video/xingdun_final_v5.mp4',
    description: '手部数据交互与电子音乐',
    // About the Project：在弹窗左侧「About the Project」区块显示
    about: 'Xing Dun Form Escape explores the threshold between the tangible and the intangible. Driven by hand gestures, the work deconstructs the physical Form into abstract digital particles, while the haunting vocals remain as the lingering Spirit. It is a journey from geometric order to mathematical chaos, ultimately returning to a digital-age realization: Seeing the mountain as the mountain once again.',
    // Technical Sheet - Tools：在弹窗右侧以标签形式显示
    tools: ['TouchDesigner','Mediapipe','Protools'],
    // Technical Sheet - Role：在弹窗右侧显示
    role: 'Composer / Interaction Designer',
    span: 'col-span-2 row-span-2',
  },
  {
    id: '2',
    title: '宋檐逸梦',
    year: '2024.07',
    type: 'Generative AI Visuals & Electronic Music',
    visualCollaborator: 'JIAJUN SHEN',
    cover: 'assets/covers/songyanyimeng.png',
    mediaUrl:  'assets/video/songyanyimeng_web_final',
    description: '人工智能视觉景观与电子音乐',
    about: 'Song Yan Yi Meng (Dream of the Song Eaves) is a generative audiovisual meditation on architectural memory. By digitizing the elegant curves of Song Dynasty eaves into shifting digital landscapes, the work evokes a dream-like state where history and the future coexist. It explores the interplay of light and shadow within classical structures, reconstructing the mystical elegance of traditional courtyards through a lens of contemporary abstraction.',
    tools: ['ComfyUI', 'Stable Diffusion', 'GRM Tools', 'Max/MSP'],
    role: 'Audiovisual Designer / Technical Director',
    span: 'col-span-1 row-span-1',
  },
  {
    id: '3',
    title: '最后的圈',
    year: '2024.12',
    type: 'Electronic Music & Interactive Visuals',
    cover: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=800&q=80',
    mediaUrl:  'assets/video/zuihou_final_safe.mp4',
    description: '声音驱动视觉与电子音乐',
    about: 'The Last Circle is an electronic music composition exploring the boundaries of human freedom and spiritual possibility. By blending organic environmental field recordings—wind, water, and birdsong—with futuristic synthesis, the work constructs a sonic space that oscillates between primal chaos and digital order. It serves as an open narrative, inviting the audience to find their own "unregulated territory" within the interplay of sound and light.',
    tools: ['TouchDesigner', 'Ableton Live', 'Max/MSP'],
    role: 'Composer / Audiovisual Artist',
    span: 'col-span-1 row-span-2',
  },
  {
    id: '4',
    title: '琴弦上的追逐',
    year: '2022.10',
    type: 'Electronic Acoustic Music',
    cover: 'assets/covers/qinxianshangdezhuizhu.png',
    mediaUrl: 'assets/audio/chasingonthestrings.m4a',
    description: '幻听电子音乐',
    about: 'An acousmatic study of string instruments. The work explores the tension between acoustic origins and digital reconstruction, transforming piano and cello articulations into a complex rhythmic narrative through extended techniques and algorithmic processing.',
    tools: ['Protools','GRM Tools'],
    role: 'Recording Engineer / Sound Designer ',
    span: 'col-span-2 row-span-1',
  },
  {
    id: '5',
    title: '留白',
    year: '2023',
    type: 'audio',
    cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
    mediaUrl: null,
    description: '室内乐',
    about: '',
    tools: [],
    role: '',
    span: 'col-span-1 row-span-1',
  },
]

export default function Works() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="bg-black text-neutral-100">
      <div className="max-w-6xl mx-auto px-8 sm:px-16 md:px-24 lg:px-32 py-20 sm:py-28">
        <header className="mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl font-extralight tracking-tight text-white">
          Works
          </h1>
          <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-neutral-500">
            click a project to view
          </p>
        </header>

        <div className="flex flex-col gap-24 sm:gap-28">
          {works.map((work, idx) => (
            <article
              key={work.id}
              className={`w-full ${idx % 2 === 1 ? 'md:pl-16 lg:pl-24' : ''}`}
            >
              <button
                type="button"
                onClick={() => setSelected(work)}
                className="group w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
              >
                <div className="relative overflow-hidden rounded-none bg-neutral-950">
                  <div className="aspect-[21/9] sm:aspect-video">
                    <img
                      src={work.cover}
                      alt={work.title}
                      className="h-full w-full object-cover grayscale opacity-90 transition duration-700 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] will-change-transform"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">
                    {work.year} · {work.type}
                  </p>
                  <h2 className="mt-3 text-2xl sm:text-3xl font-extralight tracking-tight text-white">
                    {work.title}
                  </h2>
                  {work.description && (
                    <p className="mt-4 max-w-md text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                      {work.description}
                    </p>
                  )}
                </div>
              </button>
            </article>
          ))}
        </div>

        {selected && (
          <MediaModal work={selected} onClose={() => setSelected(null)} />
        )}
      </div>
    </div>
  )
}
