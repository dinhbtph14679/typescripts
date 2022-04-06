import React from 'react'

type Props = {}

const Cart = (props: Props) => {
  return (
    <div>
        <div className="container">
            <h1 className='text-center text-dark my-4 pb-5'>Shopping Cart</h1>
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th className="shoping__product">Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="shoping__cart__item">
                                        <img src="../../../public/image/done.png" alt=""/>
                                        <h5>Vegetables Package</h5>
                                    </td>
                                    <td className="shoping__cart__price">
                                        $55.00
                                    </td>
                                    <td className="shoping__cart__quantity">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <input type="text" value="1"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="shoping__cart__total">
                                        $110.00
                                    </td>
                                    <td className="shoping__cart__item__close">
                                        <span className="icon_close"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="shoping__cart__item">
                                        <img src="../../../public/image/done.png" alt=""/>
                                        <h5>Fresh Garden Vegetable</h5>
                                    </td>
                                    <td className="shoping__cart__price">
                                        $39.00
                                    </td>
                                    <td className="shoping__cart__quantity">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <input type="text" value="1"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="shoping__cart__total">
                                        $39.99
                                    </td>
                                    <td className="shoping__cart__item__close">
                                        <span className="icon_close"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="shoping__cart__item">
                                        <img src="../../../public/image/done.png" alt=""/>
                                        <h5>Organic Bananas</h5>
                                    </td>
                                    <td className="shoping__cart__price">
                                        $69.00
                                    </td>
                                    <td className="shoping__cart__quantity">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <input type="text" value="1"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="shoping__cart__total">
                                        $69.99
                                    </td>
                                    <td className="shoping__cart__item__close">
                                        <span className="icon_close"></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart