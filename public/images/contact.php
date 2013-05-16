<?php /* 
Template Name: contact
*/ ?> 

<?php get_header(); ?>

	<?php do_action( 'genesis_before_content_sidebar_wrap' ); ?>
	
	<div id="content-sidebar-wrap">
		
		<?php do_action( 'genesis_before_content' ); ?>
		
		<div id="content" class="hfeed">
			
			<div class="contact">

<div class="one-half first contact-left">
<?php echo do_shortcode('[gravityform id="3" name="Say hello to Space-Rocket" title="false" description="false"]');?>
</div>
<div class="one-half contact-right">
<img class="img-responsive" width="243" height="330" src="http://www.compassioninteractive.com/wp-content/themes/compassioninteractive/images/contact.png">
	</div>

			
		</div><!-- end #content -->
		
		<?php do_action( 'genesis_after_content' ); ?>
	
	</div><!-- end #content-sidebar-wrap -->
	
	<?php do_action( 'genesis_after_content_sidebar_wrap' ); ?>

<?php get_footer(); ?>