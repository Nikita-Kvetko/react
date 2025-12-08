import React, { Component } from 'react';

class BookingModal extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      bookingData: {
        date: '',
        duration: '1',
        participants: '1',
        notes: '',
        contactPhone: '',
        email: ''
      }
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      bookingData: {
        ...prevState.bookingData,
        [name]: value
      }
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onConfirm({
      ...this.state.bookingData,
      farmName: this.props.farm?.name,
      totalPrice: this.calculatePrice()
    });
  };

  calculatePrice = () => {
    const basePrice = parseInt(this.props.farm?.price?.match(/\d+/g)?.[0] || '5000');
    const duration = parseInt(this.state.bookingData.duration);
    const participants = parseInt(this.state.bookingData.participants);
    return basePrice * duration * participants;
  };

  styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    },
    modal: {
      background: 'white',
      borderRadius: '16px',
      width: '100%',
      maxWidth: '600px',
      maxHeight: '90vh',
      overflowY: 'auto',
      position: 'relative'
    },
    closeBtn: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      background: 'transparent',
      border: 'none',
      fontSize: '28px',
      cursor: 'pointer',
      color: '#666',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    content: {
      padding: '40px'
    },
    title: {
      color: '#2c5530',
      marginBottom: '10px',
      fontSize: '1.8rem'
    },
    subtitle: {
      color: '#666',
      marginBottom: '30px',
      fontSize: '1.1rem'
    },
    farmInfo: {
      background: '#f9f9f9',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '30px',
      borderLeft: '4px solid #4a8c5c'
    },
    farmInfoItem: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '8px'
    },
    farmLabel: {
      color: '#666',
      fontWeight: '500'
    },
    farmValue: {
      color: '#333',
      fontWeight: '600'
    },
    formGroup: {
      marginBottom: '25px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#333',
      fontWeight: '500'
    },
    input: {
      width: '100%',
      padding: '12px 15px',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '16px',
      transition: 'border-color 0.3s'
    },
    select: {
      width: '100%',
      padding: '12px 15px',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '16px',
      backgroundColor: 'white',
      cursor: 'pointer'
    },
    textarea: {
      width: '100%',
      padding: '12px 15px',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '16px',
      minHeight: '100px',
      resize: 'vertical',
      fontFamily: 'inherit'
    },
    priceSection: {
      background: '#f0f7f0',
      padding: '25px',
      borderRadius: '12px',
      marginBottom: '30px',
      border: '1px solid #d0e7d0'
    },
    priceTitle: {
      color: '#2c5530',
      marginBottom: '20px',
      fontSize: '1.3rem'
    },
    priceRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '12px',
      paddingBottom: '12px',
      borderBottom: '1px solid rgba(74, 140, 92, 0.2)'
    },
    totalRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
      paddingTop: '20px',
      borderTop: '2px solid #4a8c5c',
      fontSize: '1.2rem',
      fontWeight: '700',
      color: '#2c5530'
    },
    modalActions: {
      display: 'flex',
      gap: '15px',
      marginTop: '30px'
    },
    cancelBtn: {
      flex: 1,
      padding: '15px',
      background: 'transparent',
      color: '#666',
      border: '2px solid #ddd',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    confirmBtn: {
      flex: 1,
      padding: '15px',
      background: '#4a8c5c',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    required: {
      color: '#e74c3c'
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px'
    }
  };

  render() {
    const { farm, onClose } = this.props;
    const { bookingData } = this.state;
    const styles = this.styles;

    if (!farm) return null;

    const today = new Date().toISOString().split('T')[0];

    return (
      <div style={styles.overlay} onClick={onClose}>
        <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
          <button style={styles.closeBtn} onClick={onClose} title="Закрыть">×</button>
          
          <div style={styles.content}>
            <h2 style={styles.title}> Бронирование коворкинг-фермы</h2>
            <p style={styles.subtitle}>Заполните форму для бронирования места</p>
            
            <div style={styles.farmInfo}>
              <div style={styles.farmInfoItem}>
                <span style={styles.farmLabel}>Ферма:</span>
                <span style={styles.farmValue}>{farm.name}</span>
              </div>
              <div style={styles.farmInfoItem}>
                <span style={styles.farmLabel}>Локация:</span>
                <span style={styles.farmValue}>{farm.location}</span>
              </div>
              <div style={styles.farmInfoItem}>
                <span style={styles.farmLabel}>Цена за день:</span>
                <span style={styles.farmValue}>{farm.price}</span>
              </div>
              <div style={styles.farmInfoItem}>
                <span style={styles.farmLabel}>Вместимость:</span>
                <span style={styles.farmValue}>{farm.capacity}</span>
              </div>
            </div>
            
            <form onSubmit={this.handleSubmit}>
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Дата бронирования <span style={styles.required}>*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={bookingData.date}
                    onChange={this.handleChange}
                    required
                    min={today}
                    style={styles.input}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Количество дней <span style={styles.required}>*</span>
                  </label>
                  <select
                    name="duration"
                    value={bookingData.duration}
                    onChange={this.handleChange}
                    style={styles.select}
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map(day => (
                      <option key={day} value={day}>{day} день(дней)</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Количество участников <span style={styles.required}>*</span>
                  </label>
                  <input
                    type="number"
                    name="participants"
                    value={bookingData.participants}
                    onChange={this.handleChange}
                    min="1"
                    max="50"
                    required
                    style={styles.input}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Контактный телефон <span style={styles.required}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={bookingData.contactPhone}
                    onChange={this.handleChange}
                    placeholder="+7 (999) 123-45-67"
                    required
                    style={styles.input}
                  />
                </div>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Email для подтверждения <span style={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={bookingData.email}
                  onChange={this.handleChange}
                  placeholder="example@mail.ru"
                  required
                  style={styles.input}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Дополнительные пожелания</label>
                <textarea
                  name="notes"
                  value={bookingData.notes}
                  onChange={this.handleChange}
                  placeholder="Особые требования, необходимое оборудование, дополнительные услуги..."
                  style={styles.textarea}
                />
              </div>
              
              <div style={styles.priceSection}>
                <h3 style={styles.priceTitle}> Расчёт стоимости</h3>
                
                <div style={styles.priceRow}>
                  <span>Цена за день:</span>
                  <span>{farm.price}</span>
                </div>
                
                <div style={styles.priceRow}>
                  <span>Количество дней:</span>
                  <span>{bookingData.duration}</span>
                </div>
                
                <div style={styles.priceRow}>
                  <span>Количество участников:</span>
                  <span>{bookingData.participants}</span>
                </div>
                
                <div style={styles.totalRow}>
                  <span>Итого к оплате:</span>
                  <span>{this.calculatePrice().toLocaleString()} ₽</span>
                </div>
              </div>
              
              <div style={styles.modalActions}>
                <button type="button" style={styles.cancelBtn} onClick={onClose}>
                  Отмена
                </button>
                <button type="submit" style={styles.confirmBtn}>
                   Подтвердить бронирование
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingModal;