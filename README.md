# Pure Impulse IR for Xfer Serum 2 (and other convolvers)

A clean, single-sample **pure impulse** designed specifically for transient reshaping in Serum 2's Convolve effect (as shown in tutorials like [this one](https://www.youtube.com/watch?v=2RZPgZ36Bus)).

### File Specifications

- **Sample Rate**: 48000 Hz
- **Bit Depth**: 32-bit float (IEEE 754 single precision – ideal for Ableton Live and modern DAWs)
- **Impulse**: +1.0 exactly on the first sample (index 0) – optimal placement for tightest transient control and minimum phase behavior in Serum
- **Total Length**: 1.5 seconds (~72,000 samples) – sweet spot with plenty of headroom/buffer, low CPU usage, and no unnecessary file size
- **Channels**: Mono
- **Format**: WAV, 32-bit float PCM

This impulse contains **exactly one non-zero sample** at full scale (+1.0) right at the start, with silence everywhere else. Perfect for use as a "DRX spike" or neutral impulse response.

### How to Use

1. **Download** the file:  
   `pure_impulse_48k_32float_1.5s.wav`

2. **In Serum 2**:
   - Open the Convolve effect in the FX section.
   - Drag and drop the WAV file into the IR loader (Sampler mode).
   - Set **Mix** to 100%.
   - Enable **Minimum Phase** for front-loaded transient energy.
   - Adjust **IR Gain** as needed (usually +3 to +12 dB depending on source material).
   - Test on kicks, snares, claps or any percussive sound to reshape the attack.

3. **In Ableton Live** (or other DAWs):
   - Use with Convolution Reverb Pro, or drag into Serum as above.
   - Works great on mono or centered sources.

4. **Tips**:
   - For even punchier results, try a negative impulse version (-1.0) – just flip the sign in the code and regenerate.
   - If you need stereo, duplicate the impulse to both channels (L=R) – but mono is usually sufficient and lighter on CPU.

### Generate or Customize Yourself

Want a different length, negative impulse, or stereo version? Just run the included Node.js script!

```bash
npm install wavefile
node generate-impulse.js
```
