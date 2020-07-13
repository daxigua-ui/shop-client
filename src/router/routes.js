import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Detail from '../pages/Detail'
import AddCartSuccess from '../pages/AddCartSuccess/'
import ShopCart from '../pages/ShopCart'

export default [
  {
    path:'/',
    component:Home
  },
  {
    path:'/Login',
    component:Login,
    meta: {
      isHideFooter: true
    }
  },
  {
    path:'/Register',
    component:Register,
    meta: {
      isHideFooter: true
    }
  },
  {
    name:'search',
    path:'/Search/:keyword?',
    component:Search,
    props:route =>({keyword3:route.params.keyword})
  },
  {
    name:'Detail',
    path:'/detail/:id',
    component:Detail,
    
  },
  {
    name:'AddCartSuccess',
    path:'/addCartSuccess',
    component:AddCartSuccess,
    
  },
  {
    name:'ShopCart',
    path:'/ShopCart',
    component:ShopCart,
    
  },
]