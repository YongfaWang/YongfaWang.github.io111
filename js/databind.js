url = 'http://127.0.0.1:3000/'
/**
 * 监测设备站点信息
 */
$.getJSON(url + 'deviceinfo', {}, function (data) {
    // 在这里处理数据, data就是获取得到的数组
    for (var i = 0; i < data.length; i++)
        $("#zhandian").append("<li><p><span>" + data[i].area + "</span><span>" + data[i].address + "</span><span>" + data[i].status + "</span></p></li>");
    console.log("渲染完成");
});

/**
 * 形变量曲线图
 */
$.getJSON(url + 'fvar', {}, function (data) {
    // 在这里处理数据, data就是获取得到的
    // 东和北的曲线谁最小谁为循环次数，这样是为了防止空指针访问(undefined)
    time = [];
    E = [];
    N = [];
    for (var i = 0; i < data.length; i++) {
        time[i] = data[i].time;
        E[i] = data[i].E;
        N[i] = data[i].N;
    }
    // 渲染开始 ------------------------------------------------
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
            top: '0%',
            data: ['北', '东'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: '12',
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
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12,
                },
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.2)'
                }

            },

            // data: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
            data: time

        }, {

            axisPointer: { show: false },
            axisLine: { show: false },
            position: 'bottom',
            offset: 20,
        }],

        yAxis: [{
            type: 'value',
            axisTick: { show: false },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12,
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
                // data: [3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4, 3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4]
                data: N

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
                // data: [5, 3, 5, 6, 1, 5, 3, 5, 6, 4, 6, 4, 10, 3, 5, 6, 1, 5, 3, 7, 2, 5, 1, 4]
                data: E

            },

        ]

    };

    myChart.setOption(option1);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    $(".sebtn a").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
    })
    $(".sebtn a").eq(0).click(function () {
        myChart.setOption(option1);
    })
    $(".sebtn a").eq(1).click(function () {
        myChart.setOption(option2);
    })
    $(".sebtn a").eq(2).click(function () {
        myChart.setOption(option3);
    })
    // 结束渲染 ------------------------------------------------
});

/**
 * 形变量预测曲线图（24小时）
 */
$.getJSON(url + 'var', {}, function (data) {
    time = [];
    E = [];
    N = [];
    for (var i = 0; i < data.length; i++) {
        time[i] = data[i].time;
        E[i] = data[i].E;
        N[i] = data[i].N;
    }
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
            top: '0%',
            data: ['北', '东'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: '12',
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
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12,
                },
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.2)'
                }

            },

            // data: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00','10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
            data: time

        }, {

            axisPointer: { show: false },
            axisLine: { show: false },
            position: 'bottom',
            offset: 20,
        }],

        yAxis: [{
            type: 'value',
            axisTick: { show: false },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12,
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
                // data: [1, 2, 3, 2, 1, 5, 4, 3, 2, 1, 2, 4,3, 1, 5, 4, 3, 2, 1, 6, 5, 4, 3, 2]
                data: N

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
                // data: [5, 3, 5, 4, 4, 5, 4, 5, 6, 4, 6, 4, 4, 3, 5, 6, 4, 5, 3, 3, 5, 5, 5, 4]
                data: E
            },
        ]
    };
    myChart.setOption(option1);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    $(".sebtn a").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
    })
    $(".sebtn a").eq(0).click(function () {
        myChart.setOption(option1);
    })
    $(".sebtn a").eq(1).click(function () {
        myChart.setOption(option2);
    })
    $(".sebtn a").eq(2).click(function () {
        myChart.setOption(option3);
    })
});
