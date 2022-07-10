import ExampleComponentType from './ExampleComponentType';
import '../packageDeps/styles/landingScreen.css';

export default function ExampleComponent({ componentName }: ExampleComponentType) {
	return <div>Hello {componentName}</div>;
}
