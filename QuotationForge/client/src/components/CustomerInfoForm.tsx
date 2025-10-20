import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Users } from 'lucide-react';

interface CustomerInfoFormProps {
  data: {
    name: string;
    address: string;
    taxId: string;
    phone: string;
    email: string;
    contactPerson: string;
  };
  onChange: (field: string, value: string) => void;
}

export default function CustomerInfoForm({ data, onChange }: CustomerInfoFormProps) {
  const { t } = useTranslation();

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Users className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">{t('customer')}</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="customer-name" data-testid="label-customer-name">
            {t('customerName')}
          </Label>
          <Input
            id="customer-name"
            data-testid="input-customer-name"
            value={data.name}
            onChange={(e) => onChange('name', e.target.value)}
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="customer-contact" data-testid="label-customer-contact">
            {t('contactPerson')}
          </Label>
          <Input
            id="customer-contact"
            data-testid="input-customer-contact"
            value={data.contactPerson}
            onChange={(e) => onChange('contactPerson', e.target.value)}
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="customer-address" data-testid="label-customer-address">
            {t('address')}
          </Label>
          <Textarea
            id="customer-address"
            data-testid="input-customer-address"
            value={data.address}
            onChange={(e) => onChange('address', e.target.value)}
            className="mt-1.5 min-h-[80px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="customer-tax" data-testid="label-customer-tax">
              {t('taxId')}
            </Label>
            <Input
              id="customer-tax"
              data-testid="input-customer-tax"
              value={data.taxId}
              onChange={(e) => onChange('taxId', e.target.value)}
              className="mt-1.5"
            />
          </div>

          <div>
            <Label htmlFor="customer-phone" data-testid="label-customer-phone">
              {t('phone')}
            </Label>
            <Input
              id="customer-phone"
              data-testid="input-customer-phone"
              value={data.phone}
              onChange={(e) => onChange('phone', e.target.value)}
              className="mt-1.5"
            />
          </div>

          <div>
            <Label htmlFor="customer-email" data-testid="label-customer-email">
              {t('email')}
            </Label>
            <Input
              id="customer-email"
              data-testid="input-customer-email"
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
