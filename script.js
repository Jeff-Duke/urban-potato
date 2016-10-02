$(document).ready(() => {

    const closeAccordionSection = () => {
        $('.accordion-aside .accordion-title').removeClass('active');
        $('.accordion-aside .accordion-content').slideUp(300).removeClass('open');
    };

    $('.accordion-title').click( function(e) {
        let currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            closeAccordionSection();
        }
        else {
            closeAccordionSection();
            $(this).addClass('active');
            $(currentAttrValue).slideDown(300).addClass('open');
        }
        e.preventDefault();
    });
});