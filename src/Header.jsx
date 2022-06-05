import {
    HeaderDiv,
    SubHeaderDiv,
    TitleBig,
    TitleLogoDiv,
    TitleSmall,
} from './styledComponent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSun,
    faMoon,
} from '@fortawesome/free-solid-svg-icons';

function Header({darkMode}) {
    return (
        <HeaderDiv>
                <TitleLogoDiv>
                  <TitleBig>멋사</TitleBig>
                  <TitleSmall>익명게시판</TitleSmall>
                </TitleLogoDiv>
                <SubHeaderDiv>
                  {darkMode ? (
                    <FontAwesomeIcon icon = {faSun} />
                  ) : (
                    <FontAwesomeIcon icon = {faMoon} />
                  )}
                </SubHeaderDiv>
         </HeaderDiv>
    )
}

export default Header