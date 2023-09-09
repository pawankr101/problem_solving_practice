
let Utility = {
    createId() {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    },
    isNone(value) {
        return ((typeof value) === 'undefined');
    }
}

/** @class Observable */
var Observable = (function() {

    /**
     * @class Subscription
     * @param {(value: V) => void} onUpdate 
     */
    function Subscription(onUpdate) {
        this._id = Utility.createId();
        this.onUpdate = onUpdate;
    }


    /** @type {V} */
    let data;

    /** @type {Array<Subscription>} */
    let subscribers = [];

    /**
     * @constructor Observable
     * @param {V} [initVal] initial Value
     * @returns {Observable}
     * @template V
     */
    function Observable(initVal) {
        if(!new.target) throw new Error('This is a Class. Use `new` keyword to create Object.');
        if(!Utility.isNone(initVal)) data = initVal;
    }

    /**
     * @method subscribe
     * @param {(value: V) => void} onUpdate 
     */
    Observable.prototype.subscribe = function(onUpdate) {
        subscribers.push(new Subscription(onUpdate));
    }

    /** @private */
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

// use of Observable

let observableData = new Observable(0);
observableData.subscribe((data) => {
    console.log(data);
});
console.log("data Subscribed");

(function() {
    ([1,2,5,3,9,6,1,54,5]).forEach((val)=>{
        observableData.update(val)
    });
})();
