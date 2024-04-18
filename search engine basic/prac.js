// //selection:
// var home=document.querySelector("#home");


// //css change (camel case is applied):
// home.style.color="red";
// home.style.backgroundColor="orange"
// home.style.fontSize="100px";

// var b=document.querySelector(".h33");//home ke andar wale h3 ko class define ki font weight assign krne ke lie
// b.style.fontWeight="100";

// //html change(whole html which is inside will change jese jo h3 tha wo khtm hogya or uski jagah hello bhai likha wa agya)
// home.innerHTML="<b>hello bhai</b>";
// home.style.border="2px solid black";

// //textcontent exact copy hota hai
// home.textContent="<b>hello</b>"

// //adding listeners
// //arrow function:
// // home.addEventListener('mouseenter',()=>{home.style.color="black";})
// //normal:
// home.addEventListener('mouseenter',function(){
//     home.style.color="black";  
// })
// home.addEventListener('mouseleave',function(){
//     home.style.color="red";  
// })


var arrayofobjects =[
    {name:"roses",image:"https://images.unsplash.com/photo-1530906622963-8a60586a49c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9zZXN8ZW58MHx8MHx8fDA%3D"},
    {name:"tech",image:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"animals",image:"https://images.unsplash.com/photo-1484406566174-9da000fda645?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8fHww"},
    {name:"kurta",image:"https://www.junaidjamshed.com/media/catalog/product/r/o/rome_white_3_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width="},
    {name:"cars",image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"clothes",image:"https://plus.unsplash.com/premium_photo-1676031940533-8f1ac6a07268?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Study",image:"https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHl8ZW58MHx8MHx8fDA%3D"},
    {name:"Tech Indusry",image:"https://plus.unsplash.com/premium_photo-1661758351472-52ed02e99496?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fHww"},
    {name:"nature",image:"https://images.unsplash.com/photo-1710543574195-143970a68e1f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
    

]


//display
function showthecards(){
    var clutter="";
    arrayofobjects.forEach(function(obj){
        clutter+=`
        <div id="box">
            <img class="image" src="${obj.image}" alt="">
            <div class="caption">${obj.name}.</div>
        </div>
        `
    });
    document.querySelector("#container")
    .innerHTML=clutter;
}


function handlesearchfunctionality(){
    //blur functionality:
    var a=document.querySelector("#overlay");
    var input=document.querySelector("#input");
    input.addEventListener("focus",()=>{
        a.style.filter="blur(3px)"
    });

    input.addEventListener("blur",()=>{
        a.style.filter="none"
    });


    // next part filter functionality:
    input.addEventListener("input", function(){    
        const filteredArray = arrayofobjects.filter(obj =>
            obj.name.toLowerCase().startsWith(input.value.toLowerCase()));
        // console.log(filteredArray); good now add elements:
        //adding to clutter each object entered separately one by one and added to the container
        var clutter="";//declare clutter outside because it will be used outsude the function
        filteredArray.forEach(function(obj){
            clutter += `
            <li>${obj.name}</li>
            `
        })
        console.log(clutter);
        
        
        //adding for images as well:
        var clutter2="";
        filteredArray.forEach(function(obj){
            clutter2+=`
            <div id="box">
                <img class="image" src="${obj.image}" alt="">
                <div class="caption">${obj.name}.</div>
            </div>
            `
        });
        

        document.querySelector("#resultbox").innerHTML=clutter;
        document.querySelector("#container").innerHTML=clutter2;  
    
        input.addEventListener("blur",()=>{
        document.querySelector("#resultbox").style.display="none"
    });
    input.addEventListener("focus",()=>{
        document.querySelector("#resultbox").style.display="block"
    });

    })

}



// Call the function to disp-lay the content in the console
showthecards();
handlesearchfunctionality();


// function handleSearchFunctionality(){
//     var input=document.querySelector("#searchinput");
//     input
//     .addEventListener("focus",function(){
//         document.querySelector(".overlay").style.display="block";
//     })
//     input
//     .addEventListener("blur",function(){
//         document.querySelector(".overlay").style.display="none";
//     })

//     //print whats written in input not important:
//     // input
//     // .addEventListener("input",function(){
//     //     console.log(input.value);
//     // })


//     //most imp code filter the array elements
    // input.addEventListener("input", function(){    
    //     const filteredArray = arr.filter(obj =>
    //         obj.name.toLowerCase().startsWith(input.value.toLowerCase()));
    //     // console.log(filteredArray); good now add elements:
    //     //adding to clutter each object entered separately one by one and added to the container
    //     var clutter="";//declare clutter outside because it will be used outsude the function
    //     filteredArray.forEach(function(obj){
    //         clutter += `
    //         <div class="res flex px-8 py-3 ">
    //         <i class="ri-search-line font-semibold mr-5"></i>
    //         <h3 class="font-semibold">${obj.name}</h3>
    //         </div>
    //         `
    //     })
    //     document.querySelector(".searchdata").style.display="block";
    //     document.querySelector(".searchdata").innerHTML=clutter;
        

    // })
           
// }