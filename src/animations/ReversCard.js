import { keyframes } from 'styled-components';

export const ReversAnimation = keyframes`
0%{
    transform: rotateY(0deg);
}

100%{transform: rotateY(180deg);}`;

export const AversAnimation = keyframes`
0%{
    transform: rotateY(180deg);
}

100%{transform: rotateY(0deg);}`;

export const AversImgAnimation = keyframes`
0%{
    opacity: 1;
}
25%{
    opacity: 0;
}
50%{
    opacity: 0;
}
100%{opacity:1;
}`;
