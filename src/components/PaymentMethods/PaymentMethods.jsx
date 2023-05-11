import { Button } from './PaymentMethods.styled';
import { paymentMethods } from '../../constants/paymentMethods';

export const PaymentMethods = ({ selected, onSelect }) => {
  return (
    <>
      <Button
        selected={selected === paymentMethods.mastercard}
        onCLick={() => onSelect(paymentMethods.mastercard)}
      >
        Mastercard
      </Button>
      <Button
        selected={selected === paymentMethods.visa}
        onCLick={() => onSelect(paymentMethods.visa)}
      >
        Visa
      </Button>
      <Button
        selected={selected === paymentMethods.applepay}
        onCLick={() => onSelect(paymentMethods.applepay)}
      >
        Apple Pay
      </Button>
    </>
  );
};
