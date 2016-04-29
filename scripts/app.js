SC.initialize({
  client_id: 'ac104a4395c15b03639ab3118afe7b7f'
});

SC.get('/users/reel2reelpodcast/tracks').then(function(tracks){
  // // console.log(tracks[0].title+' '+tracks[0].permalink_url+''+tracks[0].description);
  // document.getElementById('epTitle').innerHtml = tracks[0].title;
  $('.ep-title').html(tracks[0].title);
  $('.ep-url').attr('href', tracks[0].permalink_url);
  $('.ep-description').html(tracks[0].description);

  var epList = $('.ep-list')

  $.each(tracks, function(i) {
    // $epList.append('<li><a href="'+tracks[i].permalink_url+'" target="_blank">'+tracks[i].title+'</a></li>');

    // var html = 
      var li = $('<li/>').appendTo(epList);
      var aaa = $('<a/>').attr('href', tracks[i].permalink_url).attr('target', '_blank').attr('class','text-link').text(tracks[i].title).appendTo(li);

      return i<5;

  });
});