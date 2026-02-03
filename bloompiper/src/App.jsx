import React, { useState, useEffect } from 'react';
import { Instagram, MessageCircle, Menu, X, Heart, MapPin, Clock, Mail, ExternalLink, ChevronRight } from 'lucide-react';



const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Manejo del scroll para la barra de navegación
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Datos de contacto
  const whatsappNumber = "5356856498"; // Asumiendo código Cuba +53 basado en el video
  const instagramUrl = "https://www.instagram.com/bloompipper?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  
  const handleWhatsappClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hola%20Bloom%20Piper,%20me%20interesa%20hacer%20un%20pedido.`, '_blank');
  };

  return (
    <div className="font-sans text-gray-800 antialiased bg-white selection:bg-pink-200 selection:text-pink-900">
      
      {/* Navegación */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className={`text-2xl font-serif font-bold tracking-tighter ${scrolled ? 'text-pink-600' : 'text-pink-600 md:text-white shadow-sm'}`}>
              Bloom Piper
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Colecciones', 'Nosotros', 'Contacto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-medium hover:text-pink-500 transition-colors ${scrolled ? 'text-gray-600' : 'text-white'}`}>
                {item}
              </a>
            ))}
            <button 
              onClick={handleWhatsappClick}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105 ${scrolled ? 'bg-pink-500 text-white hover:bg-pink-600' : 'bg-white text-pink-600 hover:bg-gray-100'}`}
            >
              Pedir Ahora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={scrolled ? 'text-gray-800' : 'text-white'}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 flex flex-col items-center space-y-4">
            {['Colecciones', 'Nosotros', 'Contacto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-gray-600 font-medium hover:text-pink-500">
                {item}
              </a>
            ))}
            <button onClick={handleWhatsappClick} className="flex items-center gap-2 text-pink-500 font-bold">
              <MessageCircle size={18} /> Contactar por WhatsApp
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1563241527-3004b7be0ee8?q=80&w=2070&auto=format&fit=crop" 
            alt="Fondo floral neón" 
            className="w-full h-full object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <h2 className="text-white text-lg md:text-xl font-light tracking-[0.2em] mb-4 uppercase animate-fade-in-up">
            Floristería Boutique
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
            Minimalismo floral <br />
            <span className="italic text-pink-200">con esencia natural</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            Ramos de flores únicos diseñados para capturar la belleza en La Habana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleWhatsappClick}
              className="px-8 py-4 bg-pink-500 text-white rounded-none text-lg font-medium hover:bg-pink-600 transition-all duration-300 shadow-lg hover:shadow-pink-500/30 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Ordenar Bouquet
            </button>
            <a 
              href="#colecciones"
              className="px-8 py-4 bg-transparent border border-white text-white rounded-none text-lg font-medium hover:bg-white hover:text-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Ver Catálogo
            </a>
          </div>
        </div>
      </header>

      {/* Intro Text */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-pink-500 mb-6">
            Nuestras colecciones florales únicas
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Explora nuestra selección cuidadosamente curada de arreglos florales, diseñados para capturar la belleza y esencia de la naturaleza. Cada ramo es un testimonio de nuestro compromiso con el arte, la frescura y el estilo. Desde la elegancia cotidiana hasta grandes celebraciones en La Habana.
          </p>
        </div>
      </section>

      {/* Grid Collections (Como en el video) */}
      <section id="colecciones" className="pb-20 px-4 md:px-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Item 1 */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[4/5] mb-4 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1599818469375-7c90b8401314?q=80&w=1974&auto=format&fit=crop" 
                alt="Minimalista" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <button className="w-full py-3 bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors">
              Ver colección Minimalista
            </button>
          </div>

          {/* Item 2 */}
          <div className="group cursor-pointer mt-0 md:-mt-12">
            <div className="relative overflow-hidden aspect-[4/5] mb-4 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=1974&auto=format&fit=crop" 
                alt="Peonías y Rosas" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold tracking-widest text-pink-600 uppercase">
                Más Vendido
              </div>
            </div>
            <button className="w-full py-3 bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors">
              Ver colección Premium
            </button>
          </div>

          {/* Item 3 */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[4/5] mb-4 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1606132791696-370124c657df?q=80&w=1974&auto=format&fit=crop" 
                alt="Silvestre" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <button className="w-full py-3 bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors">
              Ver colección Silvestre
            </button>
          </div>
        </div>
      </section>

      {/* Custom Creations Section (Left Text, Right Image) */}
      <section id="nosotros" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-left space-y-6">
              <h2 className="text-3xl md:text-5xl font-serif text-pink-500 leading-tight">
                Creaciones a medida
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                ¿Tienes una visión específica en mente? Nuestros expertos floristas pueden dar vida a tus ideas. Desde arreglos de boda personalizados hasta regalos únicos, creamos ramos a medida que reflejan perfectamente tu estilo y la ocasión.
              </p>
              <div className="pt-4">
                <button 
                  onClick={handleWhatsappClick}
                  className="px-8 py-3 bg-pink-500 text-white rounded hover:bg-pink-600 transition-all flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <MessageCircle size={20} />
                  Ordenar vía WhatsApp
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative z-10 overflow-hidden shadow-2xl rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1554593441-2c98d6693a7d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Ramo personalizado vibrante" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-pink-200 z-0 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Fresh Blooms Section (Right Text, Left Image) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2 text-left space-y-6">
              <h2 className="text-3xl md:text-5xl font-serif text-yellow-500 leading-tight">
                Flores frescas a diario
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Descubre nuestra selección diaria de flores recién cortadas y arreglos de temporada. Actualizamos continuamente nuestra oferta para traerte las flores más bellas y duraderas de La Habana. ¡Síguenos en Instagram para inspirarte!
              </p>
              <div className="pt-4">
                <a 
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded hover:opacity-90 transition-all items-center gap-3 shadow-lg"
                >
                  <Instagram size={20} />
                  Síguenos en Instagram
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative z-10 overflow-hidden shadow-2xl rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2003&auto=format&fit=crop" 
                  alt="Flores frescas luz natural" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -top-6 -right-6 w-full h-full border-2 border-yellow-200 z-0 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-pink-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 text-pink-100 opacity-50 transform -translate-x-1/2 -translate-y-1/2">
          <Heart size={400} fill="currentColor" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="text-pink-500 mb-6 flex justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            ))}
          </div>
          <blockquote className="text-2xl md:text-4xl font-serif text-gray-700 italic mb-8 leading-snug">
            "Bloom Piper creó el ramo más impresionante para mi evento. Su atención al detalle y la estética natural es simplemente inigualable en La Habana."
          </blockquote>
          <cite className="block text-gray-500 font-semibold uppercase tracking-widest not-italic">
            — Sofia R.
          </cite>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gray-900 text-white pt-20 pb-10 border-t-8 border-pink-500">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-3xl font-serif font-bold text-pink-400 mb-4">Bloom Piper</h3>
              <p className="text-gray-400 mb-6">
                Minimalismo floral con esencia natural. Llevando belleza a cada rincón de La Habana.
              </p>
              <div className="flex gap-4">
                <a href={instagramUrl} target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 transition-colors">
                  <Instagram size={20} />
                </a>
                <button onClick={handleWhatsappClick} className="bg-gray-800 p-2 rounded-full hover:bg-green-500 transition-colors">
                  <MessageCircle size={20} />
                </button>
              </div>
            </div>

            {/* Location */}
            <div>
              <h4 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Ubicación</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 text-pink-500 shrink-0" size={18} />
                  <span>La Habana, Cuba<br/><span className="text-sm text-gray-500">(DM para dirección exacta de recogida)</span></span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Horarios</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                  <Clock className="text-pink-500" size={18} />
                  <span>Lun - Vie: 9am - 5pm</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="text-pink-500" size={18} />
                  <span>Sábado: 10am - 3pm</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="text-gray-600" size={18} />
                  <span className="text-gray-500">Domingo: Cerrado</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Contacto</h4>
              <ul className="space-y-4">
                <li>
                  <button 
                    onClick={handleWhatsappClick}
                    className="flex items-center gap-3 text-pink-400 hover:text-pink-300 transition-colors group"
                  >
                    <MessageCircle size={18} />
                    <span className="group-hover:underline">Whatsapp: {whatsappNumber}</span>
                  </button>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail size={18} />
                  <span>contacto@bloompiper.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; 2026 Bloom Piper Floristería. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span className="hover:text-white cursor-pointer">Privacidad</span>
              <span className="hover:text-white cursor-pointer">Términos</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;