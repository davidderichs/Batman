/**
 * Created by J�rgen Lohr on 1.9.2016.
 */
	
	//	---------------------------------------------------------------- Video -L�sung �3--------------------------------------------------------------

//--------------------Delta

function processingVideoGenKompDelta() {
	var quant = parseFloat(document.getElementById("In1").value);
	var Round =2;
	// Process chain begin ------------------------------------   
	RGBtoGRAY(BridnessSamples, VideoTestArray);   
	setDelta(DeltaSamples, BridnessSamples);   
	setQuant(QuantSamples, DeltaSamples, quant, Round);
	
	setIQuant(iQuantSamples, QuantSamples, quant);
	setIDelta(IDeltaSamples, iQuantSamples);   		
	// Process chain end  ------------------------------------
	writeCanvas(iImageOut);
		
	analyseError(ErrorLog,IDeltaSamples, BridnessSamples,255) 
	LogArray = ["VideoTestArray", "BridnessSamples", "DeltaSamples", "QuantSamples", "iQuantSamples", "IDeltaSamples", "imgArrayOut", "ErrorLog"];

}
function processingVideoKompDelta() { 
	var quant = parseFloat(document.getElementById("In1").value);
	var Round =2;
	imgArrayIn = readCanvas(videoPlayer,0);
	// Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out
	RGBtoGRAY(BridnessSamples, imgArrayIn);   
	setDelta(DeltaSamples, BridnessSamples);   
	setQuant(QuantSamples, DeltaSamples, quant, Round);
	
	setIQuant(iQuantSamples, QuantSamples, quant);
	setIDelta(IDeltaSamples, iQuantSamples);   		
	GRAYtoRGB(imgArrayOut, IDeltaSamples);   
	// Process chain end
	writeCanvas(iImageOut);
	
	analyseError(ErrorLog,IDeltaSamples, BridnessSamples,255); 
	analyseVideoKompressionDelta(KompressionLog, quant );
	LogArray = ["imgArrayIn", "BridnessSamples", "DeltaSamples", "QuantSamples", "iQuantSamples", "IDeltaSamples", "imgArrayOut", "ErrorLog"];
}

					// Lösung3  --------------------!!!!!!!!!!!!!!!!!

					
function setDelta(iOutput, iInput) {
	for (let i=0; i<iInput.length; i++){
		if(i===0){
			iOutput[i] = iInput[i];
		} else {
            iOutput[i]=iInput[i]-iInput[i-1];
		}
	}
}
function setIDelta(iOutput, iInput) {
    for (let i=0; i<iInput.length; i++){
        if(i===0){
            iOutput[i] = iInput[i];
        } else {
            iOutput[i] = iInput[i] + iOutput[i - 1];
        }
    }
}

function setQuant(iOutput, iInput, iQuant, iRound)	{
    for (let i=0; i<iInput.length; i++){
        iOutput[i] = Number.parseFloat(iInput[i]/iQuant).toFixed(iRound);
    }
}

function setIQuant(iOutput, iInput, iQuant)	{
    for (let i=0; i<iInput.length; i++){
        iOutput[i] = iInput[i]*iQuant;
    }
}

	// iInput2 ist DELTA, iInput ist BrightnesSamples
function analyseError(iErrorLog, iInput2, iInput,iMaxAmplitude)  	{
	SAD = 0;
	MSE = 0;
	PSNR= 0;
	var Dif;
	var iMaxAmplitude = parseFloat(iMaxAmplitude);

	for ( let i = 0; i < (iInput2.length); i++ ) {
		if(typeof iInput2[i] != 'undefined'){
			if(! isNaN(iInput[i]) && ! isNaN(iInput2[i])){
				Dif = iInput[i];
				MSE = 1;
				SAD = 2;
				iErrorLog[i] = Dif;
			}
		}
	}

	MSE += 0.000000001;
	PSNR  =3;
	MSE  -= 0.000000001;

	SAD =runde (SAD,2);
    MSE =runde (MSE,2);
	PSNR=runde (PSNR,2);
}


//--------------------Subband

function processingVideoGenKompSubband() {
	var down_fac = 2;
	var TPquant = parseFloat(document.getElementById("In1").value);
	var HPquant = parseFloat(document.getElementById("In2").value);
	var Round =1;
	// Process chain begin ------------------------------------   
	RGBtoGRAY(BridnessSamples, VideoTestArray);   
	setALength(ALengthSamples, BridnessSamples);   
	setTP1O1D(TPsamples, ALengthSamples);   
	setHP1O1D(HPsamples, ALengthSamples);  
	setDownsampling(TPdownsamples, TPsamples, down_fac);
    setDownsampling(HPdownsamples, HPsamples, down_fac);
	setQuant(TPquantsamples, TPdownsamples, TPquant, Round);
	setQuant(HPquantsamples, HPdownsamples, HPquant, Round);
	
	setIQuant(TPIquantsamples, TPquantsamples, TPquant);
	setIQuant(HPIquantsamples, HPquantsamples, HPquant);
	setUpsampling(TPupsamples, TPIquantsamples, down_fac);
    setUpsampling(HPupsamples, HPIquantsamples, down_fac);
    setTP1O1D(ATPOutsamples, TPupsamples);
    setAHP1O1D(AHPOutsamples, HPupsamples);
	setMix(MixOutSamples, ATPOutsamples, AHPOutsamples);
	setDelay(DelaySamples, MixOutSamples,1)
	setAmplitude(ScaleSamples, DelaySamples, 2);   
	GRAYtoRGB(imgArrayOut, ScaleSamples); 
	// Process chain end  ------------------------------------
	writeCanvas(iImageOut);
		
	analyseError(ErrorLog,ScaleSamples, BridnessSamples,255) 
	LogArray = ["VideoTestArray", "BridnessSamples", "ALengthSamples", "TPsamples",  "HPsamples", "TPdownsamples","HPdownsamples","TPquantsamples","HPquantsamples","TPIquantsamples","HPIquantsamples", "TPupsamples","HPupsamples","ATPOutsamples", "AHPOutsamples", "MixOutSamples","DelaySamples", "ScaleSamples", "imgArrayOut", "ErrorLog"];
}

function processingVideoKompSubband() {  
	var down_fac = 2;
	var TPquant = parseFloat(document.getElementById("In1").value);
	var HPquant = parseFloat(document.getElementById("In2").value);
	var Round =1;
	imgArrayIn = readCanvas(videoPlayer,0);
	// Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out
	RGBtoGRAY(BridnessSamples, imgArrayIn);   
	setALength(ALengthSamples, BridnessSamples);   
	setTP1O1D(TPsamples, ALengthSamples);  
	setHP1O1D(HPsamples, ALengthSamples);   
	setDownsampling(TPdownsamples, TPsamples, down_fac);
    setDownsampling(HPdownsamples, HPsamples, down_fac);
	setQuant(TPquantsamples, TPdownsamples, TPquant, Round);
	setQuant(HPquantsamples, HPdownsamples, HPquant, Round);
	
	setIQuant(TPIquantsamples, TPquantsamples, TPquant);
	setIQuant(HPIquantsamples, HPquantsamples, HPquant);
	setUpsampling(TPupsamples, TPIquantsamples, down_fac);
    setUpsampling(HPupsamples, HPIquantsamples, down_fac);
    setTP1O1D(ATPOutsamples, TPupsamples);
    setAHP1O1D(AHPOutsamples, HPupsamples);
	setMix(MixOutSamples, ATPOutsamples, AHPOutsamples);
	setDelay(DelaySamples, MixOutSamples,1)
	setAmplitude(ScaleSamples, DelaySamples, 2);   
	GRAYtoRGB(imgArrayOut, ScaleSamples); 
	// Process chain end  ------------------------------------
	writeCanvas(iImageOut);
		
	analyseError(ErrorLog,ScaleSamples, BridnessSamples,255) 
	analyseVideoKompressionSubband(KompressionLog, TPquant, HPquant  );
	LogArray = [ "BridnessSamples", "ALengthSamples", "TPsamples",  "HPsamples", "TPdownsamples","HPdownsamples","TPquantsamples","HPquantsamples","TPIquantsamples","HPIquantsamples", "TPupsamples","HPupsamples","ATPOutsamples", "AHPOutsamples", "MixOutSamples","DelaySamples", "ScaleSamples", "imgArrayOut", "ErrorLog"];
}

					// Lösung3  --------------------!!!!!!!!!!!!!!!!!

function setALength(iOutput, iInput) {		//Downsampling
	for (let i=0; i<iInput.length; i++){
		iOutput[i] = iInput[i];
	}
	iOutput[iOutput.length-1] = 0;
}

function setDownsampling(iOutput, iInput, idown_fac) {		//Downsampling
	for (let i=0; i<iInput.length; i++){
		iOutput[i] = iInput[i]/idown_fac;
	}
}


function setUpsampling(iOutput, iInput, idown_fac) {		//Downsampling
    for (let i=0; i<iInput.length; i++){
        iOutput[i] = iInput[i]*idown_fac;
    }
}

function setAHP1O1D(iOutput, iInput) {
    for (i=0;i<iInput.length;i++){
        if(i==0){
            iOutput[i]= iInput[i];
        } else {
            iOutput[i]= (0.5*iInput[i])-(0.5*iInput[i-1]);
        }
    }
}

function setMix(iOutput, iInput2, iInput1) {		//Mix
    for (i = 0; i < iInput2.length; i++) {
        iOutput[i] = (iInput1[i] + iInput2[i]);
    }
}

function setDelay(iOutput, iInput,iDelaySamples) {		//Scale und shift
    for (var i = 0; i < iOutput.length; ++i) {
        iOutput[i] = iInput[i + iDelaySamples];
    }
}


//--------------------FFT
function processingVideoGenKompFFTOneHz() {
	var TPquant = parseFloat(document.getElementById("In1").value);
	var HPquant = parseFloat(document.getElementById("In2").value);
	var splitFreq = parseFloat(document.getElementById("In3").value);
	var Round =0;
	setFreqQuantMatrix(QuantMatrix,TPquant,HPquant,splitFreq);
	// Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out
		GRAYtoRGB(imgArrayIn2, oneHz); 	
    	setFFT(swepFFT,imgArrayIn2);
		FFT1.spec=swepFFT.spec.slice(0,swepFFT.spec.length);
		swapFFTfor(swepFFT)
		setQuantFFT(quantFFT,swepFFT,QuantMatrix,Round);
		
		setInvQuantFFT(iswepFFT,quantFFT,QuantMatrix);
		iquantFFT.spec=iswepFFT.spec.slice(0,iswepFFT.spec.length);
		swapFFTback(iswepFFT)				
		setIFFT(imgArrayOut, iswepFFT);	
		RGBtoGRAY(iFFTspec,imgArrayOut);  
		
	// Process chain end  ------------------------------------
	writeCanvas(iImageOut);
		
	analyseError(ErrorLog,iFFTspec, oneHz,255) 
	LogArray = ["imgArrayIn2","oneHz","FFT1.spec","swepFFT.spec","QuantMatrix", "quantFFT.spec","iquantFFT.spec","iswepFFT.spec","iFFTspec","imgArrayOut","ErrorLog"];
}

function processingVideoGenKompFFTpic() {
	var TPquant = parseFloat(document.getElementById("In1").value);
	var HPquant = parseFloat(document.getElementById("In2").value);
	var splitFreq = parseFloat(document.getElementById("In3").value);
	var Round =0;
	setFreqQuantMatrix(QuantMatrix,TPquant,HPquant,splitFreq);
	imgArrayIn = readCanvas(videoPlayer,0);
	// Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out
		RGBtoGRAY( BridnessSamples,imgArrayIn); 
		GRAYtoRGB(imgArrayIn2, BridnessSamples); 	
		setFFT(swepFFT,imgArrayIn2);
		FFT1.spec=swepFFT.spec.slice(0,swepFFT.spec.length);
		swapFFTfor(swepFFT)
		setQuantFFT(quantFFT,swepFFT,QuantMatrix,Round);

		setInvQuantFFT(iswepFFT,quantFFT,QuantMatrix);
		iquantFFT.spec=iswepFFT.spec.slice(0,iswepFFT.spec.length);
		swapFFTback(iswepFFT)				
		setIFFT(imgArrayOut, iswepFFT);	
		RGBtoGRAY(iFFTspec,imgArrayOut);  
		
	// Process chain end  ------------------------------------
	writeCanvas(iImageOut);
		
	analyseError(ErrorLog,iFFTspec, BridnessSamples,255) 
	LogArray = ["imgArrayIn","BridnessSamples","FFT1.spec","QuantMatrix","swepFFT.spec","quantFFT.spec","iquantFFT.spec","iswepFFT.spec","iFFTspec","imgArrayOut","ErrorLog"];
}

function processingVideoKompFFT() { 
	var TPquant = parseFloat(document.getElementById("In1").value);
	var HPquant = parseFloat(document.getElementById("In2").value);
	var splitFreq = parseFloat(document.getElementById("In3").value);
	var Round =0;
	setFreqQuantMatrix(QuantMatrix,TPquant,HPquant,splitFreq);
	imgArrayIn = readCanvas(videoPlayer,0);
	// Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out
		RGBtoGRAY( BridnessSamples,imgArrayIn); 
		GRAYtoRGB(imgArrayIn2, BridnessSamples); 	
		setFFT(swepFFT,imgArrayIn2);
		FFT1.spec=swepFFT.spec.slice(0,swepFFT.spec.length);
		swapFFTfor(swepFFT)
		setQuantFFT(quantFFT,swepFFT,QuantMatrix,Round);

		setInvQuantFFT(iswepFFT,quantFFT,QuantMatrix);
		iquantFFT.spec=iswepFFT.spec.slice(0,iswepFFT.spec.length);
		swapFFTback(iswepFFT)				
		setIFFT(imgArrayOut, iswepFFT);	
		RGBtoGRAY(iFFTspec,imgArrayOut);  
		
	// Process chain end  ------------------------------------
	writeCanvas(iImageOut);
		
	analyseError(ErrorLog,iFFTspec, BridnessSamples,255) 
	analyseVideoKompressionFFT(KompressionLog, TPquant, HPquant, splitFreq)
	LogArray = ["imgArrayIn","BridnessSamples","FFT1.spec","QuantMatrix","swepFFT.spec","quantFFT.spec","iquantFFT.spec","iswepFFT.spec","iFFTspec","imgArrayOut","ErrorLog"];
}

function setInitFFT(iDisplay_fac)	{
	FFT.init(iDisplay_fac);
	FrequencyFilter.init(iDisplay_fac); // wird gebraucht Filter.Swap
}

function setFFT(FFT_data,idata)	{
	var islog= true;
	var maxSpectrum= 1.0;
	GRAYFFT(FFT_data,idata);
    FFT.fft2d(FFT_data.real, FFT_data.imag);
	FFT.fftspectrum(FFT_data.spec, maxSpectrum, FFT_data.real, FFT_data.imag, islog);
}
function GRAYFFT(FFT_data,idata){
	var i = 0,
        val = 0,
        p = 0;
			
	for(var y=0; y<display_fac; y++) {
        i = y*display_fac;
        for(var x=0; x<display_fac; x++) {
            FFT_data.real[i + x] = idata[(i << 2) + (x << 2)];
            FFT_data.imag[i + x] = 0.0;
        }
    }
} 
function setIFFT(idata,FFT_data)	{
	var i = 0,
        val = 0,
        p = 0;
	FFT.ifft2d(FFT_data.real, FFT_data.imag);
	for(var y=0; y<display_fac; y++) {
          i = y*display_fac;
          for(var x=0; x<display_fac; x++) {
            val = FFT_data.real[i + x];
            val = val > 255 ? 255 : val < 0 ? 0 : val;
            p = (i << 2) + (x << 2);
            idata[p] = idata[p + 1] = idata[p + 2] = val;
			idata[p +3] = 255;
          }
        }
}
function swapFFTfor(iFFT)	{
	var islog= true;
	var maxSpectrum= 1.0;
	iFFT.imag[0] =0;
	FrequencyFilter.swap(iFFT.real, iFFT.imag); 
	FFT.fftspectrum(iFFT.spec, maxSpectrum, iFFT.real, iFFT.imag, islog);
}
function swapFFTback(iFFT)	{
	var islog= true;
	var maxSpectrum= 1.0;
	iFFT.imag[0] =0;
	FrequencyFilter.swap(iFFT.real, iFFT.imag); 
	FFT.fftspectrum(iFFT.spec, maxSpectrum, iFFT.real, iFFT.imag, islog);
}

					// Lösung3  --------------------!!!!!!!!!!!!!!!!!
			
function setFreqQuantMatrix(iQuantMatrix, TPspann, HPspann, splitFreq)	{
 
}

function setQuantFFT(iergFFT, idataFFT, spanneMatrix, iRound)	{

}

function setInvQuantFFT(iergFFT, idataFFT, spanneMatrix)	{
 
}


	//	---------------------------------------------------------------- Audio -L�sung �3--------------------------------------------------------------

//--------------------Delta

function processingAudioGenKompDelta(event) {  
	var quant = parseFloat(document.getElementById("In1").value);
	var Round =6;
	// Process chain begin ------------------------------------   
	setDelta(DeltaSamplesP, AudioTestArray);   // L�sung 3.1
	setQuant(QuantSamplesP, DeltaSamplesP, quant, Round);
	
	setIQuant(iQuantSamplesP, QuantSamplesP, quant);
	setIDelta(iDeltaSamplesP, iQuantSamplesP);   // L�sung 3.1		
	// Process chain end
    writeWebAudio(event,iDeltaSamplesP);
	
	analyseError(ErrorLog,iDeltaSamplesP, AudioTestArray,2.0); 
	LogArray = ["AudioTestArray",  "DeltaSamplesP", "QuantSamplesP", "iQuantSamplesP", "iDeltaSamplesP", "ErrorLog"];
 }

function processingAudioKompDelta(event) {  
 	var quant = parseFloat(document.getElementById("In1").value);
	var Round =6;
	audArrayIn = readWebAudio(event);
	// Process chain begin    
	StereoToMono(monoSamples, audArrayIn);
	setDelta(DeltaSamplesP, monoSamples);   // L�sung 3.1
	setQuant(QuantSamplesP, DeltaSamplesP, quant, Round);
	
	setIQuant(iQuantSamplesP, QuantSamplesP, quant);
	setIDelta(iDeltaSamplesP, iQuantSamplesP);   // L�sung 3.1		
	// Process chain end
    writeWebAudio(event.outputBuffer,iDeltaSamplesP);
	
	analyseError(ErrorLogP,iDeltaSamplesP, monoSamples,2.0) ;
	analyseAudioKompressionDelta(KompressionLogP, quant );
	LogArray = ["monoSamples",  "DeltaSamplesP", "QuantSamplesP", "iQuantSamplesP", "iDeltaSamplesP", "ErrorLogP"];
}

//--------------------Subband

function processingAudioGenKompSubband(event) {  
	var down_fac = 2;
	var TPquant = parseFloat(document.getElementById("In1").value);
	var HPquant = parseFloat(document.getElementById("In2").value);
	var Round =5;
	// Process chain begin ------------------------------------   
	setALength(ALengthSamples, AudioTestArray);   
	setTP1O1D(TPsamples, ALengthSamples);   
	setHP1O1D(HPsamples, ALengthSamples);   
	setDownsampling(TPdownsamples, TPsamples, down_fac);
    setDownsampling(HPdownsamples, HPsamples, down_fac);
	setQuant(TPquantsamples, TPdownsamples, TPquant, Round);
	setQuant(HPquantsamples, HPdownsamples, HPquant, Round);
	
	setIQuant(TPIquantsamples, TPquantsamples, TPquant);
	setIQuant(HPIquantsamples, HPquantsamples, HPquant);
	setUpsampling(TPupsamples, TPIquantsamples, down_fac);
    setUpsampling(HPupsamples, HPIquantsamples, down_fac);
    setTP1O1D(ATPOutsamples, TPupsamples);
    setAHP1O1D(AHPOutsamples, HPupsamples);
	setMix(MixOutSamples, ATPOutsamples, AHPOutsamples);
	setDelay(DelaySamples, MixOutSamples,1)
	setAmplitude(ScaleSamples, DelaySamples, 2);   
	// Process chain end
    writeWebAudio(event,ScaleSamples);
	analyseError(ErrorLog,ScaleSamples, AudioTestArray,2.0) 
	
 	LogArray = [ "AudioTestArray", "ALengthSamples", "TPsamples",  "HPsamples", "TPdownsamples","HPdownsamples","TPquantsamples","HPquantsamples","TPIquantsamples","HPIquantsamples", "TPupsamples","HPupsamples","ATPOutsamples", "AHPOutsamples", "MixOutSamples","DelaySamples", "ScaleSamples",  "ErrorLog"];

	}

function processingAudioKompSubband(event) {  
 	var down_fac = 2;
 	var TPquant = parseFloat(document.getElementById("In1").value);
	var HPquant = parseFloat(document.getElementById("In2").value);
	var Round =5;
    audArrayIn = readWebAudio(event);
	// Process chain begin    
	StereoToMono(monoSamples, audArrayIn);  
	setALength(ALengthSamplesP, monoSamples);   
	setTP1O1D(TPsamplesP, ALengthSamplesP);   // L�sung 3.1
	setHP1O1D(HPsamplesP, ALengthSamplesP);   // L�sung 3.1
	setDownsampling(TPdownsamplesP, TPsamplesP, down_fac);
    setDownsampling(HPdownsamplesP, HPsamplesP, down_fac);
	setQuant(TPquantsamplesP, TPdownsamplesP, TPquant, Round);
	setQuant(HPquantsamplesP, HPdownsamplesP, HPquant, Round);
	
	setIQuant(TPIquantsamplesP, TPquantsamplesP, TPquant);
	setIQuant(HPIquantsamplesP, HPquantsamplesP, HPquant);
	setUpsampling(TPupsamplesP, TPIquantsamplesP, down_fac);
    setUpsampling(HPupsamplesP, HPIquantsamplesP, down_fac);
    setTP1O1D(ATPOutsamplesP, TPupsamplesP);
    setAHP1O1D(AHPOutsamplesP, HPupsamplesP);
	setMix(MixOutSamplesP, ATPOutsamplesP, AHPOutsamplesP);
	setDelay(DelaySamplesP, MixOutSamplesP,1)
	setAmplitude(ScaleSamplesP, DelaySamplesP, 2);   
	// Process chain end
    writeWebAudio(event.outputBuffer,ScaleSamplesP);

	analyseError(ErrorLogP,ScaleSamplesP, monoSamples,2.0) ;
	analyseAudioKompressionSubband(KompressionLogP, TPquant, HPquant  );	
 	LogArray = [ "monoSamples", "ALengthSamplesP", "TPsamplesP",  "HPsamplesP", "TPdownsamplesP","HPdownsamplesP","TPquantsamplesP","HPquantsamplesP","TPIquantsamplesP","HPIquantsamplesP", "TPupsamplesP","HPupsamplesP","ATPOutsamplesP", "AHPOutsamplesP", "MixOutSamplesP", "DelaySamplesP", "ScaleSamplesP", "ErrorLogP"];
}

//--------------------FFT

function processingAudioGenKompFFT(event) {  
	var TPquant = parseFloat(document.getElementById("In1").value);
	var HPquant = parseFloat(document.getElementById("In2").value);
	var splitFrequenz = parseFloat(document.getElementById("In3").value);
	freqQuantMatrix(QuantMatrix,TPquant,HPquant,splitFrequenz);
	var Round =5;
	// Process chain begin ------------------------------------  
	FFTKoef.forward(oneHzAudio);
	doFFTSpectrum(FFTKoef);
	quantMatrix(QuantFFT,FFTKoef, QuantMatrix,Round);
	doFFTSpectrum(QuantFFT);
	
	invQuantMatrix( iQuantFFT,QuantFFT, QuantMatrix,Round);	
	doFFTSpectrum(iQuantFFT);
 	iInverseFFT = iQuantFFT.inverse(iQuantFFT.real,iQuantFFT.imag);
	// Process chain end
    writeWebAudio(event,iInverseFFT);
	
	analyseError(ErrorLog,iInverseFFT, oneHzAudio,2.0); 
	LogArray = ["oneHzAudio",  "QuantMatrix", "FFTKoef.spectrumLong",  "QuantFFT.spectrumLong",  "iQuantFFT.spectrumLong",  "iInverseFFT", "ErrorLog"];
 }
 
  function doFFTSpectrum(idata) 	{   // 1D FFT : out, in)
     // Spectrum erzeugen 
	for (i=0;i<idata.real.length;++i) 	{
		idata.spectrumLong[i]=Math.sqrt(idata.real[i] *idata.real[i] )+ Math.sqrt(idata.imag[i] *idata.imag[i] );
	}	
}

					// Lösung3  --------------------!!!!!!!!!!!!!!!!!

function freqQuantMatrix(iQuantMatrix, iTpQuant, iHpQuant, koefNr)	{

}

function quantMatrix(ifft2,ifft, iQuantMatrix,iRound)	{

}
	
function invQuantMatrix( ifft2,ifft, iQuantMatrix,iRound)	{

 } 
 
function processingAudioKompFFT(event) {  
	var TPquant = parseFloat(document.getElementById("In1").value);
	var HPquant = parseFloat(document.getElementById("In2").value);
	var splitFrequenz = parseFloat(document.getElementById("In3").value);
	var Round =5;
	freqQuantMatrix(QuantMatrixP,TPquant,HPquant,splitFrequenz);
    audArrayIn = readWebAudio(event);
	// Process chain begin    
	StereoToMono(monoSamples, audArrayIn);
	FFTKoefP.forward(monoSamples);
	doFFTSpectrum(FFTKoefP);
	quantMatrix(QuantFFTP,FFTKoefP, QuantMatrixP,Round);
	doFFTSpectrum(QuantFFTP);
	
	invQuantMatrix(iQuantFFTP,QuantFFTP, QuantMatrixP,Round);	
	doFFTSpectrum(iQuantFFTP);
 	iInverseFFTP = iQuantFFTP.inverse(iQuantFFTP.real,iQuantFFTP.imag);
	// Process chain end
    writeWebAudio(event.outputBuffer,iInverseFFTP);

	analyseError(ErrorLogP,iInverseFFTP, monoSamples,2.0); 
	analyseAudioKompressionFFT(KompressionLogP, TPquant, HPquant, splitFrequenz)	
	LogArray = ["monoSamples",  "QuantMatrixP", "FFTKoefP.spectrumLong",  "QuantFFTP.spectrumLong",  "iQuantFFTP.spectrumLong",  "iInverseFFTP", "ErrorLogP"];
}

function processingAudioGenWhiteNoiseKompFFT(event) {  
	var TPquant = parseFloat(document.getElementById("In1").value);
	var HPquant = parseFloat(document.getElementById("In2").value);
	var splitFrequenz = parseFloat(document.getElementById("In3").value);
	var Round =5;
	freqQuantMatrix(QuantMatrix,TPquant,HPquant,splitFrequenz);
	genNoise(monoSamples, 2) ;  	
	// Process chain begin    
	FFTKoef.forward(monoSamples);
	doFFTSpectrum(FFTKoef);
	quantMatrix(QuantFFT,FFTKoef, QuantMatrix,Round);
	doFFTSpectrum(QuantFFT);
	invQuantMatrix(iQuantFFT,QuantFFT, QuantMatrix,Round);	
	doFFTSpectrum(iQuantFFT);
	
 	iInverseFFT = iQuantFFT.inverse(iQuantFFT.real,iQuantFFT.imag);
	// Process chain end
    writeWebAudio(event,iInverseFFT);
	
	analyseError(ErrorLog,iInverseFFT, monoSamples,2.0); 
	LogArray = ["monoSamples",  "QuantMatrix", "FFTKoef.spectrumLong",  "QuantFFT.spectrumLong",  "iQuantFFT.spectrumLong",  "iInverseFFT", "ErrorLog"];
}



/* -------------------------------------------------------------------------------------
 * the Worth with
 * @param erg
 * @param idata -------------------------------
 */
  
function analyseVideoKompressionDelta(iKomLog, iQuant ){
     // Worthlength
     iKomLog[0] = 1;  // worthlength Orginal
     iKomLog[1] = 1 ; //worthlength iTPupsamples
     iKomLog[2] = 2;  //worthlength iHPupsamples
	 iKomLog[3] = 3;  // HPWL 
     iKomLog[4] = 4;  // OrginalWL - TPWL;
     iKomLog[5] = 5;  //OrginalWL - HPWL;

     //Datenrate
	 iKomLog[6] = 6;  
	 iKomLog[7] = 7;  // CodecDatarate /
	 iKomLog[8] = 8;	 
     iKomLog[9] = 9  ; // all Daterate 
 	 // Compression    
     iKomLog[10] = 10;
}
 
 
 function analyseVideoKompressionSubband(iKomLog, iTPquant, iHPquant  ){
     // Worthlength
     iKomLog[0] = 1;  // worthlength Orginal
     iKomLog[1] = 1 ; //worthlength iTPupsamples
     iKomLog[2] = 2;  //worthlength iHPupsamples
	 iKomLog[3] = 3;  // HPWL 
     iKomLog[4] = 4;  // OrginalWL - TPWL;
     iKomLog[5] = 5;  //OrginalWL - HPWL;

     //Datenrate
	 iKomLog[6] = 6;  
	 iKomLog[7] = 7;  // CodecDatarate /
	 iKomLog[8] = 8;	 
     iKomLog[9] = 9  ; // all Daterate 
 	 // Compression    
     iKomLog[10] = 10;
}

 function analyseVideoKompressionFFT(iKomLog, iTPquant, iHPquant, iKoef){
     // Worthlength
     iKomLog[0] = 1;  // worthlength Orginal
     iKomLog[1] = 1 ; //worthlength iTPupsamples
     iKomLog[2] = 2;  //worthlength iHPupsamples
	 iKomLog[3] = 3;  // HPWL 
     iKomLog[4] = 4;  // OrginalWL - TPWL;
     iKomLog[5] = 5;  //OrginalWL - HPWL;

     //Datenrate
	 iKomLog[6] = 6;  
	 iKomLog[7] = 7;  // CodecDatarate /
	 iKomLog[8] = 8;	 
     iKomLog[9] = 9  ; // all Daterate 
 	 // Compression    
     iKomLog[10] = 10;
}




function analyseAudioKompressionDelta(iKomLog, iQuant ){
     // Worthlength
     iKomLog[0] = 1;  // worthlength Orginal
     iKomLog[1] = 1 ; //worthlength iTPupsamples
     iKomLog[2] = 2;  //worthlength iHPupsamples
	 iKomLog[3] = 3;  // HPWL 
     iKomLog[4] = 4;  // OrginalWL - TPWL;
     iKomLog[5] = 5;  //OrginalWL - HPWL;

     //Datenrate
	 iKomLog[6] = 6;  
	 iKomLog[7] = 7;  // CodecDatarate /
	 iKomLog[8] = 8;	 
     iKomLog[9] = 9  ; // all Daterate 
 	 // Compression    
     iKomLog[10] = 10;
}
 
 
 function analyseAudioKompressionSubband(iKomLog, iTPquant, iHPquant  ){
     // Worthlength
     iKomLog[0] = 1;  // worthlength Orginal
     iKomLog[1] = 1 ; //worthlength iTPupsamples
     iKomLog[2] = 2;  //worthlength iHPupsamples
	 iKomLog[3] = 3;  // HPWL 
     iKomLog[4] = 4;  // OrginalWL - TPWL;
     iKomLog[5] = 5;  //OrginalWL - HPWL;

     //Datenrate
	 iKomLog[6] = 6;  
	 iKomLog[7] = 7;  // CodecDatarate /
	 iKomLog[8] = 8;	 
     iKomLog[9] = 9  ; // all Daterate 
 	 // Compression    
     iKomLog[10] = 10;
}

 function analyseAudioKompressionFFT(iKomLog, iTPquant, iHPquant, iKoef){
     // Worthlength
     iKomLog[0] = 1;  // worthlength Orginal
     iKomLog[1] = 1 ; //worthlength iTPupsamples
     iKomLog[2] = 2;  //worthlength iHPupsamples
	 iKomLog[3] = 3;  // HPWL 
     iKomLog[4] = 4;  // OrginalWL - TPWL;
     iKomLog[5] = 5;  //OrginalWL - HPWL;

     //Datenrate
	 iKomLog[6] = 6;  
	 iKomLog[7] = 7;  // CodecDatarate /
	 iKomLog[8] = 8;	 
     iKomLog[9] = 9  ; // all Daterate 
 	 // Compression    
     iKomLog[10] = 10;
}
	
// ---------------------------info Analyse Audio Video-------------------
/*
function logVideoCompression(iKomLog){
    log("--------------Compression Data -----------------");
    log("Origninal Wortbreite: " +  iKomLog[0] + " Bit , Codec Wortbreite: " + iKomLog[1] +" Bit" ); // "bit, TP-Quant Wortbreite: " + iKomLog[2] + "bit, HP-Quant Wortbreite: " + iKomLog[3] + "bit"
    log("TP-Quant-Wortbreite = " + iKomLog[2] + " Bit,  HP-Quant-Wortbreite = " + iKomLog[3] + " Bit");
    log("TP-Codec-Wortbreite = " + iKomLog[4] + " Bit,  HP-Codec-Wortbreite = " + iKomLog[5] + " Bit");
  	log("Datarate  at Canvas ("+ cw + ", "+ ch +", p25): Orginal: " + iKomLog[6]+ " MBit/s, Codec: " + iKomLog[9] + " MBit/s " );  //  log("Gesamt-Datenrate(TP + HP) bei 404p25: " + tpdrate + " + " + hpdrate + " = " + allDrate + " bit ~ " + allDrate/1000000 + " mbit");
    log("Kompressionsrate: 1 : " + iKomLog[10] );
}
function logAudioCompression(iKomLog){
    log("--------------Compression Data -----------------");
    log("Origninal Wortbreite: " +  iKomLog[0] + " Bit , Codec Wortbreite: " + iKomLog[1] +" Bit" ); // "bit, TP-Quant Wortbreite: " + iKomLog[2] + "bit, HP-Quant Wortbreite: " + iKomLog[3] + "bit"
    log("TP-Quant-Wortbreite = " + iKomLog[2] + " Bit,  HP-Quant-Wortbreite = " + iKomLog[3] + " Bit");
    log("TP-Codec-Wortbreite = " + iKomLog[4] + " Bit,  HP-Codec-Wortbreite = " + iKomLog[5] + " Bit");
  	log("Datarate  at AudioBuffer ("+ bufferSize + ", Ch: "+ channelOut +"): Orginal: " + iKomLog[6]+ " MBit/s, Codec: " + iKomLog[9] + " MBit/s " );  //  log("Gesamt-Datenrate(TP + HP) bei 404p25: " + tpdrate + " + " + hpdrate + " = " + allDrate + " bit ~ " + allDrate/1000000 + " mbit");
    log("Kompressionsrate: 1 : " + iKomLog[10] );
*/


