import React from 'react'
import { ArrowLeft, ArrowUpRight, Mail, Phone, CalendarDays, GraduationCap } from 'lucide-react'

const experience = [
  { period:'2025.10 — 2026.06', company:'骑记科技有限公司', role:'产品经理', detail:'主做产品立项与产品设计' },
  { period:'2024.04 — 2025.09', company:'东象设计公司', role:'设计主管', detail:'主做医疗设备产品及产品调研' },
  { period:'2022.03 — 2024.01', company:'灵猫设计集团', role:'工业设计师', detail:'主做电子 3C 产品、文创产品、设备类产品' },
  { period:'2019.09 — 2022.01', company:'智猫创新科技有限公司', role:'工业设计师', detail:'主做电子 3C 产品' },
]

const skills = [
  { type:'平面设计', items:['Photoshop','Illustrator','CorelDRAW'] },
  { type:'3D 建模', items:['Rhino','Core'] },
  { type:'渲染表达', items:['KeyShot'] },
  { type:'AI 工具', items:['Midjourney','Stable Diffusion','PromeAI','Codex'] },
]

export default function ResumePage(){
  return <main className="resume-page">
    <nav className="resume-nav resume-shell">
      <a href="/" className="resume-back"><ArrowLeft size={18}/> 返回首页</a>
      <span>JIA ZILIANG / RESUME / 2026</span>
      <a href="mailto:1270137399@qq.com">联系我 <ArrowUpRight size={17}/></a>
    </nav>

    <section className="resume-intro resume-shell">
      <div className="resume-photo">
        <img src="/portrait-jia-ziliang-clean.jpg" alt="贾子良"/>
        <span>PRODUCT DESIGNER × PRODUCT MANAGER</span>
      </div>
      <div className="resume-identity">
        <p className="resume-kicker">PERSONAL PROFILE / 个人简历</p>
        <h1>贾子良</h1>
        <h2>产品设计师 / 产品经理</h2>
        <p className="resume-summary">产品设计专业出身，拥有约 7 年产品与工业设计经验。经历覆盖电子 3C、文创、设备及医疗产品，从产品调研、立项判断到设计落地，在用户需求、商业目标与制造实现之间建立清晰连接，熟练使用 AI 辅助办公，提高工作效率。</p>
        <div className="resume-contact-grid">
          <a href="tel:19806700238"><Phone size={17}/><span>电话</span><strong>19806700238</strong></a>
          <a href="mailto:1270137399@qq.com"><Mail size={17}/><span>邮箱</span><strong>1270137399@qq.com</strong></a>
          <div><CalendarDays size={17}/><span>出生</span><strong>1996.03.05</strong></div>
          <div><GraduationCap size={17}/><span>学历</span><strong>本科</strong></div>
        </div>
      </div>
    </section>

    <section className="resume-content resume-shell">
      <div className="resume-experience">
        <header><span>01</span><div><p>EXPERIENCE</p><h2>工作经历</h2></div></header>
        <div className="resume-timeline">
          {experience.slice().reverse().map((item,index)=><article key={item.period}>
            <span className="resume-index">0{index+1}</span>
            <time>{item.period}</time>
            <div><h3>{item.company}</h3><p>{item.role}</p></div>
            <strong>{item.detail}</strong>
          </article>)}
          <article className="resume-education">
            <span className="resume-index">EDU</span>
            <time>2019.06</time>
            <div><h3>河北美术学院</h3><p>产品设计专业</p></div>
            <strong>本科毕业</strong>
          </article>
        </div>
      </div>

      <aside className="resume-skills">
        <header><span>02</span><div><p>PROFESSIONAL SKILLS</p><h2>专业技能</h2></div></header>
        <div className="resume-skill-list">
          {skills.map(group=><div key={group.type}><h3>{group.type}</h3><p>{group.items.map(item=><span key={item}>{item}</span>)}</p></div>)}
        </div>
        <div className="resume-note"><span>PROFILE</span><strong>从产品定义到设计落地</strong><p>连接调研、判断、设计表达与项目推进。</p></div>
      </aside>
    </section>

    <footer className="resume-footer resume-shell"><span>© 2026 JIA ZILIANG</span><a href="mailto:1270137399@qq.com">LET'S WORK TOGETHER <ArrowUpRight size={18}/></a></footer>
  </main>
}
