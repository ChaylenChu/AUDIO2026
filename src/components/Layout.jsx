import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/#works', label: 'Works' }, // 这里的逻辑可以根据你的首页结构调整
  { path: '/about', label: 'About' },
]

export default function Layout({ children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  // 处理导航点击
  const handleNavClick = (path) => (e) => {
    setMobileOpen(false)
    
    // 如果点击的是 Works 且在首页，执行平滑滚动
    if (path === '/#works' && location.pathname === '/') {
      e.preventDefault()
      const el = document.getElementById('works-section') // 确保你的 Works 组件最外层 ID 是这个
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (path === '/' && location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // 路由切换时重置滚动
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-black flex flex-col font-sans selection:bg-white selection:text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/[0.02]">
        <nav className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 flex items-center justify-between h-20">
          
          {/* 左上角：中英文组合 Logo */}
          <Link 
            to="/" 
            onClick={handleNavClick('/')}
            className="flex items-center gap-3 group"
          >
            <span className="text-[11px] uppercase tracking-[0.4em] text-white font-light group-hover:opacity-60 transition-opacity">
              Chaylen Chu
            </span>
            <span className="text-[11px] text-neutral-600 font-extralight tracking-[0.2em] group-hover:text-neutral-400 transition-colors">
              — 褚放
            </span>
          </Link>

          {/* 右侧：Home / Works / About */}
          <ul className="hidden sm:flex items-center gap-10 lg:gap-14">
            {navItems.map(({ path, label }) => (
              <li key={label}>
                <Link
                  to={path.startsWith('/#') ? '/' : path}
                  onClick={handleNavClick(path)}
                  className={`text-[10px] uppercase tracking-[0.3em] transition-all duration-500 ${
                    // 简单的激活态逻辑：如果路径匹配或者是 Works 且在首页
                    (location.pathname === path || (path === '/#works' && location.pathname === '/'))
                      ? 'text-white font-normal' 
                      : 'text-neutral-500 hover:text-neutral-200'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="sm:hidden p-2 text-neutral-400"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={18} strokeWidth={1} /> : <Menu size={18} strokeWidth={1} />}
          </button>
        </nav>

        {/* Mobile Overlay */}
        {mobileOpen && (
          <div className="sm:hidden fixed inset-0 top-20 bg-black z-40 px-8 py-10 animate-in fade-in duration-300">
            <ul className="flex flex-col gap-8">
              {navItems.map(({ path, label }) => (
                <li key={label}>
                  <Link
                    to={path.startsWith('/#') ? '/' : path}
                    onClick={handleNavClick(path)}
                    className="text-xs uppercase tracking-[0.3em] text-neutral-400 active:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {children}
      </main>
    </div>
  )
}