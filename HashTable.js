

const PrimeNumbers = (function() {
    function PrimeNumbers() {
        this.a = [];
    }
    return PrimeNumbers;
})();

/**
 * @class HashTable
 * @typedef {number|string|Symbol} Key number | string | Symbol
 * @typedef {*} Value
 * @typedef {{key: Key, value: Value}} Entry
 */
const HashTable =  (function() {

    /**
     * @private
     * @type {Array<Entry>}
     */
    let ___data;
    /**
     * @private
     * @param {string} str
     * @returns {number}
     */
    let ___generateHash = (str) => {
        let result = 0;
    }

    /**
     * @private
     * @type {number}
     * @description `___lastIndex` defines the index where last data is set in `___data` Array.
     */
    let ___lastIndex;

    /**
     * @constructor
     * @returns {HashTable}
     */
    function HashTable() {
        ___data = [];
        ___lastIndex = -1;
        /**
         * @property
         * @type {number}
         */
        this.size = 0;
    }

    /**
     * @static
     * @param {Key} key
     * @param {Value} value
     * @returns {HashTable}
     */
    HashTable.create = (key, value) => {
        return new HashTable().set(key, value);
    }

    /**
     * @method
     * @param {Key} key
     * @returns {Value}
     */
    HashTable.prototype.get = (key) => {

    }
    /**
     * @method
     * @param {Key} key
     * @param {Value} value
     * @returns {HashTable}
     */
    HashTable.prototype.set = (key, value) => {
        return this;
    }
    return HashTable;
})();
