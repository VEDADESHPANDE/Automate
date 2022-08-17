const { I } = inject();

module.exports = {

  // we can use this file in another file

  _init() {

    I = require('../steps_file.js')();
  },
  locators: {
    lists : "//div[@id='table-four-content']//table//tbody//tr[4]//td[1]"
  },
  ListCodes(){ //LISTS
    I.amOnPage("https://23.253.186.150:8235/ncsts/listcodes/listCodes.jsf");
    I.wait(4);
    I.selectOption("listCodesForm:SelCodeType","APPENDCODE");
    I.wait(5);
    // CLICK ON ADD BUTTON
    I.click(".add");
    I.wait(3);
    I.click(".ok");
    I.wait(3);
    I.fillField("listCodesForm:txtCodeCode","JUNE");
    I.click(".ok");
    I.wait(6);
    I.click(this.locators.lists);
    I.wait(3);
    // CLICK ON UPDATE BUTTON
    I.click(".update");
    I.wait(6);
    I.fillField("listCodesForm:txtDescription","Updated automated JUNE description");
    I.wait(4);
    I.click(".ok");
    I.wait(7);
    I.click(this.locators.lists);
    I.wait(3);
    // CLICK ON DELETE BUTTON
    I.click(".delete");
    I.wait(6);
    I.click(".cancel");
    I.wait(6);
    },
  }