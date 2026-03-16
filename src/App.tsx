import { useEffect, useState, useRef } from 'react';
import { Button } from './components/Button';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show nav when scrolling up
      if (currentScrollY < lastScrollY) {
        setNavVisible(true);
      } 
      // Hide nav when scrolling down past 100px
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavVisible(false);
      }
      
      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Scroll to hero section on page load
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Observer já não precisa fazer nada
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
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-marble/94 backdrop-blur-2xl border-b border-border transition-all duration-300 ${scrolled ? 'h-16 shadow-lg' : 'h-24'} ${navVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="h-full px-12 md:px-24 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none hover:opacity-80 transition-opacity">
            <span className="font-ui text-base md:text-lg tracking-widest text-black font-normal">ODONTOCENTER</span>
            <span className="font-body text-xs tracking-widest text-silver-dark uppercase mt-0.5">Clínica</span>
          </a>

          {/* Menu Desktop */}
          <ul className="hidden lg:flex gap-8 list-none">
            <li><a href="#" className="font-body text-sm tracking-widest uppercase text-mid hover:text-cyan transition-colors duration-300 relative group">
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan transition-all duration-300 group-hover:w-full"></span>
            </a></li>
            <li><a href="#" className="font-body text-sm tracking-widest uppercase text-mid hover:text-cyan transition-colors duration-300 relative group">
              Tratamentos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan transition-all duration-300 group-hover:w-full"></span>
            </a></li>
            <li><a href="#" className="font-body text-sm tracking-widest uppercase text-mid hover:text-cyan transition-colors duration-300 relative group">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan transition-all duration-300 group-hover:w-full"></span>
            </a></li>
            <li><a href="#" className="font-body text-sm tracking-widest uppercase text-mid hover:text-cyan transition-colors duration-300 relative group">
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan transition-all duration-300 group-hover:w-full"></span>
            </a></li>
          </ul>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-6">
            {/* WhatsApp + Phone */}
            <div className="flex items-center gap-3">
              <a href="https://wa.me/5521972235605?text=Ol%C3%A1%21+Vim+pelo+Instagram+e+gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cyan-light flex items-center justify-center hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-cyan" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <div className="flex flex-col">
                <span className="font-body text-xs text-silver-dark tracking-widest uppercase">Tel</span>
                <a href="tel:6230000000" className="font-body text-sm font-semibold text-black hover:text-cyan transition-colors">(62) 3000-0000</a>
              </div>
            </div>

            {/* Button */}
            <Button variant="cyan" href="https://wa.me/5521972235605?text=Ol%C3%A1%21+Vim+pelo+Instagram+e+gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o" target="_blank" rel="noopener noreferrer">Agendar Consulta</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="cyan" href="https://wa.me/5521972235605?text=Ol%C3%A1%21+Vim+pelo+Instagram+e+gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o" target="_blank" rel="noopener noreferrer">Agendar</Button>
        </div>
      </nav>

      {/* HERO */}
      <section ref={heroRef} className="min-h-screen pt-24 md:pt-24 grid grid-cols-1 md:grid-cols-[55%_45%] gap-0 relative overflow-hidden">
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

        <div className="hidden md:flex h-screen md:h-auto relative overflow-hidden items-center justify-center" style={{
          backgroundImage: 'url(/images/tooth-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
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
              img: 'https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg'
            },
            { 
              title: 'Tecnologia de Ponta',
              link: '#',
              desc: 'Scanner, laser e outros equipamentos que possibilitam a interação imediata entre o paciente e o especialista para definição da anatomia e a estética que sempre sonhou.',
              img: 'https://clinicaayala.com.br/wp-content/uploads/2025/08/tecnologia_clinica-ayala-1024x512.png'
            },
            { 
              title: 'Equipe Especializada',
              link: '#',
              desc: 'Nossa equipe de profissionais está sempre atenta às novas tecnologias, aperfeiçoando o seu conhecimento e compartilhando-o da melhor maneira.',
              img: 'https://images.pexels.com/photos/3881430/pexels-photo-3881430.jpeg'
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
                src="https://images.pexels.com/photos/4269689/pexels-photo-4269689.jpeg" 
                alt="Nossa equipe"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Column 3 - Image + Button */}
          <div id="about-image2" className="fade-up" style={{ transitionDelay: '0.24s' }}>
            <div className="rounded-lg overflow-hidden shadow-lg mb-6">
              <img 
                src="https://images.pexels.com/photos/5355703/pexels-photo-5355703.jpeg" 
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
            MARCAR UMA CONSULTA
          </a>
        </div>

        {/* First Row - 3 Treatments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { name: 'Clareamento', desc: 'O clareamento dental é um tratamento seguro e confiável que torna os dentes mais claros, ou seja, mais brancos.', link: '#', icon: 'https://clinicaayala.com.br/wp-content/uploads/2022/12/clareamento.png' },
            { name: 'Implantes Dentários', desc: 'Substituição de dente perdido e/ou uma reabilitação oral completa, oferecendo a segurança de um sorriso saudável e confiável.', link: '#', icon: 'https://clinicaayala.com.br/wp-content/uploads/2022/12/implantes.png' },
            { name: 'Bruxismo', desc: 'Desordem funcional caracterizada pelo ranger e travar os dentes de forma involuntária com maior predominância durante o sono.', link: '#', icon: 'https://clinicaayala.com.br/wp-content/uploads/2022/12/digital.png' },
          ].map((treatment, i) => (
            <div key={i} className={`fade-up p-6 bg-cyan-50 rounded-lg hover:shadow-lg transition-all ${i === 0 ? '' : i === 1 ? 'delay-100' : 'delay-200'}`}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  {treatment.icon.startsWith('http') ? (
                    <img src={treatment.icon} alt={treatment.name} className="w-12 h-12 object-contain" />
                  ) : (
                    <div className="text-4xl">{treatment.icon}</div>
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className="font-display text-lg font-normal text-black mb-2">{treatment.name}</h3>
                  <p className="font-body text-sm leading-6 text-mid font-light mb-4">{treatment.desc}</p>
                  <a href={treatment.link} className="font-body text-xs tracking-widest uppercase text-cyan-500 font-medium flex items-center gap-2 hover:gap-3 transition-all group">
                    Saiba Mais
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Final Button */}
        <div className="text-center fade-up" style={{ transitionDelay: '0.6s' }}>
          <Button href="#">Veja todos os nossos tratamentos</Button>
        </div>
      </section>

      {/* CTA STRIP */}
      <div className="bg-marble px-12 md:px-24 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center relative overflow-hidden border-t border-b border-marble-vein">
        <div className="absolute inset-0 opacity-5" style={{
          background: 'repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(26,26,26,0.05) 80px, rgba(26,26,26,0.05) 81px)'
        }} />
        <div className="relative">
          <h2 className="font-display text-4xl md:text-5xl font-light text-black leading-tight">
            <strong className="font-semibold block">Agende sua</strong>
            <em className="italic font-light text-mid">consulta</em>
          </h2>
        </div>
        <div className="flex md:justify-center">
          <a 
            href="https://wa.me/5562300000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-body text-sm font-medium tracking-widest uppercase transition-all hover:shadow-lg animate-float-up"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar agora com a Clínica
          </a>
        </div>
      </div>

      {/* DIFERENCIAIS */}
      <section className="py-24 px-12 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch bg-white">
        {/* Left Column - Image with Cyan Background */}
        <div className="bg-gradient-to-br from-cyan-light via-cyan-light/80 to-cyan-light/60 flex items-center justify-center min-h-96 md:min-h-full relative overflow-hidden p-12">
          {/* Floating Icon */}
          <div className="absolute bottom-8 right-8 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-cyan">
            <svg className="w-10 h-10 text-cyan" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.5 3H4.5A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm-2 6h-3.5v3.5h-3v-3.5H7.5v3h3v3.5h3v-3.5h3.5v-3z"/>
            </svg>
          </div>

          <div id="diff-image" className="fade-up w-full">
            <img 
              src="https://images.pexels.com/photos/7803051/pexels-photo-7803051.jpeg" 
              alt="Profissional especializado"
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div id="diff-text" className="fade-up p-12 md:p-16 flex flex-col justify-center">
          <div className="eyebrow text-cyan mb-4">OdontoCenter</div>
          <h2 className="font-display text-4xl md:text-5xl font-normal leading-tight text-black mb-6">
            Nosso <em className="italic font-light text-cyan">Diferencial</em>
          </h2>
          <p className="font-body text-base leading-8 text-mid font-light mb-12">
            Em nossa clínica, com conhecimento e experiência aliados à tecnologia, diagnosticamos o paciente como um todo, alcançando os melhores resultados para todos os tratamentos.
          </p>

          {/* Progress Bars */}
          <div className="space-y-8 mb-12">
            {[
              { label: 'Equipamentos de Alta Tecnologia', pct: 100 },
              { label: 'Biossegurança Certificada', pct: 100 },
              { label: 'Profissionais Especializados', pct: 100 },
              { label: 'Satisfação dos Pacientes', pct: 100 },
            ].map((bar, i) => (
              <div key={i} className="w-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-body text-sm font-semibold tracking-widest uppercase text-charcoal flex-1">{bar.label}</span>
                  <span className="font-display text-3xl font-light text-cyan ml-4 min-w-24 text-right">{bar.pct}%</span>
                </div>
                <div className="h-2 bg-marble-vein relative overflow-hidden rounded-full shadow-sm">
                  <div 
                    className="h-full bg-black transition-all duration-1000 ease-out"
                    style={{
                      width: '100%',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <Button href="#" variant="cyan">Saiba Mais</Button>
        </div>
      </section>

      {/* BLOG/DEPOIMENTOS SECTION */}
      <section className="py-24 px-12 md:px-24 bg-white grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Left Column - Depoimentos */}
        <div>
          <div className="eyebrow text-cyan mb-4">DEPOIMENTOS</div>
          <h2 className="font-display text-5xl md:text-6xl font-normal leading-tight text-black mb-8">
            O que nossos<br/>
            <em className="italic font-light text-mid">pacientes dizem...</em>
          </h2>

          {/* Quote Icon */}
          <div className="mb-8">
            <img src="https://images.pexels.com/photos/5355857/pexels-photo-5355857.jpeg" alt="Quote" className="w-40 h-40 object-cover rounded-lg" />
          </div>

          {/* Testimonials Carousel */}
          <div className="space-y-8">
            {[
              {
                text: 'Fiz meu implante aqui e o resultado foi perfeito. A equipe é extremamente profissional e o ambiente transmite muita confiança.',
                name: 'Camila R.',
                role: 'Paciente',
                image: 'https://images.pexels.com/photos/3807491/pexels-photo-3807491.jpeg?w=100&h=100&fit=crop'
              },
              {
                text: 'Clínica maravilhosa, acolhedora, linda e com profissionais excepcionais! Recomendo de olhos fechados para todos.',
                name: 'Felipe M.',
                role: 'Paciente',
                image: 'https://images.pexels.com/photos-3807517/pexels-photo-3807517.jpeg?w=100&h=100&fit=crop'
              },
              {
                text: 'A tecnologia digital usada aqui é impressionante. Vi como ficaria meu sorriso antes mesmo de começar. Superou expectativas!',
                name: 'Letícia A.',
                role: 'Paciente',
                image: 'https://images.pexels.com/photos/3807491/pexels-photo-3807491.jpeg?w=100&h=100&fit=crop'
              },
            ].map((testimonial, i) => (
              <div key={i} className={`fade-up p-6 border-l-4 border-cyan ${i > 0 ? 'hidden' : 'block'}`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-cyan text-lg">★</span>
                  ))}
                </div>
                <p className="font-body text-base leading-8 text-mid font-light mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-cyan"
                  />
                  <div>
                    <div className="font-body text-sm font-semibold text-black">{testimonial.name}</div>
                    <div className="font-body text-xs text-silver-dark">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots - simulated carousel */}
          <div className="flex gap-3 mt-8 items-center">
            <button className="w-2.5 h-2.5 rounded-full bg-cyan transition-all hover:w-8"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-marble-vein transition-all hover:bg-cyan"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-marble-vein transition-all hover:bg-cyan"></button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="hidden md:flex items-center justify-center min-h-96">
          <div className="relative w-full h-96 bg-gradient-to-br from-cyan-light to-cyan-light/60 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3807491/pexels-photo-3807491.jpeg?w=500&h=500&fit=crop"
              alt="Profissional da clínica"
              className="w-full h-full object-cover"
            />
            {/* Overlay decorativo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* LOCATION MAP */}
      <section className="py-24 px-12 md:px-24 bg-marble">
        <div id="location-header" className="fade-up mb-12">
          <div className="eyebrow">Nos Encontre</div>
          <h2 className="section-h2">Venha Transformar<br/>seu <em>Sorriso</em></h2>
        </div>

        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3269989873397!2d-46.65915!3d-23.5889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce56e9e8e9e9e9!2sAv%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white px-12 md:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Logo and Description Section */}
          <div className="text-center mb-12">
            <a href="#" className="flex flex-col leading-none hover:opacity-80 transition-opacity justify-center items-center mb-6">
              <span className="font-ui text-lg md:text-xl tracking-widest text-black font-normal">ODONTOCENTER</span>
              <span className="font-body text-xs tracking-widest text-silver-dark uppercase mt-0.5">Clínica</span>
            </a>
            <p className="font-body text-base text-mid font-light max-w-2xl mx-auto mb-8">
              Onde a odontologia caminha de mãos dadas ao conhecimento, experiência e tecnologia, alcançando os melhores resultados.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mb-8">
              <a href="https://www.facebook.com/clinicadeboraayala/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-200 text-gray-600 hover:border-cyan-500 hover:text-cyan-500 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
              </a>
              <a href="https://www.instagram.com/clinicadeboraayala" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-200 text-gray-600 hover:border-cyan-500 hover:text-cyan-500 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/19160258/admin/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-200 text-gray-600 hover:border-cyan-500 hover:text-cyan-500 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=5562300000000" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-200 text-gray-600 hover:border-cyan-500 hover:text-cyan-500 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              </a>
            </div>

            {/* CTA Button */}
            <a 
              href="https://api.whatsapp.com/send/?phone=5562300000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-body text-sm font-medium tracking-widest uppercase transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              Marcar Agora uma Consulta
            </a>
          </div>

          <div className="border-t border-gray-200 pt-12 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Section */}
              <div>
                <h3 className="font-display text-lg font-normal text-black mb-6">Contato</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>
                    <span className="font-body text-sm text-mid font-light">Rua das Flores, 256 (sala 502)<br/>Rio de Janeiro - RJ<br/>CEP: 20030-040</span>
                  </li>
                  <li>
                    <a href="mailto:contato@odontocenter.com.br" className="flex gap-3 hover:text-cyan-500 transition-colors">
                      <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>
                      <span className="font-body text-sm text-mid font-light">contato@odontocenter.com.br</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:2133334444" className="flex gap-3 hover:text-cyan-500 transition-colors">
                      <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/></svg>
                      <span className="font-body text-sm text-mid font-light">(21) 3333-4444</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://api.whatsapp.com/send/?phone=5521998765432" className="flex gap-3 hover:text-cyan-500 transition-colors">
                      <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                      <span className="font-body text-sm text-mid font-light">(21) 99876-5432</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Left Column */}
              <div className="text-center">
                <p className="font-body text-sm text-mid font-light">
                  <strong>OdontoCenter</strong> Clínica<br/>
                  Desenvolvido com excelência.
                </p>
              </div>

              {/* Right Column */}
              <div className="text-center">
                <p className="font-body text-sm text-mid font-light mb-2">
                  <strong><em>Responsável Técnico:</em></strong><br/>
                  Dr. Carlos Alberto Silva – CRO 52.125/RJ
                </p>
                <p className="font-body text-sm text-mid font-light">
                  <strong><em>Inscrição no CRORJ:</em></strong><br/>
                  8932-RJ
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="font-body text-sm text-mid font-light">
              Copyright © 2026. All Right Reserved.<br/>
              <a href="#" className="text-cyan-500 hover:text-cyan-600 transition-colors">Política de Privacidade</a>
            </p>
          </div>
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
