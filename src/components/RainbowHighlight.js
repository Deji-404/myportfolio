import React from "react";
import { RoughNotation } from "react-rough-notation";


export const RainbowHighlight = ({ color, children }) => {
    //Change the animation duration depending on the length of text you want to animate
    const AnimationDuration = Math.floor(30 * children.length);

    return (
        <RoughNotation type="highlight" multiline={true} padding={[0, 2]} iterations={1} animationDuration={AnimationDuration} color={color}>
            {children}
        </RoughNotation>
    );
};