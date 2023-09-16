'use client'
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
export  default function  dashboard(){
    const {push } = useRouter();
    const  logout = (e) =>{
     e.preventDefault(); 
     Cookies.remove('token')
     push('/pages/dashboard')
    }
    return (
        <div>
             <button onClick={logout}> Sair</button>
        </div>
    )
}