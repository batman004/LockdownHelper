function querygenerator(){
    var str=document.getElementById("srchtxt").value;
    console.log(str)
    var query=""
    query='https://api.themoviedb.org/3/search/movie?api_key=054c1318c6bf2ac45d4cd737d88111eb&language=en-US&query='+str+'&page=1&include_adult=false'
    console.log(query)
    // return query;
    

// console.log(querygenerator('frozen'))


var mystr = document.getElementById('mystring2')
var myreq= new XMLHttpRequest();
myreq.open('GET',query)
myreq.onload=function(){
    var mydata=JSON.parse(myreq.responseText);
    let mylist = mydata.results
    console.log(mylist)
    // console.log(myreq.responseText);
    // console.log(mydata)
    var htmlstring="";
    var title
    for(i=0;i<mylist.length;i++){
      if(mylist[i].original_title==undefined){
        title=mylist[i].name;
      }
    else{
    title=mylist[i].original_title;
    }
      mvimg=mylist[i].poster_path
      htmlstring+=
      '<section class="section">'+
      '<div class="container">'+
      '<div class="row">'+
      '<div class="col-sm-7">'+
      '<h2 style="font-weight: bold;">'
      +(i+1)+'.'+title
      +'.</h2>'
      +'<p style="font-size:24px;">'+mylist[i].overview +'.</p>'
      +'<p style="font-size:26px;">Released on:'+mylist[i].release_date +'.</p>'
      +'<p style="text-align: center; font-size:20px;border: 4px solid green;background-color:green;color:white;font-weight: bold;padding:0.5rem;"> IMDB Rating '+mylist[i].vote_average+'</p>'
      +'</div>'
      +'<div class="col-sm-5">'
       +'<img src='+'https://image.tmdb.org/t/p/w500/'+ mvimg+' class="center" style="border:4px solid white;padding:1rem;">'+'</div>'
      '</div>';
    }
    mystr.innerHTML=htmlstring;
    
    
    // console.log(htmlstring)

}
myreq.send()
}

function showsquerygenerator(){
  var str=document.getElementById("srchtxt").value;
  console.log(str)
  var query=""
  query='https://api.themoviedb.org/3/search/tv?api_key=054c1318c6bf2ac45d4cd737d88111eb&language=en-US&page=1&query='+str+'&include_adult=false'
  console.log(query)
  // return query;
  

// console.log(querygenerator('frozen'))


var mystr = document.getElementById('mystring2')
var myreq= new XMLHttpRequest();
myreq.open('GET',query)
myreq.onload=function(){
  var mydata=JSON.parse(myreq.responseText);
  let mylist = mydata.results
  console.log(mylist)
  // console.log(myreq.responseText);
  // console.log(mydata)
  var htmlstring="";
  var title
  for(i=0;i<mylist.length;i++){
      if(mylist[i].original_title==undefined){
          title=mylist[i].name;
      }
      else{
      title=mylist[i].original_title;
      }
    mvimg=mylist[i].poster_path
    htmlstring+=
    '<section class="section">'+
    '<div class="container">'+
    '<div class="row">'+
    '<div class="col-sm-7">'+
    '<h2 style="font-weight: bold;">'
    +(i+1)+'.'+title 
    +'.</h2>'
    +'<p style="font-size:24px;">'+mylist[i].overview +'.</p>'
    +'<p style="font-size:26px;">First aired on:'+mylist[i].first_air_date +'.</p>'
    +'<p style="text-align: center; font-size:20px;border: 4px solid green;background-color:green;color:white;font-weight: bold;padding:0.5rem;"> IMDB Rating '+mylist[i].vote_average+'</p>'
    +'</div>'
    +'<div class="col-sm-5">'
     +'<img src='+'https://image.tmdb.org/t/p/w500/'+ mvimg+' class="center" style="border:4px solid white;padding:1rem;">'+'</div>'
    '</div>';
  }
  mystr.innerHTML=htmlstring;
  
  
  // console.log(htmlstring)

}
myreq.send()
}