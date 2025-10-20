import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { FileText } from 'lucide-react';

interface QuotationHeaderProps {
  quotationNo: string;
  date: string;
  onQuotationNoChange: (value: string) => void;
  onDateChange: (value: string) => void;
}

export default function QuotationHeader({ 
  quotationNo, 
  date, 
  onQuotationNoChange, 
  onDateChange 
}: QuotationHeaderProps) {
  const { t } = useTranslation();

  return (
    <div className="border-b bg-card">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{t('quotation')}</h1>
              <p className="text-sm text-muted-foreground">Inctech Metrological Center Co.,Ltd</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex gap-3">
              <div>
                <Label className="text-xs">{t('quotationNo')}</Label>
                <Input
                  value={quotationNo}
                  onChange={(e) => onQuotationNoChange(e.target.value)}
                  className="w-32 mt-1"
                  data-testid="input-quotation-no"
                />
              </div>
              <div>
                <Label className="text-xs">{t('date')}</Label>
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => onDateChange(e.target.value)}
                  className="w-40 mt-1"
                  data-testid="input-date"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
