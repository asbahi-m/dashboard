$(function() {
    $('[data-toggle="tooltip"]').tooltip();
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

    /////////////////////////// إعدادات وتفعيل جدول المحتويات
    var tablePosts = $("#postsTable").DataTable({
        "columnDefs": [
            { "orderable": false, "targets": 0 },
            { "orderable": false, "targets": 7 },
            { "orderable": false, "targets": 8 },
            { "searchable": false, "targets": 0 },
            // { "searchable": false, "targets": 4 },
            { "searchable": false, "targets": 5 },
            { "searchable": false, "targets": 6 },
            { "searchable": false, "targets": 7 },
            { "searchable": false, "targets": 8 },
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
    if (tablePosts.column().data() !== undefined) {
        /* فلتر تصفية جدول المحتويات بحسب التصنيف */
        $("#filter select.get-cate").append($('<option value="">جميع التصنيفات</option>')).on("change", function(){
            tablePosts.column(2) // column(2) This is the column number inside the table.
            .search($(this).val())
            .draw();
        });
        tablePosts.column(2).data().unique().sort().each(function(value, index){
            value = value.replace(/<[^>]*>/g, "");
            $("#filter select.get-cate").append("<option value='" + value + "'>" + value + "</option>");
        });
        
        /* فلتر تصفية جدول المحتويات بحسب المحرر */
        $("#filter select.get-user").append($('<option value="">جميع المحررين</option>')).on("change", function(){
            tablePosts.column(3) // column(3) This is the column number inside the table.
            .search($(this).val())
            .draw();
        });
        tablePosts.column(3).data().unique().sort().each(function(value, index){
            value = value.replace(/<[^>]*>/g, "");
            $("#filter select.get-user").append("<option value='" + value + "'>" + value + "</option>");
        });
        
        /* فلتر تصفية جدول المحتويات بحسب التاريخ */
        $("#filter select.get-date").append($('<option value="">جميع التواريخ</option>')).on("change", function(){
            tablePosts.column(4) // column(4) This is the column number inside the table.
            .search($(this).val())
            .draw();
        });
        var months = [
            "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
        ];
        var ele = tablePosts.column(4).data().unique().sort();
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

    /////////////////////////// تحديد عناصر الجدول
    function showChecked(name, check){
        var selectAll = document.querySelectorAll("table input");
        selectAll.forEach( x => {
            x.onchange = function() {
                if ($(this).is("#checkAll") || $(check).length === $(name).length) {
                    $("table :checkbox").prop("checked", $(this).prop("checked"));
                    $("#checkAll").prop("indeterminate", false);
                }
                else if ($(check).length > 0 && $(check).length < $(name).length) {
                    $("#checkAll").prop("indeterminate", true);
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
    $("#postsTable input:checkbox").click(function() {
        showChecked("input[name='post[]']", "input[name='post[]']:checked");
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
    $("#categoriesContent table tr").each(function(i){
        if (i > 0) {
            var insert = "<i class='fas fa-long-arrow-alt-left ml-1 mr-" + (1+i) + "'></i>";
            for (var x = 1; x < i ; x++) {
                insert += "<i class='fas fa-long-arrow-alt-left mx-1'></i>";
            }
            $("table tr.level-" + i + " .column-name").prepend(insert);
        }
    });

    /////////////////////////// إنشاء تسلسل هيكلي للعناصر الفرعية في بوكس إضافة تصنيف جديد
    $("#parent option").each(function(i, $this){
        if (i > 0) {
            var insert = "&nbsp;&nbsp;";
            for (var x = 1; x < i ; x++) {
                insert += "&nbsp;&nbsp;";
            }
            $("option.level-" + i).prepend(insert);
        }
    });

    /////////////////////////// تغيير ترتيب محتوى صفوف الجدول في وضع الجوال
    $("table tr").on("expanded", function(event){
        $(this).children("td.column-primary ~ td:not(.column-control)").toggleClass("d-block expanded")
    });
    $(".details").click(function(){
        $(this).trigger("expanded");
    })

    /////////////////////////// محرر النصوص في صفحة إضافة محتوى
    var config = {
        ui : {
            locale : 'ar', //sets the editor language to Arabic
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

    if ($("#textEditor") !== undefined) {

        var editor = textboxio.replace("#textEditor", config);
    }

    /////////////////////////// إظهار وإخفاء العناصر في صفحة إضافة محتوى بحسب بنية المحتوى أو النموذج
    var postTemplate = $("#postTemplate");
    function elementCase(element, input, val){
        function checkArr(val) {
            // var checkInput = input.prop("type");
            if ($(postTemplate).val() === val) {
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
                // alert("Object" + ": " + val[i]);
                if ($(postTemplate).val() === val[i]) {
                    break
                }
            }
        }else {
            checkArr(val);
            // alert("String");
        }
    }
    
    // إظهار عنصر (مصدر الخبر) إذا كانت بنية المحتوى: خبر
    elementCase("#postSource", "#postSource input", "new");
    $("#postTemplate").change(function(){
        elementCase("#postSource", "#postSource input", "new");
    });
    
    // إظهار عنصر (كاتب المقال) إذا كانت بنية المحتوى: مقال
    elementCase("#postWriter", "#postWriter select, #postWriter input", "artical");
    $("#postTemplate").change(function(){
        elementCase("#postWriter", "#postWriter select, #postWriter input", "artical");
    });

    // إخفاء بوكس إضافة كاتب عند الضغط على أيقونة تعديل كاتب، والعكس
    $("[data-target='#editWriter']").click(function(){
        $("#addWriter").removeClass("show");
    });
    $("[data-target='#addWriter']").click(function(){
        $("#editWriter").removeClass("show");
    });

    // إظهار عنصر (معرض الصور) إذا كانت بنية المحتوى: معرض صور
    elementCase("#postGallery", "#postGallery input", "gallery");
    $("#postTemplate").change(function(){
        elementCase("#postGallery", "#postGallery input", "gallery");
    });

    // إظهار عنصر (تضمين الفيديو) إذا كانت بنية المحتوى: فيديو
    elementCase("#postVideo", "#postVideo textarea", "video");
    $("#postTemplate").change(function(){
        elementCase("#postVideo", "#postVideo textarea", "video");
    });
    
    // إظهار عنصر (تضمين الصوت) إذا كانت بنية المحتوى: صوت
    elementCase("#postAudio", "#postAudio textarea", "audio");
    $("#postTemplate").change(function(){
        elementCase("#postAudio", "#postAudio textarea", "audio");
    });
    
    /////////////////////////// إضافة الصور المتعددة في بوكس معرض الصور وإظهارها مباشرةً
    $("#postGalleryImg").change(function(){
        var fReader = new FileReader();
        fReader.readAsDataURL(this.files[0]);
        $("#postGalleryContent").append("<span><img class='img-thumbnail mb-3'><i class='fas fa-times-circle'></i></span>");
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
    $("#postImg").change(function(){
        var fReader = new FileReader();
        fReader.readAsDataURL(this.files[0]);
        var imgContent = $(this).parent().parent().find("img")[0];
        fReader.onloadend = function(event){
            // var img = document.getElementById("postImgContent");
            imgContent.src = event.target.result;
        }
    })
    

});