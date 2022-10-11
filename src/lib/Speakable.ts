import { Platform } from 'react-native';

const IOSSpeech = require('react-native-speech');
const AndroidSpeech = require('react-native-android-speech');
const Speach = Platform.OS == 'ios' ? IOSSpeech : AndroidSpeech;

export class Speakable {
    static speak(text: string) {
        Speach.isSpeaking().then((isSpeaking) => {
            if (!isSpeaking) {
                return Speach.speak({
                    text,
                    forceStop: true
                    // voice: 'en-US',
                    // rate: 0.4
                })
            }
        }).catch(error => {
            console.error(error);
        });
    }
}
