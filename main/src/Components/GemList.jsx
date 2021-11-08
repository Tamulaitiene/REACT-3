import Gem from "./Gem";

function GemList({gems, modal, remove}) {

    return (
        <div className="gem__list">
            <h2>Welcome to Safira</h2>
            <table className="gem__list__table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total value</th>
                        <th>In Stock?</th>
                        <th>Last Order</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {gems.map(gem => <Gem key={gem.id} gem={gem} modal={modal} remove={remove}></Gem>)}
                </tbody>
            </table>
        </div>
    )
}

export default GemList;