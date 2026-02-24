"use client";

import { motion } from "motion/react";
import { ArrowRight, Shield, Activity, BarChart3, Binary, Layers } from "lucide-react";

export default function SovereignPortal() {
  return (
    <main className="min-h-screen bg-brand-white text-brand-charcoal font-sans overflow-x-hidden">
      {/* 🏛️ INSTITUTIONAL HEADER */}
      <nav className="fixed top-0 w-full z-50 border-b border-brand-charcoal/5 bg-brand-white/80 backdrop-blur-md px-6 md:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-blue flex items-center justify-center">
            <Shield className="text-white w-5 h-5" />
          </div>
          <span className="font-serif font-bold text-xl tracking-tight">EMPATHOAI</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest opacity-60">
          <a href="#foundations" className="hover:opacity-100 transition-opacity">Foundations</a>
          <a href="#systems" className="hover:opacity-100 transition-opacity">System Design</a>
          <a href="#engineering" className="hover:opacity-100 transition-opacity">Engineering</a>
        </div>
        <button className="bg-brand-charcoal text-white text-[10px] items-center uppercase tracking-[0.2em] px-6 py-2.5 font-bold hover:bg-brand-blue transition-colors flex gap-2">
          Secure Access <ArrowRight className="w-3 h-3" />
        </button>
      </nav>

      {/* 📐 HERO: THE ARCHITECTURAL RIGOR */}
      <section className="relative pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto border-x border-brand-charcoal/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block border border-brand-charcoal px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            Institutional Growth Architecture
          </span>
          <h1 className="font-serif text-5xl md:text-8xl leading-[0.9] mb-12 tracking-tighter">
            Rediseñamos el Crecimiento como una <span className="italic">Arquitectura Determinística.</span>
          </h1>
          <p className="font-sans text-xl md:text-2xl opacity-70 leading-relaxed max-w-2xl mb-12">
            No optimizamos campañas. Construimos sistemas de soberanía comercial diseñados para la escalabilidad institucional y el control absoluto del margen.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 border border-brand-charcoal flex items-center justify-center group-hover:bg-brand-charcoal group-hover:text-white transition-all">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Methodology</p>
                <p className="text-sm font-bold">The 3-Layer Architecture™</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* STATS STRIP */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 border-y border-brand-charcoal/10 py-12 gap-8">
          {[
            { label: "Deterministic Logic", val: "100%" },
            { label: "Predictable Margin", val: "Alpha" },
            { label: "System Uptime", val: "Sovereign" },
            { label: "Risk Mitigation", val: "Absolute" }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">{stat.label}</p>
              <p className="font-serif text-3xl">{stat.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🛡️ LAYER 01: STRATEGIC FOUNDATIONS */}
      <section id="foundations" className="bg-brand-gray/50 py-32 px-6 md:px-12 border-b border-brand-charcoal/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-brand-blue font-bold text-xs tracking-tighter mb-4 block">01 / FOUNDATIONS</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              Diseño de Oferta y <br />Posicionamiento Estratégico.
            </h2>
            <p className="font-sans text-lg opacity-80 leading-relaxed mb-8">
              La escalabilidad no comienza con el tráfico, sino con la estructura de la oferta. Mapeamos las ineficiencias del mercado para construir una narrativa de autoridad que elimine la resistencia a la compra.
            </p>
            <ul className="space-y-4">
              {["Offer Hardening", "Authority Framing", "Market Arbitrage"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-blue">
                  <div className="w-1.5 h-1.5 bg-brand-blue" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square bg-white border border-brand-charcoal/5 shadow-2xl p-8 flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Shield className="w-64 h-64" />
            </div>
            <div className="space-y-6 relative z-10">
              <div className="h-0.5 w-full bg-brand-charcoal/10" />
              <div className="flex justify-between items-end">
                <p className="font-serif text-6xl">L01</p>
                <p className="text-[10px] font-bold tracking-widest uppercase opacity-40">Blueprint Revision 3.2</p>
              </div>
              <p className="text-sm border-l-2 border-brand-blue pl-4 italic opacity-70">
                "The sovereign leader does not compete; they architect the arena."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🌀 LAYER 02: SYSTEM DESIGN (THE DEEP BLUE ENGINE) */}
      <section id="systems" className="bg-brand-blue text-white py-32 relative overflow-hidden">
        <div className="sovereign-grid absolute inset-0 opacity-10" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-24">
            <span className="font-bold text-xs tracking-[0.5em] mb-4 block uppercase opactiy-50">Operational Core</span>
            <h2 className="font-serif text-5xl md:text-7xl mb-6">System Design.</h2>
            <p className="max-w-2xl mx-auto opacity-70 text-lg">
              Construimos el ecosistema de adquisición y monetización mediante lógica determinística de n8n, AI Agents y flujos automatizados de alta fidelidad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Activity, title: "Lead Qualification", desc: "Sistemas autónomos que filtran el ruido y entregan solo autoridad." },
              { icon: Binary, title: "Orchestration", desc: "Workflows de auto-sanación que garantizan la continuidad operativa." },
              { icon: BarChart3, title: "Monetization Architecture", desc: "Estructuras de pago y reserva sincronizadas con el flujo de caja." }
            ].map((feature, i) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={i}
                className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-white/30 transition-all"
              >
                <feature.icon className="w-8 h-8 mb-6 text-brand-gray group-hover:text-white transition-colors" />
                <h3 className="font-serif text-2xl mb-4">{feature.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed font-sans">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 📈 LAYER 03: GROWTH ENGINEERING */}
      <section id="engineering" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-x border-brand-charcoal/5">
        <div className="flex flex-col md:flex-row gap-24 items-start">
          <div className="md:w-1/3 sticky top-32">
            <span className="text-brand-blue font-bold text-xs tracking-widest mb-4 block">03 / ENGINEERING</span>
            <h2 className="font-serif text-4xl mb-8 leading-tight">Optimization <br />& Modeling.</h2>
            <p className="font-sans opacity-70 leading-relaxed mb-8">
              La fase final de la arquitectura. Refinamos cada señal de datos para extraer el máximo margen. No escalamos por vanidad, escalamos por eficiencia estructural.
            </p>
            <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest hover:text-brand-blue transition-colors group">
              View Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <div className="md:w-2/3 grid gap-12">
            {[
              { label: "Margin Preservation", text: "Protección absoluta del ROAS mediante atribución determinística." },
              { label: "System Hardening", text: "Refuerzo de la seguridad y redundancia de datos ante cambios de señal." },
              { label: "Predictive Scaling", text: "Modelado matemático de presupuestos basado en señales de alta intención." }
            ].map((box, i) => (
              <div key={i} className="border-b border-brand-charcoal/10 pb-12">
                <p className="text-xs font-bold text-brand-blue mb-2">ENGINEERING STEP 0{i + 1}</p>
                <h4 className="font-serif text-2xl mb-4 underline decoration-brand-blue/30 underline-offset-8">{box.label}</h4>
                <p className="opacity-70 leading-relaxed max-w-xl">{box.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏛️ CALL TO ACTION: THE FINAL INSTITUTIONAL PUSH */}
      <footer className="bg-brand-charcoal text-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-7xl mb-12">Finalizar el Caos. <br />Arquitectar la Soberanía.</h2>
          <p className="text-lg opacity-50 mb-12 max-w-xl mx-auto font-sans">
            Solo aceptamos un número limitado de arquitecturas por ciclo trimestral para garantizar el máximo rigor institucional. Solicite su diagnóstico técnico.
          </p>
          <div className="flex justify-center flex-col md:flex-row gap-6">
            <button className="bg-white text-brand-charcoal px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-brand-gray transition-all">
              Solicitar Diagnóstico
            </button>
            <button className="border border-white/20 px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
              Institutional Vault
            </button>
          </div>
        </div>
        <div className="mt-40 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between text-[10px] font-bold uppercase tracking-[0.4em] opacity-30">
          <p>© 2026 EMPATHOAI | GROWTH ARCHITECTURE</p>
          <p>BUILT BY ANTIGRAVITY | SYSTEM VERSION 3.0</p>
        </div>
      </footer>
    </main>
  );
}
