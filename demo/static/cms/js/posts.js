$(function () {
    $(".highlight-btn").click(function () {
        var self = $(this);
        var tr = self.parent().parent();
        var post_id = tr.attr("data-id");
        var highlight = parseInt(tr.attr("data-highlight"));
        var url = "";
        if(highlight){
            url = "/cms/uhpost/";
        }else{
            url = "/cms/hpost/";
        }
        bbsajax.post({
            'url': url,
            'data': {
                'post_id': post_id
            },
            'success': function (data) {
                if(data['code'] == 200){
                    xtalert.alertSuccessToast('操作成功！');
                    setTimeout(function () {
                        window.location.reload();
                    },500);
                }else{
                    xtalert.alertInfo(data['message']);
                }
            }
        });
    });
});

$(function () {
   $('.delete-post-btn').click(function () {
       var self = $(this);
       var tr = self.parent().parent();
       var post_id = tr.attr('data-id');

       bbsajax.post({
           'url': '/cms/dpost/',
           'data': {
               'post_id': post_id
           },
           'success': function (data) {
               if (data['code'] == 200) {
                   window.location.reload();
               } else {
                   xtalert.alertInfo(data['message'])
               }
           }
       });
   });
});