import { describe, expect, it } from "vitest";
import { user } from "./helper";

// describe("Test case for add function",() =>{
//     it('returns 1+1=2', () =>{
//         expect(add(1,1)).toBe(2)
//     })
// })

// describe("Test case for resverseStringFunction",() =>{
//     it('Check if string reversed properly', () =>{
//         exprect((reverseString('Experion')).toBe('noirepE'))
//     })
// })


// describe ("USER API URL ", () =>{
//     it('Check', ()=>{
//         expect (USER_API).toBe('http://jsonplaceholder.typicode.com/posts/1')
//     })
// })


// describe("Language array has 4 items",()=>{
//     it('Check if language array has 4 items', ()=>{
//         expect(webApp).toEqual("html", "css","js","react")
//     })
// })

// describe("User Object", ()=>{
//     it('check if user object has 2 items')
// })


// describe("API",() =>{
//     it('check if API return data', async()=>{
//         const data = await fetchUser();
//         expect(data.name).toBe('Leanne Graham')
//     })
// })

describe ("User Object", () =>{
    it('check if user object has 2 items',()=>{
        expect(user).toHaveProperty('name');
        expect(user).toHaveProperty('place');
    })
})