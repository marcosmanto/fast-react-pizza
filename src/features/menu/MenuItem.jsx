import {
  addItem,
  getCurrentQuantityById,
  increaseItemQuantity,
} from '@/features/cart/cartSlice';
import DeleteItem from '@/features/cart/DeleteItem';
import Button from '@/ui/Button';
import { formatCurrency } from '@/utils/helpers';
import { useDispatch, useSelector } from 'react-redux';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();
  const quantity = useSelector(getCurrentQuantityById(id));
  const isInCart = quantity > 0;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''} rounded-sm`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-semibold text-stone-600">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-start gap-x-2">
          {!soldOut ? (
            <p className="mr-auto text-sm font-medium text-stone-600">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="mr-auto w-[70px] rounded-sm bg-slate-200 py-[3px] text-center text-[10px] uppercase text-stone-400">
              Sold out
            </p>
          )}

          {!soldOut && (
            <>
              {isInCart && <DeleteItem pizzaId={id} />}
              <Button
                onClick={() => {
                  if (!isInCart) {
                    const newItem = {
                      pizzaId: id,
                      name,
                      quantity: 1,
                      unitPrice,
                      totalPrice: unitPrice * 1,
                    };
                    dispatch(addItem(newItem));
                  } else {
                    dispatch(increaseItemQuantity(id));
                  }
                }}
                type="primarySmall"
              >
                Add to cart
              </Button>
            </>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
