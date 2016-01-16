// JavaScript Document

$(document).ready(function(){
	
	$.jqplot.config.enablePlugins = true;
	var s1 = [2, 6, 4, 9, 6, 10];
	var ticks = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
	
	plotChart = $.jqplot('chartdiv', [s1], {
		// Only animate if we're not using excanvas (not in IE 7 or IE 8)..
		animate: !$.jqplot.use_excanvas,
		seriesDefaults:{
			renderer:$.jqplot.BarRenderer,
			pointLabels: { show: true }
		},
		axesDefaults: {
			tickOptions: {
				fontFamily: 'Verdana',
				fontSize: '10pt'
			}
		},		
		series:[{showMarker:false}],
		axes: {
			xaxis: {
				label:'MONTHS',
				renderer: $.jqplot.CategoryAxisRenderer,
				ticks: ticks
			},
			yaxis:{
				label:'DOLLARS',
				labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
				tickOptions: {
				  formatString: '$%d'
				}
			}
		}
		
	
	});
	
	window.onresize = function(event) {
		plotChart.replot();
	}
	
});