/**
 * Created by J�rgen Lohr on 1.9.2016.
 */

function cutFirstLine(iOutput, iInput) {
	for(var i = cw; i < iInput.length-cw; i+=1) {
		iOutput[i-cw] = iInput[i] ;
	}
}

//	---------------------------------------------------------------- Video -L�sung �2--------------------------------------------------------------


function processingVideoGenCosinus() {
	var	horizontalFrequency  = parseFloat(document.getElementById("In1").value);
	// Process chain begin

	genCosinus(BridnessSamples, horizontalFrequency,cw,256);
	GRAYtoRGB(imgArrayOut, BridnessSamples);   // L�sung 1.1a
	// Process chain end
	writeCanvas(iImageOut);

	LogArray = ["BridnessSamples", "imgArrayOut"];  // Define Logging name of array object.
}

function genCosinus(iOutput, iHorizontalFrequency, iSampleRate, iOffset) {

	o = new Array(iOutput.length*4);
	for(i=0;i<iOutput.length;i++){
		v = (iOffset-0.5) * Math.cos(2*Math.PI*(iHorizontalFrequency/iSampleRate)*i)+ (iOffset-0.5);
		o[i*4.0] = v;
		o[(i*4.0)+1] = v;
		o[(i*4.0)+2] = v;
		o[(i*4.0)+3] = v;
	}
	RGBtoGRAY(iOutput, o);
}


function processingVideoBridnessContrast() {
	var contrast =pegel( parseFloat(document.getElementById("In1").value));
	imgArrayIn = readCanvas(videoPlayer,0);
	// Process chain begin
	RGBtoGRAY(BridnessSamples, imgArrayIn);
    setAmplitudeVideo(ContrastSamples, BridnessSamples, contrast);
	GRAYtoRGB(imgArrayOut, ContrastSamples);
	// Process chain end
	writeCanvas(iImageOut);

	LogArray = ["imgArrayIn", "BridnessSamples", "ContrastSamples", "imgArrayOut"];
}

function  pegel(wert) {	   // Pegel berechnung dbFS
    return ( Math.round(Math.pow(10, wert/20)*255)/255 );
}

function  db(wert) {
}

function setAmplitudeVideo(iOutput, iInput, iAplitude) {
	for (let i=0; i<iOutput.length; i++){
		iOutput[i] = iInput[i]*iAplitude;
	}
}

function processingVideoChromaKeying() {
	imgArrayIn = readCanvas(videoPlayer,2);
	// Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out
	var R = parseFloat(document.getElementById("In1").value);
	var G = parseFloat(document.getElementById("In2").value);
	var B = parseFloat(document.getElementById("In3").value);
	setChromaKeying(imgArrayOut, imgArrayIn, R,G,B);
	// Process chain end
	writeCanvas(iImageOut);

	LogArray = ["imgArrayIn", "imgArrayOut"];
}

function setChromaKeying(iOutput, iInput, iR, iG, iB) {
    for (var i=0; i<iOutput.length-5; i+=4) {
        var redBrightness = 0.299*Math.pow(iInput[i],2);
        var blueBrightness = 0.587*Math.pow(iInput[i+1],2);
        var greenBrightness = 0.114*Math.pow(iInput[i+2],2);
        var helligkeit = Math.sqrt( redBrightness + blueBrightness + greenBrightness);
        // brightness = Math.sqrt(0.299*pow(r,2) + 0.587*pow(g,2) + 0.114*pow(b,2))

        var range = 20;
        if(iInput[i]>=iR-range && iInput[i]<=iR+range) {
            if (iInput[i+1]>=iG-range && iInput[i+1]<=iG+range){
                if (iInput[i+2]>=iB-range && iInput[i+2]<=iB+range){
                    iOutput[i+3] = 0;
                }
            }
        } else {
            iOutput[i] = iInput[i];
            iOutput[i+1] = iInput[i+1];
            iOutput[i+2] = iInput[i+2];
            iOutput[i+3] = iInput[i+3];
        }
    }
}

function processingVideoTP10_cos64() {
	var	horizontalFrequency  = parseFloat(document.getElementById("In1").value);
	// Process chain begin

	genCosinus(BridnessSamples, horizontalFrequency,cw,128);
	setTP1O1D(TPsamples, BridnessSamples);
	GRAYtoRGB(imgArrayOut, TPsamples);
	// Process chain end
	writeCanvas(iImageOut);

	LogArray = [ "BridnessSamples", "TPsamples", "imgArrayOut"];
}
function processingVideoTP10() {
	imgArrayIn = readCanvas(videoPlayer,0);
	// Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out

	RGBtoGRAY(BridnessSamples, imgArrayIn);

	setTP1O1D(TPsamples, BridnessSamples);
	GRAYtoRGB(imgArrayOut, TPsamples);
	// Process chain end
	writeCanvas(iImageOut);

	LogArray = ["imgArrayIn", "BridnessSamples", "TPsamples", "imgArrayOut"];
}

function setTP1O1D(iOutput, iInput) {
	for (i=0;i<iInput.length;i++){
		iOutput[i]=(0.25*iInput[i])+(0.25*iInput[i-1])+(0.25*iInput[i+127])+(0.25*iInput[i+128]);
	}
}

function processingVideoTP20() {
	imgArrayIn = readCanvas(videoPlayer,2);
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
	for (i=0;i<iInput.length;i++){
		iOutput[i]=
			(0.11*iInput[i])+
			(0.11*iInput[i-1])+
			(0.11*iInput[i+1])+
			(0.11*iInput[i+(cw-1)])+
			(0.11*iInput[i-(cw-1)])+
			(0.11*iInput[i+cw])+
			(0.11*iInput[i-cw])+
			(0.11*iInput[i+(cw+1)])+
			(0.11*iInput[i-(cw+1)]);
    }
}

function processingVideoHP10() {
	imgArrayIn = readCanvas(videoPlayer,0);
	// Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out

	RGBtoGRAY(BridnessSamples, imgArrayIn);
	setHP1O1D(HPsamples, BridnessSamples);
	GRAYtoRGB(imgArrayOut, HPsamples);
	// Process chain end
	writeCanvas(iImageOut);

	LogArray = ["imgArrayIn", "BridnessSamples", "HPsamples", "imgArrayOut"];
}
function processingVideoHP10_cos64() {
	var	horizontalFrequency  = parseFloat(document.getElementById("In1").value);
	// Process chain begin

	genCosinus(BridnessSamples, horizontalFrequency,cw,128);
	setHP1O1D(HPsamples, BridnessSamples);
	GRAYtoRGB(imgArrayOut, HPsamples);
	// Process chain end
	writeCanvas(iImageOut);

	LogArray = [ "BridnessSamples", "HPsamples", "imgArrayOut"];
}

function setHP1O1D(iOutput, iInput) {
    for (i=0;i<iInput.length;i++){
    	if(i==0){
            iOutput[i]= iInput[i];
		} else {
            iOutput[i]= (0.5*iInput[i])-(0.5*iInput[i-1]);
			// iOutput[i] = iInput[i];
		}
    }
}

function processingVideoHP10visuell() {
	imgArrayIn = readCanvas(videoPlayer,0);
	// Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out

	RGBtoGRAY(BridnessSamples, imgArrayIn);
	setHP1Ovisuell(HPsamples, BridnessSamples);
	GRAYtoRGB(imgArrayOut, HPsamples);
	// Process chain end
	writeCanvas(iImageOut);

	LogArray = ["imgArrayIn", "BridnessSamples", "HPsamples", "imgArrayOut"];
}
function setHP1Ovisuell(iOutput, iInput) {
    for (i=0;i<iInput.length;i++){
        if(i==0){
            iOutput[i]= iInput[i];
        } else {
            iOutput[i]= (0.5*iInput[i])-(0.5*iInput[i-1]);
        }
    }
}

function processingVideoHP20() {
	imgArrayIn = readCanvas(videoPlayer,2);
	// Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out

	RGBtoGRAY(BridnessSamples, imgArrayIn);
	setHP2O2D(HPsamples, BridnessSamples);

	cutFirstLine(secondLineBridnessSamples, BridnessSamples);
	cutFirstLine(secondLineHPsamples, HPsamples);
	GRAYtoRGB(imgArrayOut, secondLineHPsamples);
	// Process chain end
	writeCanvas(iImageOut);

	LogArray = ["imgArrayIn", "BridnessSamples", "HPsamples",  "secondLineBridnessSamples","secondLineHPsamples", "imgArrayOut"];
}
function setHP2O2D(iOutput, iInput) {
	const faktor = -0.25;
    for (i=0;i<iInput.length;i++){
        iOutput[i]=
            (faktor*(-16*iInput[i]))+
            (faktor*(2*iInput[i-1]))+
            (faktor*(2*iInput[i+1]))+
            (faktor*iInput[i+(cw-1)])+
            (faktor*iInput[i-(cw-1)])+
            (faktor*(2*iInput[i+cw]))+
            (faktor*(2*iInput[i-cw]))+
            (faktor*iInput[i+(cw+1)])+
            (faktor*iInput[i-(cw+1)]);
    }
}

function processingVideoSoebel() {
	imgArrayIn = readCanvas(videoPlayer,2);
	// Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out
	RGBtoGRAY(BridnessSamples, imgArrayIn);
	setSoebel(SoebelSamples, BridnessSamples);

	cutFirstLine(secondLineBridnessSamples, BridnessSamples);
	cutFirstLine(secondLineSoebelSamples, SoebelSamples);
	GRAYtoRGB(imgArrayOut, secondLineSoebelSamples);
	// Process chain end
	writeCanvas(iImageOut);

	LogArray = ["imgArrayIn", "BridnessSamples", "SoebelSamples","secondLineBridnessSamples","secondLineSoebelSamples", "imgArrayOut"];
}

function setSoebel(iOutput, iInput) {
    for (i=0;i<iInput.length;i++){
        var iGx=
            (2*iInput[i-1])+
            (-2*iInput[i+1])+
            (iInput[i+127])+
            (-(iInput[i-127]))+
            (iInput[i-129])+
            (-(iInput[i+129]));
        var iGy=
            (2*iInput[i-128])+
            (-2*iInput[i+128])+
            (-(iInput[i+127]))+
            (iInput[i-127])+
            (iInput[i-129])+
            (-(iInput[i+129]));
        iOutput[i]=Math.abs(iGx) + Math.abs(iGy);
    }
}

//	---------------------------------------------------------------- Audio -L�sung �2--------------------------------------------------------------


function processingAudioKlang(event) {
	var freq = parseFloat(document.getElementById("In1").value);
	// Process chain begin
	genKlang(monoSamples,freq,sampleRate,1) ;

	// Process chain end
	writeWebAudio(event,monoSamples);

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
	writeWebAudio(event.outputBuffer,VolumenSamples);

	LogArray = ["monoSamples","VolumenSamples"];
}
function setAmplitude(iOutput, iInput, iAplitude) {
	for(var i = 0; i < iInput.length; i+=1) {
		if( iAplitude >0 ) iOutput[i] = iAplitude* iInput[i] ;
		if( iAplitude <0 ) iOutput[i] = iAplitude/ iInput[i] ;
		if( iAplitude ==0 ) iOutput[i] = 1* iInput[i] ;
		if( isNaN(iAplitude)  ) iOutput[i] = 1* iInput[i] ;
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
	writeWebAudio(event.outputBuffer,OutSamples);

	LogArray = ["monoSamples","DelaySamples2","OutSamples"];
}
function processingAudioDelay16K(event) {
	var delayGain = pegel(parseFloat(document.getElementById("In1").value));
	audArrayIn = readWebAudio(event);
	// Process chain begin
	StereoToMono(monoSamples, audArrayIn);
	setDelaySample(VolumenSamples, DelaySamples2, monoSamples, delayGain);
	// Process chain end
	writeWebAudio(event.outputBuffer,VolumenSamples);

	LogArray = ["monoSamples","VolumenSamples"];
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

	writeWebAudio(event,OutSamples);

	LogArray = ["AudioTestArray","DelaySamples2","OutSamples"];
}

function setDelayTime(iOutput, iDelay, iInput, iDirectGain, iDelayGain, iDelayTime) {
	iDelayGain = 0.8;
	for(let i = 0; i < iInput.length; i++){
		let sample = iInput[i]
		let x = 0;
		while(sample > 0 && x < 100){
			iDelay[x] = sample * iDelayGain;
			x++;
		}
		for(let j = 0; j < iDelay.length; j++){
			iOutput[i + j] = iInput[i + j] + iDelay[j];
		}
	}
}

function processingAudioTP1O(event) {
	var value = parseFloat(document.getElementById("In1").value);
	genNoise(monoSamples, value) ;
	// Process chain begin
	setTP1O1D(VolumenSamples, monoSamples)
	// Process chain end
	writeWebAudio(event,VolumenSamples);

	LogArray = ["monoSamples","VolumenSamples"];
}
function processingAudioHP1O(event) {
	var value = parseFloat(document.getElementById("In1").value);
	genNoise(monoSamples, value) ;
	// Process chain begin
	setHP1O1D(VolumenSamples, monoSamples)
	// Process chain end
	writeWebAudio(event,VolumenSamples);

	LogArray = ["monoSamples","VolumenSamples"];
}
function processingAudioTP2O1D(event) {
	var value = parseFloat(document.getElementById("In1").value);
	genNoise(monoSamples, value) ;
	// Process chain begin
	setTP2O1D(VolumenSamples, monoSamples)
	// Process chain end
	writeWebAudio(event,VolumenSamples);

	LogArray = ["monoSamples","VolumenSamples"];
}

function setTP2O1D(iOutput, iInput) {

}

function processingAudioHP2O1D(event) {
	var value = parseFloat(document.getElementById("In1").value);
	genNoise(monoSamples, value) ;
	// Process chain begin
	setHP2O1D(VolumenSamples, monoSamples)
	// Process chain end
	writeWebAudio(event,VolumenSamples);

	LogArray = ["monoSamples","VolumenSamples"];
}


function setHP2O1D(iOutput, iInput) {

}

function processingAudioBP2O1D(event) {
	var value = parseFloat(document.getElementById("In1").value);
	genNoise(monoSamples, value) ;
	// Process chain begin
	setBP2O1D(VolumenSamples, monoSamples)
	// Process chain end
	writeWebAudio(event,VolumenSamples);

	LogArray = ["monoSamples","VolumenSamples"];
}

function setBP2O1D(iOutput, iInput) {

}

function processingAudioBS2O1D(event) {
	var value = parseFloat(document.getElementById("In1").value);
	genNoise(monoSamples, value) ;
	// Process chain begin
	setBS2O1D(VolumenSamples, monoSamples)
	// Process chain end
	writeWebAudio(event,VolumenSamples);

	LogArray = ["monoSamples","VolumenSamples"];
}

function setBS2O1D(iOutput, iInput) {

}





