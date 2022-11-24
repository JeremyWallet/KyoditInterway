
const serializedState = localStorage.getItem('state');
const obj = JSON.parse(serializedState);
const isLogged = obj["auth"]["isLogged"];
export default isLogged;



  // const serializedState = localStorage.getItem('state');
  // const obj = JSON.parse(serializedState);
  // const isLogg = obj["auth"]["isLogged"];
  // console.log(isLogg);

