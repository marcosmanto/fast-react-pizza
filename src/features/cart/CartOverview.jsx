import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { formatCurrency } from '@/utils/helpers';
import {
  getTotalCardPrice,
  getTotalCardQuantity,
} from '@/features/cart/cartSlice';

function CartOverview() {
  const [isAnimating, setIsAnimating] = useState(true);

  const totalCardQuantity = useSelector(getTotalCardQuantity);
  const totalCardPrice = useSelector(getTotalCardPrice);

  useEffect(() => {
    document.body.style.overflow = isAnimating ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isAnimating]);

  if (!totalCardQuantity) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeOut',
        duration: 0.5,
        onComplete: () => setIsAnimating(false),
      }}
      className="flex items-center justify-between bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base"
    >
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>
          {totalCardQuantity} pizza{totalCardQuantity > 1 && 's'}
        </span>
        <span>{formatCurrency(totalCardPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </motion.div>
  );
}

export default CartOverview;
