let users = [
    {
        "fullName": "Malik Murtha",
        "email": "malik@martreach.com",
        "phone": "+094747466",
        "profilePics": "men.jpg"
    },
{
    "fullName": "Aminu Mohammed",
    "email": "aminu@martreach.com",
    "phone": "+029288282",
    "profilePics": "men.jpg"
},
{
    "fullName": "Ekeso Longe",
    "email": "ekeso@martreach.com",
    "phone": "+029288282",
    "profilePics": "men.jpg"
},
{
    "fullName": "Chinedu Samuel",
    "email": "chinedu@martreach.com",
    "phone": "+029288282",
    "profilePics": "men.jpg"
}
 
];
localStorage.setItem("users", JSON.stringify(users))
JSON.parse(localStorage.getItem("users"))


displayUsers()
function displayUsers(){
    userCount = '';
    for(i = 0; i <users.length; i++){
        userCount += `
        <div class = "user-container">
        <div class="input-field">
        fullName : ${users[i].fullName}<br>
        email : ${users[i].email}<br>
        phone : ${users[i].phone}<br>
        profilePics : ${users[i].profilePics}<br>
        
        <class="onclick-btn">
        <button onClick="Delete(${i})" id="delete">Delete</button>  
        <button onClick="triggerEdit(${i})" id="edit">Edit</button>  
       </div>
       </div>
        </div> `
       
    }
    document.getElementById("users").innerHTML = userCount

}

 

function Delete(i){
    if(confirm('Are you sure you want to delete this?')){
        users.splice(i, 1)
        localStorage.setItem("users", JSON.stringify(users))
         displayUsers()
    }
}

// Update users
function Update(){
i =  document.getElementById("index").value 

    let updatedRecord = 
    { "fullName" : document.getElementById("fullName").value,
    "email": document.getElementById("email").value,
    "phone": document.getElementById("phone").value,
    "profilePics": document.getElementById("profilePics").value
}
users[i] = updatedRecord
localStorage.setItem("users", JSON.stringify(users))
displayUsers() 

}
// Fectching
document.getElementById('update').addEventListener('click', Update)



function triggerEdit(i){
    
    userRecord = users[i]
    document.getElementById("fullName").value = userRecord.fullName
    document.getElementById("email").value= userRecord.email
    document.getElementById("phone").value = userRecord.phone
    document.getElementById("profilePics").value = userRecord.profilePics
    document.getElementById("index").value = i
}



//Fetching User details
function addUser(){
   
let newUser ={
    fullName: document.getElementById('fullName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    profilePics: document.getElementById('profilePics').value

}

users.push(newUser)
localStorage.setItem("users", JSON.stringify(users))
displayUsers() 
}



//targeting add user button
document.getElementById('addUser').addEventListener('click', addUser)
