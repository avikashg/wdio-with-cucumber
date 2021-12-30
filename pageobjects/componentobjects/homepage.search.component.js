import BaseComponent from './base.component'

class HomePageSearchComponent extends BaseComponent {
    
    get cityListbox(){return $('.headerDropdown_nice_select__qMcgN')}
    get cityListboxSelectedValue(){return this.cityListbox.$('span.headerDropdown_current__5YjSN')}
    get cityListboxListItems(){return this.cityListbox.$$("li")}

    async selectCity(cityName) {
        const selectedCity = await this.cityListboxSelectedValue.getText();
        if (selectedCity === cityName) return;
        await this.cityListbox.click()
    


    }
}

export default HomePageSearchComponent