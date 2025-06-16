import { Provider } from 'react-redux'
// import Counter from './NonToolkit/Counter'
// import storeNonToolkit from './NonToolkit/strore'
// import Counter from './UseToolkit/Counter'
// import storeUseToolkit from './UseToolkit/store'
// import User from './UseToolkit/User'

import Counter from './ToolkitCounter/Counter'
import store from './ToolkitCounter/store.'
function App() {
   return (
      <Provider store={store}>
         <Counter />
      </Provider>
      // <Provider store={storeUseToolkit}>
      //    <User />
      //    <Counter />
      // </Provider>
      // <Provider store={storeNonToolkit}>
      //    <Counter />
      // </Provider>
   )
}

export default App
