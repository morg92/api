$(document).ready(function(){
  console.log("ready!");
  var ip="https://login.lisk.io";

  var getStatus=function(){
    $.ajax({
      method:"GET",
      url:ip+"/api/loader/status/sync",
      cache:false,
    }).done(function(data){
      console.log(data);
      return data;
    }).fail(function(err){
      console.log(err);
      return err;
    })
  }

  getStatus();
})
