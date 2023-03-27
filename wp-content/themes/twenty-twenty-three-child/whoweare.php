<?php
/**
* Template Name: Who We Are
*
* @author Abhijitsinh
* @since 1.0.0
*/

get_header();
global $post;

?>
<!-- content -->
<div id="container_full_append" class="cont-app">
</div>
<div id="container_full">
	<?php
	$fields = get_field_objects($post->ID);
	// echo '<pre>';
	// print_r($fields);
	// echo '</pre>';
	?>
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">
			Hello World
		</div>
	</div>
</div>
<!-- End / content -->
<?php get_footer(); ?>