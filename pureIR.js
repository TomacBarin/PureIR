const { WaveFile } = require('wavefile');
const fs = require('fs');

// === CONFIGURATION – change these values to experiment ===
const SAMPLE_RATE = 48000;
const DURATION_SECONDS = 1.5;          // 1.5 seconds → ~72,000 samples, good for Serum/Ableton
const IMPULSE_VALUE = 1.0;             // +1.0 (positive impulse) – try -1.0 if the phase feels off
const OUTPUT_FILENAME = 'pure_impulse_48k_32float_1.5s.wav';
// === End of configuration ===

const totalSamples = Math.floor(SAMPLE_RATE * DURATION_SECONDS);

// Create Float32Array (32-bit float) – perfect match for Ableton Live
const samples = new Float32Array(totalSamples);

// Place the impulse on the very first sample
samples[0] = IMPULSE_VALUE;

// Create the WaveFile object
const wav = new WaveFile();

// fromScratch(channels, sampleRate, bitDepth, samples)
wav.fromScratch(
  1,                        // mono (1 channel)
  SAMPLE_RATE,
  '32f',                    // 32-bit float
  samples                   // our Float32Array
);

// Save to disk
fs.writeFileSync(OUTPUT_FILENAME, wav.toBuffer());

console.log(`Done! File created: ${OUTPUT_FILENAME}`);
console.log(`→ ${totalSamples} samples @ ${SAMPLE_RATE} Hz, 32-bit float`);
console.log(`→ Impulse at sample 0 = ${IMPULSE_VALUE.toFixed(6)}`);
console.log(`→ Duration: ${DURATION_SECONDS.toFixed(2)} seconds`);