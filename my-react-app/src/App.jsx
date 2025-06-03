import List from './List.jsx';

function App() {
  
  const fruits = [{id: 1, name: 'Apple', calories: 95}, 
                  {id: 2, name: 'Banana', calories: 45}, 
                  {id: 3, name: 'Cherry', calories: 105},    
                  {id: 4, name: 'Coconut', calories: 56}, 
                  {id: 5, name: 'Elderberry', calories: 79}];

  const vegetables = [{id: 6, name: 'Potatoes', calories: 95}, 
                      {id: 7, name: 'Carrots', calories: 45}, 
                      {id: 8, name: 'Celery', calories: 105},    
                      {id: 9, name: 'Corn', calories: 69}, 
                      {id: 10, name: 'Brocolli', calories: 89}];

  return ( <>
            {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
            {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
          </>);
}

export default App
