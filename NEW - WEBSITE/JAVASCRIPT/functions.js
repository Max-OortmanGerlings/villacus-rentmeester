$(function() {
  $('#Link-BeheerLandelijkGebied').click(function(){
    $('#BeheerLandelijkGebied').css('display','block');
    $("html, body").animate({ scrollTop: "0px" });
    return false;
  });

  $('#Link-RuimtelijkBestuursrecht').click(function(){
    $('#RuimtelijkBestuursrecht').css('display','block');
    $("html, body").animate({ scrollTop: "0px" });
    return false;
  });

  $('#Link-Ontwikkeling').click(function(){
    $('#Ontwikkeling').css('display','block');
    $("html, body").animate({ scrollTop: "0px" });
    return false;
  });

  $('#Link-TaxatieLandelijk').click(function(){
    $('#TaxatieLandelijk').css('display','block');
    $("html, body").animate({ scrollTop: "0px" });
    return false;
  });

  $('#Link-Bedrijf').click(function(){
    $('#Bedrijf').css('display','block');
    $("html, body").animate({ scrollTop: "0px" });
    return false;
  });

  $('.close-modal').click(function(){
    $('.modal').css('display','none');
    return false;
  });

  if($('.modal').css('display') == 'block') {
    $('a').click(function(){
      return false;
    });
  };
});
