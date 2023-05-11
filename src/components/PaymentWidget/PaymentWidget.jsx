import React, { Component } from 'react';
import { Container } from './PaymentWidget.styled';
import { PaymentMethods } from '../PaymentMethods/PaymentMethods';

export class PaymentWidget extends Component {
  render() {
    return (
      <Container>
        <PaymentMethods />
      </Container>
    );
  }
}
