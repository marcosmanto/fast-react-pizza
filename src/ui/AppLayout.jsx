import Header from '@/ui/Header';
import CartOverview from '@/features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from '@/ui/Loader';

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-dvh grid-rows-[auto,1fr,auto]">
      {isLoading && <Loader />}

      <Header />
      <main className="mx-auto w-full max-w-3xl overflow-y-auto">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
