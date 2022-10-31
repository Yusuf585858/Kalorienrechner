const calculate = (event) => {
    event.preventDefault();
    const height = Number(document.getElementById("height").value);
    const age = Number(document.getElementById("age").value);
    const weight = Number(document.getElementById("weight").value);

    const men = document.getElementById("men").checked;
    const women = document.getElementById("women").checked;

    const activity = Number(document.getElementById("activity").value);

    let outputGrundKcal = document.getElementById("outputGrundKcal");
    let outputGrundKj = document.getElementById("outputGrundKj");

    let outputGesKj = document.getElementById("outputGeskj");
    let outputGesKcal = document.getElementById("outputGesKcal");



    if (!(men || women)) {
        return;
    }


    switch (activity) {
        case 1: pal = 0.95;
            break;
        case 2: pal = 1.2;
            break;
        case 3: pal = 1.5;
            break;
        case 4: pal = 1.7;
            break;
        case 5: pal = 1.9;
            break;
        case 6: pal = 2.2;
            break;
    };

    if (men) {
        outputGrundKcal = 664.7 + (13.7 * weight) + (5 * height) - (6.8 * age);
        outputGrundKj = outputGrundKcal * 4.1868;
        outputGesKj = outputGrundKj * pal;
        outputGesKcal = outputGrundKcal * pal;
        document.getElementById("outputGrundKcal").innerHTML = outputGrundKcal.toFixed(2);
        document.getElementById("outputGrundKj").innerHTML = outputGrundKj.toFixed(2);
        document.getElementById("outputGesKcal").innerHTML = outputGesKcal.toFixed(2);
        document.getElementById("outputGesKj").innerHTML = outputGesKj.toFixed(2);
    }
    else if (women) {
        outputGrundKcal = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
        outputGrundKj = outputGrundKcal * 4.1868;
        outputGesKj = outputGrundKj * pal;
        outputGesKcal = outputGrundKcal * pal;
        document.getElementById("outputGrundKcal").innerHTML = outputGrundKcal.toFixed(2);
        document.getElementById("outputGrundKj").innerHTML = outputGrundKj.toFixed(2);
        document.getElementById("outputGesKcal").innerHTML = outputGesKcal.toFixed(2);
        document.getElementById("outputGesKj").innerHTML = outputGesKj.toFixed(2);

    };





};