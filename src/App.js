import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FarmCard from './components/FarmCard';
import FarmMap from './components/FarmMap';
import Statistics from './components/Statistics';
import UserDashboard from './components/UserDashboard';
import BookingModal from './components/BookingModal';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFarm, setSelectedFarm] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeView, setActiveView] = useState('farms');

  const farms = [
    {
      id: 1,
      name: "Эко-Ферма 'Зеленый Пастбищ'",
      location: "Московская область, 15 км от МКАД",
      description: "Современный агроковоркинг с лабораториями и теплицами",
      price: "от 5 000 ₽/день",
      capacity: "20 рабочих мест",
      facilities: ["Wi-Fi", "Лаборатория", "Теплица", "Парковка", "Столовая"],
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      name: "Агро-Хаб 'Урожай'",
      location: "Калужская область, 100 км от Москвы",
      description: "Инновационный центр для агро-стартапов",
      price: "от 8 000 ₽/день",
      capacity: "15 рабочих мест + 5 лабораторий",
      facilities: ["High-speed Wi-Fi", "3D-печать", "Конференц-зал", "Гостиница", "Трансфер"],
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      name: "Фермерский Коворкинг 'Росток'",
      location: "Ленинградская область",
      description: "Уютное пространство для небольших агро-проектов",
      price: "от 3 500 ₽/день",
      capacity: "10 рабочих мест",
      facilities: ["Wi-Fi", "Библиотека", "Кофейня", "Сад", "Детская комната"],
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 4,
      name: "Агротех-Парк 'Инновация'",
      location: "Новгородская область",
      description: "Передовой технопарк для агротехнологических исследований",
      price: "от 12 000 ₽/день",
      capacity: "30 рабочих мест + 10 лабораторий",
      facilities: ["5G Wi-Fi", "Исследовательские лаборатории", "Конференц-центр", "Хостел", "Трансфер"],
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1589923186741-7d1d6ccee3c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 5,
      name: "Фермерская Усадьба 'Традиция'",
      location: "Тверская область",
      description: "Эко-пространство в живописной сельской местности",
      price: "от 4 500 ₽/день",
      capacity: "12 рабочих мест",
      facilities: ["Wi-Fi", "Эко-ресторан", "Спа", "Экскурсии", "Велопрокат"],
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 6,
      name: "Агро-Бизнес Центр 'Прогресс'",
      location: "Ростовская область",
      description: "Бизнес-центр для агропредпринимателей",
      price: "от 7 000 ₽/день",
      capacity: "25 рабочих мест",
      facilities: ["High-speed Wi-Fi", "Переговорные", "Бизнес-инкубатор", "Кафе", "Парковка"],
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const benefits = [
    {
      icon: "⚡",
      title: "Мгновенное бронирование",
      description: "Бронируйте места онлайн за 2 минуты без бумажной волокиты"
    },
    {
      icon: "💰",
      title: "Экономия до 40%",
      description: "Совместное использование ресурсов снижает затраты каждого участника"
    },
    {
      icon: "🤝",
      title: "Сетевое взаимодействие",
      description: "Общайтесь с коллегами, находите партнёров и инвесторов"
    },
    {
      icon: "🔧",
      title: "Полная инфраструктура",
      description: "Всё необходимое оборудование уже включено в стоимость"
    },
    {
      icon: "📱",
      title: "Умное управление",
      description: "Мобильное приложение для управления бронированиями и платежами"
    },
    {
      icon: "🌱",
      title: "Экологичный подход",
      description: "Работайте в экологически чистых пространствах с заботой о природе"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Выберите ферму",
      description: "Изучите каталог, посмотрите фото и отзывы, выберите подходящее пространство"
    },
    {
      step: "2",
      title: "Забронируйте онлайн",
      description: "Укажите даты, количество участников и дополнительные услуги"
    },
    {
      step: "3",
      title: "Подтверждение",
      description: "Получите подтверждение бронирования на email и в личном кабинете"
    },
    {
      step: "4",
      title: "Начните работать",
      description: "Приезжайте в назначенное время и пользуйтесь всеми удобствами фермы"
    }
  ];

  const handleBooking = (farm) => {
    setSelectedFarm(farm);
    setShowModal(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const styles = {
    app: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    },
    heroSection: {
      background: 'linear-gradient(rgba(44, 85, 48, 0.9), rgba(44, 85, 48, 0.8)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '120px 20px 80px',
      textAlign: 'center',
      position: 'relative'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '800',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      maxWidth: '800px',
      margin: '0 auto 40px',
      opacity: 0.9,
      lineHeight: 1.6
    },
    heroButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '30px'
    },
    ctaButton: {
      padding: '18px 40px',
      fontSize: '18px',
      fontWeight: '600',
      borderRadius: '50px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    },
    primaryButton: {
      background: '#ff7b54',
      color: 'white'
    },
    secondaryButton: {
      background: 'transparent',
      color: 'white',
      border: '3px solid white'
    },
    heroStats: {
      display: 'flex',
      justifyContent: 'center',
      gap: '50px',
      flexWrap: 'wrap',
      marginTop: '60px'
    },
    heroStat: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    heroStatValue: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '5px'
    },
    heroStatLabel: {
      fontSize: '1rem',
      opacity: 0.9
    },
    mainContent: {
      flex: 1,
      padding: '80px 20px',
      maxWidth: '1400px',
      margin: '0 auto',
      width: '100%'
    },
    section: {
      marginBottom: '100px'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '60px'
    },
    sectionTitle: {
      fontSize: '2.8rem',
      color: '#2c5530',
      marginBottom: '20px',
      fontWeight: '700'
    },
    sectionSubtitle: {
      fontSize: '1.3rem',
      color: '#666',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: 1.6
    },
    filters: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      marginBottom: '50px',
      flexWrap: 'wrap',
      alignItems: 'center'
    },
    filterSelect: {
      padding: '15px 25px',
      border: '2px solid #e0e0e0',
      borderRadius: '10px',
      fontSize: '16px',
      minWidth: '220px',
      backgroundColor: 'white',
      cursor: 'pointer',
      fontWeight: '500'
    },
    filterBtn: {
      padding: '15px 35px',
      backgroundColor: '#4a8c5c',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'all 0.3s',
      fontWeight: '600'
    },
    farmsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
      gap: '40px',
      marginTop: '30px'
    },
    benefitsSection: {
      background: 'linear-gradient(135deg, #f8fff8 0%, #f0f7f0 100%)',
      padding: '80px 20px',
      borderRadius: '20px',
      margin: '80px 0'
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      maxWidth: '1200px',
      margin: '60px auto 0'
    },
    benefitCard: {
      background: 'white',
      padding: '40px 30px',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
      textAlign: 'center',
      transition: 'transform 0.3s'
    },
    benefitIcon: {
      fontSize: '50px',
      marginBottom: '25px'
    },
    benefitTitle: {
      fontSize: '1.5rem',
      color: '#2c5530',
      marginBottom: '15px',
      fontWeight: '600'
    },
    benefitDescription: {
      color: '#666',
      lineHeight: 1.6
    },
    howItWorksSection: {
      padding: '80px 20px'
    },
    stepsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      maxWidth: '800px',
      margin: '60px auto 0',
      position: 'relative'
    },
    stepConnector: {
      position: 'absolute',
      left: '50px',
      top: '0',
      bottom: '0',
      width: '4px',
      background: '#4a8c5c',
      opacity: 0.3,
      zIndex: 1
    },
    stepItem: {
      display: 'flex',
      gap: '30px',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2
    },
    stepNumber: {
      width: '100px',
      height: '100px',
      background: '#4a8c5c',
      color: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2.5rem',
      fontWeight: '700',
      flexShrink: 0
    },
    stepContent: {
      flex: 1,
      background: 'white',
      padding: '30px',
      borderRadius: '16px',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
    },
    stepTitle: {
      fontSize: '1.5rem',
      color: '#2c5530',
      marginBottom: '10px',
      fontWeight: '600'
    },
    stepDescription: {
      color: '#666',
      lineHeight: 1.6,
      fontSize: '1.1rem'
    },
    ctaSection: {
      background: 'linear-gradient(135deg, #2c5530 0%, #1a3a23 100%)',
      color: 'white',
      padding: '100px 20px',
      textAlign: 'center',
      borderRadius: '20px',
      margin: '80px 0'
    },
    ctaTitle: {
      fontSize: '2.8rem',
      marginBottom: '25px',
      fontWeight: '700'
    },
    ctaText: {
      fontSize: '1.3rem',
      maxWidth: '700px',
      margin: '0 auto 50px',
      opacity: 0.9,
      lineHeight: 1.6
    },
    ctaButtonLarge: {
      padding: '20px 50px',
      fontSize: '20px',
      fontWeight: '700',
      background: '#ff7b54',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '15px'
    }
  };

  return (
    <div style={styles.app}>
      <Header 
        isLoggedIn={isLoggedIn} 
        onLogin={handleLogin}
        activeView={activeView}
        setActiveView={setActiveView}
      />
      
      {/* Герой секция */}
      {activeView === 'farms' && (
        <section style={styles.heroSection}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={styles.heroTitle}>Коворкинг-фермы для инноваций в сельском хозяйстве</h1>
            <p style={styles.heroSubtitle}>
              Современные пространства для агро-стартапов, фермеров и исследователей. 
              Объединяем инфраструктуру, технологии и сообщество профессионалов АПК.
            </p>
            
            <div style={styles.heroButtons}>
              <button 
                style={{ ...styles.ctaButton, ...styles.primaryButton }}
                onClick={() => scrollToSection('farms-list')}
              >
                 Найти ферму
              </button>
              <button 
                style={{ ...styles.ctaButton, ...styles.secondaryButton }}
                onClick={() => setActiveView('dashboard')}
              >
                 Личный кабинет
              </button>
            </div>
            
            <div style={styles.heroStats}>
              <div style={styles.heroStat}>
                <span style={styles.heroStatValue}>24+</span>
                <span style={styles.heroStatLabel}>Коворкинг-ферм</span>
              </div>
              <div style={styles.heroStat}>
                <span style={styles.heroStatValue}>156+</span>
                <span style={styles.heroStatLabel}>Успешных бронирований</span>
              </div>
              <div style={styles.heroStat}>
                <span style={styles.heroStatValue}>4.8</span>
                <span style={styles.heroStatLabel}>Средний рейтинг</span>
              </div>
              <div style={styles.heroStat}>
                <span style={styles.heroStatValue}>40%</span>
                <span style={styles.heroStatLabel}>Экономия для участников</span>
              </div>
            </div>
          </div>
        </section>
      )}
      
      <main style={styles.mainContent}>
        {/* Секция преимуществ */}
        {activeView === 'farms' && (
          <section id="benefits" style={styles.benefitsSection}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Почему выбирают наш сервис</h2>
              <p style={styles.sectionSubtitle}>
                Мы создали идеальную платформу для агро-инноваций, 
                объединив лучшие практики коворкинга и сельского хозяйства
              </p>
            </div>
            
            <div style={styles.benefitsGrid}>
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  style={styles.benefitCard}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={styles.benefitIcon}>{benefit.icon}</div>
                  <h3 style={styles.benefitTitle}>{benefit.title}</h3>
                  <p style={styles.benefitDescription}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Секция как это работает */}
        {activeView === 'farms' && (
          <section id="how-it-works" style={styles.howItWorksSection}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Как это работает</h2>
              <p style={styles.sectionSubtitle}>
                Всего 4 простых шага от выбора фермы до начала работы в комфортном пространстве
              </p>
            </div>
            
            <div style={styles.stepsContainer}>
              <div style={styles.stepConnector}></div>
              
              {howItWorks.map((step, index) => (
                <div key={index} style={styles.stepItem}>
                  <div style={styles.stepNumber}>{step.step}</div>
                  <div style={styles.stepContent}>
                    <h3 style={styles.stepTitle}>{step.title}</h3>
                    <p style={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Основная секция с фермами */}
        {activeView === 'farms' && (
          <section id="farms-list" style={styles.section}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Лучшие коворкинг-фермы России</h2>
              <p style={styles.sectionSubtitle}>
                Выберите идеальное пространство для вашего агробизнеса среди проверенных площадок
              </p>
            </div>
            
            <div style={styles.filters}>
              <select style={styles.filterSelect}>
                <option>Все регионы</option>
                <option>Центральный федеральный округ</option>
                <option>Северо-Западный федеральный округ</option>
                <option>Южный федеральный округ</option>
              </select>
              <select style={styles.filterSelect}>
                <option>Любая цена</option>
                <option>До 5 000 ₽ в день</option>
                <option>5 000 - 10 000 ₽ в день</option>
                <option>От 10 000 ₽ в день</option>
              </select>
              <select style={styles.filterSelect}>
                <option>Все типы</option>
                <option>Эко-фермы</option>
                <option>Технопарки</option>
                <option>Бизнес-центры</option>
                <option>Усадьбы</option>
              </select>
              <button style={styles.filterBtn}> Применить фильтры</button>
            </div>
            
            <div style={styles.farmsGrid}>
              {farms.map(farm => (
                <FarmCard 
                  key={farm.id} 
                  farm={farm} 
                  onBook={() => handleBooking(farm)}
                />
              ))}
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <button 
                style={{ 
                  padding: '18px 45px',
                  background: 'transparent',
                  color: '#4a8c5c',
                  border: '3px solid #4a8c5c',
                  borderRadius: '50px',
                  fontSize: '18px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                 Показать ещё фермы
              </button>
            </div>
          </section>
        )}
        
        {/* CTA секция */}
        {activeView === 'farms' && (
          <section style={styles.ctaSection}>
            <h2 style={styles.ctaTitle}>Готовы начать работу?</h2>
            <p style={styles.ctaText}>
              Присоединяйтесь к сообществу инноваторов в сельском хозяйстве. 
              Находите партнёров, делитесь опытом и создавайте будущее агротехнологий вместе с нами.
            </p>
            <button 
              style={styles.ctaButtonLarge}
              onClick={() => scrollToSection('farms-list')}
            >
               Начать бесплатно
              <span style={{ fontSize: '16px', opacity: 0.8 }}>→</span>
            </button>
            <p style={{ marginTop: '30px', opacity: 0.7, fontSize: '14px' }}>
              Первые 7 дней пробного периода — бесплатно
            </p>
          </section>
        )}
        
        {activeView === 'map' && <FarmMap farms={farms} />}
        {activeView === 'stats' && <Statistics />}
        {activeView === 'dashboard' && <UserDashboard />}
      </main>
      
      <Statistics compact={true} />
      <Footer />
      
      {showModal && selectedFarm && (
        <BookingModal 
          farm={selectedFarm}
          onClose={() => setShowModal(false)}
          onConfirm={(bookingData) => {
            console.log('Бронирование подтверждено:', bookingData);
            setShowModal(false);
            alert('Бронирование успешно создано! На вашу почту отправлено подтверждение.');
          }}
        />
      )}
    </div>
  );
};

export default App;