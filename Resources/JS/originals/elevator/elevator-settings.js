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
      element: document.querySelector('.admin-btn'),
      targetElement: document.querySelector('#admin'),
      verticalPadding: 100  // in pixels
    });
    var elevator = new Elevator({
      element: document.querySelector('.general-btn'),
      targetElement: document.querySelector('#general'),
      verticalPadding: 100  // in pixels
    });
    var elevator = new Elevator({
      element: document.querySelector('.setup-btn'),
      targetElement: document.querySelector('#setup'),
      verticalPadding: 100  // in pixels
    });
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

