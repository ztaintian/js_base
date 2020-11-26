
        //全局变量
        var isRank = false;
        var isTop11 = false;
        var currentState = 'final'; //强制跳转开关='final'强制跳转
        var isBackToDroiyan = localStorage.getItem('isBackToDroiyan') || '';
        var isChecked = getCookie('yinsi') == '1' ? true : false;
        var saveLinkLock = false;
        var link = '';
        var weixinShare = null;
        var joinid = localStorage.getItem('isShowWg') || '';
        var stname = localStorage.getItem('isShowName') || '';
        const shareJid = GetUrlParameters("jid");
        const wxShareJid = GetUrlParameters("wxjid");

        //初始化
        $(function () {
            $('#f5').removeClass('bg-final-1');
            $('#f5').addClass('bg-final-3');
        })

        

        //方法定义
        function initFinalSection1() {
            $(".section1").show();
            $(".section2").hide();
            getFinalAdData()
            getDroiyanList((res) => { updateDroiyanList(res) });



            $('.yinsi input[type=checkbox]').change(function () {

                if ($(this).prop('checked')) {
                    $('#btgray').attr('src', '/Content/MyjobXJD/img/jdfs_btn_05.png');
                    setCookie('yinsi', '1', 'd1');
                    $('#btgray').css('pointer-events', 'all');
                } else {
                    $('#btgray').attr('src', '/Content/MyjobXJD/img/jdfs_btn_06.png');
                    setCookie('yinsi', '0', 'd1');
                    $('#btgray').css('pointer-events', 'none');
                }
            });
        }

        function finalSearch() {
            getDroiyanList((res) => { updateDroiyanList(res) }, { searchKey: $("#finalIput").val() });
        }

        //function getSecondState() {
        function getDroiyanState() {
            $.ajax({
                type: "POST",
                url: htApi + '/Students/MyJobXJD/DroiyanState',
                data: {},
                dataType: 'json',
                timeout: 30000,
                xhrFields: {
                    withCredentials: true // 这里设置了withCredentials
                },
                beforeSend: function () {

                },
                success: function (message) {
                    if (message.ErrorCode == -1) {
                            showFinalStateContainer('off');

                        $('#btgray').on('click', function () {
                            localStorage.setItem('isBackToDroiyan', 'upload');
                                var url = window.location.href;
                                location.href = loginwxurl + url;
                            });
                    } else {
                        switch (message.Data) {
                            case 0://游客
                                if (isBackToDroiyan =='upload') {
                                    showDialog('commondialog');
                                    $('#commondialog .dialog-body p').html('很抱歉您暂未晋级复赛，感谢您对本<br>次大赛的关注！期待您的下次参与！');
                                    localStorage.removeItem('isBackToDroiyan');
                                }
                                showFinalStateContainer('off');
                                $('#btgray').on('click', function () {
                                    showDialog('commondialog');
                                    $('#commondialog .dialog-body p').html('很抱歉您暂未晋级复赛，感谢您对本<br>次大赛的关注！期待您的下次参与！');
                                });
                            break;
                        case 1://初赛晋级
                            if (message.Data2 == null || message.Data2 == '') {
                                    showFinalStateContainer('on');
                            } else {
                                showFinalStateContainer('already');
                                $('input[name=url]').val(message.Data2);
                            }
                            break;
                            case 2://初赛未通过
                                if (isBackToDroiyan == 'upload') {
                                    showDialog('commondialog');
                                    $('#commondialog .dialog-body p').html('很抱歉您暂未晋级复赛，感谢您对本<br>次大赛的关注！期待您的下次参与！');
                                    localStorage.removeItem('isBackToDroiyan');
                                }
                                showFinalStateContainer('off');
                                 $('#btgray').on('click', function () {
                                showDialog('commondialog');
                                $('#commondialog .dialog-body p').html('很抱歉您暂未晋级复赛，感谢您对本<br>次大赛的关注！期待您的下次参与！');
                            });
                            break;
                        }
                        //页面返回后跳转
                        if (isBackToDroiyan == 'upload') {
                            $.scrollTo('#introFlg', 800)
                            localStorage.removeItem('isBackToDroiyan')
                        } else if (isBackToDroiyan == 'weiguan' && stname != null && islogin == 'True') {
                            showDialog('yywgdialog');
                            $('#yywgdialog .dialog-body p').html('感谢您对' + stname + '同学的支持！您将预约<br>围观' + stname + '同学于晚上19:00的直播带货，<br>系统会在直播开始前1小时，以短信<br>形式提醒您，是否确认预约？');
                            $.scrollTo('#finalList', 800);
                            localStorage.removeItem('isBackToDroiyan');
                            localStorage.removeItem('isShowWg');
                            localStorage.removeItem('isShowName');
                        }
                    }

                },
                error: function () {

                }
            });
        }

    //点击上传
    function saveLink() {
        link = $('#url').val();

        if (link=='') {
            alert('请完整填写直播地址!');
        } else {
            showDialog('submittips2');

        }
    }

    //提交链接
    function submitLinkData() {
        if (!saveLinkLock) {
            $.ajax({
                type: "POST",
                url: "https://htapidev.myjob500.com" + '/Students/MyJobXJD/SaveDroiyanLink',
                data: {
                    'link':link
                },
                dataType: 'json',
                timeout: 30000,
                xhrFields: {
                    withCredentials: true // 这里设置了withCredentials
                },
                beforeSend: function () {
                    saveLinkLock = true;
                },
                success: function (message) {
                    saveLinkLock = false;


                    if (message.IsSuccess) {
                        if (message.Data == 1) { //release
                            $('input[name=url]').val(link);
                            showFinalStateContainer('already');
                            hideDialog();
                            //showDialog('submittips3');
                        }

                    } else {
                        switch (message.ErrorCode) {//-1 未登录  1未报名  2 初赛未通过
                            case -1:
                                var url = window.location.href;
                                location.href = loginwxurl + url;

                                break;
                            case 1:
                                showFinalStateContainer('off');
                                break;
                            case 2:
                                showFinalStateContainer('off');
                                break;
                        }
                    }
                },
                error: function () {
                    saveLinkLock = false;
                }
            });
        }
        }

        function showVoteDialog(tempdata) {
        let tempHtml = `<div class="head-box">
                    <img class="border" src="/Content/MyjobXJD/img/jd3_border.png">
                    <div class="btn ${tempdata.LiveStatus2 == 1 ? 'comingsoon' : 'living'}">
                        ${tempdata.LiveStatus2 == 1 ? tempdata.LiveStatus1Show : ''}</div>
                    <img class="imgfix" src="${tempdata.Photo}">
                </div>
                <div class="txt-box">
                    ${tempdata.Name}<br>
                    ${tempdata.SchoolNameText}
                </div>`
            $("#finalVote .show-box").empty().html(tempHtml);

            let title = tempdata.LiveStatus2 == 1 ? `为${tempdata.Name}助力加油` : `${tempdata.Name}正在直播中`;
            let content = tempdata.LiveStatus2 == 1 ? `${tempdata.Name}即将在京东直播间内进行终极PK直播带货，快来围观TA吧~` : `${tempdata.Name}正在京东直播间PK直播带货，支持TA就来买买买吧！`;

            $("#finalVote #diaSupport").on("click", function () { finalSupport(title, content, tempdata.JoinId) })
        showDialog("finalVote");
    }

    function finalSupport(title,content,jid) {
        weixinShare = new WeixinShare({
            title: title,
            content: content,
            linkUrl: location.protocol + '//' + document.domain + '/MyjobXJD/Droiyan?wxjid=' + jid,
            imgUrl: location.protocol + '//' + document.domain + '/Content/MyjobXJD/img/share.png',
            appId: 'wx44fcc3567cc76949',
            debug: false,
            timestamp: '1606304800',
            nonceStr: '287875',
            signature: '143114fbdfa7c062106cc11a6a3ef89983ba7da3',
            shareAppMessageCompleteCallback: function () {
                //ShareBack()
            },
            shareTimelineCompleteCallback: function () {
                //ShareBack()
            }
        });
        
        hideDialog();
        showShareDialog("mask3");
    }

    function resetShare() {
        weixinShare = new WeixinShare({
            title: '京致星榜Young第三季2020校园美妆主播大赛！',
            content: '专属主播签约，实习offer递上，万元京东E卡，知名主播导师助阵，这一切，只差你！',
            linkUrl: location.protocol + '//' + document.domain + '/MyjobXJD/Droiyan',
            imgUrl: location.protocol + '//' + document.domain + '/Content/MyjobXJD/img/share.png',
            appId: 'wx44fcc3567cc76949'…