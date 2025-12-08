import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const styles = {
      footer: {
        background: '#1a3a23',
        color: 'white',
        padding: '40px 20px 20px',
        marginTop: '60px'
      },
      footerContent: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
        marginBottom: '30px'
      },
      footerSection: {
        display: 'flex',
        flexDirection: 'column'
      },
      footerTitle: {
        fontSize: '24px',
        marginBottom: '15px',
        color: '#fff'
      },
      footerSubtitle: {
        fontSize: '18px',
        marginBottom: '15px',
        color: '#fff'
      },
      footerText: {
        marginBottom: '10px',
        color: '#ccc'
      },
      socialLinks: {
        display: 'flex',
        gap: '15px'
      },
      socialLink: {
        color: '#4a8c5c',
        textDecoration: 'none'
      },
      footerBottom: {
        textAlign: 'center',
        paddingTop: '20px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#aaa',
        fontSize: '14px'
      }
    };

    return (
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>FarmSpace</h3>
            <p style={styles.footerText}>Платформа для агроковоркинга</p>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerSubtitle}>Контакты</h4>
            <p style={styles.footerText}>Email: info@mail.ru</p>
            <p style={styles.footerText}>Телефон: +7 (999) 123-45-67</p>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerSubtitle}>Социальные сети</h4>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialLink}>Telegram</a>
              <a href="#" style={styles.socialLink}>VK</a>
              <a href="#" style={styles.socialLink}>YouTube</a>
            </div>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>© 2025 Коворкинг ферм. Все права защищены.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;