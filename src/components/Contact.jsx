import React, { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', message: '' })

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Contact</h2>
      <p style={styles.adresse}>📍 12 Avenue Allal EL Fassi,40100 Marrakech</p>
      <p style={styles.adresse}>+212 75 94 28 51</p>
      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          style={styles.input} placeholder="Nom"
          value={form.nom}
          onChange={(e) => setForm({ ...form, nom: e.target.value })}
        />
        <input
          style={styles.input} placeholder="Email" type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          style={{ ...styles.input, height: '120px', resize: 'vertical' }}
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button type="submit" style={styles.btn}>Envoyer</button>
      </form>
    </section>
  )
}

const styles = {
  section: { background: '#0a0a14', padding: '5rem 2rem', textAlign: 'center' },
  title: { color: '#D4AF37', fontFamily: 'Georgia, serif', fontSize: '2.2rem', marginBottom: '1rem' },
  adresse: { color: '#ccc', marginBottom: '0.5rem' },
  form: {
    display: 'flex', flexDirection: 'column',
    gap: '1rem', maxWidth: '500px', margin: '2rem auto 0',
  },
  input: {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(212,175,55,0.4)',
    color: '#fff', padding: '0.8rem 1rem',
    borderRadius: '6px', fontSize: '1rem',
  },
  btn: {
    background: '#D4AF37', color: '#000', border: 'none',
    padding: '0.8rem', cursor: 'pointer',
    fontFamily: 'Georgia, serif', fontSize: '1rem', borderRadius: '6px',
  },
}

export default Contact