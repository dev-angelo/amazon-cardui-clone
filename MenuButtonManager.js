import SlideComponent from "./SlideComponent.js";

const DirectionEnum = Object.freeze({"left": 0, "right": 1})

class MenuButtonManager extends SlideComponent {
	constructor(slideService, buttons) {
        super(slideService);
        this._menuButtons = buttons;
        this._registerEventListenerOnMenuButtons(this._menuButtons);
    }

    _registerEventListenerOnMenuButtons(elements) {
        elements.forEach((element, index) => {
            element.addEventListener('click', event => {
                this._menuButtonHandler(event, index);
            });
        });
    }

    _menuButtonHandler(event, index) {
        this._slideService.mediate('changeCurrentIndex', index);
    }

    onNotifyIndexChanged(index) {
        this._menuButtons.forEach((element, elementIndex) => {
            element.className = elementIndex === index ? 'selected' : '';
        })
    }
}

export default MenuButtonManager;