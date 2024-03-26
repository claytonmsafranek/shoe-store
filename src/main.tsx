import React from 'react'
import ReactDOM from 'react-dom/client'
import Products from './Products.tsx'
import './index.css'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './About.tsx'
import { NavBar } from './NavBar.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Admin } from './Admin.tsx'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h1>Oops! An error occured.</h1>}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" Component={Products} />
            <Route path="/about" Component={About} />
            <Route path="/admin" Component={Admin} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
