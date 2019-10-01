$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
$(document).ready(function() {
    $(".alert.selected .close").click(function(){
        $(".alert.selected").fadeOut();
    });

    function showChecked(name, check){
        var selectAll = document.querySelectorAll("table input");
        selectAll.forEach( x => {
            x.onchange = function() {
                if ($(this).prop("name") === "all" || $(check).length === $(name).length) {
                    $("table :checkbox").prop("checked", $(this).prop("checked"));
                    $("input[name=all]").prop("indeterminate", false);
                }
                else if ($(check).length > 0 && $(check).length < $(name).length) {
                    $("input[name=all]").prop("indeterminate", true);
                }
                else {
                    $("input[name=all]").prop("indeterminate", false);
                    $("input[name=all]").prop("checked", false);
                }

                if ($(check).length > 0) {
                    $(".alert.selected, .d-selected").fadeIn();
                    $(".alert.selected .count, .d-selected .count").text($(check).length);
                }
                else {
                    $(".alert.selected, .d-selected").fadeOut();
                }
            }
        });
    }
    $("input:checkbox").click(
        function() {
            showChecked("input[name='cate[]']", "input[name='cate[]']:checked");
        }
    );

    $("table tr").each(function(i){
        if (i > 0) {
            var insert = "<i class='fas fa-long-arrow-alt-left ml-1 mr-" + (1+i) + "'></i>";
            for (var x = 1; x < i ; x++) {
                insert += "<i class='fas fa-long-arrow-alt-left mx-1'></i>";
            }
            $("table tr.level-" + i + " .cate-name").prepend(insert);
        }
    });

    $("#cateParent option").each(function(i, $this){
        if (i > 0) {
            var insert = "&nbsp;&nbsp;";
            for (var x = 1; x < i ; x++) {
                insert += "&nbsp;&nbsp;";
            }
            $("option.level-" + i).prepend(insert);
        }
    });

    function checkAddCate() {
        $("button[data-target='#addCate']").css("display") !== "none" ? $("#addCate").addClass("collapse") : $("#addCate").removeClass("collapse");
    };
    checkAddCate();
    $(window).resize(function(){
        checkAddCate();
    });

    $('#categories table').DataTable({
        // "dom": "lfrtip",
        // "dom": '<"row" <"col-sm-6" i> <"col-sm-6" f>> r t l p',
        // "searching": false,
        // "ordering": false,
        "order": [],
        "columnDefs": [
            { "orderable": false, "targets": 0 },
        ],
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


});