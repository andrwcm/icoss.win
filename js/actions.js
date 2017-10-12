
    $('.icossTest > span').click(function(){
        $("span .icoPhone").removeClass("icoPhone"),
        $("span .ico").addClass("icoColor");
    });


    $( "header h1" ).hover(
      function() {
        $( "header h1 span.logo div.letterO" ).addClass( "rotate" );
      }, function() {
        $( "header h1 span.logo div.letterO" ).removeClass( "rotate" );
      }
    );
