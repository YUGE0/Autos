'use client'
import React,{useEffect, useState} from 'react'
import useSound from 'use-sound';
import playwave from './PlayWave.svg';
import pausewave from './PauseWave.svg';
import Image from 'next/image';
import { log } from 'console';

export default function SoudPlayer(au:{so:string}) {
  console.log(au);  
  const [play, { sound }] = useSound(au.so);
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
    <div className="flex flex-wrap justify-around">
      <h1 className="text-5xl font-semibold p-2">FEEL THE ENGINE</h1>
      {isPlaying===false ? <Image alt='Sound' src={playwave} width={500} height={100} onClick={handlePlay}/> : <Image alt='Sound' src={pausewave} width={500} height={100} onClick={handlePause}/>}     
      <audio src={sound} muted={isMuted}/>
    </div>
  );
}