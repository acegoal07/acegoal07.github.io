window.onload = function() {
    var elevator = new Elevator({
      element: document.querySelector('.elevator-button'),
      duration: 1000, // milliseconds
    });
    var elevator = new Elevator({
      element: document.querySelector('.elevator-admin'),
      targetElement: document.querySelector('#admin'),
      verticalPadding: 100  // in pixels
    });
    var elevator = new Elevator({
      element: document.querySelector('.elevator-general'),
      targetElement: document.querySelector('#general'),
      verticalPadding: 100  // in pixels
    }); 
  };

