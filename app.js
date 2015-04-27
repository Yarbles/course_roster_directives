var courseRoster = angular.module("courseRoster", ["ui.router"]);

courseRoster.config(function($stateProvider) {
    $stateProvider.state("home", {
        url: "",
        templateUrl: "partials/home.html"
    });

    $stateProvider.state("courses", {
        url: "/courses",
        templateUrl: "partials/courses.html",
        controller: "CoursesCtrl"
    });

    $stateProvider.state("courses.students", {
        url: "/:courseId",
        templateUrl: "partials/courses.students.html",
        controller: "StudentsCtrl"
    });

});

courseRoster.directive("enter", function() {
    return function (scope, element) {
        element.bind("mouseenter", function () {
            console.log("I like school");
        })
    }
});

courseRoster.directive("leave", function() {
    return function (scope, element) {
        element.bind("mouseenter", function () {
            console.log("I'm inside school");
        })
    }
});

// courseRoster.directive("welcome", function() {
//     return function (scope, element, attrs) {
//         element.text(scope.app.message + " " + attrs.message);
//     }
//});
