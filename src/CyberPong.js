class CyberPong {

    constructor(canvas, width=640, height=480) {
        this._canvas = canvas;
        this._canvas.width = width;
        this._canvas.height = height;
        this._context = this._canvas.getContext('2d');
    }



}

export default CyberPong;