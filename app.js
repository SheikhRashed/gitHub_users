// Init github
const github = new Github();
// Init ui
const ui = new UI();
// Get Input
const searchUser = document.getElementById('searchUser');

// Add keyup Event Listeners
searchUser.addEventListener('keyup',(e)=>{
  // Get Text form Input 
    const userText = e.target.value;
   
    if(userText !==''){
      // Make Http Request Then
      github.getUser(userText)

       .then(data =>{
         if(data.profile.message === 'Not Found'){
          //  Show Alert
          ui.showAlert("User Not Found",'alert alert-danger');
         } else {
          //  Show profile
          // console.log(data);
          ui.showProfile(data.profile);

          // Show REposity
          ui.showRepos(data.repos);
          
         }
       });
    } else{
      // Clear Profile
      ui.clearProfile();
    }
    
});