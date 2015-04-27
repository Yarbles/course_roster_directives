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
            console.log("Stop touching me");
        })
    }
});

courseRoster.directive("leave", function() {
    return function (scope, element) {
        element.bind("mouseleave", function () {
            console.log("Thank you");
        })
    }
});

courseRoster.directive("enter", function() {
    return function (scope, element, attrs) {
        element.bind("mouseenter", function () {
            element.removeClass("btn btn-warning");
            element.addClass("btn btn-success");
        })
    }
});

courseRoster.directive("leave", function() {
    return function (scope, element, attrs) {
        element.bind("mouseleave", function () {
            element.removeClass("btn btn-success");
            element.addClass("btn btn-warning");
        })
    }
});

courseRoster.directive("samplecourse", function () {
    return {
        template: '<div>{{ courseName }}</div>',
        link: function (scope) {
            scope.courseName = "math";
        }
    }
});

// courseRoster.directive("welcome", function() {
//     return function (scope, element, attrs) {
//         element.text(scope.app.message + " " + attrs.message);
//     }
// });

// courseRoster.directive("welcome", function () {
//     return {
//         restrict: "EA",
//         template: "<div>Welcome!</div>"
//     }
// });
