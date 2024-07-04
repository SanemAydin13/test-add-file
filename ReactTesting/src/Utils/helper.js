import  axios from 'axios';

export const add = (num1, num2) => {
    return num1 + num2;
}

export const reverseString =(value) =>{
    return value.split('').reverse().join('');
}

export const USER_API = 'http://jsonpalceholder.typicode.com/posts/1'

export const webApp = ["html", "css", "js", "react"]

export const user ={
    name : "Gopika",
    place: "TVPM"
}


export const fetchUser = async() =>{
    const response = await axios( 'https://jsonpalceholder.typicode.com/users/1');
    return response.data;
}

