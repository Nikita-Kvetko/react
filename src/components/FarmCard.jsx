import React, { Component } from 'react';

class FarmCard extends Component {
  render() {
    const { farm, onBook } = this.props;

    if (!farm) {
      return <div style={styles.farmCard}>Нет данных о ферме</div>;
    }

    const {
      name = "Название не указано",
      location = "Локация не указана",
      description = "Описание отсутствует",
      price = "Цена не указана",
      capacity = "Вместимость не указана",
      facilities = [],
      rating = 0,
      image = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    } = farm;

    const styles = {
      farmCard: {
        background: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      },
      farmCardHover: {
        transform: 'translateY(-10px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)'
      },
      farmImage: {
        height: '200px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        backgroundImage: `url(${image})`
      },
      farmRating: {
        position: 'absolute',
        top: '15px',
        right: '15px',
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '5px 12px',
        borderRadius: '20px',
        fontWeight: '600',
        color: '#333',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
      },
      farmContent: {
        padding: '25px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      },
      farmHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '10px'
      },
      farmName: {
        fontSize: '1.3rem',
        fontWeight: '700',
        color: '#2c5530',
        margin: 0,
        flex: 1
      },
      farmPrice: {
        background: '#ff7b54',
        color: 'white',
        padding: '5px 12px',
        borderRadius: '6px',
        fontWeight: '600',
        fontSize: '0.9rem',
        whiteSpace: 'nowrap',
        marginLeft: '10px'
      },
      farmLocation: {
        color: '#666',
        fontSize: '0.95rem',
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
      },
      farmDescription: {
        color: '#555',
        lineHeight: 1.5,
        marginBottom: '20px',
        flex: 1
      },
      farmDetails: {
        display: 'flex',
        gap: '20px',
        marginBottom: '20px',
        paddingBottom: '20px',
        borderBottom: '1px solid #eee'
      },
      detailItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: '#666'
      },
      detailIcon: {
        fontSize: '18px'
      },
      farmFacilities: {
        marginBottom: '20px'
      },
      facilitiesTitle: {
        marginBottom: '10px',
        color: '#333',
        fontSize: '1rem'
      },
      facilitiesList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px'
      },
      facilityTag: {
        background: '#f0f7f0',
        color: '#2c5530',
        padding: '6px 12px',
        borderRadius: '20px',
        fontSize: '0.85rem',
        border: '1px solid #d0e7d0'
      },
      farmActions: {
        display: 'flex',
        gap: '15px',
        marginTop: 'auto',
        paddingTop: '20px'
      },
      bookBtn: {
        flex: 1,
        padding: '12px',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s',
        border: 'none',
        backgroundColor: '#4a8c5c',
        color: 'white'
      },
      detailsBtn: {
        flex: 1,
        padding: '12px',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s',
        background: 'transparent',
        color: '#4a8c5c',
        border: '2px solid #4a8c5c'
      }
    };

    return (
      <div style={styles.farmCard}>
        <div style={styles.farmImage}>
          <div style={styles.farmRating}>
            ⭐ {rating.toFixed(1)}
          </div>
        </div>
        
        <div style={styles.farmContent}>
          <div style={styles.farmHeader}>
            <h3 style={styles.farmName}>{name}</h3>
            <span style={styles.farmPrice}>{price}</span>
          </div>
          
          <div style={styles.farmLocation}>
             {location}
          </div>
          
          <p style={styles.farmDescription}>{description}</p>
          
          <div style={styles.farmDetails}>
            <div style={styles.detailItem}>
               <span>{capacity}</span>
            </div>
            <div style={styles.detailItem}>
               <span>Коворкинг</span>
            </div>
          </div>
          
          {facilities.length > 0 && (
            <div style={styles.farmFacilities}>
              <h4 style={styles.facilitiesTitle}>Удобства:</h4>
              <div style={styles.facilitiesList}>
                {facilities.map((facility, index) => (
                  <span key={index} style={styles.facilityTag}>{facility}</span>
                ))}
              </div>
            </div>
          )}
          
          <div style={styles.farmActions}>
            <button style={styles.bookBtn} onClick={onBook}>
              Забронировать
            </button>
            <button style={styles.detailsBtn}>
              Подробнее
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FarmCard;