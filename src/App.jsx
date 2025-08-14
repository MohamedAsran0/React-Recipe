
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import CardDetails from './Components/CardDetails/CardDetails';
import NotFound from './Components/NotFound/NotFound';

const router = createBrowserRouter([
  {path: '', element: <Layout />, children: [
    {index: true, element: <Home />},
    {path:'cardDetails/:id', element:<CardDetails />},
    {path: 'error', element:<NotFound />},
    {path:'*', element:<NotFound />}
  ]}
])

function App() {

  return (
    <>
      <RouterProvider router = {router}></RouterProvider>
    </>
  )
}

export default App
