angular.module('appModule')
	.component('response', {
		templateUrl: 'app/appModule/response/response.component.html',
		controller: function(responseService, $scope, $location){
			var vm = this;
			vm.responses = [];
			vm.loading = 0;
			vm.showCreateResponseForm = false;
			
			responseService.index().then(function(res){
				vm.responses = res.data;
				console.log(vm.responses)
			});
			
/**************************** view all responses *****************************/
//			$scope.$on('viewResponses', function(){
//				console.log('click recieved')
//				vm.showUpdateResponseForm = true;
//			});
			
/**************************** return true if a response contains an offer made during subsequent interview *****************************/
//			used to apply bg-success class to any response with a job offer
			vm.offerCheck = function(res){
				for (var i = 0; i < vm.responses.length; i++) {
					if(res.interviews){
						if(res.interviews.length > 0){
							if(res.interviews[i].offerMade){
								return true;
							}
						}
					}
				}
			}			

/**************************** add a response to an application *****************************/
			$scope.$on('showCreateResponseForm', function(e, args){
				console.log('broadcast received')
				console.log(args)
				vm.appToAddResponse = args;
				vm.showCreateResponseForm = true;
			});
			
/**************************** add a response to an application *****************************/
			vm.newResponseSubmit = function(appId, resObj){
				responseService.create(appId, resObj).then(function(res){
					console.log('res created');
					console.log(res.data);
					vm.responses.push(res.data);
					vm.showCreateResponseForm = false;
				});
			};
			
		},
		controllerAs: 'vm'
	});