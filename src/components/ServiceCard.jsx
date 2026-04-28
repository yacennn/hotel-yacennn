import React from 'react'

function ServiceCard({ nom, image }) {
  return (
    <div style={styles.card}>
      <span style={styles.icon}>{image}</span>
      <p style={styles.nom}>{nom}</p>
    </div>
  )
}

const styles = {
  card: {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(212,175,55,0.3)',
    borderRadius: '12px', padding: '2rem 1.5rem', textAlign: 'center',
  },
  icon: { fontSize: '2.5rem' },
  nom: { color: '#D4AF37', marginTop: '1rem', fontFamily: 'Georgia, serif', fontSize: '1rem' },
}

export default ServiceCard