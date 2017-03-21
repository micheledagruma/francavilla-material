//swipe home
$(function(){
  $("div[data-role='page']").on("swiperight", function(event) {
    $(this).find("div[data-role='panel']").panel("open");
  });
  $("div[data-role='page']").on("swipeleft", function(event) {
    $(this).find("div[data-role='panel']").panel("close");
  });
  //CHIAMATA CONTATTI
  $("#invia").click(function(){
    var object = {
       nome : $("#nome").val(),
       email : $("#email").val(),
       oggetto : $("#oggetto").val(),
       testo : $("#testo").val()
    };
      $.ajax({
      url: 'https://francavilla-62b8e.firebaseio.com/contatti.json',
      type: "POST",
      dataType: 'json',
      data: JSON.stringify(object)
      }).done(function (data){
        alert("Email inviata");
      })
      .fail(function(){
        alert("Errore!");
      });
    });
});
