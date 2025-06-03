import PropTypes from "prop-types"

function List(props){

    const category = props.category;
    const itemList = props.items;

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories); //CALORIES ASCENDING
    // fruits.sort((a, b) => b.calories - a.calories); //CALORIES DESCENDING

    // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100); 
    // const highCalFruit = fruits.filter(fruit => fruit.calories >= 100);

    const listitems = itemList.map(item => <li key={item.id}>
                                          {item.name}: &nbsp;
                                          <b>{item.calories}</b></li>)

    return( <>
                <h2 className="list-category">{category}</h2>
                <ol className="list-items">{listitems}</ol>
            </>);
}
List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    })),
}
List.defaultProps = {
    category: 'Category',
    items: []
}
export default List