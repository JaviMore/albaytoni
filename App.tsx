
import React, { useState, useEffect } from 'react';

const DecorativeHeader: React.FC = () => (
  <div className="w-full overflow-hidden py-4 bg-cream">
    <div className="flex whitespace-nowrap">
      <div className="flex animate-marquee">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="font-sans text-brand-green mx-4">Alba & Toni</span>
        ))}
      </div>
      <div className="flex animate-marquee">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="font-sans text-brand-green mx-4">Alba & Toni</span>
        ))}
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
 const [guestName, setGuestName] = useState('INVITADO1 Y INVITADO2');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nameFromUrl = params.get('invitado');
    const name = nameFromUrl ? nameFromUrl.toUpperCase().replace(/-/g, ' ') : 'INVITADO1 Y INVITADO2';

    if (nameFromUrl) {
      setGuestName(decodeURIComponent(name));
    }
  }, []);
  const storyImages = [
    "assets/story_1.jpg",
    "assets/story_2.jpg",
    "assets/story_3.jpg",
    "assets/story_4.jpg",
    "assets/story_5.jpg",
    "assets/story_6.jpg",
  ];

  return (
    <div className="bg-cream text-brand-dark font-serif min-h-screen">
      <DecorativeHeader />

      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="text-center py-25 px-4 text-center">
          <img src="assets/main_logo.png" alt="Alba & Toni" className="mx-auto w-full max-w-2xl px-8" />
          <h2 className="font-sans text-brand-green text-5xl md:text-6xl my-2">NOS CASAMOS</h2>
          <p className="font-bold text-brand-red text-xl my-2">ENS CASEM!!!</p>
          <div className="flex justify-center items-center">
         
              <img src="assets/main_photo.jpg" alt="Alba and Toni" className="rounded-lg shadow-lg w-full max-w-lg" />
             
          </div>
          <p className="font-bold text-brand-red text-xl my-2">SI! SI! NOSALTRES</p>
          
    
          <p className="text-2xl mt-8">Te esperamos el día</p>
          <p className="font-sans text-brand-green text-7xl md:text-8xl my-2">26.09.25</p>
          <p className="text-2xl tracking-widest">Save the Date</p>
        </section>

        {/* Location Section */}
        <section className="bg-brand-red text-cream py-20 px-4 text-center">
          <h2 className="font-sans text-7xl md:text-8xl mb-12">¿DÓNDE?</h2>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center md:text-left">
              <p className="font-bold text-xl">ALQUERÍA KUKALA</p>
              <p>HORTA NORD - VALÈNCIA</p>
            </div>
            <img src="assets/venue.jpg" alt="Venue" className="rounded-lg shadow-lg w-full max-w-lg my-6" />
            <div className="text-center md:text-right my-4">
              <p className="font-bold text-xl">AVINGUDA DE LA MAR, S/N,</p>
              <p>LA POBLA DE FARNALS - VALENCIA</p>
              <p></p>
            </div>
          </div>
          <a href="https://maps.app.goo.gl/mo6LAEiTrwaiFoqs6" target="_blank" rel="noopener noreferrer">
          <img src="assets/google_maps_button.png"  className="rounded-lg shadow-lg w-48 md:w-64 mx-auto hover:opacity-90 transition-opacity" />
          </a>
        </section>
        
        {/* Event Plan Section */}
        <section className="py-20 px-4 text-center">
          <img src="assets/event_plan_logo.png" alt="Plan de Evento" className="mx-auto w-full max-w-lg mb-12" />
          <div className="relative max-w-4xl mx-auto mt-8 px-4 md:px-0">
            <img src="assets/timeline.png" alt="Event timeline" className="w-full" />
          </div>
        </section>

        {/* RSVP Section */}
        <section className="pb-20 px-4 text-center">
          <p className="text-xl font-bold">Esta invitación es para</p>
          <h3  id="invitados" className="font-sans text-brand-green text-5xl md:text-6xl my-4">{guestName}</h3>
          <p className="max-w-md mx-auto">Rogamos que rellenes el formulario antes del 20 de Agosto.</p>
          <a href="https://forms.gle/SLuEih1SiYyDfBKb8" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-green text-cream font-seriff font-bold py-3 px-12 rounded-md mt-8 hover:bg-opacity-90 transition-colors tracking-wider">
            FORMULARIO
          </a>
        </section>

        {/* Gifts & Music Section */}
        <section className="bg-brand-green text-cream py-20 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 text-center">
            <div>
              <h2 className="font-sans text-6xl mb-4">REGALOS</h2>
              <img src="assets/gift_illustration.png" alt="Regalos" className="w-48 h-48 mx-auto my-4" />
              <p className="font-sans text-2xl">IBAN: ES7620955764309121246469</p>
              <p className="font-seriff text-2xl">KUTXABANK</p>
            </div>
            <div>
              <h2 className="font-sans text-6xl mb-4">MÚSICA</h2>
              <img src="assets/trumpet_illustration.png" alt="Música" className="w-48 h-48 mx-auto my-6" />
              <p className="font-seriff font-bold text-2xl my-2">¿NOS AYUDAS CON LA PLAYLIST?</p>
              <a href="https://open.spotify.com/playlist/7znC2fd7SLhv4eSjwNQlYa?si=Opx97SHtQt6bt-5U9EbXng&pi=ecSodlInQBe1P" target="_blank" rel="noopener noreferrer">
                <img src="assets/add_song_button.png"  className="rounded-lg shadow-lg w-48 md:w-64 mx-auto hover:opacity-90 transition-opacity" />
              </a>
            </div>
          </div>
          <p className="font-serif text-5xl font-bold text-center mt-16">¡Gracias!</p>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-4 text-center">
          <h2 className="font-sans text-brand-green text-7xl md:text-8xl mb-8">NUESTRA HISTORIA</h2>
          <p className="italic text-xl max-w-2xl mx-auto">
            'Cinc de la matinada no esperava que acabarem pels carrers de ciutat vella, tu davant i jo darrere. València banyada, camals mullats. València banyada...'
          </p>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {storyImages.map((src, index) => (
              <img key={index} src={src} alt={`Story moment ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-md" />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 text-center">
          <h2 className="font-sans text-brand-green text-7xl md:text-8xl mb-4">GRACIAS</h2>
          <p className="text-2xl">Por compartir este día con nosotros.</p>
          <p className="text-2xl">¡Te esperamos!</p>
        </footer>
      </main>

      <DecorativeHeader />
    </div>
  );
}

export default App;
