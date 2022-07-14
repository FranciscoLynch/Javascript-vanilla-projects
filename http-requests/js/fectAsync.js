const getUsers = async () => {
    try {
        await fetch("https://jsonplaceholder.typicode.com/users");

    } catch (error) {
        console.log('ERROR ', error);
    }
} 

getUsers();