
    $(()=>{

        $('.btn-up').hide();

        $(window).scroll(()=>{
            
            if( $(window).scrollTop() > 500){

                $('nav').addClass('red darken-3');
                $('nav').removeClass('white');

                $('nav ul li a').css({'color':'white'});

                $('.mi-nav').addClass('navbar-fixed');

                $('.btn-up').show(1000);+

                $('.dropdown-itemss').css({'color':'black'});

                $('#btn-social-net').hide(1000);
                
            }else if( $(window).scrollTop() < 500){

                $('nav').addClass('white');
                $('nav').removeClass('red darken-3');

                $('nav ul li a').css({'color':'rgb(1, 87, 155)'});

                $('.mi-nav').removeClass('navbar-fixed');

                $('.btn-up').hide(1000);
                $('#btn-social-net').show(1000);

                

            }
        });

        $('.btn-up').click(()=>{

            $('html').animate( { scrollTop : 0 }, 2500 );
            
        });

        
        $('.btn-info').click(()=>{
            $('.tap-target').tapTarget('open');
        });

        $('.area-legal').click(
            ()=>{
                
                $('ul li ul li .area-legal').removeClass('d-none');
                console.log('clisck');
                
            }
        );
         
    });