import { SideBar } from 'components/SideBar/SideBar';
import { useState } from 'react';

export const DashBoardModule = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  return (
    <>
      <div>
        <h1>DashBoard</h1>
      </div>
      <button onClick={() => setCartOpen(true)}>open</button>
      <SideBar cartOpen={isCartOpen} closeCart={() => setCartOpen(false)} />
    </>
  );
};
