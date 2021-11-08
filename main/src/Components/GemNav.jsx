import { useState } from "react";

function GemNav({reset, sort}) {

  

    const [sortValue, setSortValue] = useState('');

 
  
    const selectSort = e => {
        setSortValue(e.target.value);
        sort(e.target.value)
    }

   

    const resetHandler = () => {
        reset();
    }



    return (
        <div className="gem__nav">
            <div className="gem__nav__filter">
                <span>Filter</span>
                <select onChange={selectSort} value={sortValue}>
                    <option value="default"  hidden>Select sorting...</option>
                    <option value="in_stock">In Stock</option>
                    <option value="out_stock">Out of stock</option>
                    <option value="price_asc">Price low to high</option>
                    <option value="price_desc">Price hight to low</option>
                </select>
            </div>
            <div className="gem__nav__reset">
                <button className="nav-button" onClick={resetHandler}>Reset</button>
            </div>
        </div>
    )
}

export default GemNav;