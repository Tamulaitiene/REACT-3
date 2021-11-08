function Gem({gem, modal, remove}) {

    const showEditModal = () => {
        modal(gem)
    }

    const removeGem = () => {
        remove(gem.id)
    }

    return (
        <tr>
            <td>{gem.product}</td>
            <td>{gem.quantity}</td>
            <td>{gem.price}</td>
            <td>{gem.price * gem.quantity}</td>
            <td>{parseInt(gem.in_stock) ? 'Yes' : 'No'}</td>
            <td>{gem.last_order.slice(0, 10)}</td>
            <td>
                <button onClick={showEditModal} className="editButton">Edit</button>&nbsp;
                <button onClick={removeGem} className="deleteButton">Delete</button>
            </td>
        </tr>
    )
}

export default Gem;