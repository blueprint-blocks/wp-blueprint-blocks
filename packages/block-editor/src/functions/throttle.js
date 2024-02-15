/**
 *
 *
 * @param {*} callback
 * @returns
 */
function throttle( callback, delay ) {

	let wait = false
	let callbackArgs = null

	function attemptCall() {

		if ( callbackArgs === null ) {

		  wait = false

		} else {

		  callback( ...callbackArgs )
		  callbackArgs = null
		  setTimeout( attemptCall, delay )

		}

	}

	return ( ...args ) => {

    	if ( wait ) {

			callbackArgs = args
    	    return

    	}

    	callback( ...args )
    	wait = true

    	setTimeout( attemptCall, delay )

	}

}

export default throttle
