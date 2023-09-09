
/** @class Store */
const Store = (function() {
    let instance;

    /** @constructor */
    function Store() {
        if(!new.target) throw new Error('This is a Class. Use `new` keyword to create Object.');
        if(instance) return instance;
        this.data = {};
        instance = this;
    }

    /**
     * @param {string} key
     * @param {*} value
     */
    Store.prototype.save = function(key, value) {
        this.data[key] = value;
    }
    return Store;
})();

new Store().save('todos', [{_id:1, todo: 'this is first todo', isDeleted: false}]);

console.log(new Store().data);