var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

var ElementCursor = {
    cursorElement: "",
    setCursor: function (cursorId) {
        $('html').css({
            'cursor': 'none'
        });
        $('html').mousedown(function (e) {return false;});
        ElementCursor.cursorElement = cursorId;
        ElementCursor.updateCursor();
    },
    removeCursor: function () {
        $('html').css({
            'cursor': ''
        });
        ElementCursor.cursorElement = '';
    },
    updateCursor: function () {
        $(document).mousemove(function (e) {
            $('#' + ElementCursor.cursorElement).css({
                'position': 'fixed',
                    'top': e.pageY + 'px',
                    'left': e.pageX + 'px'
            });
        });
    }
};

ElementCursor.setCursor("cursor");