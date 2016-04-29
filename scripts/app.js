SC.initialize({
  client_id: 'ac104a4395c15b03639ab3118afe7b7f'
});

SC.get('/users/reel2reelpodcast/tracks').then(function(tracks){
  // // console.log(tracks[0].title+' '+tracks[0].permalink_url+''+tracks[0].description);
  // document.getElementById('epTitle').innerHtml = tracks[0].title;
  $('.ep-title').html(tracks[0].title);
  $('.ep-url').attr('href', tracks[0].permalink_url);
  $('.ep-description').html(tracks[0].description);
});