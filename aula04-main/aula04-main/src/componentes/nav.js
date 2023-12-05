'use client'
import Link from "next/link"
import Button   from "./button"

const nav = () =>{
    return (
  <nav className="bg-cyan-500 flex flex-nowrap  ">
    <div className="p-2">  <Link href={'/'}>Alter</Link></div>
     <div className="p-2">  <Link href={'/pages/dashboard/registrar'}>Register</Link></div>
     <div className="p-2">  <Link href={'/pages/dashboard'}> Users</Link></div>

    <div className="p-2"><Button /></div> 

  </nav>
     )
}
export default nav