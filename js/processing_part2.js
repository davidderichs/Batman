/**
 * Created by J�rgen Lohr on 1.9.2016.
 */

function cutFirstLine(iOutput, iInput) {
    for (var i = cw; i < iInput.length - cw; i += 1) {
        iOutput[i - cw] = iInput[i];
    }
}

//	---------------------------------------------------------------- Video -L�sung �2--------------------------------------------------------------


function processingVideoGenCosinus() {
    var horizontalFrequency = parseFloat(document.getElementById("In1").value);
    // Process chain begin

    genCosinus(BridnessSamples, horizontalFrequency, cw, 128);
    GRAYtoRGB(imgArrayOut, BridnessSamples);   // L�sung 1.1a
    // Process chain end
    writeCanvas(iImageOut);

    LogArray = ["BridnessSamples", "imgArrayOut"];  // Define Logging name of array object.
}

function genCosinus(iOutput, iHorizontalFrequency, iSampleRate, iOffset) {
    let i = 0;
    for (let myheight = 0; myheight < 404; myheight++) {
        for (let mywidth = 0; mywidth < 720; mywidth++) {
            let cosVal = (iOffset-0.5) * Math.cos(2 * Math.PI * (iHorizontalFrequency / iSampleRate) * mywidth) + (127.5);
            iOutput[i] = cosVal;
            i++;
        }
    }
}

function processingVideoBridnessContrast() {
    var contrast = pegel(parseFloat(document.getElementById("In1").value));
    imgArrayIn = readCanvas(videoPlayer, 0);
    // Process chain begin
    RGBtoGRAY(BridnessSamples, imgArrayIn);
    setAmplitude(ContrastSamples, BridnessSamples, contrast);
    GRAYtoRGB(imgArrayOut, ContrastSamples);
    // Process chain end
    writeCanvas(iImageOut);

    LogArray = ["imgArrayIn", "BridnessSamples", "ContrastSamples", "imgArrayOut"];
}

function pegel(wert) {	   // Pegel berechnung dbFS

}

function db(wert) {

}

function setAmplitude(iOutput, iInput, iAplitude) {

}

function processingVideoChromaKeying() {
    imgArrayIn = readCanvas(videoPlayer, 2);
    // Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out
    var R = parseFloat(document.getElementById("In1").value);
    var G = parseFloat(document.getElementById("In2").value);
    var B = parseFloat(document.getElementById("In3").value);
    setChromaKeying(imgArrayOut, imgArrayIn, R, G, B);
    // Process chain end
    writeCanvas(iImageOut);

    LogArray = ["imgArrayIn", "imgArrayOut"];
}

function setChromaKeying(iOutput, iInput, iR, iG, iB) {

}

function processingVideoTP10_cos64() {
    var horizontalFrequency = parseFloat(document.getElementById("In1").value);
    // Process chain begin

    genCosinus(BridnessSamples, horizontalFrequency, cw, 128);
    setTP1O1D(TPsamples, BridnessSamples);
    GRAYtoRGB(imgArrayOut, TPsamples);
    // Process chain end
    writeCanvas(iImageOut);

    LogArray = ["BridnessSamples", "TPsamples", "imgArrayOut"];
}

function processingVideoTP10() {
    imgArrayIn = readCanvas(videoPlayer, 0);
    // Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out

    RGBtoGRAY(BridnessSamples, imgArrayIn);

    setTP1O1D(TPsamples, BridnessSamples);
    GRAYtoRGB(imgArrayOut, TPsamples);
    // Process chain end
    writeCanvas(iImageOut);

    LogArray = ["imgArrayIn", "BridnessSamples", "TPsamples", "imgArrayOut"];
}

function setTP1O1D(iOutput, iInput) {

}

function processingVideoTP20() {
    imgArrayIn = readCanvas(videoPlayer, 2);
    // Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out

    RGBtoGRAY(BridnessSamples, imgArrayIn);
    setTP2O2D(TPsamples, BridnessSamples);

    cutFirstLine(secondLineBridnessSamples, BridnessSamples);
    cutFirstLine(secondLineTPsamples, TPsamples);
    GRAYtoRGB(imgArrayOut, secondLineTPsamples);

    // Process chain end
    writeCanvas(iImageOut);

    LogArray = ["imgArrayIn", "BridnessSamples", "TPsamples", "secondLineBridnessSamples", "secondLineTPsamples", "imgArrayOut"];
}

function setTP2O2D(iOutput, iInput) {

}

function processingVideoHP10() {
    imgArrayIn = readCanvas(videoPlayer, 0);
    // Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out

    RGBtoGRAY(BridnessSamples, imgArrayIn);
    setHP1O1D(HPsamples, BridnessSamples);
    GRAYtoRGB(imgArrayOut, HPsamples);
    // Process chain end
    writeCanvas(iImageOut);

    LogArray = ["imgArrayIn", "BridnessSamples", "HPsamples", "imgArrayOut"];
}

function processingVideoHP10_cos64() {
    var horizontalFrequency = parseFloat(document.getElementById("In1").value);
    // Process chain begin

    genCosinus(BridnessSamples, horizontalFrequency, cw, 128);
    setHP1O1D(HPsamples, BridnessSamples);
    GRAYtoRGB(imgArrayOut, HPsamples);
    // Process chain end
    writeCanvas(iImageOut);

    LogArray = ["BridnessSamples", "HPsamples", "imgArrayOut"];
}

function setHP1O1D(iOutput, iInput) {

}

function processingVideoHP10visuell() {
    imgArrayIn = readCanvas(videoPlayer, 0);
    // Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out

    RGBtoGRAY(BridnessSamples, imgArrayIn);
    setHP1Ovisuell(HPsamples, BridnessSamples);
    GRAYtoRGB(imgArrayOut, HPsamples);
    // Process chain end
    writeCanvas(iImageOut);

    LogArray = ["imgArrayIn", "BridnessSamples", "HPsamples", "imgArrayOut"];
}

function setHP1Ovisuell(iOutput, iInput) {

}

function processingVideoHP20() {
    imgArrayIn = readCanvas(videoPlayer, 2);
    // Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out

    RGBtoGRAY(BridnessSamples, imgArrayIn);
    setHP2O2D(HPsamples, BridnessSamples);

    cutFirstLine(secondLineBridnessSamples, BridnessSamples);
    cutFirstLine(secondLineHPsamples, HPsamples);
    GRAYtoRGB(imgArrayOut, secondLineHPsamples);
    // Process chain end
    writeCanvas(iImageOut);

    LogArray = ["imgArrayIn", "BridnessSamples", "HPsamples", "secondLineBridnessSamples", "secondLineHPsamples", "imgArrayOut"];
}

function setHP2O2D(iOutput, iInput) {

}

function processingVideoSoebel() {
    imgArrayIn = readCanvas(videoPlayer, 2);
    // Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out
    RGBtoGRAY(BridnessSamples, imgArrayIn);
    setSoebel(SoebelSamples, BridnessSamples);

    cutFirstLine(secondLineBridnessSamples, BridnessSamples);
    cutFirstLine(secondLineSoebelSamples, SoebelSamples);
    GRAYtoRGB(imgArrayOut, secondLineSoebelSamples);
    // Process chain end
    writeCanvas(iImageOut);

    LogArray = ["imgArrayIn", "BridnessSamples", "SoebelSamples", "secondLineBridnessSamples", "secondLineSoebelSamples", "imgArrayOut"];
}

function setSoebel(iOutput, iInput) {

}

//	---------------------------------------------------------------- Audio -L�sung �2--------------------------------------------------------------


function processingAudioKlang(event) {
    var freq = parseFloat(document.getElementById("In1").value);
    // Process chain begin
    genKlang(monoSamples, freq, sampleRate, 1);

    // Process chain end
    writeWebAudio(event, monoSamples);

    LogArray = ["monoSamples"];
}

function genKlang(iOutput, iHorizontalFrequency, iSampleRate, iOffset) {

}

function processingAudioVolumen(event) {
    var volume = pegel(parseFloat(document.getElementById("In1").value));
    audArrayIn = readWebAudio(event);
    // Process chain begin
    StereoToMono(monoSamples, audArrayIn);
    setAmplitude(VolumenSamples, monoSamples, volume);
    // Process chain end
    writeWebAudio(event.outputBuffer, VolumenSamples);

    LogArray = ["monoSamples", "VolumenSamples"];
}

function setAmplitude(iOutput, iInput, iAplitude) {
    for (var i = 0; i < iInput.length; i += 1) {
        if (iAplitude > 0) iOutput[i] = iAplitude * iInput[i];
        if (iAplitude < 0) iOutput[i] = iAplitude / iInput[i];
        if (iAplitude == 0) iOutput[i] = 1 * iInput[i];
        if (isNaN(iAplitude)) iOutput[i] = 1 * iInput[i];
    }
}

function processingAudioDelay(event) {
    var directGain = pegel(parseFloat(document.getElementById("In1").value));
    var delayGain = pegel(parseFloat(document.getElementById("In2").value));
    var delayTime = parseFloat(document.getElementById("In3").value);

    audArrayIn = readWebAudio(event);
    // Process chain begin
    StereoToMono(monoSamples, audArrayIn);
    setDelayTime(OutSamples, DelaySamples2, monoSamples, directGain, delayGain, delayTime);

    // Process chain end
    writeWebAudio(event.outputBuffer, OutSamples);

    LogArray = ["monoSamples", "DelaySamples2", "OutSamples"];
}

function processingAudioDelay16K(event) {
    var delayGain = pegel(parseFloat(document.getElementById("In1").value));
    audArrayIn = readWebAudio(event);
    // Process chain begin
    StereoToMono(monoSamples, audArrayIn);
    setDelaySample(VolumenSamples, DelaySamples2, monoSamples, delayGain);
    // Process chain end
    writeWebAudio(event.outputBuffer, VolumenSamples);

    LogArray = ["monoSamples", "VolumenSamples"];
}

function setDelaySample(iOutput, iDelay, iInput, iGain) {

}

function processingAudioGenDelay(event) {
    var directGain = pegel(parseFloat(document.getElementById("In1").value));
    var delayGain = pegel(parseFloat(document.getElementById("In2").value));
    var delayTime = parseFloat(document.getElementById("In3").value);
    // Process chain begin
    setDelayTime(OutSamples, DelaySamples2, AudioTestArray, directGain, delayGain, delayTime);


    // Process chain end

    writeWebAudio(event, OutSamples);

    LogArray = ["AudioTestArray", "DelaySamples2", "OutSamples"];
}

function setDelayTime(iOutput, iDelay, iInput, iDirectGain, iDelayGain, iDelayTime) {

}

function processingAudioTP1O(event) {
    var value = parseFloat(document.getElementById("In1").value);
    genNoise(monoSamples, value);
    // Process chain begin
    setTP1O1D(VolumenSamples, monoSamples)
    // Process chain end
    writeWebAudio(event, VolumenSamples);

    LogArray = ["monoSamples", "VolumenSamples"];
}

function processingAudioHP1O(event) {
    var value = parseFloat(document.getElementById("In1").value);
    genNoise(monoSamples, value);
    // Process chain begin
    setHP1O1D(VolumenSamples, monoSamples)
    // Process chain end
    writeWebAudio(event, VolumenSamples);

    LogArray = ["monoSamples", "VolumenSamples"];
}

function processingAudioTP2O1D(event) {
    var value = parseFloat(document.getElementById("In1").value);
    genNoise(monoSamples, value);
    // Process chain begin
    setTP2O1D(VolumenSamples, monoSamples)
    // Process chain end
    writeWebAudio(event, VolumenSamples);

    LogArray = ["monoSamples", "VolumenSamples"];
}

function setTP2O1D(iOutput, iInput) {

}

function processingAudioHP2O1D(event) {
    var value = parseFloat(document.getElementById("In1").value);
    genNoise(monoSamples, value);
    // Process chain begin
    setHP2O1D(VolumenSamples, monoSamples)
    // Process chain end
    writeWebAudio(event, VolumenSamples);

    LogArray = ["monoSamples", "VolumenSamples"];
}


function setHP2O1D(iOutput, iInput) {

}

function processingAudioBP2O1D(event) {
    var value = parseFloat(document.getElementById("In1").value);
    genNoise(monoSamples, value);
    // Process chain begin
    setBP2O1D(VolumenSamples, monoSamples)
    // Process chain end
    writeWebAudio(event, VolumenSamples);

    LogArray = ["monoSamples", "VolumenSamples"];
}

function setBP2O1D(iOutput, iInput) {

}

function processingAudioBS2O1D(event) {
    var value = parseFloat(document.getElementById("In1").value);
    genNoise(monoSamples, value);
    // Process chain begin
    setBS2O1D(VolumenSamples, monoSamples)
    // Process chain end
    writeWebAudio(event, VolumenSamples);

    LogArray = ["monoSamples", "VolumenSamples"];
}

function setBS2O1D(iOutput, iInput) {

}





