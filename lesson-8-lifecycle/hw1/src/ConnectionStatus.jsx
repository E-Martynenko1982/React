import React from "react";

class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props);
    // Встановлюємо початковий стан як online
    this.state = {
      isOnline: true,
    };
  }

  componentDidMount() {
    // Підписуємось на події зміни статусу з'єднання
    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffline);
  }

  componentWillUnmount() {
    // Відмовляємось від подій при видаленні компонента
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffline);
  }

  handleOnline = () => {
    this.setState({ isOnline: true });
  };

  handleOffline = () => {
    this.setState({ isOnline: false });
  };

  render() {
    const { isOnline } = this.state;
    return (
      <div className={`status ${isOnline ? '' : 'status_offline'}`}>
        {isOnline ? 'online' : 'offline'}
      </div>
    );
  }
}

export default ConnectionStatus;
