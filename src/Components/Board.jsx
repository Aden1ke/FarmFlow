import React, { useState } from "react";
import Column from "./Column";

function Board() {
    return (
        <div>
            <Column title="To Do" />
            <Column title="In Progress" />
            <Column title="Done" />
        </div>
    );
}

export default Board;
