//swipe home
$(function(){
  $("div[data-role='page']").on("swiperight", function(event) {
    $(this).find("div[data-role='panel']").panel("open");
  });
  $("div[data-role='page']").on("swipeleft", function(event) {
    $(this).find("div[data-role='panel']").panel("close");
  });
  //CHIAMATA CONTATTI
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
        alert("Email inviata");
      })
      .fail(function(){ // se c'è stato un problema
        alert("Errore!");
      });
    });
    //chiese
    $("#chiese").on('click', function() {
      $("#main-laCitta").empty();
      $.ajax("https://francavilla-62b8e.firebaseio.com/luoghi/chiese.json")
      .done(function(chiese){
        console.log(chiese);
        $.map(chiese, function(riga, indice) {
          var htmlPagina = "<div class='w3-container'>";
              htmlPagina += "<h1>"+riga.nome+"</h1>";
              htmlPagina += "<h1>"+riga.immagine+"</h1>";
              htmlPagina += "<p>"+riga.descrizione+"</p>";
              htmlPagina += "<div>"+riga.coordinate+"</div>";
              htmlPagina += "</div>";
              $('#main-laCitta').append(htmlPagina);
        })
      })
      .fail(function(){
        alert("Errore! Prova a ricaricare la pagina...");
      });
    });

});
