import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import './medical.css'

const slideRange = (start,end) => Array.from({length:end-start+1},(_,index)=>`/product-management/slides/slide-${String(start+index).padStart(2,'0')}.png`)

const projects = [
  { no:'01', title:'便携式汽车充气泵', en:'PORTABLE TIRE INFLATOR', intro:'从行业规模、竞品格局、使用场景与用户痛点出发，明确性能、续航、交互与便携性的产品目标，并完成从概念语言到整机细节的设计推进。', cover:'/product-management/slides/slide-16.png', images:slideRange(10,22) },
  { no:'02', title:'户外多功能充气泵', en:'OUTDOOR MULTIFUNCTIONAL PUMP', intro:'围绕精致露营、家庭亲子与户外轻量化需求，将充气、照明与驱蚊功能整合为一体，建立多场景产品定位、功能架构与完整设计方案。', cover:'/product-management/slides/slide-30.png', images:slideRange(25,37) },
  { no:'03', title:'智能停车牌气压表', en:'SMART PRIVACY PARKING CARD', intro:'针对传统号码牌隐私泄露、识别效率和耐用性问题，结合二维码、NFC 与墨水屏方案，构建兼顾车主隐私、沟通效率和品质感的智能产品。', cover:'/product-management/slides/slide-45.png', images:slideRange(39,50) },
  { no:'04', title:'智能停车牌充气泵', en:'MODULAR SMART TOOL SYSTEM', intro:'以模块化组合和磁吸辅助对位为核心，将显示、检测与充气功能拆分重组，探索多任务工具的组合方式、交互路径与产品系统延展性。', cover:'/product-management/slides/slide-54.png', images:slideRange(53,60) },
]

export default function ProductManagement(){
  const [activeProject,setActiveProject] = useState(null)
  const galleryRef = useRef(null)
  const projectNavRef = useRef(null)
  useEffect(()=>{if(activeProject!==null)requestAnimationFrame(()=>galleryRef.current?.scrollIntoView({behavior:'smooth',block:'start'}))},[activeProject])
  useEffect(()=>{
    const nav=projectNavRef.current
    if(activeProject===null||!nav)return undefined
    let frame=0
    const updateFloatingNav=()=>{
      frame=0
      if(window.innerWidth<=700){
        nav.removeAttribute('data-follow')
        nav.style.removeProperty('--floating-left')
        nav.style.removeProperty('--floating-width')
        return
      }
      const inner=nav.querySelector('.medical-floating-nav__inner')
      if(!inner)return
      const rect=nav.getBoundingClientRect()
      const top=24
      const innerHeight=inner.offsetHeight
      nav.style.setProperty('--floating-left',`${rect.left}px`)
      nav.style.setProperty('--floating-width',`${rect.width}px`)
      if(rect.top>top)nav.dataset.follow='start'
      else if(rect.bottom<=top+innerHeight)nav.dataset.follow='end'
      else nav.dataset.follow='fixed'
    }
    const scheduleUpdate=()=>{if(!frame)frame=requestAnimationFrame(updateFloatingNav)}
    const resizeObserver=new ResizeObserver(scheduleUpdate)
    resizeObserver.observe(nav)
    if(galleryRef.current)resizeObserver.observe(galleryRef.current)
    window.addEventListener('scroll',scheduleUpdate,{passive:true})
    window.addEventListener('resize',scheduleUpdate)
    scheduleUpdate()
    return()=>{
      if(frame)cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      window.removeEventListener('scroll',scheduleUpdate)
      window.removeEventListener('resize',scheduleUpdate)
      nav.removeAttribute('data-follow')
      nav.style.removeProperty('--floating-left')
      nav.style.removeProperty('--floating-width')
    }
  },[activeProject])
  const openProject=(event,index)=>{event.preventDefault();setActiveProject(index)}
  const closeFromBlank=(event)=>{if(!event.target.closest('.selector-slat'))setActiveProject(null)}
  const active=activeProject===null?null:projects[activeProject]
  return <main className="medical-page product-management-page" id="top">
    <nav className="medical-nav"><a href="/" className="medical-back"><ArrowLeft size={17}/> 返回作品集</a><span>JIA ZILIANG / PRODUCT MANAGEMENT</span><span>47 PAGES / INLINE</span></nav>
    <header className="medical-hero product-management-hero">
      <video autoPlay muted loop playsInline preload="metadata" poster="/product-management/slides/slide-03.png"><source src="/product-management-hover.mp4" type="video/mp4"/></video>
      <div className="medical-veil"/>
      <div className="medical-hero-copy"><p>SELECTED CASE / PRODUCT MANAGEMENT</p><h1>PRODUCT<br/><span>MANAGEMENT</span></h1><div className="medical-summary"><strong>产品立项与设计推进</strong><span>从市场洞察、用户研究与机会判断，到产品定义、概念设计和方案落地。</span></div></div>
      <div className="medical-index"><span>2025—2026</span><span>04 PRODUCT SYSTEMS</span><span>47 PAGES</span></div>
    </header>
    <section className="medical-intro medical-shell"><span>00 / OVERVIEW</span><h2>把洞察转化为判断，<br/>再把判断推进为产品。</h2><p>本组方案围绕车载出行、户外露营、隐私沟通与模块化工具展开。通过市场规模、竞品、场景与用户痛点分析识别真实机会，进一步建立产品定位、功能架构、设计原则与落地方案。</p></section>
    <section className="medical-project-selector" aria-label="产品立项项目导航" onClick={closeFromBlank}>
      <header className="selector-heading medical-shell" title="点击空白处收起效果图"><span>01 / SELECTED PROJECTS</span><p>选择项目，向下查看完整调研、定义与设计推进过程</p></header>
      <div className="selector-slats medical-shell">{projects.map((project,index)=><a className={`selector-slat ${activeProject===index?'is-active':''}`} href={`#pm-project-${project.no}`} onClick={(event)=>openProject(event,index)} key={project.no}><img src={project.cover} alt="" loading="lazy" decoding="async"/><div className="selector-shade"/><div className="selector-number">{project.no}</div><div className="selector-copy"><span>{project.en}</span><h2>{project.title}</h2><p>打开查看产品详情 <ArrowUpRight size={16}/></p></div></a>)}</div>
    </section>
    {active&&<section className="medical-render-viewer" ref={galleryRef} id="product-management-gallery"><div className="render-viewer-layout medical-shell"><aside className="render-project-nav medical-floating-nav" ref={projectNavRef}><div className="medical-floating-nav__inner"><nav>{projects.map((project,index)=><button className={activeProject===index?'active':''} onClick={()=>setActiveProject(index)} key={project.no}><i>{project.no}</i><b>{project.title}</b></button>)}</nav><a href="#top">返回页面顶部 <ArrowUpRight size={14}/></a></div></aside><div className="render-project-content" id={`pm-project-${active.no}`}><header><span>{active.no} / 04</span><p>{active.en}</p><h2>{active.title}</h2><div>{active.intro}</div></header><div className="render-image-wall">{active.images.map((src,index)=><figure key={src}><img src={src} alt={`${active.title} 项目页面 ${index+1}`} loading={index===0?'eager':'lazy'} decoding="async"/><figcaption>{String(index+1).padStart(2,'0')} / {String(active.images.length).padStart(2,'0')}</figcaption></figure>)}</div></div></div></section>}
    <footer className="medical-footer"><a href="/"><ArrowLeft/> 返回个人作品集</a><span>© 2026 JIA ZILIANG</span></footer>
  </main>
}







