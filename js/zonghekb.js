var socket;
var vueapp;

window.onload = function() {
	vueapp = new Vue({
		el: '#app',
		data: {
			integrateList:[{
				id: 12,
				machineNum: 'D99', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: "",
				status: 2,
				color: '#fffff'
			},
			{
				id: 26,
				machineNum: 'D83', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 6,
				status: 2,
				color: '#fffff'
			},
			{
				id: 46,
				machineNum: 'D02', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 1,
				status: 1,
				color: '#fffff'
			},
			{
				id: 106,
				machineNum: 'D06', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 0,
				status: 1,
				color: '#fffff'
			},
			{
				id: 107,
				machineNum: 'D07', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 1,
				status: 1,
				color: '#fffff'
			},
			{
				id: 108,
				machineNum: 'D08', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 1,
				status: 1,
				color: '#fffff'
			},
			{
				id: 109,
				machineNum: 'D09', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 1,
				status: 1,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 0,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 3,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 4,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 2,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 1,
				status: 2,
				color: '#fffff'
			},
			{
				id: 26,
				machineNum: 'D33', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: '',
				status: 1,
				color: '#fffff'
			},
			{
				id: 46,
				machineNum: 'D02', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 1,
				status: 1,
				color: '#fffff'
			},
			{
				id: 106,
				machineNum: 'D06', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 0,
				status: 1,
				color: '#fffff'
			},
			{
				id: 107,
				machineNum: 'D07', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 1,
				status: 1,
				color: '#fffff'
			},
			{
				id: 108,
				machineNum: 'D08', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 1,
				status: 1,
				color: '#fffff'
			},
			{
				id: 109,
				machineNum: 'D09', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 1,
				status: 1,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 0,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 3,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 4,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 2,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
				id: 12,
				machineNum: 'D01', //机器编号
				time: '2019-8-29', //日期
				ActualNum: 90, //实际产出数量
				price: 100, //定额
				bootTime: 30, //开机时间
				switchRate: '70%', //开机率
				stdModNum: 40, //标准模腔数
				useModNum: 30, //使用模腔数
				productRate: '80', //出模率
				machineStatus: 5,
				status: 2,
				color: '#fffff'
			},
			{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 1,
					status: 2,
					color: '#fffff'
				},
				{
					id: 26,
					machineNum: 'D03', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 1,
					status: 1,
					color: '#fffff'
				},
				{
					id: 46,
					machineNum: 'D02', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 1,
					status: 1,
					color: '#fffff'
				},
				{
					id: 106,
					machineNum: 'D06', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 0,
					status: 1,
					color: '#fffff'
				},
				{
					id: 107,
					machineNum: 'D07', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 1,
					status: 1,
					color: '#fffff'
				},
				{
					id: 108,
					machineNum: 'D08', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 1,
					status: 1,
					color: '#fffff'
				},
				{
					id: 109,
					machineNum: 'D09', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 1,
					status: 1,
					color: '#fffff'
				},
				{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 5,
					status: 2,
					color: '#fffff'
				},
				{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 5,
					status: 2,
					color: '#fffff'
				},
				{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 5,
					status: 2,
					color: '#fffff'
				},
				{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 5,
					status: 2,
					color: '#fffff'
				},
				{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 5,
					status: 2,
					color: '#fffff'
				},
				{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 5,
					status: 2,
					color: '#fffff'
				},
				{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 5,
					status: 2,
					color: '#fffff'
				},
				{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 5,
					status: 2,
					color: '#fffff'
				},
				{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 5,
					status: 2,
					color: '#fffff'
				},
				{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 5,
					status: 2,
					color: '#fffff'
				},
				{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 5,
					status: 2,
					color: '#fffff'
				},
				{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 5,
					status: 2,
					color: '#fffff'
				},
				{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 0,
					status: 2,
					color: '#fffff'
				},
				{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 5,
					status: 2,
					color: '#fffff'
				},
				{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 3,
					status: 2,
					color: '#fffff'
				},
				{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 4,
					status: 2,
					color: '#fffff'
				},
				{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 2,
					status: 2,
					color: '#fffff'
				},
				{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 5,
					status: 2,
					color: '#fffff'
				},
				{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 5,
					status: 2,
					color: '#fffff'
				},
				{
					id: 12,
					machineNum: 'D01', //机器编号
					time: '2019-8-29', //日期
					ActualNum: 90, //实际产出数量
					price: 100, //定额
					bootTime: 30, //开机时间
					switchRate: '70%', //开机率
					stdModNum: 40, //标准模腔数
					useModNum: 30, //使用模腔数
					productRate: '80', //出模率
					machineStatus: 5,
					status: 2,
					color: '#fffff'
				},
				{
						id: 12,
						machineNum: 'D01', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 1,
						status: 2,
						color: '#fffff'
					},
					{
						id: 26,
						machineNum: 'D03', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 1,
						status: 1,
						color: '#fffff'
					},
					{
						id: 46,
						machineNum: 'D02', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 1,
						status: 1,
						color: '#fffff'
					},
					{
						id: 106,
						machineNum: 'D06', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 0,
						status: 1,
						color: '#fffff'
					},
					{
						id: 107,
						machineNum: 'D07', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 1,
						status: 1,
						color: '#fffff'
					},
					{
						id: 108,
						machineNum: 'D08', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 1,
						status: 1,
						color: '#fffff'
					},
					{
						id: 109,
						machineNum: 'D09', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 1,
						status: 1,
						color: '#fffff'
					},
					{
						id: 12,
						machineNum: 'D01', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 5,
						status: 2,
						color: '#fffff'
					},
					{
						id: 12,
						machineNum: 'D01', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 5,
						status: 2,
						color: '#fffff'
					},
					{
						id: 12,
						machineNum: 'D01', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 5,
						status: 2,
						color: '#fffff'
					},
					{
						id: 12,
						machineNum: 'D01', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 5,
						status: 2,
						color: '#fffff'
					},
					{
						id: 12,
						machineNum: 'D01', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 5,
						status: 2,
						color: '#fffff'
					},
					{
						id: 12,
						machineNum: 'D01', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 5,
						status: 2,
						color: '#fffff'
					},
					{
						id: 12,
						machineNum: 'D01', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 5,
						status: 2,
						color: '#fffff'
					},
					{
						id: 12,
						machineNum: 'D01', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 5,
						status: 2,
						color: '#fffff'
					},
					{
						id: 12,
						machineNum: 'D01', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 5,
						status: 2,
						color: '#fffff'
					},
					{
						id: 12,
						machineNum: 'D01', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 5,
						status: 2,
						color: '#fffff'
					},
					{
						id: 12,
						machineNum: 'D01', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 5,
						status: 2,
						color: '#fffff'
					},
					{
						id: 12,
						machineNum: 'D01', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 5,
						status: 2,
						color: '#fffff'
					},
					{
						id: 12,
						machineNum: 'D01', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 0,
						status: 2,
						color: '#fffff'
					},
					{
						id: 12,
						machineNum: 'D01', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 5,
						status: 2,
						color: '#fffff'
					},
					{
						id: 12,
						machineNum: 'D01', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 3,
						status: 2,
						color: '#fffff'
					},
					{
						id: 12,
						machineNum: 'D01', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 4,
						status: 2,
						color: '#fffff'
					},
					{
						id: 12,
						machineNum: 'D01', //机器编号
						time: '2019-8-29', //日期
						ActualNum: 90, //实际产出数量
						price: 100, //定额
						bootTime: 30, //开机时间
						switchRate: '70%', //开机率
						stdModNum: 40, //标准模腔数
						useModNum: 30, //使用模腔数
						productRate: '80', //出模率
						machineStatus: 2,
						status: 2,
						color: '#fffff'
					},
					{
							id: 12,
							machineNum: 'D01', //机器编号
							time: '2019-8-29', //日期
							ActualNum: 90, //实际产出数量
							price: 100, //定额
							bootTime: 30, //开机时间
							switchRate: '70%', //开机率
							stdModNum: 40, //标准模腔数
							useModNum: 30, //使用模腔数
							productRate: '80', //出模率
							machineStatus: 1,
							status: 2,
							color: '#fffff'
						},
						{
							id: 26,
							machineNum: 'D03', //机器编号
							time: '2019-8-29', //日期
							ActualNum: 90, //实际产出数量
							price: 100, //定额
							bootTime: 30, //开机时间
							switchRate: '70%', //开机率
							stdModNum: 40, //标准模腔数
							useModNum: 30, //使用模腔数
							productRate: '80', //出模率
							machineStatus: 1,
							status: 1,
							color: '#fffff'
						},
						{
							id: 46,
							machineNum: 'D02', //机器编号
							time: '2019-8-29', //日期
							ActualNum: 90, //实际产出数量
							price: 100, //定额
							bootTime: 30, //开机时间
							switchRate: '70%', //开机率
							stdModNum: 40, //标准模腔数
							useModNum: 30, //使用模腔数
							productRate: '80', //出模率
							machineStatus: 1,
							status: 1,
							color: '#fffff'
						},
						{
							id: 106,
							machineNum: 'D06', //机器编号
							time: '2019-8-29', //日期
							ActualNum: 90, //实际产出数量
							price: 100, //定额
							bootTime: 30, //开机时间
							switchRate: '70%', //开机率
							stdModNum: 40, //标准模腔数
							useModNum: 30, //使用模腔数
							productRate: '80', //出模率
							machineStatus: 2,
							status: 1,
							color: '#fffff'
						}],

			nowTime: "",
			downtime1: [1, 1, 1, 1, 1, 1, 1, 1, 1],
			fault: false, //故障
			changeColor: false, //换色
			changeModel: false,
			Z: false, //成型周期异常
			S: false, //射胶时长异常
			R: false, //融胶时长异常
			L: false, //冷却时长异常
			W: false, //射胶终点异常
			N: false, //正常状态
			downtime: false,
			integrateLists: []
		},
		methods: {
			init: function() {
				var _self = this;
				//获取综合看板监控数据
				_self.getDatas();
				_self.getNowTime();
				//网络监测
				_self.ConnectMonitor();
				_self.mychart1();
				_self.mychart2();
				_self.mychart3();
				_self.chunkArrayInGroups(_self.integrateList, 15);
			},
			getDatas: function() {
				var _self = this;
				$.ajax({
					type: "post",
					url: 'http://zhuojia.mes.iplascloud.com/webapi/BoardService/GetOrderMaterial',
					data: {},
					dataType: 'json',
					crossDomain: true,
					success: function(res) {
						_self.integrateList = res.Result;

					},
					error: function(res) {
						console.log(res);
					}
				});
			},
			getNowTime: function() {
				var _this = this;
				setInterval(function() {
					var now = new Date();
					var h = now.getHours();
					var m = now.getMinutes();
					var s = now.getSeconds();
					if (h < 10) {
						h = "0" + h;
					}
					if (m < 10) {
						m = "0" + m;
					}
					if (s < 10) {
						s = "0" + s;
					}
					_this.nowTime = h + ":" + m + ':' + s;

				}, 1);
			},
			//网络监测
			ConnectMonitor: function() {
				if (!socket) {
					socket = io('ws://zhuojia.mes.iplascloud.com:3000/collect');
				}

				//合模数据
				socket.on('integrateProductEvent', function(data) {
					//alert(JSON.stringify(data))
					for (i = 0; i < vueapp.$data.integrateList.length; i++) {

					}
				});
			},
			mychart1: function() {
				var _self = this;
				mychart_1(_self.downtime1, _self.downtime1, _self.downtime1);
			},
			mychart2: function() {
				var _self = this;
				mychart_2(_self.downtime1, _self.downtime1);

			},
			mychart3: function() {
				var _self = this;
				mychart_3(_self.downtime1, _self.downtime1);
			},
			//状态更换
			 getbackgroundColor: function(statu, machineStatu) {
				//待机状态
				if (statu == 1) {
					//故障
					if (machineStatu == 0) {
						return this.fault = true;
					}
					//换色
					else if (machineStatu == 1) {
						return this.changeColor = true;
					}
					//换模
					else{
						return this.changeModel = true;
					}
				}
				//生产状态
				else if (statu == 2) {
					//成型周期异常
					if (machineStatu == 0) {
						return this.Z = true;
					}
					//射胶时长异常
					else if (machineStatu == 1) {
						return this.S = true;
					}
					//融胶时长异常
					else if (machineStatu == 2) {
						return this.R = true;
					}
					//冷却时长异常
					else if (machineStatu == 3) {
						return this.L = true;
					}
					//射胶终点异常
					else if (machineStatu == 4) {
						return this.W = true;
					} else {
						return this.N = true;
					}
				}
				//停机状态
				else if (statu == 0) {
					return this.downtime = true;
				}
			},
			//数组合并
			chunkArrayInGroups: function(arr, size) {
			    var _this = this;
				let length = arr.length;
				let i = Math.ceil(length / size * 1.0);
				let j = 0;
				while (j < i) {
					let spare = length - j * size >= size ? size : length - j * size;
					let temp = arr.slice(j * size, j * size + spare);
					_this.integrateLists.push(temp);
					j++;
				}
				return _this.integrateLists;
			}

 
		},
		mounted: function() {
			var _self = this;
			_self.init();
		}
	});

}
