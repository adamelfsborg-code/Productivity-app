import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Layout } from './components';
import { Dashboard, Schedule, NotFound } from './pages';

const App = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route exact  path="/" element={ <Dashboard /> } />
          <Route exact path="/schedule" element={ <Schedule /> } />
          <Route path="*" element={ <NotFound/> } />
        </Routes>
      </Router>
    </Layout>
  )
}

export default App
