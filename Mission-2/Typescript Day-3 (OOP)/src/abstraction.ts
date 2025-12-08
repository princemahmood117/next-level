



// Interface 


// this is IDEA
interface MediaPlayer {
    play() : void;
    pause() : void;
    stop() : void;
}

// this is IMPLEMENTATION
class MusicPlayer implements MediaPlayer {
 
    play(): void {
        console.log('playing music');
    }
 
    pause(): void {
        console.log('playing paused...');
    }
 
    stop(): void {
        console.log('music stopped');
    }
}

const player = new MusicPlayer()
player.play()







// Abstract Class

// idea abstract class
abstract class MediaPlayer2 {
    abstract play() : void;
    abstract pause() : void;
    abstract stop() : void;
}

// implements in child class
class ChildPlayer extends MediaPlayer2{

    play() : void {
        console.log('playing music from child class');
    }
    pause() : void {
        console.log('pause music from child class');
    }
    stop() : void {
        console.log('stopped music from child class');
    }
}

const childPlay = new ChildPlayer()
childPlay.play()

