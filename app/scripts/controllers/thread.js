'use strict';

angular.module('rtfmApp', ['firebase'])
  .controller('ThreadctrlCtrl', function ($scope, $firebase) {
	  var ref = new Firebase('incandescent-fire-6649.firebaseIO.com');
	        $scope.messages = $firebase(ref);

	        $scope.addMessage = function(e){

	            //this checks to make sure that the keydown is on the enter button (#13)
	            if(e.keyCode !== 13){
	                return;
	            }
	            $scope.messages.$add({
	                body: $scope.newMessage
	            });
	            console.log("messages")
	            $scope.newMessage = '';
	        }

	       	$scope.messages.reply = $firebase(ref);

	        $scope.addReply = function(e){

	            //this checks to make sure that the keydown is on the enter button (#13)
	            if(e.keyCode !== 13){
	                return;
	            }
	            $scope.messages.reply.$add({
	                body: $scope.newReply
	            });
	            $scope.newReply = '';
	        }
	  });
