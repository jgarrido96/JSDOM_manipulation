
// Task 1: Create a constructor function for the Book object with properties for title, author, and pages.

class User {
    constructor() {

    }


    setAttributes = (attributes) => {
        Object.assign(this, attributes)
    }

    getAttributes = () => {
        return {
            name : this.name,
            email : this.email,
            message : this.message
        }
    }
    

}

let userDirectory = []

function handleGetData(event) {
    event.preventDefault();
    const data = {
        name: event.target.elements.name.value,
        email: event.target.elements.email.value,
        message: event.target.elements.message.value
    }
    console.log(data)
    const myUser = new User();
    myUser.setAttributes(data); 
    console.log(myUser.getAttributes());
    userDirectory.push(data);

    console.log(userDirectory)
    displayUsers(myUser);
}

function displayUsers(user) {
    
    const display = document.querySelector('.user-display')
    console.log(display)
    const userData = user.getAttributes();
    
    
        const card = `<div class="card col-md-3 col-12 rounded p-2">
    <div class="card-body">
        <h5 class="card-title" required=true>${userData.name}</h5>
    </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" required=true>Email: ${userData.email}</li>
          <li class="list-group-item" required=true>Message: ${userData.message}</li>
        </ul>
    </div>`
      
      display.insertAdjacentHTML("beforeend", card)
    
}
