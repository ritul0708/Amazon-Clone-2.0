import Image from 'next/image'
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon
} from '@heroicons/react/outline'


const Header = () => {
  return (
    <header>
      {/* Top Navbar */}
      <div className='flex items-center bg-amazon_blue p-1 flex-grow'>
        {/* Logo */}
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image 
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
        {/* Search */}
        <div 
          className=' bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer '>
          <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
          <SearchIcon className='h-12 p-4' />
        </div>
        {/* Right */}
        <div className='text-white flex space-x-6 text-sm items-center mx-6 whitespace-nowrap'>
          {/* Account Info */}
          <div className='link'>
            <p>Hi, Ritul</p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>
          {/* Order Info */}
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          {/* Cart */}
          <div className='link relative flex items-center'>
            <span className='absolute -top-1 -right-4 md:right-3 md:-top-1 h-5 w-5 bg-yellow-400 rounded-full text-black font-bold text-center'>0</span>
            <ShoppingCartIcon className='h-10'/>
            <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Cart</p>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className='flex items-center bg-amazon_blue-light text-sm text-white space-x-3 p-2 pl-6'>
        <p className='link flex items-center'>
          <MenuIcon className='h-6 mr-1' />
          All
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Buisness</p>
        <p className='link'>Today's Deals</p>
        <p className='link hidden md:inline-flex'>Electronics</p>
        <p className='link hidden md:inline-flex'>Food & Grocery</p>
        <p className='link hidden lg:inline-flex'>Buy Again</p>
        <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex'>Health & Personal Care</p> 
      </div>
    </header>
  )
}

export default Header