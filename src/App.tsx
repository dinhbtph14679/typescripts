import { useEffect, useState } from 'react'
import './App.css'
import { Navigate, NavLink, Route, Router, Routes } from 'react-router-dom'
import WebsiteLayouts from './pages/layouts/WebsiteLayouts'
import HomePage from './pages/client/homepage'
import ProductDetailt from './pages/admin/products/ProductDetailt'
import AdminLayouts from './pages/layouts/AdminLayouts'
import { ProducType } from './types/product'
import { add, list, remove, update } from './api/product'
import ProductManager from './pages/admin/products/ProductManager'
import Signin from './pages/client/Signin'
import Signup from './pages/client/Signup'
import PrivateRouter from './components/PrivateRouter'
import ProductAdd from './pages/admin/products/ProductAdd'
import { CategoryType } from './types/Category'
import ListCategory from './pages/admin/category/ListCategory'
import { addCT, listCT, removeCT, updateCT } from './api/category'
import CategoryAdd from './pages/admin/category/CategoryAdd'
import ProductEdit from './pages/admin/products/ProductEdit'
import CategoryEdit from './pages/admin/category/CategoryEdit'

function App() {

  const [products, setProducts] = useState<ProducType[]>([]);
  const [categorys, setCategorys] = useState<CategoryType[]>([]);


  useEffect(() =>{

    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts()
  },[])

  useEffect(() => {
    const getCategory = async () => {
      const { data } = await listCT();
      setCategorys(data);
    }
    getCategory()
  },[])



  const removeItem = (id: number) => {
    remove(id);
    setProducts(products.filter(item => item._id !== id));
  } 

  const ondeleteCategory = (id: number) => {
    removeCT(id);  
    setCategorys(categorys.filter(itme => itme._id !== id))
  }

  const onHandlerAdd = (data: ProducType) => {
    add(data)
    setProducts([...products, data])
  }


  const handlerAddcategory = (data: CategoryType) => {
    addCT(data);
    setCategorys([...categorys,data])
  }

  const onUpdateProduct = async (product: ProducType) => {
    const { data } = await update(product);
    setProducts(products.map(item => item.id === data.id ? data : item));
  }

  const onUpdateCategory = async(category: CategoryType) => {
    const { data } = await updateCT(category);
    setCategorys(category.map(item => item._id === data.id ? data : item))
  }

  return (
    <div>
        <Routes>
            <Route path="/" element={<WebsiteLayouts />}>
                  <Route index element={<HomePage />} />
                  <Route path='products'>
                      <Route index element={<h1>Products Page</h1>} />
                      <Route path=':id' element={<ProductDetailt />} />
                  </Route>             
                  <Route path='*' element={<h1>NOT FOUND</h1>} />
            </Route>
            <Route path="admin" element={<PrivateRouter><AdminLayouts/></PrivateRouter>}>
                  <Route index element={<Navigate to="dashboard" />} />
                  <Route path="dashboard" element={<h1>Dashboard page</h1>} />
                  <Route path="products">
                    <Route index element={<ProductManager products={products} onRemove={removeItem} />} />
                    <Route path="add" element={<ProductAdd onAdd={onHandlerAdd} categorys={categorys}/>}/>
                    <Route path=':id/edit' element={<ProductEdit onUpdate={onUpdateProduct}/>} />
                  </Route>
                  <Route path='categorys'>
                      <Route index element={<ListCategory category={categorys} ondelete={ondeleteCategory}/>} />
                      <Route path='add' element={<CategoryAdd onAddCT={handlerAddcategory}/>} />
                      <Route path=':id/edit' element={<CategoryEdit onUpdateCT={onUpdateCategory} />} />
                  </Route>
            </Route>
            <Route path='signin' element={<Signin />}/>
            <Route path='signup' element={<Signup />}/>
        </Routes>
    </div>
  )
}
export default App