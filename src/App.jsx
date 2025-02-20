import Cart from '@/features/cart/Cart';
import Menu, { loader as menuLoader } from '@/features/menu/Menu';
import CreateOrder, {
  action as createOrderAction,
  loader as createOrderLoader,
} from '@/features/order/CreateOrder';
import Order, { loader as orderLoader } from '@/features/order/Order';
import AppLayout from '@/ui/AppLayout';
import Home from '@/ui/Home';
import Error from '@/ui/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
        loader: createOrderLoader,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      router={router}
    />
  );
}

export default App;
