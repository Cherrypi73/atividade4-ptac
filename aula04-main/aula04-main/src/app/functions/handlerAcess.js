import Cookies from "js-cookie"; */Os cookies são arquivos que contêm pequenos fragmentos de dados — como um nome de usuário e uma senha */
import { validateToken } from "./validateToken";
import { getUserAuthenticated } from "./handlerAcessAPI"; */ é um recurso sintático de muitas linguagens de programação que permite que uma função assíncrona e sem bloqueio seja estruturada de maneira semelhante a uma função síncrona comum*/

const handlerAcessUser = async (user) => {

    const userAuth = await getUserAuthenticated(user);
    
    const isTokenValidate = validateToken(userAuth.token);

    if (isTokenValidate) {
        Cookies.set('token', userAuth.token, { expires: 1 });
        if (typeof window !== 'undefined'){ */ se não for indefinida a janela 
            localStorage.setItem('nome',userAuth.nome),
          localStorage.setItem('password',userAuth.senha),
            localStorage.setItem('email',userAuth.email)
           
        }
        return userAuth;
    }
}
export default handlerAcessUser;

