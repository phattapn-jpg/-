import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FileText } from 'lucide-react';

interface TermsConditionsProps {
  data: {
    deliveryTerms: string;
    paymentTerms: string;
    validityPeriod: string;
    remarks: string;
  };
  onChange: (field: string, value: string) => void;
}

export default function TermsConditions({ data, onChange }: TermsConditionsProps) {
  const { t } = useTranslation();

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <FileText className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">{t('terms')}</h2>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="delivery-terms" data-testid="label-delivery-terms">
            {t('deliveryTerms')}
          </Label>
          <Textarea
            id="delivery-terms"
            data-testid="input-delivery-terms"
            value={data.deliveryTerms}
            onChange={(e) => onChange('deliveryTerms', e.target.value)}
            className="mt-1.5 min-h-[60px]"
            placeholder="e.g., 7-14 working days from order confirmation"
          />
        </div>

        <div>
          <Label htmlFor="payment-terms" data-testid="label-payment-terms">
            {t('paymentTerms')}
          </Label>
          <Textarea
            id="payment-terms"
            data-testid="input-payment-terms"
            value={data.paymentTerms}
            onChange={(e) => onChange('paymentTerms', e.target.value)}
            className="mt-1.5 min-h-[60px]"
            placeholder="e.g., 50% deposit, 50% upon completion"
          />
        </div>

        <div>
          <Label htmlFor="validity-period" data-testid="label-validity-period">
            {t('validityPeriod')}
          </Label>
          <div className="flex gap-2 mt-1.5">
            <Input
              id="validity-period"
              data-testid="input-validity-period"
              value={data.validityPeriod}
              onChange={(e) => onChange('validityPeriod', e.target.value)}
              placeholder="30"
              className="w-24"
            />
            <span className="flex items-center text-muted-foreground">{t('days')}</span>
          </div>
        </div>

        <div>
          <Label htmlFor="remarks" data-testid="label-remarks">
            {t('remarks')}
          </Label>
          <Textarea
            id="remarks"
            data-testid="input-remarks"
            value={data.remarks}
            onChange={(e) => onChange('remarks', e.target.value)}
            className="mt-1.5 min-h-[80px]"
            placeholder="Additional notes or special conditions..."
          />
        </div>
      </div>
    </Card>
  );
}
