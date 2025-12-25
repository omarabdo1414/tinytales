import {
  FiShoppingBag,
  FiBell,
  FiHeart,
  FiUser,
  FiGlobe,
  FiHome,
  FiGrid,
  FiInfo,
  FiPhone,
  FiHelpCircle,
} from "react-icons/fi";

export const navLinks = [
  { href: '/', label: 'Home', icon: FiHome },
  { href: '/our-category', label: 'Our Category', icon: FiGrid },
  { href: '/about', label: 'About Us', icon: FiInfo },
  { href: '/contact', label: 'Contact Us', icon: FiPhone },
  { href: '/faqs', label: 'FAQs', icon: FiHelpCircle },
];

export const navActions = [
  { id: 'bag', label: 'Bag', icon: FiShoppingBag },
  { id: 'notifications', label: 'Notifications', icon: FiBell },
  { id: 'favorites', label: 'Favorites', icon: FiHeart },
  { id: 'language', label: 'Language', icon: FiGlobe, extra: 'EN' },
  { id: 'account', label: 'Account', icon: FiUser },
];


