import { useState } from 'react';
import TermsConditions from '../TermsConditions';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/config';

export default function TermsConditionsExample() {
  const [data, setData] = useState({
    deliveryTerms: '7-14 working days from order confirmation',
    paymentTerms: '50% deposit upon order, 50% upon completion',
    validityPeriod: '30',
    remarks: 'All calibrations performed according to ISO/IEC 17025 standards. Certificate will be issued upon completion.'
  });

  const handleChange = (field: string, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <I18nextProvider i18n={i18n}>
      <TermsConditions data={data} onChange={handleChange} />
    </I18nextProvider>
  );
}
