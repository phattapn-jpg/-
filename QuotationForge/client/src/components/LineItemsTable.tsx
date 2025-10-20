import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2, Package } from 'lucide-react';

export interface LineItem {
  id: string;
  itemNo: string;
  description: string;
  iso17025: boolean;
  quantity: number;
  unitPrice: number;
  discount: number;
}

interface LineItemsTableProps {
  items: LineItem[];
  onAddItem: () => void;
  onRemoveItem: (id: string) => void;
  onUpdateItem: (id: string, field: keyof LineItem, value: any) => void;
}

export default function LineItemsTable({ items, onAddItem, onRemoveItem, onUpdateItem }: LineItemsTableProps) {
  const { t } = useTranslation();

  const calculateAmount = (item: LineItem) => {
    const subtotal = item.quantity * item.unitPrice;
    const discountAmount = (subtotal * item.discount) / 100;
    return subtotal - discountAmount;
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Package className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">{t('items')}</h2>
        </div>
        <Button onClick={onAddItem} data-testid="button-add-item" size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          {t('addItem')}
        </Button>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          <div className="grid grid-cols-[60px_1fr_100px_80px_120px_80px_120px_50px] gap-2 mb-3 pb-2 border-b text-sm font-medium">
            <div>{t('itemNo')}</div>
            <div>{t('description')}</div>
            <div className="text-center">{t('iso17025')}</div>
            <div className="text-right">{t('quantity')}</div>
            <div className="text-right">{t('unitPrice')}</div>
            <div className="text-right">{t('discount')} %</div>
            <div className="text-right">{t('amount')}</div>
            <div></div>
          </div>

          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[60px_1fr_100px_80px_120px_80px_120px_50px] gap-2 items-start"
                data-testid={`row-item-${item.id}`}
              >
                <Input
                  value={item.itemNo}
                  onChange={(e) => onUpdateItem(item.id, 'itemNo', e.target.value)}
                  className="h-9"
                  data-testid={`input-itemno-${item.id}`}
                />
                <Textarea
                  value={item.description}
                  onChange={(e) => onUpdateItem(item.id, 'description', e.target.value)}
                  className="min-h-[36px] resize-none"
                  data-testid={`input-description-${item.id}`}
                />
                <div className="flex items-center justify-center h-9">
                  <Checkbox
                    checked={item.iso17025}
                    onCheckedChange={(checked) => onUpdateItem(item.id, 'iso17025', checked)}
                    data-testid={`checkbox-iso-${item.id}`}
                  />
                </div>
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => onUpdateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                  className="h-9 text-right"
                  data-testid={`input-quantity-${item.id}`}
                />
                <Input
                  type="number"
                  value={item.unitPrice}
                  onChange={(e) => onUpdateItem(item.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                  className="h-9 text-right"
                  data-testid={`input-unitprice-${item.id}`}
                />
                <Input
                  type="number"
                  value={item.discount}
                  onChange={(e) => onUpdateItem(item.id, 'discount', parseFloat(e.target.value) || 0)}
                  className="h-9 text-right"
                  data-testid={`input-discount-${item.id}`}
                />
                <div className="h-9 flex items-center justify-end text-sm font-medium" data-testid={`text-amount-${item.id}`}>
                  {calculateAmount(item).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onRemoveItem(item.id)}
                  data-testid={`button-remove-${item.id}`}
                  className="h-9 w-9"
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
