
import { Routes,Route } from 'react-router-dom'

import { Home } from '../Home'
import { page1Routes } from './Page1Routes'
import { page2Routes } from './Page2Routes'
import { Page404 } from '../Page404'

export const Router = () => {
    return (
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route 
            path="/page1" 
            render={({match: {url}}) => (
                <Routes>
                  {page1Routes.map (route => (
                      <Route 
                          key={route.path}  
                          exact={route.exact} 
                          path={`${url}${route.path}`}
                      >
                          {route.children}
                      </Route>
                  ))}
                </Routes>    
                )}
          />
          
          <Route 
            path="/page2" 
            render={({match: {url}}) => (
                <Routes>
                  {page2Routes.map (route => (
                      <Route 
                          key={route.path}  
                          exact={route.exact} 
                          path={`${url}${route.path}`}
                      >
                          {route.children}
                      </Route>
                  ))}
                </Routes>    
                )}
          />
          <Route path="*">
            <Page404 />
          </Route>
        </Routes>
    )
}