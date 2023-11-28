import { getUsers } from "@/app/functions/handlerAcessAPI";
import Nav from '../../../componentes/nav'
import { Suspense } from "react";
import Link from "next/link";
export default async function Dashboard() {
   const  item = await getUsers();
    return (
    
        <Suspense fallback={
           <img className="mt-20"
            src="data:image/jpeg;base64,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"/>
           
        }   > 
        <div>
   <div ><div>  <Nav />    
        <div className="bg-gray-200  w-72 center italic container">
       
         <div className="bg-zinc-50 rounded-lg shadow-lg">
            <h1>Usuário</h1>
       
            {item.map(item => {
                return( 
                    <div>
                        
                    <div > <img className="icon-dashboard" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItMiI+PGNpcmNsZSBjeD0iMTIiIGN5PSI4IiByPSI1Ii8+PHBhdGggZD0iTTIwIDIxYTggOCAwIDEgMC0xNiAwIi8+PC9zdmc+"/> </div>
               <div> <p>{item.nome}</p>
                <p>{item.email} </p> 
                </div>
                <Link href={`dashboard/alter/${item.id}`}>link</Link>
                </div>
             )
            }
               
                )}
        </div></div></div>  </div> </div>  </Suspense>
    );
};