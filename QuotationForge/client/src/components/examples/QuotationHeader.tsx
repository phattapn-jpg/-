import { useState } from 'react';
import QuotationHeader from '../QuotationHeader';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/config';
import { ThemeProvider } from '../../contexts/ThemeProvider';

export default function QuotationHeaderExample() {
  const [quotationNo, setQuotationNo] = useState('QT-2025-001');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <QuotationHeader
          quotationNo={quotationNo}
          date={date}
          onQuotationNoChange={setQuotationNo}
          onDateChange={setDate}
        />
      </ThemeProvider>
    </I18nextProvider>
  );
}
