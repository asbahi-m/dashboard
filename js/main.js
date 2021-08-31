$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    /////////////////////////// تمكين السحب والإفلات لعناصر القائمة الرئيسية
    if ($("#sortable").val() !== undefined) {
        $("#sortable").sortable();
        $("#sortable").disableSelection();
    }

    /////////////////////////// تنسيق صندوق الإشعارات في النافبار
    $("#showNotices").on("click", function () {
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
        "dom": '<"row" <"col-auto" l> <"col-auto" f> <"col-auto" i>> r t i p',
        // "dom": "lfitrp",
        // searching: false,
        // ordering:  false,
        // "stateSave": true,
        // paging: false,
        "order": [],
        "pagingType": "full_numbers",
        "pageLength": 50,
        "language": {
            "decimal": "",
            "emptyTable": "لا توجد بيانات متاحة في الجدول",
            // "info": "عرض _PAGE_ من _PAGES_ صفحة",
            // "info": "عرض _START_ إلى _END_ عنصر، من إجمالي _TOTAL_ عنصر",
            "info": "_END_ من _TOTAL_ عنصر",
            // "infoEmpty":      "عرض 0 إلى 0 من 0 عنصر",
            "infoEmpty": "",
            "infoFiltered": "(تمت التصفية من بين _MAX_ إجمالي العناصر)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "عرض _MENU_ في الصفحة",
            "loadingRecords": "تحميل...",
            "processing": "جاري المعالجة...",
            "search": "بحث: ",
            "zeroRecords": "لا يوجد نتائج متطابقة",
            "paginate": {
                "first": "<<",
                "last": ">>",
                "next": ">",
                "previous": "<"
            },
            "aria": {
                "sortAscending": ": تفعيل الفرز التصاعدي",
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
            {"orderable": false, "targets": 0},
            {"orderable": false, "targets": 5},
            {"searchable": false, "targets": 0},
            {"searchable": false, "targets": 4},
            {"searchable": false, "targets": 5}
        ]
    });

    /////////////////////////// إعدادات وتفعيل جدول كُتاب المقالات
    $('#writersTable').DataTable({
        "columnDefs": [
            {"orderable": false, "targets": 0},
            {"orderable": false, "targets": 4},
            {"orderable": false, "targets": 5},
            {"searchable": false, "targets": 0},
            {"searchable": false, "targets": 3},
            {"searchable": false, "targets": 4},
            {"searchable": false, "targets": 5}
        ]
    });

    /////////////////////////// إعدادات وتفعيل جدول المحتويات
    var tablePosts = $("#postsTable").DataTable({
        // "dom": '<"row" <"col-sm-6" l> <"col-sm-6" f>> i r t i p',
        "columnDefs": [
            {"orderable": false, "targets": 0},
            {"orderable": false, "targets": 9},
            {"searchable": true, "targets": 1},
            {"searchable": false, "targets": "_all"},
        ],
        // "bPaginate": false,
        // "paging": false,
        // "info": false
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
        "rowCallback": function (row, data) {
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
        /*initComplete: function () {
            this.api().columns([1, 2]).every(function () {
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo($(column.footer()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            textBox
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });
                $(select).on("click", function (e) {
                    e.stopPropagation();
                });
                column.data().unique().sort().each(function (d, j) {
                    d = d.replace(/<[^>]*>/g, "");
                    select.append("<option value='" + d + "'>" + d + "</option>");
                });
            });
        }*/
    });

    /////////////////////////// إعدادات وتفعيل جدول الصفحات
    var tablePages = $("#pagesTable").DataTable({
        "columnDefs": [
            {"orderable": false, "targets": 0},
            {"orderable": false, "targets": 6},
            {"searchable": false, "targets": 0},
            {"searchable": false, "targets": 4},
            {"searchable": false, "targets": 5},
            {"searchable": false, "targets": 6}
        ]
    });

    /////////////////////////// إعدادات وتفعيل جدول مكتبة الوسائط
    var tableMedia = $("#mediaTable").DataTable({
        // searching: false,
        // paging: false,
        // "info": false,
        // "bPaginate": false,
        "columnDefs": [
            {"orderable": false, "targets": 0},
            {"orderable": false, "targets": 5},
            {"searchable": false, "targets": 0},
            {"searchable": false, "targets": 5}
        ]
    });

    /////////////////////////// إعدادات وتفعيل جدول الإعلانات
    var tableAds = $("#adsTable").DataTable({
        "columnDefs": [
            {"orderable": false, "targets": 0},
            {"orderable": false, "targets": 8},
            {"searchable": false, "targets": 0},
            {"searchable": false, "targets": 5},
            {"searchable": false, "targets": 6},
            {"searchable": false, "targets": 8}
        ],
        // "bPaginate": false,
        // "paging": false,
        // "info": false
    });

    /////////////////////////// إعدادات وتفعيل جدول التعليقات
    var tableComments = $("#commentsTable").DataTable({
        "columnDefs": [
            {"orderable": false, "targets": 0},
            {"orderable": false, "targets": 2},
            {"orderable": false, "targets": 5},
            {"searchable": false, "targets": 0},
            {"searchable": false, "targets": 4},
            {"searchable": false, "targets": 5}
        ]
    });

    /////////////////////////// إعدادات وتفعيل جدول الأعضاء
    var tableusers = $("#usersTable").DataTable({
        "columnDefs": [
            {"orderable": false, "targets": 0},
            {"orderable": false, "targets": 6},
            {"searchable": false, "targets": 0},
            {"searchable": false, "targets": 5},
            {"searchable": false, "targets": 6}
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
        $("#filter select.get-cate").append('<option value="">جميع التصنيفات</option>').on("change", function(){
            table.column(colCate) // column(2) This is the column number inside the table.
            .search($(this).val())
            .draw();
        });
        var table = table.column(colCate).data().unique().sort();
        var valueArr = [];
        for (i = 0; i < table.length; i++) {
            var value = $.trim(table[i].replace(/<br>/g, "|").replace(/<[^>]*>/g, "").replace(/\n\s+/g,"")).split("|");
            $.merge(valueArr, value);
        }
        valueArr = $.unique(valueArr.sort());
        $.each(valueArr, function (index, value) {
            $("#filter select.get-cate").append(`<option value="${value}">${value}</option>`);
        });

        /* فلتر تصفية جدول المحتويات بحسب النوع */
        $("#filter select.get-type").append('<option value="">جميع الأنواع</option>').on("change", function(){
            table.column(colType) // column(7) This is the column number inside the table.
            .search($(this).val())
            .draw();
        });
        table.column(colType).data().unique().sort().each(function(value, index){
            value = $.trim(value.replace(/<[^>]*>/g, ""));
            $("#filter select.get-type").append(`<option value="${value}">${value}</option>`);
        });
        
        /* فلتر تصفية جدول المحتويات بحسب المحرر */
        $("#filter select.get-user").append('<option value="">جميع المحررين</option>').on("change", function(){
            table.column(colUser) // column(3) This is the column number inside the table.
            .search($(this).val())
            .draw();
        });
        table.column(colUser).data().unique().sort().each(function(value, index){
            value = $.trim(value.replace(/<[^>]*>/g, ""));
            $("#filter select.get-user").append(`<option value="${value}">${value}</option>`);
        });
        
        /* فلتر تصفية جدول المحتويات بحسب التاريخ */
        $("#filter select.get-date").append('<option value="">جميع التواريخ</option>').on("change", function(){
            table.column(colDate) // column(4) This is the column number inside the table.
            .search($(this).val())
            .draw();
        });
        var months = [
            "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
        ];
        var ele = table.column(colDate).data().unique().sort();
        var newEle = ele.map(function(value, month, year){
                value = $.trim(value.replace(/<[^>]*>/g, ""));
                theDate = new Date(value);
                month = months[theDate.getMonth()];
                year = theDate.getFullYear();
                // return theDate == "Invalid Date" ? value : theDate.getFullYear() + "-" + (theDate.getMonth()+1);
                return theDate == "Invalid Date" ? value : month + ", " + year;
            });
        newEle.reverse().each(function(value, index){
            if (newEle.indexOf(value) === index) {
                var valueToArr = value.split(", ");
                var monthNum = months.indexOf(valueToArr[0]);
                function checkMonth(){return monthNum == -1 ? value : valueToArr[1] + "-" + ("0"+(monthNum+1)).slice(-2)};
                $("#filter select.get-date").append(`<option value="${checkMonth()}">${value}</option>`);
            }
        });
    }

    if (tablePosts.column().data() !== undefined) {
        filter(tablePosts, 2, 8, 3, 5)
    }

    if (tableMedia.column().data() !== undefined) {
        filter(tableMedia, "", "", 2, 4)
    }

    /////////////////////////// تحديد عناصر الجدول
    function showChecked(name, check) {
        var selectAll = document.querySelectorAll("table input");
        selectAll.forEach(x => {
            x.onchange = function () {
                if ($(this).is("#checkAll") || $(check).length === $(name).length) {
                    $("table :checkbox").prop("checked", $(this).prop("checked"));
                    $("#checkAll").prop("indeterminate", false);
                } else if ($(check).length > 0 && $(check).length < $(name).length) {
                    $("#checkAll").prop("indeterminate", true);
                    $("#checkAll").prop("checked", false);
                } else {
                    $("#checkAll").prop("indeterminate", false);
                    $("#checkAll").prop("checked", false);
                }

                if ($(check).length > 0) {
                    $(".alert.selected, .delete-items").fadeIn();
                    $(".alert.selected .count, .delete-items .count").text($(check).length);
                } else {
                    $(".alert.selected, .delete-items").fadeOut();
                }
            }
        });
    }

    /* تحديد عناصر جدول التصنيفات */
    $("#categoriesTable input:checkbox").on("click", function () {
        showChecked("input[name='cate[]']", "input[name='cate[]']:checked");
    });

    /* تحديد عناصر جدول المحتويات */
    $("#postsTable input:checkbox, #pagesTable input:checkbox, #adsTable input:checkbox").on("click", function () {
        showChecked("input[name='post[]']", "input[name='post[]']:checked");
    });
    $("#writersTable input:checkbox").on("click", function () {
        showChecked("input[name='writer[]']", "input[name='writer[]']:checked");
    });

    /* تحديد عناصر جدول مكتبة الوسائط */
    $("#mediaTable").on("click", "input:checkbox", function () {
        showChecked("input[name='media[]']", "input[name='media[]']:checked");
    });

    /* تحديد عناصر جدول التعليقات */
    $("#commentsTable input:checkbox").on("click", function () {
        showChecked("input[name='comment[]']", "input[name='comment[]']:checked");
    });

    /* تحديد عناصر جدول الأعضاء */
    $("#usersTable input:checkbox").on("click", function () {
        showChecked("input[name='user[]']", "input[name='user[]']:checked");
    });

    /* إغلاق رسالة تنبيه العناصر المحددة */
    $(".alert.selected .close").on("click", function () {
        $(".alert.selected").fadeOut();
    });

    /* الغاء تحديد عناصر الجدول عند تحديث الصفحة */
    $("table tr [type=checkbox]").each(function () {
        if ($(this).is("[checked]")) {
            $(this).prop("checked", true);
        } else {
            $(this).prop("checked", false);
        }
    });

    /* بوكس حذف العناصر المحددة */
    $("#btnDeleteItems").on("click", function () {
        var items_check = $("[type=checkbox][name]:checked");
        var item_value = document.getElementById("remove_id");
        var item_title = "";
        item_value.value = "";
        item_value.setAttribute("data-posts_num", "");
        if (items_check.length > 0) {
            for (var i = 0; i < items_check.length; i++) {
                var item_value_posts = item_value.getAttribute("data-posts_num");
                item_value.setAttribute("data-posts_num", Number(item_value_posts) + Number(items_check.eq(i).attr("data-posts_num")));
                item_value.value += items_check.eq(i).val();
                if (i != items_check.length - 1) {
                    item_value.value += ",";
                }
                item_title += items_check.eq(i).data("title") + ", ";
                $("#deleteItem [name='parentCate'] option[value="+items_check.eq(i).val()+"]").prop("disabled", true)
            }
            item_value_posts = item_value.getAttribute("data-posts_num");
            $("#deleteItem .modal-header .item-type").addClass("d-none");
            $("#deleteItem .modal-body .count").text(items_check.length).parent().removeClass("d-none");
            $("#deleteItem .modal-body .posts-num").text(item_value_posts);
            $("#deleteItem .modal-body .items-titles").removeClass("d-none").text(item_title).css("color", "red");
        }
    });

    $(".delete").on("click", function () {
        $("#remove_id").val($(this).data("id"));
        $("#remove_id").attr("data-posts_num", $(this).data("posts_num"));
        $("#deleteItem .modal-body .item-title").removeClass("d-none").text($(this).attr("data-title")).css("color", "red");
        $("#deleteItem .modal-body .posts-num").text($(this).attr("data-posts_num"));
        $("#deleteItem [name='parentCate'] option[value="+$(this).data("id")+"]").prop("disabled", true)
    });

    $(".menu-delete").on("click", function () {
        $("#remove_id").val($("[name='menu[]']").val());
        $("#deleteItem .modal-body .item-title").text($("[name='menu[]'] :selected").attr("data-title")).css("color", "red");
    });

    $("#deleteItem, #user-ban").on("hide.bs.modal", function () {
        if ($(this).is("#deleteItem")) {
            $("#remove_id").val("");
            $("#remove_id").attr("data-posts_num", "");
            $(this).find(".count").text("").parent().addClass("d-none");
            $(this).find(".item-title").addClass('d-none').text("").css("color", "unset");
            $(this).find(".items-titles").addClass('d-none').text("").css("color", "unset");
            $(this).find(".item-type").toggleClass("d-none");
            $(this).find(".posts-num").text("");
            $("#deleteItem [name='parentCate'] option[value]").prop("disabled", false)
        } else {
            $("#ban-id").val("");
        }
    });

    $(".user-ban").on("click", function () {
        $("#ban-id").val($(this).data("id"));
        $("#user-ban .modal-body .item-title").text($(this).data("title")).css("color", "red");
        $("#user-ban [type='submit']").text($(this).find("span").text())
        if ($(this).hasClass("is-ban")) {
            $("#user-ban [type='submit']").removeClass("btn-warning").addClass("btn-info");
        } else {
            $("#user-ban [type='submit']").removeClass("btn-info").addClass("btn-warning");
        }
    });

    /////////////////////////// إظهار/إخفاء بوكس إضافة عنصر جديد في صفحة التصنيفات
    function checkAddItem() {
        $("a.btn[data-target='#addItem']").css("display") !== "none" ? $("#addItem").addClass("collapse") : $("#addItem").removeClass("collapse");
    }

    checkAddItem();
    $(window).resize(function () {
        checkAddItem();
    });

    /////////////////////////// إنشاء تسلسل هيكلي للعناصر الفرعية في جدول صفحة التصنيفات
    $("[data-depth]").each(function () {
        var i = $(this).data("depth");
        var insert = "<i class='fas fa-long-arrow-alt-left mr-1 ml-" + i + "'></i>";
        if (i > 1) {
            for (var x = 1; x < i; x++) {
                insert += "<i class='fas fa-long-arrow-alt-left mx-1'></i>";
            }
            $(this).find(".column-primary").prepend(insert);
        }
    });

    /////////////////////////// إنشاء تسلسل هيكلي للعناصر الفرعية في بوكس إضافة تصنيف جديد
    $("option[data-depth]").each(function () {
        var i = $(this).data("depth");
        var insert = "&nbsp;&nbsp;";
        if (i > 1) {
            for (var x = 1; x < i; x++) {
                insert += "&nbsp;&nbsp;";
            }
            $(this).prepend(insert);
        }
    });

    /////////////////////////// تغيير ترتيب محتوى صفوف الجدول في وضع الجوال
    $("table tbody tr").on("expanded", function (event) {
        $(this).children("td.column-primary ~ td:not(.column-control)").toggleClass("d-block expanded")
    });
    $(".details").on("click", function () {
        $(this).trigger("expanded");
    })

    /////////////////////////// صندوق مكتبة الوسائط
    // أيقونات التعامل مع صندوق مكتبة الوسائط من خارج المودال
    $(".addMedia, #addGallery, .addFavicon, .changeMedia").on("click", function () {
        // تغيير عنوان هيدر المودال
        $("#editMedia.media-modal .modal-title strong").text($(this).attr("data-title"));
        if ($(this).is(".changeMedia")) {
            $("#editMedia.media-modal").addClass("change");
        }
    })

    // تهيئة صندوق مكتبة الوسائط لإضافة أيقونة الموقع
    $(".addFavicon, #siteFavicon .changeMedia").on("click", function () {
        var modalMedia = $("#editMedia.media-modal");
        modalMedia.addClass("favicon-media");
        modalMedia.removeClass("single-media");
    })

    // عند الضغط على تعيين في بوكس مكتبة الوسائط
    $("#editMedia.media-modal").on("click", "#setMedia", function () {
        var modalMedia = $("#editMedia.media-modal");
        if ($("[name='media[]']:checked").prop("checked")) {
            var data_id = modalMedia.find("[name='media[]']:checked").attr("value");
            var data_ar_alt = modalMedia.find("[name='media[]']:checked").attr("data-ar_alt");
            var data_path = modalMedia.find("[name='media[]']:checked").attr("data-path_url");
    
            // إضافة الصورة البارزة للمحتوى
            if (modalMedia.hasClass("single-media")) {
                $("#media_id").val(data_id);
                if ($("[name='media[]']:checked").prop("checked")) {
                    $(".addMedia").addClass("d-none");
                }
                $("#postImage").fadeIn();
                $("#postImage .changeMedia").attr({"data-media": "media-" + data_id, "data-id": data_id});
                $("#postImage .changeMedia img").attr({"src": data_path, "alt": data_ar_alt});
            }
    
            // إضافة صورة أيقونة الموقع
            if (modalMedia.hasClass("favicon-media")) {
                $("#media_id_fav").val(data_id);
                if ($("[name='media[]']:checked").prop("checked")) {
                    $(".addFavicon").addClass("d-none");
                }
                $("#siteFavicon").fadeIn();
                $("#siteFavicon .changeMedia").attr({"data-media": "media-" + data_id, "data-id": data_id});
                $("#siteFavicon .changeMedia img").attr({"src": data_path, "alt": data_ar_alt});
            }
    
            // إضافة الصور لمعرض الصور
            if (modalMedia.hasClass("mediaGallery")) {
                $("[name='media[]']:checked:not(:disabled)").each(function (x) {
                    var data_id = $(this).attr("value");
                    var data_ar_alt = $(this).attr("data-ar_alt");
                    var data_path = $(this).attr("data-path_url");
                    $("#postGalleryContent [data-id=-1]").clone().appendTo("#postGalleryContent")
                        .removeClass("d-none").attr({"data-media": "media-" + data_id, "data-id": data_id})
                        .find("img").attr({"src": data_path, "alt": data_ar_alt})
                        .parent().find("[name=gallery_id]").val(data_id).attr({
                            "id": "gallery_" + data_id,
                            "name": "gallery_id[]"
                        })
                        .parent().find("[name=ar_gallery_bio]").attr({
                            "id": "ar_gallery_bio_" + data_id,
                            "name": "ar_gallery_bio[" + data_id + "]"
                        })
                        .parent().parent().find("[name=en_gallery_bio]").attr({
                            "id": "en_gallery_bio_" + data_id,
                            "name": "en_gallery_bio[" + data_id + "]"
                        });
                })
                $("#postGalleryContent .clearMedia").on("click", function () {
                    // إزالة الصور من معرض الصور والغاء تعيينها
                    $(this).parent().remove();
                })
            }
        }
    });

    // إزالة الصورة البارزة وأيقونة الموقع والغاء تعيينها
    $("#postImage .clearMedia, #siteFavicon .clearMedia").on("click", function () {
        // $(this).parent().fadeOut();
        if ($(this).parent().attr("id") == "siteFavicon") {
            $(this).parent().parent().find(".addFavicon").removeClass("d-none");
            $("#media_id_fav").val("-1");
        }
        else {
            $(this).parent().parent().find(".addMedia").removeClass("d-none");
            $("#media_id").val("-1");
        }
        $(this).parent().find(".changeMedia").attr({"data-media": "", "data-id": ""}).add().parent().fadeOut();
    })

    // إزالة الصور من معرض الصور والغاء تعيينها
    $("#postGalleryContent .clearMedia").on("click", function () {
        $(this).parent().remove();
    })

    // افتراضي صندوق مكتبة الوسائط
    $("#editMedia.media-modal").on("show.bs.modal", function () {
        $(".modal-footer button, .file-info .media-button .update").prop("disabled", true);
        if ($("[name='media[]']:checked").length > 0) {
            $(".file-info").show();
            if ($(this).hasClass("single-media") && $("#media_id").val() == $("[name='media[]']:checked").val()) {
                $(".modal-footer button").prop("disabled", true);
            } else {
                $(".modal-footer button").prop("disabled", false);
            }
        } else {
            $(".file-info").hide();
            $(".modal-footer button").prop("disabled", true);
        }
        $(".file-info input[type=text]").on("change", function () {
            // تفعيل أيقونة "حفظ دون تعيين" عند تغيير معلومات الصورة
            $(".file-info .media-button .update").prop("disabled", false);
        })
        $("[name='media[]']").on("click", function () {
            if ($("#editMedia.media-modal").hasClass("single-media") && $("#media_id").val() == $("[name='media[]']:checked").val()) {
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
        if ($(this).hasClass("change")) {
            $(this).removeClass("change");
        }
        if ($(this).hasClass("mediaGallery")) {
            $(this) + $(" .gallery-items").addClass("d-none").find("img").remove();
            $(this).addClass("single-media");
            $(this).removeClass("mediaGallery");
        }
        if ($(this).hasClass("favicon-media")) {
            $(this).removeClass("favicon-media");
            $(this).addClass("single-media");
        }
        $("#setMedia").attr("data-dismiss", "");
    })

    // القيم الافتراضية للصورة البارزة
    if ($("#media_id").val() > -1) {
        $("#postImage").fadeIn();
        $(".addMedia").addClass("d-none");
        $("#media_id").val($("#postImage .changeMedia").attr("data-id"))
    }
    // القيم الافتراضية لأيقونة الموقع
    if ($("#media_id_fav").val() > -1) {
        $("#siteFavicon").fadeIn();
        $(".addFavicon").addClass("d-none");
        $("#media_id_fav").val($("#siteFavicon .changeMedia").attr("data-id"))
    }

    // تحديد الصورة في البوكس عند الضغط على أيقونة تغيير الصورة
    $(".changeMedia").on("click", function () {
        if ($("#editMedia.media-modal").hasClass("change")) {
            if ($("#editMedia.media-modal").hasClass("favicon-media"))
                var media_id = $("#siteFavicon .changeMedia").attr("data-id");
            else
                var media_id = $("#postImage .changeMedia").attr("data-id");
                $(`#media-${media_id}`).find("[name='media[]']:not(:checked)").prop("checked", true);
        }
    })

    // تهيئة صندوق مكتبة الوسائط إلى معرض الصور
    $("#addGallery").on("click", function() {
        var modalMedia = $("#editMedia.media-modal");
        modalMedia.addClass("mediaGallery");
        modalMedia.removeClass("single-media");
        modalMedia + $(" [name='media[]']").prop("type", "checkbox");
        modalMedia + $(" [name='media[]']").parent().removeClass("custom-radio").addClass("custom-checkbox");
        modalMedia + $(".mediaGallery").on("show.bs.modal", function () {
            $(".gallery-items img").remove();
            var ids_arr = [];
            $("[name='gallery_id[]']").each(function() {
                var media_id = $(this).val();
                $(".mediaGallery [name='media[]'][value=" + media_id + "]").prop({
                    "disabled": true,
                    "checked": true
                });
                ids_arr.push(media_id);
                $(this).parent().find("img").clone().appendTo(".gallery-items");
            })
            $(".gallery-items").removeClass("d-none").find("span").text(`عدد العناصر المحددة: ${ids_arr.length}`);
        })
    })

    // حالة بوكس الوسائط عند النقر على أي صورة في وضع معرض الصور
    $(document).on('click', "#editMedia.media-modal.mediaGallery [name='media[]']", function () {
        var img = $(this).next().find("img"),
            itemClass = $(this).attr("id"),
            itemNum = $("[name='media[]']:checked").length;
    
        if (itemNum > 0) {
            $("#editMedia.mediaGallery .modal-footer .gallery-items span").text("عدد العناصر المحددة: " + itemNum);
        } else {
            $("#editMedia.mediaGallery .modal-footer .gallery-items span").text("");
        }

        // تفعيل أيقونة "تعيين الصورة"
        if ($("[name='media[]']:checked:not(:disabled)").length > 0) {
            $("#editMedia.media-modal .modal-footer button").prop("disabled", false);
        } else {
            $("#editMedia.media-modal .modal-footer button").prop("disabled", true);
        }

        if ($(this).prop("checked")) {
            // إضافة العناصر المحددة أسفل بوكس مكتبة الوسائط
            img.clone().appendTo("#editMedia.media-modal .modal-footer .gallery-items").addClass(itemClass);
        } else {
            // إزالة العناصر المحددة أسفل بوكس مكتبة الوسائط
            $("#editMedia.media-modal .modal-footer ." + itemClass).remove();
            $(".file-info").hide();
        }
    });

    // إخفاء أيقونة تعيين عن النقر على عنوان بوكس الوسائط
    $("#editMedia").on("click", "#tabMedia .nav-link:not(.active)", function () {
        if ($(this).hasClass("modal-title")) {
            $(".modal-footer").show();
        } else {
            $(".modal-footer").hide();
        }
    })

    // دالة جلب بيانات ومعلومات كل صورة
    function media(e) {
        if ($(e).prop("checked") == true) {
            // إظهار معلومات الصورة
            $(".file-info").show();
            $(".file-info .media-button .update").prop("disabled", true);
            setTimeout(function() {
                let oldValue = [],
                    newValue;
                $(".file-info input[type=text]").each(function (index, val) {
                    oldValue.push($(val).val());
                    newValue = oldValue.concat([]);
                    $(val).on("input", function() {
                        newValue[index] = $(this).val();
                        // تفعيل أيقونة "حفظ دون تعيين" عند تغيير معلومات الصورة
                        if (oldValue.join() == newValue.join()) {
                            $(".file-info .media-button .update").prop("disabled", true);
                        } else {
                            $(".file-info .media-button .update").prop("disabled", false);
                        }
                    })
                })
            }, 500)

            // تفعيل أيقونة "تعيين وحفظ" فقط
            if ($("#editMedia.media-modal").hasClass("single-media") && $("#media_id").val() == $("[name='media[]']:checked").val()) {
                $("#editMedia.media-modal .modal-footer button").prop("disabled", true);
            } else {
                $("#editMedia.media-modal .modal-footer button").prop("disabled", false);
            }

            var data_id = $(e).attr("value"),
                data_path = $(e).attr("data-path"),
                data_path_url = $(e).attr("data-path_url"),
                data_ar_title = $(e).attr("data-ar_title"),
                data_en_title = $(e).attr("data-en_title"),
                data_ar_alt = $(e).attr("data-ar_alt"),
                data_en_alt = $(e).attr("data-en_alt"),
                data_file_name = $(e).attr("data-file_name"),
                data_file_type = $(e).attr("data-file_type"),
                data_file_size = $(e).attr("data-file_size"),
                data_aspect_ratio = $(e).attr("data-aspect_ratio"),
                data_upload_date = $(e).attr("data-upload_date"),
                data_uploader = $(e).attr("data-uploader"),
                data_upload_on = $(e).data('upload_on'),
                data_view_attachment = $(e).attr("data-view_attachment");

            $(".file-info .media-source img").attr({"src": data_path_url, "alt": data_ar_alt});
            $(".file-info .media-button button").attr("data-id", data_id);
            $(".file-info #media-name-ar").val(data_ar_title);
            $(".file-info #media-name-en").val(data_en_title);
            $(".file-info #media-alt-ar").val(data_ar_alt);
            $(".file-info #media-alt-en").val(data_en_alt);
            $(".file-info #mediaUrl").val(data_path);
            $(".file-info .file-name span").text(data_file_name);
            $(".file-info .file-type span").text(data_file_type);
            $(".file-info .file-size span").text(data_file_size);
            $(".file-info .aspect_ratio span").text(data_aspect_ratio);
            $(".file-info .upload-date span").text(data_upload_date);
            $(".file-info .uploader span").text(data_uploader);
            $(".file-info .upload-on span").text("");
            data_upload_on.forEach(function(val, i) {
                $(".file-info .upload-on span").append(`
                    <a href="post-edit.html/${val}/edit" target="_blank">${val}</a>
                    ${i < data_upload_on.length - 1 ? '-' : ''}
                `);
            })
        }
    }
    $("#editMedia.media-modal [name='media[]']").on("click", function (e) {
        e = $(this);
        media(e);
    });
    $("#postImage .changeMedia").on("click", function (e) {
        var e = "[name='media[]']:checked";
        media(e);
    });

    // إدراج صورة في بوكس الوسائط عند الضغط على أيقونة Append
    $("#editMedia.media-modal").on("click", "#append", function () {
        var mediaObj = {
            "id": "1111",
            "ar_title": "كبيوتر وقهوة",
            "en_title": "Computer and Coffe",
            "ar_alt": "كمبيوتر وقهوة",
            "en_alt": "Computer and Coffe",
            "path": "/admin/uploads/2020/01/كمبيوتر-وقهوة.jpg",
            "file_name": "كمبيوتر-وقهوة.jpg",
            "file_type": "image/jpeg",
            "file_size": "164 ك.ب",
            "dimensions": "640 × 360 بيكسل",
            "upload_date": "2019-12-27",
            "uploader": "admin",
            "upload_to": "1",   // Post ID
            "upload_to_postTitle": "كيف تبدأ يومك!", // Post Title
            "view_attachment": "#"
        }
        $("#media-0").clone().prependTo("#mediaTable tbody")
        .removeClass("d-none")
        .attr("id", "media-"+mediaObj.id)
        .find("td").each(function() {
            if ($(this).hasClass("column-title")) {
                $(this).html('<a href="media-edit.html">'+mediaObj.ar_title+'</a>')
            }
            else if ($(this).hasClass("column-author")) {
                $(this).html('<a href="#">'+mediaObj.uploader+'</a>')
            }
            else if ($(this).hasClass("column-uploadedTo")) {
                $(this).html('<a href="/contents/'+mediaObj.upload_to+'/edit">'+mediaObj.upload_to_postTitle+'</a>')
            }
            else if ($(this).hasClass("column-date")) {
                $(this).html('<small>'+mediaObj.upload_date+'</small>')
            }
        })
        .parent().find("input").attr({
            "name": "media[]",
            "id": "check-"+mediaObj.id,
            "value": mediaObj.id,
            "data-ar_title": mediaObj.ar_title,
            "data-en_title": mediaObj.en_title,
            "data-ar_alt": mediaObj.ar_alt,
            "data-en_alt": mediaObj.en_alt,
            "data-path": mediaObj.path,
            "data-file_name": mediaObj.file_name,
            "data-file_type": mediaObj.file_type,
            "data-file_size": mediaObj.file_size,
            "data-dimensions": mediaObj.dimensions,
            "data-upload_date": mediaObj.upload_date,
            "data-uploader": mediaObj.uploader,
            "data-upload_to": mediaObj.upload_to,
            "data-view_attachment": mediaObj.view_attachment
        })
        .on("click", media)
        .next().attr("for", "check-"+mediaObj.id)
        .find("img").attr({
            "src": mediaObj.path,
            "alt": mediaObj.ar_alt
        });
    })

    /////////////////////////// محرر النصوص في صفحة إضافة محتوى
    var config_ar = {
        ui: {
            // autoresize : true,
            locale: "ar", //sets the editor language to Arabic
            toolbar: {
                items: [
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
        ui: {
            // autoresize : true,
            locale: "en", //sets the editor language to Arabic
            toolbar: {
                items: [
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

    function elementCase(element, input, val) {
        function checkArr(val) {
            if ($(postType).val() === val) {
                $(element).fadeIn();
                $(input).prop("disabled", false);
            } else {
                $(element).fadeOut();
                $(input).prop("disabled", true);
            }
        }

        if (typeof val === "object") {
            for (var i = 0; i < val.length; i++) {
                checkArr(val[i]);
                if ($(postType).val() === val[i]) {
                    break
                }
            }
        } else {
            checkArr(val);
        }
    }

    // إظهار عنصر (مصدر الخبر) إذا كانت بنية المحتوى: خبر
    elementCase("#postSource", "#postSource input", "new");
    $("#postType").on("change", function () {
        elementCase("#postSource", "#postSource input", "new");
    });

    // إظهار عنصر (كاتب المقال) إذا كانت بنية المحتوى: مقال
    elementCase("#postWriter", "#postWriter select, #postWriter input", "article");
    $("#postType").on("change", function () {
        elementCase("#postWriter", "#postWriter select, #postWriter input", "article");
    });

    // إخفاء بوكس إضافة كاتب عند الضغط على أيقونة تعديل كاتب، والعكس
    // $("[data-target='#editWriter']").on("click", function(){
    //     $("#addWriter").removeClass("show");
    // });
    // $("[data-target='#addWriter']").on("click", function(){
    //     $("#editWriter").removeClass("show");
    // });

    // إظهار عنصر (معرض الصور) إذا كانت بنية المحتوى: معرض صور
    elementCase("#postGallery", "#postGallery input", "gallery");
    $("#postType").on("change", function () {
        elementCase("#postGallery", "#postGallery input", "gallery");
    });

    // إظهار عنصر (تضمين الفيديو) إذا كانت بنية المحتوى: فيديو
    elementCase("#postVideo", "#postVideo textarea", "video");
    $("#postType").on("change", function () {
        elementCase("#postVideo", "#postVideo textarea", "video");
    });

    // إظهار عنصر (تضمين الصوت) إذا كانت بنية المحتوى: صوت
    elementCase("#postAudio", "#postAudio textarea", "audio");
    $("#postType").on("change", function () {
        elementCase("#postAudio", "#postAudio textarea", "audio");
    });

    // إظهار عنصر (مصدر ورابط الصورة) إذا كان نوع الإعلان: صورة HTML
    elementCase("#postAdsImg", "#postAdsImg input", "image");
    $("#postType").on("change", function () {
        elementCase("#postAdsImg", "#postAdsImg input", "image");
    });

    // إظهار عنصر (كود الإعلان) إذا كان نوع الإعلان: جوجل أدسينس أو كود HTML
    elementCase("#postCode", "#postCode textarea", ["codeHTML", "googleAds"]);
    $("#postType").on("change", function () {
        elementCase("#postCode", "#postCode textarea", ["codeHTML", "googleAds"]);
    });


    /////////////////////////// إظهار وإخفاء بوكس التصنيفات إذا كان القالب شبكة مدونة أو وسائط عند إضافة صفحة جديدة
    function checkPostTemplate($this) {
        switch ($this.val()) {
            case "blog-grid":
                $(".categories").show();
                $this.next().text($this.data("blog"));
                break;

            case "media-grid":
                $(".categories").show();
                $this.next().text($this.data("media"));
                break;

            case "contact-us":
                $(".categories").hide();
                $this.next().text($this.data("contact"));
                break;

            default:
                $(".categories").hide();
                $this.next().text($this.data("def"));
                break;
        }
    }

    checkPostTemplate($("#postTemplate"));
    $("#postTemplate").on("change", function () {
        checkPostTemplate($(this));
    })


    /////////////////////////// إضافة الصور المتعددة في بوكس معرض الصور وإظهارها مباشرةً
    /* $("#postGalleryImg").on("change", function(){
        var fReader = new FileReader();
        fReader.readAsDataURL(this.files[0]);
        $("#postGalleryContent").append("<span><img class='img-thumbnail my-2'><i class='fas fa-times-circle'></i></span>");
        var imgContent = $(this).parent().parent().find("img").last()[0];
        console.log($(this).parent().parent().find("img").last()[0]);
        fReader.onloadend = function(event){
            // var img = document.getElementById("postImgContent");
            imgContent.src = event.target.result;
        }
        $("#postGallery #postGalleryContent i").on("click", function(){
            // alert("hi");
            $(this).parent().remove();
        });
    }) */

    /////////////////////////// إضافة الصورة في بوكس الصورة البارزة وإظهارها مباشرةً
    /* $("#postImg, .postImg").on("change", function(){
        $(this).parent().parent().find("#postImgContent img").addClass("d-block").removeClass("d-none");
        $(this).parent().parent().find("#postImgContent i").remove();
        var fReader = new FileReader();
        fReader.readAsDataURL(this.files[0]);
        var imgContent = $(this).parent().parent().find("img")[0];
        fReader.onloadend = function(event){
            // var img = document.getElementById("postImgContent");
            imgContent.src = event.target.result;
        }
    }) */

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
    $(".showPassword").on("click", function () {
        var inputPass = $(this).parent().next();
        if (inputPass.prop("type") === "password") {
            inputPass.prop("type", "text");
            $(this).children().toggleClass("fa-eye fa-eye-slash")
        } else {
            inputPass.prop("type", "password");
            $(this).children().toggleClass("fa-eye fa-eye-slash")
        }
    })

    /////////////////////////// ترتيب القوائم بالسحب والإفلات
    if ($('#nestable').val() !== undefined) {
        var updateOutput = function (e) {
            var list = e.length ? e : $(e.target),
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
        $('#nestable-menu').on('click', function (e) {
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
    $(".lang-ar input, .lang-ar textarea, .lang-en input, .lang-en textarea").each(function () {
        var html = $("html").attr("lang");
        var lang = $(this).parent().hasClass("lang-ar") ? "ar" : "en";
        var rtl = $(this).parent().hasClass("lang-ar") ? "left" : "right";
        // console.log(rtl);
        var outerHeight = $(this).outerHeight() > 38 ? 38 : $(this).outerHeight();
        $(this).parent().append("<span class='lang-name' style=" +
            rtl + ":0;" +
            // "top:-" + outerHeight + "px;" +
            "height:" + outerHeight + "px;" +
            "width:" + outerHeight + "px;" +
            "padding:" + outerHeight / 6 + "px;>" +
            lang +
            "</span>");
        if ($(this).parent().hasClass('lang-ar') && $(this).is('input'))
            $(this).css('padding-left', (outerHeight + 5) + "px")
        else if ($(this).is('input'))
            $(this).css('padding-right', (outerHeight + 5) + "px")
    });
    
    // حساب عدد الأحرف المستخدمة في الـ textarea
    $("textarea[data-length]").each(function(ind, val) {
        var lengthDef = $(this).data("length"),
            charsLimit = ` لقد تجاوزت الحد المسموح به`,
            insertCal = `<small class='d-block mt-2'>عدد الحروف المتبقية: <strong class='count-chars'>${lengthDef}</strong></small>`;
            
        if ($(this).val().length != 0 && $(this).val().length > lengthDef) {
            $(this).after(insertCal);
            var calculate = $(this).next().find(".count-chars");
            calculate.text((lengthDef - $(this).val().length) + charsLimit).css('color', 'red');
        }
        
        this.onfocus = function() {
            if ($(this).val().length <= lengthDef) {
                $(this).after(insertCal);
                var calculate = $(this).next().find(".count-chars");
                calculate.text(lengthDef - $(this).val().length); 
            }

            this.onkeyup = function() {
                var calculate = $(this).next().find(".count-chars");
                if ($(this).val().length <= lengthDef) {
                    calculate.text(lengthDef - $(this).val().length).css('color', '');
                }
                else {
                    calculate.text(lengthDef - $(this).val().length + charsLimit).css('color', 'red');
                }
            }

            this.onblur = function() {
                if ($(this).val().length <= lengthDef) {
                    $(this).next().remove();
                }
            }
        }
    });

    /////////////////////////// تفعيل/تعطيل أيقونة تحديث البيانات
    let oldValues = $(".check-changes [name]:not([type=checkbox])").map((_i, v) => $(v).val()).get().join();
    let oldText = $(".ephox-candy-mountain").map((_i, v) => $(v).text()).get().join();
    let oldMedia = $("#media_id").val();
    let oldChecks = $(".check-changes [name][type=checkbox]").map((_i, v) => $(v).prop('checked')).get().join();
    // console.log(oldText);
    function check() {
        let newValues = $(".check-changes [name]:not([type=checkbox])").map((_i, v) => $(v).val()).get().join();
        let newMedia = $("#media_id").val();
        let newChecks = $(".check-changes [name][type=checkbox]").map((_i, v) => $(v).prop('checked')).get().join();
        if (oldValues != newValues || oldMedia != newMedia || oldChecks != newChecks) {
            $(":submit").prop("disabled", false);
        } else {
            $(":submit").prop("disabled", true);
        }
    }
    // تفعيل أيقونة تحديث البيانات عند تغيير قيم حقول الإدخال
    $(".check-changes [name]:not([type=checkbox]):not([type=hidden])").each(function() {
        // console.log($(this));
        let elem = $(this);
        elem.on("input", check);
    })
    // تفعيل أيقونة تحديث البيانات عند تغيير حالة حقل الاختيار
    $(".check-changes [name][type=checkbox]").each(function() {
        let elem = $(this);
        elem.on("click", check);
    })
    // تفعيل أيقونة تحديث البيانات عند إضافة أو تغيير صورة البروفايل
    $(".check-changes .addMedia, .check-changes .addFavicon, .check-changes .changeMedia").on("click", function() {
        $("#setMedia").on("click", function() {
            let checkVal = $("[name='media[]']:checked").val();
            if ($("#editMedia.media-modal").hasClass("favicon-media")) {
                $("#media_id_fav").val(checkVal);
            } else {
                $("#media_id").val(checkVal);
            }
            check();
        })
    });
    // تفعيل أيقونة تحديث البيانات عند حذف صورة البروفايل
    $(".check-changes .clearMedia").on("click", function() {
        check();
    })
});