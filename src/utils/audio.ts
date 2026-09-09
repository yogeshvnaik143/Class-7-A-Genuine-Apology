// Web Audio API Synthesizer and Web Speech Synthesis for bilingual narration

class SoundEffects {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  playChime() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.15); // G5
      
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.5);
    } catch {
      // Ignore audio failure
    }
  }

  playCorrect() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      // Happy major arpeggio
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startTime = now + idx * 0.08;
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);
        
        gain.gain.setValueAtTime(0.12, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.25);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(startTime);
        osc.stop(startTime + 0.25);
      });
    } catch {
      // Ignore
    }
  }

  playPop() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
      
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.1);
    } catch {
      // Ignore
    }
  }

  playBloom() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      
      // Gentle harp-like flourish
      const freqs = [392.00, 523.25, 659.25, 783.99, 987.77, 1046.50];
      freqs.forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const st = now + i * 0.06;
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, st);
        
        gain.gain.setValueAtTime(0.08, st);
        gain.gain.exponentialRampToValueAtTime(0.001, st + 0.4);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(st);
        osc.stop(st + 0.4);
      });
    } catch {
      // Ignore
    }
  }
}

export const sound = new SoundEffects();

// Speech Synthesis Helper
export class SpeechNarrator {
  private static synth: SpeechSynthesis | null = typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null;
  private static isSpeakingNow = false;

  static speak(text: string, lang: 'en' | 'kn' = 'en', onEnd?: () => void) {
    if (!this.synth) return;
    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.92; // slightly slower, clear for 7th class teaching
    utterance.pitch = 1.05;

    if (lang === 'kn') {
      utterance.lang = 'kn-IN';
      // Find Kannada voice if available in OS/browser
      const voices = this.synth.getVoices();
      const knVoice = voices.find(v => v.lang.startsWith('kn') || v.name.toLowerCase().includes('kannada'));
      if (knVoice) {
        utterance.voice = knVoice;
      }
    } else {
      utterance.lang = 'en-IN';
      const voices = this.synth.getVoices();
      const inEnVoice = voices.find(v => v.lang === 'en-IN') || voices.find(v => v.lang.startsWith('en'));
      if (inEnVoice) {
        utterance.voice = inEnVoice;
      }
    }

    utterance.onend = () => {
      this.isSpeakingNow = false;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.isSpeakingNow = false;
      if (onEnd) onEnd();
    };

    this.isSpeakingNow = true;
    this.synth.speak(utterance);
  }

  static stop() {
    if (this.synth && this.synth.speaking) {
      this.synth.cancel();
    }
    this.isSpeakingNow = false;
  }

  static isSpeaking(): boolean {
    return this.isSpeakingNow;
  }
}
