import * as React from 'react';
import { Home, BookOpen, Info, Mail, LayoutDashboard, LogIn, UserPlus, CreditCard } from 'lucide-react';

export const navIconMap: Record<string, React.ReactNode> = {
  Home: <Home size={18} />,
  BookOpen: <BookOpen size={18} />,
  Info: <Info size={18} />,
  Mail: <Mail size={18} />,
  LayoutDashboard: <LayoutDashboard size={18} />,
  LogIn: <LogIn size={18} />,
  UserPlus: <UserPlus size={18} />,
  CreditCard: <CreditCard size={18} />,
};
