$('#anchor-tag').lightGallery({
    mode: 'lg-fade',
    thumbnail:true
});

$(document).ready(function(){
    let images = document.getElementsByTagName('a');
    $('#myInput').on('keyup', function(){
        let search =$('#myInput').val().toLowerCase();
        for(let i = 0; i < images.length; i++) {
            let searchVal = images[i].getAttribute('data-title','data-alt');
            if(searchVal.toLowerCase().indexOf(search) > -1){
                images[i].style.display = "";
            }else{
                images[i].style.display = "none";
        
            }
        }
    })
})


