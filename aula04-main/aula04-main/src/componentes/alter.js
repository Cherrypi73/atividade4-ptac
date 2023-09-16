'use client'
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
export  default function  Button(){
    const {push } = useRouter();
    const  logout = (e) =>{
     e.preventDefault(); 
     Cookies.remove('token')
     push('/pages/dashboard/alter')
    }
    return (
        <div>
             <button onClick={logout}> Alterar</button>
        </div>
    )
}