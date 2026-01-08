import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
    const [isMuted, setIsMuted] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipMessage, setTooltipMessage] = useState("You can mute from here");
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const hasAttemptedPlay = useRef(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || hasAttemptedPlay.current) return;

        hasAttemptedPlay.current = true;

        // Set volume and attempt to play
        audio.volume = 0.10;

        const attemptPlay = () => {
            const playPromise = audio.play();

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsPlaying(true);
                        setIsMuted(false);
                        setTooltipMessage("You can mute from here");
                        setShowTooltip(true);
                        console.log("✅ Background music started playing");

                        // Hide tooltip after 5 seconds
                        setTimeout(() => setShowTooltip(false), 5000);
                    })
                    .catch((error) => {
                        console.log("⚠️ Auto-play prevented by browser:", error.message);
                        setIsMuted(true); // Show as muted since it's not playing
                        setIsPlaying(false);
                        setTooltipMessage("Click to unmute from here");
                        setShowTooltip(true);

                        // Try to play on any user interaction
                        const playOnInteraction = () => {
                            audio.play()
                                .then(() => {
                                    setIsPlaying(true);
                                    setIsMuted(false);
                                    setTooltipMessage("You can mute from here");
                                    console.log("✅ Music started after user interaction");

                                    // Show tooltip briefly after starting
                                    setShowTooltip(true);
                                    setTimeout(() => setShowTooltip(false), 3000);
                                })
                                .catch(err => console.log("Failed to play:", err));

                            // Remove all listeners after successful play
                            document.removeEventListener("click", playOnInteraction);
                            document.removeEventListener("keydown", playOnInteraction);
                            document.removeEventListener("touchstart", playOnInteraction);
                        };

                        document.addEventListener("click", playOnInteraction, { once: true });
                        document.addEventListener("keydown", playOnInteraction, { once: true });
                        document.addEventListener("touchstart", playOnInteraction, { once: true });
                    });
            }
        };

        // Try to play immediately
        attemptPlay();
    }, []);

    const toggleMute = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isMuted) {
            audio.volume = 0.10;
            audio.play()
                .then(() => {
                    setIsPlaying(true);
                    setIsMuted(false);
                    setTooltipMessage("You can mute from here");
                })
                .catch(err => console.log("Play error:", err));
        } else {
            audio.pause();
            setIsPlaying(false);
            setIsMuted(true);
            setTooltipMessage("Click to unmute from here");
        }
        setShowTooltip(false);
    };

    return (
        <>
            <audio
                ref={audioRef}
                src="/bg-music.mp3"
                loop
                preload="auto"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="fixed bottom-8 right-8 z-50"
            >
                {/* Tooltip */}
                <AnimatePresence>
                    {showTooltip && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="absolute bottom-full right-0 mb-3 whitespace-nowrap"
                        >
                            <div className="bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                                {tooltipMessage}
                                <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-foreground" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Mute Button */}
                <motion.button
                    onClick={toggleMute}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => {
                        setTimeout(() => setShowTooltip(false), 500);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full bg-foreground text-background shadow-2xl flex items-center justify-center hover:bg-foreground/90 transition-colors relative"
                    aria-label={isMuted ? "Unmute background music" : "Mute background music"}
                >
                    {isMuted ? (
                        <VolumeX className="w-6 h-6" />
                    ) : (
                        <Volume2 className="w-6 h-6" />
                    )}

                    {/* Pulse animation when playing */}
                    {isPlaying && !isMuted && (
                        <motion.div
                            className="absolute inset-0 rounded-full bg-foreground"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0, 0.5]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    )}
                </motion.button>
            </motion.div>
        </>
    );
};

export default BackgroundMusic;
