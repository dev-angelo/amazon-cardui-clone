class SlideComponent {
	constructor(slideService) {
        this._slideService = slideService;
    }

    sendEvent(message, index) {
        this._slideService.mediate(message, index);
    }

    onNotifyIndexChanged(index) {
    }
}

export default SlideComponent;