<!-- $size: A4 -portrait -->

<style>
  	p{
  		font-size: 12pt;
  	}
    div {
  	  position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      padding-top: 5%;
    }
    h1 {
      font-size: 18pt !important;
    }
</style>


<div>
  <h1>2.1 a) i. Formel zur Beschreibung des Cosinus</h1>
  <img src="./2-1/CosinusFunktion.JPG"> <br>
  <img src="./2-1/FrequenzGleichEinsDurchPeriodendauer.jpg">
  <p>t, Augenblicksamplitude</p>
  <p>f, Frequenz</p>
  <p>T, Periodendauer</p>
  <p>A* , Maximalwert der Amplitude</p>
  <p>φ , Phasenverschiebung</p>
</div>

---

<div>
  <h1>2.1 a) iii. Cosinus Filmgenerator 1Hz</h1>
  <img src="./2-1/CosinusFilmgeneratorScreenshotMain.JPG">
  <img src="./2-1/2-1-a-Bereich.JPG">  
    <h1>2.1 a) iii. Cosinus Filmgenerato 1Hz</h1>
  <img src="./2-1/2-1-a-YUV-Verlauf.JPG"> <img src="./2-1/2-1-a-Waveform.JPG">
  <p>Die Cosinus Schwingung ist im Y Verlauf gut zu erkennen</p>
  <p>Auch die Waveform zeigt den Farbverlauf sehr gut.</p>
</div>

---

<div>
  <h1>2.1 b) iii. Cosinus 0Hz</h1>
  <img src="./2-1/2-1-b-0Hz.JPG">
  <p>0 Hz werden nicht dargestellt.</p>
  <h1>2.1 b) iii. Cosinus 2Hz</h1>
  <img src="./2-1/2-1-b-2Hz.JPG">
  <p>Wie erwartet ist der Cosinus-Verlauf genau zwei Mal erkennbar bei einer Periodendauer von T=2, also einer Frequenz f=2Hz</p>
</div>

---

<div>
  <h1>2.1 b) iii. Cosinus 4Hz</h1>
  <img src="./2-1/2-1-b-4Hz.JPG">
  <p>Wie erwartet ist der Cosinus-Verlauf genau vier Mal erkennbar bei einer Periodendauer von T=4, also einer Frequenz f=4Hz</p>
  <h1>2.1 b 1. Zusatz Cosinus 400Hz</h1>
  <img src="./2-1/2-1-b-400Hz.JPG">
    <p>Wie erwartet ist der Cosinus-Verlauf bei einer Frequenz von f=400Hz durch Aliasing-Effekte nicht richtig darstellbar.
       Die Verwendete Sampling-Rate beträgt nur 360Hz und die darzustellende Frequenz liegt ca. 41 Hz über dem korrekt darstellbarem Frequenzbereich.
       Die 40 bzw. 41 Hz werden somit "gespiegelt" und entsprechen der dargestellten Frequenz von 320Hz, wie im nachfolgendem Beispiel zu sehen ist.</p>
</div>

---

<div>
  <h1>2.1 b 1. Zusatz Cosinus 320Hz</h1>
  <img src="./2-1/2-1-b-320Hz.JPG">
      <p>Die dargestellte Frequen von 320Hz entspricht dem vorangegangenenen Aliasing Beispiel von 400Hz, allerdings hier ohne eine "Spiegelung".</p>
  <h1>2.1 b 1. Zusatz Cosinus 360Hz</h1>
  <img src="./2-1/2-1-b-360Hz.JPG">
  <p>Die dargestellte Frequen von 360Hz entspricht genau der noch darstellbaren Samplingrate von 720/2</p>
</div>

---

<div>
  <h1>2.1 b 1. Zusatz Cosinus 720Hz</h1>
  <img src="./2-1/2-1-b-720Hz.JPG">
  <p>Die dargestellte Frequen von 720Hz entspricht genau der Samplingrate. Daudruch sind die Abtastwerte nicht darstellbar und es entsteht kein Bild bzw.       
     erkennbarer Frequenzgang.</p>
  <h1>2.1 b 1. Zusatz Cosinus 721Hz</h1>
  <img src="./2-1/2-1-b-721Hz.JPG">
    <p>Die dargestellte Frequen von 721Hz liegt genau 1Hz über der Samplingrate. Durch Aliasing-Effekte 
       entsteht ein Bild des Frequenzgangs von 1Hz.</p>
</div>

---

<div>
  <h1>2.1 b 1. Zusatz Cosinus 361Hz</h1>
  <img src="./2-1/2-1-b-361Hz.JPG">
  <h1>2.1 b 1. Zusatz Cosinus 359Hz</h1>
  <img src="./2-1/2-1-b-359Hz.JPG">
    <p>Der Frequenzgang von 359 Hz und 361Hz ist identisch, da die "zu hohe" Frequenz von 361 genau um 1Hz spiegelt und somit die Signatur von 359Hz abbildet.</p>
</div>

---

<div>
  <h1>2.1 b 2. Bandbegrenzung</h1>
  <p>Bei geeigneter Bandbegrenzung würden nur die gewünschten Frequenzen dargestellt werden. Aliasing wäre damit nicht mehr möglich. Bei einer Abtastrate von 720 Hz könnte beispielsweise eine maximale Frequenz von 359 Hz festgelegt werden.</p>

</div>

---

<div>
  <h1>2.2 Kontrast-Berechnung</h1>
    <img src="./2-2/Kontrast-Berechnung-NormaleHelligkeit.JPG">
  <p>2.2 a) d) Bei 0 DB wird der Kontrast bzw. die Helligkeit nicht verändert.</p>
  <img src="./2-2/Kontrast-Berechnung-HalbeHelligkeit.JPG">
  <p>2.2 b) d) Eine Halbierung der Helligkeit wird bei -6db erreicht.</p>

</div>

---

<div>
  <h1>2.3 Chroma-Keying</h1>
  <img src="./2-3/FarbwertBestimmt.JPG">
  <p>Der zu ersetzende Farbwert ist RGB(52, 82, 161)</p>
  <img src="./2-3/FarbwertErsetzt.JPG">
  <p>Durch Chroma-Keying wird der definierte Farbwert mit einer gewissen Toleranz durch Alpha=0 dargestellt (Transparenz). Der Hintergrund wird sichtbar.</p>
</div>

---

<div>
  <h1>2.4 Weichzeichner / Schärfung</h1>
  <p>2.4 i. Eigenes Asset - Feines Gitter:</p>
  <img src="./2-4/EigenesAssetFeinesGitter.JPG">
  <p>Die Werte-Abweichungen sind im ersten Beispiel sehr schlecht, wordurch z.B. ein Hochpass-Filter keine guten Ergebnisse erzielen kann. Wir haben uns dazu entschieden ein anderes eigenes Asset für die folgenden Analysen zu verwenden.</p>
  <img src="./2-4/EigenesAssetFeinesGitterBesser.JPG">
</div>

---

<div>
  <h1>2.4 Weichzeichner / Schärfung</h1>  
    <p>2.4 ii. Weichzeichner Tiefpass 1. Ordnung eindimensional</p>
  <img src="./2-4/TP10Weichzeichner.JPG">  
  <p>2.4 iii. Scharfzeichner - Hochpass 1. Ordnung eindimensional</p>
  <img src="./2-4/HP10Scharfzeichner.JPG">  
</div>

---

<div>
  <h1>2.4 Weichzeichner / Schärfung</h1>  
    <p>2.4 iv. Weichzeichner Gauß Tiefpass 2. Ordnung zweidimensional</p>
  <img src="./2-4/TP20Weichzeichner.JPG">  
  <p>2.4 v. Scharfzeichner Gauß - Hochpass 2. Ordnung zweidimensional</p>
  <img src="./2-4/HP20Scharfzeichner.JPG">  
</div>

---

<div>
  <h1>2.4 Weichzeichner / Schärfung</h1>  
  <p>2.4 vi. Auswertung / Messung - Original</p>
  <img style="display:inline-block; height: 200px; width: 200px" src="./2-4/Auswertung/OriginalTestbereich.JPG">
  <img style="display:inline-block; height: 200px; width: 200px" src="./2-4/Auswertung/OriginalRGBFrequenzgang.JPG">
  <img style="display:inline-block; height: 200px; width: 200px" src="./2-4/Auswertung/OriginalFFTSpektrum.JPG">
  <p>Klare Struktur erkennbar. Muster in Spektrum ersichtlich. Frequenzgang ist rechtecking, dem Gitter entsprechend.</p>
  
  <p>2.4 vi. Auswertung / Messung - Tiefpass 1. Ordnung eindimensional (Weichzeichner)</p>
  <img style="display:inline-block; height: 200px; width: 200px" src="./2-4/Auswertung/TP10Testbereich.JPG">
  <img style="display:inline-block; height: 200px; width: 200px" src="./2-4/Auswertung/TP10RGBFrequenzgang.JPG">
  <img style="display:inline-block; height: 200px; width: 200px" src="./2-4/Auswertung/TP10FFTSpektrum.JPG">
  <p>Struktur durch langsamere Übergaenge gekenntzeichnet. Steigung und Abfall der Grau-Werte nicht mehr so steil.Muster in Spektrum aber noch immer   
     ersichtlich.</p>
  
  <p>2.4 vi. Auswertung / Messung - Hochpass 1. Ordnung eindimensional (Scharfzeichner)</p>
  <img style="display:inline-block; height: 200px; width: 200px" src="./2-4/Auswertung/HP10Testbereich.JPG">
  <img style="display:inline-block; height: 200px; width: 200px" src="./2-4/Auswertung/HP10RGBFrequenzgang.JPG">
  <img style="display:inline-block; height: 200px; width: 200px" src="./2-4/Auswertung/HP10FFTSpektrum.JPG">  
  <p>Durch die Darstellung der "Differenzierung" sind im Frequenzgang nur Starke Differenzen erkennbar. Im Spektrum lässt sich die Struktur aber dennoch 
     erkennen.</p>
</div>

---

<div>
  <h1>2.4 Weichzeichner / Schärfung</h1>    
  <p>2.4 vi. Auswertung / Messung - Tiefpass 2. Ordnung zweidimensional (Gauß'scher Weichzeichner)</p>
  <img style="display:inline-block; height: 200px; width: 200px" src="./2-4/Auswertung/TP20Testbereich.JPG">
  <img style="display:inline-block; height: 200px; width: 200px" src="./2-4/Auswertung/TP20RGBFrequenzgang.JPG">
  <img style="display:inline-block; height: 200px; width: 200px" src="./2-4/Auswertung/TP20FFTSpektrum.JPG">
  <p>Struktur durch langsamere Übergaenge gekenntzeichnet. Steigung und Abfall der Grau-Werte nicht mehr so steil.Muster in Spektrum aber noch immer   
     ersichtlich.</p>
  
  <p>2.4 vi. Auswertung / Messung - Hochpass 2. Ordnung zweidimensional (Gauß'scher Scharfzeichner)</p>
  <img style="display:inline-block; height: 200px; width: 200px" src="./2-4/Auswertung/HP20Testbereich.JPG">
  <img style="display:inline-block; height: 200px; width: 200px" src="./2-4/Auswertung/HP20RGBFrequenzgang.JPG">
  <img style="display:inline-block; height: 200px; width: 200px" src="./2-4/Auswertung/HP20FFTSpektrum.JPG">  
  <p>Konturen und Linien sind sehr viel klarer voneinander abgehoben. Abfall und Steigung zwischen den Linien ist steiler als im Original bzw. dem Weichzeichner. 
     Muster in Spektrum aber noch immer ersichtlich. Fragmente sind ebenfalls stärker hervorgehoben.</p>
</div>

---

<div>
  <h1>2.5 Soebel-Filter</h1>  
  <p>2.5 1. Soebelfilter in Webanwendung:</p>
  <img src="./2-5/SoebelFilter.JPG">
  <p>2.5 2. Soebelfilter Auswertung / Messung:</p>
  <img style="display:inline-block; height: 200px; width: 200px" src="./2-5/SoebelTestbereich.JPg">
  <img style="display:inline-block; height: 200px; width: 200px" src="./2-5/SoebelRGBFrequenzgang.JPG">
  <img style="display:inline-block; height: 200px; width: 200px" src="./2-5/SoebelFFTSpektrum.JPG"> 
  <p>Der Soebel-Filter hat die Konturen korrekt herausgearbeitet. Die Struktur des Gitters ist sehr gut erkennbar. Der Frequenzgang zeichnet sich durch sehr 
     steile Grau-Wert-Abfälle bzw. Steigungen aus. Dies ist durch den hohen Kontrast bzw. wertebedingten Unterschiede zu erklären.</p>
</div>


















