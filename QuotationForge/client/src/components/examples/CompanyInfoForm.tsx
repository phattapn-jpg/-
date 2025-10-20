import { useState } from 'react';
import CompanyInfoForm from '../CompanyInfoForm';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/config';

export default function CompanyInfoFormExample() {
  const [data, setData] = useState({
    name: 'Precision Metrology Services Ltd.',
    address: '123 Calibration Road, Bangkok 10110, Thailand',
    taxId: '0-1234-56789-01-2',
    phone: '+66 2 123 4567',
    email: 'info@precisionmetro.com'
  });

  const handleChange = (field: string, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <I18nextProvider i18n={i18n}>
      <CompanyInfoForm data={data} onChange={handleChange} />
    </I18nextProvider>
  );
}
