import DeleteItem from '@/features/cart/DeleteItem';
import { formatCurrency } from '@/utils/helpers';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="justify-between py-2.5 sm:flex sm:items-center">
      <p className="mb-1 sm:mb-0">
        <span className="font-medium">{quantity}&times;</span> {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
