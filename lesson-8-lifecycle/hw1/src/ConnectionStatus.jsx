import React from "react";

class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true
    }
  }

  componentDidMount() {
    //підписуємось на події зміни статусу зєднання
    window.addEventListener('online', this.updateStatus);
    window.addEventListener('offline', this.updateStatus);
    // встановлюємо поточний стан зєднання
    this.setState({ isOnline: navigator.onLine });
  }
  componentWillUnmount() {
    //відписуємось на події зміни статусу зєднання
    window.removeEventListener('online', this.updateStatus);
    window.removeEventListener('offline', this.updateStatus);
  }

  updateStatus = () => {
    this.setState({ isOnline: navigator.onLine })
  }
  render() {
    const { isOnline } = this.state;
    return (
      <div className={`status ${isOnline ? '' : 'status_offline'}`}>
        {isOnline ? 'online' : 'offline'}
      </div>
    )
  }
};
export default ConnectionStatus;