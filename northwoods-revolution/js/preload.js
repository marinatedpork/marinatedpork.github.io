

var images = [
    'https://i.imgur.com/DnFULQ7.png',
    'https://i.imgur.com/KX860jc.jpg',
    'https://i.imgur.com/2aozfc0.png',
    'https://i.imgur.com/iciliET.png',
    'https://i.imgur.com/ogsOaqH.png',
    'https://i.imgur.com/CoZdx0E.png',
    'https://i.imgur.com/0AWkX84.png',
    'https://i.imgur.com/idFSyjB.png',
    'https://i.imgur.com/HonDWJ0.png',
    'https://i.imgur.com/cxd45hY.png',
    'https://i.imgur.com/RmdK7Oi.png',
    'https://i.imgur.com/e568HZR.jpg',
    'https://i.imgur.com/jPYvUBR.jpg',
    'https://i.imgur.com/C43986V.png'];

var obj = preLoadResources(images);
    obj.done(function(resources){
      console.log(resources);
    });

    // obj.loading(function(a, b) {
    //   _view.setLoadingMessage(
    //     'Loading...<br><p>Resources ' + a + ' out of ' + b + '</p>'
    //   );
    // });



  function preLoadResources(arr) {
    var newResources = {};
    var loadedResources = 0;
    var postAction = function() {};
    var loadingAction = function() {};
    arr = (typeof arr != 'object') ? [arr] : arr;
    var total = arr.length;
    function resourceLoadPost() {
      loadedResources++;
      if (loadedResources < total) {
        loadingAction(loadedResources, total);
      }
      if (loadedResources === total) {
        postAction(newResources); //call postAction and pass in newResources array as parameter
      }
    }
    for (var i = 0; i < arr.length; i++) {
      if (isImageFile(arr[i])) {
        newResources[arr[i]] = new Image();
        newResources[arr[i]].onload = resourceLoadPost;
        newResources[arr[i]].onerror = resourceLoadPost;
        newResources[arr[i]].src = arr[i];
      } else if (isAudioFile(arr[i])) {
        newResources[arr[i]] = new Audio();
        newResources[arr[i]].volume = 0.1;
        newResources[arr[i]].oncanplaythrough = resourceLoadPost;
        newResources[arr[i]].onerror = resourceLoadPost;
        newResources[arr[i]].src = arr[i];
      } else {
        total -= 1;
      }
    }
    return { //return blank object with done() method
      done:function(f) {
        postAction = f || postAction; //remember user defined callback functions to be called when images load
      },
      loading: function(f) {
        loadingAction = f || loadingAction;
      }
    };
  }

  function isImageFile(filename) {
    var validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
    return (validExtensions.indexOf(getFilenameExtension(filename)) !== -1);
  }

  function isAudioFile(filename) {
    var validExtensions = ['mp3', 'wav'];
    return (validExtensions.indexOf(getFilenameExtension(filename)) !== -1);
  }

  function getFilenameExtension(filename) {
    return filename.split('?')[0].split('.').pop().toLowerCase();
  }