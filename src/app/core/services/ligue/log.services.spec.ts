import { browser, by , element} from 'protractor';
import {  } from '@angular/core/src/render3';

// tslint:disable-next-line: only-arrow-functions
describe('Protractor Demo App', function() {
  const button = element(by.id('log'));
  const username = element(by.className('username'));
  const password = element(by.className('password'));
  const indication = element(by.className('indication'));
  browser.get('http://localhost:4200');

// tslint:disable-next-line: only-arrow-functions
  it('should have a title', function() {

    expect(browser.getTitle()).toEqual('Foot');
  });
// tslint:disable-next-line: only-arrow-functions
  it('should have wrong username', function(){
    username.sendKeys('toto');
    password.sendKeys('toto');
    button.submit();
    button.click();
    expect(indication.getText()).toEqual('pseudo ou mot de passe incorret');
  });
});
