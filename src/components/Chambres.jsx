import React from 'react'
import ChambreCard from './ChambreCard'

const chambres = [
  {
    nom: 'Suite Deluxe',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
    prix: '€1890 dhs',
    description: 'Vue panoramique, lit king-size, salle de bain en marbre.',
  },
  {
    nom: 'Chambre Standard',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
    prix: '1290 dhs',
    description: 'Chambre confortable avec vue sur le jardin, lit double.',
  },
  {
    nom: 'Suite Familiale',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600',
    prix: '€2490 dhs',
    description: 'Deux chambres séparées, espace salon, idéale pour familles.',
  },
]

function Chambres() {
  return (
    <section id="chambres" style={styles.section}>
      <h2 style={styles.title}>Nos Chambres</h2>
      <div style={styles.grid}>
        {chambres.map((c, i) => (
          <ChambreCard
            key={i}
            nom={c.nom}
            image={c.image}
            prix={c.prix}
            description={c.description}
          />
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: { background: '#13131f', padding: '5rem 2rem' },
  title: {
    textAlign: 'center', color: '#D4AF37',
    fontFamily: 'Georgia, serif', fontSize: '2.2rem', marginBottom: '3rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem', maxWidth: '1000px', margin: '0 auto',
  },
}

export default Chambres