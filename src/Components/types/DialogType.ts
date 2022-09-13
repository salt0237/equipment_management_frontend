import React from "react";

export type DialogProps = {
    buttonName:string;
    id:string[][];
    textMessage: string;
    handleOnClick: () => void;
    day:string
};
