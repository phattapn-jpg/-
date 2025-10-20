import { useState } from 'react';
import LineItemsTable, { LineItem } from '../LineItemsTable';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/config';

export default function LineItemsTableExample() {
  const [items, setItems] = useState<LineItem[]>([
    {
      id: '1',
      itemNo: '1',
      description: 'Torque Wrench Calibration (0-100 Nm)',
      iso17025: true,
      quantity: 2,
      unitPrice: 1500,
      discount: 0
    },
    {
      id: '2',
      itemNo: '2',
      description: 'Digital Caliper Calibration',
      iso17025: true,
      quantity: 5,
      unitPrice: 800,
      discount: 10
    }
  ]);

  const handleAddItem = () => {
    const newItem: LineItem = {
      id: Date.now().toString(),
      itemNo: (items.length + 1).toString(),
      description: '',
      iso17025: false,
      quantity: 1,
      unitPrice: 0,
      discount: 0
    };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleUpdateItem = (id: string, field: keyof LineItem, value: any) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  return (
    <I18nextProvider i18n={i18n}>
      <LineItemsTable
        items={items}
        onAddItem={handleAddItem}
        onRemoveItem={handleRemoveItem}
        onUpdateItem={handleUpdateItem}
      />
    </I18nextProvider>
  );
}
