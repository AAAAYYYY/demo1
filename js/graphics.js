function mychart_1(bootMachineNo,downtime,bootData){
				//低开机率top10
				var myChart = document.getElementById('container_01');
				//自适应宽高
				var container_01 = echarts.init(myChart);
				// 指定图表的配置项和数据
                var typeItem = Math.random().toString(16).slice(2,8);
				var color = '#'+typeItem;
				var option = {
					title: {
						text: '低开机率TOP10',
						left: 'center',
						y: 10,
						textStyle: {
							color: '#ffffff',
							fontSize: 15
						}
					},
					tooltip: {},
					legend: {
						x: 'center',
						y: 'bottom',
						data: ['停机时长(M)', '开机率(%)'],
						textStyle: {
							color: '#ffffff',
							fontSize: 15
						}
					},
					grid: {
						left: '10%',
						right: '10%',
						bottom: '20%',
						top: '20%'
					},
					xAxis: {
						data:bootMachineNo,
						axisLabel: {
							color: '#ffffff',
							fontSize: 15
						}, //x轴字体颜色
						axisLine: {
							lineStyle: {
								color: '#cccccc'
							}
						}, //轴线颜色 
						axisTick: {
							show: false
						},
					},
					yAxis: {
						axisLabel: {
							color: '#ffffff',
							fontSize: 15
						}, //y轴字体颜色
						axisLine: {
							show: false
						}, //轴线颜色
						axisTick: {
							show: false
						},
						splitLine: {
							show: true, //x轴网格
							lineStyle: {
								color: '#ffffff',
								width: 2,

							}
						},

					},
					series: [{
						name: '停机时长(M)',
						type: 'bar',
						barWidth: 20,
						data:downtime,
						itemStyle: {
							normal: {
								  color:
								  function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
							} }
						}
					}, {
						name: '开机率(%)',
						type: 'line',
						data:bootData,
						symbolSize: 10,
						symbol: 'circle',
						itemStyle: {
							normal: {
								color: '#ed7d31',
								lineStyle: {
									width: 5, //折线宽度
									color: '#ffff00',
								}
							}

						}
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				container_01.setOption(option);
				window.addEventListener("resize", function() {

					container_01.resize();
				});		
}
function mychart_2(x,y) {
				var container_02 = echarts.init(document.getElementById('container_02'));
				var option = {
					title: {
						text: '低出模率TOP10',
						left: 'center',
						y: 10,
						textStyle: {
							color: '#ffffff',
							fontSize: 15
						}
					},
					tooltip: {},
					grid: {
						top: '20%',
						bottom: '15%'
					},
					xAxis: {
						data: x,
						axisLabel: {
							color: '#ffffff',
							fontSize: 15
						}, //x轴字体颜色
						axisLine: {
							lineStyle: {
								color: '#cccccc'
							}
						}, //轴线颜色
						axisTick: {
							show: false
						},
					},
					yAxis: {
						axisLabel: {
							color: '#ffffff',
							fontSize: 15
						}, //y轴字体颜色
						axisLine: {
							show: false
						}, //轴线颜色
						axisTick: {
							show: false
						},
						splitLine: {
							show: true, //x轴网格
							lineStyle: {
								color: '#ffffff',
								width: 2,
								type: 'solid'
							}
						},
					},
					series: [{
						name: "出模率",
						type: 'bar',
						barWidth: 20,
						data: y,
						itemStyle: {
							normal: {
								color:   function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
							}
							}
						}
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				container_02.setOption(option);
				window.addEventListener("resize", function() {
					container_02.resize();
				});
			}
function mychart_3(x,y) {
				var container_03 = echarts.init(document.getElementById('container_03'));
				// 指定图表的配置项和数据
				var option = {
					title: {
						text: '转产时长TOP10',
						left: 'center',
						y: 10,
						textStyle: {
							color: '#ffffff',
							fontSize: 15
						}
					},
					tooltip: {},
					grid: {
						bottom: '15%',
						top: '20%'
					},
					xAxis: {
						data: x,
						axisLabel: {
							color: '#ffffff',
							fontSize: 15
						}, //x轴字体颜色
						axisLine: {
							lineStyle: {
								color: '#cccccc'
							}
						}, //轴线颜色
						axisTick: {
							show: false
						},
					},
					yAxis: {
						axisLabel: {
							color: '#ffffff',
							fontSize: 15
						}, //y轴字体颜色
						axisLine: {
							show: false
						}, //轴线颜色
						axisTick: {
							show: false
						},
						splitLine: {
							show: true, //x轴网格
							lineStyle: {
								color: '#ffffff',
								width: 2,
								type: 'solid'
							}
						},
					},
					series: [{
						name: '停机时长(M)',
						type: 'bar',
						barWidth: 20,
						data: y,
						itemStyle: {
							normal: {
								color:   function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
							}
							}
						}
					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				container_03.setOption(option);
				window.addEventListener("resize", function() {
					container_03.resize();
				});
			}

		