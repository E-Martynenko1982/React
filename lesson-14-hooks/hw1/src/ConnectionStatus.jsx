import React, { useState, useEffect } from "react";



const ConnectionStatus = () => {
  //Ініціалізація стану isOnline, за умовчанням true (онлайн)
  const [isOnline, setIsOnLine] = useState(true);

  //Хук useEffect для управління подіями при монтуванні та розмонтуванні компонента
  useEffect(() => {
    const handleOnline = () => setIsOnLine(true); // обробник для переходу в онлайн
    const handleOffline = () => setIsOnLine(false); // обробник для переходу в офлайн
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Повернення функції очищення для видалення передплат при розмонтуванні компонента
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    }
  }, []) // Порожній масив залежностей гарантує, що ефект виконається тільки при монтуванні та розмонтуванні компонента




  return (
    <div className={`status ${isOnline ? '' : 'status_offline'}`}>
      {isOnline ? 'online' : 'offline'}
    </div>
  );

}

export default ConnectionStatus;
