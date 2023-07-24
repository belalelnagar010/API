










//start assiment

var recipts=[];
var navlinkes= document.querySelectorAll(".nav-link")
for(i=0;i<navlinkes.length;i++){
    navlinkes[i].addEventListener("click",function(e)
    {
      var belal=e.target.text;
      getreceipts(belal)
      
    })
 
}

getreceipts("pizza");
function getreceipts(meall){
var httprequst= new XMLHttpRequest();
httprequst.open("get",`https://forkify-api.herokuapp.com/api/search?q= ${meall}`);
httprequst.send();
httprequst.addEventListener("readystatechange",function(){

    if(httprequst.readyState==4&&httprequst.status==200){

        recipts= JSON.parse(httprequst.response).recipes ;
        console.log(recipts)
        displayrecipes()

    }
})

}


async function getsenglerecipt(recipeId){
    var response= await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`);
    var reciptdetles = await response.json();
    console.log(reciptdetles)
}




function displayrecipes(){
    var cols='';
    for(i=0;i<recipts.length;i++){

  
        cols+= 
        `
        <div class="col-md-3">
        <div class="recipt">
         <img class="w-100 recpyimg" src="${recipts[i].image_url}" alt="">
         <h3>${recipts[i].title}</h3>
         <a target="_blank" href="${recipts[i].source_url}" class="btn btn-info">source</a>
         <a  onclick="getsenglerecipt(${recipts[i].recipe_id})" class="btn btn-warning">details</a>
       </div>
       </div>
        `
    }
    document.getElementById("reciptsrow").innerHTML= cols
}




//end assiment




















//start call back


// function getpizza(callback){
//       return new Promise(function(callback){
//         var httprequst= new XMLHttpRequest();
//         httprequst.open("get","https://forkify-api.herokuapp.com/api/search?q=pizza");
//         httprequst.send();
//         httprequst.addEventListener("readystatechange",function(){
        
//             if(httprequst.readyState==4&&httprequst.status==200){
        
//                 recipts= JSON.parse(httprequst.response).recipes ;
//                 console.log("pizzaaaa",recipts)
    
//                  callback()
//             }
//         })
//     });
    
//     }

    
//     function belal(){
//         console.log("belal")
//     }






//end call back


















// function getpasta(){
//     return new Promise(function(callback){

//         var httprequst= new XMLHttpRequest();
//         httprequst.open("get","https://forkify-api.herokuapp.com/api/search?q=pizza");
//         httprequst.send();
//         httprequst.addEventListener("readystatechange",function(){
        
//             if(httprequst.readyState==4&&httprequst.status==200){
        
//                 recipts= JSON.parse(httprequst.response).recipes ;
//                 console.log("pastaa",recipts)
//                 callback()
        
//             }
//         })
//     })
    
//     }

// getpasta().then(function(){getpizza().then(function(){belal()})});
// function getpizza(callback){
//       return new Promise(function(callback){
//         var httprequst= new XMLHttpRequest();
//         httprequst.open("get","https://forkify-api.herokuapp.com/api/search?q=pizza");
//         httprequst.send();
//         httprequst.addEventListener("readystatechange",function(){
        
//             if(httprequst.readyState==4&&httprequst.status==200){
        
//                 recipts= JSON.parse(httprequst.response).recipes ;
//                 console.log("pizzaaaa",recipts)
    
//                  callback()
//             }
//         })
//     });
    
//     }

    
//     function belal(){
//         console.log("belal")
//     }


















//start then



// function getpasta(){
//     return new Promise(function(callback){

//         var httprequst= new XMLHttpRequest();
//         httprequst.open("get","https://forkify-api.herokuapp.com/api/search?q=pizza");
//         httprequst.send();
//         httprequst.addEventListener("readystatechange",function(){
        
//             if(httprequst.readyState==4&&httprequst.status==200){
        
//                 recipts= JSON.parse(httprequst.response).recipes ;
//                 console.log("pastaa",recipts)
//                 callback()
        
//             }
//         })
//     })
    
//     }

// getpasta().then(function(){getpizza().then(function(){belal()})});


//end then



































// start fetch





//  async function getpizza(){
//     var response=await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
//     var proudct=await response.json();
//     console.log(proudct);
// }
//  async function getpasta(){
//     var response=await fetch(`https://forkify-api.herokuapp.com/api/search?q=pasta`);
//     var proudct=await response.json();
//     console.log(proudct);
// }

// function belal (){
//     console.log("belal")

// }



// async function getall(){
//     await getpasta();
//     await getpizza();
//     belal()
// }

// getall()


//end fetch