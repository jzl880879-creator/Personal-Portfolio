import React,{useEffect} from 'react'
import {ArrowLeft,ArrowUpRight} from 'lucide-react'
import './ai-expression.css'

const abilities=[
 ['01','问题转译','TRANSLATE','把模糊需求拆成对象、场景、行为、材质、光线、镜头与情绪，使设计意图成为模型和团队都能理解的视觉语言。'],
 ['02','概念发散','EXPLORE','快速形成不同造型方向、使用场景和视觉气质，扩大方案空间，但不把随机生成结果直接当作设计结论。'],
 ['03','风格控制','CONTROL','通过参考图、风格权重、关键词体系与筛选标准保持系列一致性，让发散仍然服务于品牌和产品定位。'],
 ['04','场景构建','CONTEXT','把孤立的产品模型放回真实环境，用人物、尺度、行为和光线说明产品如何被使用、被感知。'],
 ['05','精修合成','REFINE','将 AI 输出与 Rhino、KeyShot、Photoshop、Illustrator 等传统工具结合，校正结构、比例、文字和产品真实性。'],
 ['06','决策沟通','COMMUNICATE','把研究、概念、方案与价值组织成可比较、可讨论的叙事，帮助产品、研发和业务更快达成共识。']
]
const workflow=[
 ['INPUT','建立边界','明确产品目标、用户场景、结构事实和不能改变的设计条件。'],
 ['PROMPT','描述意图','用主体、动作、环境、材质、镜头、光线和风格构成可复用提示结构。'],
 ['DIVERGE','生成变量','一次只改变关键变量，建立方向矩阵，避免无目的地反复抽卡。'],
 ['SELECT','设计筛选','依据功能、人机、品牌、制造和叙事价值筛选，而不是只选择“最好看”的图。'],
 ['REFINE','专业精修','回到三维、渲染和平面工具修正产品事实，统一材质、比例与视觉系统。'],
 ['DELIVER','形成表达','按受众组织展示层级，让图像准确支持立项、评审、研发或传播目标。']
]
const cases=[
 {no:'CASE 01',title:'造型方向探索',en:'FORM EXPLORATION',lead:'AI 提供的是可能性密度，设计师负责方向与判断。',body:'在电子 3C 和设备类产品中，我会先锁定握持关系、功能分区和结构边界，再借助 Midjourney、Stable Diffusion 或 PromeAI 探索体块比例、细节语言和 CMF 气质。生成结果作为视觉假设进入草图与三维建模，而不是绕过人机与结构直接成为最终方案。',a:'/industrial-3c/industrial-02.png',b:'/industrial-3c/industrial-06.png'},
 {no:'CASE 02',title:'产品场景与价值表达',en:'CONTEXT BUILDING',lead:'让一张效果图回答：谁在何时何地，为什么需要它。',body:'对于便携式充气泵与户外多功能泵，单独的白底渲染难以说明应急、露营和移动使用价值。我把产品模型、目标场景、人物动作、环境光线与品牌色组合为完整画面，再通过后期控制尺度、结构真实性和视觉焦点，让场景图成为产品定义和汇报中的证据。',a:'/product-management/slides/slide-16.png',b:'/product-management/slides/slide-35.png'},
 {no:'CASE 03',title:'医疗设备专业叙事',en:'TRUST & CLARITY',lead:'医疗表达的目标不是制造科幻感，而是建立专业、清晰与可信。',body:'医疗产品需要严格保持结构、接口、交互与使用姿态的真实性。AI 更适合辅助环境延展、氛围探索和叙事草案；产品主体仍以准确三维模型和可控渲染为基础。通过克制色彩、明确操作焦点与真实空间尺度，使医生、患者和评审者都能理解方案。',a:'/ai-expression/medical-professional.jpg',b:'/ai-expression/medical-monitor.jpg'},
 {no:'CASE 04',title:'从方案到沟通系统',en:'VISUAL STORYTELLING',lead:'表达不是最后包装，而是让复杂判断被准确看见。',body:'我会根据立项、内部评审、设计深化和对外展示调整信息密度：前期突出机会、场景和方向差异，中期展示人机、结构与 CMF 逻辑，后期强调细节、制造与完整体验。AI 负责提高探索和素材生产效率，飞书与结构化页面则承载版本、结论与协作。',a:'/ai-expression/communication-concept.jpg',b:'/ai-expression/communication-system.jpg'}
]

export default function AIExpressionPage(){
 useEffect(()=>{scrollTo(0,0);const es=document.querySelectorAll('[data-ai-reveal]');const o=new IntersectionObserver(xs=>xs.forEach(x=>x.target.classList.toggle('show',x.isIntersecting)),{threshold:.12,rootMargin:'0px 0px -7%'});es.forEach(e=>o.observe(e));return()=>o.disconnect()},[])
 return <main className="aip">
  <header className="aip-nav"><a href="/#strengths"><ArrowLeft/> 返回职业能力</a><nav><a href="#ability">能力</a><a href="#workflow">流程</a><a href="#cases">案例</a><a href="#boundary">边界</a></nav></header>
  <section className="aip-hero"><div className="aip-field">{Array.from({length:18},(_,i)=><i key={i}/>)}</div><div className="aip-glow"/><p>AI & VISUAL EXPRESSION / 03</p><h1>AI<br/><span>与表达</span></h1><div className="aip-hero-copy"><h2>扩大探索的边界，<br/>但保留设计的判断。</h2><p>我将生成式 AI 视为设计工作流中的“加速层”：帮助更快看见可能性、构建场景和组织叙事；产品事实、人机逻辑、结构制造与最终品质，仍由设计师持续控制。</p></div></section>
  <section className="aip-thesis aip-shell" data-ai-reveal><p>MY AI PRINCIPLE</p><h2>不是用 AI 代替设计，<br/>而是让判断更早发生、表达更快抵达。</h2><div><p>产品设计专业与多品类项目经验，让我能够判断一张生成图是否真正成立：比例是否合理、操作是否自然、结构是否可信、语言是否一致。</p><p>AI 的价值不只在“出图更快”，更在于把文字、草图、三维、渲染和叙事连接成连续迭代。效率提升之后，节省出的时间应该回到研究、验证和细节。</p></div></section>
  <section className="aip-ability aip-shell" id="ability"><header data-ai-reveal><p>01 / AUGMENTED CAPABILITIES</p><h2>六种能力，<br/>让 AI 真正进入产品流程。</h2></header><div>{abilities.map(x=><article key={x[0]} data-ai-reveal><span>{x[0]}</span><small>{x[2]}</small><h3>{x[1]}</h3><p>{x[3]}</p></article>)}</div></section>
  <section className="aip-manifest"><div>HUMAN DIRECTION</div><b>×</b><div>MODEL SPEED</div><span>DESIGN JUDGMENT</span></section>
  <section className="aip-workflow" id="workflow"><div className="aip-shell"><header data-ai-reveal><p>02 / CONTROLLED WORKFLOW</p><h2>从输入到交付，<br/>每一步都留下设计控制。</h2></header><div className="aip-flow">{workflow.map((x,i)=><article key={x[0]} data-ai-reveal><span>{String(i+1).padStart(2,'0')}</span><small>{x[0]}</small><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></div></section>
  <section className="aip-cases aip-shell" id="cases"><header data-ai-reveal><p>03 / AI IN PRACTICE</p><h2>工具改变速度，<br/>作品仍然需要逻辑。</h2></header>{cases.map((x,i)=><article className={i%2?'reverse':''} key={x.no} data-ai-reveal><div className="aip-media"><img src={x.a} alt={`${x.title}相关作品`} loading="lazy" decoding="async"/><img src={x.b} alt={`${x.title}表达成果`} loading="lazy" decoding="async"/></div><div className="aip-copy"><span>{x.no} / {x.en}</span><h3>{x.title}</h3><b>{x.lead}</b><p>{x.body}</p></div></article>)}</section>
  <section className="aip-boundary" id="boundary"><div className="aip-shell" data-ai-reveal><p>04 / QUALITY & BOUNDARY</p><h2>快，不等于失去标准。</h2><div className="aip-rules"><article><span>01</span><h3>真实性</h3><p>不让场景美感掩盖错误结构、失真比例和不可实现细节。</p></article><article><span>02</span><h3>一致性</h3><p>用参考图、关键词体系和后期规范维持产品与品牌语言。</p></article><article><span>03</span><h3>可追溯</h3><p>保留输入、变量、筛选和修改过程，让结果能够复现和协作。</p></article><article><span>04</span><h3>责任边界</h3><p>关注素材权利、隐私、偏差与误导风险，明确 AI 参与的范围。</p></article></div></div></section>
  <section className="aip-tools aip-shell" data-ai-reveal><p>TOOL ECOSYSTEM</p><h2>工具不是标签，组合方式才是能力。</h2><div><span>Midjourney</span><span>Stable Diffusion</span><span>PromeAI</span><span>Codex</span><span>Rhino</span><span>KeyShot</span><span>Photoshop</span><span>Illustrator</span></div></section>
  <section className="aip-sources aip-shell" data-ai-reveal><p>METHOD REFERENCES</p><h2>方法参考</h2><a href="https://docs.midjourney.com/hc/en-us/articles/32180011136653-Style-Reference" target="_blank" rel="noreferrer">Midjourney · Style Reference 与视觉一致性 <ArrowUpRight/></a><a href="https://helpx.adobe.com/firefly/web/firefly-graph/firefly-graph-overview.html" target="_blank" rel="noreferrer">Adobe Firefly · 可复用生成与编辑工作流 <ArrowUpRight/></a><a href="https://openai.com/academy/image-generation/" target="_blank" rel="noreferrer">OpenAI Academy · 图像生成与迭代方法 <ArrowUpRight/></a></section>
  <footer className="aip-footer"><h2>EXPLORE FASTER.<br/>DECIDE BETTER.</h2></footer>
 </main>
}
