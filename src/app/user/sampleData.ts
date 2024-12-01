import { OrderStatus } from '../constants/orderStatus';
import { Order, donationHistory } from './_types/dashboardTypes';

export const recentDonations: donationHistory[] = [
  {
    id: '1',
    name: 'Ushan Senarathna',
    date: '2023-01-01',
    amount: 100,
    photo: null,
    isAnonymous: false,
  },
  {
    id: '2',
    name: 'Charity B',
    date: '2023-02-15',
    amount: 200,
    isAnonymous: true,
  },
  {
    id: '3',
    name: 'Charity C',
    date: '2023-03-10',
    amount: 150,
    photo: '',
    isAnonymous: false,
  },
  {
    id: '4',
    name: 'Charity D',
    date: '2023-04-05',
    amount: 250,
    isAnonymous: true,
  },
  {
    id: '5',
    name: 'Charity E',
    date: '2023-05-20',
    amount: 300,
    isAnonymous: false,
  },
  {
    id: '6',
    name: 'Charity F',
    date: '2023-06-15',
    amount: 350,
    isAnonymous: false,
  },
];

const sampleOrders: Order[] = [
  {
    id: '1',
    medication_name: 'Aspirin',
    medication_dosage: '500mg',
    quantity: 100,
    importer: 'Pharma Inc.',
    price: 50,
    order_status: OrderStatus.PENDING,
  },
  {
    id: '2',
    medication_name: 'Ibuprofen',
    medication_dosage: '200mg',
    quantity: 200,
    importer: 'HealthCorp',
    price: 100,
    order_status: OrderStatus.APPROVED,
  },
  {
    id: '3',
    medication_name: 'Paracetamol',
    medication_dosage: '650mg',
    quantity: 150,
    importer: 'MediSupply',
    price: 75,
    order_status: OrderStatus.DISPATCHED,
  },
  {
    id: '4',
    medication_name: 'Amoxicillin',
    medication_dosage: '250mg',
    quantity: 300,
    importer: 'Pharma Inc.',
    price: 150,
    order_status: OrderStatus.CANCELLED,
  },
  {
    id: '5',
    medication_name: 'Metformin',
    medication_dosage: '500mg',
    quantity: 250,
    importer: 'HealthCorp',
    price: 125,
    order_status: OrderStatus.PROCESSING,
  },
];

export { sampleOrders };
