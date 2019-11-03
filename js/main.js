$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {
    /* الإعدادات الافتراضية للجداول */
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
            "search":         "بحث:",
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

    /* إعدادات وتفعيل جدول التصنيفات */
    $('#categoriesTable').DataTable({
        "columnDefs": [
            { "orderable": false, "targets": 0 },
            { "orderable": false, "targets": 5 },
            { "searchable": false, "targets": 0 },
            { "searchable": false, "targets": 4 },
            { "searchable": false, "targets": 5 }
        ],
        /* فلتر التصنيفات بحسب العمود */
        initComplete: function () {
            this.api().columns([1, 2]).every( function () {
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo( $(column.footer()).empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );
 
                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );
                    $( select ).click( function(e) {
                        e.stopPropagation();
                  });
                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                } );
            } );
        }
    });

    /* إعدادات وتفعيل جدول المحتويات */
    $('#postsTable').DataTable({
        "columnDefs": [
            { "orderable": false, "targets": 0 },
            { "orderable": false, "targets": 7 },
            { "orderable": false, "targets": 8 },
            { "searchable": false, "targets": 0 },
            { "searchable": false, "targets": 4 },
            { "searchable": false, "targets": 5 },
            { "searchable": false, "targets": 6 },
            { "searchable": false, "targets": 7 },
            { "searchable": false, "targets": 8 },
        ],
    });
   
    /* إضافة صف معلومات تحت صف المحتوى الرئيسي *//*
    function format (name, value) {
        return '<div>' + name + ': ' + value + '</div>';
    }
    var table = $('#categoriesTable').DataTable();
     
    // Add event listener for opening and closing details
    $('#categoriesTable tbody').on('click', '.details', function () {
        var tr = $(this).parentsUntil('tbody');
        var row = table.row( tr );
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child(format(tr.children(".column-name").data("column-name"), tr.children(".column-name").html())).show();
            tr.addClass('shown');
        }
    });
*/
    /* تحديد عناصر الجدول */
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
    $("#categoriesTable input:checkbox").click(function() {
            showChecked("input[name='cate[]']", "input[name='cate[]']:checked");
    });
    $("#postsTable input:checkbox").click(function() {
            showChecked("input[name='post[]']", "input[name='post[]']:checked");
    });

    /* إغلاق رسالة تنبيه العناصر المحددة */
    $(".alert.selected .close").click(function(){
        $(".alert.selected").fadeOut();
    });

    /* إظهار/إخفاء بوكس إضافة عنصر جديد */
    function checkAddItem() {
        $("a.btn[data-target='#addItem']").css("display") !== "none" ? $("#addItem").addClass("collapse") : $("#addItem").removeClass("collapse");
    };
    checkAddItem();
    $(window).resize(function(){
        checkAddItem();
    });

    /* إنشاء تسلسل هيكلي للعناصر الفرعية في جدول التصنيفات */
    $("#categoriesContent table tr").each(function(i){
        if (i > 0) {
            var insert = "<i class='fas fa-long-arrow-alt-left ml-1 mr-" + (1+i) + "'></i>";
            for (var x = 1; x < i ; x++) {
                insert += "<i class='fas fa-long-arrow-alt-left mx-1'></i>";
            }
            $("table tr.level-" + i + " .column-name").prepend(insert);
        }
    });
    
    /* إنشاء تسلسل هيكلي للعناصر الفرعية في بوكس الإدخال */
    $("#parent option").each(function(i, $this){
        if (i > 0) {
            var insert = "&nbsp;&nbsp;";
            for (var x = 1; x < i ; x++) {
                insert += "&nbsp;&nbsp;";
            }
            $("option.level-" + i).prepend(insert);
        }
    });

    $("table tr").on("click", ".details", function(e){
        var tr = $(this).parentsUntil("tbody");
        tr.find("td.column-primary ~ td:not(.column-control)").toggleClass("d-block");
        if (e.currentTarget === this) {
            tr.children(".column-slug").prepend(tr.children(".column-slug").data("column-slug"));
        }
        else {
            tr.children(".column-slug").remove();
        }
        // tr.find("td.column-primary ~ td:not(.column-control)").prepend(data("column-name"));
    });



});