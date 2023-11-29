
// Function to display product dimensions

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

// Function for swapping model

function swapModel(product) {
    let modelViewer = document.getElementById(product);
    let newSrc = '';

    switch (product) {
        case 'beanbag':
            newSrc = modelViewer.src.includes('beanbag_alternate.glb') ? 'models/beanbag.glb' : 'models/beanbag_alternate.glb';
            break;
        case 'bookcase':
            newSrc = modelViewer.src.includes('bookcase_alternate.glb') ? 'models/bookcase.glb' : 'models/bookcase_alternate.glb';
            break;
        case 'chair':
            newSrc = modelViewer.src.includes('chair_alternate.glb') ? 'models/chair.glb' : 'models/chair_alternate.glb';
            break;
    }

    modelViewer.src = newSrc;
}

