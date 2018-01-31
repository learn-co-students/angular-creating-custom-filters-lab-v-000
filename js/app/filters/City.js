app.filter('city', function(){
  return function(list, city){
    return list.filter(function(item){
      return item.location.city === city
    })
  }
})



