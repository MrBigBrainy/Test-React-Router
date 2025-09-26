import React from 'react'
import { Outlet, useNavigation } from 'react-router'
import { Link } from 'react-router';

function Layout() {
    const navigation = useNavigation();
    console.log(navigation.state)
  return (
    <>
    {navigation.state === "loading" && <h1>TEST</h1>}
    <Link to="./post">Post</Link>
    <Outlet />
    </>
  )
}

export default Layout