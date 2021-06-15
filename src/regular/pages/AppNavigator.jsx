import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react';
import {Button} from 'react-native';
import App from './App';
import mainpage from './mainpage';
import registerPerson from './registerPerson';
import registerCompany from './registerCompany';

export const AppNavigator = StackNavigator({
    Login: {
        screen: mainpage,
    },
    SignupPerson: {
        screen: registerPerson,
    },
    SignupCompany: {
        screen: registerCompany,
    },
    App: {
        screen: App
    }
  },
  {
    animationEnabled: true,
  });