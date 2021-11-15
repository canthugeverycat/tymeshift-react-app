import { keyframes } from 'styled-components';

export const pulseAnimation = keyframes`
    0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255,255,255, 70%);
	}
	
	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(255,255,255, 0%);
	}
	
	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255,255,255, 0%);
	}
`;

export const pulseAnimationGreen = keyframes`
    0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(55,178,77, 70%);
	}
	
	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(55,178,77, 0%);
	}
	
	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(55,178,77, 0%);
	}
`;
