import {
  HomePage,
  CategoryPage,
  DetailedProductPage,
  CartPage,
  AboutPage,
  ContactPage,
  NewPage,
  ManuFacturesPage,
  DeliveryPage,
  PaymentPage,
} from './pages';

export const routes = [
  {
    path: '/',
    name: 'HomePage',
    element: HomePage,
    exact: true,
  },
  {
    path: '/category/:categoryName/:subCategoryName',
    name: 'CategoryPage',
    element: CategoryPage,
  },
  {
    path: '/product/:productName',
    name: 'DetailedProductPage',
    element: DetailedProductPage,
  },
  {
    path: '/cart',
    name: 'CartPage',
    element: CartPage,
  },
  {
    path: '/about',
    name: 'AboutPage',
    element: AboutPage,
  },
  {
    path: '/contacts',
    name: 'ContactPage',
    element: ContactPage,
  },
  {
    path: '/new',
    name: 'NewPage',
    element: NewPage,
  },
  {
    path: '/',
    name: 'HomePage',
    element: HomePage,
    exact: true,
  },
  {
    path: '/',
    name: 'HomePage',
    element: HomePage,
    exact: true,
  },
  {
    path: '/',
    name: 'HomePage',
    element: HomePage,
    exact: true,
  },
];
