import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-32 rounded-full bg-stone-100 px-4 py-2 text-xs text-stone-500 transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 sm:w-64 sm:focus:w-72"
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
