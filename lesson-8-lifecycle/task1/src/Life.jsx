import React from "react";

class Life extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor: good place to create state');

    this.state = {
      count: 0, // Начальное состояние
    };
  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');

    // Устанавливаем таймер, который изменяет состояние через 2 секунды
    this.timer = setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');
    return true; // Возвращаем true, чтобы позволить рендеринг
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');

    // Очищаем таймер при размонтировании компонента
    clearTimeout(this.timer);
  }

  render() {
    console.log('return React element to build DOM');

    return (
      <div>Hello world. Count: {this.state.count}</div>
    );
  }
}

export default Life;