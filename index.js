$(function() {

    $('.content-images').each(function(index, element) {
        const contentImages = $(element);
        const content = contentImages.closest('.content-container').find('.content');

        contentImages.hover(
            function() {
                contentImages.addClass('expanded-images')
                content.addClass('blurred')
            },
            function() {
                contentImages.removeClass('expanded-images')
                content.removeClass('blurred')
            });
    });
});