window.onload = function() {

    //to top settings
    var elevator = new Elevator({
      element: document.querySelector('.back-to-top'),
      duration: 1000, // milliseconds
    });
    var elevator = new Elevator({
      element: document.querySelector('.back-to-top-2'),
      duration: 1000, // milliseconds
    });

    //go to settings
    var elevator = new Elevator({
      element: document.querySelector('.pickupnoti-btn'),
      targetElement: document.querySelector('#pickupnoti'),
      verticalPadding: 100  // in pixels
    });
    var elevator = new Elevator({
      element: document.querySelector('.strangeweapons-btn'),
      targetElement: document.querySelector('#strangeweapons'),
      verticalPadding: 100  // in pixels
    });     
  };

var Elevator = function(options) {
    "use strict";

    // Elements
    var body = null;

    // Scroll vars
    var animation = null;
    var duration = null; // ms
    var customDuration = false;
    var startTime = null;
    var startPosition = null;
    var endPosition = 0;
    var targetElement = null;
    var verticalPadding = null;
    var elevating = false;

    var startCallback;
    var mainAudio;
    var endAudio;
    var endCallback;

    var that = this;

    /**
     * Utils
     */

    // Thanks Mr Penner - http://robertpenner.com/easing/
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    function extendParameters(options, defaults) {
        for (var option in defaults) {
            var t =
                options[option] === undefined && typeof option !== "function";
            if (t) {
                options[option] = defaults[option];
            }
        }
        return options;
    }

    function getVerticalOffset(element) {
        var verticalOffset = 0;
        while (element) {
            verticalOffset += element.offsetTop || 0;
            element = element.offsetParent;
        }

        if (verticalPadding) {
            verticalOffset = verticalOffset - verticalPadding;
        }

        return verticalOffset;
    }

    /**
     * Main
     */

    // Time is passed through requestAnimationFrame, what a world!
    function animateLoop(time) {
        if (!startTime) {
            startTime = time;
        }

        var timeSoFar = time - startTime;
        var easedPosition = easeInOutQuad(
            timeSoFar,
            startPosition,
            endPosition - startPosition,
            duration
        );

        window.scrollTo(0, easedPosition);

        if (timeSoFar < duration) {
            animation = requestAnimationFrame(animateLoop);
        } else {
            animationFinished();
        }
    }

    this.elevate = function() {
        if (elevating) {
            return;
        }

        elevating = true;
        startPosition = document.documentElement.scrollTop || body.scrollTop;
        updateEndPosition();

        // No custom duration set, so we travel at pixels per millisecond. (0.75px per ms)
        if (!customDuration) {
            duration = Math.abs(endPosition - startPosition) * 1.5;
        }

        requestAnimationFrame(animateLoop);

        // Start music!
        if (mainAudio) {
            mainAudio.play();
        }

        if (startCallback) {
            startCallback();
        }
    };

    function browserMeetsRequirements() {
        return (
            window.requestAnimationFrame &&
            window.Audio &&
            window.addEventListener
        );
    }

    function resetPositions() {
        startTime = null;
        startPosition = null;
        elevating = false;
    }

    function updateEndPosition() {
        if (targetElement) {
            endPosition = getVerticalOffset(targetElement);
        }
    }

    function animationFinished() {
        resetPositions();

        // Stop music!
        if (mainAudio) {
            mainAudio.pause();
            mainAudio.currentTime = 0;
        }

        if (endAudio) {
            endAudio.play();
        }

        if (endCallback) {
            endCallback();
        }
    }

    function onWindowBlur() {
        // If animating, go straight to the top. And play no more music.
        if (elevating) {
            cancelAnimationFrame(animation);
            resetPositions();

            if (mainAudio) {
                mainAudio.pause();
                mainAudio.currentTime = 0;
            }

            updateEndPosition();
            window.scrollTo(0, endPosition);
        }
    }

    function bindElevateToElement(element) {
        if (element.addEventListener) {
            element.addEventListener("click", that.elevate, false);
        } else {
            // Older browsers
            element.attachEvent("onclick", function() {
                updateEndPosition();
                document.documentElement.scrollTop = endPosition;
                document.body.scrollTop = endPosition;
                window.scroll(0, endPosition);
            });
        }
    }

    function init(_options) {
		// Take the stairs instead
		if (!browserMeetsRequirements()) {
			return;
		}

        // Bind to element click event.
        body = document.body;

        var defaults = {
            duration: undefined,
            mainAudio: false,
            endAudio: false,
            preloadAudio: true,
            loopAudio: true,
            startCallback: null,
            endCallback: null
        };

        _options = extendParameters(_options, defaults);

        if (_options.element) {
            bindElevateToElement(_options.element);
        }

        if (_options.duration) {
            customDuration = true;
            duration = _options.duration;
        }

        if (_options.targetElement) {
            targetElement = _options.targetElement;
        }

        if (_options.verticalPadding) {
            verticalPadding = _options.verticalPadding;
        }

        window.addEventListener("blur", onWindowBlur, false);

        if (_options.mainAudio) {
            mainAudio = new Audio(_options.mainAudio);
            mainAudio.setAttribute("preload", _options.preloadAudio);
            mainAudio.setAttribute("loop", _options.loopAudio);
        }

        if (_options.endAudio) {
            endAudio = new Audio(_options.endAudio);
            endAudio.setAttribute("preload", "true");
        }

        if (_options.endCallback) {
            endCallback = _options.endCallback;
        }

        if (_options.startCallback) {
            startCallback = _options.startCallback;
        }
    }

    init(options);
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = Elevator;
}
var Elevator=function(n){"use strict";function e(n,e,t,o){return n/=o/2,1>n?t/2*n*n+e:(n--,-t/2*(n*(n-2)-1)+e)}function t(n,e){for(var t in e){var o=void 0===n[t]&&"function"!=typeof t;o&&(n[t]=e[t])}return n}function o(n){for(var e=0;n;)e+=n.offsetTop||0,n=n.offsetParent;return g&&(e-=g),e}function l(n){T||(T=n);var t=n-T,o=e(t,k,y-k,b);window.scrollTo(0,o),b>t?w=requestAnimationFrame(l):r()}function i(){return window.requestAnimationFrame&&window.Audio&&window.addEventListener}function u(){T=null,k=null,h=!1}function a(){C&&(y=o(C))}function r(){u(),f&&(f.pause(),f.currentTime=0),p&&p.play(),v&&v()}function d(){h&&(cancelAnimationFrame(w),u(),f&&(f.pause(),f.currentTime=0),a(),window.scrollTo(0,y))}function c(n){n.addEventListener?n.addEventListener("click",F.elevate,!1):n.attachEvent("onclick",function(){a(),document.documentElement.scrollTop=y,document.body.scrollTop=y,window.scroll(0,y)})}function s(n){A=document.body;var e={duration:void 0,mainAudio:!1,endAudio:!1,preloadAudio:!0,loopAudio:!0,startCallback:null,endCallback:null};n=t(n,e),n.element&&c(n.element),i()&&(n.duration&&(E=!0,b=n.duration),n.targetElement&&(C=n.targetElement),n.verticalPadding&&(g=n.verticalPadding),window.addEventListener("blur",d,!1),n.mainAudio&&(f=new Audio(n.mainAudio),f.setAttribute("preload",n.preloadAudio),f.setAttribute("loop",n.loopAudio)),n.endAudio&&(p=new Audio(n.endAudio),p.setAttribute("preload","true")),n.endCallback&&(v=n.endCallback),n.startCallback&&(m=n.startCallback))}var m,f,p,v,A=null,w=null,b=null,E=!1,T=null,k=null,y=0,C=null,g=null,h=!1,F=this;this.elevate=function(){h||(h=!0,k=document.documentElement.scrollTop||A.scrollTop,a(),E||(b=1.5*Math.abs(y-k)),requestAnimationFrame(l),f&&f.play(),m&&m())},s(n)};"undefined"!=typeof module&&module.exports&&(module.exports=Elevator);    
    
    function ShowMoreInfo() {
        var button = document.getElementById("ShowMoreBtn");
        var list = document.getElementById("ShowMoreList");
        if (button.classList.contains("show")) {
            list.classList.remove('d-none');
            button.classList.remove('show');
            button.classList.add('hide');
            button.innerHTML = "Show less";
        } else {
            list.classList.add('d-none');
            button.classList.remove('hide');
            button.classList.add('show');
            button.innerHTML = "Show More";
        }
    }

const currentTheme = localStorage.getItem("setTheme");
const lightTheme = '/Resources/CSS/theme/light.css';
const darkTheme = '/Resources/CSS/theme/dark.css';
const icon = document.getElementById('themeSwitch');
    var link = document.getElementById('theme');
        if (currentTheme == 'dark') {
            link.href = darkTheme;
            icon.classList.add('bi bi-brightness-high-fill');
        } else {
            link.href = lightTheme;
            icon.classList.add('bi bi-moon-fill');
        }
        document.head.appendChild(link);
        document.onreadystatechange = () => {
            if (document.readyState === 'complete') {
                document.getElementById('base').classList.remove('disable-transitions');
            }
        }
    var theme = document.getElementById('theme');
        if (currentTheme === null) {
            if (window.matchMedia('prefers-color-scheme: dark').matches) {
                theme.setAttribute('href', darkTheme);
                localStorage.setItem("setTheme", "dark");
                icon.classList.add('bi bi-brightness-high-fill');
            } else {
                theme.setAttribute('href', lightTheme);
                localStorage.setItem("setTheme", "light");
                icon.classList.add('bi bi-moon-fill');
            }
        }
    function toggleTheme() {
        if (theme.getAttribute('href') == lightTheme) {
            theme.setAttribute('href', darkTheme);
            localStorage.setItem("setTheme", "dark");
            icon.classList.add('bi bi-brightness-high-fill');
        } else {
            theme.setAttribute('href', lightTheme);
            localStorage.setItem("setTheme", "light");
            icon.classList.add('bi bi-moon-fill');
        }
    }