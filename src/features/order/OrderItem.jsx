import { formatCurrency } from '@/utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-1.5">
      <div className="mt-2 flex items-center justify-between">
        <p className="text-sm">
          <span className="font-semibold text-stone-600">
            {quantity}&times;
          </span>
          {name}
        </p>
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
