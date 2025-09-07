export default function CalculatorEmbed(){ 
  return (<section id="calc" className="section anchor-offset"><div className="container">
    <div className="mb-6 md:mb-8 text-center"><h2 className="text-2xl md:text-3xl font-semibold">Névvarázs – Ajándék-kalkulátor</h2><p className="subtle mt-2">Írd be a nevet, a Panda ajánl.</p></div>
    <div style={borderRadius:'1rem',overflow:'hidden',border:'1px solid #eee'}>
      <iframe src="https://nevvarazs.babypanda.hu" title="Baby Panda Kalkulátor" style={width:'100%',height:'720px',border:'0'} allow="clipboard-write; fullscreen"></iframe>
    </div>
  </div></section>);
}