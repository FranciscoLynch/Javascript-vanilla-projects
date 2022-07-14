const theName = document.querySelector('#name');
const theEmail = document.querySelector('#email');
const theWebsite = document.querySelector('#website');
const theAddress = document.querySelector('#address');


const getUsers = async () => {
    try {         

        const { data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(data[0]); 

        theName.innerHTML = data[0].name;
        theEmail.innerHTML = data[0].email;
        theWebsite.innerHTML = data[0].website;     
        theAddress.innerHTML = data[0].address.street; 


    } catch (error) { 
        console.log('ERROR ', error);
    }
} 

getUsers();