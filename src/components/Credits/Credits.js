import React from 'react'
import SCCredits from './Credits.styled';
import Text from "../text";

export default function Credits() {
    return (
        <SCCredits id="credits">
            <Text id="text" size="m" color="letterColor1">Developed with 💙 by <a href="https://github.com/TaiaMakh" className="links">Taia Makhmutova</a> & <a
                href="https://github.com/Silinde87" className="links">Pau Rodríguez</a></Text>
        </SCCredits>
    )
}
