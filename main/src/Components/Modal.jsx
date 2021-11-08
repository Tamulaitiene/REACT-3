import { useEffect, useState } from "react";

function Modal({showModal, hide, gem, edit}) {
    const [inputs, setInputs] = useState({
        product: '',
        quantity: '',
        price: '',
        in_stock: 0,
        last_order: ''
    })

    useEffect(() => {
        setInputs({
            product: gem.product,
            quantity: gem.quantity,
            price: gem.price,
            in_stock: gem.in_stock,
            last_order: gem.last_order.slice(0,10)
        })
    },[gem])

    const handleEdit = () => {
        edit({
            product: inputs.product,
            quantity: inputs.quantity,
            price: inputs.price,
            in_stock: inputs.in_stock,
            last_order: inputs.last_order
        }, gem.id)
    }

    const formControl = (e, what) => {
        const inputsCopy = { ...inputs };
        inputsCopy[what] = e.target.value;
        setInputs(inputsCopy);
    }

    return (
        <div className="gem__modal" style={{
            display: showModal ? 'flex' : 'none',
            top: window.scrollY + 100 + 'px'
            }}>
            <div className="gem__form">
                <h2>Edit </h2>
                <div className="gem__form__input">
                    <span>Product</span>
                    <input type="text" value={inputs.product} onChange={(e) => formControl(e, 'product')} />
                </div>
                <div className="gem__form__input">
                    <span>Quantity</span>
                    <input type="text" value={inputs.quantity} onChange={(e) => formControl(e, 'quantity')} />
                </div>
                <div className="gem__form__input">
                    <span>Price</span>
                    <input type="text" value={inputs.price} onChange={(e) => formControl(e, 'price')} />
                </div>
                <div className="gem__form__input">
                    <span>In stock?</span>
                    <input type="radio" value="1" name="in_stock" onChange={(e) => formControl(e, 'in_stock')} checked={parseInt(inputs.in_stock) === 1} /> Yes
                    <input type="radio" value="0" name="in_stock" onChange={(e) => formControl(e, 'in_stock')} checked={parseInt(inputs.in_stock) === 0} /> No
                </div>
                <div className="gem__form__input">
                    <span>Last order</span>
                    <input type="date" value={inputs.last_order} onChange={(e) => formControl(e, 'last_order')} />
                </div>
                <div className="gem__form__input__buttons">
                    <button onClick={handleEdit}>Save</button>
                    <button onClick={hide}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;