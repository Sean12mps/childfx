<?php
/**
 * Template Name: Home Screen
 *
 * gntdropship
 *
 * gntdropship Theme by Calibrefx Team
 *
 * @package		CalibreFx
 * @author		Calibrefx Team
 * @copyright   Copyright (c) 2013, CalibreFx. (http://www.calibrefx.com/)
 * @link		http://www.calibrefx.com
 * @since		Version 1.2
 * @filesource 
 *
 *
 * @package CalibreFx
 */


		remove_action('calibrefx_loop', 'calibrefx_do_loop');

		add_action('calibrefx_loop', 'childfx_do_loop');

		function childfx_do_loop(){

?>

			<div class="page-header">
                <h1>Testing Backbone</h1>
            </div>

                <?php   
                        global $wp_query;
                        // WP_Query arguments
                        $args = array (
                            'category_name'          => 'favorites',
                            'posts_per_page' => '-1'
                        );

                        // The Query
                        $query = new WP_Query( $args );
                        // The Loop
                        if ( $query->have_posts() ) {
                            echo '<ul id="post-menu">';
                            while ( $query->have_posts() ) {
                                $query->the_post();
                                echo '<li><a command="view" class="ax">' . get_the_title() . '</a></li>';
                            }
                            echo '</ul>';
                        } else {
                            // no posts found
                        }
                 ?>
                 

            <div class="panel panel-default">

                <div class="panel-heading">

                    <h3 class="panel-title">Panel title</h3>
                </div>




                <div class="panel-body overflow-hidden">

                    <!-- The Form -->
                    <div id="new-status" class="">
                        
                        <div class="row">

                            <div class="col-xs-6">

                                <form id="theForm">
                                    
                                    <textarea name="newstatus" id="newstatus"></textarea>
                                    <br>
                                    <button type="submit" class="btn-success" >submit</button>
                                </form>
                            </div>

                            <div class="col-xs-6">
                                
                                <!-- The Status -->
                                <div id="statuses">
                                </div>
                                <!-- The Status -->

                            </div>

                        </div>
                    </div>
                    <!-- The Form -->


                </div>

            </div>
<?php
}
		calibrefx();