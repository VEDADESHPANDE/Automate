const { I } = inject();

module.exports = {

  // we can use this file in another file

  _init() {

    I = require('../steps_file.js')();
  },
  locators: {
    fiscal : "//div[@id='table-four-top-content']//table//tbody//tr[1]//td[1]",
    fisok1 : "//*[@id='fisYearUpdateForm:btnOk']",
    fisok2 : "//*[@id='fisYearUpdateForm:btnOk']",
    fischk : "//*[@id='fiscalForm:periodYearTable:0:chkPeriodSelected']",
    fiscalfield : "fiscalForm:j_id107:filterTear",
},
FiscalYears(){
    I.amOnPage("https://23.253.186.150:8235/ncsts/fiscalYear/fiscalYear.jsf");
    I.wait(6);
    I.fillField(this.locators.fiscalfield,"2021");
    I.click(".search");
    I.wait(5);
    I.checkOption("fiscalForm:fiscalYearTable:1:chkYearSelected");
    I.wait(5);
    I.click(".update");
    I.wait(7);
    I.fillField("fisYearUpdateForm:description","March updated description");
    I.wait(3);
    I.click(".populate");
    I.wait(7);
    I.click(this.locators.fisok1); // xpath
    I.wait(8);
    I.click(".add");
    I.wait(7);
    I.fillField("fisYearUpdateForm:fisYear","2023");
    I.fillField("fisYearUpdateForm:description"," It is description for each month");
    I.click(".populate");
    I.wait(7);
    I.fillField("fisYearUpdateForm:fieldDescription_0","It is description for each month");
    I.wait(2);
    I.click(".ok");// xpath
    I.wait(8);
    I.fillField("fiscalForm:j_id107:filterTear","2023");
    I.wait(2);
    I.click(".search");
    I.wait(8); // throwing xpath error
    I.click(this.locators.fiscal);
    I.wait(2);
    I.checkOption(this.locators.fischk);
    I.wait(4);
    I.click(".closePeriod");
    I.wait(6);
    I.click(this.locators.fisok2); // xpath2
    I.wait(6);
    I.click(".search");
    I.wait(4);

  },
}

//C:\Users\RC09955\Puppeteer\Modules\Elements\SetupFiscal.js