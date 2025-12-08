import React, { Component } from 'react';

class Statistics extends Component {
  stats = [
    { label: "Активных ферм", value: "24", icon: "" },
    { label: "Забронировано мест", value: "156", icon: "" },
    { label: "Средний рейтинг", value: "4.7", icon: "" },
    { label: "Экономия клиентов", value: "2.4М ₽", icon: "" }
  ];

  styles = {
    statistics: {
      padding: '60px 20px',
      background: '#f9f9f9',
      textAlign: 'center'
    },
    title: {
      color: '#2c5530',
      marginBottom: '40px',
      fontSize: '2rem'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '30px',
      maxWidth: '1000px',
      margin: '0 auto'
    },
    statCard: {
      background: 'white',
      padding: '30px',
      borderRadius: '16px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'transform 0.3s'
    },
    statIconLarge: {
      fontSize: '48px',
      marginBottom: '20px'
    },
    statValueLarge: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#2c5530',
      marginBottom: '10px'
    },
    statLabelLarge: {
      color: '#666',
      fontSize: '1.1rem'
    },
    // Compact version
    statsCompact: {
      background: '#2c5530',
      color: 'white',
      padding: '30px 20px',
      marginTop: '40px'
    },
    compactTitle: {
      textAlign: 'center',
      marginBottom: '30px',
      fontSize: '1.5rem'
    },
    statsGridCompact: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '20px',
      maxWidth: '800px',
      margin: '0 auto'
    },
    statItemCompact: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    },
    statIcon: {
      fontSize: '32px',
      marginBottom: '10px'
    },
    statValue: {
      fontSize: '1.8rem',
      fontWeight: '700',
      marginBottom: '5px'
    },
    statLabel: {
      fontSize: '0.9rem',
      opacity: 0.9
    }
  };

  renderCompactVersion() {
    return (
      <div style={this.styles.statsCompact}>
        <h3 style={this.styles.compactTitle}> Статистика платформы</h3>
        <div style={this.styles.statsGridCompact}>
          {this.stats.map((stat, index) => (
            <div key={index} style={this.styles.statItemCompact}>
              <span style={this.styles.statIcon}>{stat.icon}</span>
              <span style={this.styles.statValue}>{stat.value}</span>
              <span style={this.styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  renderFullVersion() {
    return (
      <div style={this.styles.statistics}>
        <h2 style={this.styles.title}>Статистика платформы</h2>
        <div style={this.styles.statsGrid}>
          {this.stats.map((stat, index) => (
            <div key={index} style={this.styles.statCard}>
              <div style={this.styles.statIconLarge}>{stat.icon}</div>
              <div>
                <div style={this.styles.statValueLarge}>{stat.value}</div>
                <div style={this.styles.statLabelLarge}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    const { compact = false } = this.props;

    if (compact) {
      return this.renderCompactVersion();
    }

    return this.renderFullVersion();
  }
}

export default Statistics;