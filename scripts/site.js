function addAuthor(){
    let fName = document.getElementById('fname').value;
    let lName = document.getElementById('lname').value;

    console.log('Full name: '+fName+' '+lName);
}

function addBook(){
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let authorId = document.getElementById('authorId').value;
    let rate = document.getElementById('rate').value;

    console.log('Book details: '+title+' '+description+' '+authorId+' '+rate);
}
