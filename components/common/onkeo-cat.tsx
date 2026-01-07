"use client";

import { catConfig, onkeoGif } from '@/config/cat';
import { on } from 'events';
import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function OnekoCat() {
    const [currentGif, setCurrentGif] = useState<null | string>(null);

    useEffect(()=>{
          const gif = onkeoGif[Math.floor(Math.random() * onkeoGif.length)];
      
        setCurrentGif(gif)
    },[])


  if (!catConfig.enabled) {
    return null;
  }

  return(
    currentGif && <Script src="./oneko/oneko.js" data-cat={currentGif} />
 )
}
