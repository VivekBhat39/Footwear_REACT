import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Mens from './Components/Mens';
import Womens from './Components/Womens';
import Products from './Components/Products';
import Contact from './Components/Contact';
import About from './Components/About';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './Components/Administrator/Login';
import Admin from './Components/Administrator/Login';
import Dashboard from './Components/Administrator/Dashboard';
import ProductCategory from './Components/Administrator/ProductCategory';
import Product from './Components/Administrator/Product';
import Order from './Components/Administrator/Order';
import Fixedorder from './Components/Administrator/Fixedorder';
import Logout from './Components/Administrator/Logout';
import Admins from './Components/Administrator/Admins';
import Form from './Components/Administrator/Form';
import Dashboard2 from './Components/Administrator/Dashboard2';
import AddProduct from './Components/Administrator/AddProduct';
import StepOne from './stepForm/StepOne'
import StepTwo from './stepForm/StepTwo';
import StepThree from './stepForm/StepThree';

function App() {

  return (
    <div>

      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/mens' element={<Mens />}></Route>
          <Route path='/womens' element={<Womens />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/adminlogin' element={<Login />}></Route>

          <Route path='/admin' element={<Dashboard />}>
            <Route path='/admin/dashboard' element={<Dashboard2 />} />
            <Route path='/admin/productcategory' element={<ProductCategory />} />
            <Route path='/admin/productlists' element={<Product />} />
            <Route path='/admin/addproduct' element={<AddProduct />} />
            <Route path='/admin/addproduct/:id' element={<AddProduct />} />
            <Route path='/admin/order' element={<Order />} />
            <Route path='/admin/fixedorder' element={<Fixedorder />} />
            <Route path='/admin/form' element={<Form />} />
            <Route path='/admin/stepformone' element={<StepOne />} />
          </Route>
          {/* <Route path='/' element={<Logout />} /> */}



          <Route path='/stepformone' element={<StepOne />} />
          <Route path='/steptwo' element={<StepTwo />} />
          <Route path='/stepthree' element={<StepThree />} />

        </Routes>
        {/* <Admins/> */}
        <Footer />
      </BrowserRouter>




    </div>
  );
}

export default App;
