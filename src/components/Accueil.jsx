import React from 'react'

function Accueil() {
  return (
    <section id="accueil" style={styles.section}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <h1 style={styles.title}>Hotel Yacennn</h1>
        <p style={styles.subtitle}>Une expérience de luxe inoubliable</p>
        <button
          style={styles.btn}
          onClick={() => document.getElementById('chambres')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Découvrir nos chambres
        </button>
      </div>
    </section>
  )
}

const styles = {
  section: {
    height: '100vh', position: 'relative',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    backgroundImage: 'url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600)',
    backgroundSize: 'cover', backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))',
  },
  content: { position: 'relative', textAlign: 'center', color: '#fff' },
  title: { fontFamily: 'Georgia, serif', fontSize: '4rem', color: '#D4AF37', margin: '0 0 1rem' },
  subtitle: { fontSize: '1.3rem', marginBottom: '2rem', opacity: 0.9 },
  btn: {
    background: '#D4AF37', color: '#000', border: 'none',
    padding: '1rem 2.5rem', fontSize: '1rem', cursor: 'pointer',
    fontFamily: 'Georgia, serif', letterSpacing: '1px', borderRadius: '4px',
  },
}

export default Accueil