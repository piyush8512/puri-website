import React from 'react'
import { Button } from "@/components/ui/button"
function Header() {
  return (
    <div className='h-16 w-full bg-[#FFC40C]'>
      <li className='flex justify-between items-center mx-40 py-4'>
        <ul>Home</ul>
        <ul>Partners</ul>
        <ul>Programs</ul>
        <ul>Sessions</ul>
        <ul>Speakers</ul>
        <ul>Activities</ul>
        <ul>About Us</ul>
        <ul>Contact Us</ul>
        <Button variant={"destructive"} className='m-0 font-leckerli'>Register Now</Button>
      </li>
    </div>
  )
}

export default Header