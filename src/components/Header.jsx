import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { isLoggedIn, onLogin, activeView, setActiveView } = this.props;

    const styles = {
      header: {
        background: 'linear-gradient(135deg, #1a3a23 0%, #2c5530 100%)',
        color: 'white',
        padding: '15px 0',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      },
      headerContainer: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      logo: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      },
      logoIcon: {
        fontSize: '40px'
      },
      logoText: {
        display: 'flex',
        flexDirection: 'column'
      },
      logoTitle: {
        fontSize: '24px',
        fontWeight: '700',
        margin: 0,
        lineHeight: 1
      },
      logoSubtitle: {
        fontSize: '12px',
        opacity: 0.8,
        margin: 0
      },
      navMenu: {
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap'
      },
      navBtn: (isActive) => ({
        background: isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
        color: 'white',
        border: 'none',
        padding: '12px 20px',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontWeight: isActive ? '600' : 'normal'
      }),
      headerActions: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      },
      loginBtn: {
        padding: '10px 25px',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        border: 'none',
        backgroundColor: '#4a8c5c',
        color: 'white'
      },
      contactBtn: {
        padding: '10px 25px',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        background: 'transparent',
        color: 'white',
        border: '2px solid white'
      },
      userInfo: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      },
      userAvatar: {
        fontSize: '24px'
      },
      userName: {
        fontWeight: '500'
      },
      logoutBtn: {
        background: 'transparent',
        color: 'white',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        padding: '5px 15px',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'all 0.3s'
      }
    };

    return (
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.logo}>
            <div style={styles.logoText}>
              <h1 style={styles.logoTitle}>FarmSpace</h1>
              <p style={styles.logoSubtitle}>Coworking Platform</p>
            </div>
          </div>
          
          <nav style={styles.navMenu}>
            <button 
              style={styles.navBtn(activeView === 'farms')}
              onClick={() => setActiveView('farms')}
            >
               Фермы
            </button>
            <button 
              style={styles.navBtn(activeView === 'map')}
              onClick={() => setActiveView('map')}
            >
               Карта
            </button>
            <button
            // Ниже не читать!!!
            // activeView присваевается значение 'stats', при нажатии(onClick),
            // устанавливается с помощью аргумента в функции setActiveView(143 строка)
            // если стостояние(activeView) равно stats(а после нажатия оно равно stats) благодаря setActiveView
            // мы меняем стиль заданный в navBtn в 53 строке
            // так как activeView равно stats, то при строгом сравнении с stats, возвращается true
            // Выше не читать!!
              onClick={() => setActiveView('stats')}
              style={styles.navBtn(activeView === 'stats')}
            >
               Статистика
            </button>
            <button 
              style={styles.navBtn(activeView === 'dashboard')}
              onClick={() => setActiveView('dashboard')}
            >
               Кабинет
            </button>
          </nav>
          
          <div style={styles.headerActions}>
            {isLoggedIn ? (
              <div style={styles.userInfo}>
                <span style={styles.userAvatar}></span>
                <span style={styles.userName}>Алексей Фермеров</span>
                <button style={styles.logoutBtn} onClick={onLogin}>Выйти</button>
              </div>
            ) : (
              <button style={styles.loginBtn} onClick={onLogin}>Войти</button>
            )}
            <button style={styles.contactBtn}>Связаться с нами</button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;