import Cart from '@/features/cart/Cart'
import Menu from '@/features/menu/Menu'
import CreateOrder from '@/features/order/CreateOrder'
import Order from '@/features/order/Order'
import AppLayout from '@/ui/AppLayout'
import Home from '@/ui/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/menu', element: <Menu /> },
      { path: '/cart', element: <Cart /> },
      { path: '/order/new', element: <CreateOrder /> },
      { path: '/order/:orderId', element: <Order /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
