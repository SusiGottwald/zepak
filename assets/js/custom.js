
$('#myModal').modal({
  backdrop : 'static',
  keyboard : false,
  show : true,
  focus : true
});

$('#myModal').on('shown.bs.modal', function () {

  $('#myModal' ).addClass('open' );
  $("#myModal").appendTo("body");

  if ($('#myModal' ).hasClass('open' ) ) {
    $('.home-section' ).addClass('blur' );
  }
});

$('#myModal').on('hidden.bs.modal', function (e) {
  $('#myModal').addClass('close');

  if ($('#myModal').hasClass('close')) {
    $('.home-section').removeClass('blur');
  }
});

let theNoButton = document.getElementById('atlas-no');
theNoButton.onclick = function(evt) { // Tableau ausblenden
   // console.log("no Button");
    $('.atlasPlaceholder' ).removeClass('hidden' );
    $('.atlasPlaceholder' ).addClass('visible' );
    $('.tableauPlaceholder' ).addClass('hidden' );
    $('.tableauPlaceholder' ).removeClass('visible' );
}

let theYesButton = document.getElementById('atlas-yes');
theYesButton.onclick = function(evt) {  // Tableau einblenden
  //console.log("yes Button");
    $('.atlasPlaceholder' ).addClass('hidden' );
    $('.atlasPlaceholder' ).removeClass('visible' );
    $('.tableauPlaceholder' ).removeClass('hidden' );
    $('.tableauPlaceholder' ).addClass('visible' );
  }




