import { useEffect, useState } from 'react';
import { Button } from './components/Button';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleElements((prev) => new Set([...prev, entry.target.id]));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach((el) => {
      if (!el.id) el.id = `fade-${Math.random()}`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const SVGTooth = () => (
    <svg className="w-64 opacity-20 mx-auto" viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 20 C60 20 30 50 30 85 C30 110 40 130 50 155 C60 180 65 220 80 220 C90 220 95 195 100 180 C105 195 110 220 120 220 C135 220 140 180 150 155 C160 130 170 110 170 85 C170 50 140 20 100 20Z" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5" fill="none"/>
      <path d="M75 80 C75 60 100 50 125 80" stroke="rgba(0,0,0,0.15)" strokeWidth="1" fill="none"/>
    </svg>
  );

  return (
    <div className="bg-marble text-black">
      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 h-24 flex items-center justify-between px-12 bg-marble/94 backdrop-blur-2xl border-b border-border transition-all duration-300 ${scrolled ? 'h-16 shadow-lg' : ''}`}>
        <a href="#" className="flex flex-col leading-none">
          <span className="font-ui text-lg tracking-widest text-black font-normal">ODONTOCENTER</span>
          <span className="font-body text-xs tracking-widest text-silver-dark uppercase mt-0.5">Clínica Odontológica</span>
        </a>
        <ul className="hidden md:flex gap-11 list-none">
          <li><a href="#" className="font-body text-sm tracking-widest uppercase text-mid hover:text-black transition-colors">Sobre</a></li>
          <li><a href="#" className="font-body text-sm tracking-widest uppercase text-mid hover:text-black transition-colors">Tratamentos</a></li>
          <li><a href="#" className="font-body text-sm tracking-widest uppercase text-mid hover:text-black transition-colors">Equipe</a></li>
          <li><a href="#" className="font-body text-sm tracking-widest uppercase text-mid hover:text-black transition-colors">Blog</a></li>
          <li><a href="#" className="font-body text-sm tracking-widest uppercase text-mid hover:text-black transition-colors">Contato</a></li>
        </ul>
        <div className="flex items-center gap-6">
          <span className="font-body text-sm tracking-wider text-mid">(62) 3000-0000</span>
          <Button>Agendar Consulta</Button>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen pt-24 grid grid-cols-1 md:grid-cols-[55%_45%] gap-0 relative overflow-hidden">
        <div className="flex flex-col justify-center px-12 py-24 md:py-0 relative">
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-silver/50 to-transparent" />
          
          <div className="eyebrow mb-6">
            <span>Excelência em Odontologia</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-normal leading-tight text-black mb-2">
            Seu sorriso<br />
            merece o<br />
            <em className="italic font-light text-mid">melhor cuidado</em>
          </h1>
          
          <div className="flex items-center gap-4 my-6">
            <span className="font-body text-xs tracking-widest uppercase text-silver">Clínica Odontológica</span>
          </div>
          
          <p className="font-body text-base leading-8 text-mid font-light max-w-md mb-12">
            Com tecnologia de última geração e uma equipe de especialistas dedicados, transformamos cada tratamento em uma experiência única, confortável e com resultados excepcionais.
          </p>
          
          <div className="flex gap-3 flex-wrap mb-12">
            <Button>Agendar Consulta</Button>
            <Button variant="outline">Conhecer a Clínica</Button>
          </div>
          
          <div className="flex gap-8 pt-6 border-t border-border">
            <div>
              <div className="font-display text-4xl font-light text-black">15+</div>
              <div className="font-body text-xs tracking-widest uppercase text-silver-dark mt-1">Anos de Experiência</div>
            </div>
            <div>
              <div className="font-display text-4xl font-light text-black">5k+</div>
              <div className="font-body text-xs tracking-widest uppercase text-silver-dark mt-1">Pacientes Atendidos</div>
            </div>
            <div>
              <div className="font-display text-4xl font-light text-black">12</div>
              <div className="font-body text-xs tracking-widest uppercase text-silver-dark mt-1">Especialidades</div>
            </div>
          </div>
        </div>

        <div className="h-screen md:h-auto bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-20" style={{
            background: 'repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(255,255,255,0.1) 80px, rgba(255,255,255,0.1) 82px)'
          }} />
          
          <SVGTooth />

          <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 border-4 border-gray-400 flex flex-col items-center justify-center shadow-xl animate-rotate-badge">
            <span className="font-display text-2xl font-light text-black">ISO</span>
            <span className="font-body text-xs tracking-widest uppercase text-mid text-center text-black">Certificada<br/>9001</span>
          </div>

          <div className="absolute bottom-12 right-12 bg-white p-6 shadow-2xl border-t-2 border-black animate-float-up">
            <div className="font-display text-3xl font-light text-black">100%</div>
            <div className="font-body text-xs tracking-widest uppercase text-silver-dark mt-1">Satisfação Garantida</div>
          </div>
        </div>
      </section>

      {/* FEATURES BAND */}
      <section className="py-16 px-12 md:px-24 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Odontologia Avançada',
              link: '#',
              desc: 'Realizamos diversos tratamentos, tais como: bruxismo, clareamento, implantes, estética, periodontia, GTB, osteopatia, DTM, Endodontia Microscópica, ronco entre outros.',
              img: 'https://images.unsplash.com/photo-1606811841689-23f3461bfba1?w=600&h=400&fit=crop&q=80'
            },
            { 
              title: 'Tecnologia de Ponta',
              link: '#',
              desc: 'Scanner, laser e outros equipamentos que possibilitam a interação imediata entre o paciente e o especialista para definição da anatomia e a estética que sempre sonhou.',
              img: 'https://images.unsplash.com/photo-1631217314830-4ff259267a92?w=600&h=400&fit=crop&q=80'
            },
            { 
              title: 'Equipe Especializada',
              link: '#',
              desc: 'Nossa equipe de profissionais está sempre atenta às novas tecnologias, aperfeiçoando o seu conhecimento e compartilhando-o da melhor maneira.',
              img: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop&q=80'
            },
          ].map((feature, i) => (
            <div key={i} className="fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="relative overflow-hidden rounded-lg mb-4 group">
                <a href={feature.link} className="block">
                  <img 
                    src={feature.img} 
                    alt={feature.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
              <h3 className="font-display text-xl font-normal text-black mb-3">
                <a href={feature.link} className="hover:text-silver-dark transition-colors">
                  {feature.title}
                </a>
              </h3>
              <p className="font-body text-sm leading-7 text-mid font-light">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-12 md:px-24 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Column 1 - Text */}
          <div id="about-text" className="fade-up">
            <div className="eyebrow">ODONTOCENTER</div>
            <h2 className="font-display text-3xl md:text-4xl font-normal leading-tight text-black tracking-tight mb-6">
              Conheça a <br/>nossa <em>história</em>
            </h2>
            <p className="font-body text-base leading-8 text-mid font-light mb-8">
              Fundada com a missão de elevar o padrão da odontologia, oferecemos assistência de qualidade com profissionais experientes e equipamentos de última geração.
            </p>
            
            {/* Icon Box */}
            <div className="flex gap-4 p-6 bg-marble rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border border-silver">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5h.01" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg font-normal text-black mb-2">Experiência e Dedicação</h3>
                <p className="font-body text-sm leading-6 text-mid font-light">
                  Com anos de experiência, nossa equipe é especializada em diversos tratamentos odontológicos com aperfeiçoamento contínuo em renomadas instituições.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 - Image */}
          <div id="about-image1" className="fade-up" style={{ transitionDelay: '0.12s' }}>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=500&fit=crop&q=80" 
                alt="Nossa equipe"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Column 3 - Image + Button */}
          <div id="about-image2" className="fade-up" style={{ transitionDelay: '0.24s' }}>
            <div className="rounded-lg overflow-hidden shadow-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c676c56e3f?w=350&h=550&fit=crop&q=80" 
                alt="Profissional"
                className="w-full h-auto object-cover"
              />
            </div>
            <Button href="#">Mais sobre nossa Equipe</Button>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="py-24 px-12 md:px-24 bg-white">
        <div className="text-center mb-12 fade-up">
          <div className="eyebrow justify-center">OdontoCenter</div>
          <h2 className="section-h2 mb-6">Tratamentos</h2>
          <p className="font-body text-base leading-8 text-mid font-light max-w-2xl mx-auto mb-8">
            Acreditamos que a integração do corpo técnico e clínico trará a melhor avaliação das necessidades dos pacientes e, assim, a definição de um tratamento coerente e eficiente.
          </p>
          <a 
            href="https://wa.me/5562300000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-body text-sm font-medium tracking-widest uppercase transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Marcar uma Consulta
          </a>
        </div>

        {/* First Row - 3 Treatments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {[
            { name: 'Clareamento', desc: 'O clareamento dental é um tratamento seguro e confiável que torna os dentes mais claros, ou seja, mais brancos.', link: '#', icon: '🦷' },
            { name: 'Implantes Dentários', desc: 'Substituição de dente perdido e/ou uma reabilitação oral completa, oferecendo a segurança de um sorriso saudável e confiável.', link: '#', icon: '🔧' },
            { name: 'Bruxismo', desc: 'Desordem funcional caracterizada pelo ranger e travar os dentes de forma involuntária com maior predominância durante o sono.', link: '#', icon: '😴' },
          ].map((treatment, i) => (
            <div key={i} className={`fade-up p-8 border border-border rounded-lg hover:shadow-lg transition-all ${i === 0 ? '' : i === 1 ? 'delay-100' : 'delay-200'}`}>
              <div className="text-5xl mb-4">{treatment.icon}</div>
              <h3 className="font-display text-xl font-normal text-black mb-3">{treatment.name}</h3>
              <p className="font-body text-sm leading-7 text-mid font-light mb-6">{treatment.desc}</p>
              <a href={treatment.link} className="font-body text-xs tracking-widest uppercase text-charcoal font-medium flex items-center gap-2 hover:gap-3 transition-all group">
                Saiba Mais
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Second Row - 3 Treatments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { name: 'GBT - Guided Biofilm Therapy', desc: 'Protocolo de higiene oral desenvolvido na Suíça, indolor, rápido e seguro, que elimina o biofilme e cálculos, atuando com suavidade.', link: '#', icon: '🧼' },
            { name: 'Odontologia Digital', desc: 'Garante tratamentos que transformam o sorriso e rejuvenescem a face com menos desgaste dos dentes, precisão e velocidade.', link: '#', icon: '💻' },
            { name: 'Ortodontia Avançada', desc: 'Transforma por completo a estética e a saúde da boca. As técnicas passam pelo diagnóstico e planejamento extremamente precisos.', link: '#', icon: '😁' },
          ].map((treatment, i) => (
            <div key={i} className={`fade-up p-8 border border-border rounded-lg hover:shadow-lg transition-all ${i === 0 ? 'delay-300' : i === 1 ? 'delay-400' : 'delay-500'}`}>
              <div className="text-5xl mb-4">{treatment.icon}</div>
              <h3 className="font-display text-xl font-normal text-black mb-3">{treatment.name}</h3>
              <p className="font-body text-sm leading-7 text-mid font-light mb-6">{treatment.desc}</p>
              <a href={treatment.link} className="font-body text-xs tracking-widest uppercase text-charcoal font-medium flex items-center gap-2 hover:gap-3 transition-all group">
                Saiba Mais
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Final Button */}
        <div className="text-center fade-up" style={{ transitionDelay: '0.6s' }}>
          <Button href="#">Veja todos os nossos tratamentos</Button>
        </div>
      </section>

      {/* CTA STRIP */}
      <div className="bg-black px-12 md:px-24 py-20 flex flex-col md:flex-row md:justify-between md:items-center gap-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          background: 'repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,0.1) 80px, rgba(255,255,255,0.1) 81px)'
        }} />
        <div className="relative">
          <h2 className="font-display text-3xl md:text-4xl font-light text-white leading-tight">
            <strong className="font-semibold block">Agende sua consulta</strong>
            e transforme seu sorriso
          </h2>
        </div>
        <Button variant="silver" href="https://wa.me/5562300000000" target="_blank" rel="noopener">Falar no WhatsApp</Button>
      </div>

      {/* DIFERENCIAIS */}
      <section className="py-24 px-12 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start bg-white">
        <div id="diff-text" className="fade-up">
          <div className="eyebrow">OdontoCenter</div>
          <h2 className="section-h2 mb-6">Nosso <em>Diferencial</em></h2>
          <p className="font-body text-base leading-8 text-mid font-light mb-8">
            Combinamos tecnologia de ponta, profissionais altamente qualificados e um atendimento humanizado para entregar resultados que superam expectativas — sempre com biossegurança certificada.
          </p>
          <Button>Conhecer a Clínica</Button>
        </div>

        <div id="diff-bars" className="fade-up delay-200 space-y-8">
          {[
            { label: 'Equipamentos de Alta Tecnologia', pct: 100 },
            { label: 'Biossegurança Certificada', pct: 100 },
            { label: 'Profissionais Especializados', pct: 100 },
            { label: 'Satisfação dos Pacientes', pct: 100 },
          ].map((bar, i) => (
            <div key={i}>
              <div className="flex justify-between items-baseline mb-2">
                <span className="font-body text-xs tracking-widest uppercase text-charcoal font-medium">{bar.label}</span>
                <span className="font-display text-2xl font-light text-black">{bar.pct}%</span>
              </div>
              <div className="h-0.5 bg-marble-vein relative overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-black to-silver transition-all duration-1000"
                  style={{
                    width: visibleElements.has(`diff-bars`) ? `${bar.pct}%` : '0%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-12 md:px-24 bg-marble">
        <div id="testi-header" className="fade-up mb-12">
          <div className="eyebrow">Depoimentos</div>
          <h2 className="section-h2">O que dizem<br/>nossos <em>pacientes</em></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { author: 'C', name: 'Camila R.', role: 'Paciente desde 2022', quote: 'Fiz meu implante aqui e o resultado foi perfeito. A equipe é extremamente profissional e o ambiente transmite muita confiança.' },
            { author: 'F', name: 'Felipe M.', role: 'Paciente desde 2023', quote: 'O clareamento ficou incrível! Nunca imaginei que seria tão rápido e indolor. Recomendo de olhos fechados.' },
            { author: 'L', name: 'Letícia A.', role: 'Paciente desde 2021', quote: 'A tecnologia digital usada aqui é impressionante. Vi como ficaria meu sorriso antes mesmo de começar. Superou todas as expectativas.' },
          ].map((card, i) => (
            <div key={i} id={`testi-${i}`} className={`fade-up bg-white border border-border p-8 relative transition-shadow hover:shadow-lg ${i === 1 ? 'delay-150' : i === 2 ? 'delay-300' : ''}`}>
              <div className="absolute top-6 right-8 font-display text-7xl leading-none text-black/5 italic">"</div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-silver-dark text-lg">★</span>
                ))}
              </div>
              <p className="font-display text-lg italic font-normal text-charcoal leading-8 mb-6">{card.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border border-silver flex items-center justify-center font-display text-sm font-medium text-black">
                  {card.author}
                </div>
                <div>
                  <div className="font-body text-sm font-semibold tracking-widest uppercase text-black">{card.name}</div>
                  <div className="font-body text-xs text-silver-dark tracking-wide">{card.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black px-12 md:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10 mb-6">
          <div>
            <div className="font-ui text-lg tracking-widest text-white font-normal block">ODONTOCENTER</div>
            <span className="font-body text-xs tracking-widest text-silver uppercase block mt-1">Clínica Odontológica</span>
            <p className="font-body text-sm leading-7 text-white/35 font-light max-w-xs mt-6 mb-4">
              Excelência, tecnologia e cuidado humanizado para o seu sorriso perfeito.
            </p>
            <div className="flex gap-2">
              {['in', 'ig', 'fb', 'yt'].map((social) => (
                <a key={social} href="#" className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/35 text-xs font-body hover:border-silver hover:text-silver transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-body text-xs tracking-widest uppercase text-white font-normal mb-4">Navegação</div>
            <ul className="space-y-2">
              {['A Clínica', 'Nossa Equipe', 'Biossegurança', 'Blog', 'Trabalhe Conosco'].map((link) => (
                <li key={link}><a href="#" className="font-body text-sm text-white/40 hover:text-silver transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-body text-xs tracking-widest uppercase text-white font-normal mb-4">Tratamentos</div>
            <ul className="space-y-2">
              {['Implantes', 'Clareamento', 'Ortodontia', 'Periodontia', 'Endodontia'].map((link) => (
                <li key={link}><a href="#" className="font-body text-sm text-white/40 hover:text-silver transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-body text-xs tracking-widest uppercase text-white font-normal mb-4">Contato</div>
            <p className="font-body text-sm text-white/40">(62) 3000-0000</p>
            <p className="font-body text-sm text-white/40">contato@odontocenter.com.br</p>
            <p className="font-body text-sm text-white/40 mt-2">
              Av. T-63, 1500<br/>
              Goiânia – GO
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <span className="font-body text-xs text-white/20">© 2025 OdontoCenter Clínica Odontológica. Todos os direitos reservados.</span>
          <span className="font-body text-xs text-white/20 mt-4 md:mt-0">Desenvolvido com excelência</span>
        </div>
      </footer>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/5562300000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-wa-pulse"
      >
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
