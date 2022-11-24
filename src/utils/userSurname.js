const serializedState = localStorage.getItem('state');
const obj = JSON.parse(serializedState);
const userSurname = obj["auth"]["userSurname"];
export default userSurname;