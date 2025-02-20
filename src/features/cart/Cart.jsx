import CartItem from '@/features/cart/CartItem';
import { clearCart, getCart } from '@/features/cart/cartSlice';
import EmptyCart from '@/features/cart/EmptyCart';
import Button from '@/ui/Button';
import LinkButton from '@/ui/LinkButton';
import { useDispatch, useSelector } from 'react-redux';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="text-l mt-7 font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-12">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>

        <Button onClick={() => dispatch(clearCart())} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
