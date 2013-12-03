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
  });

  var _defaults = {
  moviePath:         "assets/flash/zeroclipboard.swf",
  trustedOrigins:    null,
  // hoverClass:        "btn-primary",
  activeClass:       "btn-primary",
  allowScriptAccess: "sameDomain", 
  useNoCache:        true,
  forceHandCursor:   true,
  zIndex:            99999
  };
  ZeroClipboard.setDefaults( _defaults );

  var clip = new ZeroClipboard($(".fa-copy"));
  clip.on( "load", function(client) {
    // client.on( "complete", function(client, args) {
    // });
    clip.on( 'dataRequested', function (client, args) {
      var link = $(this).parents('li').find('a').attr('href');
      client.setText( '[' +link + ']' );
    });
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
  });

  
});

