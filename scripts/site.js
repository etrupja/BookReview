$(document).ready(function(){
    $("#addAuthorForm").validate({
        rules:{
            fname: { 
                required: true, 
                minlength: 3
            },
            lname: { required: true}
        },
        messages:{
            fname: { 
                required: 'First name is required', 
                minlength: 'Min length required is 3 chars'
            },
            lname: 'Last name is required',
        },
        //messages
        submitHandler: function(form){
            console.log(`${form.fname.value} ${form.lname.value}`);
        }
    })
});


// function addAuthor(){
//     let fName = document.getElementById('fname').value;
//     let lName = document.getElementById('lname').value;

//     console.log('Full name: '+fName+' '+lName);
// }

function addBook(){
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let authorId = document.getElementById('authorId').value;
    let rate = document.getElementById('rate').value;

    console.log(`${title} ${description} ${authorId} ${rate}`);
}