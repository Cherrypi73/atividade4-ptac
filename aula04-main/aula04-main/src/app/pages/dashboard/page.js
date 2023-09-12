import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   const  item = getUsers();
    return (
        <body className="bg-gray-200 w-72 center italic container">
        <div className="bg-zinc-50  shadow-lg">
            <h1>Usuário</h1>
           
            {item.map(item => {
                return( 
                    <div>
                    <div > <img className="icon-dashboard" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItMiI+PGNpcmNsZSBjeD0iMTIiIGN5PSI4IiByPSI1Ii8+PHBhdGggZD0iTTIwIDIxYTggOCAwIDEgMC0xNiAwIi8+PC9zdmc+"/> </div>
               <div> <p>{item.nome}</p>
                <p>{item.email} </p> 
                </div>
                </div>
             )
            }
               
                )}
        </div></body>
    );
};