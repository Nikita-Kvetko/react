import React from 'react';

const FarmMap = ({ farms = [] }) => {
  const styles = {
    farmMap: {
      padding: '40px 20px',
      textAlign: 'center'
    },
    mapTitle: {
      color: '#2c5530',
      marginBottom: '10px',
      fontSize: '2rem'
    },
    mapSubtitle: {
      color: '#666',
      marginBottom: '40px',
      fontSize: '1.1rem'
    },
    mapWrapper: {
      display: 'flex',
      gap: '40px',
      marginBottom: '40px'
    },
    mapBackground: {
      flex: 1,
      height: '500px',
      background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
      borderRadius: '16px',
      position: 'relative',
      border: '2px solid #4a8c5c',
      overflow: 'hidden'
    },
    mapRegion: (top, left, width, height, bgColor) => ({
      position: 'absolute',
      top: `${top}%`,
      left: `${left}%`,
      width: `${width}px`,
      height: `${height}px`,
      background: bgColor,
      borderRadius: '10px',
      padding: '20px',
      fontWeight: '600',
      color: 'white',
      textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }),
    farmMarker: (x, y) => ({
      position: 'absolute',
      left: `${x}%`,
      top: `${y}%`,
      transform: 'translate(-50%, -50%)',
      cursor: 'pointer'
    }),
    markerPin: {
      fontSize: '32px',
      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
    },
    markerTooltip: {
      position: 'absolute',
      top: '-40px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'white',
      padding: '8px 16px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      whiteSpace: 'nowrap',
      fontSize: '0.9rem',
      color: '#333',
      opacity: 0,
      transition: 'opacity 0.3s'
    },
    mapLegend: {
      width: '300px',
      background: 'white',
      padding: '25px',
      borderRadius: '16px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
    },
    legendTitle: {
      color: '#2c5530',
      marginBottom: '20px',
      fontSize: '1.2rem'
    },
    legendItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '15px',
      padding: '10px',
      borderRadius: '8px'
    },
    legendIcon: {
      fontSize: '24px',
      width: '30px',
      textAlign: 'center'
    },
    mapControls: {
      display: 'flex',
      gap: '15px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    mapControlBtn: {
      padding: '12px 25px',
      background: '#4a8c5c',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'all 0.3s'
    }
  };

  // Имитация координат ферм
  const farmLocations = [
    { id: 1, x: 40, y: 50, name: "Эко-Ферма 'Зеленый Пастбищ'" },
    { id: 2, x: 65, y: 30, name: "Агро-Хаб 'Урожай'" },
    { id: 3, x: 25, y: 70, name: "Фермерский Коворкинг 'Росток'" },
  ];

  return (
    <div style={styles.farmMap}>
      <h2 style={styles.mapTitle}>Карта коворкинг-ферм</h2>
      <p style={styles.mapSubtitle}>Выберите ферму на карте для получения детальной информации</p>
      
      <div style={styles.mapWrapper}>
        <div style={styles.mapBackground}>
          {/* Имитация регионов на карте */}
          <div style={styles.mapRegion(30, 40, 200, 150, 'rgba(76, 175, 80, 0.7)')}>
            Московская обл.
          </div>
          <div style={styles.mapRegion(50, 20, 180, 120, 'rgba(139, 195, 74, 0.7)')}>
            Калужская обл.
          </div>
          <div style={styles.mapRegion(20, 70, 200, 130, 'rgba(205, 220, 57, 0.7)')}>
            Ленинградская обл.
          </div>
          
          {/* Фермы на карте */}
          {farmLocations.map(farm => (
            <div
              key={farm.id}
              style={styles.farmMarker(farm.x, farm.y)}
              title={farm.name}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector('[data-tooltip]').style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector('[data-tooltip]').style.opacity = '0';
              }}
            >
              <div style={styles.markerPin}>🌱</div>
              <div style={styles.markerTooltip} data-tooltip>
                {farm.name}
              </div>
            </div>
          ))}
        </div>
        
        <div style={styles.mapLegend}>
          <h3 style={styles.legendTitle}>Условные обозначения:</h3>
          <div style={styles.legendItem}>
            <span style={styles.legendIcon}>🌱</span>
            <span>Коворкинг-ферма</span>
          </div>
          <div style={styles.legendItem}>
            <span style={styles.legendIcon}>🟢</span>
            <span>Свободные места</span>
          </div>
          <div style={styles.legendItem}>
            <span style={styles.legendIcon}>🟡</span>
            <span>Ограниченная доступность</span>
          </div>
          <div style={styles.legendItem}>
            <span style={styles.legendIcon}>🔴</span>
            <span>Занято</span>
          </div>
        </div>
      </div>
      
      <div style={styles.mapControls}>
        <button style={styles.mapControlBtn}>➕ Увеличить</button>
        <button style={styles.mapControlBtn}>➖ Уменьшить</button>
        <button style={styles.mapControlBtn}>📍 Моё местоположение</button>
        <button style={styles.mapControlBtn}>🗺️ Спутниковый вид</button>
      </div>
    </div>
  );
};

export default FarmMap;