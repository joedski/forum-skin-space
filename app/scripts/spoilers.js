$( function() {
	$( '.spoiler' ).each( function( i, spoilerEl ) {
		hideSpoiler( $( spoilerEl ), true );
	});

	$( document ).on( 'click', '.spoiler-toggle', toggleSpoiler );

	function toggleSpoiler( event ) {
		var $toggleEl = $( event.target );
		var $spoilerEl = $toggleEl.closest( '.spoiler' );

		if( $spoilerEl.hasClass( 'spoiler-hidden' ) ) {
			showSpoiler( $spoilerEl );
		}
		else {
			hideSpoiler( $spoilerEl );
		}
	}

	function hideSpoiler( $spoilerEl, now ) {
		var $spoilerBodyEl = $spoilerEl.children( '.spoiler-body' );
		var $toggleEl = $spoilerEl.find( '> .spoiler-input-group > .spoiler-toggle' );

		$spoilerEl.addClass( 'spoiler-hidden' );
		$toggleEl.attr( 'value', "Show Spoiler" );

		if( now ) {
			$spoilerBodyEl.hide();
		}
		else {
			$spoilerBodyEl.slideUp();
		}
	}

	function showSpoiler( $spoilerEl, now ) {
		var $spoilerBodyEl = $spoilerEl.children( '.spoiler-body' );
		var $toggleEl = $spoilerEl.find( '> .spoiler-input-group > .spoiler-toggle' );

		$spoilerEl.removeClass( 'spoiler-hidden' );
		$toggleEl.attr( 'value', "Hide Spoiler" );

		if( now ) {
			$spoilerBodyEl.show();
		}
		else {
			$spoilerBodyEl.slideDown();
		}
	}
});
