import React, { Component } from 'react';

class UserDashboard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      bookings: [
        { id: 1, farm: "Эко-Ферма 'Зеленый Пастбищ'", date: "15.12.2023", status: "Подтверждено" },
        { id: 2, farm: "Агро-Хаб 'Урожай'", date: "20.12.2023", status: "Ожидание" },
        { id: 3, farm: "Фермерский Коворкинг 'Росток'", date: "25.12.2023", status: "Отменено" }
      ],
      userData: {
        name: "Алексей Фермеров",
        email: "alexey@example.com",
        phone: "+7 (999) 123-45-67",
        status: "Активный участник",
        joinDate: "15.03.2023",
        totalBookings: 8,
        memberLevel: "Премиум"
      }
    };
  }

  bookingStatus = (status) => ({
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '600',
    backgroundColor: status === 'Подтверждено' ? '#e8f5e9' : 
                   status === 'Ожидание' ? '#fff3e0' : '#ffebee',
    color: status === 'Подтверждено' ? '#2c5530' : 
          status === 'Ожидание' ? '#f57c00' : '#d32f2f',
    whiteSpace: 'nowrap',
    marginLeft: '15px'
  });

  styles = {
    dashboard: {
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    title: {
      color: '#2c5530',
      marginBottom: '40px',
      textAlign: 'center',
      fontSize: '2rem'
    },
    dashboardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      marginBottom: '40px'
    },
    card: {
      background: 'white',
      padding: '30px',
      borderRadius: '16px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)'
    },
    cardTitle: {
      color: '#2c5530',
      marginBottom: '20px',
      fontSize: '1.3rem',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    profileInfo: {
      marginBottom: '25px'
    },
    infoRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '12px',
      paddingBottom: '12px',
      borderBottom: '1px solid #eee'
    },
    infoLabel: {
      color: '#666',
      fontWeight: '500'
    },
    infoValue: {
      color: '#333',
      fontWeight: '600'
    },
    bookingsList: {
      marginBottom: '20px'
    },
    bookingItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px',
      borderBottom: '1px solid #eee',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      marginBottom: '10px'
    },
    bookingDetails: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    },
    bookingFarm: {
      color: '#333',
      fontWeight: '600',
      marginBottom: '5px'
    },
    bookingDate: {
      color: '#666',
      fontSize: '0.9rem'
    },
    button: {
      width: '100%',
      padding: '12px',
      background: '#4a8c5c',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background 0.3s',
      marginTop: '10px'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      marginTop: '30px'
    },
    statBox: {
      background: 'linear-gradient(135deg, #2c5530 0%, #4a8c5c 100%)',
      color: 'white',
      padding: '25px',
      borderRadius: '12px',
      textAlign: 'center'
    },
    statValue: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '10px'
    },
    statLabel: {
      fontSize: '0.9rem',
      opacity: 0.9
    },
    editProfileBtn: {
      background: 'transparent',
      color: '#4a8c5c',
      border: '2px solid #4a8c5c',
      padding: '10px 20px',
      borderRadius: '8px',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'all 0.3s',
      marginTop: '15px'
    }
  };

  render() {
    const { bookings, userData } = this.state;
    const styles = this.styles;

    return (
      <div style={styles.dashboard}>
        <h2 style={styles.title}> Личный кабинет</h2>
        
        <div style={styles.dashboardGrid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}> Мой профиль</h3>
            <div style={styles.profileInfo}>
              <div style={styles.infoRow}>
                <span style={styles.infoLabel}>Имя:</span>
                <span style={styles.infoValue}>{userData.name}</span>
              </div>
              <div style={styles.infoRow}>
                <span style={styles.infoLabel}>Email:</span>
                <span style={styles.infoValue}>{userData.email}</span>
              </div>
              <div style={styles.infoRow}>
                <span style={styles.infoLabel}>Телефон:</span>
                <span style={styles.infoValue}>{userData.phone}</span>
              </div>
              <div style={styles.infoRow}>
                <span style={styles.infoLabel}>Статус:</span>
                <span style={styles.infoValue}>{userData.status}</span>
              </div>
              <div style={styles.infoRow}>
                <span style={styles.infoLabel}>Дата регистрации:</span>
                <span style={styles.infoValue}>{userData.joinDate}</span>
              </div>
              <div style={styles.infoRow}>
                <span style={styles.infoLabel}>Уровень:</span>
                <span style={styles.infoValue}>{userData.memberLevel}</span>
              </div>
            </div>
            <button style={styles.editProfileBtn}> Редактировать профиль</button>
          </div>
          
          <div style={styles.card}>
            <h3 style={styles.cardTitle}> Мои бронирования</h3>
            <div style={styles.bookingsList}>
              {bookings.length > 0 ? (
                bookings.map(booking => (
                  <div key={booking.id} style={styles.bookingItem}>
                    <div style={styles.bookingDetails}>
                      <span style={styles.bookingFarm}>{booking.farm}</span>
                      <span style={styles.bookingDate}>{booking.date}</span>
                    </div>
                    <span style={this.bookingStatus(booking.status)}>
                      {booking.status}
                    </span>
                  </div>
                ))
              ) : (
                <p style={{ color: '#666', textAlign: 'center' }}>У вас нет активных бронирований</p>
              )}
            </div>
            <button style={styles.button}> Новое бронирование</button>
            <button style={{ ...styles.button, background: 'transparent', color: '#4a8c5c', border: '2px solid #4a8c5c' }}>
               История бронирований
            </button>
          </div>
        </div>
        
        <div style={styles.statsGrid}>
          <div style={styles.statBox}>
            <div style={styles.statValue}>{userData.totalBookings}</div>
            <div style={styles.statLabel}>Всего бронирований</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statValue}>4.8 ⭐</div>
            <div style={styles.statLabel}>Рейтинг как арендатора</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statValue}>12</div>
            <div style={styles.statLabel}>Посещённых ферм</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statValue}>95%</div>
            <div style={styles.statLabel}>Успешных бронирований</div>
          </div>
        </div>
        
        <div style={{ ...styles.card, marginTop: '30px' }}>
          <h3 style={styles.cardTitle}> Предстоящие мероприятия</h3>
          <div style={{ color: '#666', textAlign: 'center', padding: '20px' }}>
            <p> Уведомления о мероприятиях появятся здесь</p>
            <button style={{ ...styles.button, marginTop: '20px', width: 'auto', padding: '10px 25px' }}>
               Посмотреть календарь мероприятий
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDashboard;