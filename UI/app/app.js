var myApp = angular.module('personApp', []);
myApp.controller('PersonCtrl', ['$scope', '$http', function ($scope, $http) {

    GetPersons();
    //HIding the Edit Info form it will be opened when edit button is clicked
    $scope.EditInfo = false;


    function GetPersons() {
        //Defining the $http service for getting the people
        $http({
            method: 'GET',
            url: 'http://localhost:3928/api/person/GetAllPersons'
        }).
        success(function (data) {
            if (data != null || data != 'undefined') {
                //Assigning people data to the $scope variable
                $scope.Person = data;
                //Clearing the Person object in create context and Showing default Gender(Male) Checked
                $scope.newperson = {
                    Id: ''
                };
            }
        })
        .error(function (error) {
            //Showing error message
            $scope.status = 'Unable to retrieve people' + error.message;
        });
    }

    //Edit a person
    $scope.editPerson = function (pId) {
        for (i in $scope.Person) {
            //Getting the person details from scope based on id
            if ($scope.Person[i].Id == pId) {
                //Assigning the Create user scope variable for editing
                $scope.newperson = {
                    Id: $scope.Person[i].Id,
                    FirstName: $scope.Person[i].FirstName,
                    LastName: $scope.Person[i].LastName,
                    JobTitle: $scope.Person[i].JobTitle
                };                
                //Displaying Update button
                $scope.DisplayUpdate = true;
                //Clearing the Status
                $scope.status = '';
                //Displaying Edit Info Form
                $scope.EditInfo = true;
            }
        }
    }

    //Update a person
    $scope.updatePerson = function () {
        //Defining $http service for updating a person
        $http({
            method: 'PUT',
            url: 'http://localhost:3928/api/person/PutPerson',
            data: JSON.stringify($scope.newperson),
            headers: { 'Content-Type': 'application/JSON' }
        }).
        success(function (data) {
            //Showing Success message
            $scope.status = "The Person Details at Row " + $scope.newperson.Id + " Updated Successfully!!!";
            //Loading people to the $scope
            GetPersons();
            //Displaying save button
            $scope.DisplaySave = true;
            //Hiding Update button
            $scope.DisplayUpdate = false;
        })
        .error(function (error) {
            //Showing error message
            $scope.status = 'Unable to update a person details : ' + error.message;
        });
    }

}]);
