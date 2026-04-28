    import React from 'react'
import ServiceCard from './ServiceCard'

const services = [
  { nom: 'Spa & Bien-être', image: '🧖' },
  { nom: 'Restaurant Gastronomique', image: '🍽️' },
  { nom: 'Wi-Fi Haut Débit', image: '📶' },
  { nom: 'Piscine Chauffée', image: '🏊' },
  { nom: 'Parking Sécurisé', image: '🚗' },
  { nom: 'Room Service 24h', image: '🛎️' },
]

function Services() {
  return (
    <section id="services" style={styles.section}>
      <h2 style={styles.title}>Nos Services</h2>
      <div style={styles.grid}>
        {services.map((s, i) => (
          <ServiceCard key={i} nom={s.nom} image={s.image} />
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: { background: '#0f0f1a', padding: '5rem 2rem' },
  title: {
    textAlign: 'center', color: '#D4AF37',
    fontFamily: 'Georgia, serif', fontSize: '2.2rem', marginBottom: '3rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '1.5rem', maxWidth: '900px', margin: '0 auto',
  },
}

export default Services