import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function MediaModal({ work, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const tools = Array.isArray(work.tools) ? work.tools : []

  // 辅助判断：是否应该作为视频播放
  const isVideo = 
    (work.mediaUrl && work.mediaUrl.toLowerCase().endsWith('.mp4')) || 
    (work.type && work.type.toLowerCase().includes('video')) ||
    (work.type && work.type.toLowerCase().includes('music')) ||
    (work.type && work.type.toLowerCase().includes('electronic'))

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl bg-neutral-950 text-neutral-100 rounded-sm overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.9)] border border-white/5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-neutral-200 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="关闭"
        >
          <X size={22} />
        </button>

        {/* Media 播放区域 */}
        <div className="bg-black">
          <div className="aspect-[16/9] md:aspect-[21/9] flex items-center justify-center overflow-hidden">
            {isVideo ? (
              work.mediaUrl ? (
                <video
                  key={work.mediaUrl} // 切换作品时重置播放器
                  src={work.mediaUrl}
                  controls
                  autoPlay
                  muted       // 必须静音才能在浏览器自动播放
                  playsInline // 适配移动端
                  loop 
                  className="w-full h-full object-contain"
                />
              ) : (
                <p className="text-neutral-500 text-sm tracking-widest uppercase">Video Preview Unavailable</p>
              )
            ) : work.mediaUrl ? (
              <audio
                src={work.mediaUrl}
                controls
                className="w-full max-w-xl px-6"
              />
            ) : (
              <p className="text-neutral-500 text-sm tracking-widest uppercase">Content Unavailable</p>
            )}
          </div>
        </div>

        {/* 详情描述区域 */}
        <div className="px-6 sm:px-10 py-8 md:py-12 bg-neutral-950">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
            
            {/* 左侧：文字叙述 */}
            <div className="space-y-10">
              <header className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-light">
                  {work.year} · {work.type}
                </p>
                <h2 className="text-2xl md:text-4xl font-extralight tracking-[0.1em] text-white">
                  {work.title}
                </h2>
              </header>

              {work.about && (
                <section className="space-y-4">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 font-medium">
                    About the Project
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-neutral-300 font-extralight tracking-wide">
                    {work.about}
                  </p>
                </section>
              )}
            </div>

            {/* 右侧：技术信息 */}
            <aside className="space-y-8 md:pl-8 border-t md:border-t-0 md:border-l border-white/5 pt-10 md:pt-0">
              <div className="space-y-6">
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 font-medium">
                  Technical Sheet
                </h3>

                {tools.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 text-[11px] font-extralight tracking-wider border border-white/10 text-neutral-400 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {work.role && (
                  <div className="space-y-2">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">Role</p>
                    <p className="text-sm text-neutral-300 font-extralight tracking-wide">{work.role}</p>
                  </div>
                )}

                {work.visualCollaborator && (
                  <div className="space-y-2">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">Visual Collaboration</p>
                    <p className="text-sm text-neutral-300 font-extralight tracking-wide">{work.visualCollaborator}</p>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}