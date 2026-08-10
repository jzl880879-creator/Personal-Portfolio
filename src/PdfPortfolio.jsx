import * as pdfjs from './vendor/pdf.min.mjs'
import { useEffect, useRef, useState } from 'react'

function InlinePdfPage({pdf,pageNumber}){
  const host=useRef(null)
  const canvas=useRef(null)
  const [active,setActive]=useState(false)
  useEffect(()=>{
    const observer=new IntersectionObserver(([entry])=>setActive(entry.isIntersecting),{rootMargin:'1200px 0px'})
    if(host.current) observer.observe(host.current)
    return()=>observer.disconnect()
  },[])
  useEffect(()=>{
    let cancelled=false, task
    if(!active){if(canvas.current){canvas.current.width=1;canvas.current.height=1}return}
    ;(async()=>{
      const page=await pdf.getPage(pageNumber)
      if(cancelled)return
      const base=page.getViewport({scale:1})
      const width=Math.min(host.current?.clientWidth||1200,1440)
      const density=Math.min(window.devicePixelRatio||1,1.35)
      const viewport=page.getViewport({scale:(width/base.width)*density})
      const el=canvas.current
      el.width=Math.floor(viewport.width);el.height=Math.floor(viewport.height)
      task=page.render({canvasContext:el.getContext('2d',{alpha:false}),viewport})
      await task.promise
    })().catch(()=>{})
    return()=>{cancelled=true;task?.cancel()}
  },[active,pdf,pageNumber])
  return <figure ref={host} className="inline-pdf-page"><canvas ref={canvas}/><figcaption>{String(pageNumber).padStart(3,'0')} / 104</figcaption></figure>
}

export default function PdfPortfolio(){
  const [pdf,setPdf]=useState(null)
  useEffect(()=>{let mounted=true;(async()=>{pdfjs.GlobalWorkerOptions.workerSrc='/vendor/pdf.worker.min.mjs';const doc=await pdfjs.getDocument('/medical-portfolio.pdf').promise;if(mounted)setPdf(doc)})().catch(console.error);return()=>{mounted=false}},[])
  return <section className="inline-pdf-section">
    <header className="inline-pdf-head medical-shell"><span>FULL DESIGN PROCESS</span><h2>从调研到落地，<br/>完整呈现。</h2><p>MEDICAL PRODUCT DESIGN / PAGE 001—104</p></header>
    {!pdf?<div className="pdf-loading">正在载入完整设计过程…</div>:<div className="inline-pdf-list">{Array.from({length:pdf.numPages},(_,i)=><InlinePdfPage key={i+1} pdf={pdf} pageNumber={i+1}/>)}</div>}
  </section>
}