$( document ).ready(function() {
    $('#custom-nav').hover(
        function(){ $(this).addClass('menu-open') },
        function(){ $(this).removeClass('menu-open') }
    )

    $('.text').click(
        function(){ $('#custom-nav').addClass('menu-open') }
    )

    $('.close').click(
        function(){ $('#custom-nav').removeClass('menu-open') }
    )
});