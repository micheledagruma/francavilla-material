$("li").removeClass("ui-btn-icon-right");

/* ---------- SWIPE PANEL ----------*/
$(function(){
  $("div[data-role='page']").on("swiperight", function(event) {
    $(this).find("div[data-role='panel']").panel("open");
  });
  $("div[data-role='page']").on("swipeleft", function(event) {
    $(this).find("div[data-role='panel']").panel("close");
  });

  /* ---------- FORM CONTATTI DINAMICO ----------*/

  /* ---------- SWIPE PANEL ----------*/

  /* ---------- FORM CONTATTI DINAMICO ----------*/
  //#invia = id del bottone
  $("#invia").click(function(){
    var object = {
       nome : $("#nome").val(), //#nome = id input nome
       email : $("#email").val(), //#nome = id input email
       oggetto : $("#oggetto").val(), //#nome = id input oggetto
       testo : $("#testo").val() //#nome = id input testo
    };
      $.ajax({
      url: 'https://francavilla-62b8e.firebaseio.com/contatti.json',
      type: "POST",
      dataType: 'json',
      data: JSON.stringify(object) //trasforma object in json
    }).done(function (data){ //se tutto ok
        alert("Email inviata con successo!");
      })
      .fail(function(){ // se c'è stato un problema
        alert("Errore!");
      });
    });/* ---------- FORM CONTATTI DINAMICO ----------*/

    /* ---------- PAGINA CHIESE DINAMICA ----------*/
    $("#chiese").on('pagecreate', function() {
      $("#main-chiese").empty();
      $.ajax("https://francavilla-62b8e.firebaseio.com/luoghi/chiese.json")
      .done(function(chiese){
        $.map(chiese, function(riga, indice) {
          var htmlPagina =  '<div class="w3-container">';
              htmlPagina +=   '<div class="w3-section">';
              htmlPagina +=     '<div class="w3-card-4">';
              htmlPagina +=       '<img src='+riga.immagine+' alt="chiesa" style="width:100%">';
              htmlPagina +=       '<div class="w3-container w3-center">';
              htmlPagina +=         '<h4>'+riga.nome+'</h4>';
              htmlPagina +=         '<p>'+riga.descrizione+'</p>';
              htmlPagina +=       '</div>';
              htmlPagina +=       '<a href='+riga.coordinate+' class="w3-bar-item w3-button w3-block">Vai alla mappa</a>';
              htmlPagina +=     '</div>';
              htmlPagina +=   '</div>';
              htmlPagina += '</div>';
              $('#main-chiese').append(htmlPagina);
        })
      })
      .fail(function(){
        alert("Errore! Prova a ricaricare la pagina...");
      });
    });/* ---------- PAGINA CHIESE DINAMICA ----------*/


    /* ---------- PAGINA CULTURA DINAMICA ----------*/
    $("#cultura").on('pagecreate', function() {
      $("#main-cultura").empty();
      $.ajax("https://francavilla-62b8e.firebaseio.com/luoghi/cultura.json")
      .done(function(cultura){
        $.map(cultura, function(riga, indice) {
          var htmlPagina =  '<div class="w3-container">';
              htmlPagina +=   '<div class="w3-section">';
              htmlPagina +=     '<div class="w3-card-4">';
              htmlPagina +=       '<img src='+riga.immagine+' alt="chiesa" style="width:100%">';
              htmlPagina +=       '<div class="w3-container w3-center">';
              htmlPagina +=         '<h4>'+riga.nome+'</h4>';
              htmlPagina +=         '<p>'+riga.descrizione+'</p>';
              htmlPagina +=       '</div>';
              htmlPagina +=       '<a href='+riga.coordinate+' class="w3-bar-item w3-button w3-block">Vai alla mappa</a>';
              htmlPagina +=     '</div>';
              htmlPagina +=   '</div>';
              htmlPagina += '</div>';
              $('#main-cultura').append(htmlPagina);
        })
      })
      .fail(function(){
        alert("Errore! Prova a ricaricare la pagina...");
      });
    });/* ---------- PAGINA CULTURA DINAMICA ----------*/

    /* ---------- PAGINA ENOGASTRONOMIA DINAMICA ----------*/
    $("#enogastronomia").on('pagecreate', function() {
      $("#main-enogastronomia").empty();
      $.ajax("https://francavilla-62b8e.firebaseio.com/luoghi/enogastronomia.json")
      .done(function(enogastronomia){
        $.map(enogastronomia, function(riga, indice) {
              var htmlPagina =  '<div class="w3-container">';
                  htmlPagina +=   '<div class="w3-section">';
                  htmlPagina +=     '<div class="w3-card-4">';
                  htmlPagina +=       '<img src='+riga.immagine+' alt="monumento" style="width:100%">';
                  htmlPagina +=       '<div class="w3-container w3-center">';
                  htmlPagina +=         '<h4>'+riga.nome+'</h4>';
                  htmlPagina +=         '<p>'+riga.indirizzo+'</p>';
                  htmlPagina +=       '</div>';
                  htmlPagina +=       '<a href='+riga.coordinate+' class="w3-bar-item w3-button w3-block">Vai alla mappa</a>';
                  htmlPagina +=     '</div>';
                  htmlPagina +=   '</div>';
                  htmlPagina += '</div>';
                  $('#main-enogastronomia').append(htmlPagina);
        })
      })
      .fail(function(){
        alert("Errore! Prova a ricaricare la pagina...");
      });
    });/* ---------- PAGINA ENOGASTRONOMIA DINAMICA ----------*/

    /* ---------- PAGINA MONUMENTI DINAMICA ----------*/
    $("#monumenti").on('pagecreate', function() {
      $("#main-monumenti").empty();
      $.ajax("https://francavilla-62b8e.firebaseio.com/luoghi/monumenti.json")
      .done(function(monumenti){
        $.map(monumenti, function(riga, indice) {
              var htmlPagina =  '<div class="w3-container">';
                  htmlPagina +=   '<div class="w3-section">';
                  htmlPagina +=     '<div class="w3-card-4">';
                  htmlPagina +=       '<img src='+riga.immagine+' alt="monumento" style="width:100%">';
                  htmlPagina +=       '<div class="w3-container w3-center">';
                  htmlPagina +=         '<h4>'+riga.nome+'</h4>';
                  htmlPagina +=         '<p>'+riga.descrizione+'</p>';
                  htmlPagina +=       '</div>';
                  htmlPagina +=       '<a href='+riga.coordinate+' class="w3-bar-item w3-button w3-block">Vai alla mappa</a>';
                  htmlPagina +=     '</div>';
                  htmlPagina +=   '</div>';
                  htmlPagina += '</div>';
                  $('#main-monumenti').append(htmlPagina);
        })
      })
      .fail(function(){
        alert("Errore! Prova a ricaricare la pagina...");
      });
    });/* ---------- PAGINA MONUMENTI DINAMICA ----------*/

});
