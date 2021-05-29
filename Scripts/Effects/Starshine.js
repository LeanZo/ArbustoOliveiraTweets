$(function () {
    var body = $('#starshine'),
        template = $('.template.shine'),
        stars = 500,
        sparkle = 20;


    var size = 'small';
    var cor = '';
    var createStar = function () {
        template.clone().removeAttr('id').css({
            top: (Math.random() * 100) + '%',
            left: (Math.random() * 100) + '%',
            webkitAnimationDelay: (Math.random() * sparkle) + 's',
            mozAnimationDelay: (Math.random() * sparkle) + 's'
        }).addClass(size).addClass(cor).appendTo(body);
    };

    for (var i = 0; i < stars; i++) {
        if (i % 2 === 0) {
            size = 'small';
            if((Math.random() * 100) > 80)
                cor = 'amarelo'
            else
                cor = ''
        } else if (i % 3 === 0) {
            size = 'medium';
            if((Math.random() * 100) > 60)
                cor = 'amarelo'
            else
                cor = '';
        } else {
            size = 'large';
            if((Math.random() * 100) > 90)
                cor = 'amarelo'
            else
                cor = '';
        }

        // if (cor == 'vermelho')
        //     cor = 'ciano';
        // else if (cor == 'ciano')
        //     cor = 'amarelo';
        //else 
        // if (cor == 'amarelo')
        //     cor = '';
        // else if (cor == '')
        // //     cor = 'rosa';
        // // else if (cor == 'rosa')
        //     cor = 'amarelo';

        createStar();
    }
});