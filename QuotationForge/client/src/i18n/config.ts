import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      quotation: 'Quotation',
      company: 'Company Information',
      customer: 'Customer Information',
      items: 'Line Items',
      terms: 'Terms & Conditions',
      companyName: 'Company Name',
      address: 'Address',
      taxId: 'Tax ID',
      phone: 'Phone',
      email: 'Email',
      customerName: 'Customer Name',
      contactPerson: 'Contact Person',
      itemNo: 'Item No.',
      description: 'Description',
      iso17025: 'ISO/IEC 17025',
      quantity: 'Quantity',
      unitPrice: 'Unit Price',
      discount: 'Discount',
      amount: 'Amount',
      addItem: 'Add Item',
      subtotal: 'Subtotal',
      vat: 'VAT (7%)',
      grandTotal: 'Grand Total',
      deliveryTerms: 'Delivery Terms',
      paymentTerms: 'Payment Terms',
      validityPeriod: 'Validity Period',
      remarks: 'Remarks',
      generatePdf: 'Generate PDF',
      preview: 'Preview',
      quotationNo: 'Quotation No.',
      date: 'Date',
      preparedBy: 'Prepared By',
      approvedBy: 'Approved By',
      signature: 'Signature',
      yes: 'Yes',
      no: 'No',
      baht: '฿',
      days: 'days'
    }
  },
  th: {
    translation: {
      quotation: 'ใบเสนอราคา',
      company: 'ข้อมูลบริษัท',
      customer: 'ข้อมูลลูกค้า',
      items: 'รายการสินค้า/บริการ',
      terms: 'เงื่อนไข',
      companyName: 'ชื่อบริษัท',
      address: 'ที่อยู่',
      taxId: 'เลขประจำตัวผู้เสียภาษี',
      phone: 'โทรศัพท์',
      email: 'อีเมล',
      customerName: 'ชื่อลูกค้า',
      contactPerson: 'ผู้ติดต่อ',
      itemNo: 'ลำดับ',
      description: 'รายละเอียด',
      iso17025: 'ISO/IEC 17025',
      quantity: 'จำนวน',
      unitPrice: 'ราคาต่อหน่วย',
      discount: 'ส่วนลด',
      amount: 'จำนวนเงิน',
      addItem: 'เพิ่มรายการ',
      subtotal: 'ยอดรวม',
      vat: 'ภาษีมูลค่าเพิ่ม 7%',
      grandTotal: 'ยอดรวมทั้งสิ้น',
      deliveryTerms: 'เงื่อนไขการส่งมอบ',
      paymentTerms: 'เงื่อนไขการชำระเงิน',
      validityPeriod: 'อายุใบเสนอราคา',
      remarks: 'หรหมายเหตุ',
      generatePdf: 'สร้าง PDF',
      preview: 'ดูตัวอย่าง',
      quotationNo: 'เลขที่',
      date: 'วันที่',
      preparedBy: 'ผู้จัดทำ',
      approvedBy: 'ผู้อนุมัติ',
      signature: 'ลายเซ็น',
      yes: 'ใช่',
      no: 'ไม่ใช่',
      baht: '฿',
      days: 'วัน'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
