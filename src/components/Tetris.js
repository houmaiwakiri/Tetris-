import React from "react";

import { createStage } from "../gameHelpers";

//co,pomponents
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { StyledTetris, StyledTetrisWrapper } from "./styles/StyledTetris";

const Tetris = () => {
    return(
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage={createStage()} />
            <aside>
                <div>
                    <Display text="score" />
                    <Display text="Rows" />
                    <Display text="Level" />
                </div>
                <StartButton />
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;