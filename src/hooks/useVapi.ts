import { useEffect, useState } from 'react';
import Vapi from '@vapi-ai/web';

// 🚨 DIAGNOSTIC TEST: This will print your key to the browser console
console.log("My Vapi Key is:", process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);

// Initialize the Vapi instance outside the hook so it doesn't recreate on every render
const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || "");

export function useVapi() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Listeners to update our UI when the AI connects or disconnects
    vapi.on('call-start', () => setIsCallActive(true));
    vapi.on('call-end', () => setIsCallActive(false));
    vapi.on('error', (error) => console.error('Vapi Error:', error));

    // Cleanup listeners when the component unmounts
    return () => {
      vapi.removeAllListeners();
    };
  }, []);

  // Function to start the interview, passing in the specific AI officer configuration
  const startCall = async (assistantConfig: any) => {
    try {
      await vapi.start(assistantConfig);
    } catch (error) {
      console.error("Failed to start the interview:", error);
    }
  };

  // Function to forcefully hang up
  const stopCall = () => {
    vapi.stop();
  };

  // Function to let the user mute their mic if they need to cough/pause
  const toggleMute = () => {
    const newMutedState = !isMuted;
    vapi.setMuted(newMutedState);
    setIsMuted(newMutedState);
  };

  return { 
    isCallActive, 
    isMuted, 
    startCall, 
    stopCall, 
    toggleMute 
  };
}