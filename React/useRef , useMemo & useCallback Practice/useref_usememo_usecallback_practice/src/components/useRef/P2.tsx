import { useRef } from "react"

export default function P2() {
    // useRef
    const videoRef = useRef(null);

    // Handler Functions
    const startVideo = () => {
        videoRef?.current?.play();
    };

    const pauseVideo = () => {
        videoRef?.current?.pause();
    };

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q2. Build a component with a video or div — buttons to "Start" and "Stop" that call .play() and .pause() on the element via ref.
                </h1>

                <div className="flex flex-col gap-4 w-fit">
                    <video
                        ref={videoRef}
                        className="w-96 rounded border"
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                    />
                    <div className="flex gap-2">
                        <button onClick={startVideo} className="border px-4 py-2">Start</button>
                        <button onClick={pauseVideo} className="border px-4 py-2">Stop</button>
                    </div>
                </div>
            </div>
        </>
    )
};