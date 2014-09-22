jQuery(document).ready(function($){



var Status          =   Backbone.Model.extend({
                                url     :   cfx_ajax.ajaxurl
                        });


var Statuses        =   Backbone.Collection.extend({
                                model   :   Status
                        });


var PostView 		= 	Backbone.View.extend({

							events          :   {

                                                        'click'   :   'linkd'
                                }

                        ,	linkd			: 	function( x ){
                        							// $('.ax').remove();
                        							console.log($(x));
                        							this.collection.create( { 
                        										command : 	x.toElement.attributes.command.value
                                                            ,   text    :   x.toElement.text
                                    				} );
                        	}
						});
			


var NewStatusView   =   Backbone.View.extend({

                                events          :   {

                                                        'submit form'   :   'addStatus'
                                                    ,   'enter'         :   'addStatus'
                                }

                            ,   initialize      :   function(  ){

                                                        this.collection.on( "add", this.clearInput, this );
                                                    }

                            ,   addStatus       :   function( e ){

                                    e.preventDefault();

                                    this.collection.create( { 
                                                                text    :   this.$('#newstatus').val()
                                                            ,   message :   this.$('.alert').length
                                                            , 	command : 	'other'
                                    } );
                                }

                            ,   clearInput      :   function(){

                                    this.$('#newstatus').val('');
                                    this.$('#newstatus').focus();
                                }

                        });




var StatusesView        =   Backbone.View.extend({
                                    initialize  :   function(  ){

                                        // this.collection.on( "add", this.removeStatus, this )
                                        this.collection.on( "add", this.appendStatus, this )
                                    }

                                ,   appendStatus:   function( status ){

                                            this.$('#statuses').append('<div class="alert alert-success">' + status.escape('text') + '</div>');
                                    }

                                ,   removeStatus:   function( status ){

                                        var count       =   status.escape('message');

                                        var alertS      =   this.$('.alert');
                                        var countKill   =   (alertS.length + 1) ;

                                        if( countKill > 3 ){

                                            for( var x = 1; x < countKill; x++ ){

                                                    $(alertS[x]).remove();
                                            };

                                        };
                                    }

                            });













	$('#newstatus').keyup(function(e){

        if( e.keyCode == 13 ){
            $(this).trigger('enter');
        }
    });

    $('#newstatus').focus();


    var statuses    =   new Statuses();

    new NewStatusView( { 
                            el          :   $('#new-status')
                        ,   collection  :   statuses 
        } );

    new StatusesView( {     
                            el          :   $('#new-status')
                        ,   collection  :   statuses
        } );

   	new PostView( {     
                            el          :   $('#post-menu li')
                        ,   collection  :   statuses
        } );




});

function check_focus(elm,val){
    if(elm.value.toLowerCase() == val.toLowerCase()){
        elm.value = '';    
    }
}

function check_blur(elm,val){
    if(elm.value.toLowerCase() == ''){
        elm.value = val;    
    }
}