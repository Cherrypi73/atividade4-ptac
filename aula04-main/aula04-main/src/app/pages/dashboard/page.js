import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   const  item = getUsers();
    return (
        <div>
            <h1>Dashboard</h1>
            {item.map(item => {
                return( 
               <div> <p>{item.nome}</p>
                <p>{item.email} </p> 
                <p>{item.token} </p> 
                </div>
             )
            }
               
                )}
        </div>
    );
};