import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import './decision.css'
import useMediaMode from './useMediaMode.js'

const principles=[
  {no:'01',en:'REAL PROBLEM',title:'先判断问题是否真实',body:'不从功能清单出发，而是回到用户、场景和任务：问题是否高频，是否足够痛，现有方案为什么没有解决。只有真实问题，才值得进入立项。'},
  {no:'02',en:'VALUE DENSITY',title:'让有限投入产生更高价值',body:'同时衡量用户收益、商业价值与品牌意义。优先选择能够形成明显体验差异、又能支撑产品定位的关键机会，而不是平均分配资源。'},
  {no:'03',en:'DELIVERY PATH',title:'设计必须看见实现路径',body:'把供应链、成本、结构、技术风险与时间窗口前置。方案不仅要成立，还要能被验证、被制造、被团队持续推进。'},
  {no:'04',en:'CLEAR BOUNDARY',title:'明确这次不做什么',body:'立项同时意味着建立边界。把非核心功能、低频场景和高风险探索放入后续路线，让第一阶段集中解决最关键的问题。'},
]
const cases=[
  {type:'电子 3C 与多品类',title:'从“功能更多”转向“核心体验更明确”',body:'在消费电子、文创与设备类项目中，我逐渐建立了对成本、结构、CMF 与量产节奏的整体判断。取舍的重点，是让产品识别度服务于核心场景，而不是让造型成为额外负担。'},
  {type:'医疗设备产品设计',title:'专业场景中，清晰与可靠优先',body:'医疗设备面对复杂流程、多人协作与安全约束。设计决策优先保障信息识别、操作效率、清洁维护和长期可靠性，再讨论形式创新与视觉差异。'},
  {type:'产品立项与设计推进',title:'把机会判断转成可执行范围',body:'进入产品经理角色后，我更关注市场窗口、用户价值、技术条件和项目资源之间的关系。目标不是提出最多方案，而是形成团队能够共同理解和持续推进的产品路径。'},
]
const tradeoffs=[
  ['核心任务','先保证高频任务闭环，再扩展低频场景'],
  ['可靠体验','稳定、清晰与易用，优先于参数和功能堆叠'],
  ['系统价值','优先解决影响全流程的问题，而非局部精致'],
  ['验证成本','先用低成本方式验证关键假设，再投入完整开发'],
]
const heroVideos=['/decision-planning-01.mp4','/decision-planning-02.mp4','/decision-planning-03.mp4']

export default function DecisionPage(){
  const [heroShot,setHeroShot]=useState(0)
  const mediaMode=useMediaMode()
  useEffect(()=>{const nodes=[...document.querySelectorAll('.decision-reveal')];const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('is-visible',entry.isIntersecting)),{threshold:.16,rootMargin:'0px 0px -8%'});nodes.forEach(node=>observer.observe(node));return()=>observer.disconnect()},[])
  useEffect(()=>{
    if(mediaMode!=='full') return
    const timer=window.setInterval(()=>setHeroShot(current=>(current+1)%heroVideos.length),2200)
    return()=>window.clearInterval(timer)
  },[mediaMode])
  return <main className="decision-page" id="decision-top">
    <nav className="decision-nav decision-shell"><a href="/"><ArrowLeft size={17}/> 返回作品集</a><div><a href="#criteria">判断标准</a><a href="#practice">项目实践</a><a href="#tradeoff">取舍原则</a></div><span>02 / DECIDE</span></nav>
    <header className="decision-hero">
      <div className="decision-hero-media" aria-hidden="true">{heroVideos.slice(0,mediaMode==='full'?heroVideos.length:1).map((video,index)=><video className={index===heroShot?'is-active':''} autoPlay muted loop playsInline preload={index===0?'metadata':'none'} poster={index===0?'/decision/case-product-roadmap.jpg':undefined} key={video}><source src={video} type="video/mp4"/></video>)}</div><div className="decision-veil"/>
      <div className="decision-shell decision-hero-copy"><p>02 / PROJECT DECISION & PRIORITY</p><h1><span>立项</span><br/>与取舍</h1><blockquote>立项不是决定“做什么”，<br/>而是明确为什么现在做、为谁做，<br/>以及什么暂时不做。</blockquote></div>
    </header>
    <section className="decision-intro decision-shell decision-reveal"><span>MY POINT OF VIEW</span><h2>好的立项，<br/>先建立共同判断。</h2><div><p>我的职业路径从工业设计、医疗设备设计延伸到产品管理。角色在变化，但工作的核心始终一致：在用户需求、商业目标、技术条件与制造现实之间，找到一条值得投入、能够验证并可以落地的路径。</p><p>因此，我把立项理解为一次“聚焦”。它不是把所有可能性装进产品，而是通过证据识别最重要的问题，确定阶段目标，并让团队知道哪些事情现在必须做好，哪些事情应该延后。</p></div></section>
    <section className="decision-principles decision-shell" id="criteria"><header className="decision-section-head decision-reveal"><span>01 / DECISION GATES</span><h2>四道判断，决定项目是否值得开始。</h2></header><div className="decision-principle-grid">{principles.map(item=><article className="decision-reveal" key={item.no}><div><i>{item.no}</i><span>{item.en}</span></div><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></section>
    <section className="decision-practice" id="practice"><div className="decision-shell"><header className="decision-section-head decision-reveal"><span>02 / EXPERIENCE</span><h2>不同项目，<br/>对应不同的优先级。</h2></header><div className="decision-case-list">{cases.map((item,index)=><article className="decision-reveal" key={item.type}><figure><img src={['/decision/case-electronics.jpg','/decision/case-medical.jpg','/decision/case-product-roadmap.jpg'][index]} alt={item.title} loading="lazy" decoding="async"/><span>0{index+1}</span></figure><div><p>{item.type}</p><h3>{item.title}</h3><strong>{item.body}</strong></div></article>)}</div></div></section>
    <section className="decision-tradeoff decision-shell" id="tradeoff"><header className="decision-section-head decision-reveal"><span>03 / TRADE-OFF</span><h2>取舍不是减少价值，<br/>而是保护核心价值。</h2></header><div className="decision-matrix decision-reveal">{tradeoffs.map(([title,body],index)=><div key={title}><i>0{index+1}</i><h3>{title}</h3><p>{body}</p></div>)}</div><div className="decision-quote decision-reveal"><p>当范围、成本和时间发生冲突时，我会回到同一个问题：</p><strong>哪一个决定，最能保障用户完成核心任务，<br/>也最有利于产品被真正实现？</strong></div></section>
    <section className="decision-close"><div className="decision-shell decision-reveal"><span>04 / ALIGN & MOVE</span><h2>先形成清晰共识，<br/>再推动设计向前。</h2><p>最终输出不只是一个概念，而是一套可沟通的产品定义：目标用户、核心问题、价值主张、功能边界、验证重点和推进节奏。让设计、研发、供应链与业务团队围绕同一目标作出连续决策。</p></div></section>
    <footer className="decision-footer decision-shell"><a href="/"><ArrowLeft/> 返回首页</a><span>© 2026 JIA ZILIANG</span><a href="#decision-top">返回顶部 <ArrowUpRight size={14}/></a></footer>
  </main>
}




