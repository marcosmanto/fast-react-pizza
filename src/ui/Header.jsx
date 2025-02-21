import SearchOrder from '@/features/order/SearchOrder';
import Username from '@/features/user/Username';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-[1.2rem] font-bold uppercase sm:px-6">
      <Link
        to="/"
        className="xs:text-sm tracking-widest sm:text-xl md:text-2xl"
      >
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
