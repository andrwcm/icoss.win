
    $('.ico').click(function(){
        $(this).removeClass("icoLock"),
        $(this).addClass("icoColor");
    });

    $('.icoForward').click(function(){
        $(this).removeClass("icoForward"),
        $(this).addClass("icoPlay");
    });

    $( "header h1" ).hover(
      function() {
        $( "header h1 span.logo div.letterO" ).addClass( "rotate" );
      }, function() {
        $( "header h1 span.logo div.letterO" ).removeClass( "rotate" );
      }
    );
