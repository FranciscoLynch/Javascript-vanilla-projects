const getUsers = async () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        console.log(res);
    }).catch((err) => console.log("ERROR ERROR ", err));
} 

getUsers();