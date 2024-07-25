import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Addproduct from './pages/Addproduct'
import Orders from './pages/Orders'
import EmployeeList from './pages/EmployeeList'
import Gridproducts from './pages/Gridproducts'
import ListProducts from './pages/ListProducts'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products/list" element={<ListProducts />} />
                    <Route path="products/grid" element={<Gridproducts />} />
                    <Route path="products/create" element={<Addproduct />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="employees" element={<EmployeeList />} />
                </Route>
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default App
