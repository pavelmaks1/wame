import moment from 'moment';


export default [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0

},{
  id: '2',
  description: 'Boots',
  note: '',
  amount: 200,
  createdAt: moment(0).subtract(4, 'days').valueOf()

},{
  id: '3',
  description: 'Magazine',
  note: '',
  amount: 205,
  createdAt: moment(0).add(4, 'days').valueOf()

}];
