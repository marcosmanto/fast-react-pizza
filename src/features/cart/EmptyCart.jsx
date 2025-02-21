import Button from '@/ui/Button';
import LinkButton from '@/ui/LinkButton';

function EmptyCart() {
  return (
    <div className="p-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mx-auto mt-6 w-10/12 rounded-sm bg-slate-200 px-8 py-6 text-center font-medium sm:w-8/12">
        Your cart is still empty.
        <br />{' '}
        <span className="mt-1.5 block text-lg font-bold text-yellow-500">
          <Button to="/menu">Start adding some pizzas 🍕</Button>
        </span>
      </p>
    </div>
  );
}

export default EmptyCart;
