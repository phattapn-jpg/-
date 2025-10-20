import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

interface CalculationsSummaryProps {
  subtotal: number;
  vat: number;
  grandTotal: number;
}

export default function CalculationsSummary({ subtotal, vat, grandTotal }: CalculationsSummaryProps) {
  const { t } = useTranslation();

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">Summary</h2>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">{t('subtotal')}</span>
          <span className="font-medium" data-testid="text-subtotal">
            {t('baht')} {formatCurrency(subtotal)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">{t('vat')}</span>
          <span className="font-medium" data-testid="text-vat">
            {t('baht')} {formatCurrency(vat)}
          </span>
        </div>

        <div className="pt-3 border-t">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">{t('grandTotal')}</span>
            <span className="text-xl font-bold text-primary" data-testid="text-grandtotal">
              {t('baht')} {formatCurrency(grandTotal)}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
