import LanguageToggle from '../LanguageToggle';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/config';

export default function LanguageToggleExample() {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageToggle />
    </I18nextProvider>
  );
}
