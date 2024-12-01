
import { Routes,Route } from 'react-router-dom'

import { Home } from '../Home'
import { page1Routes } from './Page1Routes'
import { page2Routes } from './Page2Routes'
import { Page404 } from '../Page404'

export const Router = () => {
    return (
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route 
            path="/page1" 
            element={
                <Routes>
                  {page1Routes.map (route => (
                      console.log(route.children),
                      <Route 
                          key={route.path}  
                          exact={route.exact} 
                          path={route.path}
                          element={route.children}
                      >
                      </Route>
                  ))}
                </Routes>    
                }
          />
          
          <Route 
            path="/page2" 
            element={
                <Routes>
                  {page2Routes.map (route => (
                      <Route 
                          key={route.path}  
                          exact={route.exact} 
                          path={route.path}
                          element={route.children}
                      >
                      </Route>
                  ))}
                </Routes>    
                }
          />
          <Route path="*" element={<Page404 />}>
          </Route>
        </Routes>
    )
}