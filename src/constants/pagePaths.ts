const enum PagePaths {
  root = '/',
  // кейси
  projects = '/projects',
  // послуги
  services = '/services',
  eCommerce = `${services}/e-commerce`,
  webDevelopment = `${services}/web-development`,
  applications = `${services}/applications`,
  brandingAndIdentity = `${services}/branding-and-identity`,
  digitalization = `${services}/digitalization`,
  // Клієнти
  clients = '/clients',
  // Про нас
  about = '/about',
  // Контакти
  contacts = '/contacts',
  vacancies = 'vacancies',
  system = '/system',
  notFound = '/not-found',
  dynamicParam = 'id',
}

export default PagePaths;
