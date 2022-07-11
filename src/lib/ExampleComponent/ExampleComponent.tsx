import React from 'react';
import ExampleComponentType from './ExampleComponentType';
import '../packageDeps/styles/ExampleComponent.css';

export default function ExampleComponent({ componentName }: ExampleComponentType) {
	return <div className='example-component'>Hello {componentName}</div>;
}
