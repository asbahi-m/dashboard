$(function() {
    $('[data-toggle="tooltip"]').tooltip();

    /////////////////////////// تمكين السحب والإفلات لعناصر القائمة الرئيسية
    if ($("#sortable").val() !== undefined) {
        $("#sortable").sortable();
        $("#sortable").disableSelection();
    }
});

$(document).ready(function() {
    /////////////////////////// تنسيق صندوق الإشعارات في النافبار
    $("#showNotices").click(function() {
        var $this = $(this);
        $("#Notices").dropdown("dispose");
        
        $("#allNotices").on("shown.bs.collapse", function () {
            $this.find("span").text("إغلاق صندوق الإشعارات")
            $("#Notices").dropdown("show");
        })

        $("#allNotices").on("hidden.bs.collapse", function () {
            $this.find("span").text("عرض جميع الإشعارات")
            $("#Notices").dropdown("hide");
        })
    })
    $("#Notices .dropdown-item.new").append("<span class='new'>new</span>")

    /////////////////////////// الإعدادات الافتراضية للجداول
    $.extend(true, $.fn.dataTable.defaults, {
        // "dom": "lfrtip",
        // "dom": '<"row" <"col-sm-6" i> <"col-sm-6" f>> r t l p',
        // searching: false,
        // ordering:  false,
        // "stateSave": true,
        "order": [],
        "pagingType": "full_numbers",
        "pageLength": 100,
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
            { "searchable": false, "targets": 5 },
            { "searchable": false, "targets": 6 },
            { "searchable": false, "targets": 8 }
        ],
        /*"ajax": "data/posts.json",
        "columns": [
            {
                data: "check",
                cellType: "th",
                className: "column-check details-control",
                orderable: false,
                searchable: false
            },
            {
                data: "title",
                className: "column-title column-primary",
            },
            {
                className: "column-category",
                data: "category",
            },
            {
                className: "column-author",
                data: "author",
            },
            {
                className: "column-date",
                data: "date",
            },
            {
                className: "column-commentsNum",
                data: "commentsNum",
                searchable: false
            },
            {
                className: "column-visitsNum",
                data: "visitsNum",
                searchable: false
            },
            {
                className: "column-type",
                data: "type",
            },
            {
                className: "column-control",
                data: "control",
                orderable: false,
                searchable: false
            }
        ],
        "rowCallback": function( row, data ) {
            $('.column-title', row).attr("data-column", "العنوان");
            $('.column-category', row).attr("data-column", "التصنيف");
            $('.column-author', row).attr("data-column", "المحرر");
            $('.column-date', row).attr("data-column", "التاريخ");
            $('.column-commentsNum', row).attr("data-column", "التعليقات");
            $('.column-visitsNum', row).attr("data-column", "المشاهدات");
            $('.column-type', row).attr("data-column", "النوع");
            $('.column-control', row).attr("data-column", "التحكم");
        },*/
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
                function checkMonth(){return monthNum == -1 ? value : valueToArr[1] + "-" + ("0"+(monthNum+1)).slice(-2)};
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
        filter(tableMedia, "", "", 2, 4)
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
    $("#writersTable input:checkbox").click(function() {
        showChecked("input[name='writer[]']", "input[name='writer[]']:checked");
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

    /* الغاء تحديد عناصر الجدول عند تحديث الصفحة */
    $("table tr [type=checkbox]").each(function() {
        if ($(this).is("[checked]")) {
            $(this).prop("checked", true);
        }
        else {
            $(this).prop("checked", false);
        }
    });

    /* بوكس حذف العناصر المحددة */
    $("#btnDeleteItems").click(function() {
        var items_check = $("[type=checkbox][name]:checked");
        var item_value = document.getElementById("remove_id");
        item_value.value = "";
        item_value.setAttribute("data-posts_num", "");
        if (items_check.length > 0) {
            for (var i = 0; i < items_check.length; i++) {
                var item_value_posts = item_value.getAttribute("data-posts_num");
                item_value.setAttribute("data-posts_num", Number(item_value_posts) + Number(items_check.eq(i).attr("data-posts_num")));
                item_value.value += items_check.eq(i).val();
                if ( i != items_check.length-1) {
                    item_value.value += ",";
                }
            }
            item_value_posts = item_value.getAttribute("data-posts_num");
            $("#deleteItem .modal-header .item-type").addClass("d-none");
            $("#deleteItem .modal-body .count").text(items_check.length).parent().removeClass("d-none");
            $("#deleteItem .modal-body .posts-num").text(item_value_posts);
        }        
    })
    $(".delete").click(function() {
        $("#remove_id").val($(this).attr("data-id"));
        $("#remove_id").attr("data-posts_num",$(this).attr("data-posts_num"));
        $("#deleteItem .modal-body .item-title").text($(this).attr("data-title")).removeClass("d-none");
        $("#deleteItem .modal-body .posts-num").text($(this).attr("data-posts_num"));
    })
    $(".menu-delete").click(function() {
        $("#remove_id").val($("[name='menu[]']").val());
        $("#deleteItem .modal-body .item-title").text($("[name='menu[]'] :selected").attr("data-title")).removeClass("d-none");
    })
    $("#deleteItem").on("hide.bs.modal", function() {
        $("#remove_id").val("");
        $("#remove_id").attr("data-posts_num", "");
        $(this).find(".count").text("").parent().addClass("d-none");
        $(this).find(".item-title").text("").addClass("d-none");
        $(this).find(".item-type").removeClass("d-none");
        $(this).find(".posts-num").text("");
    })
    
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

    /////////////////////////// تغيير ترتيب محتوى صفوف الجدول في وضع الجوال
    $("table tbody tr").on("expanded", function(event){
        $(this).children("td.column-primary ~ td:not(.column-control)").toggleClass("d-block expanded")
    });
    $(".details").click(function(){
        $(this).trigger("expanded");
    })

    /////////////////////////// تغيير مخطط عرض صفحة مكتبة الوسائط شبكة - قائمة
    $("#viewGrid").click(function() {
        $(this).addClass(["btn-primary","current"]).removeClass("btn-light");
        $("#viewList").removeClass(["btn-primary","current"]).addClass("btn-light");
        $("#mediaTable").addClass("grid");
    })
    $("#viewList").click(function() {
        $(this).addClass(["btn-primary","current"]).removeClass("btn-light");
        $("#viewGrid").removeClass(["btn-primary","current"]).addClass("btn-light");
        $("#mediaTable").removeClass("grid");
    })

    /////////////////////////// مكتبة الوسائط

    // أيقونات التعامل مع صندوق مكتبة الوسائط من خارج المودال
    $(".addMedia, .addMultiMedia, .changeMedia, #addGallery").click(function() {
        // تغيير عنوان هيدر المودال
        $("#editMedia.media-modal .modal-title strong").text($(this).attr("data-title"));
    })

    $("#postImage .changeMedia").click(function() {
        // تحديد الصورة بمعرف الـ ID
        var mediaId = $(this).find("#media_id").val();
        $("#editMedia.single-media [name='media[]'][value=" + mediaId + "]").prop("checked", true);
    })

    $(".addMultiMedia, #postImage_2 .changeMedia").click(function() {
        var modalMedia = $("#editMedia.media-modal");
        modalMedia.addClass("multi-media");
        modalMedia.removeClass("single-media");
    })

    $("#postImage_2 .changeMedia").click(function() {
        // تحديد الصورة بمعرف الـ ID
        var mediaId = $(this).find("#multi_media_id").val();
        $("#editMedia.multi-media [name='media[]'][value=" + mediaId + "]").prop("checked", true);
    })

    $("#addGallery").click(function() {
        var modalMedia = $("#editMedia.media-modal");
        // تهيئة صندوق مكتبة الوسائط إلى معرض الصور
        modalMedia.addClass("mediaGallery");
        modalMedia.removeClass("single-media");
        modalMedia + $(" [name='media[]']").prop("type", "checkbox");
        modalMedia + $(" [name='media[]']").parent().removeClass("custom-radio").addClass("custom-checkbox");
        $("<div class='mr-auto gallery-items'><span class='mx-2'></span></div>").prependTo($("#editMedia.media-modal .modal-footer"));
        modalMedia + $(".mediaGallery").on("show.bs.modal", function () {
            $("[name='gallery_id[]']").each(function() {
                var mediaId = $(this).val();
                modalMedia + $(".mediaGallery [name='media[]'][value=" + mediaId + "]").prop({"disabled": true, "checked": true});
            })
        })
    })

    $("#editMedia.media-modal").on("click", "#setMedia", function () {
        var modalMedia = $("#editMedia.media-modal");
        var data_id = modalMedia.find("[name='media[]']:checked").attr("value");
        var data_ar_alt = modalMedia.find("[name='media[]']:checked").attr("data-ar_alt");
        var data_path = modalMedia.find("[name='media[]']:checked").attr("data-path");
        // إضافة الصورة البارزة
        if(modalMedia.hasClass("single-media")) {
            var media_id = $("#media_id").val();
            $("#media_id").val(data_id);
            if (media_id == -1) {
                $(".addMedia").toggleClass("d-none");
            }
            $("#postImage").fadeIn();
            $("#postImage .changeMedia").attr({"data-media": "media-" + data_id, "data-id": data_id});
            $("#postImage .changeMedia img").attr({"src":data_path, "alt":data_ar_alt});
        }
        
        // إضافة صورة أيقونة الموقع
        if(modalMedia.hasClass("multi-media")) {
            var media_id = $("#multi_media_id").val();
            $("#multi_media_id").val(data_id);
            if (media_id == -1) {
                $(".addMultiMedia").toggleClass("d-none");
            }
            $("#postImage_2").fadeIn();
            $("#postImage_2 .changeMedia").attr({"data-media": "media-" + data_id, "data-id": data_id});
            $("#postImage_2 .changeMedia img").attr({"src":data_path, "alt":data_ar_alt});
        }

        // إضافة الصور لمعرض الصور
        if(modalMedia.hasClass("mediaGallery")) {
            $("[name='media[]']:checked:not(:disabled)").each(function(x) {
                var data_id = $(this).attr("value");
                var data_ar_alt = $(this).attr("data-ar_alt");
                var data_path = $(this).attr("data-path");
                $("#postGalleryContent [data-id=-1]").clone().appendTo("#postGalleryContent")
                .removeClass("d-none").attr({"data-media":"media-"+data_id, "data-id":data_id})
                .find("img").attr({"src":data_path, "alt":data_ar_alt})
                .parent().find("[name=gallery_id]").val(data_id).attr({"id": "gallery_" + data_id, "name": "gallery_id[]"});
            })
            $("#postGalleryContent .clearMedia").click(function() {
                // إزالة الصور من معرض الصور والغاء تعيينها
                $(this).parent().remove();
            })
        }
    });

    $("#postImage .clearMedia").click(function() {
        // إزالة الصورة البارزة والغاء تعيينها
        $(this).parent().fadeOut();
        $(this).parent().parent().find(".addMedia").toggleClass("d-none");
        $("#media_id").val("-1");
        $(".changeMedia").attr({"data-media": "", "data-id": ""});
    })

    $("#postImage_2 .clearMedia").click(function() {
        // إزالة أيقونة الموقع والغاء تعيينها
        $(this).parent().fadeOut();
        $(this).parent().parent().find(".addMultiMedia").toggleClass("d-none");
        $("#multi_media_id").val("-1");
        $("#postImage_2 .changeMedia").attr({"data-media": "", "data-id": ""});
    })

    $("#postGalleryContent .clearMedia").click(function() {
        // إزالة الصور من معرض الصور والغاء تعيينها
        $(this).parent().remove();
    })

    // صندوق مكتبة الوسائط
    
    $("#editMedia.media-modal [name='media[]']").click(function() {
        var itemClass = $(this).attr("id");
        var itemNum = $("[name='media[]']:checked:not(:disabled)").length;
        
        if ($(this).prop("checked") == true) {
            // إظهار معلومات الصورة
            $(".file-info").show();
            // تفعيل أيقونة "تعيين وحفظ" فقط
            $("#editMedia.media-modal .modal-footer button").prop("disabled", false);

            $("#editMedia.mediaGallery .modal-footer .gallery-items span").text("عدد العناصر المحددة: " + itemNum);
            var data_id = $(this).attr("value"),
                data_path = $(this).attr("data-path"),
                data_ar_title = $(this).attr("data-ar_title"),
                data_en_title = $(this).attr("data-en_title"),
                data_ar_alt = $(this).attr("data-ar_alt"),
                data_en_alt = $(this).attr("data-en_alt"),
                data_file_name = $(this).attr("data-file_name"),
                data_file_type = $(this).attr("data-file_type"),
                data_file_size = $(this).attr("data-file_size"),
                data_dimensions = $(this).attr("data-dimensions"),
                data_upload_date = $(this).attr("data-upload_date"),
                data_uploader = $(this).attr("data-uploader"),
                data_upload_to = $(this).attr("data-upload_to"),
                data_view_attachment = $(this).attr("data-view_attachment");

            $(".file-info .media-source img").attr({"src": data_path, "alt": data_ar_alt});
            $(".file-info .media-button button").attr("data-id", data_id);
            $(".file-info #mediaName-ar").val(data_ar_title);
            $(".file-info #mediaName-en").val(data_en_title);
            $(".file-info #mediaAlt-ar").val(data_ar_alt);
            $(".file-info #mediaAlt-en").val(data_en_alt);
            $(".file-info #mediaUrl").val(data_path);
            $(".file-info .file-name span").text(data_file_name);
            $(".file-info .file-type span").text(data_file_type);
            $(".file-info .file-size span").text(data_file_size);
            $(".file-info .dimensions span").text(data_dimensions);
            $(".file-info .upload-date span").text(data_upload_date);
            $(".file-info .uploader span").text(data_uploader);
            $(".file-info .upload-to a").attr("href", data_upload_to);
            $(".file-info .view-attachment a").attr("href", data_view_attachment);
        }
        else {
            // إخفاء معلومات الصورة
            $(".file-info").hide();
            // تعطيل أيقونة "تعيين وحفظ" فقط
            $("#editMedia.media-modal .modal-footer button").prop("disabled", true);
            if (itemNum > 0) {
                $("#editMedia.mediaGallery .modal-footer .gallery-items span").text("عدد العناصر المحددة: " + itemNum);
            }
            else {

                $("#editMedia.mediaGallery .modal-footer .gallery-items span").text("");
            }
        }
        if ($("#editMedia.media-modal").hasClass("mediaGallery") && $(this).prop("checked") === true) {
            // إضافة العناصر المحددة أسفل بوكس مكتبة الوسائط
            $(this).next().find("img").clone().appendTo("#editMedia.media-modal .modal-footer .gallery-items").addClass(itemClass);
        }
        else {
            // إزالة العناصر المحددة أسفل بوكس مكتبة الوسائط
            $("#editMedia.media-modal .modal-footer ." + itemClass).remove();
        }
    })

    // افتراضي صندوق مكتبة الوسائط
    $("#editMedia.media-modal").on("show.bs.modal", function () {
        $(".modal-footer button, .file-info .media-button .update").prop("disabled", true);
        if ($("[name='media[]']:checked").length > 0) {
            $(".file-info").show();
            $(".modal-footer button").prop("disabled", false);
        }
        else {
            $(".file-info").hide();
            $(".modal-footer button").prop("disabled", true);
        }
        $(".file-info input[type=text]").change(function() {
            // تفعيل أيقونة "حفظ دون تعيين" عند تغيير معلومات الصورة
            $(".file-info .media-button .update").prop("disabled", false);
        })
        if ($(this).hasClass("single-media") && $("#media_id").val() == $("[name='media[]']:checked").val()) {
            $(".modal-footer button").prop("disabled", true);
        }
        $("[name='media[]']").click(function() {
            if ($("#editMedia.media-modal").hasClass("single-media") && $("#media_id").val() == $(this).val()) {
                $(".modal-footer button").prop("disabled", true);
            }
        })
        $("#setMedia").attr("data-dismiss", "modal");
    })

    // إعادة ضبط صندوق مكتبة الوسائط إلى صورة واحدة
    $("#editMedia.media-modal").on("hidden.bs.modal", function () {
        $(this) + $(" [name='media[]']").prop({"type": "radio", "disabled": false, "checked": false});
        $(this) + $(" [name='media[]']").parent().removeClass("custom-checkbox").addClass("custom-radio");
        $(".modal-footer button").prop("disabled", true);
        if ($(this).hasClass("mediaGallery")) {
            $(this) + $(" .gallery-items").remove();
            $(this).addClass("single-media");
            $(this).removeClass("mediaGallery");
        }
        if ($(this).hasClass("multi-media")) {
            $(this).removeClass("multi-media");
            $(this).addClass("single-media");
        }
        $("#setMedia").attr("data-dismiss", "");
    })

    // القيم الافتراضية للصورة البارزة
    if ($("#media_id").val() > -1) {
        $("#postImage").fadeIn();
        $(".addMedia").toggleClass("d-none");
        $("#media_id").val($("#postImage .changeMedia").attr("data-id"))
    }
    // القيم الافتراضية لأيقونة الموقع
    if ($("#multi_media_id").val() > -1) {
        $("#postImage_2").fadeIn();
        $(".addMultiMedia").toggleClass("d-none");
        $("#media_id_vav").val($("#postImage_2 .clearMedia").attr("data-id"))
    }

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
    if ($("#textEditor-ar, #textEditor").val() !== undefined) {
        var editor = textboxio.replaceAll("#textEditor-ar, #textEditor", config_ar);
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

    /////////////////////////// ترتيب القوائم بالسحب والإفلات
    if ($('#nestable').val() !== undefined) {
        var updateOutput = function(e){
            var list   = e.length ? e : $(e.target),
                output = list.data('output');
            if (window.JSON) {
                output.val(window.JSON.stringify(list.nestable('serialize')));//, null, 2));
            } else {
                output.val('JSON browser support required for this demo.');
            }
        };
        // activate Nestable for list 1
        $('#nestable').nestable({
            group: 1
        })
        .on('change', updateOutput);
        // output initial serialised data
        updateOutput($('#nestable').data('output', $('#nestable-output')));
        $('#nestable-menu').on('click', function(e){
            var target = $(e.target),
                action = target.data('action');
            if (action === 'expand-all') {
                $('.dd').nestable('expandAll');
            }
            if (action === 'collapse-all') {
                $('.dd').nestable('collapseAll');
            }
        });
    }

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