import { useState } from "react";

function CreateNew({showModal, hide, create}) {
    const [inputs, setInputs] = useState({
        product: '',
        quantity: '',
        price: '',
        in_stock: 1,
        last_order: ''
    })

    const formControl = (e, what) => {
        const inputsCopy = { ...inputs };
        inputsCopy[what] = e.target.value;
        setInputs(inputsCopy);
    }

    const handleCreate = () => {
        create(inputs);
        setInputs({
            product: '',
            quantity: '',
            price: '',
            in_stock: 1,
            last_order: ''
        });
    }

    return (
        <div className="gem__modal" style={{
            display: showModal ? 'flex' : 'none',
            top: window.scrollY + 100 + 'px'
            }}>
            <div className="gem__form">
                <h2>New record</h2>
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
                    <button onClick={handleCreate} className="addButton">Add</button>
                    <button onClick={hide} className="cancelButton">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default CreateNew;