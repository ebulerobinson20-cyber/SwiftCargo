export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
}

export interface ShipmentStatus {
  trackingNumber: string;
  status: 'In Transit' | 'Delivered' | 'Pending' | 'Exception';
  origin: string;
  destination: string;
  estimatedDelivery: string;
  lastUpdate: string;
  location: string;
}
