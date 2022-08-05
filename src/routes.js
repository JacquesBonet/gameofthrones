import React from 'react'
import { resourcesName } from './pages'
import { Route, Router } from 'wouter'
import { List as Books } from './pages/books/list'
import { Details } from './pages/books/details'

export const Routes = () => (
   <>
      {resourcesName.map((path, idx) => (
         <Router base={`/${path}`} key={idx}>
            <Books path={path} />
            <Route path={'/:id'}>{({ id }) => <Details id={id} />}</Route>
         </Router>
      ))}
   </>
)
