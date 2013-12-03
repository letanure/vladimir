$( document ).ready(function() {
  'use strict';
  var $listMusic = $('#list-music');
  var $listMusicItens = $('#list-music').find('li');
  var $searchExplain = $('#searchExplain')
  $listMusicItens.each(function (i, e) {
    $(e).append('\
      <div class="pull-right">\
        <button type="button" class="btn btn-primary fa fa-copy"> Copiar</button>\
        <div class="btn-group">\
          <button type="button" class="btn btn-default fa fa-play"></button>\
          <button type="button" class="btn btn-default fa fa-stop"></button>\
        </div>\
      </div>\
      ');
    $(e).find('a').on('click', function (evt) {
      evt.preventDefault();
    });
    $(e).find('.fa-copy');
  });

  $('#query').on('keyup', function(e){
    var query = $(this).val();
    $listMusicItens.hide();
    var $results = $listMusic.find('li:contains("' + query + '")');
    $results.show();
    if( query === '' ){
      $searchExplain.html('');
    }else{
      $searchExplain.html( 'Achados <b>' + $results.size() + '</b> resultados para o termo <b>' + query + '</b>'  );
    }
  })
});

// var clip = new ZeroClipboard( document.getElementById("copy-button"), {
//   moviePath: "assets/flash/zeroclipboard.swf"
// });
// clip.on( "load", function(client) {
//   client.on( "complete", function(client, args) {
//     console.log("Copied text to clipboard: " + args.text );
//   } );
// } );
