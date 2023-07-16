
/**
 * @class ComplexNumber
 */
const ComplexNumber = (function () {

    /**
     * @constructor `ComplexNumber` class constructor.
     * @param {number} real Real part of the Complex Number
     * @param {number} img Imaginary part of the Complex Number
     */
    function ComplexNumber(real=0, img=0) {
        this.real = real;
        this.img = img;
    }

    /**
     * #### Add two Complex Numbers.
     * @param {ComplexNumber} other 
     * @returns {ComplexNumber}
     */
    ComplexNumber.prototype.add = function(other) {
        return new ComplexNumber((this.real + other.real), (this.img + other.img));
    }

    /**
     * #### Multiply two Complex Numbers.
     * @param {ComplexNumber} other 
     * @returns {ComplexNumber}
     */
    ComplexNumber.prototype.multiply = function(other) {
        const m1=(this.real * other.real), m2=(this.img * other.img), m3=((this.real + this.img) * (other.real + other.img));
        return new ComplexNumber((m1 - m2), (m3 - m1 - m2));
    }

    /**
     * #### Absolute of the Complex Number.
     * @returns {number}
     */
    ComplexNumber.prototype.abs = function() {
        return Math.sqrt((this.real * this.real) + (this.img * this.img));
    }

    return ComplexNumber;
})();
