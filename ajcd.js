'use strict';


// Declare app level module which depends on filters, and services


angular.module('ajcd', [])

.run(function(){

 })

.provider('$postMessage', function(){

        this.origin = null;
        this.targetOrigin = null;
        this.target = null;
        this.$get = function() {
            var origin = this.origin;
            var targetOrigin = this.targetOrigin;
            var target = this.target;
            return {
                getOrigin: function() {
                    return origin;
                },
                getTargetOrigin: function() {
                    return targetOrigin;
                },
                getTarget: function() {
                    return target;
                }
            }
        };

 })

.service('postMessage', ['$window', '$postMessage', function($window, $postMessage){


        var _this = this;

        $window.addEventListener('message', function(event) {

            if(event.origin !== $postMessage.getOrigin()) {
                console.error('Origin did not match settings');
                return false;
            }

            console.log('message received:  ' + event.data,event);

            _this.receive(event.data);

        }, false);



    this.send =  function(data) {
        if ($postMessage.getTargetOrigin() == null) log.error('You must set origin URL');
        parent.postMessage(data, $postMessage.getTargetOrigin());
    }

    this.receive = function(data){

            log('Got Data...');
            log (data);
    }
}])


