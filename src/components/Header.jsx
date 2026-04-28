import React from 'react'

function Header() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <span style={styles.logoIcon}>🏨</span>
        <span style={styles.logoText}>Hotel Yacennn</span>
      </div>
      <nav style={styles.nav}>
        {['accueil', 'services', 'chambres', 'contact'].map((item) => (
          <button key={item} onClick={() => scrollTo(item)} style={styles.navBtn}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  )
}

const styles = {
  header: {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 1000,
    background: 'rgba(10,10,20,0.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    borderBottom: '1px solid rgba(212,175,55,0.3)',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  logoIcon: { fontSize: '1.5rem' },
  logoText: {
    color: '#D4AF37',
    fontFamily: 'Georgia, serif',
    fontSize: '1.4rem',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
  },
  navBtn: {
    background: 'none',
    border: 'none',
    color: '#ccc',
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontFamily: 'Georgia, serif',
  },
}

export default Header