"use strict";
// Interface 
Object.defineProperty(exports, "__esModule", { value: true });
// this is IMPLEMENTATION
class MusicPlayer {
    play() {
        console.log('playing music');
    }
    pause() {
        console.log('playing paused...');
    }
    stop() {
        console.log('music stopped');
    }
}
const player = new MusicPlayer();
player.play();
// Abstract Class
// idea abstract class
class MediaPlayer2 {
}
// implements in child class
class ChildPlayer extends MediaPlayer2 {
    play() {
        console.log('playing music from child class');
    }
    pause() {
        console.log('pause music from child class');
    }
    stop() {
        console.log('stopped music from child class');
    }
}
const childPlay = new ChildPlayer();
childPlay.play();
//# sourceMappingURL=abstraction.js.map