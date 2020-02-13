import SlideComponent from "./SlideComponent.js";

const DirectionEnum = Object.freeze({"left": 0, "right": 1})

class DirectionButtonManager extends SlideComponent {
	constructor(slideService, buttons) {
        super(slideService);
        this._directionButtons = buttons;
        this._registerEventListenerOnDirectionButtons(this._directionButtons);
    }

    _registerEventListenerOnDirectionButtons(elements) {
        elements.forEach((element, index) => {
            element.addEventListener('click', event => {
                this._directionButtonHandler(event, index);
            });
        });
    }

    _directionButtonHandler(event, direction) {
        if (DirectionEnum.left === direction) {
            this._slideService.mediate('decreaseCurrentIndex');
        }
        else if (DirectionEnum.right === direction) {
            this._slideService.mediate('increaseCurrentIndex');
        }
        else {
            //Unexpected Flow.
        }
    }
}

export default DirectionButtonManager;