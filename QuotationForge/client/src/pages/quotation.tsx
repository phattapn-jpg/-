import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useReactToPrint } from 'react-to-print';
import QuotationHeader from '@/components/QuotationHeader';
import CompanyInfoForm from '@/components/CompanyInfoForm';
import CustomerInfoForm from '@/components/CustomerInfoForm';
import LineItemsTable, { LineItem } from '@/components/LineItemsTable';
import CalculationsSummary from '@/components/CalculationsSummary';
import TermsConditions from '@/components/TermsConditions';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function QuotationPage() {
  const { t } = useTranslation();
  const printRef = useRef<HTMLDivElement>(null);

  const [quotationNo, setQuotationNo] = useState('QT-2025-001');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const [companyInfo, setCompanyInfo] = useState({
    name: 'Precision Metrology Services Ltd.',
    address: '123 Calibration Road, Bangkok 10110, Thailand',
    taxId: '0-1234-56789-01-2',
    phone: '+66 2 123 4567',
    email: 'info@precisionmetro.com'
  });

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    contactPerson: '',
    address: '',
    taxId: '',
    phone: '',
    email: ''
  });

  const [items, setItems] = useState<LineItem[]>([
    {
      id: '1',
      itemNo: '1',
      description: 'Torque Wrench Calibration (0-100 Nm)',
      iso17025: true,
      quantity: 2,
      unitPrice: 1500,
      discount: 0
    }
  ]);

  const [terms, setTerms] = useState({
    deliveryTerms: '7-14 working days from order confirmation',
    paymentTerms: '50% deposit upon order, 50% upon completion',
    validityPeriod: '30',
    remarks: 'All calibrations performed according to ISO/IEC 17025 standards. Certificate will be issued upon completion.'
  });

  const calculateItemAmount = (item: LineItem) => {
    const subtotal = item.quantity * item.unitPrice;
    const discountAmount = (subtotal * item.discount) / 100;
    return subtotal - discountAmount;
  };

  const subtotal = items.reduce((sum, item) => sum + calculateItemAmount(item), 0);
  const vat = subtotal * 0.07;
  const grandTotal = subtotal + vat;

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

  const handlePrint = useReactToPrint({
    contentRef: printRef,
  });

  const handleDownloadPDF = async () => {
    if (!printRef.current) return;

    const element = printRef.current;
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save(`quotation-${quotationNo}.pdf`);
  };

  return (
    <div className="min-h-screen bg-background">
      <QuotationHeader
        quotationNo={quotationNo}
        date={date}
        onQuotationNoChange={setQuotationNo}
        onDateChange={setDate}
      />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div ref={printRef} className="space-y-6 print:space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CompanyInfoForm
              data={companyInfo}
              onChange={(field, value) => 
                setCompanyInfo(prev => ({ ...prev, [field]: value }))
              }
            />
            <CustomerInfoForm
              data={customerInfo}
              onChange={(field, value) => 
                setCustomerInfo(prev => ({ ...prev, [field]: value }))
              }
            />
          </div>

          <LineItemsTable
            items={items}
            onAddItem={handleAddItem}
            onRemoveItem={handleRemoveItem}
            onUpdateItem={handleUpdateItem}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TermsConditions
              data={terms}
              onChange={(field, value) => 
                setTerms(prev => ({ ...prev, [field]: value }))
              }
            />
            <CalculationsSummary
              subtotal={subtotal}
              vat={vat}
              grandTotal={grandTotal}
            />
          </div>

          <div className="print:hidden flex gap-3 justify-end pt-6">
            <Button
              variant="outline"
              onClick={handlePrint}
              data-testid="button-print"
              className="gap-2"
            >
              <FileText className="h-4 w-4" />
              {t('preview')}
            </Button>
            <Button
              onClick={handleDownloadPDF}
              data-testid="button-generate-pdf"
              className="gap-2"
            >
              <Download className="h-4 w-4" />
              {t('generatePdf')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
