
let Utility = {
    createId() {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    },
    isNone(value) {
        return ((typeof value) === 'undefined');
    }
}

/**
 * @class Observable
 */
var Observable = (function() {

    /**
     * @class Subscription
     * @param {function(V): void} onUpdate 
     */
    function Subscription(onUpdate) {
        this._id = Utility.createId();
        this.onUpdate = onUpdate;
    }


    /**
     * @type {V}
     */
    let data;

    /**
     * @type {Array<Subscription>}
     */
    let subscribers = [];

    /**
     * @constructor Observable
     * @param {V} [init_val]  initial Value
     * @returns {Observable}
     * @template V
     */
    function Observable(init_val) {
        if(!new.target) throw new Error('This is a Class. Use `new` keyword to create Object.');
        if(!Utility.isNone(init_val)) data = init_val
    }

    /**
     * @method subscribe
     * @param {function(V): void} onUpdate 
     */
    Observable.prototype.subscribe = function(onUpdate) {
        subscribers.push(new Subscription(onUpdate));
    }

    const updateSubscribers = () => {
        for (let i=0, l=subscribers.length; i<l; i++) {
            queueMicrotask(() => {subscribers[i].onUpdate(data)});
        }
    }

    /**
     * @method update
     * @param {V} value
     * @template V
     */
    Observable.prototype.update = function(value) {
        data = value;
        updateSubscribers();
    }

    return Observable;
})();
