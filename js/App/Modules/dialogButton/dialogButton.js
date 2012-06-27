(function($){
'use strict';

	var
        _bindEventListeners = function() {
            $('#create-item').click(function(){
                App.Modules.Get('workDialog', function(){
                    App.EM.trig('workDialog.openDialog');
                });
            });
        },

        dialogButton = {
            init: function() {
                _bindEventListeners();
            }
        }

    App.Modules.Register('dialogButton', dialogButton);

}(jQuery));