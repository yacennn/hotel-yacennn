import React from 'react'

function ChambreCard({ nom, image, prix, description }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={nom} style={styles.img} />
      <div style={styles.body}>
        <h3 style={styles.nom}>{nom}</h3>
        <p style={styles.prix}>{prix} / nuit</p>
        <p style={styles.desc}>{description}</p>
        <button style={styles.btn}>Réserver</button>
      </div>
    </div>
  )
}

const styles = {
  card: {
    background: '#1a1a2e',
    border: '1px solid rgba(212,175,55,0.3)',
    borderRadius: '12px', overflow: 'hidden',
  },
  img: { width: '100%', height: '200px', objectFit: 'cover' },
  body: { padding: '1.5rem' },
  nom: { color: '#D4AF37', fontFamily: 'Georgia, serif', fontSize: '1.2rem', margin: '0 0 0.5rem' },
  prix: { color: '#fff', fontWeight: 'bold', fontSize: '1.1rem', margin: '0 0 0.5rem' },
  desc: { color: '#aaa', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 1rem' },
  btn: {
    background: '#D4AF37', color: '#000', border: 'none',
    padding: '0.6rem 1.5rem', cursor: 'pointer',
    borderRadius: '6px', fontFamily: 'Georgia, serif', fontSize: '0.9rem',
  },
}

export default ChambreCard