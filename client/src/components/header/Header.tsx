import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import Search from './Search';
import { RootState } from '../../redux/rootReducer';
import { useSelector } from 'react-redux';

const Header: React.FC = () => {
  const { cart } = useSelector((state: RootState) => state.cart);

  return (
    <header className="w-full flex justify-between p-4 bg-slate-900 items-center text-white px-6">
      <Link to="/home">
        <img
          src={logo}
          alt="logo"
          className="w-20 h-20 rounded-xl shadow-[6px_8px_0px_2px_rgba(255,_234,_0,_1)]"
        />
      </Link>

      <Search />

      <nav className="flex justify-between items-center gap-4">
        <Link to="/account">
          <span>Account</span>
        </Link>
        <Link to="/cart">
          <span className='relative'>Cart</span>
          {cart.length > 0 ? <span className='absolute top-5 right-0 bg-yellow-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-xs'>
            {cart.length}
          </span> : null}

        </Link>
      </nav>
    </header>
  );
};

export default Header;
