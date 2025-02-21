import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-yellow-400 disabled:cursor-not-allowed disabled:bg-yellow-200 disabled:text-stone-500';

  const styles = {
    primary: base + ' px-6 py-2 md:px-6 md:py-4',
    small: base + ' text-xs md:text-sm px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'px-6 py-[4px] md:py-[11px] text-sm rounded-full font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-200 hover:text-stone-500 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 active:bg-stone-200 disabled:cursor-not-allowed disabled:bg-yellow-200 disabled:text-stone-500 border-2 border-stone-300',
    secondarySmall:
      'px-4 py-1 text-xs rounded-full font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-200 hover:text-stone-500 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 active:bg-stone-200 disabled:cursor-not-allowed disabled:bg-yellow-200 disabled:text-stone-5 border-2 border-stone-300',
    secondarySmallFilled:
      'px-4 py-1 text-xs rounded-full font-semibold uppercase tracking-wide transition-colors duration-300 bg-stone-700/80 hover:bg-stone-200/80 text-stone-200 hover:text-stone-600 focus:outline-nonedisabled:cursor-not-allowed disabled:bg-yellow-200 disabled:text-stone-5 border-2 border-stone-700 hover:border-stone-300',

    primarySmall:
      'px-4 py-1 text-xs rounded-full font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-200 hover:text-stone-500 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 active:bg-stone-200 disabled:cursor-not-allowed disabled:bg-yellow-200 disabled:text-stone-5  ' +
      base +
      ' px-5 py-1.5',
    round: base + ' text-[13px] px-2.5 py-1 md:px-3.5 md:py-2  md:text-[16px]',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button onClick={onClick} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
