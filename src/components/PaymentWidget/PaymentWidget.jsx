import React, { Component } from 'react';
import { Button, Container } from './PaymentWidget.styled';

const methods = Object.freeze({
  mastercard: 'mastercard',
  visa: 'visa',
  applepay: 'applepay',
});

export class PaymentWidget extends Component {
  state = {
    selectedMethod: null,
  };

  selectPaymentMethod = method => () => {
    this.setState({ selectedMethod: method });
  };

  render() {
    const {
      state: { selectedMethod },
      selectPaymentMethod,
    } = this;

    return (
      <Container>
        <Button
          selected={selectedMethod === methods.mastercard}
          onCLick={selectPaymentMethod(methods.mastercard)}
        >
          Mastercard
        </Button>
        <Button
          selected={selectedMethod === methods.visa}
          onCLick={selectPaymentMethod(methods.visa)}
        >
          Visa
        </Button>
        <Button
          selected={selectedMethod === methods.applepay}
          onCLick={selectPaymentMethod(methods.applepay)}
        >
          Apple Pay
        </Button>
      </Container>
    );
  }
}