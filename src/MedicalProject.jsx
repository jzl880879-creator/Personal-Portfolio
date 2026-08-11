import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import './medical.css'

const chapters = [
  {
    no:'01', title:'高能量激光治疗仪', en:'HIGH-ENERGY LASER THERAPY',
    intro:'围绕医院、康复中心与临时站点等使用场景，从交互角度、手柄持握、配件收纳到整机视觉语言建立完整设计方案。',
    tags:['竞品调研','人机分析','CMF','整机设计'], analysis:[['竞品调研 / 市场分析','市场主流方案集中在几何极简、圆润柔和与硬朗设备感三类。模块化和功能分区普遍清晰，但产品同质化明显，识别度仍有提升空间。'],['使用场景分析','医院强调快速收纳、频繁操作与维护；康复中心更重视舒适和安全；临时站点要求便于运输和快速清洁。'],['操作方式分析','主要采用站姿操作，屏幕交互角度以 15°—25°为宜。通过减少配件安装步骤与集中收纳，缩短操作前后的准备时间。'],['手柄方式分析','直型手柄采用手指三点发力，角度调整更灵活；曲型手柄依赖全手掌和手腕发力。方案优先保障稳定持握与角度控制。'],['风格趋势发展','行业正从厚重工业设备转向几何简约、紧凑小巧和弱设备化表达，同时保留专业器械的力量感与可信度。']], images:['/medical/page-013.webp','/medical/page-021.webp']
  },
  {
    no:'02', title:'耳温测量仪', en:'EAR TEMPERATURE DEVICE',
    intro:'针对手柄握持、探头角度与一次性耳套安装流程进行优化，以更克制的医疗产品语言提升识别度与使用效率。',
    tags:['握持分析','角度测试','产品造型','配件设计'], analysis:[['竞品调研 / 市场分析','现有产品同质化严重，普遍使用柔和配色和医疗专业语言。交互屏幕是视觉中心，可形成更明确的品牌符号。'],['使用场景分析','产品同时面向家庭非专业用户和医疗机构专业人员，并需覆盖白天、夜晚和儿童睡眠等不同能见度与误操作风险场景。'],['人机尺寸分析','依据成年人手部尺寸，手握区域长度以 85—95mm 为宜；圆柱抓握直径控制在 30—40mm，设计取 33mm 作为舒适性基准。'],['操作角度分析','竞品探头与手柄夹角约为 119°—162°。结合多轮持握测试，114°—128°更适合自然对准耳道并降低手腕负担。'],['设计机会','以功能强化、人机优化和产品辨识度为目标，在智能、亲和与轻专业之间建立更清晰的产品性格。']], images:['/medical/page-041.webp','/medical/page-048.webp']
  },
  {
    no:'03', title:'CBCT口腔扫描仪', en:'DENTAL CBCT SCANNER',
    intro:'从站姿检测、设备升降、悬臂运动与把手细节出发，构建兼顾专业性、亲和力和空间效率的大型医疗设备。',
    tags:['场景分析','运动结构','整机设计','细节深化'], analysis:[['使用场景与角色','设备同时服务操作人员与被测者，需要兼顾站姿、坐姿及不同身高范围，让定位、引导和检测过程保持清晰。'],['运动系统分析','围绕悬臂左右、前后移动与整机升降建立完整运动逻辑，使扫描模块快速到达目标位置，并减少空间占用。'],['操作细节分析','针对不同使用习惯深化把手方案，同时优化下颌托升降、头测与手测模式下的接触区域。'],['风格与结构策略','大型设备采用轻量化分层体块和连续曲面，弱化机械压迫感；结构节点通过深色分区强调专业与可靠。']], images:['/medical/page-056.webp','/medical/page-071.webp']
  },
  {
    no:'04', title:'母胎监护仪', en:'MATERNAL & FETAL MONITOR',
    intro:'面向普通病房、手术室、ICU 与院内转运场景，优化屏幕观察、接口分布、线缆收纳和移动使用体验。',
    tags:['医疗场景','信息交互','接口规划','线缆收纳'], analysis:[['使用场景分析','普通病房、手术室 / ICU 与院内转运具有不同设备密度和注意力状态。方案需同时适配床头桌、台车、壁挂与病床栏杆。'],['操作高度分析','设备工作高度约在 800—1650mm 之间。10°—15°倾斜屏幕配合可调支架，可覆盖普通病房和手术室的主要观察角度。'],['用户与任务分析','护士是主要交互用户，核心任务包括连接导线、设置参数、清洁维护、设备转运和线缆收纳，操作必须直观且低负担。'],['安全与收纳策略','转运状态下注意力通常不在监护仪上，需要降低误触风险；接口与线缆集中规划，帮助快速识别、收纳和维护。']], images:['/medical-hero/monitor.jpg','/medical/page-096.webp']
  }
]

const projectCovers = ['/medical-hero/laser.jpg','/medical-hero/ear.jpg','/medical-hero/cbct.jpg','/medical-hero/monitor.jpg']
const projectRenderImages = [
  ['/medical/laser-ppt/laser-01.png','/medical/laser-ppt/laser-02.png','/medical/laser-ppt/laser-03.png','/medical/laser-ppt/laser-04.png','/medical/laser-ppt/laser-05.png','/medical/laser-ppt/laser-06.png','/medical/laser-ppt/laser-07.png','/medical/laser-ppt/laser-08.png','/medical/laser-ppt/laser-09.png','/medical/laser-ppt/laser-10.png','/medical/laser-ppt/laser-11.png','/medical/laser-ppt/laser-12.png','/medical/laser-ppt/laser-13.png','/medical/laser-ppt/laser-14.png','/medical/laser-ppt/laser-15.png','/medical/laser-ppt/laser-16.png','/medical/laser-ppt/laser-17.png','/medical/laser-ppt/laser-18.png','/medical/laser-ppt/laser-19.png','/medical/laser-ppt/laser-20.png','/medical/laser-ppt/laser-21.png','/medical/laser-ppt/laser-22.png','/medical/laser-ppt/laser-23.png','/medical/laser-ppt/laser-24.png'],
  ['/medical/ear-ppt/ear-01.png','/medical/ear-ppt/ear-02.png','/medical/ear-ppt/ear-03.png','/medical/ear-ppt/ear-04.png','/medical/ear-ppt/ear-05.png','/medical/ear-ppt/ear-06.png','/medical/ear-ppt/ear-07.png','/medical/ear-ppt/ear-08.png','/medical/ear-ppt/ear-09.png','/medical/ear-ppt/ear-10.png','/medical/ear-ppt/ear-11.png','/medical/ear-ppt/ear-12.png','/medical/ear-ppt/ear-13.png','/medical/ear-ppt/ear-14.png','/medical/ear-ppt/ear-15.png','/medical/ear-ppt/ear-16.png','/medical/ear-ppt/ear-17-edited.png','/medical/ear-ppt/ear-18.png','/medical/ear-ppt/ear-19.png','/medical/ear-ppt/ear-20.png','/medical/ear-ppt/ear-21.png','/medical/ear-ppt/ear-22.png','/medical/ear-ppt/ear-23.png','/medical/ear-ppt/ear-24.png'],
  ['/medical/cbct-ppt/cbct-01.png','/medical/cbct-ppt/cbct-02.png','/medical/cbct-ppt/cbct-03.png','/medical/cbct-ppt/cbct-04.png','/medical/cbct-ppt/cbct-05.png','/medical/cbct-ppt/cbct-06.png','/medical/cbct-ppt/cbct-07.png','/medical/cbct-ppt/cbct-08.png','/medical/cbct-ppt/cbct-09.png','/medical/cbct-ppt/cbct-10.png','/medical/cbct-ppt/cbct-11.png','/medical/cbct-ppt/cbct-12.png','/medical/cbct-ppt/cbct-13.png','/medical/cbct-ppt/cbct-14.png','/medical/cbct-ppt/cbct-15.png','/medical/cbct-ppt/cbct-16.png','/medical/cbct-ppt/cbct-17.png','/medical/cbct-ppt/cbct-18.png','/medical/cbct-ppt/cbct-19.png','/medical/cbct-ppt/cbct-20.png','/medical/cbct-ppt/cbct-21.png','/medical/cbct-ppt/cbct-22.png','/medical/cbct-ppt/cbct-23.png','/medical/cbct-ppt/cbct-24.png','/medical/cbct-ppt/cbct-25.png','/medical/cbct-ppt/cbct-26.png','/medical/cbct-ppt/cbct-27.png','/medical/cbct-ppt/cbct-28.png','/medical/cbct-ppt/cbct-29.png'],
  ['/medical/monitor-ppt/monitor-01.png','/medical/monitor-ppt/monitor-02.png','/medical/monitor-ppt/monitor-03.png','/medical/monitor-ppt/monitor-04.png','/medical/monitor-ppt/monitor-05.png','/medical/monitor-ppt/monitor-06.png','/medical/monitor-ppt/monitor-07.png','/medical/monitor-ppt/monitor-08.png','/medical/monitor-ppt/monitor-09.png','/medical/monitor-ppt/monitor-10.png','/medical/monitor-ppt/monitor-11.png','/medical/monitor-ppt/monitor-12.png','/medical/monitor-ppt/monitor-13.png','/medical/monitor-ppt/monitor-14.png','/medical/monitor-ppt/monitor-15.png','/medical/monitor-ppt/monitor-16.png','/medical/monitor-ppt/monitor-17.png','/medical/monitor-ppt/monitor-18.png','/medical/monitor-ppt/monitor-19.png']
]

export default function MedicalProject(){
  const [activeProject,setActiveProject] = useState(null)
  const galleryRef = useRef(null)
  const projectNavRef = useRef(null)
  useEffect(()=>{
    if(activeProject !== null){
      requestAnimationFrame(()=>galleryRef.current?.scrollIntoView({behavior:'smooth',block:'start'}))
    }
  },[activeProject])
  useEffect(()=>{
    const nav = projectNavRef.current
    if(activeProject === null || !nav) return undefined

    let frame = 0
    const updateFloatingNav = () => {
      frame = 0
      if(window.innerWidth <= 700){
        nav.removeAttribute('data-follow')
        nav.style.removeProperty('--floating-left')
        nav.style.removeProperty('--floating-width')
        return
      }

      const inner = nav.querySelector('.medical-floating-nav__inner')
      if(!inner) return
      const rect = nav.getBoundingClientRect()
      const top = 24
      const innerHeight = inner.offsetHeight
      nav.style.setProperty('--floating-left',`${rect.left}px`)
      nav.style.setProperty('--floating-width',`${rect.width}px`)

      if(rect.top > top) nav.dataset.follow = 'start'
      else if(rect.bottom <= top + innerHeight) nav.dataset.follow = 'end'
      else nav.dataset.follow = 'fixed'
    }
    const scheduleUpdate = () => {
      if(!frame) frame = requestAnimationFrame(updateFloatingNav)
    }

    const resizeObserver = new ResizeObserver(scheduleUpdate)
    resizeObserver.observe(nav)
    if(galleryRef.current) resizeObserver.observe(galleryRef.current)
    window.addEventListener('scroll',scheduleUpdate,{passive:true})
    window.addEventListener('resize',scheduleUpdate)
    scheduleUpdate()

    return () => {
      if(frame) cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      window.removeEventListener('scroll',scheduleUpdate)
      window.removeEventListener('resize',scheduleUpdate)
      nav.removeAttribute('data-follow')
      nav.style.removeProperty('--floating-left')
      nav.style.removeProperty('--floating-width')
    }
  },[activeProject])
  const openProject = (event,index) => { event.preventDefault(); setActiveProject(index) }
  const closeFromSelectorBlank = (event) => { if(!event.target.closest('.selector-slat')) setActiveProject(null) }
  return <main className="medical-page" id="top">
    <nav className="medical-nav">
      <a href="/" className="medical-back"><ArrowLeft size={17}/> BACK TO PORTFOLIO</a>
      <span>JIA ZILIANG / 2024—2025</span>
      <span>104 PAGES / INLINE</span>
    </nav>
    <header className="medical-hero">
      <video autoPlay muted loop playsInline preload="metadata" poster="/medical-hero/laser.jpg"><source src="/medical-hero.mp4" type="video/mp4"/></video>
      <div className="medical-veil"/>
      <div className="medical-hero-copy">
        <p>SELECTED CASE / MEDICAL PRODUCT DESIGN</p>
        <h1>MEDICAL<br/><span>PRODUCT DESIGN</span></h1>
        <div className="medical-summary"><strong>医疗设备产品设计</strong><span>从产品调研、人机分析到产品定义与设计落地。</span></div>
      </div>
      <div className="medical-index"><span>2024—2025</span><span>04 PRODUCT SYSTEMS</span><span>104 PAGES</span></div>
    </header>

    <section className="medical-intro medical-shell">
      <span>00 / OVERVIEW</span>
      <h2>让专业设备更清晰，<br/>也更接近真实使用者。</h2>
      <p>本组作品覆盖治疗、检测、扫描与监护场景。设计过程从竞品与使用环境出发，持续验证交互角度、握持方式、运动结构和维护流程，并以统一而克制的视觉语言完成产品表达。</p>
    </section>

    <section className="medical-project-selector" aria-label="医疗产品项目导航" onClick={closeFromSelectorBlank}>
      <header className="selector-heading medical-shell" onClick={(event)=>{if(event.target===event.currentTarget)setActiveProject(null)}} title="点击空白处收起效果图"><span>01 / SELECTED PROJECTS</span><p>选择项目，向下查看完整设计过程与渲染图</p></header>
      <div className="selector-slats medical-shell">
        {chapters.map((chapter,index)=><a className={`selector-slat ${activeProject===index?'is-active':''}`} href={`#render-project-${chapter.no}`} onClick={(event)=>openProject(event,index)} key={chapter.no}>
          <img src={projectCovers[index]} alt=""/>
          <div className="selector-shade"/>
          <div className="selector-number">{chapter.no}</div>
          <div className="selector-copy"><span>{chapter.en}</span><h2>{chapter.title}</h2><p>打开查看产品详情 <ArrowUpRight size={16}/></p></div>
        </a>)}
      </div>
    </section>
    {activeProject !== null && <section className="medical-render-viewer" ref={galleryRef} id="medical-render-gallery">
      <div className="render-viewer-layout medical-shell">
        <aside className="render-project-nav medical-floating-nav" ref={projectNavRef}>
          <div className="medical-floating-nav__inner">
            <nav>{chapters.map((chapter,index)=><button className={activeProject===index?'active':''} onClick={()=>setActiveProject(index)} key={chapter.no}><i>{chapter.no}</i><b>{chapter.title}</b></button>)}</nav>
            <a href="#top">返回页面顶部 <ArrowUpRight size={14}/></a>
          </div>
        </aside>
        <div className="render-project-content" id={`render-project-${chapters[activeProject].no}`}>
          <header><span>{chapters[activeProject].no} / 04</span><p>{chapters[activeProject].en}</p><h2>{chapters[activeProject].title}</h2><div>{chapters[activeProject].intro}</div></header>
          <div className="render-image-wall">{projectRenderImages[activeProject].map((src,index)=><figure key={src}><img src={src} alt={`${chapters[activeProject].title} 渲染图 ${index+1}`} loading={index===0?'eager':'lazy'}/><figcaption>{String(index+1).padStart(2,'0')} / {String(projectRenderImages[activeProject].length).padStart(2,'0')}</figcaption></figure>)}</div>
        </div>
      </div>
    </section>}    <footer className="medical-footer"><a href="/"><ArrowLeft/> 返回个人作品集</a><span>© 2026 JIA ZILIANG</span></footer>
  </main>
}
