<?php
/**
 * childfx
 *
 * childfx Theme by Calibrefx Team
 *
 * @package     childfx
 * @author      Calibrefx Team
 * @link        http://www.calibrefx.com/
 * @since       Version 1.2
 * @filesource 
 *
 * @package childfx
 */

add_action('calibrefx_do_ajax', 'childfx_ajax_handler');
function childfx_ajax_handler() {
	global $calibrefx;

	$requestMethod = $_SERVER["REQUEST_METHOD"];     

  switch ( $requestMethod ) { 

    case  'POST': 
          $data     =   json_decode( file_get_contents( 'php://input' ), true );
          if( $data->command == 'view' ){

          $response   =   $data;
          }
          else{
            
          }
        break; 

  };

	echo json_encode($response);
	exit;
}