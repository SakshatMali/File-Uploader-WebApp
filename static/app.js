function uploader(event) {
    console.log("Hi");

    let files = event.target.files;
    let fileName = files[0].name;

    let ext = fileName.split('.')[1];

    var data = new FormData();
    data.append('files', files[0]); 
    data.append('name', fileName);
    

    let api = "/file_uploader";
    fetch(api,{
        method:"POST",
        body: data,
    })
    .then(function(response){
        return response.json();
    })
    .then(function(res){
        console.log('success');
        console.log(res); //return value from python
        
        document.getElementById('done').style.display = 'block';
    });
}

document.getElementById("file_button").addEventListener("change" , uploader);