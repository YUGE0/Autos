'use client'
import React,{useEffect, useState} from 'react'
import useSound from 'use-sound';

export default function SoudPlayer() {
    const [play, { sound }] = useSound("/LB744_Exhaust_MIX8D_230303.mp3");
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const playAudio = async () => {
      if (sound) { 
        console.log("inside if");
        sound.play(); 
      }
    };
    playAudio() 
  }, [sound]);

  const toggleMute = () => setIsMuted(!isMuted);

  // <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
  return (
    <div>
      <audio src={sound} autoPlay/>
    </div>
  );
}