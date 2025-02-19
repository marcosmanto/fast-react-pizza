import { formatCurrency } from '@/utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-1">
      <div className="mt-2 flex items-center justify-between">
        <p className="text-sm">
          <span className="font-semibold text-stone-600">
            {quantity}&times;
          </span>{' '}
          {name}
        </p>
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
