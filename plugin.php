<?php
/*
Plugin Name: Old Phillys Blocks
*/
//This file gets created in the Main Directory of the Plugin
//Also you always add your package.json and webpack.config.js here because this is where you load the NPM bundel.
//removes the posibility form viewing this page in the browser
if( !defined( 'ABSPATH' ) ){
	exit;
}

//refactored function to turn the name of the block into a argument so you do not have to dry out your code
//function is called inside the PHP function to register all the scripts and styles 
//it also defines what view the registered scripts and styles will be loaded in the first hard coded $options array (merged with $options array)
function oldphillys_blocks_register_block_type($blockname, $options = array() ){
			register_block_type(
				'oldphillys-blocks/' .$blockname,
			array_merge(
			array(
				'editor_script' => 'oldphillys-blocks-editor-script',
				'editor_style' => 'oldphillys-blocks-editor-style',
				'script' => 'oldphillys-blocks-script',
				'style' => 'oldphillys-blocks-style'
			),
			$options
		)
	);
}

//function to register the scripts, styles that are attached to the blocks, it also calls the function to register the block type
function old_phillys_blocks_register(){
//function to register the editor script, it registers the URL for the editor.js script which holds the translated React / es6 syntax code from /blocks/$blockname/index.js	
	wp_register_script(
		'oldphillys-blocks-editor-script',
		plugins_url( 'dist/editor.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' )
	);
	wp_register_script(
		'oldphillys-blocks-script',
		plugins_url( 'dist/script.js', __FILE__ ),
		array('jquery')
	);
//registers the scss file from editor.css wich translates the SASS into regular CSS
	wp_register_style(
		'oldphillys-blocks-editor-style',
		plugins_url( 'dist/editor.css', __FILE__ ),
		array('wp-edit-blocks')
	);
	wp_register_style(
		'oldphillys-blocks-style',
		plugins_url( 'dist/script.css', __FILE__ )
	);
//function call that registers the blocktype 
	oldphillys_blocks_register_block_type('firstblock');
	oldphillys_blocks_register_block_type('secondblock');

}

add_action('init', 'old_phillys_blocks_register');