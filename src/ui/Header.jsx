import SearchOrder from '@/features/order/SearchOrder'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="app-header">
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Jonas</p>
    </header>
  )
}

export default Header
