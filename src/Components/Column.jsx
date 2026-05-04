import React, { useState } from "react";
import TaskCard from "./TaskCard";

function Column(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <TaskCard title="mini" />
            <TaskCard title="Task" />
        </div>
    );
}

export default Column;
