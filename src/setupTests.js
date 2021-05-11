// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//dont forget to install 'enzyme-adapter-react-(your React version)' dependency
//In this case 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });