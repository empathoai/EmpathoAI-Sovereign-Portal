import React from 'react';

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden selection:bg-primary selection:text-white">
      <header className="fixed top-0 z-50 w-full border-b border-charcoal/10 bg-background-light/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter text-charcoal">EmpathoAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-12">
            <a className="text-xs uppercase tracking-widest font-medium text-charcoal/70 hover:text-charcoal transition-colors" href="#">Approach</a>
            <a className="text-xs uppercase tracking-widest font-medium text-charcoal/70 hover:text-charcoal transition-colors" href="#">Architecture</a>
            <a className="text-xs uppercase tracking-widest font-medium text-charcoal/70 hover:text-charcoal transition-colors" href="#">Founder</a>
          </nav>
          <button className="bg-primary text-white text-[10px] uppercase tracking-[0.2em] font-bold px-6 py-3 rounded-sm hover:opacity-90 transition-opacity">
            Apply for Strategic Conversation
          </button>
        </div>
      </header>

      <main className="flex-grow pt-32">
        <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center md:px-12">
          <div className="max-w-4xl space-y-12">
            <h1 className="serif-heading text-4xl leading-tight text-charcoal md:text-6xl lg:text-7xl">
              Growth architecture for companies that need to scale with precision.
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-charcoal/60 md:text-xl">
              We design structural systems that transform intermittent growth into profitable predictability.
            </p>
            <div className="pt-8">
              <button className="bg-primary text-white text-xs uppercase tracking-[0.3em] font-bold px-10 py-5 rounded-sm hover:ring-1 hover:ring-primary hover:ring-offset-4 transition-all">
                Apply for Strategic Conversation
              </button>
            </div>
          </div>
        </section>

        <section className="border-y border-charcoal/5 bg-white py-32 px-6 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-end">
              <div className="space-y-8">
                <span className="text-[10px] uppercase tracking-[0.4em] text-primary/60 font-bold">The Sovereign Audit</span>
                <h2 className="serif-heading text-3xl leading-snug text-charcoal md:text-5xl">
                  The problem is not your marketing. <br />It is your architecture.
                </h2>
                <p className="text-lg leading-relaxed text-charcoal/60">
                  Institutional-grade growth requires structural rigor, not just tactical execution. We audit the foundations to identify systemic fractures before they compromise your scale.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="border-l border-charcoal/10 pl-6 py-4">
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: '32px', fontVariationSettings: "'wght' 200" }}>shield_with_heart</span>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Foundational Audit</h3>
                  <p className="text-sm text-charcoal/50">Identifying the cracks in your current growth model through systemic stress testing.</p>
                </div>
                <div className="border-l border-charcoal/10 pl-6 py-4">
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: '32px', fontVariationSettings: "'wght' 200" }}>account_tree</span>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Structural Integrity</h3>
                  <p className="text-sm text-charcoal/50">Rebuilding the core systems for resilience against market volatility and scale friction.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="mb-24 text-center">
              <h2 className="serif-heading text-3xl text-charcoal md:text-4xl mb-4">The 3-Layer Architecture™</h2>
              <p className="text-xs uppercase tracking-[0.5em] text-charcoal/40 font-medium">Precision Engineering Framework</p>
            </div>
            <div className="relative space-y-0">
              <div className="absolute left-[20px] top-0 h-full w-[1px] bg-charcoal/10 md:left-1/2"></div>
              
              <div className="relative flex flex-col md:flex-row md:items-center py-16 group">
                <div className="flex-1 md:text-right md:pr-16 order-2 md:order-1 mt-6 md:mt-0">
                  <h4 className="text-xl font-bold text-charcoal mb-2">01 Strategical Foundations</h4>
                  <p className="text-charcoal/50 max-w-sm md:ml-auto">Core alignment and architectural mapping of the enterprise value chain.</p>
                </div>
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-charcoal/10 bg-background-light order-1 md:order-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <div className="flex-1 md:pl-16 order-3">
                  <div className="h-32 w-full bg-charcoal/[0.02] border border-charcoal/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-charcoal/20" style={{ fontSize: '48px', fontVariationSettings: "'wght' 100" }}>grid_view</span>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row md:items-center py-16 group">
                <div className="flex-1 md:pr-16 order-3 md:order-1">
                  <div className="h-32 w-full bg-charcoal/[0.02] border border-charcoal/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-charcoal/20" style={{ fontSize: '48px', fontVariationSettings: "'wght' 100" }}>schema</span>
                  </div>
                </div>
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-charcoal/10 bg-background-light order-1 md:order-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <div className="flex-1 md:pl-16 order-2 mt-6 md:mt-0">
                  <h4 className="text-xl font-bold text-charcoal mb-2">02 System Design</h4>
                  <p className="text-charcoal/50 max-w-sm">Designing the structural growth engine with modular scalability.</p>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row md:items-center py-16 group">
                <div className="flex-1 md:text-right md:pr-16 order-2 md:order-1 mt-6 md:mt-0">
                  <h4 className="text-xl font-bold text-charcoal mb-2">03 Growth Engineering</h4>
                  <p className="text-charcoal/50 max-w-sm md:ml-auto">Precision execution, automation, and continuous optimization of the scaling vector.</p>
                </div>
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-charcoal/10 bg-background-light order-1 md:order-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <div className="flex-1 md:pl-16 order-3">
                  <div className="h-32 w-full bg-charcoal/[0.02] border border-charcoal/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-charcoal/20" style={{ fontSize: '48px', fontVariationSettings: "'wght' 100" }}>precision_manufacturing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-32 px-6 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div className="relative aspect-[4/5] overflow-hidden bg-background-light grayscale">
                <img 
                  alt="Alex Strategic Architect Profile" 
                  className="h-full w-full object-cover mix-blend-multiply opacity-90" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvXQKU5QdH6POaHenXeKrneI-posKOCxpjX9Zr7vbgElid6wv7Ds_T95Lv68-7R7Ab7o_Giu4PHy_xt0baPd4KLK6c4tW6UXirRmyUQbdsAesYJvdsrYN-z-CHDz3VDC66oQJcCTHlr38vv9Utw4lywr8b5G4Uy5_XEjhEqgWcnsf6LLGwJMg4H8pr1wxVU6q7i4L3YKFwclMxtO8X-XanpqUNZ43mu3FcNBw0SQvHjOw1vtAZG6nKZ8Yp9FKIOdAOEOLhyEqDi3nd" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-charcoal/40 to-transparent p-12">
                  <p className="text-white text-sm tracking-[0.2em] font-medium">FOUNDER &amp; CHIEF ARCHITECT</p>
                </div>
              </div>
              <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="serif-heading text-4xl text-charcoal">Alex, Strategic Architect</h2>
                  <p className="text-xs uppercase tracking-[0.4em] text-primary/60 font-bold">The Visionary Behind the System</p>
                </div>
                <div className="space-y-6 text-lg leading-relaxed text-charcoal/70">
                  <p>With over two decades of experience in institutional growth, Alex treats companies not as marketing puzzles, but as architectural challenges. His philosophy is rooted in the belief that stability is the only true precursor to exponential scale.</p>
                  <p>Previously a consultant for Fortune 50 architectures, Alex now exclusively works with high-growth ventures seeking to transition from chaotic momentum to predictable institutional sovereignty.</p>
                </div>
                <div className="pt-4">
                  <a className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-charcoal border-b-2 border-primary/20 pb-2 hover:border-primary transition-all" href="#">
                    Review the Manifesto
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_right_alt</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-charcoal/5 bg-background-light py-20 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-xs space-y-6">
              <span className="text-2xl font-bold tracking-tighter text-charcoal">EmpathoAI</span>
              <p className="text-sm text-charcoal/50 leading-relaxed">
                A Sovereign Portal for the next generation of institutional-grade growth architecture.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-16 sm:grid-cols-3">
              <div className="space-y-4">
                <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/30">System</h5>
                <ul className="space-y-3 text-sm text-charcoal/70">
                  <li><a className="hover:text-primary" href="#">Approach</a></li>
                  <li><a className="hover:text-primary" href="#">Architecture</a></li>
                  <li><a className="hover:text-primary" href="#">Audit</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/30">Company</h5>
                <ul className="space-y-3 text-sm text-charcoal/70">
                  <li><a className="hover:text-primary" href="#">About</a></li>
                  <li><a className="hover:text-primary" href="#">Founder</a></li>
                  <li><a className="hover:text-primary" href="#">Privacy</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/30">Access</h5>
                <ul className="space-y-3 text-sm text-charcoal/70">
                  <li><a className="hover:text-primary" href="#">Portal</a></li>
                  <li><a className="hover:text-primary" href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-charcoal/5 pt-8 text-[10px] uppercase tracking-[0.2em] text-charcoal/40 font-medium">
            <p>© 2024 EmpathoAI Sovereign Portal v3. All rights reserved.</p>
            <div className="flex gap-8">
              <a className="hover:text-charcoal transition-colors" href="#">LinkedIn</a>
              <a className="hover:text-charcoal transition-colors" href="#">The Manifesto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
