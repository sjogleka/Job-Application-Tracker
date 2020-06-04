angular.module('appModule')
	.component('interview', {
		templateUrl: 'app/appModule/interview/index.html',
		//templateUrl: 'app/appModule/interview/interview.component.html',
		controller: function(interviewService) {
			var vm = this;
			vm.interviews = [];
			
			var reload = function(){
				interviewService.index().then(function(res){
					console.log('interview response');
					vm.interviews = res.data;
					console.log(res.data)
				})
				.catch(function(err){
					console.log(err);
				});
			};
			reload();
			
			vm.viewInterviewCreationForm = function(res, app){
				interviewService.storeResAndApp(res, app).then(function(response){
					console.log("In create Form");
				})
			};

			function renderChart(data, labels,chartType) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: chartType,
                data: data,
				borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }]
        },

		options: {            
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]                
            }
        },
    });
}

$("#renderBtn").click(
    function () {
        console.log("In day Chart");
        data = [4, 5, 3, 12, 9, 8, 7];
        dayWise = "on this day"
        labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        renderChart(data, labels,dayWise);
    }
);


$("#monthBtn").click(
    function () {
        console.log("In month Chart");
        data = [49, 54, 33, 82, 52, 44,22,34,50,85,88,70, 43];
        monthWise = "In this month"
        labels =  ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        renderChart(data, labels,monthWise);
    }
);
			
		},
		controllerAs: 'vm'
	});