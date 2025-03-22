
import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  bulletPoints: string[];
  icon: LucideIcon;
  color: string;
}

export interface WebService {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface WebDevSection {
  title: string;
  description: string;
  services: WebService[];
}
