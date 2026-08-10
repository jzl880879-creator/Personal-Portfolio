import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import './decision.css'
import './validation.css'

const dimensions=[
  {no:'01',en:'DESIRABILITY',title:'用户是否愿意使用',body:'验证产品是否回应了真实需求，核心价值是否能够被快速理解，关键体验是否足以改变用户原有的选择。'},
  {no:'02',en:'USABILITY',title:'任务是否清晰顺畅',body:'通过关键任务、操作路径、握持姿态和信息反馈，识别理解成本、误操作风险与不必要的步骤。'},
  {no:'03',en:'FEASIBILITY',title:'方案是否能够实现',body:'同步验证结构空间、材料工艺、器件布局、成本与供应链条件，避免在概念完成后才暴露根本性冲突。'},
  {no:'04',en:'CONSISTENCY',title:'体验是否形成系统',body:'检查造型、交互、CMF 与品牌语言是否指向同一产品性格，并能够延续到系列化和后续迭代。'},
]
const practices=[
  {type:'电子 3C 与多品类',title:'在比例、结构与量产之间反复校准',body:'通过草模、三维模型、CMF 样板和结构沟通验证体量、握持、接口与装配关系。设计不是一张最终效果图，而是在多轮约束中逐步收敛的结果。'},
  {type:'医疗设备产品设计',title:'用真实姿态验证安全与效率',body:'针对屏幕观察角度、手柄握持、设备升降、线缆收纳与清洁维护进行场景验证。优先发现可能影响操作准确性和长期使用的细节问题。'},
  {type:'产品立项与设计推进',title:'先验证高风险假设，再扩大投入',body:'将市场、用户、技术和供应链中的关键不确定性转成可验证问题，使用低成本原型和阶段评审尽早获得证据，减少团队在错误方向上的投入。'},
]
const steps=[
  ['定义假设','把“设计得更好”改写为可观察、可比较的问题','DEFINE THE HYPOTHESIS'],
  ['建立原型','选择与风险匹配的精度，不为展示而过度制作','BUILD THE PROTOTYPE'],
  ['进入场景','让目标用户在接近真实的任务与环境中完成操作','TEST IN CONTEXT'],
  ['记录证据','结合行为、时间、错误、反馈和工程数据形成判断','CAPTURE THE EVIDENCE'],
  ['收敛迭代','保留有效方案，修正关键问题，明确下一轮验证重点','CONVERGE & ITERATE'],
]
const validationHeroVideos=['/validation-preview-01.mp4','/validation-preview-02.mp4','/validation-preview-03.mp4']

export default function ValidationPage(){
  const [heroShot,setHeroShot]=useState(0)
  useEffect(()=>{const nodes=[...document.querySelectorAll('.decision-reveal')];const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('is-visible',entry.isIntersecting)),{threshold:.16,rootMargin:'0px 0px -8%'});nodes.forEach(node=>observer.observe(node));return()=>observer.disconnect()},[])
  useEffect(()=>{
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer=window.setInterval(()=>setHeroShot(current=>(current+1)%validationHeroVideos.length),2200)
    return()=>window.clearInterval(timer)
  },[])
  return <main className="decision-page validation-page" id="validation-top">
    <nav className="decision-nav decision-shell"><a href="/"><ArrowLeft size={17}/> 返回作品集</a><div><a href="#dimensions">验证维度</a><a href="#practice">项目实践</a><a href="#loop">验证闭环</a></div><span>03 / DESIGN</span></nav>
    <header className="decision-hero validation-hero"><div className="decision-hero-media validation-hero-media" aria-hidden="true">{validationHeroVideos.map((video,index)=><video className={index===heroShot?'is-active':''} autoPlay muted loop playsInline preload={index===0?'auto':'metadata'} key={video}><source src={video} type="video/mp4"/></video>)}</div><div className="decision-veil"/><div className="decision-shell decision-hero-copy"><p>03 / DESIGN & VALIDATION</p><h1><span>设计</span><br/>与验证</h1><blockquote>设计不是提前给出答案，<br/>而是把判断转化为可验证的假设，<br/>再用证据推动方案收敛。</blockquote></div></header>
    <section className="decision-intro decision-shell decision-reveal"><span>MY POINT OF VIEW</span><h2>让每一次设计，<br/>都更接近真实使用。</h2><div><p>在电子 3C、医疗设备和产品推进项目中，我越来越重视设计过程中的“验证”。一个方案在画面中成立，并不代表它在手中、空间里、制造线上或真实任务中同样成立。</p><p>因此，我会把设计拆解成一组需要被证明的假设：用户能否理解，操作是否自然，结构是否合理，成本是否可控，产品语言是否一致。通过不同精度的原型和逐步深入的测试，让风险更早暴露，让团队更有依据地作出下一步决定。</p></div></section>
    <section className="decision-principles decision-shell" id="dimensions"><header className="decision-section-head decision-reveal"><span>01 / VALIDATION DIMENSIONS</span><h2>四个维度，检验方案是否真正成立。</h2></header><div className="decision-principle-grid">{dimensions.map(item=><article className="decision-reveal" key={item.no}><div><i>{item.no}</i><span>{item.en}</span></div><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></section>
    <section className="decision-practice" id="practice"><div className="decision-shell"><header className="decision-section-head decision-reveal"><span>02 / EXPERIENCE</span><h2>验证方式，<br/>取决于项目的关键风险。</h2></header><div className="decision-case-list">{practices.map((item,index)=><article className="decision-reveal" key={item.type}><figure><img src={['/industrial-3c/industrial-02.png','/validation/experience-safety-efficiency.jpg','/validation/experience-risk-hypothesis.jpg'][index]} alt={item.title}/><span>0{index+1}</span></figure><div><p>{item.type}</p><h3>{item.title}</h3><strong>{item.body}</strong></div></article>)}</div></div></section>
    <section className="validation-loop decision-shell" id="loop"><header className="decision-section-head decision-reveal"><span>03 / ITERATION LOOP</span><h2>从假设到证据，<br/>形成连续迭代。</h2></header><div className="validation-steps">{steps.map(([title,body,en],index)=><article className="decision-reveal" key={title}><i>{String(index+1).padStart(2,'0')}</i><div><h3>{title}</h3><p>{body}</p></div><span>{en}</span></article>)}</div><div className="decision-quote decision-reveal"><p>验证的目的不是证明原方案正确，而是尽快发现：</p><strong>哪里不成立，为什么不成立，<br/>下一次应该改变什么。</strong></div></section>
    <section className="validation-evidence"><div className="decision-shell"><header className="decision-section-head decision-reveal"><span>04 / EVIDENCE LEVEL</span><h2>用与风险匹配的精度，<br/>获得足够的证据。</h2></header><div className="validation-levels decision-reveal"><div><i>01</i><b>草图与故事板</b><p>验证任务逻辑、场景关系和方向差异。</p></div><div><i>02</i><b>低保真模型</b><p>验证体量、比例、握持与操作路径。</p></div><div><i>03</i><b>交互与外观样机</b><p>验证信息反馈、感知品质和关键体验。</p></div><div><i>04</i><b>工程样机</b><p>验证结构、性能、工艺、成本与可靠性。</p></div></div></div></section>
    <section className="decision-close"><div className="decision-shell decision-reveal"><span>05 / PROVE & IMPROVE</span><h2>让方案经得起使用，<br/>也经得起实现。</h2><p>最终，设计输出不仅是完整的视觉方案，还应包含经过验证的尺寸、交互、结构关系和实施重点。让研发、供应链、业务与设计团队基于同一组证据继续推进。</p></div></section>
    <footer className="decision-footer decision-shell"><a href="/"><ArrowLeft/> 返回首页</a><span>© 2026 JIA ZILIANG</span><a href="#validation-top">返回顶部 <ArrowUpRight size={14}/></a></footer>
  </main>
}



