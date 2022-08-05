import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from 'antd'
import './css/app.css'
import { Routes } from './routes'
import { Navbar } from './components/navbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
   <QueryClientProvider client={queryClient}>
      <Layout className="layout">
         <Navbar />
         <Layout.Content style={{ padding: '50px', height: '100vh' }}>
            <Routes />
         </Layout.Content>
      </Layout>
   </QueryClientProvider>
)
