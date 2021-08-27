$('document').ready(function(){
    
    $(".charts").insertFusionCharts({
        type: "",
        dataSource: {
            chart: {
                ////// خصائص المخطط كاملاً
                showBorder: "1",                  // تفعيل(1)/الغاء(0:افتراضي) الإطار على المخطط
                borderColor: "#666666",           // لون الإطار الخارجي
                borderThickness: "4",             // سمك الإطار الخارجي
                borderAlpha: "80",                // شفافية الإطار
                bgColor: "#DDDDDD",               // لون خلفية  المخطط
                bgAlpha: "50",                    // شفافية لون الخلفية

                /* تنسيق خطوط المخطط */
                baseFont: "Almarai",              // نوع خط المخطط
                baseFontSize: "11",               // حجم خط المخطط
                baseFontColor: "#0066cc",         // لون خط المخطط
                outCnvBaseFont: "Almarai",        // نوع خط المخطط عدا لوحة بيانات المخطط
                outCnvBaseFontSize: "11",         // حجم خط المخطط عدا لوحة بيانات المخطط
                outCnvBaseFontColor: "#633563",   // لون خط المخطط عدا لوحة بيانات المخطط

                ////// خصائص عنوان المخطط الرئيسي والفرعي
                caption: "اسم المخطط",
                subCaption: "الاسم الفرعي للمخطط",
                captionOnTop: "0",                // عرض اسم المخطط الرئيسي والفرعي أعلى(1:افتراضي)/أسفل(0)
                alignCaptionWithCanvas: "0",      // محاذاة اسم المخطط الرئيسي والفرعي مع لوحة بيانات المخطط(1-افتراضي)/المخطط كامل(0)
                captionHorizontalPadding: "20",   // مساحة الحشو بين اسم المخطط الرئيسي والمخطط، في حال لم تكن المحاذاة في الوسط
                captionAlignment: "right",        // محاذاة اسم المخطط الرئيسي يسار/يمين/وسط-افتراضي

                /* تنسيق خطوط عنوان المخطط الرئيسي والفرعي */
                captionFont: "Arial",             // نوع خط اسم المخطط الرئيسي
                captionFontSize: "18",            // مقاس خط اسم المخطط الرئيسي
                captionFontColor: "#993300",      // لون خط اسم المخطط الرئيسي
                captionFontBold: "1",             // سمك خط اسم المخطط الرئيسي
                subcaptionFont: "Arial",          // نوع خط اسم المخطط الفرعي
                subcaptionFontSize: "14",         // مقاس خط اسم المخطط الفرعي
                subcaptionFontColor: "#993300",   // لون خط اسم المخطط الفرعي
                subcaptionFontBold: "1",          // سمك خط اسم المخطط الفرعي

                ////// خصائص لوحة بيانات المخطط
                showCanvasBg: "1",                // تفعيل(1:افتراضي)/الغاء(0) خلفية مخطط لوحة البيانات
                canvasbgColor: "#1790e1",         // لون خلفية لوحة بيانات المخطط 
                canvasbgAlpha: "10",              // شفافية خلفية لوحة بيانات المخطط
                showCanvasBorder: "1",            // تفعيل(1)/الغاء(0:افتراضي) الإطار على لوحة بيانات المخطط
                canvasBorderThickness: "2",       // سمك إطار لوحة بيانات المخطط
                canvasBorderColor: "#666666",     // لون إطار لوحة بيانات المخطط
                canvasBorderAlpha: "80",          // شفافية إطار لوحة بيانات المخطط
                showAlternateHGridColor: "0",     // تفعيل(1)/الغاء(0:افتراضي) التبادل اللوني لصفوف لوحة بيانات المخطط
                canvasPadding: "30",              // مساحة الحشو لأطراف لوحة بيانات المخطط

                ////// خصائص أعمدة بيانات المخطط
                palettecolors: "5d62b5,29c3be,f2726f",// تعيين ألوان مختلفة لأعمدة بيانات المخطط
                showPlotBorder: "1",                  //تفعيل(1)/الغاء(0:افتراضي) إطار أعمدة البيانات
                plotBorderColor: "#000000",           // لون إطار أعمدة بيانات المخطط
                plotBorderThickness: "1",             // مقاس إطار أعمدة بيانات المخطط
                plotBorderDashed: "1",                // خط متقطع لإطار أعمدة بيانات المخطط
                plotBorderDashLen: "4",               // طول شرطة الخط المتقطع لإطار أعمدة بيانات المخطط
                plotBorderDashGap: "4",               // المصافة بين شرطات الخط المتقطع لإطار أعمدة بيانات المخطط

                /* خصائص أعمدة بيانات المخطط عند المرور بالماوس */
                plotHoverEffect: "1",                 // تفعيل تأثير الهوفر على أعمدة بيانات المخطط
                plotFillHoverColor: "#00ffaa",        // لون إطار أعمدة بيانات المخطط عند الهوفر
                plotBorderHoverThickness: "1",        // سمك إطار أعمدة بيانات المخطط عند الهوفر
                plotBorderHoverDashed: "1",           // خط متقطع لإطار أعمدة بيانات المخطط عند الهوفر
                plotBorderHoverDashLen: "6",          // طول شرطة الخط المتقطع لإطار أعمدة بيانات المخطط عند الهوفر
                plotBorderHoverDashGap: "2",          // المصافة بين شرطات الخط المتقطع لإطار أعمدة بيانات المخطط عند الهوفر

                ////// خصائص التسميات التوضيحة لبيانات المخطط
                showLabels: "0",                  // إظهار(1:افتراضي)/إخفاء(0) التسميات التوضيحية
                labelDisplay: "auto",             // خصائص عرض التسميات auto/wrap/stagger/rotate/none
                useEllipsesWhenOverflow:"0",      // تفعيل(1:افتراضي)/الغاء(0) اقتطاع التسميات إذا تجاوزت حجم المخطط
                labelDisplay: "wrap",             // التفاف نص التسميات التوضيحية
                labelDisplay: "rotate",           // تدوير التسميات التوضيحية
                rotateLabels: "1",                // تفعيل(1)/عدم تفعيل(0:افتراضي) تدوير التسميات التوضيحية، ويستخدم عند عرض التسميات بخاصية الالتفات
                slantLabel: "1",                  // إمالة التسميات التوضيحية، تعمل مع خاصية التدير فقط
                labelStep: "3",                   // تخطي عرض قيم التسميات التوضيحية كل ثلاث قيم
                
                /* تنسيق خطوط التسميات التوضيحية لبيانات المخطط */
                labelFont: "Arial",               // نوع خط التسميات التوضيحية
                labelFontColor: "#0075c2",        // لون خط التسميات التوضيحية
                labelFontSize: "15",              // مقاس خط التسميات التوضيحية
                labelFontBold:"1",                // سمك خط التسميات التوضيحية
                lableFontItalic:"1",              // ميلان خط التسميات التوضيحية
                labelAlpha:"70",                  // شفافية خط التسميات التوضيحية
                labelBgColor: "#eeeeee",          // لون خلفية التسميات التوضيحية
                labelBgAlpha:"30",                // شفافية خلفية التسميات التوضيحية
                maxLabelHeight: "50",             // تعيين الارتفاع الأقصى للتسميات التوضيحية
                labelLink: "http://www...",       // تعيين رابط للتسميات التوضيحية

                /* تنسيق إطار التسميمات التوضيحية لبيانات المخطط */
                labelBorderColor: "#00ffaa",      // لون إطار التسميات التوضيحية
                labelBorderAlpha: "60",           // شفافية إطار التسميات التوضيحية
                labelBorderThickness: "2",        // سمك إطار التسميات التوضيحية
                labelBorderRadius: "2",           // نصف قطر إطار التسميات التوضيحية
                labelBorderDashed: "1",           // خط متقطع لإطار التسميات التوضيحية
                labelBorderDashLen: "3",          // طول شرطة الخط المتقطع لإطار التسميات التوضيحية
                labelBorderDashGap: "2",          // المسافة بين شرطات الخط المتقطع لإطار التسميات التوضيحية
                labelBorderPadding: "5",          // مساحة الحشو بين إطار التسميمات التوضيحية

                ////// خصائص قيم المخطط
                showValues: "1",                  // إظهار(1)/إخفاء(0:افتراضي) قيم المخطط
                rotateValues: "1",                // تفعيل(1)/عدم تفعيل(0:افتراضي) تدوير قيم المخطط
                minPlotHeightForValue: "15",      // السماح بعرض قيم المخطط التي مساحة شريحتها أكبر من 15 بكسل
                valuePosition: "inside",          // السماح بعرض قيم المخطط داخل الشرائح للمخططات الدائرية
                placeValuesInside: "1",           // السماح بعرض قيم المخطط داخل الشرائح لمخططات الأعمدة

                /* تنسيق خطوط قيم المخطط */
                valueFont: "Arial",               // نوع خط قيم المخطط
                valueFontColor: "#0075c2",        // لون خط قيم المخطط
                valueFontSize: "15",              // مقاس خط قيم المخطط
                valueFontBold:"1",                // سمك خط قيم المخطط
                valueFontItalic:"1",              // ميلان خط قيم المخطط
                valueFontAlpha:"90",              // شفافية خط قيم المخطط
                valueBgColor: "#eeeeee",          // لون خلفية قيم المخطط
                valueBgAlpha:"30",                // شفافية خلفية قيم المخطط

                /* تنسيق إطار قيم المخطط */
                valueBorderColor: "#00ffaa",      // لون إطار قيم المخطط
                valueBorderAlpha: "60",           // شفافية إطار قيم المخطط
                valueBorderThickness: "2",        // سمك إطار قيم المخطط
                valueBorderRadius: "2",           // نصف قطر إطار قيم المخطط
                valueBorderDashed: "1",           // خط متقطع لإطار قيم المخطط
                valueBorderDashLen: "3",          // طول شرطة الخط المتقطع لإطار قيم المخطط
                valueBorderDashGap: "2",          // المسافة بين شرطات الخط المتقطع لإطار قيم المخطط
                valueBorderPadding: "5",          // مساحة الحشو بين إطار قيم المخطط

                ////// خصائص المحاور
                xAxisName: "اسم المحور الرأسي",
                yAxisName: "اسم المحور الجانبي",
                xAxisPosition: "top",             // موضع المحور الرأسي أسفل-افتراضي/أعلى
                xAxisPosition: "right",           // موضع المحور الرأسي يسار-افتراضي/يمين للمخططات الشريطية
                yAxisPosition: "right",           // موضع المحور الجانبي يسار-افتراضي/يمين، بالنسبة للمخططات الشريطية ستظهر المحاور في الأعلى
                
                /* تنسيق الخطوط للمحور الرأسي/الجانبي */
                xAxisNameFont: "Arial",           // نوع خط المحور الرأسي
                xAxisNameFontSize: "12",          // مقاس خط المحور الرأسي من 0 إلى 72
                xAxisNameFontColor: "#993300",    // لون خط المحور الرأسي
                xAxisNameFontAlpha: "50",         // شفافية خط المحور الرأسي
                xAxisNameFontBold: "1",           // سمك خط المحور الرأسي
                xAxisNameFontItalic: "1",         // ميلان خط المحور الرأسي
                xAxisNameBgColor: "#3399ff",      // خلفية المحور الرأسي
                xAxisNameBgAlpha: "20",           // شفافية خلفية المحور الرأسي

                /* تنسيق الإطار للمحور الرأسي/الجانبي */
                xAxisNameBorderColor: "#6666FF",  // لون إطار المحور الرأسي
                xAxisNameBorderAlpha: "50",       // شفايفة إطار المحور الرأسي
                xAxisNameBorderPadding: "6",      // المساحة بين الإطار والمحور الرأسي
                xAxisNameBorderRadius: "3",       // نصف قطر إطار المحور الرأسي
                xAxisNameBorderThickness: "2",    // سمك إطار المحور الرأسي
                xAxisNameBorderDashed: "1",       // خط متقطع لإطار المحور الرأسي
                xAxisNameBorderDashLen: "4",      // طول كل شرطة للخط المتقطع في إطار المحور الرأسي
                xAxisNameBorderDashGap: "2",      // المسافة بين كل شرطة للخط المتقطع في إطار المحور الرأسي
                
                /* تنسيق قيم المحاور الجانبية فقط */
                yAxisValueFont: "verdana,sans",   // نوع خط قيم المحور الجانبي
                yAxisValueFontSize: "10px",       // مقاس خط قيم المحور الجانبي
                yAxisValueFontColor: "#ff0000",   // لون خط قيم المحور الجانبي
                yAxisValueFontBold: "1",          // سمك خط قيم المحور الجانبي
                yAxisValueFontItalic: "1",        // ميلان خط قيم المحور الجانبي
                yAxisValueAlpha: "50",            // شفافية خط قيم المحور الجانبي
                yAxisValueBgColor: "#ff0000",     // خلفية قيم المحور الجانبي
                yAxisValueBgAlpha: "40",          // شفافية خلفية قيم المحور الجانبي
                yAxisValueBorderColor: "#ff0000", // لون إطار قيم المحور الجانبي
                yAxisValueBorderAlpha: "60",      // شفافية إطار قيم المحور الجانبي
                yAxisValueBorderPadding: "5",     // المساحة الداخلية لإطار قيم المحور الجانبي
                yAxisValueBorderRadius: "2",      // نصف قطر إطار قيم المحور الجانبي
                yAxisValueBorderThickness: "3",   // سمك إطار قيم المحور الجانبي
                yAxisValueBorderDashed: "1",      // خط متقطع لإطار قيم المحور الجانبي
                yAxisValueBorderDashLen: "2",     // طول شرطة الخط المتقطع لإطار قيم المحور الجانبي
                yAxisValueBorderDashGap: "2",     // المسافة بين شرطات الخط المتقطع لإطار قيم المحور الجانبي
                yAxisValuesStep: "2",             // تخطي عرض قيم المحور الجانبي كل قيمتين

                ////// خصائص الأرقام
                decimals: "3",                    // تقليص الكسور العشرية للأرقام من 0 إلى 10
                yAxisValueDecimals: "2",          // تقليص الكسور العشرية لأرقام قيم المحور الجانبي
                xAxisValueDecimals: "2",          // تقليص الكسور العشرية لأرقام قيم المحور الرأسي

                forceDecimals: "1",               // إظهار(1)/إخفاء(0:افتراضي) الأرقام العشرية
                forceYAxisValueDecimals: "1",     // إظهار(1)/إخفاء(0:افتراضي) الأرقام العشرية لقيم المحور الجانبي
                forceXAxisValueDecimals: "1",     // إظهار(1)/إخفاء(0:افتراضي) الأرقام العشرية لقيم المحور الرأسي

                formatNumber: "0",                // حذف(0)/إبقاء(1:افتراضي) فواصل الأرقام
                yFormatNumber: "0",               // حذف(0)/إبقاء(1:افتراضي) فواصل الأرقام لقيم المحور الجانبي
                xFormatNumber: "0",               // حذف(0)/إبقاء(1:افتراضي) فواصل الأرقام لقيم المحور الرأسي

                formatNumberScale: "0",           // تفعيل(1:افتراضي)/تعطيل(0) تقريب الأرقام [K = ألف] ، [M = مليون]
                yFormatNumberScale: "0",          // تفعيل(1:افتراضي)/تعطيل(0) تقريب الأرقام لقيم المحور الجانبي
                xFormatNumberScale: "0",          // تفعيل(1:افتراضي)/تعطيل(0) تقريب الأرقام لقيم المحور الرأسي

                numberPrefix: "$",                // إضافة بادئة للأرقام
                yNumberPrefix: "$",               // إضافة بادئة للأرقام لقيم المحور الجانبي
                xNumberPrefix: "$",               // إضافة بادئة للأرقام لقيم المحور الرأسي
                numberSuffix: "/day",             // إضافة لاحقة للأرقام
                yNumberSuffix: "/day",            // إضافة لاحقة للأرقام لقيم المحور الجانبي
                xNumberSuffix: "/day",            // إضافة لاحقة للأرقام لقيم المحور الرأسي
                
                /* تخصيص رموز التقريب */
                numberScaleValue: "1000,1000,1000",   // الفئة الأولى: فئة الألف، الفئة الثانية: فئة المليون، الفئة الثالث: فئة البليون
                numberScaleUnit: "K,M,B",             // نضع الرموز المخصصة للتقريب بحسب ترتيب الفئات الثلاث

                /* لتخصيص رموز التقريب بالوقت */
                numberScaleValue: "60",
                numberScaleUnit: " minutes",

                /* لتخصيص رموز التقريب بحجم البيانات */
                numberScaleValue: "1024,1024,1024",
                numberScaleUnit: " MB, GB, TB",


            }
        }
    });

    ///////////////////////////////////////// إحصائيات عدد المشاركات بحسب النوع
    $("#chart-typePosts").insertFusionCharts({
        type: "column2d",
        width: "100%",
        height: "100%",
        dataFormat: "json",
        dataSource: {
            // Chart Configuration
            chart: {
                theme: "fusion",
                caption: "عدد مشاركات الموقع بحسب النوع",
                subCaption: "من 2019 إلى 2020",
                xAxisName: "2,085 مشاركة",
                yAxisName: "عدد المشاركات",
                numberPrefix: "",
                numberSuffix: "",
                exportEnabled: "1",
                showValues: "1",
                minPlotHeightForValue: "15",
                plotToolText: "عدد ال$label: $dataValue",
                baseFont: "Almarai",
                canvasbgColor: "#1790E1",
                canvasbgAlpha: "10",
                palettecolors: "#1790E1",
                labelFontColor: "#0075c2",
                xAxisNameFontColor: "#1790E1",
                xAxisNameFontBold: "1",
                xAxisNameBgColor: "#1790E1",
                xAxisNameBgAlpha: "10",
                xAxisNameBorderPadding: "5",
                xAxisNameBorderRadius: "10",
                yAxisNameFontColor: "#343A40",
                yAxisNameFontBold: "1",
                yAxisNameBgColor: "#343A40",
                yAxisNameBgAlpha: "10",
                yAxisNameBorderPadding: "5",
                yAxisNameBorderRadius: "10"
            },
            // Chart Data
            data: [
                {
                label: "افتراضي",
                value: "290"
                }, {
                label: "مقالات",
                value: "260"
                }, {
                label: "أخبار",
                value: "180"
                }, {
                label: "صور",
                value: "140"
                }, {
                label: "فيديو",
                value: "115"
                }, {
                label: "صوت",
                value: "100"
                }
            ]
        }
    });

    ///////////////////////////////////////// إحصائيات عدد المشاركات بحسب التصنيف
    $("#chart-catePosts").insertFusionCharts({
        type: "column2d",
        width: "100%",
        height: "100%",
        dataFormat: "json",
        dataSource: {
            // Chart Configuration
            chart: {
                theme: "fusion",
                caption: "عدد مشاركات الموقع بحسب التصنيف",
                subCaption: "من 2019 إلى 2020",
                xAxisName: "2,085 مشاركة",
                yAxisName: "عدد المشاركات",
                numberPrefix: "",
                numberSuffix: "",
                exportEnabled: "1",
                showValues: "1",
                minPlotHeightForValue: "15",
                plotToolText: "عدد ال$label: $dataValue",
                baseFont: "Almarai",
                canvasbgColor: "#77bf1a",
                canvasbgAlpha: "10",
                palettecolors: "#77bf1a",
                labelFontColor: "#5a9112",
                xAxisNameFontColor: "#77bf1a",
                xAxisNameFontBold: "1",
                xAxisNameBgColor: "#77bf1a",
                xAxisNameBgAlpha: "10",
                xAxisNameBorderPadding: "5",
                xAxisNameBorderRadius: "10",
                yAxisNameFontColor: "#343A40",
                yAxisNameFontBold: "1",
                yAxisNameBgColor: "#343A40",
                yAxisNameBgAlpha: "10",
                yAxisNameBorderPadding: "5",
                yAxisNameBorderRadius: "10"
            },
            // Chart Data
            data: [
                {
                label: "أخبار العالم",
                value: "290"
                }, {
                label: "أخبار اليمن",
                value: "260"
                }, {
                label: "اقتصاد",
                value: "180"
                }, {
                label: "سياسة",
                value: "140"
                }, {
                label: "رياضة",
                value: "115"
                }, {
                label: "وثائق",
                value: "100"
                }
            ]
        }
    });

    ///////////////////////////////////////// إحصائيات عدد المشاركات بحسب المستخدمين
    $("#chart-userPosts").insertFusionCharts({
        type: "line",
        width: "100%",
        height: "100%",
        dataFormat: "json",
        dataSource: {
            // Chart Configuration
            chart: {
                theme: "fusion",
                caption: "عدد مشاركات الموقع بحسب المستخدمين",
                subCaption: "من 2019 إلى 2020",
                xAxisName: "2,085 مشاركة",
                yAxisName: "عدد المشاركات",
                numberPrefix: "",
                numberSuffix: "",
                exportEnabled: "1",
                showValues: "1",
                plotToolText: "عدد مشاركات <br>$label: <b>$dataValue</b>",
                baseFont: "Almarai",
                canvasbgColor: "#1790E1",
                canvasbgAlpha: "10",
                // palettecolors: "#1790E1",
                labelDisplay: "rotate",
                // slantLabel: "1",
                labelFontColor: "#0075c2",
                xAxisNameFontColor: "#1790E1",
                xAxisNameFontBold: "1",
                xAxisNameBgColor: "#1790E1",
                xAxisNameBgAlpha: "10",
                xAxisNameBorderPadding: "5",
                xAxisNameBorderRadius: "10",
                yAxisNameFontColor: "#343A40",
                yAxisNameFontBold: "1",
                yAxisNameBgColor: "#343A40",
                yAxisNameBgAlpha: "10",
                yAxisNameBorderPadding: "5",
                yAxisNameBorderRadius: "10",
                anchorAlpha: "100",           //شفافية نقطة المخطط تشمل الصورة
                anchorImageAlpha: "100",      //شفافية الصورة
                anchorImageScale: "100"       // حجم عرض الصورة
            },
            // Chart Data
            data: [{
                label: "مدير الموقع",
                value: "44",
                anchorImageUrl: "https://static.fusioncharts.com/sampledata/userimages/1.png"
            }, {
                label: "محمد أحمد",
                value: "72",
                anchorImageUrl: "https://static.fusioncharts.com/sampledata/userimages/2.png"
            }, {
                label: "علي صالح",
                value: "80",
                anchorImageUrl: "https://static.fusioncharts.com/sampledata/userimages/3.png"
            },{
                label: "سلوى أمين",
                value: "10",
                anchorImageUrl: "https://static.fusioncharts.com/sampledata/userimages/4.png"
            }, {
                label: "قاسم سعيد",
                value: "30",
                anchorImageUrl: "https://static.fusioncharts.com/sampledata/userimages/5.png"
            }]
        }
    });

    ///////////////////////////////////////// إحصائيات عدد المستخدمين
    $("#chart-users").insertFusionCharts({
        type: "doughnut2d",
        width: "100%",
        height: "100%",
        dataFormat: "json",
        dataSource: {
            // Chart Configuration
            chart: {
                theme: "fusion",
                caption: "إجمالي المستخدمين ورتبهم",
                subCaption: "إحصائيات تفصيلية بالمستخدمين والرتب",
                defaultCenterLabel: "إجمالي المستخدمين: 15",
                centerLabel: "عدد $value برتبة $label",
                numberPrefix: "",
                numberSuffix: "",
                exportEnabled: "1",
                showPercentValues: "0",       //عرض القيم 1 = بالنسبة المئوية-افتراضي، 0 = بالقيمة الحقيقية
                showPercentInTooltip: "1",    //عرض القيم عند المرور بالماوس 1 = بالنسبة المئوية، 0 = بالقيمة الحقيقية-افتراضي
                smartLineColor: "#1790E1",
                smartLineThickness: "2",
                smartLineAlpha: "80",
                isSmartLineSlanted: "0",
                doughnutRadius: "90",
                // minPlotHeightForValue: "15",
                legendPosition: "right",
                legendCaption: "رتب المستخدمين",
                baseFont: "Almarai",
                valueFont: "Almarai",
                labelFontColor: "#0075c2"
            },
            // Chart Data
            data: [
                {
                label: "مدير",
                value: "3"
                }, {
                label: "محرر",
                value: "5"
                }, {
                label: "مساهم",
                value: "10"
                }, {
                label: "مشترك",
                value: "25"
                }
            ]
        }
    });

    ///////////////////////////////////////// إحصائيات عدد المشاركات السنوية
    $("#chart-years").insertFusionCharts({
        type: "stackedcolumn2d",
        width: "100%",
        height: "100%",
        dataFormat: "json",
        dataSource: {
            // Chart Configuration
            chart: {
                theme: "fusion",
                caption: "عدد مشاركات الموقع بحسب السنوات",
                subCaption: "إحصائيات تفصيلية لعدد المشاركات سنوياً",
                xAxisName: "السنوات",
                yAxisName: "عدد المشاركات",
                numberPrefix: "",
                numberSuffix: "",
                exportEnabled: "1",
                showValues: "1",
                minPlotHeightForValue: "15",
                plotToolText: "عدد ال$seriesName: <b>$dataValue</b> من <u>$unformattedSum</u>",
                showSum: "1",
                legendPosition: "right",
                legendCaption: "أنواع المشاركات",
                baseFont: "Almarai",
                canvasbgColor: "#1790E1",
                canvasbgAlpha: "10",
                // palettecolors: "#1790E1",
                labelFontColor: "#0075c2",
                xAxisNameFontColor: "#1790E1",
                xAxisNameFontBold: "1",
                xAxisNameBgColor: "#1790E1",
                xAxisNameBgAlpha: "10",
                xAxisNameBorderPadding: "5",
                xAxisNameBorderRadius: "10",
                yAxisNameFontColor: "#343A40",
                yAxisNameFontBold: "1",
                yAxisNameBgColor: "#343A40",
                yAxisNameBgAlpha: "10",
                yAxisNameBorderPadding: "5",
                yAxisNameBorderRadius: "10"
            },
            // Chart Categories
            categories: [{
                category: [
                    {label: "2017"},
                    {label: "2018"},
                    {label: "2019"}]
            }],
            // Chart Data
            dataset: [
                {
                seriesName: "افتراضي",
                data: [
                    {value: "235"},
                    {value: "260"},
                    {value: "290"}]
                }, {
                    seriesName: "مقالات",
                    data: [
                        {value: "202"},
                        {value: "225"},
                        {value: "260"}]
                }, {
                    seriesName: "أخبار",
                    data: [
                        {value: "143"},
                        {value: "162"},
                        {value: "180"}]
                }, {
                    seriesName: "صور",
                    data: [
                        {value: "111"},
                        {value: "128"},
                        {value: "140"}]
                }, {
                    seriesName: "فيديو",
                    data: [
                        {value: "95"},
                        {value: "102"},
                        {value: "115"}]
                }, {
                    seriesName: "صوت",
                    data: [
                        {value: "85"},
                        {value: "92"},
                        {value: "100"}]
                }
            ]
        }
    });

    ///////////////////////////////////////// إحصائيات عدد المشاركات الشهرية
    $("#chart-months").insertFusionCharts({
        type: "stackedcolumn2d",
        width: "100%",
        height: "100%",
        dataFormat: "json",
        dataSource: {
            // Chart Configuration
            chart: {
                theme: "fusion",
                caption: "عدد مشاركات الموقع بحسب الأشهر",
                subCaption: "إحصائيات تفصيلية بحسب عدد المشاركات لعام 2019",
                xAxisName: "الأشهر",
                yAxisName: "عدد المشاركات",
                numberPrefix: "",
                numberSuffix: "",
                exportEnabled: "1",
                showValues: "1",
                minPlotHeightForValue: "15",
                plotToolText: "عدد ال$seriesName: <b>$dataValue</b> من <u>$unformattedSum</u>",
                showSum: "1",
                // legendPosition: "right",
                legendCaption: "أنواع المشاركات",
                baseFont: "Almarai",
                canvasbgColor: "#1790E1",
                canvasbgAlpha: "10",
                // palettecolors: "#1790E1",
                labelDisplay: "rotate",
                slantLabel: "1",
                labelFontColor: "#0075c2",
                xAxisNameFontColor: "#1790E1",
                xAxisNameFontBold: "1",
                xAxisNameBgColor: "#1790E1",
                xAxisNameBgAlpha: "10",
                xAxisNameBorderPadding: "5",
                xAxisNameBorderRadius: "10",
                yAxisNameFontColor: "#343A40",
                yAxisNameFontBold: "1",
                yAxisNameBgColor: "#343A40",
                yAxisNameBgAlpha: "10",
                yAxisNameBorderPadding: "5",
                yAxisNameBorderRadius: "10"
            },
            // Chart Categories
            categories: [{
                category: [
                    {label: "يناير"},
                    {label: "فبراير"},
                    {label: "مارس"},
                    {label: "أبريل"},
                    {label: "مايو"},
                    {label: "يونيو"},
                    {label: "يوليو"},
                    {label: "أغسطس"},
                    {label: "سبتمبر"},
                    {label: "أكتوبر"},
                    {label: "نوفمبر"},
                    {label: "ديسمبر"}]
            }],
            // Chart Data
            dataset: [
                {
                seriesName: "افتراضي",
                data: [
                    {value: "10"},
                    {value: "22"},
                    {value: "30"},
                    {value: "50"},
                    {value: "85"},
                    {value: "102"},
                    {value: "150"},
                    {value: "180"},
                    {value: "205"},
                    {value: "235"},
                    {value: "260"},
                    {value: "290"}]
                }, {
                    seriesName: "مقالات",
                    data: [
                        {value: "8"},
                        {value: "20"},
                        {value: "31"},
                        {value: "47"},
                        {value: "80"},
                        {value: "100"},
                        {value: "125"},
                        {value: "156"},
                        {value: "183"},
                        {value: "202"},
                        {value: "225"},
                        {value: "260"}]
                }, {
                    seriesName: "أخبار",
                    data: [
                        {value: "5"},
                        {value: "15"},
                        {value: "28"},
                        {value: "42"},
                        {value: "71"},
                        {value: "86"},
                        {value: "96"},
                        {value: "105"},
                        {value: "120"},
                        {value: "143"},
                        {value: "162"},
                        {value: "180"}]
                }, {
                    seriesName: "صور",
                    data: [
                        {value: "4"},
                        {value: "12"},
                        {value: "22"},
                        {value: "38"},
                        {value: "49"},
                        {value: "60"},
                        {value: "72"},
                        {value: "86"},
                        {value: "95"},
                        {value: "111"},
                        {value: "128"},
                        {value: "140"}]
                }, {
                    seriesName: "فيديو",
                    data: [
                        {value: "1"},
                        {value: "11"},
                        {value: "20"},
                        {value: "32"},
                        {value: "44"},
                        {value: "55"},
                        {value: "62"},
                        {value: "73"},
                        {value: "85"},
                        {value: "95"},
                        {value: "102"},
                        {value: "115"}]
                }, {
                    seriesName: "صوت",
                    data: [
                        {value: "1"},
                        {value: "9"},
                        {value: "19"},
                        {value: "27"},
                        {value: "38"},
                        {value: "50"},
                        {value: "59"},
                        {value: "70"},
                        {value: "76"},
                        {value: "85"},
                        {value: "92"},
                        {value: "100"}]
                }
            ]
        }
    });

    ///////////////////////////////////////// إحصائيات عدد المشاهدات
    $("#chart-views").insertFusionCharts({
        type: "line",
        width: "100%",
        height: "100%",
        dataFormat: "json",
        dataSource: {
            // Chart Configuration
            chart: {
                theme: "fusion",
                caption: "عدد المشاهدات لآخر 7 أيام",
                subCaption: "إحصائيات تفصيلية بعدد مشاهدات آخر أسبوع",
                xAxisName: "آخر 7 أيام",
                yAxisName: "عدد المشاهدات",
                numberPrefix: "",
                numberSuffix: "",
                exportEnabled: "1",
                showValues: "1",
                plotToolText: "$label: <b>$dataValue</b> مشاهدة",
                baseFont: "Almarai",
                canvasbgColor: "#1790E1",
                canvasbgAlpha: "10",
                // palettecolors: "#1790E1",
                // labelDisplay: "rotate",
                // slantLabel: "1",
                labelFontColor: "#0075c2",
                xAxisNameFontColor: "#1790E1",
                xAxisNameFontBold: "1",
                xAxisNameBgColor: "#1790E1",
                xAxisNameBgAlpha: "10",
                xAxisNameBorderPadding: "5",
                xAxisNameBorderRadius: "10",
                yAxisNameFontColor: "#343A40",
                yAxisNameFontBold: "1",
                yAxisNameBgColor: "#343A40",
                yAxisNameBgAlpha: "10",
                yAxisNameBorderPadding: "5",
                yAxisNameBorderRadius: "10",
                anchorRadius: "6",
                anchorBorderThickness: "2"
            },
            // Chart Data
            data: [
                {
                label: "الجمعة",
                value: "212"
                }, {
                label: "الخميس",
                value: "300"
                }, {
                label: "الأربعاء",
                value: "222"
                },{
                label: "الثلاثاء",
                value: "160"
                }, {
                label: "الاثنين",
                value: "200"
                }, {
                label: "الأحد",
                value: "120"
                }, {
                label: "السبت",
                value: "100"
                }
            ]
        }
    });

    ///////////////////////////////////////// إحصائيات عدد المشاهدات سنوياً
    $("#chart-viewYears").insertFusionCharts({
        type: "line",
        width: "100%",
        height: "100%",
        dataFormat: "json",
        dataSource: {
            // Chart Configuration
            chart: {
                theme: "fusion",
                caption: "عدد المشاهدات بحسب السنوات",
                subCaption: "إحصائيات تفصيلية لعدد المشاهدات سنوياً",
                xAxisName: "السنوات",
                yAxisName: "عدد المشاهدات",
                numberPrefix: "",
                numberSuffix: "",
                exportEnabled: "1",
                showValues: "1",
                plotToolText: "عدد مشاهدات $label<br><b>$dataValue</b> مشاهدة",
                baseFont: "Almarai",
                canvasbgColor: "#1790E1",
                canvasbgAlpha: "10",
                // palettecolors: "#1790E1",
                // labelDisplay: "rotate",
                // slantLabel: "1",
                labelFontColor: "#0075c2",
                xAxisNameFontColor: "#1790E1",
                xAxisNameFontBold: "1",
                xAxisNameBgColor: "#1790E1",
                xAxisNameBgAlpha: "10",
                xAxisNameBorderPadding: "5",
                xAxisNameBorderRadius: "10",
                yAxisNameFontColor: "#343A40",
                yAxisNameFontBold: "1",
                yAxisNameBgColor: "#343A40",
                yAxisNameBgAlpha: "10",
                yAxisNameBorderPadding: "5",
                yAxisNameBorderRadius: "10",
                anchorRadius: "6",
                anchorBorderThickness: "2"
            },
            // Chart Data
            data: [
                {
                label: "2017",
                value: "10000000"
                }, {
                label: "2018",
                value: "12000000"
                }, {
                label: "2019",
                value: "15000000"
                }
            ]
        }
    });
});