import expect from 'expect';
import React from 'react';
import sinon from 'sinon';
import {mount, shallow} from 'enzyme';
import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

import reducer from '../../../app/bundles/App/reducers/rootReducer';
const store = createStore(reducer, applyMiddleware(thunk));

import User from '../../../app/bundles/App/components/admin/User';
var data = [
  {
    id: 1,
    email: 'user@user.com',
    contacts: 'User Userov',
    role: 'user'
  },
  {
    id: 2,
    email: 'bobo@bobo.com',
    contacts: 'Bob Bobo',
    role: 'user'
  },
  {
    id: 3,
    email: 'test@test.com',
    contacts: 'Test Test',
    role: 'user'
  }
];
describe('<User  />', () => {
  it('allows us to set props', () => {
    const wrapper = mount(
        <User users={data} store={store}/>
    );
    expect(wrapper.props().users).toBe(data);
  });
});