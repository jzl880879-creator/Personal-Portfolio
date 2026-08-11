import React, { useEffect } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import './product-definition.css'

const lenses = [
  ['01','用户与情境','USER & CONTEXT','不只用年龄和职业概括用户，而是确认：谁在什么触发条件下，要完成什么任务；当时有哪些时间、环境、认知与身体限制。'],
  ['02','任务与问题','JOB & PROBLEM','把用户说出的功能要求还原为尚未完成的任务，区分表面抱怨、根因与现有替代方案的缺口。'],
  ['03','价值与差异','VALUE & DIFFERENCE','明确产品替用户减少什么成本、风险和负担，又创造什么效率、信任或体验，并说明为什么是我们来做。'],
  ['04','范围与边界','SCOPE & BOUNDARY','定义首版必须成立的核心闭环，同时写清暂时不做什么，让资源集中在决定产品成败的关键体验上。'],
  ['05','实现与约束','FEASIBILITY','把结构、硬件、算法、成本、供应链、法规与周期提前放入定义，避免设计完成后才发现不可制造或不可交付。'],
  ['06','指标与验证','METRIC & PROOF','为关键假设设置可观察的证据：任务成功率、完成时间、误操作、可靠性、成本与转化，用验证推动定义持续收敛。'],
]
const outputs = [
  ['一句话产品定义','为谁，在什么场景下，解决什么问题，提供什么独特价值。'],
  ['目标用户与核心场景','主用户、次用户、触发条件、任务路径与关键限制。'],
  ['问题证据与替代方案','访谈、观察、数据、竞品及用户当前的解决方式。'],
  ['价值主张与体验原则','必须被感知的价值，以及设计过程不能被牺牲的判断标准。'],
  ['核心任务与功能优先级','最小可行闭环、关键功能、依赖关系和版本节奏。'],
  ['范围、约束与不做清单','成本、技术、制造、法规、交付边界及明确的不做事项。'],
  ['成功指标与验证计划','每项关键假设对应的指标、验证方法、负责人和判断阈值。'],
  ['决策记录与更新机制','定义不是一次性文档；记录证据变化、取舍原因与版本结论。'],
]
const cases = [
  {no:'CASE 01',title:'便携式充气泵',tag:'从功能集合，收敛到可靠补气闭环',body:'面对参数、接口与使用场景容易不断扩张的产品，我先把核心任务收敛为“用户在紧急或日常补气时，能够快速判断、可靠连接并安心结束”。因此，压力读取、预设停机、连接效率、夜间识别与便携收纳进入首要范围；低频附加功能则服从体积、成本和操作清晰度。定义的重点不是拥有更多功能，而是在高压力场景中减少犹豫与错误。',image:'/product-management/slides/slide-14.png',result:'/product-management/slides/slide-16.png'},
  {no:'CASE 02',title:'户外多功能泵',tag:'用场景簇定义能力，而不是简单叠加功能',body:'露营、充气与应急使用看似分散，实质共享“移动环境中的能源与气流管理”。产品定义由此围绕携带、快速部署、多接口适配、状态反馈和耐候性展开。功能只有在同一使用链路中互相增强时才被保留，避免把多功能做成多负担，并用模块关系约束体积、重量与交互层级。',image:'/product-management/slides/slide-28.png',result:'/product-management/slides/slide-35.png'},
  {no:'CASE 03',title:'智能隐私挪车牌',tag:'把隐私安全转译成可感知的产品价值',body:'用户需要留下联系方式，却不希望号码长期暴露。定义不应停留在“显示号码”这一功能，而要同时完成临时沟通、隐私控制、状态可见与车内环境适配。由此形成“需要时可联系、不需要时不暴露”的价值主张，并将切换动作、显示可读性、误触风险、供电与安装稳定性纳入同一个体验闭环。',image:'/product-management/slides/slide-42.png',result:'/product-management/slides/slide-50.png'},
]
const flow = [['01','收集证据','观察真实行为，理解现有方案，补充市场、业务与技术背景。'],['02','重构问题','从需求表述中拆出任务、动机、障碍与根因，把意见转化为待验证假设。'],['03','提出价值','连接用户的任务、痛点和收益，形成清晰、可比较的价值主张。'],['04','划定边界','确定核心闭环、功能优先级、约束与不做清单，保护最重要的体验。'],['05','形成共识','把目标、逻辑、设计原则与成功标准变成跨团队可理解的共同语言。'],['06','验证更新','用原型、测试、成本与工程反馈修正假设，让定义成为持续更新的活文档。']]

export default function ProductDefinitionPage(){
  useEffect(()=>{window.scrollTo(0,0);const els=document.querySelectorAll('[data-pd-reveal]');const o=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('is-visible',e.isIntersecting)),{threshold:.14,rootMargin:'0px 0px -6% 0px'});els.forEach(el=>o.observe(el));return()=>o.disconnect()},[])
  return <main className="pd-page">
    <header className="pd-nav"><a href="/#strengths"><ArrowLeft/> 返回职业能力</a><nav><a href="#definition">定义</a><a href="#framework">框架</a><a href="#cases">案例</a><a href="#output">输出</a></nav></header>
    <section className="pd-hero" id="definition"><div className="pd-hero-grid"/><div className="pd-orbit"><i/><i/><i/><span>DEFINE</span></div><p className="pd-kicker">PRODUCT DEFINITION / 01</p><h1>产品定义</h1><div className="pd-hero-bottom"><h2>把一个模糊机会，<br/>变成团队可以共同执行的产品答案。</h2><p>产品定义不是功能清单，也不是一句定位口号。它是在证据、价值与约束之间建立共同判断：确认产品为什么存在、为谁解决什么问题、首版做到哪里，以及如何证明它值得继续投入。</p></div></section>
    <section className="pd-thesis pd-shell" data-pd-reveal><p>MY DEFINITION PRINCIPLE</p><blockquote>先定义用户要完成的任务，<br/>再定义产品应该具备的形态。</blockquote><div><p>我从工业设计进入产品管理，经历电子 3C、文创、设备与医疗产品后，对“产品定义”的理解逐渐从造型与功能扩展为完整决策系统。</p><p>一个有效定义必须让产品、设计、研发、供应链和业务看到同一件事：用户价值是什么，关键风险在哪里，什么必须做到，什么可以晚一点，以及什么不应该做。</p></div></section>
    <section className="pd-framework pd-shell" id="framework"><header data-pd-reveal><p>01 / SIX LENSES</p><h2>六个视角，<br/>让定义从愿望变成边界。</h2></header><div className="pd-lenses">{lenses.map(x=><article key={x[0]} data-pd-reveal><span>{x[0]}</span><small>{x[2]}</small><h3>{x[1]}</h3><p>{x[3]}</p></article>)}</div></section>
    <section className="pd-process"><div className="pd-shell"><header data-pd-reveal><p>02 / DEFINITION FLOW</p><h2>从证据进入，<br/>以可验证的共识收束。</h2></header><ol data-pd-reveal>{flow.map(x=><li key={x[0]}><span>{x[0]}</span><b>{x[1]}</b><p>{x[2]}</p></li>)}</ol></div></section>
    <section className="pd-cases pd-shell" id="cases"><header data-pd-reveal><p>03 / DEFINITION IN PRACTICE</p><h2>定义不是抽象方法，<br/>它最终要改变产品。</h2></header>{cases.map((x,i)=><article className={i%2?'is-reverse':''} key={x.no} data-pd-reveal><div className="pd-case-media"><img src={x.image} alt={`${x.title}分析与定义`} loading="lazy" decoding="async"/><img src={x.result} alt={`${x.title}设计结果`} loading="lazy" decoding="async"/></div><div className="pd-case-copy"><span>{x.no}</span><p>{x.tag}</p><h3>{x.title}</h3><div>{x.body}</div></div></article>)}</section>
    <section className="pd-output" id="output"><div className="pd-shell"><header data-pd-reveal><p>04 / DEFINITION OUTPUT</p><h2>一份真正能推进项目的<br/>产品定义，应当留下这些内容。</h2></header><div className="pd-output-list">{outputs.map((x,i)=><article key={x[0]} data-pd-reveal><span>{String(i+1).padStart(2,'0')}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>
    <section className="pd-sources pd-shell" data-pd-reveal><p>METHOD REFERENCES</p><h2>方法参考</h2><div><a href="https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs" target="_blank" rel="noreferrer"><span>01</span>GOV.UK · 从真实用户需求开始<ArrowUpRight/></a><a href="https://www.strategyzer.com/library/the-value-proposition-canvas" target="_blank" rel="noreferrer"><span>02</span>Strategyzer · Value Proposition Canvas<ArrowUpRight/></a><a href="https://www.atlassian.com/agile/product-management/requirements" target="_blank" rel="noreferrer"><span>03</span>Atlassian · 产品需求与共同理解<ArrowUpRight/></a></div></section>
    <footer className="pd-footer"><p>DEFINE THE RIGHT PRODUCT<br/>BEFORE DESIGNING IT RIGHT.</p></footer>
  </main>
}
