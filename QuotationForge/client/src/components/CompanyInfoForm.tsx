import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Building2 } from 'lucide-react';

interface CompanyInfoFormProps {
  data: {
    name: string;
    address: string;
    taxId: string;
    phone: string;
    email: string;
  };
  onChange: (field: string, value: string) => void;
}

export default function CompanyInfoForm({ data, onChange }: CompanyInfoFormProps) {
  const { t } = useTranslation();

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Building2 className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">{t('company')}</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="company-name" data-testid="label-company-name">
            {t('companyName')}
          </Label>
          <Input
            id="company-name"
            data-testid="input-company-name"
            value={data.name}
            onChange={(e) => onChange('name', e.target.value)}
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="company-address" data-testid="label-company-address">
            {t('address')}
          </Label>
          <Textarea
            id="company-address"
            data-testid="input-company-address"
            value={data.address}
            onChange={(e) => onChange('address', e.target.value)}
            className="mt-1.5 min-h-[80px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="company-tax" data-testid="label-company-tax">
              {t('taxId')}
            </Label>
            <Input
              id="company-tax"
              data-testid="input-company-tax"
              value={data.taxId}
              onChange={(e) => onChange('taxId', e.target.value)}
              className="mt-1.5"
            />
          </div>

          <div>
            <Label htmlFor="company-phone" data-testid="label-company-phone">
              {t('phone')}
            </Label>
            <Input
              id="company-phone"
              data-testid="input-company-phone"
              value={data.phone}
              onChange={(e) => onChange('phone', e.target.value)}
              className="mt-1.5"
            />
          </div>

          <div>
            <Label htmlFor="company-email" data-testid="label-company-email">
              {t('email')}
            </Label>
            <Input
              id="company-email"
              data-testid="input-company-email"
              type="email"
              value={data.email}
              onChange={(e) => onChange('email', e.target.value)}
              className="mt-1.5"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
