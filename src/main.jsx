import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowUpRight, Mail, MapPin, Phone, Sparkles, X } from 'lucide-react'
import './styles.css'
import MedicalProject from './MedicalProject.jsx'
import LaserProject from './LaserProject.jsx'
import IndustrialProject from './IndustrialProject.jsx'
import InsightsPage from './InsightsPage.jsx'
import ResumePage from './ResumePage.jsx'
import ProductManagement from './ProductManagement.jsx'
import DecisionPage from './DecisionPage.jsx'
import ValidationPage from './ValidationPage.jsx'
import DeliveryPage from './DeliveryPage.jsx'
import ProductDefinitionPage from './ProductDefinitionPage.jsx'
import IndustrialDesignPage from './IndustrialDesignPage.jsx'
import AIExpressionPage from './AIExpressionPage.jsx'
import ProjectOverviewPage from './ProjectOverviewPage.jsx'
import useMediaMode from './useMediaMode.js'

const profile = {
  name: '贾子良', role: '产品设计师 / 产品经理',
  intro: '产品设计专业出身，拥有约 7 年产品与工业设计经验。经历覆盖电子 3C、文创、设备及医疗产品，从产品调研、立项判断到设计落地，持续在用户需求、商业目标与制造实现之间建立清晰连接。',
  location: 'China · Open to opportunities', email: '1270137399@qq.com', phone: '19806700238',
  stats: [['07', '年产品经验'], ['04', '段核心经历'], ['05', '类产品领域'], ['2019', '职业起点']],
}
const projects = [
  { id:'03', displayNo:'01', type:'INDUSTRIAL DESIGN · 2019—2024', title:'电子3C多品类设计', desc:'先后服务于智猫创新与灵猫设计集团，参与电子 3C、文创及设备类产品设计，积累从概念到落地的多品类经验。', metric:'3C / 文创 / 设备', theme:'orbit' },
  { id:'02', displayNo:'02', type:'MEDICAL DESIGN · 2024—2025', title:'医疗设备产品设计', desc:'在东象设计担任设计主管，负责医疗设备产品设计及产品调研，平衡专业场景、使用体验与实现约束。', metric:'设计管理 / 产品调研', theme:'grid' },
  { id:'01', displayNo:'03', type:'PRODUCT MANAGEMENT · 2025—2026', title:'产品立项与设计推进', desc:'在骑记科技担任产品经理，围绕产品机会、立项判断与设计落地推进完整产品流程。', metric:'产品立项 / 产品设计', theme:'signal' },
]
const strengths = [
  { no:'01', title:'产品定义', en:'PRODUCT DEFINITION', body:'从调研与需求中识别产品机会，参与产品立项，在用户价值、市场空间和实现成本之间建立判断。', tags:['产品调研','需求洞察','产品立项'] },
  { no:'02', title:'工业设计', en:'INDUSTRIAL DESIGN', body:'具备电子 3C、文创、设备和医疗产品经验，从造型语言、结构逻辑到产品表达形成完整设计方案。', tags:['Rhino','Core','KeyShot'] },
  { no:'03', title:'AI 与表达', en:'AI & VISUALIZATION', body:'将传统设计软件与生成式 AI 工具结合，提高概念探索、视觉表达和团队沟通的效率与质量。', tags:['Midjourney','Stable Diffusion','PromeAI','Codex'] },
]
const methodSteps = [
  { no:'01', en:'DISCOVER', title:'洞察与定义', body:'从用户、场景与竞品中识别真实问题，完成需求拆解与产品机会判断。', tags:['用户研究','竞品分析','需求定义'] },
  { no:'02', en:'DECIDE', title:'立项与取舍', body:'平衡用户价值、商业目标与实现成本，明确产品定位、范围和推进优先级。', tags:['机会判断','产品定位','立项规划'] },
  { no:'03', en:'DESIGN', title:'设计与验证', body:'通过工业设计、交互体验和原型验证，将抽象需求转化为清晰可测试的方案。', tags:['工业设计','体验设计','方案验证'] },
  { no:'04', en:'DELIVER', title:'推进与落地', body:'连接研发、供应链与业务团队，持续处理约束、跟进细节并推动产品实现。', tags:['跨团队协作','供应链沟通','设计落地'] },
]
const methodPreviewAssets = {
  '01': { shots:[{video:'/insight-preview-01.mp4'},{video:'/insight-preview-02.mp4'},{video:'/insight-preview-03.mp4'}] },
  '02': { shots:[{video:'/decision-planning-01.mp4'},{video:'/decision-planning-02.mp4'},{video:'/decision-planning-03.mp4'}] },
  '03': { shots:[{video:'/validation-preview-01.mp4'},{video:'/validation-preview-02.mp4'},{video:'/validation-preview-03.mp4'}] },
  '04': { shots:[{video:'/delivery-preview-01.mp4'},{video:'/delivery-preview-02.mp4'},{video:'/delivery-preview-03.mp4'}] },
}
const heroVideoShots = [
  { video:'/home-product-design-sketch.mp4', poster:'/home-product-design-sketch-poster.jpg', label:'Product concept sketching' },
  { video:'/home-product-design-fabrication.mp4', label:'Precision prototype fabrication' },
  { video:'/home-product-design-prototype.mp4', label:'Rapid prototype validation' },
]
function HeroVideoSequence(){
  const mediaMode = useMediaMode()
  const [activeShot,setActiveShot] = useState(0)
  const videoRefs = useRef([])
  useEffect(()=>{
    if(mediaMode!=='full') return
    const timer = window.setInterval(()=>setActiveShot(index=>(index+1)%heroVideoShots.length),6500)
    return()=>window.clearInterval(timer)
  },[mediaMode])
  useEffect(()=>{
    videoRefs.current.forEach((video,index)=>{
      if(!video) return
      if(index===activeShot){
        try{video.currentTime=.12}catch{}
        video.play().catch(()=>{})
      }else{
        video.pause()
      }
    })
  },[activeShot])
  return <div className="hero-video-layer" aria-hidden="true" data-active-shot={activeShot+1}>
    {heroVideoShots.slice(0,mediaMode==='full'?heroVideoShots.length:1).map((shot,index)=><video
      ref={node=>{videoRefs.current[index]=node}}
      className={index===activeShot?'is-active':''}
      key={shot.video}
      autoPlay={index===0}
      muted
      loop
      playsInline
      preload={index===0?'metadata':'none'}
      poster={shot.poster}
      aria-label={shot.label}
      onCanPlay={event=>index===activeShot&&event.currentTarget.play().catch(()=>{})}
    ><source src={shot.video} type="video/mp4"/></video>)}
  </div>
}
function LazyBackgroundVideo({className,src}){
  const videoRef = useRef(null)
  const [shouldLoad,setShouldLoad] = useState(false)
  const mediaMode = useMediaMode()
  useEffect(()=>{
    const node = videoRef.current
    if(!node || mediaMode!=='full') {
      setShouldLoad(false)
      return
    }
    const observer = new IntersectionObserver(entries=>{
      if(entries.some(entry=>entry.isIntersecting)){
        setShouldLoad(true)
        observer.disconnect()
      }
    },{rootMargin:'320px 0px'})
    observer.observe(node)
    return()=>observer.disconnect()
  },[mediaMode])
  return <video ref={videoRef} className={className} autoPlay={shouldLoad} muted loop playsInline preload="none" aria-hidden="true">{shouldLoad&&<source src={src} type="video/mp4"/>}</video>
}
function CursorGlow(){const ref=useRef(null);useEffect(()=>{const move=e=>{ref.current?.style.setProperty('--x',`${e.clientX}px`);ref.current?.style.setProperty('--y',`${e.clientY}px`)};window.addEventListener('pointermove',move);return()=>window.removeEventListener('pointermove',move)},[]);return <div ref={ref} className="cursor-glow"/>}
function Mark(){return <a className="mark mark-logo" href="#top" aria-label="Jia Ziliang，回到首页"><span className="mark-monogram" aria-hidden="true"><b>J</b><b>Z</b></span><i className="mark-dot" aria-hidden="true"/></a>}
function App(){
  const [resumeOpen,setResumeOpen] = useState(false)
  const productPreviewRef = useRef(null)
  const medicalPreviewRef = useRef(null)
  const industrialPreviewRef = useRef(null)
  useEffect(()=>{
    const scrollRevealSelector = [
      '.method > .section-head',
      '.method > .method-hero',
      '.method .method-steps article',
      '.projects > .section-head',
      '.projects .project-card',
      '.strengths > .section-head',
      '.strengths .strength-card',
      '.contact .eyebrow',
      '.contact h2',
      '.contact .contact-links',
      '.contact .contact-wechat'
    ].join(',')
    const items = [...document.querySelectorAll(scrollRevealSelector)]
    items.forEach((item,index)=>{
      item.classList.add('scroll-reveal-item')
      item.style.setProperty('--reveal-order',String(index % 4))
    })
    const backgrounds = [...document.querySelectorAll('.method-section-video')]
    backgrounds.forEach(item=>item.classList.add('scroll-reveal-background'))
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        entry.target.classList.toggle('is-scroll-visible',entry.isIntersecting)
      })
    },{threshold:.12,rootMargin:'0px 0px -8% 0px'})
    items.concat(backgrounds).forEach(item=>observer.observe(item))
    return()=>observer.disconnect()
  },[])
  const playInsightPreview = event => {
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(hover: none), (pointer: coarse)').matches) return
    const card = event.currentTarget
    const videos = [...card.querySelectorAll('.method-card-video')]
    if(!videos.length) return
    clearInterval(card._methodPreviewTimer)
    videos.forEach((video,index)=>{
      if(video.readyState>0) video.currentTime = 0
      video.classList.toggle('is-active',index===0)
      if(index===0) video.play().catch(()=>{})
      else video.pause()
    })
    if(videos.length>1){
      let activeIndex = 0
      card._methodPreviewTimer = setInterval(()=>{
        videos[activeIndex].pause()
        videos[activeIndex].classList.remove('is-active')
        activeIndex = (activeIndex + 1) % videos.length
        if(videos[activeIndex].readyState>0) videos[activeIndex].currentTime = 0
        videos[activeIndex].classList.add('is-active')
        videos[activeIndex].play().catch(()=>{})
      },2200)
    }
  }
  const resetInsightPreview = event => {
    const card = event.currentTarget
    const videos = [...card.querySelectorAll('.method-card-video')]
    clearInterval(card._methodPreviewTimer)
    card._methodPreviewTimer = null
    videos.forEach((video,index)=>{
      video.pause()
      if(video.readyState>0) video.currentTime = 0.52
      video.classList.toggle('is-active',index===0)
    })
  }
  const playProductPreview = () => {
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const video = productPreviewRef.current
    if(!video) return
    video.currentTime = 0
    video.play().catch(()=>{})
  }
  const resetProductPreview = () => {
    const video = productPreviewRef.current
    if(!video) return
    video.pause()
    if(video.readyState>0) video.currentTime = 0.55
  }
  const playIndustrialPreview = () => {
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    industrialPreviewRef.current?.play().catch(()=>{})
  }
  const resetIndustrialPreview = () => {
    const video = industrialPreviewRef.current
    if(!video) return
    video.pause()
    if(video.readyState>0) video.currentTime = 0
  }
  const playMedicalPreview = () => {
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    medicalPreviewRef.current?.play().catch(()=>{})
  }
  const resetMedicalPreview = () => {
    const video = medicalPreviewRef.current
    if(!video) return
    video.pause()
    if(video.readyState>0) video.currentTime = 0
  }
  useEffect(()=>{
    const nodes=[...document.querySelectorAll('[data-reveal]')]
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
    }),{threshold:.18})
    nodes.forEach(node=>observer.observe(node))
    return()=>observer.disconnect()
  },[])
  useEffect(()=>{
    document.body.style.overflow = resumeOpen ? 'hidden' : ''
    const closeOnEscape = event => event.key === 'Escape' && setResumeOpen(false)
    window.addEventListener('keydown',closeOnEscape)
    return()=>{document.body.style.overflow='';window.removeEventListener('keydown',closeOnEscape)}
  },[resumeOpen])
  return <><CursorGlow/><main id="top">
<section className="hero hero-index">
<HeroVideoSequence/>
<nav className="nav shell"><Mark/><div className="nav-links"><a href="#method">[ 工作方法 ]</a><a href="#work">[ 精选项目 ]</a><a href="#strengths">[ 职业能力 ]</a></div><a className="hero-menu" href={`mailto:${profile.email}`}>LET'S TALK <ArrowUpRight size={15}/></a></nav>
<div className="hero-stage shell">
  <h1 className="index-title" aria-label="PERSONAL PORTFOLIO"><span>PERSONAL</span><span>PORTFOLIO</span></h1>
  <div className="hero-count"><i>///</i><strong>07<sup>+</sup></strong><span>YEARS IN PRODUCT<br/>DESIGN & MANAGEMENT</span></div>
  <div className="hero-statement"><p><em>PRODUCT</em> IS NOT<br/>DECORATION</p><span>产品不止于形式，<br/>更关乎真实问题与落地价值。</span></div>
  <div className="hero-actions"><a className="hero-cta" href="/resume"><span>查看简历</span><ArrowUpRight size={22}/></a><a className="hero-cta hero-overview" href="/projects"><span>项目总览</span><ArrowUpRight size={22}/></a></div>
  <div className="hero-role">PRODUCT DESIGNER <b>×</b> PRODUCT MANAGER</div>
</div>
</section>
<section className="section method shell" id="method"><LazyBackgroundVideo className="method-section-video" src="/method-laser-flow.mp4"/><header className="section-head"><span>01 / WORKING METHOD</span><p>从判断到落地，建立完整产品路径。</p></header><div className="method-hero"><div className="method-map" aria-hidden="true"><div className="method-axis"/><div className="method-core"><span>PRODUCT</span><b>VALUE</b></div>{methodSteps.map(step=><div className={`method-node node-${step.no}`} key={step.no}><i>{step.no}</i><span>{step.en}</span></div>)}</div><div className="method-thesis"><p>HOW I BUILD PRODUCTS</p><h2>从模糊问题，<br/>到可落地产品。</h2><div>以产品设计为基础，连接用户需求、商业判断、设计验证与项目落地。既关注产品应该做什么，也持续推进它如何被真正实现。</div></div></div><div className="method-steps">{methodSteps.map(step=><article key={step.no} className={step.no==='01'?'method-insight-link':step.no==='02'?'method-decision-link':step.no==='03'?'method-validation-link':step.no==='04'?'method-delivery-link':undefined} role={['01','02','03','04'].includes(step.no)?'link':undefined} tabIndex={['01','02','03','04'].includes(step.no)?0:undefined} onMouseEnter={playInsightPreview} onMouseLeave={resetInsightPreview} onFocus={playInsightPreview} onBlur={resetInsightPreview} onClick={()=>step.no==='01'?window.location.assign('/insights'):step.no==='02'?window.location.assign('/decisions'):step.no==='03'?window.location.assign('/validation'):step.no==='04'&&window.location.assign('/delivery')} onKeyDown={event=>event.key==='Enter'&&(step.no==='01'?window.location.assign('/insights'):step.no==='02'?window.location.assign('/decisions'):step.no==='03'?window.location.assign('/validation'):step.no==='04'&&window.location.assign('/delivery'))}>{methodPreviewAssets[step.no]?.shots?<div className={'method-video-stack method-video-stack-'+step.no} aria-hidden="true">{methodPreviewAssets[step.no].shots.map((shot,index)=><video className={'method-card-video method-card-video-'+step.no+(index===0?' is-active':'')} key={shot.video} muted loop playsInline preload="none" poster={shot.poster}><source src={shot.video} type="video/mp4"/></video>)}</div>:methodPreviewAssets[step.no]&&<video className={'method-card-video method-card-video-'+step.no+' is-active'} muted loop playsInline preload="metadata" poster={methodPreviewAssets[step.no].poster} onLoadedData={event=>{if(event.currentTarget.paused&&event.currentTarget.currentTime<0.5)event.currentTarget.currentTime=0.52}} aria-hidden="true"><source src={methodPreviewAssets[step.no].video} type="video/mp4"/></video>}<div className="method-step-top"><span>{step.no}</span><i>{step.en}</i></div><h3>{step.title}</h3><p>{step.body}</p><div>{step.tags.map(tag=><b key={tag}>{tag}</b>)}</div></article>)}</div></section>
<section className="section projects shell" id="work"><header className="section-head"><span>02 / SELECTED WORK</span><h2>精选项目</h2></header><div className="project-list">{projects.map((item,index)=><article className={`project-card ${item.theme}`} key={item.id} onMouseEnter={item.id==='01'?playProductPreview:item.id==='02'?playMedicalPreview:item.id==='03'?playIndustrialPreview:undefined} onMouseLeave={item.id==='01'?resetProductPreview:item.id==='02'?resetMedicalPreview:item.id==='03'?resetIndustrialPreview:undefined} onFocus={item.id==='01'?playProductPreview:item.id==='02'?playMedicalPreview:item.id==='03'?playIndustrialPreview:undefined} onBlur={item.id==='01'?resetProductPreview:item.id==='02'?resetMedicalPreview:item.id==='03'?resetIndustrialPreview:undefined} onClick={()=>item.id==='01'?window.location.assign('/product-management'):item.id==='02'?window.location.assign('/medical'):item.id==='03'&&window.location.assign('/industrial')}><div className="project-art" aria-hidden="true">{item.id==='01'&&<video ref={productPreviewRef} className="project-preview-video" muted playsInline loop preload="none" poster="/product-management-poster.jpg" onLoadedData={event=>{if(event.currentTarget.paused&&event.currentTarget.currentTime<0.5)event.currentTarget.currentTime=0.55}}><source src="/product-management-hover.mp4" type="video/mp4"/></video>}{item.id==='02'&&<video ref={medicalPreviewRef} className="project-preview-video" muted playsInline loop preload="none" poster="/medical-card-preview.jpg"><source src="/medical-card-preview.mp4" type="video/mp4"/></video>}{item.id==='03'&&<video ref={industrialPreviewRef} className="project-preview-video" muted playsInline loop preload="none" poster="/industrial-card-preview.jpg"><source src="/industrial-card-preview.mp4" type="video/mp4"/></video>}<div className="visual-core"/><div className="visual-line one"/><div className="visual-line two"/></div><div className="project-copy"><div className="project-top"><span>{item.type}</span><span>{item.displayNo}</span></div><h3>{item.title.split('\n').map((line,i)=><React.Fragment key={line}>{line}{i===0&&<br/>}</React.Fragment>)}</h3><p>{item.desc}</p><div className="project-foot"><strong>{item.metric}</strong><button onClick={()=>item.id==='01'?window.location.assign('/product-management'):item.id==='02'?window.location.assign('/medical'):item.id==='03'&&window.location.assign('/industrial')} aria-label={`查看项目 ${item.title}`}> <ArrowUpRight/></button></div></div></article>)}</div></section>
<section className="section strengths shell" id="strengths"><header className="section-head"><span>03 / CAPABILITIES</span><h2>思考全局，也打磨细节。</h2></header><div className="strength-grid">{strengths.map(item=><article className={`strength-card strength-${item.no} ${['01','02','03'].includes(item.no)?'is-link':''}`} key={item.no} role={['01','02','03'].includes(item.no)?'link':undefined} tabIndex={['01','02','03'].includes(item.no)?0:undefined} onClick={()=>item.no==='01'?window.location.assign('/product-definition'):item.no==='02'?window.location.assign('/industrial-design'):item.no==='03'&&window.location.assign('/ai-expression')} onKeyDown={event=>event.key==='Enter'&&(item.no==='01'?window.location.assign('/product-definition'):item.no==='02'?window.location.assign('/industrial-design'):item.no==='03'&&window.location.assign('/ai-expression'))}><div className="strength-no">{item.no}</div><div><p className="strength-en">{item.en}</p><h3>{item.title}</h3><p className="strength-body">{item.body}</p></div><div className="tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div></article>)}</div></section>
<footer className="contact" id="contact"><div className="contact-inner shell"><p className="eyebrow">LET'S CREATE SOMETHING MEANINGFUL</p><h2>有好问题，<br/><span>一起聊聊。</span></h2><div className="contact-links"><a className="email-link" href={`mailto:${profile.email}`}><Mail aria-hidden="true"/>{profile.email}<ArrowUpRight/></a><a className="email-link" href={`tel:${profile.phone}`}><Phone aria-hidden="true"/>{profile.phone}<ArrowUpRight/></a></div><img className="contact-wechat" src="/wechat-jia-ziliang.jpg" alt="贾子良微信二维码" loading="lazy" decoding="async"/><div className="footer-line"><Mark/><p>© 2026 JIA ZILIANG. ALL RIGHTS RESERVED.</p><a href="#top">BACK TO TOP <ArrowUpRight size={15}/></a></div></div></footer>
</main>{resumeOpen&&<div className="resume-modal" role="dialog" aria-modal="true" aria-label="贾子良个人简历" onClick={event=>event.target===event.currentTarget&&setResumeOpen(false)}><div className="resume-modal-bar"><span>JIA ZILIANG / RESUME</span><button type="button" onClick={()=>setResumeOpen(false)} aria-label="关闭简历"><X size={22}/> CLOSE</button></div><div className="resume-modal-stage"><img src="/resume-jia-ziliang.jpg" alt="贾子良个人简历"/></div></div>}</>}
const currentPath = window.location.pathname.replace(/\/+$/, '')
const isMedicalIndex = currentPath.endsWith('/medical')
const isMedicalDetail = /\/medical\/(laser|ear|cbct|monitor)$/.test(currentPath)

createRoot(document.getElementById('root')).render(window.location.pathname.startsWith('/projects') ? <ProjectOverviewPage/> : window.location.pathname.startsWith('/resume') ? <ResumePage/> : window.location.pathname.startsWith('/ai-expression') ? <AIExpressionPage/> : window.location.pathname.startsWith('/industrial-design') ? <IndustrialDesignPage/> : window.location.pathname.startsWith('/product-definition') ? <ProductDefinitionPage/> : window.location.pathname.startsWith('/product-management') ? <ProductManagement/> : window.location.pathname.startsWith('/decisions') ? <DecisionPage/> : window.location.pathname.startsWith('/validation') ? <ValidationPage/> : window.location.pathname.startsWith('/delivery') ? <DeliveryPage/> : window.location.pathname.startsWith('/insights') ? <InsightsPage/> : isMedicalDetail ? <LaserProject/> : isMedicalIndex ? <MedicalProject/> : window.location.pathname.startsWith('/industrial') ? <IndustrialProject/> : <App/>)
















