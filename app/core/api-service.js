

var serverComm = angular.module("serverComm", []);

serverComm.factory('ServerComm', function ($q, $http) {

    var queue = [];
    var execNext = function () {
        var task = queue[0];

        $http(task.c)
                .success(function (data) {
                    serverComm.apiResult = angular.copy(data);
                })
                .then(function (data) {
                    queue.shift();
                    task.d.resolve(data);
                    if (queue.length > 0)
                        execNext();
                },
                        function (err) {
                            task.d.reject(err);
                        });
    };
    return {
        getSyncData: function (config) {
            var d = $q.defer();
            queue.push({c: config, d: d});
            if (queue.length === 1)
                execNext();
            return d.promise;
        },
        getData: function (type, url, data) {
            return this.getSyncData(
                    {method: type,
                        url: url,
                        data: data}
            );
        }
    };
});