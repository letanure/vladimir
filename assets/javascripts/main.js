console.log('ola')

var clip = new ZeroClipboard( document.getElementById("copy-button"), {
  moviePath: "assets/flash/zeroclipboard.swf"
} );

clip.on( "load", function(client) {
  console.log( "movie is loaded" );

  client.on( "complete", function(client, args) {
    // `this` is the element that was clicked
    this.style.display = "none";
    console.log("Copied text to clipboard: " + args.text );
  } );
} );
