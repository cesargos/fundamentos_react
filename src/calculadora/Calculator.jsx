import React, { Component } from 'react';
import './Calculador.css';
import Button from './components/Button';
import Display from './components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
  operationPress: false,
  equalPress: false,
};

const operacoes = (a, b, operacao) => {
  return {
    '+': a + b,
    '*': a * b,
    '/': a / b,
    '-': a - b,
  }[operacao];
};
export default class Calculador extends Component {
  state = { ...initialState };
  clearMemory = () => {
    this.setState({ ...initialState });
  };

  setOperation = (operation) => {
    if (this.state.displayValue === '0' && this.state.current === 0) {
      return;
    }
    if (this.state.current === 0 && operation === '=') {
      return;
    }
    if (operation !== '=' && this.state.operationPress) {
      this.setState({
        operation,
      });
      return;
    }

    if (!this.state.current) {
      this.setState({
        operation,
        current: 1,
        clearDisplay: true,
        operationPress: true,
      });
    } else {
      const equals = operation === '=';

      const currentOperation = this.state.operation;

      const values = [...this.state.values];

      if (equals && this.state.equalPress) return;

      values[0] = operacoes(values[0], values[1], currentOperation);
      values[1] = 0;
      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        values,
        clearDisplay: true,
        operationPress: equals ? false : true,
        equalPress: equals,
      });
    }
  };

  addDigit = (n) => {
    if (n === '.' && this.state.displayValue.includes('.')) return;

    const clearDisplay =
      this.state.displayValue === '0' || this.state.clearDisplay;

    const currentValue = clearDisplay ? '' : this.state.displayValue;

    const displayValue = currentValue + n;

    this.setState({ displayValue, clearDisplay: false });

    if (n !== '.') {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({ values, operationPress: false, equalPress: false });
    }
  };

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" click={this.clearMemory} triple />
        <Button label="/" click={this.setOperation} operation />
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="*" click={this.setOperation} operation />
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} operation />
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} operation />
        <Button label="0" click={this.addDigit} double />
        <Button label="." click={this.addDigit} />
        <Button label="=" click={this.setOperation} operation />
      </div>
    );
  }
}
