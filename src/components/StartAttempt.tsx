import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function Start(): void {
        setAttempt(attempt - 1);
        setProgress(!progress);
    }
    function Stop(): void {
        setProgress(!progress);
    }
    function Mulligan(): void {
        setAttempt(attempt + 1);
    }

    return (
        <div>
            <div>Your Attempts Are: {attempt}</div>
            <div>
                <Button disabled={progress || attempt === 0} onClick={Start}>
                    Start Quiz
                </Button>
                <Button disabled={!progress} onClick={Stop}>
                    Stop Quiz
                </Button>
                <Button disabled={progress} onClick={Mulligan}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
