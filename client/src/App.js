import './App.css';
import Form from './components/Form'
import ProductList from './components/ProductList';
import Product from './components/Product';
import Main from './components/Main';
import {Link, Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <Switch>
        {/* {SHOW ONE} */}
        
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/products/:id">
          <Product />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
