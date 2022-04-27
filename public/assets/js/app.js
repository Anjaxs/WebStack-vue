$(document).ready(function () {
    $(document).on('click', '.has-sub', function () {
        var _this = $(this)
        if (!$(this).hasClass('expanded')) {
            setTimeout(function () {
                _this.find('ul').attr("style", "")
            }, 300);

        } else {
            $('.has-sub ul').each(function (id, ele) {
                var _that = $(this)
                if (_this.find('ul')[0] != ele) {
                    setTimeout(function () {
                        _that.attr("style", "")
                    }, 300);
                }
            })
        }
    })
    $('.user-info-menu .hidden-sm').click(function () {
        if ($('.sidebar-menu').hasClass('collapsed')) {
            $('.has-sub.expanded > ul').attr("style", "")
        } else {
            $('.has-sub.expanded > ul').show()
        }
    })
    $("#main-menu li ul li").click(function () {
        $(this).siblings('li').removeClass('active'); // 删除其他兄弟元素的样式
        $(this).addClass('active'); // 添加当前元素的样式
    });

    return false;
});
