import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function Route() {
  return (
    <>
      {/* Dashboard */}
                        <Route path='/' element="ECcommerce" />
                        <Route path='anal' element="Analytic" />

                        {/* Pages */}
                        <Route path="/admin/blogs" element="Blogs" />
                        <Route path='/bloggers' element="Bloggers" />
                        <Route path='/users' element="Users" />

                        {/* Apps */}
                        <Route path='/kanban' element="Kanban" />
                        <Route path='/editor' element="Editor" />
                        <Route path='/calendar' element="calendar" />
                        <Route path='/color' element="Color" />

                        {/* Charts */}
                        <Route path='/line' element="Line" />
                        <Route path='/area' element="Area" />
                        <Route path='/bar' element="Bar" />
                        <Route path='/pie' element="Pie" />
                        <Route path='/financial' element="Financial" />
                        <Route path='/color-mapping' element="ColorMapping" />
                        <Route path='/pyramid' element="Pyramid" />
                        <Route path='/stacked' element="Stacked" />
    </>
  )
}

export default Route
