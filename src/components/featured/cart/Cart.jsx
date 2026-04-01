import React from 'react';
import cartImg from '../../../assets/shopping-cart.png'

const Cart = ({cartItems, setCartItems}) => {
    console.log(cartItems, 'cartItems')
    const handleDelateCartItems = (item)=>{
        console.log(item)

        const filteredCartItems = cartItems.filter(cartItems => cartItems.name !== item.name )
        setCartItems(filteredCartItems)
        
    }


    return (
        <div>

            {
                cartItems.length === 0 ?
                <div className='h-[400px] flex items-center justify-center flex-col gap-4'>
                    <h2 className='font-semibold text-xl'>Cart is Empty</h2>
                    <img className='h-15 w-auto' src={cartImg} alt="" />
                </div>
                : cartItems.map((item, ind)=>{
                    return <div key={ind} className='flex items-center gap-4 justify-between p-10 '>
                        <div className='flex items-center gap-4'>
                            <img src={item.icon} alt="" />
                            <div>
                                <h2 className='font-semibold'>{item.name}</h2>
                                <p>${item.price}</p>
                            </div>

                        </div>
                        <button className='btn text-red-500' onClick={()=> handleDelateCartItems(item)}>Remove</button>

                   
                        
                    </div>
                    
                })
            }
            



        </div>
    );
};

export default Cart;