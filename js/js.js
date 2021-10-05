 $(window).load(function(){  
             $(".loading").fadeOut()
            })  
			
/****/
$(document).ready(function(){
	var whei=$(window).width()
	$("html").css({fontSize:whei/20})
	$(window).resize(function(){
		var whei=$(window).width()
	 $("html").css({fontSize:whei/20})
});
	});


 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {
    
echarts_1()
echarts_2()
echarts_3()
//echarts_4()
// echarts_5()


function echarts_1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart1'));

   option = {
//  backgroundColor: '#00265f',
tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    }
},
grid: {
    left: '0%',
    top:'10px',
    right: '0%',
    bottom: '4%',
   containLabel: true
},
xAxis: [{
    type: 'category',
    data: ['西安z01', '西安z02', '西安z03', '西安z04', '西安z06', '西安z07', '西安z010'],
    axisLine: {
        show: true,
        lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 1,
            type: "solid"
        },
    },
    
    axisTick: {
        show: false,
    },
    axisLabel:  {
            interval: 0,
           // rotate:50,
            show: true,
            splitNumber: 15,
            textStyle: {
                 color: "rgba(255,255,255,.6)",
                fontSize: '12',
            },
        },
}],
yAxis: [{
    type: 'value',
    axisLabel: {
       //formatter: '{value} %'
        show:true,
         textStyle: {
                 color: "rgba(255,255,255,.6)",
                fontSize: '12',
            },
    },
    axisTick: {
        show: false,
    },
    axisLine: {
        show: true,
        lineStyle: {
            color: "rgba(255,255,255,.1	)",
            width: 1,
            type: "solid"
        },
    },
    splitLine: {
        lineStyle: {
           color: "rgba(255,255,255,.1)",
        }
    }
}],
series: [
    {
    type: 'bar',
    data: [2, 3, 3, 9, 15, 12, 6],
    barWidth:'45%', //柱子宽度
   // barGap: 1, //柱子之间间距
    itemStyle: {
        normal: {
            color:'#2f89cf',
            opacity: 1,
            barBorderRadius: 5,
        }
    }
}
    
]
};
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function echarts_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.getElementById('fb1')); 
    option8 = {
        // title: [{
        //     text: '年龄分布',
        //     left: 'center',
        //     textStyle: {
        //         color: '#fff',
        //         fontSize:'16'
        //     }
        // }],
		
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position:function(p){   //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
		
        legend: {
            top:'85%',
			left: 'center',
            itemWidth: 15,
            itemHeight: 10,
            data:['正常站','关注站','警示站','警报站'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize:'12',
            }
        },
        series: [
            {
                name:'设备占比分布',
                type:'pie',
                center: ['50%', '42%'],
                radius: ['10%', '70%'],
				roseType: 'area',
				itemStyle: {
				  borderRadius: 8,
				},
                color: ['#00d887', '#249cf9', '#fdb629', '#4b5cc4', '#06a0ab','#06b4ab','#06c8ab','#06dcab'],	
                label: {show:true},
                labelLine: {show:true},
				label: {
					normal: {
						formatter: "{b} {d}%",
					}
				},
                data:[
                    {value:60, name:'正常站'},
                    {value:40, name:'关注站'},
                    {value:15, name:'警示站'},
                    {value:20, name:'警报站'}
                ]
            }
        ]
    };
     // 使用刚指定的配置项和数据显示图表。
     myChart1.setOption(option8);
     window.addEventListener("resize",function(){
         myChart1.resize();
     });
}
function echarts_3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart3 = echarts.init(document.getElementById('fb2')); 
    option3 = {
        // title: [{
        //     text: '年龄分布',
        //     left: 'center',
        //     textStyle: {
        //         color: '#fff',
        //         fontSize:'16'
        //     }
        // }],
		
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position:function(p){   //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
		
        legend: {
			orient: 'vertical',
			left: 'left',
            itemWidth: 10,
            itemHeight: 10,
            data:['西安长安','西安雁塔','西安曲江','西安莲湖','西安高新','北京海淀','北京新城'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize:'10',
            }
        },
        series: [
            {
                name:'设备占比分布',
                type:'pie',
                center: ['50%', '42%'],
                radius: ['10%', '70%'],
				roseType: 'area',
				itemStyle: {
				  borderRadius: 8,
				},
                color: ['#00d887', '#249cf9', '#fdb629', '#4b5cc4', '#06a0ab','#06b4ab','#06c8ab','#06dcab'],	
                label: {show:true},
                labelLine: {show:true},
				label: {
					normal: {
						formatter: "{b}",
					}
				},
                data:[
                    {value:45, name:'西安长安'},
                    {value:40, name:'西安雁塔'},
                    {value:38, name:'西安曲江'},
					{value:44, name:'西安莲湖'},
                    {value:39, name:'西安高新'},
                    {value:43, name:'北京海淀'},
                    {value:30, name:'北京新城'}
                ]
            }
        ]
    };
     // 使用刚指定的配置项和数据显示图表。
     myChart3.setOption(option3);
     window.addEventListener("resize",function(){
         myChart3.resize();
     });
}
function echarts_5() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart5'));

    option1 = {
        tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
    legend: {
    top:'0%',
        data:['北','东'],
        textStyle: {
           color: 'rgba(255,255,255,.5)',
           fontSize:'12',
        }
    },
    grid: {
        left: '10',
        top: '30',
        right: '10',
        bottom: '-20',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel:  {
                textStyle: {
                     color: "rgba(255,255,255,.6)",
                    fontSize:12,
                },
            },
        axisLine: {
            lineStyle: { 
                color: 'rgba(255,255,255,.2)'
            }

        },

   data: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00','10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,
    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
                     color: "rgba(255,255,255,.6)",
                    fontSize:12,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
        }
    }],
    series: [
        {
        name: '北',
        type: 'line',
         smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            
            normal: {
                color: '#0184d5',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(1, 132, 213, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(1, 132, 213, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
            itemStyle: {
            normal: {
                color: '#0184d5',
                borderColor: 'rgba(221, 220, 107, .1)',
                borderWidth: 12
            }
        },
        data: [1, 2, 3, 2, 1, 5, 4, 3, 2, 1, 2, 4,3, 1, 5, 4, 3, 2, 1, 6, 5, 4, 3, 2]

    }, 
{
        name: '东',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            
            normal: {
                color: '#00d887',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 216, 135, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 216, 135, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
            itemStyle: {
            normal: {
                color: '#00d887',
                borderColor: 'rgba(221, 220, 107, .1)',
                borderWidth: 12
            }
        },
        data: [5, 3, 5, 4, 4, 5, 4, 5, 6, 4, 6, 4, 4, 3, 5, 6, 4, 5, 3, 3, 5, 5, 5, 4]

    }, 
    
         ]

};
      
       myChart.setOption(option1);
       window.addEventListener("resize",function(){
           myChart.resize();
       });
   $(".sebtn a").click(function(){
$(this).addClass("active").siblings().removeClass("active")
})
$(".sebtn a").eq(0).click(function(){
    myChart.setOption(option1);
})
$(".sebtn a").eq(1).click(function(){
    myChart.setOption(option2);
})
$(".sebtn a").eq(2).click(function(){
    myChart.setOption(option3);
})
   
   }
function echarts_4() {
     // 基于准备好的dom，初始化echarts实例
     var myChart = echarts.init(document.getElementById('echart4'));

     option1 = {
         tooltip: {
         trigger: 'axis',
         axisPointer: {
             lineStyle: {
                 color: '#dddc6b'
             }
         }
     },
             legend: {
     top:'0%',
         data:['北','东'],
                 textStyle: {
            color: 'rgba(255,255,255,.5)',
             fontSize:'12',
         }
     },
     grid: {
         left: '10',
         top: '30',
         right: '10',
         bottom: '-20',
         containLabel: true
     },
 
     xAxis: [{
         type: 'category',
         boundaryGap: false,
 axisLabel:  {
                 textStyle: {
                      color: "rgba(255,255,255,.6)",
                     fontSize:12,
                 },
             },
         axisLine: {
             lineStyle: { 
                 color: 'rgba(255,255,255,.2)'
             }
 
         },
 
    data: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00','10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
 
     }, {
 
         axisPointer: {show: false},
         axisLine: {  show: false},
         position: 'bottom',
         offset: 20,
     }],
 
     yAxis: [{
         type: 'value',
         axisTick: {show: false},
         axisLine: {
             lineStyle: {
                 color: 'rgba(255,255,255,.1)'
             }
         },
        axisLabel:  {
                 textStyle: {
                      color: "rgba(255,255,255,.6)",
                     fontSize:12,
                 },
             },
 
         splitLine: {
             lineStyle: {
                  color: 'rgba(255,255,255,.1)'
             }
         }
     }],
     series: [
         {
         name: '北',
         type: 'line',
          smooth: true,
         symbol: 'circle',
         symbolSize: 5,
         showSymbol: false,
         lineStyle: {
             
             normal: {
                 color: '#0184d5',
                 width: 2
             }
         },
         areaStyle: {
             normal: {
                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                     offset: 0,
                     color: 'rgba(1, 132, 213, 0.4)'
                 }, {
                     offset: 0.8,
                     color: 'rgba(1, 132, 213, 0.1)'
                 }], false),
                 shadowColor: 'rgba(0, 0, 0, 0.1)',
             }
         },
             itemStyle: {
             normal: {
                 color: '#0184d5',
                 borderColor: 'rgba(221, 220, 107, .1)',
                 borderWidth: 12
             }
         },
         data: [3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4,3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4]
 
     }, 
 {
         name: '东',
         type: 'line',
         smooth: true,
         symbol: 'circle',
         symbolSize: 5,
         showSymbol: false,
         lineStyle: {
             
             normal: {
                 color: '#00d887',
                 width: 2
             }
         },
         areaStyle: {
             normal: {
                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                     offset: 0,
                     color: 'rgba(0, 216, 135, 0.4)'
                 }, {
                     offset: 0.8,
                     color: 'rgba(0, 216, 135, 0.1)'
                 }], false),
                 shadowColor: 'rgba(0, 0, 0, 0.1)',
             }
         },
             itemStyle: {
             normal: {
                 color: '#00d887',
                 borderColor: 'rgba(221, 220, 107, .1)',
                 borderWidth: 12
             }
         },
         data: [5, 3, 5, 6, 1, 5, 3, 5, 6, 4, 6, 4, 10, 3, 5, 6, 1, 5, 3, 7, 2, 5, 1, 4]
 
     }, 
     
          ]
 
 };
       
        myChart.setOption(option1);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
	$(".sebtn a").click(function(){
$(this).addClass("active").siblings().removeClass("active")
})
$(".sebtn a").eq(0).click(function(){
	 myChart.setOption(option1);
})
$(".sebtn a").eq(1).click(function(){
	 myChart.setOption(option2);
})
$(".sebtn a").eq(2).click(function(){
	 myChart.setOption(option3);
})
	
    }

function bt01() {
 var myChart = echarts.init(document.getElementById('bt01'));
	var data1=104//己完成
var data2=18//未完成
var data3=data1/(data1+data2)*100
option = {
    title: [{
          text: data3.toFixed(1)+'%',
        x: 'center', y: '54%',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#fff'
        }
    }, {
        text: '己完成',
        x: 'center', y: '68%',
        textStyle: {
            fontSize: 10,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,.6)'
        }

    }, {
        text: '字段名称4',
        x: 'center',  y: '20',
        textStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#fff'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color: ['#58c485', '#ea7231'],
    series: [
		{
        name: '检点',
        type: 'pie', center: ['50%', '65%'], radius: ['45%', '60%'],
        startAngle: 360,
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: data1,
                name: '己完成'
            },
            {
                value: data2,
                name: '未完成'

            },


        ]

    }]

};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function bt02() {
 var myChart = echarts.init(document.getElementById('bt02'));
var data1=14//己完成
var data2=18//未完成
var data3=data1/(data1+data2)*100
option = {
    title: [{
          text: data3.toFixed(1)+'%',
        x: 'center', y: '54%',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#fff'
        }
    }, {
        text: '己完成',
        x: 'center', y: '68%',
        textStyle: {
            fontSize: 10,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,.6)'
        }

    }, {
        text: '字段名称1',
         x: 'center',  y: '20',
        textStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#fff'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color: ['#58c485', '#ea7231'],
    series: [
		{
        name: '检点',
        type: 'pie', center: ['50%', '65%'], radius: ['45%', '60%'],
        startAngle: 360,
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: data1,
                name: '己完成'
            },
            {
                value: data2,
                name: '未完成'

            },


        ]

    }]

};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function bt03() {
 var myChart = echarts.init(document.getElementById('bt03'));
var data1=104//己完成
var data2=108//未完成
var data3=data1/(data1+data2)*100
option = {
    title: [ {
        text: data3.toFixed(1)+'%',
        x: 'center', y: '54%',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#fff'
        }
    },
			{
        text: '己完成',
        x: 'center', y: '68%',
        textStyle: {
            fontSize: 10,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,.6)'
        }

    }, {
        text: '字段名称2',
         x: 'center',  y: '20',
        textStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#fff'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color: ['#58c485', '#ea7231'],
    series: [
		{
        name: '检点',
        type: 'pie', center: ['50%', '65%'], radius: ['45%', '60%'],
        startAngle: 360,
        avoidLabelOverlap: false,
        label: {show: false,
           
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [
            {
                value: data1,
                name: '己完成'

            },{
                value: data2,
                name: '未完成'
            },
        ]

    }]

};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function bt04() {
 var myChart = echarts.init(document.getElementById('bt04'));
var data1=1000//己完成
var data2=552//未完成
var data3=data1/(data1+data2)*100
option = {
    title: [{
         text: data3.toFixed(1)+'%',
        x: 'center', y: '54%',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#fff'
        }
    }, {
        text: '己完成',
        x: 'center', y: '68%',
        textStyle: {
            fontSize: 10,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,.6)'
        }

    }, {
        text: '字段名称3',
         x: 'center',
        y: '20',
        textStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#fff'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color: ['#58c485', '#ea7231'],
    series: [
		{
        name: '检点',
        type: 'pie',
        center: ['50%', '65%'], radius: ['45%', '60%'],
        startAngle: 360,
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: data1,
                name: '己完成'
            },
            {
                value: data2,
                name: '未完成'

            },


        ]

    }]

};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})



		
		
		


		



















