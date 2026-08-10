import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import './decision.css'
import './delivery.css'

const dimensions=[
  {no:'01',en:'ALIGNMENT',title:'先把目标变成共同语言',body:'明确用户价值、产品范围、成功标准和阶段边界，让设计、研发、供应链与业务围绕同一个问题作出决策。'},
  {no:'02',en:'OWNERSHIP',title:'让每个问题都有负责人',body:'把模糊任务拆解为可执行事项，明确责任人、依赖关系和完成标准，避免问题停留在会议与口头共识中。'},
  {no:'03',en:'RISK CONTROL',title:'把高风险问题前置',body:'持续识别结构、技术、成本、工艺、交期和体验风险，通过样机、评审和供应商沟通尽早验证关键不确定性。'},
  {no:'04',en:'QUALITY LOOP',title:'用闭环保护最终体验',body:'建立问题记录、版本追踪、设计验收和复盘机制，让细节在多轮修改中仍然保持一致，并沉淀为下一次项目的经验。'},
]
const practices=[
  {type:'电子 3C 与多品类',title:'从设计表达进入供应链现实',body:'在消费电子、文创与设备产品中，持续处理结构空间、材料工艺、颜色样板、装配方式与成本限制。通过与结构、工程和供应商反复校准，让设计意图能够稳定进入量产。'},
  {type:'医疗设备产品设计',title:'复杂约束下保持体验一致',body:'医疗设备涉及安全、清洁、维护、移动与多角色操作。推进过程中需要把场景要求转化为尺寸、接口、结构和CMF标准，并通过阶段评审确保专业性与使用效率不被削弱。'},
  {type:'产品经理与项目推进',title:'在范围、资源与时间中持续决策',body:'围绕产品机会和阶段目标组织需求、设计与实施计划，持续处理优先级变化、跨团队依赖与风险问题。重要的不是按原计划不变，而是在变化中保护核心价值和交付节奏。'},
]
const rhythm=[
  ['目标对齐','确认问题、范围、用户价值与成功标准'],
  ['任务拆解','形成里程碑、责任人、依赖关系与交付物'],
  ['关键评审','在概念、结构、样机和生产节点集中决策'],
  ['问题闭环','记录问题、结论、版本和后续验证责任'],
  ['交付复盘','验收核心体验，并沉淀可复用的方法与标准'],
]
const deliveryHeroVideos=['/delivery-preview-01.mp4','/delivery-preview-02.mp4','/delivery-preview-03.mp4']

export default function DeliveryPage(){
  const [heroShot,setHeroShot]=useState(0)
  useEffect(()=>{const nodes=[...document.querySelectorAll('.decision-reveal')];const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('is-visible',entry.isIntersecting)),{threshold:.16,rootMargin:'0px 0px -8%'});nodes.forEach(node=>observer.observe(node));return()=>observer.disconnect()},[])
  useEffect(()=>{
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer=window.setInterval(()=>setHeroShot(current=>(current+1)%deliveryHeroVideos.length),2200)
    return()=>window.clearInterval(timer)
  },[])
  return <main className="decision-page delivery-page" id="delivery-top">
    <nav className="decision-nav decision-shell"><a href="/"><ArrowLeft size={17}/> 返回作品集</a><div><a href="#dimensions">推进原则</a><a href="#practice">项目实践</a><a href="#rhythm">交付节奏</a></div><span>04 / DELIVER</span></nav>
    <header className="decision-hero delivery-hero"><div className="decision-hero-media delivery-hero-media" aria-hidden="true">{deliveryHeroVideos.map((video,index)=><video className={index===heroShot?'is-active':''} autoPlay muted loop playsInline preload={index===0?'auto':'metadata'} key={video}><source src={video} type="video/mp4"/></video>)}</div><div className="decision-veil"/><div className="decision-shell decision-hero-copy"><p>04 / DELIVERY & EXECUTION</p><h1><span>落地</span><br/>与推进</h1><blockquote>落地不是设计完成后的最后一步，<br/>而是从目标确定开始，持续协调、<br/>验证和闭环的全过程。</blockquote></div></header>
    <section className="decision-intro decision-shell decision-reveal"><span>MY POINT OF VIEW</span><h2>让正确的方向，<br/>持续走到最后。</h2><div><p>从工业设计师、设计主管到产品经理，我的工作逐渐从“完成方案”扩展到“推动方案发生”。真实项目不会沿着一条理想路径前进，它始终受到时间、成本、技术、供应链和团队协作的共同影响。</p><p>因此，我把落地理解为持续决策：把目标讲清楚，把任务拆开，把风险前置，把问题留痕，并在每一次变化中判断什么必须坚持、什么可以调整。推进的价值，是让团队始终知道下一步做什么，以及为什么这样做。</p></div></section>
    <section className="decision-principles decision-shell" id="dimensions"><header className="decision-section-head decision-reveal"><span>01 / DELIVERY PRINCIPLES</span><h2>四项机制，保障方案持续向前。</h2></header><div className="decision-principle-grid">{dimensions.map(item=><article className="decision-reveal" key={item.no}><div><i>{item.no}</i><span>{item.en}</span></div><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></section>
    <section className="decision-practice" id="practice"><div className="decision-shell"><header className="decision-section-head decision-reveal"><span>02 / EXPERIENCE</span><h2>角色在变化，<br/>落地始终是一项系统工作。</h2></header><div className="decision-case-list">{practices.map((item,index)=><article className="decision-reveal" key={item.type}><figure><img src={['/industrial-3c/industrial-47.png','/delivery/experience-consistency-inspection.jpg','/product-management/slides/slide-35.png'][index]} alt={item.title}/><span>0{index+1}</span></figure><div><p>{item.type}</p><h3>{item.title}</h3><strong>{item.body}</strong></div></article>)}</div></div></section>
    <section className="delivery-rhythm decision-shell" id="rhythm"><header className="decision-section-head decision-reveal"><span>03 / PROJECT RHYTHM</span><h2>用清晰节点，<br/>管理复杂过程。</h2></header><div className="delivery-timeline">{rhythm.map(([title,body],index)=><article className="decision-reveal" key={title}><i>{String(index+1).padStart(2,'0')}</i><div><h3>{title}</h3><p>{body}</p></div><span>{index===rhythm.length-1?'DONE':'NEXT'}</span></article>)}</div><div className="decision-quote decision-reveal"><p>面对变化，我会优先保护三件事：</p><strong>核心用户价值不偏移，<br/>关键风险有人负责，<br/>重要决定能够被追溯。</strong></div></section>
    <section className="delivery-output"><div className="decision-shell"><header className="decision-section-head decision-reveal"><span>04 / DELIVERY STANDARD</span><h2>交付的不只是文件，<br/>而是可以继续执行的共识。</h2></header><div className="delivery-output-grid decision-reveal"><div><i>01</i><h3>清晰定义</h3><p>目标用户、核心场景、功能边界与验收标准。</p></div><div><i>02</i><h3>完整规范</h3><p>造型、结构、交互、CMF 与关键体验要求。</p></div><div><i>03</i><h3>问题记录</h3><p>风险、结论、版本变化与后续责任人。</p></div><div><i>04</i><h3>阶段复盘</h3><p>确认结果、经验与下一阶段优化方向。</p></div></div></div></section>
    <section className="decision-close"><div className="decision-shell decision-reveal"><span>05 / MAKE IT REAL</span><h2>把设计意图，<br/>变成真实产品。</h2><p>最终，我希望建立的不是对单一方案的控制，而是一套能够应对变化的推进机制。让团队围绕清晰目标协作，让每个关键问题获得解决，让产品在真实限制中仍然保留最重要的价值。</p></div></section>
    <footer className="decision-footer decision-shell"><a href="/"><ArrowLeft/> 返回首页</a><span>© 2026 JIA ZILIANG</span><a href="#delivery-top">返回顶部 <ArrowUpRight size={14}/></a></footer>
  </main>
}



