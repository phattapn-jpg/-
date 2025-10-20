import { useState } from 'react';
import CustomerInfoForm from '../CustomerInfoForm';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/config';

export default function CustomerInfoFormExample() {
  const [data, setData] = useState({
    name: 'ABC Manufacturing Co., Ltd.',
    contactPerson: 'John Smith',
    address: '456 Industrial Estate, Samut Prakan 10280, Thailand',
    taxId: '0-9876-54321-01-2',
    phone: '+66 2 987 6543',
    email: 'john@abcmfg.com'
  });

  const handleChange = (field: string, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <I18nextProvider i18n={i18n}>
      <CustomerInfoForm data={data} onChange={handleChange} />
    </I18nextProvider>
  );
}
