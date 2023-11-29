// simple change model
document.getElementById("change-colour").addEventListener("click", function() {
    document.getElementById("model").src = "/models/teal.glb";
});

// example with showing content
document.getElementById("change-colour").addEventListener("click", function() {
    document.getElementById("model-info").style.display = "block";
});

// example with multiple models
var myModels = ["/models/orange.glb", "/models/teal.glb", "/models/orange.glb", "/models/teal.glb",]
var counter = 0;
document.getElementById("change-colour").addEventListener("click", function() {
    counter++;
    if (counter==3) { 
        counter = 0;
    }
    document.getElementById("model").src = myModels[counter];
});

// Product size and dimensions

function showDimensions(product) {
    let dimensions = '';
    switch (product) {
        case 'beanbag':
            dimensions = 'Beanbag: Diameter (3ft), Height 2(ft)';
            break;
        case 'bookcase':
            dimensions = 'Bookcase: Width (3ft), Depth (0.5ft), Height (1ft)';
            break;
        case 'chair':
            dimensions = 'Chair: Width (1ft), Depth (1ft), Height (2ft)';
            break;
    }
    alert(dimensions);
}

