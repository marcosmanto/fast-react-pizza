import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from '@/features/cart/cartSlice';
import Button from '@/ui/Button';
import { useDispatch } from 'react-redux';

function UpdateQuantity({ pizzaId, currentQuantity, absolutePosition = true }) {
  const dispatch = useDispatch();

  return (
    <div
      className={`${absolutePosition ? 'absolute right-0 z-10' : 'mr-[-45px]'} flex items-center gap-2 rounded-full border-4 border-slate-200/50 bg-slate-200/50 sm:bottom-2 sm:right-36 sm:mr-0 sm:border-0 sm:bg-transparent md:gap-3`}
    >
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="min-w-4 text-center text-sm font-medium">
        {currentQuantity}
      </span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateQuantity;
