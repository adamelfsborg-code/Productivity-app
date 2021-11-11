import React from 'react'

import { Navbar, Sidebar } from './'

const Layout = ({ children }) => {
  return (
    <div className="container-sm px-2 py-2">
      <div className="grid grid-cols-1">
        <div className="col-span-1">
          <Navbar />
        </div>
        <div className="grid grid-cols-9 py-2 gap-2">
          <div className="col-span-1">
            <Sidebar /> 
          </div>
          <div className="col-span-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
