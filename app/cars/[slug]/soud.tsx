'use client'
import React,{useEffect, useState} from 'react'
import useSound from 'use-sound';
import playwave from './PlayWave.svg';
import pausewave from './PauseWave.svg';
import Image from 'next/image';

export default function SoudPlayer() {
  const [play, { sound }] = useSound("/LB744_Exhaust_MIX8D_230303.mp3");
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    play();
  };
  const handlePause = () => setIsPlaying(false);
  useEffect(() => {
    if (!isPlaying) {
      sound?.pause(); // Pause if not playing
    }
  }, [isPlaying, sound]);
  //const toggleMute = () => setIsMuted(!isMuted);
  //<button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
  return (
    <div className="flex justify-center">
      {isPlaying===false && <Image alt='Sound' src={playwave} width={800} height={100} onClick={handlePlay}/>}
      {isPlaying===true && <Image alt='Sound' src={pausewave} width={800} height={100} onClick={handlePause}/>}     
      <audio src={sound} muted={isMuted}/>
    </div>
  );
}