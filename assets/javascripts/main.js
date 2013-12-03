var clip = new ZeroClipboard( document.getElementById("copy-button"), {
  moviePath: "assets/flash/zeroclipboard.swf"
});
clip.on( "load", function(client) {
  client.on( "complete", function(client, args) {
    console.log("Copied text to clipboard: " + args.text );
  } );
} );
