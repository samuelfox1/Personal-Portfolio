$(document).ready(function () {
    console.log('linked!')
    var currentPage = 'about'
    var loadPage

    function initializePage() {
        $('body').fadeIn(function () {
            $('nav').fadeIn(2000)
            $('footer').fadeIn(2000)
            $(`.${currentPage}-container`).fadeIn(2000)
        })
    }



    $(document).on('click', '.header-name', function () {
        console.log('clicked')
    })

    $(document).on('click', '.nav-link', function (event) {
        event.preventDefault()

        loadPage = $(this).text().trim().toLowerCase()
        console.log(loadPage)

        if (loadPage === 'samuel fox') {
            loadPage = 'about'
        }

        $(`#${currentPage}-link`).removeClass('active')
        $(this).children().addClass('active')
        console.log($(this).children())
        $(`.${currentPage}-container`).fadeOut(function () {
            $(`.${loadPage}-container`).fadeIn()
            currentPage = loadPage
        })
    })

    $(document).on('click', '.card-img-top', function () {
        $(this).parent().next().find('p').slideToggle()
        $(this).parent().next().find('a').slideToggle()
    })
    initializePage()
})