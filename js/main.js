$(function() {
    $('[data-toggle="tooltip"]').tooltip();

    /////////////////////////// تمكين السحب والإفلات لعناصر القائمة الرئيسية
    if ($("#sortable").val() !== undefined) {
        $("#sortable").sortable();
        $("#sortable").disableSelection();
    }
});

$(document).ready(function() {
    /////////////////////////// الإعدادات الافتراضية للجداول
    $.extend(true, $.fn.dataTable.defaults, {
        // "dom": "lfrtip",
        // "dom": '<"row" <"col-sm-6" i> <"col-sm-6" f>> r t l p',
        // searching: false,
        // ordering:  false,
        // "stateSave": true,
        "order": [],
        "pagingType": "full_numbers",
        "language": {
            "decimal":        "",
            "emptyTable":     "لا توجد بيانات متاحة في الجدول",
            // "info": "عرض _PAGE_ من _PAGES_ صفحة",
            // "info": "عرض _START_ إلى _END_ عنصر، من إجمالي _TOTAL_ عنصر",
            "info": "_END_ من _TOTAL_ عنصر",
            // "infoEmpty":      "عرض 0 إلى 0 من 0 عنصر",
            "infoEmpty": "",
            "infoFiltered": "(تمت التصفية من بين _MAX_ إجمالي العناصر)",
            "infoPostFix":    "",
            "thousands":      ",",
            "lengthMenu": "عرض _MENU_ في الصفحة",
            "loadingRecords": "تحميل...",
            "processing":     "جاري المعالجة...",
            "search":         "بحث: ",
            "zeroRecords":    "لا يوجد نتائج متطابقة",
            "paginate": {
                "first":      "<<",
                "last":       ">>",
                "next":       ">",
                "previous":   "<"
            },
            "aria": {
                "sortAscending":  ": تفعيل الفرز التصاعدي",
                "sortDescending": ": تفعيل الفرز التنازلي"
            }
        }
    });

    /////////////////////////// إعدادات وتفعيل جدول التصنيفات
    $('#categoriesTable').DataTable({
        // fixedHeader: {
            // header: true,
            // footer: true
        // },
        "columnDefs": [
            { "orderable": false, "targets": 0 },
            { "orderable": false, "targets": 5 },
            { "searchable": false, "targets": 0 },
            { "searchable": false, "targets": 4 },
            { "searchable": false, "targets": 5 }
        ]
    });

    /////////////////////////// إعدادات وتفعيل جدول كُتاب المقالات
    $('#writersTable').DataTable({
        "columnDefs": [
            { "orderable": false, "targets": 0 },
            { "orderable": false, "targets": 4 },
            { "orderable": false, "targets": 5 },
            { "searchable": false, "targets": 0 },
            { "searchable": false, "targets": 3 },
            { "searchable": false, "targets": 4 },
            { "searchable": false, "targets": 5 }
        ]
    });

    /////////////////////////// إعدادات وتفعيل جدول المحتويات
    var tablePosts = $("#postsTable").DataTable({
        "columnDefs": [
            { "orderable": false, "targets": 0 },
            { "orderable": false, "targets": 8 },
            { "searchable": false, "targets": 0 },
            // { "searchable": false, "targets": 4 },
            { "searchable": false, "targets": 5 },
            { "searchable": false, "targets": 6 },
            { "searchable": false, "targets": 8 }
        ],
        /* فلتر تصفية جدول المحتويات أسفل الجدول بحسب الأعمدة */
        /*initComplete: function(){
            this.api().columns([1, 2]).every(function(){
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo($(column.footer()).empty())
                    .on('change', function(){
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );
 
                        column
                            .search(val ? '^'+val+'$' : '', true, false)
                            .draw();
                    });
                    $(select).click(function(e){
                        e.stopPropagation();
                  });
                column.data().unique().sort().each(function(d, j){
                    d = d.replace(/<[^>]*>/g, "");
                    select.append("<option value='" + d + "'>" + d + "</option>");
                });
            });
        }*/
    });

    ///////////////////////// إعدادات وتفعيل جدول الصفحات
    var tablePages = $("#pagesTable").DataTable({
        "columnDefs": [
            { "orderable": false, "targets": 0 },
            { "orderable": false, "targets": 6 },
            { "searchable": false, "targets": 0 },
            { "searchable": false, "targets": 4 },
            { "searchable": false, "targets": 5 },
            { "searchable": false, "targets": 6 }
        ]
    });

    /////////////////////////// إعدادات وتفعيل جدول مكتبة الوسائط
    var tableMedia = $("#mediaTable").DataTable({
        "columnDefs": [
            { "orderable": false, "targets": 0 },
            { "orderable": false, "targets": 5 },
            { "searchable": false, "targets": 0 },
            { "searchable": false, "targets": 5 }
        ]
    });

    /////////////////////////// إعدادات وتفعيل جدول الإعلانات
    var tableAds = $("#adsTable").DataTable({
        "columnDefs": [
            { "orderable": false, "targets": 0 },
            { "orderable": false, "targets": 8 },
            { "searchable": false, "targets": 0 },
            { "searchable": false, "targets": 5 },
            { "searchable": false, "targets": 6 },
            { "searchable": false, "targets": 8 }
        ]
    });

    /////////////////////////// إعدادات وتفعيل جدول التعليقات
    var tableComments = $("#commentsTable").DataTable({
        "columnDefs": [
            { "orderable": false, "targets": 0 },
            { "orderable": false, "targets": 2 },
            { "orderable": false, "targets": 6 },
            { "searchable": false, "targets": 0 },
            { "searchable": false, "targets": 4 },
            { "searchable": false, "targets": 6 }
        ]
    });

    /////////////////////////// إعدادات وتفعيل جدول الأعضاء
    var tableusers = $("#usersTable").DataTable({
        "columnDefs": [
            { "orderable": false, "targets": 0 },
            { "orderable": false, "targets": 6 },
            { "searchable": false, "targets": 0 },
            { "searchable": false, "targets": 5 },
            { "searchable": false, "targets": 6 }
        ]
    });

    /////////////////////////// فلاتر تصفية الجداول
    /* فلتر تصفية جدول المحتويات أعلى الجدول بحسب الأعمدة */
    /* $("#postsTable thead tr").clone().appendTo("#postsTable thead");
    $('#postsTable thead tr:eq(1) th').each(function(i){
        var select = $('<select><option value=""></option></select>').appendTo($(this).empty()).on('change', function(){
                tablePosts.column(i)
                .search($(this).val())
                .draw();
            });
            tablePosts.column(i).data().unique().sort().each(function(d, j){
                d = d.replace(/<[^>]*>/g, "");
                select.append("<option value='" + d + "'>" + d + "</option>");
            });
    }); */

    /* فلتر تصفية جدول المحتويات بحسب الاختيار المخصص فوق الجدول */
    function filter(table, colCate, colType, colUser, colDate) {

        /* فلتر تصفية جدول المحتويات بحسب التصنيف */
        $("#filter select.get-cate").append($('<option value="">جميع التصنيفات</option>')).on("change", function(){
            table.column(colCate) // column(2) This is the column number inside the table.
            .search($(this).val())
            .draw();
        });
        table.column(colCate).data().unique().sort().each(function(value, index){
            value = value.replace(/<[^>]*>/g, "");
            $("#filter select.get-cate").append("<option value='" + value + "'>" + value + "</option>");
        });

        /* فلتر تصفية جدول المحتويات بحسب النوع */
        $("#filter select.get-type").append($('<option value="">جميع الأنواع</option>')).on("change", function(){
            table.column(colType) // column(2) This is the column number inside the table.
            .search($(this).val())
            .draw();
        });
        table.column(colType).data().unique().sort().each(function(value, index){
            value = value.replace(/<[^>]*>/g, "");
            $("#filter select.get-type").append("<option value='" + value + "'>" + value + "</option>");
        });
        
        /* فلتر تصفية جدول المحتويات بحسب المحرر */
        $("#filter select.get-user").append($('<option value="">جميع المحررين</option>')).on("change", function(){
            table.column(colUser) // column(3) This is the column number inside the table.
            .search($(this).val())
            .draw();
        });
        table.column(colUser).data().unique().sort().each(function(value, index){
            value = value.replace(/<[^>]*>/g, "");
            $("#filter select.get-user").append("<option value='" + value + "'>" + value + "</option>");
        });
        
        /* فلتر تصفية جدول المحتويات بحسب التاريخ */
        $("#filter select.get-date").append($('<option value="">جميع التواريخ</option>')).on("change", function(){
            table.column(colDate) // column(4) This is the column number inside the table.
            .search($(this).val())
            .draw();
        });
        var months = [
            "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
        ];
        var ele = table.column(colDate).data().unique().sort();
        var newEle = ele.map(function(value, month, year){
                value = value.replace(/<[^>]*>/g, "");
                theDate = new Date(value);
                month = months[theDate.getMonth()];
                year = theDate.getFullYear();
                // return theDate == "Invalid Date" ? value : theDate.getFullYear() + "-" + (theDate.getMonth()+1);
                return theDate == "Invalid Date" ? value : month + ", " + year;
            });
        newEle.each(function(value, index){
            if (newEle.indexOf(value) === index) {
                var valueToArr = value.split(", ");
                var monthNum = months.indexOf(valueToArr[0]);
                function checkMonth(){return monthNum == -1 ? value : valueToArr[1] + "-" + (monthNum+1)};
                $("#filter select.get-date").append("<option value='" + checkMonth() + "'>" + 
                value + 
                "</option>");
            }
        });
    }

    if (tablePosts.column().data() !== undefined) {
        filter(tablePosts, 2, 7, 3, 4)
    }

    if (tableMedia.column().data() !== undefined) {
        filter(tableMedia, 0, 2, 4)
    }

    /////////////////////////// تحديد عناصر الجدول
    function showChecked(name, check) {
        var selectAll = document.querySelectorAll("table input");
        selectAll.forEach( x => {
            x.onchange = function() {
                if ($(this).is("#checkAll") || $(check).length === $(name).length) {
                    $("table :checkbox").prop("checked", $(this).prop("checked"));
                    $("#checkAll").prop("indeterminate", false);
                }
                else if ($(check).length > 0 && $(check).length < $(name).length) {
                    $("#checkAll").prop("indeterminate", true);
                    $("#checkAll").prop("checked", false);
                }
                else {
                    $("#checkAll").prop("indeterminate", false);
                    $("#checkAll").prop("checked", false);
                }

                if ($(check).length > 0) {
                    $(".alert.selected, .delete-items").fadeIn();
                    $(".alert.selected .count, .delete-items .count").text($(check).length);
                }
                else {
                    $(".alert.selected, .delete-items").fadeOut();
                }
            }
        });
    }

    /* تحديد عناصر جدول التصنيفات */
    $("#categoriesTable input:checkbox").click(function() {
        showChecked("input[name='cate[]']", "input[name='cate[]']:checked");
    });

    /* تحديد عناصر جدول المحتويات */
    $("#postsTable input:checkbox, #pagesTable input:checkbox, #adsTable input:checkbox").click(function() {
        showChecked("input[name='post[]']", "input[name='post[]']:checked");
    });

    /* تحديد عناصر جدول مكتبة الوسائط */
    $("#mediaTable input:checkbox").click(function() {
        showChecked("input[name='media[]']", "input[name='media[]']:checked");
    });

    /* تحديد عناصر جدول التعليقات */
    $("#commentsTable input:checkbox").click(function() {
        showChecked("input[name='comment[]']", "input[name='comment[]']:checked");
    });

    /* تحديد عناصر جدول الأعضاء */
    $("#usersTable input:checkbox").click(function() {
        showChecked("input[name='user[]']", "input[name='user[]']:checked");
    });

    /* إغلاق رسالة تنبيه العناصر المحددة */
    $(".alert.selected .close").click(function(){
        $(".alert.selected").fadeOut();
    });

    /////////////////////////// إظهار/إخفاء بوكس إضافة عنصر جديد في صفحة التصنيفات
    function checkAddItem() {
        $("a.btn[data-target='#addItem']").css("display") !== "none" ? $("#addItem").addClass("collapse") : $("#addItem").removeClass("collapse");
    };
    checkAddItem();
    $(window).resize(function(){
        checkAddItem();
    });

    /////////////////////////// إنشاء تسلسل هيكلي للعناصر الفرعية في جدول صفحة التصنيفات
    $("tr[level]").each(function(){
        var i = $(this).attr("level");
        var insert = "<i class='fas fa-long-arrow-alt-left mr-1 ml-" + i + "'></i>";
        if (i > 1) {
            for (var x = 1; x < i; x++) {
                insert += "<i class='fas fa-long-arrow-alt-left mx-1'></i>";
            }
        }
        $(this).find(".child-name").prepend(insert);
    });

    /////////////////////////// إنشاء تسلسل هيكلي للعناصر الفرعية في بوكس إضافة تصنيف جديد
    $("option[level]").each(function(){
        var i = $(this).attr("level");
        var insert = "&nbsp;&nbsp;";
        if (i > 1) {
            for (var x = 1; x < i; x++) {
                insert += "&nbsp;&nbsp;";
            }
        }
        $(this).prepend(insert);
    });
    /////////////////////////// إنشاء تسلسل هيكلي للعناصر الفرعية في بوكس قوائم الموقع
    $("li[level]").each(function(){
        var i = $(this).attr("level");
        var insert = "30px";
        if (i > 1) {
            for (var x = 1; x < i; x++) {
                insert += "30px";
            }
        }
        $(this).css("margin-right", insert);
    });

    /////////////////////////// تغيير ترتيب محتوى صفوف الجدول في وضع الجوال
    $("table tr").on("expanded", function(event){
        $(this).children("td.column-primary ~ td:not(.column-control)").toggleClass("d-block expanded")
    });
    $(".details").click(function(){
        $(this).trigger("expanded");
    })

    /////////////////////////// محرر النصوص في صفحة إضافة محتوى
    var config_ar = {
        ui : {
            // autoresize : true,
            locale : "ar", //sets the editor language to Arabic
            toolbar :  {
                items : [
                    'undo', 
                    'style', 
                    'emphasis', 
                    // 'language', 
                    {
                        label: 'group.language', items: ['ltrdir', 'rtldir']
                    },
                    'align', 
                    'listindent', 
                    'format', 
                    // 'tools', 
                    {
                        label: 'group.tools', items: ['find', 'fullscreen', 'usersettings']
                    },
                    'insert'
                ]
            }
        }
    };
    var config_en = {
        ui : {
            // autoresize : true,
            locale : "en", //sets the editor language to Arabic
            toolbar :  {
                items : [
                    'undo', 
                    'style', 
                    'emphasis', 
                    // 'language', 
                    {
                        label: 'group.language', items: ['ltrdir', 'rtldir']
                    },
                    'align', 
                    'listindent', 
                    'format', 
                    // 'tools', 
                    {
                        label: 'group.tools', items: ['find', 'fullscreen', 'usersettings']
                    },
                    'insert'
                ]
            }
        }

    };
    if ($("#textEditor-en").val() !== undefined) {
        var editor_en = textboxio.replaceAll("#textEditor-en", config_en);
    }
    if ($("#textEditor-ar").val() !== undefined) {
        var editor = textboxio.replaceAll("#textEditor-ar", config_ar);
    }

    /////////////////////////// إظهار وإخفاء العناصر في صفحة إضافة محتوى بحسب بنية المحتوى أو النموذج
    var postType = $("#postType");
    function elementCase(element, input, val){
        function checkArr(val) {
            if ($(postType).val() === val) {
                $(element).fadeIn();
                $(input).prop("disabled", false);
            }else {
                $(element).fadeOut();
                $(input).prop("disabled", true);
            }
        }
        if (typeof val === "object") {
            for (var i=0; i < val.length; i++) {
                checkArr(val[i]);
                if ($(postType).val() === val[i]) {
                    break
                }
            }
        }else {
            checkArr(val);
        }
    }
    
    // إظهار عنصر (مصدر الخبر) إذا كانت بنية المحتوى: خبر
    elementCase("#postSource", "#postSource input", "new");
    $("#postType").change(function(){
        elementCase("#postSource", "#postSource input", "new");
    });
    
    // إظهار عنصر (كاتب المقال) إذا كانت بنية المحتوى: مقال
    elementCase("#postWriter", "#postWriter select, #postWriter input", "artical");
    $("#postType").change(function(){
        elementCase("#postWriter", "#postWriter select, #postWriter input", "artical");
    });

    // إخفاء بوكس إضافة كاتب عند الضغط على أيقونة تعديل كاتب، والعكس
    // $("[data-target='#editWriter']").click(function(){
    //     $("#addWriter").removeClass("show");
    // });
    // $("[data-target='#addWriter']").click(function(){
    //     $("#editWriter").removeClass("show");
    // });

    // إظهار عنصر (معرض الصور) إذا كانت بنية المحتوى: معرض صور
    elementCase("#postGallery", "#postGallery input", "gallery");
    $("#postType").change(function(){
        elementCase("#postGallery", "#postGallery input", "gallery");
    });

    // إظهار عنصر (تضمين الفيديو) إذا كانت بنية المحتوى: فيديو
    elementCase("#postVideo", "#postVideo textarea", "video");
    $("#postType").change(function(){
        elementCase("#postVideo", "#postVideo textarea", "video");
    });
    
    // إظهار عنصر (تضمين الصوت) إذا كانت بنية المحتوى: صوت
    elementCase("#postAudio", "#postAudio textarea", "audio");
    $("#postType").change(function(){
        elementCase("#postAudio", "#postAudio textarea", "audio");
    });

    // إظهار عنصر (مصدر ورابط الصورة) إذا كان نوع الإعلان: صورة HTML
    elementCase("#postAdsImg", "#postAdsImg input", "image");
    $("#postType").change(function(){
        elementCase("#postAdsImg", "#postAdsImg input", "image");
    });
    
    // إظهار عنصر (كود الإعلان) إذا كان نوع الإعلان: جوجل أدسينس أو كود HTML
    elementCase("#postCode", "#postCode textarea", ["codeHTML", "googleAds"]);
    $("#postType").change(function(){
        elementCase("#postCode", "#postCode textarea", ["codeHTML", "googleAds"]);
    });


    /////////////////////////// إظهار وإخفاء بوكس التصنيفات إذا كان القالب شبكة مدونة أو وسائط عند إضافة صفحة جديدة
    function checkPostTemplate($this) {
        var textDefault = "*افتراضي: صفحة عادية فارغة بمحتوى يدوي.",
            textBlog = "يرجى اختيار التصنيفات التي ستعرض في الصفحة بتخطيط مدونة.",
            textMedia = "يرجى اختيار التصنيفات التي ستعرض في الصفحة بتخطيط وسائط.";
            textContactUs = "نموذج صفحة التواصل ومراسلة إدارة الموقع.";
        switch ($this.val()) {
            case "blog-grid":
            $(".categories").show();
            $this.next().text(textBlog);
                break;

            case "media-grid":
            $(".categories").show();
            $this.next().text(textMedia);
            break;

            case "contact-us":
            $(".categories").hide();
            $this.next().text(textContactUs);
            break;
            
            default:
            $(".categories").hide();
            $this.next().text(textDefault);
                break;
        }
    }
    checkPostTemplate($("#postTemplate"));
    $("#postTemplate").on("change", function() {
        checkPostTemplate($(this));
    })


    /////////////////////////// إضافة الصور المتعددة في بوكس معرض الصور وإظهارها مباشرةً
    $("#postGalleryImg").change(function(){
        var fReader = new FileReader();
        fReader.readAsDataURL(this.files[0]);
        $("#postGalleryContent").append("<span><img class='img-thumbnail my-2'><i class='fas fa-times-circle'></i></span>");
        var imgContent = $(this).parent().parent().find("img").last()[0];
        console.log($(this).parent().parent().find("img").last()[0]);
        fReader.onloadend = function(event){
            // var img = document.getElementById("postImgContent");
            imgContent.src = event.target.result;
        }
        $("#postGallery #postGalleryContent i").click(function(){
            // alert("hi");
            $(this).parent().remove();
        });
    })

    /////////////////////////// إضافة الصورة في بوكس الصورة البارزة وإظهارها مباشرةً
    $("#postImg, .postImg").change(function(){
        $(this).parent().parent().find("#postImgContent img").addClass("d-block").removeClass("d-none");
        $(this).parent().parent().find("#postImgContent i").remove();
        var fReader = new FileReader();
        fReader.readAsDataURL(this.files[0]);
        var imgContent = $(this).parent().parent().find("img")[0];
        fReader.onloadend = function(event){
            // var img = document.getElementById("postImgContent");
            imgContent.src = event.target.result;
        }
    })

    /////////////////////////// تعيين تاريخ النشر تلقائياً بحسب التاريخ والوقت الحالي
    var dateNow = new Date(),
        getHo = dateNow.getHours(),
        getMi = dateNow.getMinutes(),
        getYe = dateNow.getFullYear(),
        getMo = dateNow.getMonth() + 1,
        getDa = dateNow.getDate();
    $("#postDate").val(getYe + "-" + (0 + getMo.toString()).slice(-2) + "-" + (0 + getDa.toString()).slice(-2));
    $("#postTime").val((0 + getHo.toString()).slice(-2) + ":" + (0 + getMi.toString()).slice(-2));

    /////////////////////////// عرض كلمة المرور عند النقر على الأيقونة
    $(".showPassword").click(function(){
        var inputPass = $(this).parent().next();
        if(inputPass.prop("type") === "password") {
            inputPass.prop("type", "text");
            $(this).children().toggleClass("fa-eye fa-eye-slash")
        }
        else {
            inputPass.prop("type", "password");
            $(this).children().toggleClass("fa-eye fa-eye-slash")
        }
    })

    /////////////////////////// اللغة والترجمة
    // إضافة أيقونة لغة عنصر الإدخال EN
    $(".lang-ar input, .lang-ar textarea, .lang-en input, .lang-en textarea").each(function(){
        var lang = $(this).parent().hasClass("lang-ar") ? "ar" : "en";
        var rtl = $(this).parent().hasClass("lang-ar") ? "left" : "right";
        var outerHeight = $(this).outerHeight() > 38 ? 38 : $(this).outerHeight();
        $(this).parent().append("<span class='lang-name' style=" + 
        rtl + ":0;" +
        // "top:-" + outerHeight + "px;" + 
        "height:" + outerHeight + "px;" + 
        "width:" + outerHeight + "px;" + 
        "padding:" + outerHeight/6 + "px;>" + 
        lang + 
        "</span>");
    });
});