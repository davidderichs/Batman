# Deltakompression

a) wie groß ist der Fehler bei einer Quantisierung von 1?
b) wie groß ist der Fehler bei einer Quantisierung von 8?

![quantisierung: 1](Uebung-03/delta1.PNG)

![quantisierung: 8](Uebung-03/delta8.PNG)

# Subbandkompression

a) wie groß ist der Fehler bei einer Quantisierung von 1?
b) wie groß ist der Fehler bei einer Quantisierung von 8?

![quantisierung: 1](Uebung-03/subband1.PNG)

![quantisierung: 8](Uebung-03/subband8.PNG)

# processingAudioKompDelta()

## Bestimmen Sie die höchste Quantisierung bei bester Wahrnehmungs-Qualität!

1500

![quantisierung: 8](Uebung-03/quantisierungsfaktor.PNG)

## Berechnen Sie die Wortbreite bei der optimalen Quantisierung!

16 bit

## Berechnen Sie die Datenrate bei 48kHz, stereo

Unkomprimierte Datenrate:

samplerate \* word size \* channels

48000 \* 16bit \* 2 = 1536000 bit/s

1536000 bit/ = 192000 byte/s = 192 kbyte/s

Komprimierte Datenrate (wort längen reduktion) bei quant. Fakt. 2:

48000 \* 15bit \* 2 = 1440000 bit/s

1440000 bit/s = 180000 byte/s = 180 kbyte/s

## Berechnen Sie die Kompression

Runden mit Quantisierungsfaktor 6

Wertebereich 17Bit (Statt 16Bit)
-64.000 bis +64.000

Bestimmen der höchten Quantisierung bei bester Wahrnehmungsqualität:

Q=64 -> 6 bit weil 2^6 = 64

Berechnen der optimalen Wortbreite bei der optimalen Quantisierung:

17 bit - 6 bit = 11 bit (17 bit weil bei der Deltakomp. 1 bit hinzugefügt wird.)

## Berechnen Sie die Datenrate bei Datenrate bei 48kHz für mono.

48000hz \* 1 channel \* 11 bit

Berechnen der Compression Ratio:

## Berechnen Sie die Kompression.

16:11 weil 16 bit auf 11 bit reduziert wurden.

## Screenshots und Auswertung
