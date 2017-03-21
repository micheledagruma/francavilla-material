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
});
