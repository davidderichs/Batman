/**
 * Created by Jürgen Lohr on 1.9.2016.
 */
			//	---------------------------------------------------------------- Interaction Control---------------------------------------------------------------
	
function mainPlayer(){
	    var iProzess = document.getElementById('selProcess').value;
	        switch(iProzess){ 
        case "u0.1": 
			setMainVideoPlayer(300,150,processingVideoGenArea); // Default
			setImputFields("visible","visible","Bridness(0-255): ","150", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
            break; 
        case "u0.2": 
			setMainVideoPlayer(display_fac,display_fac,processingVideoChannel); // Default
			setImputFields("visible","visible","R/G/B(r,g,b):","r", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(videoPlayer, videoFile, picFile);
            break; 
		case "u1.1": 
			setMainVideoPlayer(720,404,processingVideoGenColourArea);  // Lösung 1.1
			setImputFields("visible","visible","R (0-255): ","235", "visible","visible","G: ","235", "visible","visible","B: ","235");
            break; 
        case "u1.2": 
            setMainVideoPlayer(display_fac,display_fac,processingVideoGray); // Lösung 1.1
			setImputFields("hidden","hidden","Quant-Faktor: ","8", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(videoPlayer, videoFile, picFile);
            break; 
		case "u1.10": 
			setMainVideoPlayer(display_fac,display_fac,processingVideoPerceptionTransparency); 
			setImputFields("visible","visible","Transparency(0-255): ","50", "hidden","hidden","Video1-On/Off(0,1): ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(videoPlayer, videoFile, picFile1);
            break        
		case "u1.11": 
			setMainVideoPlayer(display_fac,display_fac,processingVideoPerceptionTime);  
			setImputFields("visible","visible","Time(ms: 0.0 - 1000.0): ","1000", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(videoPlayer, videoFile, picFile1);
            break 
		case "u2.1": 
			setMainVideoPlayer(720,404,processingVideoGenCosinus);     // Lösung 2.1
			setImputFields("visible","visible","Hz: ","1", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
            break; 
        case "u2.2": 
			setMainVideoPlayer(display_fac,display_fac,processingVideoBridnessContrast);     //lösung  2.1
			setImputFields("visible","visible","Contrast (dB): ","-6", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(videoPlayer, videoFile, picFile);
            break; 
	    case "u2.3": 
			setMainVideoPlayer(display_fac,display_fac,processingVideoChromaKeying); //lösung  2.1		
			setImputFields("visible","visible","R: ","50", "visible","visible","G: ","75", "visible","visible","B: ","150");
			loadPlayer(videoPlayer, videoFile, picFile1);
            break;
	    case "u2.4": 
			setMainVideoPlayer(display_fac,display_fac,processingVideoTP10);  //lösung  2.2
			setImputFields("hidden","hidden","Hz: ","64", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(videoPlayer, videoFile, picFile);
            break;
	    case "u2.4a": 
			setMainVideoPlayer(display_fac,display_fac,processingVideoTP10_cos64);  //lösung  2.2
			setImputFields("visible","visible","Hz: ","64", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
            break;
		case "u2.5": 
			setMainVideoPlayer(display_fac,display_fac,processingVideoHP10);  //lösung  2.2			setImputFields("hidden","hidden","Hz: ","1", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			setImputFields("hidden","hidden","Hz: ","1", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(videoPlayer, videoFile, picFile);
            break;
		case "u2.5a": 
			setMainVideoPlayer(display_fac,display_fac,processingVideoHP10visuell);  
			setImputFields("hidden","hidden","Hz: ","1", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(videoPlayer, videoFile, picFile);
            break;
		case "u2.5b": 
			setMainVideoPlayer(display_fac,display_fac,processingVideoHP10_cos64); 
			setImputFields("visible","visible","Hz: ","64", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
            break;
	    case "u2.6": 
			setMainVideoPlayer(display_fac,display_fac,processingVideoTP20); 
			setImputFields("hidden","hidden","Hz: ","1", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(videoPlayer, videoFile, picFile);
            break;
		case "u2.7": 
			setMainVideoPlayer(display_fac,display_fac,processingVideoHP20);  
			setImputFields("hidden","hidden","Hz: ","1", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(videoPlayer, videoFile, picFile);
            break        
		case "u2.8": 
			setMainVideoPlayer(display_fac,display_fac,processingVideoSoebel);  
			setImputFields("hidden","hidden","Hz: ","1", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(videoPlayer, videoFile, picFile);
            break  
		case "u3.1": 
			setMainVideoPlayer(8,1,processingVideoGenKompDelta); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,..512. , off: 5555): ","1", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			break  			
		case "u3.2": 
			setMainVideoPlayer(display_fac,display_fac,processingVideoKompDelta); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,..512. , off: 5555): ","8", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(videoPlayer, videoFile, picFile);
            break  	
		case "u3.3": 
			setMainVideoPlayer(8,1,processingVideoGenKompSubband); //lösung  3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1,2,4,8,16,..255. , off: 5555): ","1", "visible","visible","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
            break  	
		case "u3.4": 
			setMainVideoPlayer(display_fac,display_fac,processingVideoKompSubband); //lösung  3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1,2,4,8,16,..255. , off: 5555): ","16", "visible","visible","HP-Quant-Faktor: ","256", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(videoPlayer, videoFile, picFile);
            break  		
		case "u3.5": 
			setMainVideoPlayer(4,4,processingVideoGenKompFFTOneHz); setInitFFT(4);//lösung  3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1 bis  - 24 Bit - 88888888:off): ","1", "visible","visible","HP-Quant-Faktor: ","1", "visible","visible","Grenzfreq.(Hz): ","1");
			break  	
		case "u3.6": 
			setMainVideoPlayer(4,4,processingVideoGenKompFFTpic); setInitFFT(4);//lösung  zusatz ?3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1 bis  - 24 Bit - 88888888:off): ","1024", "visible","visible","HP-Quant-Faktor: ","16777216", "visible","visible","Grenzfreq.(Hz): ","1");
			loadPlayer(videoPlayer, videoFile, picFile);
            break  	
		case "u3.7": 
			setMainVideoPlayer(display_fac,display_fac,processingVideoKompFFT); setInitFFT(display_fac);//lösung  3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1 bis  - 24 Bit - 88888888:off): ","1024", "visible","visible","HP-Quant-Faktor: ","16777216", "visible","visible","Grenzfreq.(Hz): ","20");
			loadPlayer(videoPlayer, videoFile, picFile);
            break  	
		case "u4.1": 
			setMainVideoPlayer(display_fac,display_fac,processingVideo41); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,..512. , off: 5555): ","2", "visible","visible","Gain Sumant: ","100", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(videoPlayer, videoFile, picFile);
			break  			
		case "u4.2": 
			setMainVideoPlayer(display_fac,display_fac,processingVideo42); //lösung  3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1,2,4,8,16,..255. , off: 5555): ","2", "visible","visible","HP-Quant-Faktor: ","1", "visible","visible","Gain Sumant: ","100");
			loadPlayer(videoPlayer, videoFile, picFile);
            break  
		case "u4.3": 
			setMainVideoPlayer(display_fac,display_fac,processingVideo43); setInitFFT(display_fac);//lösung  3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1 bis  - 24 Bit - 88888888:off): ","4", "visible","visible","HP-Quant-Faktor: ","1", "visible","visible","Grenzfreq.(Hz): ","20");
			setImputFields4("visible","visible","Amplitude(0 bis  - 200): ","10");
			loadPlayer(videoPlayer, videoFile, picFile);	
            break  
		case "u4.4": 
			setMainVideoPlayer(display_fac,display_fac,processingVideo44); //lösung  3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1,2,4,8,16,..255. , off: 5555): ","3", "visible","visible","MP1 + Mp2-Quant-Faktor: ","2","visible","visible","HP-Quant-Faktor: ","1");
			setImputFields4("visible","visible","Gain Sumant: ","100");
			loadPlayer(videoPlayer, videoFile, picFile);
            break  		
		case "u4.5": 
			setMainVideoPlayer(display_fac,display_fac,processingVideo45); //lösung  3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1,2,4,8,16,..255. , off: 5555): ","3", "visible","visible","MP1 + Mp2-Quant-Faktor: ","2","visible","visible","HP-Quant-Faktor: ","1");
			setImputFields4("visible","visible","Gain Sumant: ","100");
			loadPlayer(videoPlayer, videoFile, picFile);
			break  	
		case "u4.6": 
			setMainVideoPlayer(display_fac,display_fac,processingVideo46); //lösung  3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1,2,4,8,16,..255. , off: 5555): ","3", "visible","visible","MP1 + Mp2-Quant-Faktor: ","2","visible","visible","HP-Quant-Faktor: ","1");
			setImputFields4("visible","visible","Gain Sumant: ","100");
			loadPlayer(videoPlayer, videoFile, picFile);
            break  	
		case "u4.7": 
			setMainVideoPlayer(display_fac,display_fac,processingVideo47); //lösung  3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1,2,4,8,16,..255. , off: 5555): ","3", "visible","visible","MP1 + Mp2-Quant-Faktor: ","2","visible","visible","HP-Quant-Faktor: ","1");
			setImputFields4("visible","visible","Gain Sumant: ","100");
			loadPlayer(videoPlayer, videoFile, picFile);
            break 
		case "u4.8": 
			setMainVideoPlayer(display_fac,display_fac,processingVideo48); //lösung  3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1,2,4,8,16,..255. , off: 5555): ","3", "visible","visible","MP1 + Mp2-Quant-Faktor: ","2","visible","visible","HP-Quant-Faktor: ","1");
			setImputFields4("visible","visible","Gain Sumant: ","100");
			loadPlayer(videoPlayer, videoFile, picFile);
            break 
		case "u4.9": 
			setMainVideoPlayer(display_fac,display_fac,processingVideo49); //lösung  3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1,2,4,8,16,..255. , off: 5555): ","3", "visible","visible","MP1 + Mp2-Quant-Faktor: ","2","visible","visible","HP-Quant-Faktor: ","1");
			setImputFields4("visible","visible","Gain Sumant: ","100");
			loadPlayer(videoPlayer, videoFile, picFile);
            break 
		case "u4.10": 
			setMainVideoPlayer(display_fac,display_fac,processingVideo410); //lösung  3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1,2,4,8,16,..255. , off: 5555): ","3", "visible","visible","MP1 + Mp2-Quant-Faktor: ","2","visible","visible","HP-Quant-Faktor: ","1");
			setImputFields4("visible","visible","Gain Sumant: ","100");
			loadPlayer(videoPlayer, videoFile, picFile);
            break 
		case "u4.11": 
			setMainVideoPlayer(display_fac,display_fac,processingVideo411); //lösung  3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1,2,4,8,16,..255. , off: 5555): ","3", "visible","visible","MP1 + Mp2-Quant-Faktor: ","2","visible","visible","HP-Quant-Faktor: ","1");
			setImputFields4("visible","visible","Gain Sumant: ","100");
			loadPlayer(videoPlayer, videoFile, picFile);
            break 
		case "u4.12": 
			setMainVideoPlayer(display_fac,display_fac,processingVideo412); //lösung  3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1,2,4,8,16,..255. , off: 5555): ","3", "visible","visible","MP1 + Mp2-Quant-Faktor: ","2","visible","visible","HP-Quant-Faktor: ","1");
			setImputFields4("visible","visible","Gain Sumant: ","100");
			loadPlayer(videoPlayer, videoFile, picFile);
            break 
		case "u4.13": 
			setMainVideoPlayer(display_fac,display_fac,processingVideo413); //lösung  3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1,2,4,8,16,..255. , off: 5555): ","3", "visible","visible","MP1 + Mp2-Quant-Faktor: ","2","visible","visible","HP-Quant-Faktor: ","1");
			setImputFields4("visible","visible","Gain Sumant: ","100");
			loadPlayer(videoPlayer, videoFile, picFile);
            break 
		case "u4.14": 
			setMainVideoPlayer(display_fac,display_fac,processingVideo414); //lösung  3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1,2,4,8,16,..255. , off: 5555): ","3", "visible","visible","MP1 + Mp2-Quant-Faktor: ","2","visible","visible","HP-Quant-Faktor: ","1");
			setImputFields4("visible","visible","Gain Sumant: ","100");
			loadPlayer(videoPlayer, videoFile, picFile);
            break 
		case "u10.1": 
			setImputFields("visible","visible","Type(1-1000): ","2", "hidden","hidden","???: ","1", "hidden","hidden","?????: ","1");
			setMainAudioPlayer("Gen",1,1024,processingAudioGenNoise); // Default
            break 
		case "u10.2": 
			setImputFields("visible","visible","L/R(l,r): ","l", "hidden","hidden","???: ","1", "hidden","hidden","?????: ","1");
			setMainAudioPlayer("Aud",1,1024,processingAudioChannel); //Default
			loadPlayer(audioPlayer, audioFile, picFile);
            break 
		case "u11.1": 
			setImputFields("visible","visible","Frequency(0-20000): ","1000", "hidden","hidden","???: ","1", "hidden","hidden","?????: ","1");
			setMainAudioPlayer("Gen",1,sampleRate,processingAudioGenSinus); //lösung  Audio 1.1 
            break 
		case "u11.2": 
			setImputFields("hidden","hidden","???: ","1", "hidden","hidden","???: ","1", "hidden","hidden","?????: ","1");
			setMainAudioPlayer("Aud",1,1024,processingAudioMono); //lösung  Audio 1.1 
			loadPlayer(audioPlayer, audioFile, picFile);
            break 	
		case "u11.10": 
			setImputFields("visible","visible","Mixing Level(0-100): ","50", "hidden","hidden","???: ","1", "hidden","hidden","?????: ","1");
			setMainAudioPlayer("Aud",1,1024*16,processingAudioPerceptionMixingLevel); 
			loadPlayer(audioPlayer, audioFile, picFile);
            break 
		case "u11.11": 
			setImputFields("visible","visible","Time(ms: 0.0 - 1000.0): ","200", "hidden","hidden","???: ","1", "hidden","hidden","?????: ","1");
			setMainAudioPlayer("Aud",1,1024/2,processingAudioPerceptionTime); 
			loadPlayer(audioPlayer, audioFile, picFile);
            break
		case "u12.1": 
			setImputFields("visible","visible","Frequency(0-20000): ","400", "hidden","hidden","???: ","1", "hidden","hidden","?????: ","1");
			setMainAudioPlayer("Gen",1,sampleRate,processingAudioKlang); 
            break 
		case "u12.2": 
			setImputFields("visible","visible","dB(-96 bis +12): ","-6", "hidden","hidden","???: ","1", "hidden","hidden","?????: ","1");
			setMainAudioPlayer("Aud",1,1024,processingAudioVolumen); 
			loadPlayer(audioPlayer, audioFile, picFile);
            break 
		case "u12.3": 
			setImputFields("visible","visible","Direct dB(-96 bis +12): ","0", "visible","visible","Delay dB(-96 bis +12): ","0", "visible","visible","DealyTime ms(0 bis 332): ","200");
			setMainAudioPlayer("Aud",1,1024*16,processingAudioDelay);  //lösung 2
			loadPlayer(audioPlayer, audioFile, picFile);
            break 
		case "u12.3a": 
			setImputFields("visible","visible","Delay dB(-96 bis +12): ","-2", "hidden","hidden","DealyTime(-16k bis 16k): ","16000", "hidden","hidden","?????: ","1");
			setMainAudioPlayer("Aud",1,1024*16,processingAudioDelay16K);  //lösung 2
			loadPlayer(audioPlayer, audioFile, picFile);
            break 
		case "u12.3b": 
			setImputFields("visible","visible","Direct dB(-96 bis +12): ","0", "visible","visible","Delay dB(-96 bis +12): ","0", "visible","visible","DealyTime ms(0 bis 0.17): ","0.025");
			setMainAudioPlayer("Gen",1,8,processingAudioGenDelay);  //lösung 2
            break 			
		case "u12.4": 
			setImputFields("visible","visible","Type(1-1000): ","2", "hidden","hidden","???: ","1", "hidden","hidden","?????: ","1");
			setMainAudioPlayer("Gen",1,1024*16,processingAudioTP1O); 
            break 
		case "u12.5": 
			setImputFields("visible","visible","Type(1-1000): ","2", "hidden","hidden","???: ","1", "hidden","hidden","?????: ","1");
			setMainAudioPlayer("Gen",1,1024*16,processingAudioHP1O); 
            break 	
		case "u12.6": 
			setImputFields("visible","visible","Type(1-1000): ","2", "hidden","hidden","???: ","1", "hidden","hidden","?????: ","1");
			setMainAudioPlayer("Gen",1,1024*16,processingAudioTP2O1D); 
            break 
		case "u12.7": 
			setImputFields("visible","visible","Type(1-1000): ","2", "hidden","hidden","???: ","1", "hidden","hidden","?????: ","1");
			setMainAudioPlayer("Gen",1,1024*16,processingAudioHP2O1D); 
            break 			
		case "u12.8": 
			setImputFields("visible","visible","Type(1-1000): ","2", "hidden","hidden","???: ","1", "hidden","hidden","?????: ","1");
			setMainAudioPlayer("Gen",1,1024*16,processingAudioBP2O1D); 
            break 
		case "u12.9": 
			setImputFields("visible","visible","Type(1-1000): ","2", "hidden","hidden","???: ","1", "hidden","hidden","?????: ","1");
			setMainAudioPlayer("Gen",1,1024*16,processingAudioBS2O1D); 
            break 
		case "u13.1": 
			setMainAudioPlayer("Gen",1,8,processingAudioGenKompDelta); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,..4096. , off: 66000): ","1", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			break  			
		case "u13.2": 
			setMainAudioPlayer("Aud",1,1024*16,processingAudioKompDelta); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,..4096. , off: 66000): ","64", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(audioPlayer, audioFile, picFile);
            break 
		case "u13.3": 
			setMainAudioPlayer("Gen",1,8,processingAudioGenKompSubband); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,..4096. , off: 66000): ","1", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			break  			
		case "u13.4": 
			setMainAudioPlayer("Aud",1,1024*16,processingAudioKompSubband); //lösung  3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1,2,4,8,16,..4096. , off: 66000): ","512", "visible","visible","HP-Quant-Faktor: ","66000", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(audioPlayer, audioFile, picFile);
            break 
		case "u13.5": 
			setMainAudioPlayer("Gen",1,8,processingAudioGenKompFFT); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,.. 24 Bit. , off: 88888888): ","1", "visible","visible","HP-Quant-Faktor: ","1", "visible","visible","Grenzfreq.(1-2 Hz): ","2");
			break  			
		case "u13.6": 
			setMainAudioPlayer("Aud",1,1024*16,processingAudioKompFFT); //lösung  3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1,2,4,8,16,.. 24 Bit. , off: 88888888): ","66000", "visible","visible","HP-Quant-Faktor: ","18888888", "visible","visible","Grenzfreq.(1-16000/2 Hz): ","1000");
			loadPlayer(audioPlayer, audioFile, picFile);
            break			
		case "u13.5a": 
			setMainAudioPlayer("Gen",1,1024*8,processingAudioGenWhiteNoiseKompFFT); //lösung  3.1 
			setImputFields("visible","visible","TP-Quant-Faktor(1,2,4,8,16,.. 24 Bit. , off: 88888888): ","66000", "visible","visible","HP-Quant-Faktor: ","18888888", "visible","visible","Grenzfreq.(1-16000/2 Hz): ","1000");
			break  			
		case "u14.1": 
			setMainAudioPlayer("Aud",1,1024*16,processingAudio41); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,..4096. , off: 66000): ","64", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(audioPlayer, audioFile, picFile);		
			break  
		case "u14.2": 
			setMainAudioPlayer("Aud",1,1024*16,processingAudio42); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,..4096. , off: 66000): ","64", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(audioPlayer, audioFile, picFile);	
			break  
		case "u14.3": 
			setMainAudioPlayer("Aud",1,1024*16,processingAudio43); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,..4096. , off: 66000): ","64", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(audioPlayer, audioFile, picFile);		
			break  
		case "u14.4": 
			setMainAudioPlayer("Aud",1,1024*16,processingAudio44); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,..4096. , off: 66000): ","64", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(audioPlayer, audioFile, picFile);		
			break  
		case "u14.5": 
			setMainAudioPlayer("Aud",1,1024*16,processingAudio45); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,..4096. , off: 66000): ","64", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(audioPlayer, audioFile, picFile);		
			break  
		case "u14.6": 
			setMainAudioPlayer("Aud",1,1024*16,processingAudio46); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,..4096. , off: 66000): ","64", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(audioPlayer, audioFile, picFile);		
			break  
		case "u14.7": 
			setMainAudioPlayer("Aud",1,1024*16,processingAudio47); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,..4096. , off: 66000): ","64", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(audioPlayer, audioFile, picFile);		
			break  
		case "u14.8": 
			setMainAudioPlayer("Aud",1,1024*16,processingAudio48); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,..4096. , off: 66000): ","64", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(audioPlayer, audioFile, picFile);		
			break  
		case "u14.9": 
			setMainAudioPlayer("Aud",1,1024*16,processingAudio49); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,..4096. , off: 66000): ","64", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(audioPlayer, audioFile, picFile);		
			break  
		case "u14.10": 
			setMainAudioPlayer("Aud",1,1024*16,processingAudio410); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,..4096. , off: 66000): ","64", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(audioPlayer, audioFile, picFile);		
			break  
		case "u14.11": 
			setMainAudioPlayer("Aud",1,1024*16,processingAudio410); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,..4096. , off: 66000): ","64", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(audioPlayer, audioFile, picFile);		
			break  
		case "u14.12": 
			setMainAudioPlayer("Aud",1,1024*16,processingAudio412); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,..4096. , off: 66000): ","64", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(audioPlayer, audioFile, picFile);		
			break  
		case "u14.13": 
			setMainAudioPlayer("Aud",1,1024*16,processingAudio413); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,..4096. , off: 66000): ","64", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(audioPlayer, audioFile, picFile);		
			break  
		case "u14.14": 
			setMainAudioPlayer("Aud",1,1024*16,processingAudio414); //lösung  3.1 
			setImputFields("visible","visible","Quant-Faktor(1,2,4,8,16,..4096. , off: 66000): ","64", "hidden","hidden","HP-Quant-Faktor: ","1", "hidden","hidden","Grenzfreq.(Hz): ","1");
			loadPlayer(audioPlayer, audioFile, picFile);		
			break  
		default: 
            log("keinen Prozess definiert"); 
        } 
}

	
function setMainVideoPlayer(iCW, iCH,iProcessingFunction){  // Canvas width, canvas hight, function processing
	AVMODE ="v";
	initVideoPlayer ();
	cw =  iCW 
	ch =  iCH;
	length= iCW*iCH*1; 
	canvas.width = iCW;
	canvas.height = iCH;
	back.width = iCW;
	back.height = iCH;
	imgW = iCW, imgH = iCH;  //Processing Array W and H
	iImageOut = context.createImageData(imgW, imgH);  //Processing Array W and H
	imgArrayOut = iImageOut.data;
	iImageIn2 = context.createImageData(imgW, imgH);  //Processing Array W and H
	imgArrayIn2 = iImageIn2.data;
	secondLineIImageOut = context.createImageData(imgW, imgH);  //Processing Array W and H
	secondLineImgArrayOut = secondLineIImageOut.data;
	
	 BridnessSamples  = new Array(length * 1); //Uint8Array
	 ContrastSamples  = new Array(length * 1); 

	 TPsamples    = new Array(length * 1);
	 HPsamples    = new Array(length * 1);
	 SoebelSamples    = new Array(length * 1);
	 secondLineBridnessSamples    = new Array(length * 1);
	 secondLineTPsamples    = new Array(length * 1);
	 secondLineHPsamples    = new Array(length * 1);
	 secondLineSoebelSamples    = new Array(length * 1);	 
	 
	 DeltaSamples    = new Array(length * 1); //Int16Array
	 IDeltaSamples    = new Array(length * 1);
	 QuantSamples    = new Array(length * 1);
	 iQuantSamples    = new Array(length * 1);

	 ALengthSamples    = new Array(length * 1+1);
     TPdownsamples  = new Array((length/2 * 1+1));
     HPdownsamples  = new Array((length/2 * 1+1));

     HPquantsamples = new Array((length/2 * 1+1));
     TPquantsamples = new Array((length/2 * 1+1));
     HPIquantsamples = new Array((length/2 * 1+1));
     TPIquantsamples = new Array((length/2 * 1+1));
     TPupsamples  = new Array(length * 1+1);
     HPupsamples  = new Array(length * 1+1);
     ATPOutsamples = new Array(length * 1+1);
     AHPOutsamples = new Array(length * 1+1);
	 MixOutSamples  = new Array(length * 1+1);
     ScaleSamples = new Array(length * 1);
	 DelaySamples = new Array(length * 1); 
		 	 
	 QuantMatrix = new Array(length * 1);
	 iFFTspec = new Array(length * 1);

	 T1samples = new Array(length * 1); 
	 T2samples = new Array(length * 1); 
	 T3samples = new Array(length * 1); 
	 Tsamples = new Array(length * 1);  
	 
	 ErrorLog  = new Array(length * 1);
	 KompressionLog = new Array(length * 1); 	
	 KompressionLogP = new Array(length * 1); 	 
	videoPlayer.addEventListener('click', function(evt) {getMousePos(videoPlayer, evt);}, false);
	intervalId = setInterval(iProcessingFunction, 1000/frameRate);
	rundeLog=0;
	}
	

function setMainAudioPlayer(mode, channelOut, samplebufferLenght,iProcessingFunction){  // channel out , samplebuffer lenght , function processing 
    initVideoPlayer();
	bufferSize=samplebufferLenght;
	AVMODE ="a";
	monoSamples   = aContext.createBuffer(channelOut, samplebufferLenght, sampleRate);// create an audio node with 2 input and 1 output channels, and 1024 byte buffer size per audio frame	
	OutputSamples = aContext.createBuffer(channelOut, samplebufferLenght, sampleRate);// create an audio node with 2 input and 1 output channels, and 1024 byte buffer size per audio frame
	
	if (mode=="Gen") {
	jsNode = aContext.createBufferSource();
	jsNode.buffer = monoSamples;
	jsNode.loop = true ; 
 	jsNode.start(0);
	intervalId = setInterval(iProcessingFunction, parseInt(monoSamples.length*1000/sampleRate/100), monoSamples);
	}  else {
    jsNode = aContext.createScriptProcessor(samplebufferLenght, channelIn, channelOut);
    source.connect(jsNode);

    jsNode.onaudioprocess = iProcessingFunction;
	intervalId=1;
	}
	jsNode.connect(aContext.destination);
	ch =  sampleRate/100;
	rundeLog=4;

	VolumenSamples = new Float32Array(sampleRate);
	DelaySamples = new Float32Array(samplebufferLenght);	
	DelaySamples2 = new Float32Array(samplebufferLenght*2);	
	
	TPsamples    = new Float32Array(samplebufferLenght + 1);
	HPsamples    = new Float32Array(samplebufferLenght + 1);
	 
	DeltaSamples    = new Float32Array(samplebufferLenght); //Int16Array
	iDeltaSamples    = new Float32Array(samplebufferLenght);
	QuantSamples    = new Float32Array(samplebufferLenght);
	iQuantSamples    = new Float32Array(samplebufferLenght);
	DeltaSamplesP    = new Float32Array(sampleRate); //Int16Array
	iDeltaSamplesP    = new Float32Array(sampleRate);
	QuantSamplesP    = new Float32Array(sampleRate);
	iQuantSamplesP    = new Float32Array(sampleRate);	
	ErrorLog  = new Array(samplebufferLenght);
	ErrorLogP  = new Array(sampleRate);
	KompressionLog = new Array(samplebufferLenght); 
	KompressionLogP = new Array(sampleRate); 
	
	ALengthSamples    = new Float32Array(samplebufferLenght * 1+1);
     TPdownsamples  = new Float32Array((samplebufferLenght/2 * 1+1));
     HPdownsamples  = new Float32Array((samplebufferLenght/2 * 1+1));
     HPquantsamples = new Float32Array((samplebufferLenght/2 * 1+1));
     TPquantsamples = new Float32Array((samplebufferLenght/2 * 1+1));
     HPIquantsamples = new Float32Array((samplebufferLenght/2 * 1+1));
     TPIquantsamples = new Float32Array((samplebufferLenght/2 * 1+1));
     TPupsamples  = new Float32Array(samplebufferLenght * 1+1);
     HPupsamples  = new Float32Array(samplebufferLenght * 1+1);
     ATPOutsamples = new Float32Array(samplebufferLenght * 1+1);
     AHPOutsamples = new Float32Array(samplebufferLenght * 1+1);
	 MixOutSamples  = new Float32Array(samplebufferLenght * 1+1);
     ScaleSamples = new Float32Array(samplebufferLenght * 1);
     OutSamples = new Float32Array(samplebufferLenght * 1);
	 
	TPsamplesP    = new Float32Array(sampleRate + 1);
	HPsamplesP    = new Float32Array(sampleRate + 1);
	
	ALengthSamplesP    = new Float32Array(sampleRate * 1+1);
     TPdownsamplesP  = new Float32Array((sampleRate/2 * 1+1));
     HPdownsamplesP  = new Float32Array((sampleRate/2 * 1+1));
     HPquantsamplesP = new Float32Array((sampleRate/2 * 1+1));
     TPquantsamplesP = new Float32Array((sampleRate/2 * 1+1));
     HPIquantsamplesP = new Float32Array((sampleRate/2 * 1+1));
     TPIquantsamplesP = new Float32Array((sampleRate/2 * 1+1));
     TPupsamplesP  = new Float32Array(sampleRate * 1+1);
     HPupsamplesP  = new Float32Array(sampleRate * 1+1);
     ATPOutsamplesP = new Float32Array(sampleRate * 1+1);
     AHPOutsamplesP = new Float32Array(sampleRate * 1+1);
	 MixOutSamplesP  = new Float32Array(sampleRate * 1+1);
     ScaleSamplesP = new Float32Array(sampleRate * 1); 
	 DelaySamplesP = new Float32Array(sampleRate * 1); 

	 
	FFTKoef = new FFT_1D(samplebufferLenght, samplebufferLenght); 
	QuantFFT = new FFT_1D(samplebufferLenght, samplebufferLenght); 
	iQuantFFT = new FFT_1D(samplebufferLenght, samplebufferLenght); 
	iInverseFFT = new FFT_1D(samplebufferLenght, samplebufferLenght); 
	QuantMatrix = new Array(samplebufferLenght); 
	FFTKoefP = new FFT_1D(samplebufferLenght, sampleRate); 
	QuantFFTP = new FFT_1D(samplebufferLenght, sampleRate); 
	iQuantFFTP = new FFT_1D(samplebufferLenght, sampleRate); 
	iInverseFFTP = new FFT_1D(samplebufferLenght, sampleRate); 
	QuantMatrixP = new Array(sampleRate); 

}
function loadPlayer(iPlayer,iFile, iCanvasBackgroundPicture){ 
	canvas.style.background = "url("+ iCanvasBackgroundPicture +")"; // load Background Picture 
	iPlayer.src = iFile;  
	iPlayer.load();
	iPlayer.play();
}
function setImputFields(iLabelIn1Styl,iIn1Styl,iLabelIn1 ,iIn1, iLabelIn2Styl,iIn2Styl, iLabelIn2,iIn2, iLabelIn3Styl,iIn3Styl, iLabelIn3,iIn3 ) {
    document.getElementById("labelIn1").style.visibility =  iLabelIn1Styl;  	//"visible";
    document.getElementById("In1").style.visibility = iIn1Styl;  				//"visible"; 
	document.getElementById("labelIn1").innerHTML= iLabelIn1;					//"TP-Quant-Faktor: ";
	document.getElementById("In1").value= iIn1;  								//"1";

    document.getElementById("labelIn2").style.visibility =  iLabelIn2Styl;  	// "visible"; 
    document.getElementById("In2").style.visibility = iIn2Styl; 				//"visible"; 
	document.getElementById("labelIn2").innerHTML= iLabelIn2;					//"HP-Quant-Faktor: ";
	document.getElementById("In2").value= iIn2;  								//"1";
	
    document.getElementById("labelIn3").style.visibility = iLabelIn3Styl;      //"hidden"; 
    document.getElementById("In3").style.visibility = iIn3Styl;                // "hidden"; 
	document.getElementById("labelIn3").innerHTML= iLabelIn3;				   //"Grenzfreq.(Hz): ";
	document.getElementById("In3").value = iIn3;                               //"2";

	setImputFields4("hidden","hidden","Amplitude(0 bis  - 200): ","10");
	
}

function setImputFields4(iLabelIn1Styl,iIn1Styl,iLabelIn1 ,iIn1) {
    document.getElementById("labelIn4").style.visibility =  iLabelIn1Styl;  	//"visible";
    document.getElementById("In4").style.visibility = iIn1Styl;  				//"visible"; 
	document.getElementById("labelIn4").innerHTML= iLabelIn1;					//"TP-Quant-Faktor: ";
	document.getElementById("In4").value= iIn1;  								//"1";

 
}

//	---------------------------------------------------------------- Video Processing  Default--------------------------------------------------------------
function processingVideoGenArea() {
	var brightness  = parseFloat(document.getElementById("In1").value);
	// Process chain begin ------------------------------------
	genBridness(BridnessSamples,brightness);        
	GRAYtoRGB_v0(imgArrayOut, BridnessSamples);  
	// Process chain end  ------------------------------------
	writeCanvas(iImageOut);
		
	LogArray = ["BridnessSamples", "imgArrayOut"];  // Define Logging name of array object.
}

function processingVideoChannel() {
	var selectedChannelRGB = (document.getElementById("In1").value);
	
	imgArrayIn = readCanvas(videoPlayer,0); 
	// Process chain begin    
	RGBtoGRAY_v0(BridnessSamples, imgArrayIn, selectedChannelRGB );  
	GRAYtoRGB_v0(imgArrayOut, BridnessSamples);   
	// Process chain end
	writeCanvas(iImageOut);
	
	LogArray = ["imgArrayIn", "BridnessSamples",  "imgArrayOut"];
}

function writeCanvas(iInput) { 
	context.putImageData(iInput,0, 0); // Draw the ImageData object.
}

function readCanvas(iVideoPlayer, ih) {  // Player; n. Line to read
    if (iVideoPlayer.paused || iVideoPlayer.ended)        return false;
//    backcontext.drawImage(iVideoPlayer, 0, 0, cw, ch, 0, 0, cw, ch);    // First Video, draw it into the backing canvas
	backcontext.drawImage(iVideoPlayer,mouseX,mouseY,display_fac,display_fac, 0,0, display_fac,display_fac);
	iImageIn = backcontext.getImageData(0,ih,cw,ch);	// Grab the pixel data from the backing canvas
	imgArrayIn = iImageIn.data;
	return imgArrayIn;
}

function GRAYtoRGB_v0(iOutput, iInput) {  // Lösung 2.1a
	var r,g,b;
	for(var i = 0; i < iInput.length; i+=1) {
	    r = iInput[i];
	    g = iInput[i];
	    b = iInput[i];
		iOutput[i*4+0] = r;
		iOutput[i*4+1] = 0;
		iOutput[i*4+2] = 0;
		iOutput[i*4+3] = 255;
	}
}
function RGBtoGRAY_v0(iOutput, iInput, iSelectedChannelRGB) {  // Lösung 1.2
	var r,g,b,gray ;
	for(var i = 0; i < iOutput.length; i+=1) {
		r = iInput[i*4+0];
		g = iInput[i*4+1];
		b = iInput[i*4+2];
		switch(iSelectedChannelRGB){ 
			case "r": 		y = r;             break;	
			case "g": 		y = g;             break;	
			case "b": 		y = b;             break;	
			default: 		y = r;     
			}		
			iOutput[i]   = runde(y,0);
		}
}

function genBridness(iOutput, iBrightness) {
	for (var i = 0, n = iOutput.length; i < n; i += 1) {
		iOutput[i] = iBrightness ;     // the gray channel
	}
}
			//	---------------------------------------------------------------- Video -Lösung Ü1---------------------------------------------------------------
	

function processingVideoGenColourArea() {
	var R  = parseFloat(document.getElementById("In1").value);
	var G  = parseFloat(document.getElementById("In2").value);
	var B  = parseFloat(document.getElementById("In3").value);
	// Process chain begin ------------------------------------
	genColourArea(imgArrayOut,R,G,B);           
	// Process chain end  ------------------------------------
	writeCanvas(iImageOut);
		
	LogArray = ["imgArrayOut"];  // Define Logging name of array object.
}
function processingVideoGray() {
	imgArrayIn = readCanvas(videoPlayer,0);
	// Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out
	RGBtoGRAY(BridnessSamples, imgArrayIn);  
	GRAYtoRGB(imgArrayOut, BridnessSamples);   
	// Process chain end
	writeCanvas(iImageOut);
	
	LogArray = ["imgArrayIn", "BridnessSamples",  "imgArrayOut"];
}
function genColourArea(iOutput, iR,iG,iB) {
    for(i = 0; i < iOutput.length; i += 4){
        iOutput[i] = iR;
        iOutput[i+1] = iG;
        iOutput[i+2] = iB;
        iOutput[i+3] = 255;
    }
}
function GRAYtoRGB(iOutput, iInput) {  

}
function RGBtoGRAY(iOutput, iInput) { 

}
function processingVideoPerceptionTransparency() { 
	var	clip1StartTime  = 15000;
	var	clip1DurationTime  = 6000;
	var	clip1Transperency  =  parseFloat(document.getElementById("In1").value);
	
	imgArrayIn = readCanvas(videoPlayer,1);
	// Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out

	setClipTransperency12(videoPlayer, imgArrayOut,imgArrayIn, clip1Transperency,  clip1StartTime, clip1DurationTime) ;
	// Process chain end
	writeCanvas(iImageOut);
	
	LogArray = ["imgArrayIn",  "imgArrayOut"];
}

function processingVideoPerceptionTime() { 
	var	clip1StartTime  = 15000;
	var	clip1DurationTime  = 2000;
	var	clip2DurationTime  =  parseFloat(document.getElementById("In1").value);
	var	clip1DurationTime2  = 2000;
		
	imgArrayIn = readCanvas(videoPlayer,1);
	// Process chain begin    ---// Loop through the pixels, turning them in-RGB-Out

	setClipCut121(videoPlayer,imgArrayOut,imgArrayIn, clip1StartTime, clip1DurationTime,clip2DurationTime,clip1DurationTime2) ;
	// Process chain end
	writeCanvas(iImageOut);
	
	LogArray = ["imgArrayIn",  "imgArrayOut"];
}

function setClipTransperency12(iPlayer,iOutput,iInput, iClip1Transperency, iClip1StartTime, iInput1DurationTime1) { 
iCurrentTime=iPlayer.currentTime;
iInput1DurationTime1 +=iClip1StartTime;
iClip1StartTime /=1000;
iInput1DurationTime1 /=1000;

if ((iCurrentTime > iInput1DurationTime1) || (iCurrentTime < iClip1StartTime)) iPlayer.currentTime =iClip1StartTime;	
iCanvasBackgroundPicture = picFile;

		
}

function setClipCut121(iPlayer,iOutput, iInput, iClip1StartTime, iInput1DurationTime1,iInput2DurationTime1, iInput1DurationTime2) { 
iCurrentTime=iPlayer.currentTime;
iInput1DurationTime1 +=iClip1StartTime;
iInput2DurationTime1 +=iInput1DurationTime1 ;
iInput1DurationTime2 +=iInput2DurationTime1 ;
iClip1StartTime /=1000;
iInput1DurationTime1 /=1000;
iInput2DurationTime1 /=1000;
iInput1DurationTime2 /=1000;
if ((iCurrentTime > iInput1DurationTime2) || (iCurrentTime < iClip1StartTime)) iPlayer.currentTime =iClip1StartTime;	
 
if ((iCurrentTime < iInput1DurationTime1) || (iCurrentTime > iInput2DurationTime1)) iTransparenz = 255 ; 
else iTransparenz = 0 ;

		
}
//	--------------------------------------------------------------- Audio Processing  Default--------------------------------------------------------------

 
function processingAudioGenNoise(event) {  
	var value = parseFloat(document.getElementById("In1").value);
	// Process chain begin    
	genNoise(monoSamples, value) ;  	
	// Process chain end
    writeWebAudio(event,monoSamples);
	LogArray = ["monoSamples"];  // Define Logging name of array object.
}   
function processingAudioChannel(event) {  
	var value = (document.getElementById("In1").value);
    audArrayIn = readWebAudio(event);
	// Process chain begin    
	StereoSelectOneChannel(monoSamples, audArrayIn, value);
	// Process chain end
    writeWebAudio(event.outputBuffer,monoSamples);
	
	LogArray = ["monoSamples"];  
}

function readWebAudio(iInput) { 
	 audArrayIn.l  = iInput.inputBuffer.getChannelData(channelIn-2); // Stereo: 0 = left channel, 1 = right channel 
	 audArrayIn.r  = iInput.inputBuffer.getChannelData(channelIn-1);
	 return audArrayIn;
}
function writeWebAudio(iOutput,iInput) { 
      sampleOut = iOutput.getChannelData(0); 
	  for(i = 0; i < sampleOut.length; i++) {
        sampleOut[i] = iInput[i] 
      } 
}
function genNoise(iOutput, iValue) { 
 	for (i = 0; i < iOutput.length; ++i) {
		iOutput[i] = (Math.random() * iValue) -1;   
	}
}
function StereoSelectOneChannel(iOutput,iInput, iChannelLR) {
var iChannel	
	switch(iChannelLR){ 
		case "r": 		iChannel = iInput.r;           break;	
		case "l": 		iChannel = iInput.l;             break;	
		default: 		iChannel = iInput.l;    
	}
	for(i = 0; i < event.inputBuffer.length; i++) {
		iOutput[i] = iChannel[i]; 

	}	
}
	//	---------------------------------------------------------------- Audio -Lösung Ü1--------------------------------------------------------------

function processingAudioGenSinus(event) {  
	var freq = parseFloat(document.getElementById("In1").value);
	// Process chain begin    
	genSinus(monoSamples,freq,sampleRate,1) ;  	

	// Process chain end
    writeWebAudio(event,monoSamples);
	
	LogArray = ["monoSamples"];  
} 
function processingAudioMono(event) {  
    audArrayIn = readWebAudio(event);
	// Process chain begin    
	StereoToMono(monoSamples, audArrayIn);
	// Process chain end
    writeWebAudio(event.outputBuffer,monoSamples);
	
	LogArray = ["monoSamples"];  
}  
function StereoToMono(iOutput, iInput) { 
	
}

function genSinus(iOutput, iHorizontalFrequency, iSampleRate, iOffset) {

}
function processingAudioPerceptionMixingLevel(event) { 
 	var	clip1StartTime  = 15000;
	var	clip1DurationTime  = 6000;
	var clip1Mixing = parseFloat(document.getElementById("In1").value);
//	genNoise(VolumenSamples, 1) ;  
//	genSinus(VolumenSamples,1000,bufferSize,1) ; 
    audArrayIn = readWebAudio(event);
	// Process chain begin   
	StereoSelectOneChannel(monoSamples, audArrayIn, "l");
	StereoSelectOneChannel(VolumenSamples, audArrayIn, "r");
	setClipAudio12(audioPlayer,OutSamples,monoSamples, VolumenSamples, clip1Mixing, clip1StartTime, clip1DurationTime) ;
	// Process chain end
    writeWebAudio(event.outputBuffer,OutSamples);
	
	LogArray = ["VolumenSamples","audArrayIn","monoSamples","OutSamples"]; 
	
}
function processingAudioPerceptionTime(event) {  
	var	clip1StartTime  = 10000;
	var	clip1DurationTime  = 2000;
	var	clip2DurationTime  =  parseFloat(document.getElementById("In1").value);
	var	clip1DurationTime2  = 2000;
//	genNoise(VolumenSamples, 1) ;  
//	genSinus(VolumenSamples,1000,bufferSize,1) ; 
    audArrayIn = readWebAudio(event);
	// Process chain begin   
	StereoSelectOneChannel(monoSamples, audArrayIn, "l");
	StereoSelectOneChannel(VolumenSamples, audArrayIn, "r");
	setClipAudioCut121(audioPlayer,OutSamples,monoSamples, VolumenSamples, clip1StartTime, clip1DurationTime,clip2DurationTime,clip1DurationTime2) ;	// Process chain end

	// Process chain end
    writeWebAudio(event.outputBuffer,OutSamples);
	
	LogArray = ["VolumenSamples","audArrayIn","monoSamples","OutSamples"]; 	
}


function setClipAudio12(iPlayer,iOutput,iInput, iInput2, iClip1Mixing, iClip1StartTime, iInput1DurationTime1) { 
iCurrentTime=iPlayer.currentTime;
iInput1DurationTime1 +=iClip1StartTime;
iClip1StartTime /=1000;
iInput1DurationTime1 /=1000;

if ((iCurrentTime > iInput1DurationTime1) || (iCurrentTime < iClip1StartTime)) iPlayer.currentTime =iClip1StartTime;	

iClip1Mixing /=100;
}

function setClipAudioCut121(iPlayer,iOutput, iInput, iInput2, iClip1StartTime, iInput1DurationTime1,iInput2DurationTime1, iInput1DurationTime2) { 
iCurrentTime=iPlayer.currentTime;
iInput1DurationTime1 +=iClip1StartTime;
iInput2DurationTime1 +=iInput1DurationTime1 ;
iInput1DurationTime2 +=iInput2DurationTime1 ;
iClip1StartTime /=1000;
iInput1DurationTime1 /=1000;
iInput2DurationTime1 /=1000;
iInput1DurationTime2 /=1000;
if ((iCurrentTime > iInput1DurationTime2) || (iCurrentTime < iClip1StartTime)) iPlayer.currentTime =iClip1StartTime;	
 
if ((iCurrentTime < iInput1DurationTime1) || (iCurrentTime > iInput2DurationTime1)) {iInputN = iInput ;} 
else {iInputN = iInput2; }
}
