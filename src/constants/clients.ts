import {
  CompanyClients,
  IClients,
  ICategories,
  IServices,
  IYears,
} from '@/types/clients.types';
// atb
import atbPrimaryLogo from '@/images/main/clients/atb-primary-logo.png';
import atbLogo from '@/images/main/clients/atb-logo.png';
import atbProject1 from '@/images/main/clients/atb-project-1.jpg';
import atbProject2 from '@/images/main/clients/atb-project-2.jpg';
import atbProject3 from '@/images/main/clients/atb-project-3.jpg';
// activitis
import activitisPrimaryLogo from '@/images/main/clients/activitis-primary-logo.png';
// delikat
import delikatPrimaryLogo from '@/images/main/clients/delikat-primary-logo.png';
// eva
import evaPrimaryLogo from '@/images/main/clients/eva-primary-logo.png';
// fozzyGroup
import fozzyGroupPrimaryLogo from '@/images/main/clients/fozzy-group-primary-logo.png';
// goodwine
import goodwinePrimaryLogo from '@/images/main/clients/goodwine-primary-logo.png';
// imperiaHolding
import imperiaHoldingPrimaryLogo from '@/images/main/clients/imperia-holding-primary-logo.png';
// ligamenta
import ligamentaPrimaryLogo from '@/images/main/clients/ligamenta-primary-logo.png';
// nutella
import nutellaPrimaryLogo from '@/images/main/clients/nutella-primary-logo.png';
// silpo
import silpoPrimaryLogo from '@/images/main/clients/silpo-primary-logo.png';
// starbeauty
import starbeautyPrimaryLogo from '@/images/main/clients/starbeauty-primary-logo.png';
// varus
import varusPrimaryLogo from '@/images/main/clients/varus-primary-logo.png';
// wineBureau
import wineBureauPrimaryLogo from '@/images/main/clients/wine-bureau-primary-logo.png';

const categories: ICategories = {
  all: { value: '', label: 'Всі' },
  retail: { value: 'retail', label: 'Рітейл' },
  beautyAndCare: { value: 'beautyAndCare', label: 'Догляд та краса' },
  finances: { value: 'finances', label: 'Фінанси' },
  health: { value: 'health', label: 'Здоров’я' },
  restaurants: { value: 'restaurants', label: 'Ресторани' },
  fmcg: { value: 'fmcg', label: 'FMCG' },
};

const services: IServices = {
  all: { value: '', label: 'Всі послуги' },
  eCommerce: { value: 'e-commerce', label: 'Електронна комерція' },
  webDev: { value: 'web-dev', label: 'Веб-розробка' },
  applications: { value: 'applications', label: 'iOS та Android додатки' },
  brandingAndIdentity: {
    value: 'branding-and-identity',
    label: 'Брендинг та айдентика',
  },
  digitalization: { value: 'digitalization', label: 'Цифровізація' },
};

const years: IYears = {
  all: { value: '', label: 'Всі роки' },
  year2011: {
    label: '2011',
    value: '2011',
  },
  year2012: {
    label: '2012',
    value: '2012',
  },
  year2013: {
    label: '2013',
    value: '2013',
  },
  year2014: {
    label: '2014',
    value: '2014',
  },
  year2015: {
    label: '2015',
    value: '2015',
  },
  year2016: {
    label: '2016',
    value: '2016',
  },
  year2017: {
    label: '2017',
    value: '2017',
  },
  year2018: {
    label: '2018',
    value: '2018',
  },
  year2019: {
    label: '2019',
    value: '2019',
  },
  year2020: {
    label: '2020',
    value: '2020',
  },
  year2021: {
    label: '2021',
    value: '2021',
  },
  year2022: {
    label: '2022',
    value: '2022',
  },
  year2023: {
    label: '2023',
    value: '2023',
  },
  year2024: {
    label: '2024',
    value: '2024',
  },
  year2025: {
    label: '2025',
    value: '2025',
  },
  year2026: {
    label: '2026',
    value: '2026',
  },
  year2027: {
    label: '2027',
    value: '2027',
  },
  year2028: {
    label: '2028',
    value: '2028',
  },
};

const companyClients: CompanyClients = [
  {
    primaryLogo: activitisPrimaryLogo,
    logo: atbLogo,
    websiteAddress: 'https://www.atbmarket.com',
    text: 'activitis We have worked with to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable. I’d highly recommend them',
    projects: '20+',
    years: '5',
    images: [atbProject1, atbProject2, atbProject3],
  },
  {
    primaryLogo: atbPrimaryLogo,
    logo: atbLogo,
    websiteAddress: 'https://www.atbmarket.com',
    text: 'atb We have worked with to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable. I’d highly recommend them',
    projects: '20+',
    years: '5',
    images: [atbProject1, atbProject2, atbProject3],
  },
  {
    primaryLogo: delikatPrimaryLogo,
    logo: atbLogo,
    websiteAddress: 'https://www.atbmarket.com',
    text: 'delikat We have worked with to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable. I’d highly recommend them',
    projects: '20+',
    years: '5',
    images: [atbProject1, atbProject2, atbProject3],
  },
  {
    primaryLogo: evaPrimaryLogo,
    logo: atbLogo,
    websiteAddress: 'https://www.atbmarket.com',
    text: 'eva We have worked with to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable. I’d highly recommend them',
    projects: '20+',
    years: '5',
    images: [atbProject1, atbProject2, atbProject3],
  },
  {
    primaryLogo: fozzyGroupPrimaryLogo,
    logo: atbLogo,
    websiteAddress: 'https://www.atbmarket.com',
    text: 'fozzyGroup We have worked with to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable. I’d highly recommend them',
    projects: '20+',
    years: '5',
    images: [atbProject1, atbProject2, atbProject3],
  },
  {
    primaryLogo: goodwinePrimaryLogo,
    logo: atbLogo,
    websiteAddress: 'https://www.atbmarket.com',
    text: 'goodwine We have worked with to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable. I’d highly recommend them',
    projects: '20+',
    years: '5',
    images: [atbProject1, atbProject2, atbProject3],
  },
  {
    primaryLogo: imperiaHoldingPrimaryLogo,
    logo: atbLogo,
    websiteAddress: 'https://www.atbmarket.com',
    text: 'imperiaHolding We have worked with to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable. I’d highly recommend them',
    projects: '20+',
    years: '5',
    images: [atbProject1, atbProject2, atbProject3],
  },
  {
    primaryLogo: ligamentaPrimaryLogo,
    logo: atbLogo,
    websiteAddress: 'https://www.atbmarket.com',
    text: 'ligamenta We have worked with to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable. I’d highly recommend them',
    projects: '20+',
    years: '5',
    images: [atbProject1, atbProject2, atbProject3],
  },
  {
    primaryLogo: nutellaPrimaryLogo,
    logo: atbLogo,
    websiteAddress: 'https://www.atbmarket.com',
    text: 'nutella We have worked with to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable. I’d highly recommend them',
    projects: '20+',
    years: '5',
    images: [atbProject1, atbProject2, atbProject3],
  },
  {
    primaryLogo: silpoPrimaryLogo,
    logo: atbLogo,
    websiteAddress: 'https://www.atbmarket.com',
    text: 'silpo We have worked with to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable. I’d highly recommend them',
    projects: '20+',
    years: '5',
    images: [atbProject1, atbProject2, atbProject3],
  },
  {
    primaryLogo: starbeautyPrimaryLogo,
    logo: atbLogo,
    websiteAddress: 'https://www.atbmarket.com',
    text: 'starbeauty We have worked with to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable. I’d highly recommend them',
    projects: '20+',
    years: '5',
    images: [atbProject1, atbProject2, atbProject3],
  },
  {
    primaryLogo: varusPrimaryLogo,
    logo: atbLogo,
    websiteAddress: 'https://www.atbmarket.com',
    text: 'varus We have worked with to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable. I’d highly recommend them',
    projects: '20+',
    years: '5',
    images: [atbProject1, atbProject2, atbProject3],
  },
  {
    primaryLogo: wineBureauPrimaryLogo,
    logo: atbLogo,
    websiteAddress: 'https://www.atbmarket.com',
    text: 'wineBureau We have worked with to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable. I’d highly recommend them',
    projects: '20+',
    years: '5',
    images: [atbProject1, atbProject2, atbProject3],
  },
];

export const clients: IClients = {
  clients: companyClients,
  filters: {
    categories,
    services,
    years,
  },
};

export default clients;
