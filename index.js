$(function() {
    $('.carousel-images').each(function(_, element) {
        const wrappedElement = $(element);
        var scrollerHtml = '<div class="scroller">';
        wrappedElement.children().each(function(index, carouselImage) {
            var additionalClasses = '';
            if (index != 0) {
                $(carouselImage).addClass('hide');
            }
            else {
                additionalClasses += 'current-image-dot';
            }

            scrollerHtml += `<div index=${index} class="${additionalClasses} image-dot"></div>`
        });
        scrollerHtml += '</div>';

        // Append html
        wrappedElement.parent().html(wrappedElement.parent().html() + scrollerHtml);
    });
});