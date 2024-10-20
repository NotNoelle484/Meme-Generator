document.addEventListener("DOMContentLoaded", function(){
    var memeForm = document.getElementById("MyForm");
    var listGallery = document.querySelector(".gallery")

    memeForm.addEventListener("submit", function (e){
        e.preventDefault();

        var MemeLi = document.createElement("li");
        MemeLi.classList.add("meme-img");

        var Toptext = document.getElementById("topText");
        var Bottomtext = document.getElementById("bottomText");
        var ImgUrl = document.getElementById("upload_img").value, 
        src=ImgUrl,
        img= document.createElement("img")
       img.width = "500";
        img.src = src;

        var ToptextDivision = document.createElement("div");
        ToptextDivision.classList.add("text","top")
        ToptextDivision.innerText = document.getElementById("topText").value;

        var BottomtextDivision = document.createElement("div");
        BottomtextDivision.classList.add("text", "bottom")
        Bottomtext.innerText = document.getElementById("bottomText").value;

        listGallery.appendChild(MemeLi);
        MemeLi.appendChild(img);
        MemeLi.appendChild(Toptext);
        MemeLi.appendChild(Bottomtext);



        var submit = document.getElementById("SubmitButton");




    })

})