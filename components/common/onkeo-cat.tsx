"use client";

import { catConfig, onkeoGif } from '@/config/cat';
import { on } from 'events';
import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function OnekoCat() {
    const [currentGif, setCurrentGif] = useState<null | number>(null);

    useEffect(()=>{
        setCurrentGif(Math.floor(Math.random() * onkeoGif.length));
    },[])


  if (!catConfig.enabled) {
    return null;
  }

  return(
    currentGif && <Script src="./oneko/oneko.js" data-cat={onkeoGif[currentGif]} />
 )
}
