import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'th' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="outline"
      size="default"
      onClick={toggleLanguage}
      data-testid="button-language-toggle"
      className="gap-2"
    >
      <Languages className="h-4 w-4" />
      <span>{i18n.language === 'en' ? 'TH' : 'EN'}</span>
    </Button>
  );
}
