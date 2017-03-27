

$(function(){
  /* ---------- SWIPE PANEL ----------*/
  $("div[data-role='page']").on("swiperight", function(event) {
    $(this).find("div[data-role='panel']").panel("open");
  });
  $("div[data-role='page']").on("swipeleft", function(event) {
    $(this).find("div[data-role='panel']").panel("close");
  });
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
    $("#chiese").on('pagecreate', function() {// alla creazione della pagina chiese
      $("#main-chiese").empty(); //svuota il data-role main
      $.ajax("https://francavilla-62b8e.firebaseio.com/luoghi/chiese.json") //chiamata ai dati delle chiese nel db
      .done(function(chiese){
        $.map(chiese, function(riga, indice) { //strutturo l impagionazione di ogni chiesa
              var htmlPagina =  '<div class="w3-container">';
                  htmlPagina +=   '<div class="w3-section">';
                  htmlPagina +=     '<div class="w3-card-4">';
                  htmlPagina +=       '<img src='+riga.immagine+' alt="chiesa" style="width:100%">';
                  htmlPagina +=       '<div  class="w3-container w3-center">';
                  htmlPagina +=         '<a href="#" data-id='+indice+'><i class="material-icons w3-right preferiti" style="font-size:48px;">favorite_border</i></a>';
                  htmlPagina +=         '<h4>'+riga.nome+'</h4>';
                  htmlPagina +=         '<p>'+riga.descrizione+'</p>';
                  htmlPagina +=       '</div>';
                  htmlPagina +=       '<a href='+riga.coordinate+' class="w3-bar-item w3-button w3-block">Vai alla mappa</a>';
                  htmlPagina +=     '</div>';
                  htmlPagina +=   '</div>';
                  htmlPagina += '</div>';
                  $('#main-chiese').append(htmlPagina);//e la appendo al main della pagina
        });
        /*----- FUNZIONE PER PREFERITI-----*/
        $(".preferiti").click(function(){
          var id = $(this).parent("a").attr("data-id"); //recupero l'indice
          if(localStorage.getItem(id) != 1){//se esiste imposta l icona a favorite
            $(this).text("favorite");
            localStorage.setItem(id,1);
          }else{
            $(this).text("favorite_border");//altrimenti imposta l icona a favorite_border
            localStorage.setItem(id,0);
        }
        });
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
              htmlPagina +=         '<a href="#" data-id='+indice+'><i class="material-icons w3-right preferiti" style="font-size:48px;">favorite_border</i></a>';
              htmlPagina +=         '<h4>'+riga.nome+'</h4>';
              htmlPagina +=         '<p>'+riga.descrizione+'</p>';
              htmlPagina +=       '</div>';
              htmlPagina +=       '<a href='+riga.coordinate+' class="w3-bar-item w3-button w3-block">Vai alla mappa</a>';
              htmlPagina +=     '</div>';
              htmlPagina +=   '</div>';
              htmlPagina += '</div>';
              $('#main-cultura').append(htmlPagina);
        });
        $(".preferiti").click(function(){
          var id = $(this).parent("a").attr("data-id");
          console.log(id);
          if(localStorage.getItem(id) != 1){
            $(this).text("favorite");
            localStorage.setItem(id,1);
          }else{
            $(this).text("favorite_border");
            localStorage.setItem(id,0);
        }
        });
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
                  htmlPagina +=         '<a href="#" data-id='+indice+'><i class="material-icons w3-right preferiti" style="font-size:48px;">favorite_border</i></a>';
                  htmlPagina +=         '<h4>'+riga.nome+'</h4>';
                  htmlPagina +=         '<strong><p>Via :</p></strong><p>'+riga.indirizzo+'</p>';
                  htmlPagina +=         '<strong><p>Tel :</p></strong><p>'+riga.telefono+'</p>';
                  htmlPagina +=       '</div>';
                  htmlPagina +=       '<a href='+riga.coordinate+' class="w3-bar-item w3-button w3-block">Vai alla mappa</a>';
                  htmlPagina +=     '</div>';
                  htmlPagina +=   '</div>';
                  htmlPagina += '</div>';
                  $('#main-enogastronomia').append(htmlPagina);
        });
        $(".preferiti").click(function(){
          var id = $(this).parent("a").attr("data-id");
          console.log(id);
          if(localStorage.getItem(id) != 1){
            $(this).text("favorite");
            localStorage.setItem(id,1);
          }else{
            $(this).text("favorite_border");
            localStorage.setItem(id,0);
        }
        });
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
                  htmlPagina +=         '<a href="#" data-id='+indice+'><i class="material-icons w3-right preferiti" style="font-size:48px;">favorite_border</i></a>';
                  htmlPagina +=         '<h4>'+riga.nome+'</h4>';
                  htmlPagina +=         '<p>'+riga.descrizione+'</p>';
                  htmlPagina +=       '</div>';
                  htmlPagina +=       '<a href='+riga.coordinate+' class="w3-bar-item w3-button w3-block">Vai alla mappa</a>';
                  htmlPagina +=     '</div>';
                  htmlPagina +=   '</div>';
                  htmlPagina += '</div>';
                  $('#main-monumenti').append(htmlPagina);
        });
        $(".preferiti").click(function(){
          var id = $(this).parent("a").attr("data-id");
          if(localStorage.getItem(id) != 1){
            $(this).text("favorite");
            localStorage.setItem(id,1);
          }else{
            $(this).text("favorite_border");
            localStorage.setItem(id,0);
        }
        });
      })
      .fail(function(){
        alert("Errore! Prova a ricaricare la pagina...");
      });
    });/* ---------- PAGINA MONUMENTI DINAMICA ----------*/

    /* ---------- PAGINA EVENTI DINAMICA ----------*/
    $("#eventi").on('pagecreate', function() {// alla creazione della pagina chiese
      $("#main-eventi").empty(); //svuota il data-role main
      $.ajax("https://francavilla-62b8e.firebaseio.com/luoghi/eventi.json") //chiamata ai dati delle chiese nel db
      .done(function(eventi){
        $.map(eventi, function(riga, indice) { //strutturo l impagionazione di ogni chiesa
              var htmlPagina =  '<div class="w3-container">';
                  htmlPagina +=   '<div class="w3-section">';
                  htmlPagina +=     '<div class="w3-card-4">';
                  htmlPagina +=       '<img src='+riga.immagine+' alt="evento" style="width:100%">';
                  htmlPagina +=       '<div  class="w3-container w3-center">';
                  htmlPagina +=         '<a href="#" data-id='+indice+'><i class="material-icons w3-right preferiti" style="font-size:48px;">favorite_border</i></a>';
                  htmlPagina +=         '<h4>'+riga.nome+'</h4>';
                  htmlPagina +=         '<p>'+riga.descrizione+'</p>';
                  htmlPagina +=         '<p><strong>data:</strong>'+riga.data+'</p>';
                  htmlPagina +=       '</div>';
                  htmlPagina +=       '<a href='+riga.info+' class="w3-bar-item w3-button w3-block">Sito info</a>';
                  htmlPagina +=     '</div>';
                  htmlPagina +=   '</div>';
                  htmlPagina += '</div>';
                  $('#main-eventi').append(htmlPagina);//e la appendo al main della pagina
        });
        /*----- FUNZIONE PER PREFERITI-----*/
        $(".preferiti").click(function(){
          var id = $(this).parent("a").attr("data-id"); //recupero l'indice
          if(localStorage.getItem(id) != 1){//se esiste imposta l icona a favorite
            $(this).text("favorite");
            localStorage.setItem(id,1);
          }else{
            $(this).text("favorite_border");//altrimenti imposta l icona a favorite_border
            localStorage.setItem(id,0);
        }
        });
      })
      .fail(function(){
        alert("Errore! Prova a ricaricare la pagina...");
      });
    });/* ---------- PAGINA CHIESE DINAMICA ----------*/


    /* ---------- PAGINA preferiti DINAMICA
    $("#preferiti").on('pageshow', function() {
      //$("#main-preferiti").empty();
      $.ajax("https://francavilla-62b8e.firebaseio.com/luoghi.json")
      .done(function(data){//cicla i luoghi
        $("#main-preferiti").empty();
        $.each(data, function(value, index) {
          console.log(index);
          $.map(index,function(riga,indice){
            if(index == "enogastronomia"){
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
                  $('#main-preferiti').append(htmlPagina);
            }else{
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
                  $('#main-preferiti').append(htmlPagina);
            }
                });
        });
      })
      .fail(function(){
        alert("Errore! Prova a ricaricare la pagina...");
      });
    }); PAGINA preferiti DINAMICA ----------*/

});
