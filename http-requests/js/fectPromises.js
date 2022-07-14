const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log('ERROR ', err));
} 

getUsers(); 