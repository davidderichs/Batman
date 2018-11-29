/**
 * Created by J�rgen Lohr on 1.9.2016.
 */

/**
 * Das hier ist das Programm-Setup
 * @type {number}
 */
		var intervalId=0;
        var videoPlayer ;
        var canvas ;
        var context ;
        var back ;
        var backcontext ;
		var iImageIn, imgArrayIn,iImageOut, imgArrayOut; 
        var cw, ch, length, mouseX, mouseY, imgW, imgH;
		var  frameRate =25;
		var farbe ;
		var asset;
		var preLog;
		var LogArray  = new Array(); 
	var oneHz64 = new Array(254, 180, 74, 0, 0, 74, 180, 254, 254, 180, 74, 0, 0, 74, 180, 254, 254, 180, 74, 0, 0, 74, 180, 254, 254, 180, 74, 0, 0, 74, 180, 254, 254, 180, 74, 0, 0, 74, 180, 254, 254, 180, 74, 0, 0, 74, 180, 254, 254, 180, 74, 0, 0, 74, 180, 254, 254, 180, 74, 0, 0, 74, 180, 254);
	var oneHz = new Array(254, 0, 0, 254, 254, 0, 0, 254, 254, 0, 0, 254, 254, 0, 0, 254 ) ;
	var VideoTestArray  = new Array( 100, 100, 100, 255, 101, 101, 101, 255, 102, 102, 102, 255, 103, 103, 103, 255, 104, 104, 104, 255, 105, 105, 105, 255, 106, 106, 106, 255, 107, 107, 107, 255);
	var AudioTestArray  = new Array( 0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7);	
	var oneHzAudio = new Array(1,0.42,-0.42,-1,-1,-0.42,0.42,1);
	var display_fac = 128;  
		var SAD, PSNR, MSE;

		var QuantMatrix ;
	var FFT1 =new Object();
	FFT1.real = [];
	FFT1.imag = [];
	FFT1.spec = [];	
	var iFFT =new Object();
	iFFT.real = [];
	iFFT.imag = [];
	iFFT.spec = [];	
	var FFT2 =new Object();
	FFT2.real = [];
	FFT2.imag = [];
	FFT2.spec = [];
	var FFT3 =new Object();
	FFT3.real = [];
	FFT3.imag = [];
	FFT3.spec = [];	
	var swepFFT =new Object();
	swepFFT.real = [];
	swepFFT.imag = [];
	swepFFT.spec = [];	
	var iswepFFT =new Object();
	iswepFFT.real = [];
	iswepFFT.imag = [];
	iswepFFT.spec = [];	
	var quantFFT =new Object();
	quantFFT.real = [];
	quantFFT.imag = [];
	quantFFT.spec = [];	
	var iquantFFT =new Object();
	iquantFFT.real = [];
	iquantFFT.imag = [];
	iquantFFT.spec = [];

/**
 * Dies sind die Audio Files, die eingebunden werden vom Programm
 * @type {string}
 */
var audioFile  = 'asset/audio/dual_audio.wav';
var audioFile1 = 'asset/audio/rauschen_weiss.wav';
// Auskommentiert für Uebung Video 2 Aufgaben 2.4 und 2.5
var videoFile  = "asset/video/blue_screen.webm" ;
// var videoFile  = "asset/video/feinesGitterBesser.mp4" ;
var videoFile1  = "asset/video/background.webm"  ;
var picFile = "asset/pic/leer.jpg"; 
var picFile1 = "asset/pic/BeuthHSMapSmall2klein.jpg"; 

var jsNode;
var aContext;
var audio;

var bufferSize = 2048;
var sampleRate = 48000; //24000; //22,05k, !24K,32K,44,1K,48K
var channelIn = 2;
var channelOut = 1;
 var sampleOut;
 var source; 
 
 var rundeLog=0;

 var audArrayIn =new Object();
	audArrayIn.l = [];
	audArrayIn.r = [];
var monoSamples, outputSamples, VolumenSamples;
var AVMODE ;
var FFTKoef, quantFFT, iQuantFFT, fft4;
	var QuantMatrix;
	var delayBufferCounter=0;
	
var button_normal = "#dddddd";
var button_on = "#66CC33";

document.addEventListener('DOMContentLoaded', initPlayer,false);

	  
function initPlayer(){
initVideoPlayer();
initAudioPlayer();
	logClear();
}
function initAudioPlayer(){
 
  // create the audio source

    audioPlayer = document.getElementById('audioID');
	aContext = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext)();
	    // when the audio element has been loaded, hook up the processing graph
    source = aContext.createMediaElementSource(audioPlayer); 
 }


function initVideoPlayer(){
    videoPlayer = document.getElementById('videoID');
	videoPlayer.src= videoFile 
	videoPlayer.load();
    canvas = document.getElementById('canvasID');
    context = canvas.getContext('2d');
    back = document.createElement('canvas');
    backcontext = back.getContext('2d');
	mouseX=281;
	mouseY=147;
	context.clearRect(0, 0, canvas.width, canvas.height);

	context.font = "12px Arial";
	context.fillText("Canvas f�r die Videoausgabe !!!!!",10,50);
}		

// ---------------------------Controls------------------------------
function toggleplay(iPlayerFlag) {
	if (intervalId==0) {
    mainPlayer();  
	logClear();
	document.getElementById("playVideoAudio").style.backgroundColor = button_on;
    } else {
	stopAudioVideo();
	clearInterval(intervalId);
	intervalId=0;
	document.getElementById("playVideoAudio").style.backgroundColor = button_normal;
	}
}

function startAudio() {
   // jsNode.connect(aContext.destination);
}

function stopAudioVideo() {
	if (audioPlayer.played) audioPlayer.pause();	
	if (videoPlayer.played)	videoPlayer.pause();	
	if (AVMODE =="a") jsNode.disconnect(0);
}



function doStop(iPlayerFlag) {
	if (videoPlayer.played)
	{		videoPlayer.pause();
	}
	stopAudioVideo();
	intervalId=0;
	clearInterval(intervalId);

}
function drawLog() {

drawLogLine();

}

function drawLogLine() {
 logClear();
 for(var n = 0; n <LogArray.length ; n+=1)
 {
	iArray = eval (LogArray [n])
	if(iArray === undefined) {

	log(LogArray [n]+":      " );       log( "undefined" );   
	} else {
		    if (iArray.length<=ch) firstLineImage=iArray.length
			if (iArray.length<=64) firstLineImage=iArray.length
			else                  firstLineImage = (iArray.length / ch); 
			
			log(LogArray [n]+":      " );        for(var i = 0; i <firstLineImage ; i+=1) logEvent(runde(iArray[i],rundeLog)); 
			if (LogArray [n] =="ErrorLog" || LogArray [n] =="ErrorLogP" ) {
				 log("Error - SAD: "+ SAD + ", MSE: "+ MSE + ", PSNR: "+ PSNR); 
				}
		
	}
 }
 			if (KompressionLog[0] > "0" ) {
				 logVideoCompression(KompressionLog); 
				}
 			if (KompressionLogP[0] > "0" ) {
				 logAudioCompression(KompressionLogP); 
				}
}

function log(text){
		    preLog = document.getElementById('preLog');
			preLog.textContent += ('\n' + text);
}

function logEvent(text){
		    preLog = document.getElementById('preLog');
			preLog.textContent += ( text +', ');

}
function logClear(){
		    preLog = document.getElementById('preLog');
			if (preLog) preLog.textContent = ('Logging of: \n');
			else alert("no logging output field");
}
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
}

function runde(x, n) {
  if (n < 0 || n > 14) return false;
  var e = Math.pow(10, n);
  var k = (Math.round(x * e) / e).toString();
  if (n == 0 ) return k;
  if (k.indexOf('.') == -1) k += '.';
  k += e.toString().substring(1);
  return k.substring(0, k.indexOf('.') + n+1);
}

function getMousePos(ic_img, event) { 
  var rect = ic_img.getBoundingClientRect();
  mouseY= Math.round(event.clientY - rect.top);
  mouseX= Math.round(event.clientX - rect.left); 
  mouseY = mouseY - (display_fac/2);   // Position um S_Block mitte verschieben
  mouseX = mouseX - (display_fac/2) ;
	//  alert("x:" + mouseX + " y:" + mouseY);
}

