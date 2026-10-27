import React, { Suspense, lazy } from 'react'

const Heroes = lazy(() => import("../Components/Homepage/Heroes"));
const Ourcross = lazy(() => import('../Components/Homepage/Ourcross'));
const Customer = lazy(() => import('../Components/Homepage/Customer'));
const Ourservices = lazy(() => import('../Components/Homepage/Ourservices'));
const Idea = lazy(() => import('../Components/Homepage/Idea'));
const Weoffer = lazy(() => import('../Components/Homepage/Weoffer'));
const Ourteam = lazy(() => import('../Components/Homepage/Ourteam'));
const Casestudy = lazy(() => import('../Components/Homepage/Casestudy'));
const Card = lazy(() => import("../Components/Homepage/Card"));
const AllCases = lazy(() => import("../Components/Homepage/AllCases"));
const Ourclient = lazy(() => import('../Components/Homepage/Ourclient'));
const Anything = lazy(() => import('../Components/Homepage/Anything'));
const Expertise = lazy(() => import('../Components/Homepage/Expertise'));
const Articals = lazy(() => import('../Components/Homepage/Articals'));
const Contactus = lazy(() => import('../Components/Homepage/Footer'));

const Homepage = () => {
  return (
    <div className='bg-[#edf2f3] '>
      <Suspense fallback={<div></div>}>
        <Heroes />
        {/* <Ourcross /> */}
        <Customer />
        <Ourservices />
        <Idea />
        <Weoffer />
        <Ourteam />
        <Casestudy />
        <Card />
        <AllCases />
        <Ourclient />
        <Anything />
        <Expertise />
        <Articals />
        {/* <Contactus /> */}
      </Suspense>
    </div>
  )
}

export default Homepage;