import { createStackNavigator } from '@navigation'

import Screens from '@screens/list'

import AllProducts from './AllProducts'
import AddProduct from './AddProduct'

export default createStackNavigator([AllProducts, AddProduct], {
  initialRouteName: Screens.ALL_PRODUCTS,
})
