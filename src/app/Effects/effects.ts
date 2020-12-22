import { Theremin } from "../theremin/theremin"




export function reverb() {

    function impulseResponse( duration: number, decay: number, reverse: boolean ) {

        var sampleRate = Tone.context.sampleRate;
        var length = sampleRate * duration;
        var impulse = Tone.context.createBuffer(2, length, sampleRate);
        var impulseL = impulse.getChannelData(0);
        var impulseR = impulse.getChannelData(1);
    
        if (!decay)
            decay = 2.0;
        for (var i = 0; i < length; i++){
          var n = reverse ? length - i : i;
          impulseL[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
          impulseR[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
        }
        return impulse;
    }

    const convolver = Tone.context.createConvolver()

    convolver.buffer = impulseResponse(100, 100, false)

    return convolver
}