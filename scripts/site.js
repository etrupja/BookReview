// function addAuthor(){
//     let fName = document.getElementById('fname').value;
//     let lName = document.getElementById('lname').value;

//     $('#addAuthorForm').validate({ // initialize the plugin
//         rules: {
//             fname: {
//                 required: true
//             },
//             lName: {
//                 required: true
//             }
//         }
//     });

//     console.log('Full name: '+fName+' '+lName);
// }

// function addBook(){
//     let title = document.getElementById('title').value;
//     let description = document.getElementById('description').value;
//     let authorId = document.getElementById('authorId').value;
//     let rate = document.getElementById('rate').value;

//     console.log('Book details: '+title+' '+description+' '+authorId+' '+rate);
// }

$(document).ready(function() {
    $("#addAuthorForm").validate({
        rules: {
            fname: {required: true},
            lname: {required: true}
        },
        messages: {  
            fname: 'First name field is required',  
            lname: 'Last name field is required'  
          }, 
        

        submitHandler: function(form) {
            console.log(form.fname.value+' '+form.lname.value);
            // $.ajax({
            //   type: "POST",
            //   url: "<?php bloginfo("template_directory"); ?>/contact/process.php",
            //   data: $(form).serialize(),
            //   timeout: 3000,
            //   success: function() {alert('works');},
            //   error: function() {alert('failed');}
            // });
            return false;
        }
    });


    $("#addBookForm").validate({
        rules: {
            title: {required: true},
            description: {
                required: true,
                minlength: 10
            },
            authorId: {required: true},
            rate: {required: true}
        },
        messages: {  
            title: 'Title is required',  
            // description: 'Description is required',  
            authorId: 'Value required',  
            rate: 'Please, select a rate',  
          }, 
        

        submitHandler: function(form) {
            console.log(form.title.value+' '+form.description.value+' '+form.authorId.value+' '+form.rate.value);

            // $.ajax({
            //   type: "POST",
            //   url: "<?php bloginfo("template_directory"); ?>/contact/process.php",
            //   data: $(form).serialize(),
            //   timeout: 3000,
            //   success: function() {alert('works');},
            //   error: function() {alert('failed');}
            // });
            return false;
        }
    });
});