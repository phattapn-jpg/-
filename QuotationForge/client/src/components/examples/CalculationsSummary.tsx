import CalculationsSummary from '../CalculationsSummary';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/config';

export default function CalculationsSummaryExample() {
  const subtotal = 6600;
  const vat = 462;
  const grandTotal = 7062;

  return (
    <I18nextProvider i18n={i18n}>
      <CalculationsSummary subtotal={subtotal} vat={vat} grandTotal={grandTotal} />
    </I18nextProvider>
  );
}
