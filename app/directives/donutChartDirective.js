(function () {
    'use strict';

    angular.module('HCTRAModule').directive("donutChart", ['operatingSystemSnifferService',
		function (operatingSystemSnifferService) {

		    var width, //width of box the chart is contained in.
			height, //height for radius
			svgHeight, //height of box the chart is contained in.
			translateHeight,  //height used to position chart in box
			radius,
			innerRadius,
			outerRadius;

		    // Label lines and label positioning assistant
		    var pieChartRotation = 180, //Rotate chart so 0 is at the bottom
			pastOuterRadius = 10; //How far the line extends from the chart to the label

		    // Graph Label Positoins
		    var LABEL_11_TO_1 = 1,// Label is at the 11, 12 or 1 o'clock position
				LABEL_10_OR_2 = 2,// Label is in the 10 or 2 o'clock position
				LABEL_3_TO_9 = 3;// All labels are in the 3,4,5,6,7,8, or 9 o'clock 

		    // Text Colors
		    var innerArchBorderColor = "gray",
			outerArchBorderColor = "gray",
			currentLabel = "current",
			monthlyLabel = "monthly",
			minimum = "minimum",
			rebill = "rebill",
			bufferLabel = "buffer",
			startingpoint = "startingpoint",
			pointerLineColor = "#989898",
			currentBalanceRed = 0,
			minimumBalanceYellow = 1,
			currentBalanceGreen = 2,
			rebillWhite = 3,
			avgSpendGrey = 4;

		    // Text Sizes
		    var defaultAmountTextLength = 6,
			defaultAmountTextSize = 20,
			defaultAmountTextSizeForDesktop = 30,
			defaultAmountTextLengthForDesktop = 7,
			defaultLabelTextSize = 10,
			defaultLabelTextSizeForDesktop = 15,
			defaultCircularLabelSize = "12",
			defaultCircularLabelSizeForDesktop = "15";

		    return {
		        restrict: "E",
		        replace: false,
		        template: "<div class='chartBilling'></div>",
		        scope: {
		            data: '='
		        },
		        link: function ($scope) {
		            $scope.isMobile = !operatingSystemSnifferService.isDesktopOs();


		            var setGraphParameters = function (data, isMobile) {
		                var amountObj = getAmountValues(data);

		                var graphLabelPosition = getGraphLabelPosition(amountObj.totalAmount, amountObj.minimumTotal, amountObj.rebillTotal);

		                if (isMobile) {
		                    setMobileParameters(graphLabelPosition);
		                } else {
		                    setDesktopParameters(graphLabelPosition);
		                }
		            };

		            var setMobileParameters = function (graphLabelPosition) {
		                width = 295; //width of box the chart is contained in.
		                height = 375; //height for radius
		                radius = Math.min(width, height) / 2;
		                innerRadius = radius - 95;
		                outerRadius = radius - 65;


		                if (graphLabelPosition === LABEL_11_TO_1) {
		                    svgHeight = 248;
		                    translateHeight = 235;
		                } else if (graphLabelPosition === LABEL_10_OR_2) {
		                    svgHeight = 232;
		                    translateHeight = 199;
		                } else {
		                    svgHeight = 275;
		                    translateHeight = 280;
		                }
		            };

		            var setDesktopParameters = function (graphLabelPosition) {
		                width = 370; //width of box the chart is contained in.
		                height = 375; //height for radius
		                radius = Math.min(width, height) / 2;
		                innerRadius = radius - 110;
		                outerRadius = radius - 65;

		                if (graphLabelPosition === LABEL_11_TO_1) {
		                    svgHeight = 375;
		                    translateHeight = 390; // svgHeight + 5
		                } else if (graphLabelPosition === LABEL_10_OR_2) {
		                    svgHeight = 348;
		                    translateHeight = 335; // svgHeight - 13
		                } else {
		                    svgHeight = 332;
		                    translateHeight = 299; // svgHeight - 33
		                }
		            };

		            var getAmountValues = function (data) {
		                var amountObj = {};
		                for (var index = 0; index < data.length; index++) {
		                    if (data[index].amountType == rebill) {
		                        amountObj.rebillTotal = data[index].amount;
		                    }
		                    if (data[index].amountType == minimum) {
		                        amountObj.minimumTotal = data[index].amount;
		                    }
		                }

		                amountObj.totalAmount = data[data.length - 2].amount;
		                return amountObj;
		            };

		            var getGraphLabelPosition = function (totalAmount, minimumTotal, rebillTotal) {

		                if ((minimumTotal >= (totalAmount * .45) && minimumTotal <= (totalAmount * .65)) ||
							(rebillTotal >= (totalAmount * .45) && rebillTotal <= (totalAmount * .65))) {
		                    return LABEL_11_TO_1;
		                } else if ((rebillTotal > (totalAmount * 0.4) && rebillTotal < (totalAmount * 0.7)) ||
							(minimumTotal > (totalAmount * 0.4) && minimumTotal < (totalAmount * 0.7))) {
		                    return LABEL_10_OR_2;
		                } else {
		                    return LABEL_3_TO_9;
		                }
		            };

		            var runChart = function (data, centerLabel, noLabels, currentBelowMinumum) {

		                setGraphParameters(data, $scope.isMobile);

		                var innerArcBorder = d3.svg.arc()
						  .innerRadius(innerRadius - 1)
						  .outerRadius(innerRadius);

		                var outerArcBorder = d3.svg.arc()
						  .innerRadius(outerRadius)
						  .outerRadius(outerRadius + 1);

		                var arc = d3.svg.arc()
							.outerRadius(outerRadius)
							.innerRadius(innerRadius);

		                var pie = d3.layout.pie()
							.sort(null)
							.value(function (d) { return d.calculatedAmount; });

		                var svg = d3.select(".chartBilling").append("svg")
							.attr("width", width)
							.attr("height", svgHeight)
							.append("g")
							.attr("transform", "translate(" + width / 2 + "," + translateHeight / 2 + ")");

		                data2(data, centerLabel, noLabels);

		                function data2(data, centerLabel, noLabels) {

		                    var piedata = pie(data);

		                    var g = svg.selectAll(".arc")
								.data(piedata)
								.enter()
								.append("g")
								.attr("class", "arc");

		                    // ToDo: If client decides to change chart outline, here is where it would change
		                    g.append("path")
								.attr("fill", innerArchBorderColor)
								.attr("d", innerArcBorder);

		                    g.append("path")
								.attr("fill", outerArchBorderColor)
								.attr("d", outerArcBorder);

		                    g.append("path")
								.attr("d", arc)
								.attr("transform", "rotate(" + pieChartRotation + ")")
								.style("fill", function (d) {
								    //console.log(d.data.color);
								    switch (d.data.color) {
								        case (currentBalanceRed): return "#c13e3e";
								        case (minimumBalanceYellow): return "#faf4a3";
								        case (currentBalanceGreen): return "#92cb7a";
								        case (rebillWhite): return "#ffffff";
								        case (avgSpendGrey): return "#e5e5e5";
								        default: //console.log("Should not have reached here."); return "#ff69b4";
								    }
								});

		                    //console.log(!noLabels);
		                    if (!noLabels) {

		                        g.append("text")
								.attr("transform", function (d) {
								    var a = (d.endAngle + 3.14159265) - Math.PI / 2;
								    //console.log(a);
								    var v = pointdot(a, outerRadius + pastOuterRadius);

								    var degrees = d.endAngle * (180 / Math.PI) + pieChartRotation;
								    var rotation = 0;
								    //var startpoint = 0;


								    if (degrees > 360) {
								        rotation = degrees - 90;
								    } else if (degrees >= 180) {
								        rotation = degrees + 90;
								    } else {
								        rotation = degrees - 90;
								    }

								    //if (degrees > 180) {
								    //    startpoint = rotation;
								    //} else {
								    //    startpoint = -rotation;
								    //}

								    var g = "translate(" + v.x + "," + v.y + ") , rotate(" + rotation + ")";
								    //console.log(g);
								    return g;
								})
								.style("text-anchor", function (d) {
								    var a = d.endAngle * (180 / Math.PI) + pieChartRotation;
								    var l;
								    if (a > 360) {
								        l = "start";
								    } else if (a >= 180) {
								        l = "end";
								    } else {
								        l = "start";
								    }
								    return l;
								})
								.text(function (d) {
								    return d.data.label;
								});

		                        g.selectAll("text").attr("fill", "#666666");
		                        g.selectAll("text").style("fill", "#666666");
		                        g.selectAll("text").style("font-family", "'Avenir LT Std 45 Book Regular'");

		                        if ($scope.isMobile) {
		                            g.selectAll("text").style("font-size", defaultCircularLabelSize + "px");
		                        } else {
		                            g.selectAll("text").style("font-size", defaultCircularLabelSizeForDesktop + "px");
		                        }

		                        var pointers = svg.append("defs")
									.append("marker")
									.attr("id", "circ")
									.attr("markerWidth", 6)
									.attr("markerHeight", 6)
									.attr("refX", 3)
									.attr("refY", 3)
									.append("circle")
									.attr("cx", 3)
									.attr("cy", 3)
									.attr("r", 3);

		                        pointers = g.selectAll("path.pointer")
									.data(piedata);
		                        //"stroke-dasharray"
		                        pointers
									.enter()
									.append("path")
									.attr("class", "pointer")
									.style("stroke-dasharray",
										function (d) {
										    if (d.data.amountType == startingpoint) {
										        // making starting $0.00 a solid line
										        return ("100, 100");
										    } else {
										        // making all other labels dashed
										        return ("8, 8");
										    }
										})
									.style("fill", "none")
									.style("stroke", pointerLineColor)
									.attr("marker-end", "url(#circ)")
									.attr("d", function (d) {
									    if (d.data.amountType !== currentLabel && d.data.amountType !== monthlyLabel && d.data.amountType !== bufferLabel) {
									        var a = (d.endAngle + 3.14159265) - Math.PI / 2;
									        var outerD = pointdot(a, outerRadius + pastOuterRadius);
									        var innerD = pointdot(a, innerRadius);
									        var s = "M" + innerD.x + "," + innerD.y + "L" + innerD.x + "," + innerD.y + " " + outerD.x + "," + outerD.y;
									        //console.log(s);
									        return s;
									    } else {
									        return "";
									    }
									});
		                    }

		                    var legend = svg.selectAll('.legend')
								.data(centerLabel)
								.enter()
								.append('g')
								.attr('class', function (d, i) {
								    //console.log(d);
								    var className;
								    if (i === 0) {
								        // making center label containing the user's current balance adhere to the rules contained in Site.css
								        className = currentBelowMinumum ? 'negative legendAmount' : 'legendAmount';//for css coloring
								    } else {
								        // making center label containing the "current balance" text adhere to the rules contained in Site.css
								        className = 'legendLabel';//for css coloring
								    }
								    return className;
								})
								.attr('transform', function (d, i) {
								    //console.log(d);
								    //console.log(i);
								    var height = 20;
								    var offset = height * 1;
								    var vert = i * offset;
								    return 'translate(' + 0 + ',' + vert + ')';
								})
								// allowing for dynamic text adjustment for the current balance label
								.style('font-size',
									function (d, i) {
									    var standardSize;
									    var standardLength;
									    if ($scope.isMobile) {
									        standardSize = defaultAmountTextSize;
									        standardLength = defaultAmountTextLength;
									    } else {
									        standardSize = defaultAmountTextSizeForDesktop;
									        standardLength = defaultAmountTextLengthForDesktop;
									    }
									    if (i == 0) {
									        if (d.length) {
									            var adjustmentLength = d.length - standardLength;
									            var adjustmentSize = standardSize;
									            while (adjustmentLength != 0) {
									                if (adjustmentLength > 0) {
									                    adjustmentLength--;
									                    adjustmentSize--;
									                } else {
									                    adjustmentLength++;
									                    adjustmentSize++;
									                }
									            }
									            return adjustmentSize + 'px';
									        } else {
									            return standardSize + 'px';
									        }
									    } else {
									        if ($scope.isMobile) {
									            return defaultLabelTextSize;
									        } else {
									            return defaultLabelTextSizeForDesktop;
									        }
									    }
									}
								);

		                    legend.append('text')
								.attr('text-anchor', 'middle')
								.text(function (centerLabel) {
								    return centerLabel;
								});
		                }
		            };

		            var pointdot = function (angle, radius) {
		                var d = {};
		                d.x = radius * Math.cos(angle);
		                d.y = radius * Math.sin(angle);
		                //console.log(d);
		                return d;
		            };

		            $scope.$watch('data', function () {
		                if ($scope.data) {
		                    d3.select(".chartBilling").select("svg").remove();
		                    runChart($scope.data.chartData, $scope.data.centerLabel, $scope.data.noLabels, $scope.data.currentBelowMinumum);
		                }
		            }, true);
		        }
		    };
		}]);

}());