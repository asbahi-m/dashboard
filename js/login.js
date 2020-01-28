$(document).ready(function() {
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
})