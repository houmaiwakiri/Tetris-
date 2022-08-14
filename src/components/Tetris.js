import React from "react";

import { createStage } from "../gameHelpers";

//co,pomponents
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
    return(
        <div>
            <Stage stage={createStage()} />
            <aside>
                <div>
                    <Display text="score" />
                    <Display text="Rows" />
                    <Display text="Level" />
                </div>
                <StartButton />
            </aside>
        </div>
    )
}

export default Tetris;