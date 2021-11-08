function Sort(state, by) {
    const gems = state.slice();
    switch (by) {
        case 'in_stock':
            gems.sort = (a) => {
                if(a === 1) {
                    return 'yes';
                }
            }
            break;

        case 'out_stock':
            gems.sort = (b) => {
                if(b === 0) {
                    return 'no';
                }
            }
            break;

        case 'price_asc':
            gems.sort(function(a, b) {
                return a.price - b.price;
            });
            break;
        case 'price_desc':
            gems.sort(function(a, b) {
                return b.price - a.price;
            });
            break;
        default:
    }
    return gems
}
export default Sort;