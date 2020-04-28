var mystr = document.getElementById('mystring')
var myreq= new XMLHttpRequest();
myreq.open('GET','https://api.themoviedb.org/3/trending/all/day?api_key=054c1318c6bf2ac45d4cd737d88111eb')
myreq.onload=function(){
    var mydata=JSON.parse(myreq.responseText);
    let mylist = mydata.results
    console.log(mylist)
    // console.log(myreq.responseText);
    // console.log(mydata)
    var htmlstring="";
    for(i=0;i<mylist.length;i++){
      mvimg=mylist[i].poster_path
      htmlstring+=
      '<section class="section">'+
      '<div class="container">'+
      '<div class="row">'+
      '<div class="col-sm-12">'+
      '<p style="font-weight: bold; font-size: large;">'
      +(i+1)+'.'+mylist[i].original_title 
      +'.</p>'
      +'<p>'+mylist[i].overview +'.</p>'
      +'<p style="text-align: center;"> Rating '+mylist[i].vote_average+'.</p>'
       +'<img src='+'https://image.tmdb.org/t/p/w500/'+ mvimg+' class="center">'
      '</div>';
    }
    mystr.insertAdjacentHTML('beforeend',htmlstring);
    
    // console.log(htmlstring)

}
myreq.send()