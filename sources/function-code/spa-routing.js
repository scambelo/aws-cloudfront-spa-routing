var level = 0; // subdirectory level where index.html is located.
var regexExpr = /^\/.+(\.\w+$)/; // Regex expression than matches paths requestiong an object. i.e: /route1/my-picture.png

function handler(event) {
    var request = event.request;
    var olduri = request.uri;

    if (isRoute(olduri)) { // if is a route request. i.e: /route1
        var defaultPath = '';
        
        var parts = olduri
            .replace(/^\//,'') // remove leading '/'
            .replace(/\/$/,'') // remove triling '/' if any
            .split('/'); // split uri into array of parts. i.e: ['route1', 'my-picture.png']
        
        var nparts = parts.length;

        // determine the limit as either level or nparts, whichever is lower
        var limit = (level <= nparts) ? level : nparts; 

        // build the default path. i.e: /route1
        for (var i = 0; i < limit; i++) {
            defaultPath += '/' + parts[i];
        }
        
        var newuri = defaultPath + '/index.html';

        request.uri = newuri;
        console.log('Request for [' + olduri + '], rewritten to [' + newuri + ']');
    }   

    return request;
}

// Returns true if uri is a route. i.e: /route1
// Returns false if uri is a file. i.e: /route1/index.html
function isRoute(uri) {
    return !regexExpr.test(uri);
}