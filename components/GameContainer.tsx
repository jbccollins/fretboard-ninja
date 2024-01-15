import Fretboard from "./Fretboard/Fretboard";

export default function GameContainer() {
    return (
        <div className="h-full relative">
            <div className="h-full w-full max-w-96 mx-auto">
                <Fretboard />
            </div>
        </div>
    )
} 