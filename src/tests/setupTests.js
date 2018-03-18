import Enzyme from 'enzyme';
import { cofigure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter:  new Adapter()
});