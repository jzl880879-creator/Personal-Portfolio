import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import './medical.css'
import './industrial.css'

const imageRange = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, index) =>
    `/industrial-3c/industrial-${String(start + index).padStart(2, '0')}.png`
  )

const projects = [
  {
    no: '01',
    title: '游戏手柄',
    en: 'GAME CONTROLLER',
    intro: '围绕握持舒适度、按键操作、功能布局与产品识别度展开设计，在连续使用场景中平衡人机体验与视觉表达。',
    cover: '/industrial-3c/industrial-02.png',
    images: imageRange(2, 8),
  },
  {
    no: '02',
    title: '多功能电竞椅',
    en: 'MULTIFUNCTIONAL GAMING CHAIR',
    intro: '从坐姿支撑、功能集成与电竞使用场景出发，探索兼顾舒适性、包裹感和设备属性的产品方案。',
    cover: '/industrial-3c/industrial-12.png',
    images: imageRange(10, 19),
  },
  {
    no: '03',
    title: '机场跑道检测',
    en: 'RUNWAY INSPECTION SYSTEM',
    intro: '面向机场跑道检测与维护场景，梳理设备使用流程、结构关系和专业视觉语言，提升识别与操作效率。',
    cover: '/industrial-3c/industrial-24.png',
    images: imageRange(21, 28),
  },
  {
    no: '04',
    title: '智能收集机器人',
    en: 'INTELLIGENT COLLECTION ROBOT',
    intro: '围绕自动作业、环境适应与设备维护需求，完成从功能结构到整机形态的系统化设计表达。',
    cover: '/industrial-3c/industrial-30.png',
    images: imageRange(30, 39),
  },
  {
    no: '05',
    title: '家用扫地机器人',
    en: 'HOME CLEANING ROBOT',
    intro: '从家庭清洁动线、使用习惯与产品收纳出发，优化整机形态、功能细节和家居环境中的视觉融入。',
    cover: '/industrial-3c/industrial-44.png',
    images: imageRange(41, 52),
  },
]

export default function IndustrialProject() {
  const [activeProject, setActiveProject] = useState(null)
  const galleryRef = useRef(null)
  const projectNavRef = useRef(null)

  useEffect(() => {
    if (activeProject !== null) {
      requestAnimationFrame(() =>
        galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      )
    }
  }, [activeProject])

  useEffect(() => {
    const nav = projectNavRef.current
    if (activeProject === null || !nav) return undefined

    let frame = 0
    const updateFloatingNav = () => {
      frame = 0
      if (window.innerWidth <= 700) {
        nav.removeAttribute('data-follow')
        nav.style.removeProperty('--floating-left')
        nav.style.removeProperty('--floating-width')
        return
      }

      const inner = nav.querySelector('.industrial-floating-nav__inner')
      if (!inner) return

      const rect = nav.getBoundingClientRect()
      const top = 24
      const innerHeight = inner.offsetHeight
      nav.style.setProperty('--floating-left', `${rect.left}px`)
      nav.style.setProperty('--floating-width', `${rect.width}px`)

      if (rect.top > top) nav.dataset.follow = 'start'
      else if (rect.bottom <= top + innerHeight) nav.dataset.follow = 'end'
      else nav.dataset.follow = 'fixed'
    }

    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateFloatingNav)
    }

    const resizeObserver = new ResizeObserver(scheduleUpdate)
    resizeObserver.observe(nav)
    if (galleryRef.current) resizeObserver.observe(galleryRef.current)
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    scheduleUpdate()

    return () => {
      if (frame) cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      nav.removeAttribute('data-follow')
      nav.style.removeProperty('--floating-left')
      nav.style.removeProperty('--floating-width')
    }
  }, [activeProject])

  const openProject = (event, index) => {
    event.preventDefault()
    setActiveProject(index)
  }

  const closeFromSelectorBlank = (event) => {
    if (!event.target.closest('.selector-slat')) setActiveProject(null)
  }

  return (
    <main className="medical-page industrial-page" id="top">
      <nav className="medical-nav">
        <a href="/" className="medical-back"><ArrowLeft size={17}/> BACK TO PORTFOLIO</a>
        <span>JIA ZILIANG / 2021—2023</span>
        <span>53 PAGES / INLINE</span>
      </nav>

      <header className="medical-hero industrial-hero">
        <video autoPlay muted loop playsInline preload="metadata" poster="/industrial-3c/industrial-02.png"><source src="/industrial-hero.mp4" type="video/mp4"/></video>
        <div className="medical-veil"/>
        <div className="medical-hero-copy">
          <p>SELECTED CASE / INDUSTRIAL PRODUCT DESIGN</p>
          <h1>INDUSTRIAL<br/><span>PRODUCT DESIGN</span></h1>
          <div className="medical-summary">
            <strong>电子3C多品类设计</strong>
            <span>从人机体验、功能结构到产品造型与设计落地。</span>
          </div>
        </div>
        <div className="medical-index">
          <span>2021—2023</span><span>05 PRODUCT SYSTEMS</span><span>53 PAGES</span>
        </div>
      </header>

      <section className="medical-intro medical-shell">
        <span>00 / OVERVIEW</span>
        <h2>跨越不同品类，<br/>建立清晰的产品逻辑。</h2>
        <p>本组作品覆盖消费电子、电竞装备、专业检测设备与智能机器人。设计从真实使用场景与功能需求出发，在人机体验、结构实现和产品视觉之间建立统一而有辨识度的解决方案。</p>
      </section>

      <section className="medical-project-selector" aria-label="电子3C项目导航" onClick={closeFromSelectorBlank}>
        <header className="selector-heading medical-shell" onClick={(event) => {
          if (event.target === event.currentTarget) setActiveProject(null)
        }} title="点击空白处收起效果图">
          <span>01 / SELECTED PROJECTS</span>
          <p>选择项目，向下查看完整设计过程与渲染图</p>
        </header>
        <div className="selector-slats medical-shell">
          {projects.map((project, index) => (
            <a
              className={`selector-slat ${activeProject === index ? 'is-active' : ''}`}
              href={`#industrial-project-${project.no}`}
              onClick={(event) => openProject(event, index)}
              key={project.no}
            >
              <img src={project.cover} alt=""/>
              <div className="selector-shade"/>
              <div className="selector-number">{project.no}</div>
              <div className="selector-copy">
                <span>{project.en}</span>
                <h2>{project.title}</h2>
                <p>打开查看产品详情 <ArrowUpRight size={16}/></p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {activeProject !== null && (
        <section className="medical-render-viewer" ref={galleryRef} id="industrial-render-gallery">
          <div className="render-viewer-layout medical-shell">
            <aside className="render-project-nav industrial-floating-nav" ref={projectNavRef}>
              <div className="industrial-floating-nav__inner">
                <nav>
                  {projects.map((project, index) => (
                    <button
                      className={activeProject === index ? 'active' : ''}
                      onClick={() => setActiveProject(index)}
                      key={project.no}
                    >
                      <i>{project.no}</i><b>{project.title}</b>
                    </button>
                  ))}
                </nav>
                <a href="#top">返回页面顶部 <ArrowUpRight size={14}/></a>
              </div>
            </aside>
            <div className="render-project-content" id={`industrial-project-${projects[activeProject].no}`}>
              <header>
                <span>{projects[activeProject].no} / 05</span>
                <p>{projects[activeProject].en}</p>
                <h2>{projects[activeProject].title}</h2>
                <div>{projects[activeProject].intro}</div>
              </header>
              <div className="render-image-wall">
                {projects[activeProject].images.map((src, index) => (
                  <figure key={src}>
                    <img
                      src={src}
                      alt={`${projects[activeProject].title} 方案图 ${index + 1}`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    <figcaption>
                      {String(index + 1).padStart(2, '0')} / {String(projects[activeProject].images.length).padStart(2, '0')}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="medical-footer">
        <a href="/"><ArrowLeft/> 返回个人作品集</a>
        <span>© 2026 JIA ZILIANG</span>
      </footer>
    </main>
  )
}
