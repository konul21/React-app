import axios from "axios";

export async function userAdd(payload){
 let response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBYoQhaBTU_jRDs4EYoBCF28EjmdiAoQTs', {
     email : payload.email , password : payload.password ,returnSecureToken : true
    });
    return response.data.idToken
}


export async function loginAdd(payload){
    let response = await axios.get('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBYoQhaBTU_jRDs4EYoBCF28EjmdiAoQTs',{
        email : payload.email , password : payload.password ,returnSecureToken : true
    });
       return response.data
   }

export async function DataProducts(){
    let response = await axios.get('https://fakestoreapi.com/products');
       return response.data
   }


   export async function detailData(id){
    let response = await axios.get(`https://fakestoreapi.com/products/${id}`);
       return response.data
   }

