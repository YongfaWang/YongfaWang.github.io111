$(function () {
    map();
function map(){
    var myChart2 = echarts.init(document.getElementById('map_1'));
    const originName = '西安';
    const flyGeo = {
        '漠河': [122.53759,52.97003],
        '阿勒泰': [88.147894,47.850757],
        '长春': [125.8154, 44.2584],
        '洛阳': [112.460299, 34.62677],
        '西安': [108.946466, 34.347269],
        '兰州': [103.84044, 36.067321],
        '乌鲁木齐': [87.62444, 43.830763],
        '包头': [109.846544, 40.662929],
        '西宁': [101.78443, 36.623393],
        '银川': [106.258602, 38.487834],
        '成都': [104.081534, 30.655822],
        '重庆': [106.558434, 29.568996],
        '拉萨': [91.120789, 29.65005],
        '昆明': [102.852448, 24.873998],
        '贵阳': [106.636577, 26.653325],
        '太原': [112.534919, 37.873219],
        '武汉': [114.311582, 30.598467],
        '长沙': [112.945473, 28.234889],
        '南昌': [115.864589, 28.689455],
        '合肥': [117.233443, 31.826578],
        '杭州': [120.215503, 30.253087],
        '广州': [113.271431, 23.135336],
        '北京': [116.413384, 39.910925],
        '天津': [117.209523, 39.093668]
    };
    //飞线数据
    var flyVal = [
        [{name: '西安'}, {name: '漠河', value: 100}],
        [{name: '西安'}, {name: '阿勒泰', value: 100}],
        [{name: '西安'}, {name: '长春', value: 100}],
        [{name: '西安'}, {name: '洛阳', value: 100}],
        [{name: '西安'}, {name: '西安', value: 35}],
        [{name: '西安'}, {name: '兰州', value: 25}],
        [{name: '西安'}, {name: '乌鲁木齐', value: 55}],
        [{name: '西安'}, {name: '包头', value: 60}],
        [{name: '西安'}, {name: '西宁', value: 45}],
        [{name: '西安'}, {name: '银川', value: 35}],
        [{name: '西安'}, {name: '成都', value: 35}],
        [{name: '西安'}, {name: '重庆', value: 40}],
        [{name: '西安'}, {name: '拉萨', value: 45}],
        [{name: '西安'}, {name: '昆明', value: 50}],
        [{name: '西安'}, {name: '贵阳', value: 55}],
        [{name: '西安'}, {name: '太原', value: 60}],
        [{name: '西安'}, {name: '武汉', value: 65}],
        [{name: '西安'}, {name: '长沙', value: 70}],
        [{name: '西安'}, {name: '南昌', value: 75}],
        [{name: '西安'}, {name: '合肥', value: 80}],
        [{name: '西安'}, {name: '杭州', value: 85}],
        [{name: '西安'}, {name: '广州', value: 90}],
        [{name: '西安'}, {name: '北京', value: 95}],
        [{name: '西安'}, {name: '天津', value: 60}],
    ];
    //数据转换，转换后格式：[{fromName:'cityName', toName:'cityName', coords:[[lng, lat], [lng, lat]]}, {...}]
    const convertFlyData = function(data) {
        let res = [];
        for(let i=0;i<data.length;i++) {
            let dataItem = data[i];
            let toCoord = flyGeo[dataItem[0].name];
            let fromCoord = flyGeo[dataItem[1].name];
            if(fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[1].name, 
                    toName: dataItem[0].name, 
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
    };
    //报表配置
    const flySeries = [];
    [[originName, flyVal]].forEach(function(item, i) {
        flySeries.push({   
            name: item[0],
            type: 'lines',
            zlevel: 1,
            symbol: ['none', 'none'],
            symbolSize: 0,
            effect: { //特效线配置
                show: true,
                period: 5, //特效动画时间，单位s
                trailLength: 0.1, //特效尾迹的长度，从0到1
                symbol: 'arrow',
                symbolSize: 5
            },
            lineStyle: {
                normal: {
                    color: '#ffeb7b',
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2 //线的平滑度
                }
            },
            data: convertFlyData(item[1])
        }, {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: { //涟漪特效
                period: 5, //特效动画时长 
                scale: 4, //波纹的最大缩放比例
                brushType: 'stroke' //波纹的绘制方式：stroke | fill
            },
            label: {
                normal: {
                    show: false,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffeb7b'
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[1].name,
                    value: flyGeo[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
    });

    //报表配置项
    option = {
        title: {
            text: '',
            x: 'center',
            top: "20",
            textStyle: {
                color: '#ffeb7b',
                fontSize: 20,
                fontWeight:500
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if(params.value) {
                    return params.name + '-形变量: ' + params.value[2];
                }else {
                    return params.name;
                }
            }
        },
        geo: {
            map: 'china',
            roam: true, //开启鼠标缩放和漫游
            zoom: 1, //地图缩放级别
            selectedMode: false, //选中模式：single | multiple
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            layoutCenter: ['50%', '50%'], //设置后left/right/top/bottom等属性无效
            layoutSize: '110%', //保持地图宽高比
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#4c60ff',
                    borderColor: '#002097'
                },
                emphasis: {
                    areaColor: '#293fff'
                }
            }
        },
        series: flySeries
    };
    
    myChart2.setOption(option);
    window.addEventListener("resize",function (){
        myChart.resize();
    });
}

})