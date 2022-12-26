(function ($) {
    users_feedback = [
        {
          mark: 5,
          text: "Восхитительно. Этот проект заслуживает хорошей оценки. Мечтаю накопить на тур в Альпы ",
          user_name: "Никита Янбуров",
          user_img: "testimonials-1-1.jpg",
        },
        {
          mark: 5,
          text: "Горнолыжный тур в Шерегеш выше всяких похвал. Гид Карина рассказала все тонкости отдыха в данном месте",
          user_name: "Екатерина Мангутова",
          user_img: "testimonials-1-2.jpg",
        },
        {
          mark: 5,
          text: "Коллега посоветовала данное агенство и не обманула! Лучшие цены, великолепные отели и гиды. Я в восторге",
          user_name: "Алина Карасева",
          user_img: "testimonials-1-3.jpg",
        },
        {
          mark: 5,
          text: "Накопила на отпуск мечты, приветливые операторы помогли подобрать подходящий тур. Спасибо вам",
          user_name: "Соня Шестакова",
          user_img: "testimonials-1-4.jpg",
        },
        {
          mark: 5,
          text: "Я в восторге от вас! Обязательно обращусь снова. Вы воплотили мою давнюю мечту в жизнь",
          user_name: "Матвей Соколанов",
          user_img: "testimonials-1-5.jpg",
        },
        {
          mark: 5,
          text: "Лучше чем в Санкт-Петербурге! Пётр Первый бы оценил ваши туры в Европу. Спасибо вам!",
          user_name: "Марина Климашова",
          user_img: "testimonials-1-6.jpg",
        },
        {
          mark: 5,
          text: 'Великолепно, восхитительно, впечатляюще и ещё много эпитетов на букву "В". Туры огонь',
          user_name: "Саша Смирнова",
          user_img: "testimonials-1-7.jpg",
        },
        {
          mark: 5,
          text: "Мяу, мяу, мяу, мяу, мяу, мяу, мяу, мяу, мяу, мяу, мяу, мяу, мяу, мяу, мяу, мяу, мяу, мяу, мяу, мяу мяу!",
          user_name: "Боня",
          user_img: "testimonials-1-8.jpg",
        },
        {
          mark: 5,
          text: "Отдыхала после тяжёлой сессии на Мальдивах с лучшими экскурсиями. Это было ВАУ",
          user_name: "Маша Коломина",
          user_img: "testimonials-1-9.jpg",
        },
      ];

      var len = users_feedback.length;
      for (var i = 0; i < len; i++) {
        var mark = users_feedback[i].mark;
        var text = users_feedback[i].text;
        var user_name = users_feedback[i].user_name;
        var user_img = users_feedback[i].user_img;

    
        let div_Item = document.createElement("div");
        div_Item.className = "item";
        let div_Single = document.createElement("div");
        div_Single.className = "testimonials-one__single";
        let div_Content = document.createElement("div");
        div_Content.className = "testimonials-one__content";
        let div_Stars = document.createElement("div");
        div_Stars.className = "testimonials-one__stars";
        for (let j = 0; j < mark; j++) {
            new_i = document.createElement("i")
            new_i.className = "fa fa-star";
            div_Stars.appendChild(new_i);
          }
    
        let div_Info = document.createElement("div");
        div_Info.className = "testimonials-one__info";
        let new_txt = document.createElement("p"); 
        let new_img = document.createElement("img"); 
        new_img.src = "assets/images/testimonials/"+user_img;
        let new_h = document.createElement("h3"); 
    
        div_Item.appendChild(div_Single);
        div_Single.appendChild(div_Content);
        div_Content.appendChild(div_Stars);
        div_Content.appendChild(new_txt);
        new_txt.innerHTML = text;
        div_Single.appendChild(div_Info);
        div_Info.appendChild(new_img);
        div_Info.appendChild(new_h);
        new_h.innerHTML = user_name;
      
        document.getElementsByClassName("testimonials-one__carousel")[0].appendChild(div_Item);
    }
       tours_list = [
            {
                'mark' : '9.0 Superb',
                'tour_name' : 'Machu Picchu historical road',
                'cost' : "$3800",
                'long' : '4',
                'age' : '14+',
                'place' : 'Cusco Region, Peru',
                'tour_img' : 'tour-1-1.jpg'
            },

            {
                'mark' : '8.0 Superb',
                'tour_name' : 'Saint-Petersburg sights',
                'cost' : "$900",
                'long' : '3',
                'age' : '15+',
                'place' : 'Saint-Petersburg, Russia',
                'tour_img' : 'tour-1-2.jpg'
            },

            {
                'mark' : '7.0 Superb',
                'tour_name' : 'Moscow sights',
                'cost' : "$1299",
                'long' : '4',
                'age' : '15+',
                'place' : 'Moscow. Russia',
                'tour_img' : 'tour-1-3.jpg'
            },
            
            {
                'mark' : '8.8 Superb',
                'tour_name' : 'Wonderland',
                'cost' : "$1870",
                'long' : '3',
                'age' : '12+',
                'place' : 'Koln, Germany',
                'tour_img' : 'tour-1-4.jpg'
            },
            
            {
                'mark' : '8.5 Superb',
                'tour_name' : 'Castles and Earldoms',
                'cost' : "$1999",
                'long' : '5',
                'age' : '12+',
                'place' : 'Praga, Czech',
                'tour_img' : 'tour-1-5.jpg'
            },
            
            {
                'mark' : '8.0 Superb',
                'tour_name' : 'Disco Style City',
                'cost' : "$3599",
                'long' : '5',
                'age' : '18+',
                'place' : 'San-Francisco, USA',
                'tour_img' : 'tour-1-6.jpg'
            },
            
            {
                'mark' : '8.9 Superb',
                'tour_name' : 'Kangaroo & Theater',
                'cost' : "$4400",
                'long' : '5',
                'age' : '13+',
                'place' : 'Canberra, Australia',
                'tour_img' : 'tour-1-7.jpg'
            },
            
            {
                'mark' : '8.7 Superb',
                'tour_name' : 'Magic of Italy pizza',
                'cost' : "$1870",
                'long' : '4',
                'age' : '12+',
                'place' : 'Rome, Italy',
                'tour_img' : 'tour-1-8.jpg'
            },
            
            {
                'mark' : '9.0 Superb',
                'tour_name' : 'Gods and Vine',
                'cost' : "$1970",
                'long' : '5',
                'age' : '14+',
                'place' : 'Athens, Greece',
                'tour_img' : 'tour-1-9.jpg'
            },
            
        ];
    
        var leng = tours_list.length;
        for(var i=0; i<leng; i++) {
            var mark = tours_list[i].mark;
            var long = tours_list[i].long;
            var age = tours_list[i].age;
            var place = tours_list[i].place;
            var tour_name = tours_list[i].tour_name;
            var tour_img = tours_list[i].tour_img;
            var cost = tours_list[i].cost;
    
            let div_Items = document.createElement("div");
            div_Items.className = "item";
            let div_Single_tour = document.createElement("div");
            div_Single_tour.className = "tour-one__single";
            let div_img = document.createElement("div");
            div_img.className = "tour-one__image";
            let div_cont = document.createElement("div");
            div_cont.className = "tour-one__content";
            let div_strs = document.createElement("div");
            div_strs.className = "tour-one__stars";
            let new_image = document.createElement("img"); 
            new_image.src = "assets/images/tour/"+tour_img;
            let create_a = document.createElement('a');
            create_a.setAttribute('href', "tour-details-2.html");
            let i_heart = document.createElement("i");
            i_heart.className = "fa fa-heart";
            let i_clock = document.createElement("i");
            i_clock.className = "far fa-clock";
            let i_user = document.createElement("i");
            i_user.className = "far fa-user-circle";
            let i_map = document.createElement("i");
            i_map.className = "far fa-map";
            let new_ul = document.createElement('ul');
            let new_text = document.createElement("p"); 
            let new_hh = document.createElement("h3"); 
            let new_place = document.createElement("a");
            let new_age = document.createElement("a");
            let new_long = document.createElement("a");
        
            div_Items.appendChild(div_Single_tour);
                div_Single_tour.appendChild(div_img);
                    div_img.appendChild(new_image);
                    div_img.appendChild(create_a);
                        create_a.appendChild(i_heart);
                 div_Single_tour.appendChild(div_cont);
                    div_cont.appendChild(div_strs);
                        div_strs.appendChild(new_i);
                    div_cont.appendChild(new_hh);
                        new_hh.appendChild(create_a);
                            create_a.innerHTML = tour_name;
                    div_cont.appendChild(new_text);
                  new_text.innerHTML = cost + ' per Person';
             
                    let first_li = document.createElement("li");
                    let first_a = document.createElement('a');
                    first_a.setAttribute('href', "tour-details-2.html");
                        first_li.appendChild(first_a);
                            first_a.appendChild(i_clock);
                                new_long.innerHTML = long;
                                first_a.appendChild(new_long);
                            
                    let second_li = document.createElement("li");
                    let second_a = document.createElement('a');
                    second_a.setAttribute('href', "tour-details-2.html");
                    new_ul.className = "tour-one__meta list-unstyled"
                    second_li.appendChild(second_a);
                        second_a.appendChild(i_user);
                            new_age.innerHTML = age;
                            second_a.appendChild(new_age);

                    let third_li = document.createElement("li");
                    let third_a = document.createElement('a');
                    third_a.setAttribute('href', "tour-details-2.html");
                    third_li.appendChild(third_a);
                        third_a.appendChild(i_map);
                            new_place.innerHTML = place;
                            third_a.appendChild(new_place);
        
                    new_ul.appendChild(first_li);
                    new_ul.appendChild(second_li);
                    new_ul.appendChild(third_li);
                    div_cont.appendChild(new_ul);
          
            document.getElementsByClassName("tour-one__carousel")[0].appendChild(div_Items);


     };

    
    "use strict";


    if ($('.mc-form').length) {

        $('.mc-form').each(function () {
            var Self = $(this);
            var mcURL = Self.data('url');
            var mcResp = Self.parent().find('.mc-form__response');

            $(this).on('submit', function (event) {
            event.preventDefault();
                // these IDs from the previous steps
                emailjs.sendForm('service_gie79wm', 'template_rdeanax', '.mailchimp-one__form')
                    .then(function() {
                        mcResp.append(function () {
                            return '<p class="mc-message">' + 'congratulation' + '</p>';
                        })
                        console.log('SUCCESS!');
                        Self.removeClass('errored').addClass('successed');
                        mcResp.removeClass('errored').addClass('successed');
                        Self.find('input').val('');

                        mcResp.find('p').fadeOut(10000);
                    }, function(error) {
                        mcResp.append(function () {
                            return '<p class="mc-message">' + 'Error!' + '</p>';
                        })
                        console.log('FAILED...', error);
                        Self.removeClass('successed').addClass('errored');
                        mcResp.removeClass('successed').addClass('errored');
                        Self.find('input').val('');

                        mcResp.find('p').fadeOut(10000);
                    });
            });
        });
    }

    //Submenu Dropdown Toggle

    if ($('.main-nav__main-navigation li.dropdown ul').length) {
        $('.main-nav__main-navigation li.dropdown').children('a').append('<button class="dropdown-btn"><i class="fa fa-angle-right"></i></button>');
    }

    // mobile menu

    if ($('.main-nav__main-navigation').length) {
        let mobileNavContainer = $('.mobile-nav__container');
        let mainNavContent = $('.main-nav__main-navigation').html();

        mobileNavContainer.append(mainNavContent);

        //Dropdown Button
        mobileNavContainer.find('li.dropdown .dropdown-btn').on('click', function (e) {
            $(this).toggleClass('open');
            $(this).parent().parent().children('ul').slideToggle(500);
            e.preventDefault();
        });

    }


    if ($('.side-menu__toggler').length) {
        $('.side-menu__toggler').on('click', function (e) {
            $('.side-menu__block').toggleClass('active');
            e.preventDefault();
        });
    }

    if ($('.side-menu__block-overlay').length) {
        $('.side-menu__block-overlay').on('click', function (e) {
            $('.side-menu__block').removeClass('active');
            e.preventDefault();
        });
    }


    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

            return false;

        });
    }
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', 
            animateClass: 'animated',
            offset: 250, 
            mobile: true, 
            live: true 
        });
        wow.init();
    }

    function SmoothMenuScroll() {
        var anchor = $('.scrollToLink');
        if (anchor.length) {
            anchor.children('a').bind('click', function (event) {
                if ($(window).scrollTop() > 10) {
                    var headerH = '67';
                } else {
                    var headerH = '100';
                }
                var target = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(target.attr('href')).offset().top - headerH + 'px'
                }, 1200, 'easeInOutExpo');
                anchor.removeClass('current');
                target.parent().addClass('current');
                event.preventDefault();
            });
        }
    }
    SmoothMenuScroll();

    function OnePageMenuScroll() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            var menuAnchor = $('.one-page-scroll-menu .scrollToLink').children('a');
            menuAnchor.each(function () {
                // grabing section id dynamically
                var sections = $(this).attr('href');
                $(sections).each(function () {
                    // checking is scroll bar are in section
                    if ($(this).offset().top <= windscroll + 100) {
                        // grabing the dynamic id of section
                        var Sectionid = $(sections).attr('id');
                        // removing current class from others
                        $('.one-page-scroll-menu').find('li').removeClass('current');
                        // adding current class to related navigation
                        $('.one-page-scroll-menu').find('a[href*=\\#' + Sectionid + ']').parent().addClass('current');
                    }
                });
            });
        } else {
            $('.one-page-scroll-menu li.current').removeClass('current');
            $('.one-page-scroll-menu li:first').addClass('current');
        }
    }
    if ($('.search-popup__toggler').length) {
        $('.search-popup__toggler').on('click', function (e) {
            $('.search-popup').addClass('active');
            e.preventDefault();
        });
    }

    if ($('.search-popup__overlay').length) {
        $('.search-popup__overlay').on('click', function (e) {
            $('.search-popup').removeClass('active');
            e.preventDefault();
        });
    }
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    }


    if ($('.img-popup').length) {
        var groups = {};
        $('.img-popup').each(function () {
            var id = parseInt($(this).attr('data-group'), 10);

            if (!groups[id]) {
                groups[id] = [];
            }

            groups[id].push(this);
        });


        $.each(groups, function () {

            $(this).magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: {
                    enabled: true
                }
            });

        });

    };

    if ($('[data-toggle="tooltip"]').length) {
        $('[data-toggle="tooltip"]').tooltip();
    }


    $(window).on('scroll', function () {
        if ($('.stricked-menu').length) {
            var headerScrollPos = 100;
            var stricky = $('.stricked-menu');
            if ($(window).scrollTop() > headerScrollPos) {
                stricky.addClass('stricky-fixed');
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass('stricky-fixed');
            }
        }
        OnePageMenuScroll();
        if ($('.scroll-to-top').length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
                $('.scroll-to-top').fadeIn(500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                $('.scroll-to-top').fadeOut(500);
            }
        }

    });
    $(window).on('load', function () {
        
        if ($('.tour-details__gallery-thumb-carousel').length) {
            var testimonialsTwoThumbCarousel = new Swiper('.tour-details__gallery-thumb-carousel', {
                slidesPerView: 5,
                spaceBetween: 10,
                mousewheel: true,
                speed: 1400,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                loop: true,
                autoplay: {
                    delay: 5000,
                },
            });
        }

        if ($('.tour-details__gallery-carousel').length) {
            var testimonialsTwoCarousel = new Swiper('.tour-details__gallery-carousel', {
                observer: true,
                observeParents: true,
                speed: 1400,
                mousewheel: false,
                autoplay: {
                    delay: 5000
                },
                thumbs: {
                    swiper: testimonialsTwoThumbCarousel
                }
            });
        }
        if ($('.thm__owl-carousel').length) {
            $('.thm__owl-carousel').each(function () {
                var Self = $(this);
                var carouselOptions = Self.data('options');
                var carouselPrevSelector = Self.data('carousel-prev-btn');
                var carouselNextSelector = Self.data('carousel-next-btn');
                var thmCarousel = Self.owlCarousel(carouselOptions);
                if (carouselPrevSelector !== undefined) {
                    $(carouselPrevSelector).on('click', function () {
                        thmCarousel.trigger('prev.owl.carousel');
                        return false;
                    });
                }
                if (carouselNextSelector !== undefined) {
                    $(carouselNextSelector).on('click', function () {
                        thmCarousel.trigger('next.owl.carousel');
                        return false;
                    });
                }
            });
        }

        if ($('.side-menu__block-inner').length) {
            $('.side-menu__block-inner').mCustomScrollbar({
                axis: 'y',
                theme: 'dark'
            });
        }

        if ($('.custom-cursor__overlay').length) {

            // / cursor /
            var cursor = $(".custom-cursor__overlay .cursor"),
                follower = $(".custom-cursor__overlay .cursor-follower");

            var posX = 0,
                posY = 0;

            var mouseX = 0,
                mouseY = 0;

            TweenMax.to({}, 0.016, {
                repeat: -1,
                onRepeat: function () {
                    posX += (mouseX - posX) / 9;
                    posY += (mouseY - posY) / 9;

                    TweenMax.set(follower, {
                        css: {
                            left: posX - 22,
                            top: posY - 22
                        }
                    });

                    TweenMax.set(cursor, {
                        css: {
                            left: mouseX,
                            top: mouseY
                        }
                    });

                }
            });

            $(document).on("mousemove", function (e) {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                mouseX = e.pageX;
                mouseY = e.pageY - scrollTop;
            });
            $("button, a").on("mouseenter", function () {
                cursor.addClass("active");
                follower.addClass("active");
            });
            $("button, a").on("mouseleave", function () {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
            $(".custom-cursor__overlay").on("mouseenter", function () {
                cursor.addClass("close-cursor");
                follower.addClass("close-cursor");
            });
            $(".custom-cursor__overlay").on("mouseleave", function () {
                cursor.removeClass("close-cursor");
                follower.removeClass("close-cursor");
            });
        }
        if ($('.preloader').length) {
            $('.preloader').fadeOut();
        }

        if ($('.countdown-one__list').length) {
            $('.countdown-one__list').countdown({
                date: "June 7, 2020 15:03:25",
                render: function (date) {
                    this.el.innerHTML =
                        "<li> <div class='days'> <i>" + date.days + "</i> <span>Days</span> </div> </li>" +
                        "<li> <div class='hours'> <i>" + date.hours + "</i> <span>Hours</span> </div> </li>" +
                        "<li> <div class='minutes'> <i>" + date.min + "</i> <span>Minutes</span> </div> </li>" +
                        "<li> <div class='seconds'> <i>" + date.sec + "</i> <span>Seconds</span> </div> </li>";
                }
            });
        }

        if ($('.masonary-layout').length) {
            $('.masonary-layout').isotope({
                layoutMode: 'masonry',
                itemSelector: '.masonary-item',

            });
        }

        if ($('.post-filter').length) {
            var postFilterList = $('.post-filter li');
            // for first init
            $('.filter-layout').isotope({
                filter: '.filter-item',
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            // on click filter links
            postFilterList.on('click', function () {
                var Self = $(this);
                var selector = Self.attr('data-filter');
                postFilterList.removeClass('active');
                Self.addClass('active');


                $('.filter-layout').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 500,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        }

        if ($('.banner-two__bg').length) {
            $('.banner-two__bg-inner').each(function () {
                var test = { "delay": 5000, "slides": [ { "src": "assets/images/backgrounds/banner-2-bg-1.jpg" }, { "src": "assets/images/backgrounds/banner-2-bg-2.jpg" }, { "src": "assets/images/backgrounds/banner-2-bg-3.jpg" } ], "transition": "fade", "timer": false };
                var Self = $(this);
                var bgSlideOptions = Self.data('options');
                var bannerTwoSlides = Self.vegas(bgSlideOptions);
            });
        }

        if ($('.home-5__bg').length) {
            $('.home-5__bg-inner').each(function () {
                var Self = $(this);
                var bgSlideOptions = Self.data('options');
                var bannerTwoSlides = Self.vegas(bgSlideOptions);
            });
        }

    });

    $("#when").datepicker({
        container:$("#date-wrap")
    })


})(jQuery);