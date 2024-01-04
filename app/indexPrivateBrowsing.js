(function redirectBrowserOutdated() {
    function isPrivateBrowser() {
        /* Related to Bug 4068 */
        // There needs to be a separate start-up message for "in private" browsing
        //   particularly on iPhone

        try {
            if (!navigator.cookieEnabled) {
                return true;
            }
        } catch (e) {
            console.log('Please enable cookie support.');            
            return true;
        }

        try {
            if (!sessionStorage) {
                return true;
            }
            sessionStorage.setItem('TEST_KEY', 'TEST_KEY');
            sessionStorage.removeItem('TEST_KEY');
        } catch (e) {
            console.log('This browser doesn\'t support session Storage.');
            return true;
        }

        return false;
    }

    if (isPrivateBrowser()) {
    	window.location = '/app/indexNoCookieStorage.html';
    }
})();