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

function lister(event) {
    console.log("hi");

    let api = "/file_lister";
    fetch(api,{
        method:"POST",
        // body: data,
    })
    .then(function(response){
        return response.json();
    })
    .then(function(res){
        console.log('success');
        console.log(res); //return value from python

        let list = document.getElementById("file_list");
     
        res.forEach((item) => {
            let li = document.createElement("li");
            li.innerText = item;
            list.appendChild(li);
        });
    });
}

document.getElementById("file_button").addEventListener("change" , uploader);

document.getElementById("file_list_button").addEventListener("click" , lister);
