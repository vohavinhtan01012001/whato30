import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import DefaultLayout from './layouts/DefaultLayout'

function App() {

  return (
    <div className='overflow-hidden'>
      <Router>
        <Routes>
          {
            routes.map((route) => {
              return <Route
                key={route.path}
                path={route.path}
                element={
                  <DefaultLayout>
                    <route.component />
                  </DefaultLayout>
                }
              />
            })
          }
        </Routes>
      </Router>
    </div>
  )
}

export default App
