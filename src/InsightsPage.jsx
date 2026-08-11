import React, { useEffect, useState } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import './insights.css'

const chapters = [
  {
    no: '01',
    en: 'UNDERSTAND THE CONTEXT',
    title: '理解场景',
    copy: '进入真实使用环境，观察人与设备、空间和流程之间的关系。医疗设备需要同时回应操作者、患者、维护人员与临床流程；电子产品则需要理解高频动作、携带方式与长期使用习惯。',
    note: 'CONTEXT / PEOPLE / BEHAVIOR',
    image: '/insights/insight-context.jpg',
  },
  {
    no: '02',
    en: 'IDENTIFY THE TENSION',
    title: '识别问题',
    copy: '区分表象诉求与核心矛盾，从用户体验、业务价值和实现条件中寻找交集。把“希望更好用”进一步拆解为操作路径、信息层级、人体工学、安全性与制造约束等可验证的问题。',
    note: 'NEEDS / CONSTRAINTS / OPPORTUNITY',
    image: '/insights/insight-problem.jpg',
  },
  {
    no: '03',
    en: 'FRAME THE PRODUCT',
    title: '建立定义',
    copy: '将分散信息整理为明确的目标用户、核心场景、价值主张与需求边界，让团队对产品形成统一认知。定义不是一句口号，而是一组能够指导设计取舍与项目推进的判断标准。',
    note: 'USER / SCENARIO / VALUE',
    image: '/insights/insight-definition.jpg',
  },
  {
    no: '04',
    en: 'SET THE PRIORITY',
    title: '判断优先级',
    copy: '综合用户价值、业务目标、技术风险与落地成本，判断当前阶段最值得解决的问题。优先完成决定产品体验的关键路径，再逐步扩展功能与设计表达。',
    note: 'VALUE / FEASIBILITY / IMPACT',
    image: '/insights/insight-priority.jpg',
  },
]

const insightHeroVideos = [
  '/insight-preview-01.mp4',
  '/insight-preview-02.mp4',
  '/insight-preview-03.mp4',
]

export default function InsightsPage(){
  const [heroShot, setHeroShot] = useState(0)

  useEffect(()=>{
    window.scrollTo(0,0)
    const nodes = [...document.querySelectorAll('[data-insight-reveal]')]
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      entry.target.classList.toggle('is-visible', entry.isIntersecting)
    }), { threshold: .1, rootMargin: '-8% 0px -8% 0px' })
    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  },[])

  useEffect(()=>{
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(
      ()=>setHeroShot(current => (current + 1) % insightHeroVideos.length),
      2200,
    )
    return () => window.clearInterval(timer)
  },[])

  return <main className="insight-page" id="top">
    <nav className="insight-nav insight-shell">
      <a href="/#method" className="insight-back"><ArrowLeft size={16}/> BACK TO PORTFOLIO</a>
      <span>JIA ZILIANG / PRODUCT METHOD</span>
      <a href="mailto:1270137399@qq.com">CONTACT <ArrowUpRight size={15}/></a>
    </nav>

    <header className="insight-hero insight-shell">
      <div className="insight-kicker">01 / DISCOVER & DEFINE</div>
      <nav className="insight-section-nav" aria-label="洞察与定义章节导航">
        <a href="#approach"><span>00</span>方法概述</a>
        <a href="#context"><span>01</span>理解场景</a>
        <a href="#problem"><span>02</span>识别问题</a>
        <a href="#definition"><span>03</span>建立定义</a>
        <a href="#priority"><span>04</span>判断优先级</a>
        <a href="#framework"><span>05</span>定义框架</a>
      </nav>
      <h1>洞察<br/><span>与定义</span></h1>
      <div className="insight-hero-copy">
        <p>在设计开始之前，<br/>先确认真正的问题。</p>
        <div>INSIGHT IS NOT MORE INFORMATION.<br/>IT IS A CLEARER DECISION.</div>
      </div>
      <div className="insight-hero-geometry" aria-hidden="true">
        <div className="insight-hero-stripe-grid"/>
        <svg className="insight-hero-triangle" viewBox="0 0 800 700" preserveAspectRatio="xMidYMid meet">
          <polygon points="400,38 760,650 40,650"/>
          <polygon className="insight-hero-triangle-inner" points="400,158 650,588 150,588"/>
        </svg>
      </div>
      <div className="insight-hero-image insight-hero-motion insight-hero-media" aria-hidden="true">
        {insightHeroVideos.map((video, index) =>
          <video
            className={index === heroShot ? 'is-active' : ''}
            autoPlay
            muted
            loop
            playsInline
            preload={index === 0 ? 'auto' : 'metadata'}
            key={video}
          >
            <source src={video} type="video/mp4"/>
          </video>
        )}
        <div className="insight-neural-grid"/>
        <span>THOUGHT / CONNECTION / POSSIBILITY</span>
      </div>
    </header>

    <section className="insight-intro insight-shell insight-anchor" id="approach" data-insight-reveal>
      <p className="insight-label">MY APPROACH</p>
      <div>
        <h2>洞察不是收集更多信息，<br/>而是在复杂信息中识别<br/><em>真正重要的问题。</em></h2>
        <p>我习惯从用户行为、使用场景、业务目标与技术约束中寻找关键线索，将模糊需求转化为清晰的产品命题。多年跨品类项目经历，让我能够在不同领域快速建立认知，识别表象需求背后的核心矛盾。</p>
        <p>通过用户访谈、竞品分析、场景拆解与产品调研，判断产品为什么存在、为谁解决问题，以及它应当以怎样的方式进入真实场景。最终形成清晰的产品定位、需求优先级与设计方向，为后续决策建立可靠依据。</p>
      </div>
    </section>

    <section className="insight-manifesto" data-insight-reveal>
      <div className="insight-manifesto-bg" aria-hidden="true"/>
      <div className="insight-shell">
        <span className="manifesto-caption manifesto-caption-left">FROM REQUEST</span>
        <h2>
          <span className="manifesto-line line-one">从“客户想做什么”，</span>
          <span className="manifesto-line line-two">进一步定义</span>
          <em className="manifesto-line line-three">“产品真正应该做什么”。</em>
        </h2>
        <span className="manifesto-caption manifesto-caption-right">TO PRODUCT DEFINITION</span>
      </div>
    </section>

    <section className="insight-process insight-shell">
      <div className="insight-process-head" data-insight-reveal>
        <p>FOUR LENSES</p>
        <h2>从场景进入，<br/>以判断收束。</h2>
      </div>
      {chapters.map((chapter, index) =>
        <article className={`insight-chapter insight-anchor ${index % 2 ? 'is-reverse' : ''}`} id={['context','problem','definition','priority'][index]} key={chapter.no} data-insight-reveal>
          <div className="insight-chapter-image">
            <img src={chapter.image} alt={chapter.title}/>
            <span>{chapter.note}</span>
          </div>
          <div className="insight-chapter-copy">
            <div className="insight-number">{chapter.no}</div>
            <p>{chapter.en}</p>
            <h3>{chapter.title}</h3>
            <div>{chapter.copy}</div>
          </div>
        </article>
      )}
    </section>

    <section className="insight-framework insight-anchor" id="framework">
      <div className="insight-shell" data-insight-reveal>
        <p className="insight-label">DEFINITION FRAMEWORK</p>
        <div className="insight-framework-grid">
          <h2>一个清晰的产品定义，<br/>需要同时回答<br/>四个问题。</h2>
          <ol>
            <li><span>01</span><strong>为谁设计？</strong><small>USER</small></li>
            <li><span>02</span><strong>发生在哪里？</strong><small>CONTEXT</small></li>
            <li><span>03</span><strong>解决什么问题？</strong><small>PROBLEM</small></li>
            <li><span>04</span><strong>为什么值得实现？</strong><small>VALUE</small></li>
          </ol>
        </div>
      </div>
    </section>

    <footer className="insight-footer insight-shell">
      <p>GOOD PRODUCTS BEGIN<br/>WITH BETTER QUESTIONS.</p>
      <a href="/#method">返回作品集 <ArrowUpRight/></a>
      <div className="insight-footer-actions" aria-label="页面快捷导航">
        <a href="/" className="insight-footer-home"><ArrowLeft/> 返回首页</a>
        <span>© 2026 JIA ZILIANG</span>
        <a href="#top" className="insight-footer-top">返回顶部 <ArrowUpRight size={14}/></a>
      </div>
    </footer>
  </main>
}
