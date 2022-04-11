import React from 'react';

export interface helloCompProps {
	name: string;
}

const HelloComp = ({ name }: helloCompProps) => {
	return <button>Hello {name}</button>;
};

export default HelloComp;
