(function($, window) {
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.telefone').mask('(00) 00000-0000');

    $(document).ready(function($){
        $('.scroll').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
            $('.navbar-collapse').removeClass('in');
        });
    });
})(jQuery, window);