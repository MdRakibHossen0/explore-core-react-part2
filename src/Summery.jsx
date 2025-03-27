/*
          SUMMERY

    1.Component
    2.JSX
    3.Props
    4.State
    5.Events
    6.Conditional Rendering
    7.


*/

/**
 * 1.Just Write a simple fetch with json conversion.
 * 2.Wrap the data loading component under suspense
 */

/**
 * 1.Api : url: https://jsonplaceholder.typicode.com/users
 * 
 * 
 */

fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then (data => console.log(data));

const loadData = async()=>{
    const res = await fetch ("https://jsonplaceholder.typicode.com/users")
    const data = res.json();
    return data;
}