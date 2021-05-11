import App from './App';
import { shallow, mount, render } from 'enzyme';

import Header from './components/Header/Header'


describe('Content Layout',()=>{
  test('Has one Header',()=>{

    const wrapper = shallow(<App />);

    console.log(wrapper.debug())
    
    expect(wrapper.find(Header)).toHaveLength(1)

  })


})