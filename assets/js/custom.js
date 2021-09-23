
let page = document.getElementById('atlasintro');

if(page.style.display != 'none'){

    console.log("hier");
    let consent = getCookie("tableau consent");

    // cookie already set
    if (consent != "") {
      console.log("tableau consent: " + consent);
      // no notice needed

      if (consent == 'yes') {
        // show Tableau
        showTableau();
      }
      else {
        // show image
        showStaticAtlas();
      }

    }

    // new visit -> show notice and set cookie accordingly
    else {
      $('#myModal').modal({
        backdrop : 'static',
        keyboard : false,
        show : true,
        focus : true
      });

    }
  }

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

// Tableau ausblenden
let theNoButton = document.getElementById('atlas-no');
theNoButton.onclick = function(evt) {
    setCookie('tableau consent', 'no', 7);
    showStaticAtlas();
}

// Tableau einblenden
let theYesButton = document.getElementById('atlas-yes');
theYesButton.onclick = function(evt) {
  setCookie('tableau consent', 'yes', 7);
  showTableau();
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function showTableau() {
  $('.atlasPlaceholder' ).addClass('hidden' );
  $('.atlasPlaceholder' ).removeClass('visible' );
  $('.tableauPlaceholder' ).removeClass('hidden' );
  $('.tableauPlaceholder' ).addClass('visible' );
}

function showStaticAtlas() {
  $('.atlasPlaceholder' ).removeClass('hidden' );
  $('.atlasPlaceholder' ).addClass('visible' );
  $('.tableauPlaceholder' ).addClass('hidden' );
  $('.tableauPlaceholder' ).removeClass('visible' );
}
