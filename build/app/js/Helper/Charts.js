module.exports = {
	
	renderDoughnutChart: function(el, data, margin, top) {

        var margin = (typeof margin == "undefined") ? 50 : margin;

        /// Get context with jQuery - using jQuery's .get() method.
        var ctx = el.get(0).getContext("2d");

        var width = el.parent().width();

        var options = {
            responsive: true,
            pointLabelFontColor : "white",
            pointLabelFontSize : 14,
            scaleLineColor: "white",
            scaleLineWidth: 2,
            scaleShowLabels : false,
            animation: false,
            inGraphDataShow : true,
            datasetFill : true,
            inGraphDataTmpl: "<%=v1%>",
            spaceLeft : margin,
            spaceRight : margin,
            spaceTop : -60,
            spaceBottom : 0,
            inGraphDataFontSize : 15,
            segmentShowStroke: false,
            inGraphDataFontFamily: "'Helvetica'",
            inGraphDataFontSize: 14,
            inGraphDataFontStyle: "normal",
            inGraphDataFontColor: "#fff",
        };

        el.attr("width",width);
        el.attr("height",width);

        function resize() {

            if (el.parent().width() == width)
                return;

            width = el.parent().width();
            el.attr("width",width);
            el.attr("height",width)
            radar = new Chart(ctx).Doughnut(data,options);
        }

        // This will get the first returned node in the jQuery collection.
        var radar = new Chart(ctx).Doughnut(data, options);
        ctx.clearRect(0, 0, width, width);

        $(window).bind('resize', resize);
    },

    renderRadarChart: function(el, data, fixed) {

        /// Get context with jQuery - using jQuery's .get() method.
        var ctx = el.get(0).getContext("2d");

        var width = el.parent().width();

        var options = {
            responsive: true,
            angleLineColor : "rgba(255,255,255,1)",
            pointLabelFontColor : "white",
            pointLabelFontSize : 14,
            pointLabelFontFamily : "'Helvetica'",
            pointLabelFontStyle : "bold",
            scaleLineColor: "white",
            scaleLineWidth: 2,
            scaleShowLabels : false,
            animation: false,
        };

        if (typeof fixed != "undefined" && fixed) {
            options.scaleOverride = true;
            options.scaleSteps = 4;
            options.scaleStepWidth = 25;
            options.scaleStartValue = 0;
        }

        $( window ).resize(function(event){

             if (el.parent().width() == width)
                return;

            width = el.parent().width();
            el.attr("width",width);
            el.attr("height",width)
            radar = new Chart(ctx).Radar(data,options);
        });

        el.attr("width",width);
        el.attr("height",width);
        var radar = new Chart(ctx).Radar(data, options);
    },

    renderAreaChart: function(el, data) {

        /// Get context with jQuery - using jQuery's .get() method.
        var ctx = el.get(0).getContext("2d");

        var width = el.parent().width();

        var options = {
            responsive: true,
            pointLabelFontColor : "white",
            pointLabelFontSize : 14,
            scaleLineColor: "white",
            scaleLineWidth: 2,
            animation: false,
            inGraphDataShow : true,
            datasetFill : true,
            inGraphDataTmpl: "<%=v3%>",
            inGraphDataFontSize : 15,
            segmentShowStroke: false,
            inGraphDataFontFamily: "'Helvetica'",
            inGraphDataFontSize: 14,
            inGraphDataFontStyle: "normal",
            inGraphDataFontColor: "#fff",
            yAxisLabelWidth: 2,
            inGraphDataShow : true,
            scaleLabel: "<%=value%>",
            scaleFontSize : 14,
            scaleOverride : true,
            scaleSteps : 4,
            scaleStepWidth: 5,
            scaleStartValue : 0,
            scaleFontColor: "white",
            legend : true,
            legendFontFamily : "'Helvetica'",
            legendFontSize : 14,
            legendFontStyle : "bold",
            legendFontColor : "white",
            legendBlockSize : 40,
            legendBorders : false,
            legendBordersSpaceBefore: 20,
            spaceTop : 10,
            spaceBottom : 0,
            spaceLeft : 0,
            spaceRight : 0,
            dynamicDisplay : false,
            scaleShowGridLines : false,
        };

        el.attr("width",width);

        if (width <= 640) {
            el.attr("height",width * 0.75);                
        }

        function resize() {

            if (el.parent().width() == width)
                return;

            width = el.parent().width();
            el.attr("width",width);

            if (width <= 640) {
                el.attr("height",width * 0.75);                
            }

            options.dynamicDisplay = false;

            radar = new Chart(ctx).Line(data,options);
        }

        // This will get the first returned node in the jQuery collection.
        var radar = new Chart(ctx).Line(data, options);

        $(window).bind('resize', resize);

        resize();
    },

    renderStackedBarChart: function(el, data) {

        /// Get context with jQuery - using jQuery's .get() method.
        var ctx = el.get(0).getContext("2d");

        var width = el.parent().width();

        var options = {
            responsive: true,
            pointLabelFontColor : "white",
            pointLabelFontSize : 14,
            scaleLineColor: "white",
            scaleLineWidth: 2,
            animation: false,
            inGraphDataShow : true,
            datasetFill : true,
            inGraphDataTmpl: "<%=v3%>",
            inGraphDataFontSize : 14,
            segmentShowStroke: false,
            inGraphDataFontFamily: "'Helvetica'",
            inGraphDataFontSize: 14,
            inGraphDataFontStyle: "normal",
            inGraphDataFontColor: "#fff",
            yAxisLabelWidth: 2,
            inGraphDataShow : true,
            scaleLabel: "<%=value%>",
            scaleFontSize : 14,
            scaleStartValue : 0,
            scaleOverride : true,
            scaleSteps : 14,
            scaleStepWidth: 1000,
            scaleFontColor: "white",
            legend : true,
            legendFontFamily : "'Helvetica'",
            legendFontSize : 14,
            legendFontStyle : "bold",
            legendFontColor : "white",
            legendBlockSize : 40,
            legendBorders : false,
            legendBordersSpaceBefore: 20,
            spaceTop : 10,
            spaceBottom : 0,
            spaceLeft : 0,
            spaceRight : 0,
            dynamicDisplay : false,
            scaleShowGridLines : false,
        };

        el.attr("width",width);

        if (width <= 640) {
            el.attr("height",width * 0.75);                
        }

        function resize() {

            if (el.parent().width() == width)
                return;

            width = el.parent().width();
            el.attr("width",width);

            if (width <= 640) {
                el.attr("height",width * 0.75);                
            }

            radar = new Chart(ctx).StackedBar(data,options);
        }

        // This will get the first returned node in the jQuery collection.
        var radar = new Chart(ctx).StackedBar(data, options);

        $(window).bind('resize', resize);
    },

    renderPolarChart: function(el, data, margin, top) {

        var margin = (typeof margin == "undefined") ? 50 : margin;

        /// Get context with jQuery - using jQuery's .get() method.
        var ctx = el.get(0).getContext("2d");

        var width = el.parent().width();

        var options = {
            responsive: true,
            pointLabelFontColor : "white",
            pointLabelFontSize : 14,
            scaleLineColor: "rgba(255,255,255,0.2)",
            scaleLineWidth: 2,
            scaleShowLabels : false,
            animation: false,
            inGraphDataShow : true,
            datasetFill : true,
            inGraphDataTmpl: "<%=v1%>",
            spaceLeft : margin,
            spaceRight : margin,
            spaceTop : -60,
            spaceBottom : 0,
            inGraphDataFontSize : 15,
            segmentShowStroke: false,
            inGraphDataFontFamily: "'Helvetica'",
            inGraphDataFontSize: 14,
            inGraphDataFontStyle: "bold",
            inGraphDataFontColor: "#fff",
            startAngle : 0,
            logarithmic: true,
            scaleOverride : true,
            scaleSteps : 8,
            scaleStepWidth: 5,
            scaleStartValue : 0,
        };

        el.attr("width",width);
        el.attr("height",width);

        function resize() {

            if (el.parent().width() == width)
                return;

            width = el.parent().width();
            el.attr("width",width);
            el.attr("height",width)
            radar = new Chart(ctx).PolarArea(data,options);
        }

        // This will get the first returned node in the jQuery collection.
        var radar = new Chart(ctx).PolarArea(data, options);
        ctx.clearRect(0, 0, width, width);

        $(window).bind('resize', resize);
    },

    renderTimeline: function(el, groups, items, options ) {

        var container = el[0];
        var timeline = new vis.Timeline(container);

        timeline.setOptions(options);
        timeline.setGroups(groups);
        timeline.setItems(items);
    }
}