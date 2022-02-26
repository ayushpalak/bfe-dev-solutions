// There is Event Emitter in Node.js, Facebook once had its own implementation but now it is archived.

// You are asked to create an Event Emitter Class

// const emitter = new Emitter()
// It should support event subscribing

// const sub1  = emitter.subscribe('event1', callback1)
// const sub2 = emitter.subscribe('event2', callback2)

// // same callback could subscribe 
// // on same event multiple times
// const sub3 = emitter.subscribe('event1', callback1)
// emit(eventName, ...args) is used to trigger the callbacks, with args relayed

// emitter.emit('event1', 1, 2);
// // callback1 will be called twice
// Subscription returned by subscribe() has a release() method that could be used to unsubscribe

// sub1.release()
// sub3.release()
// now even if we emit 'event1' again, 
// callback1 is not called anymore


// Optimization : We can store callbacks in Map instead of array like { callback }. Wrapping in object makes it a unique key in map.
class EventEmitter {
    constructor() {
        this.eventsToCallbacksMap = {}
    }
    subscribe(eventName, callback) {
        // maintain an array of cb for every event.
        if (this.eventsToCallbacksMap[eventName]) {
            this.eventsToCallbacksMap[eventName].push(callback);
        } else {
            this.eventsToCallbacksMap[eventName] = [callback];
        }

        // bind the retuned object release with current eventName
        return {
            release: () => this.release(eventName, callback)
        }
    }

    release(eventName, callback) {
        // find the index of cb in listeners array for that event and remove it.

        const cbIndex = this.eventsToCallbacksMap[eventName]?.findIndex(attachedCb => attachedCb === callback);
        this.eventsToCallbacksMap[eventName]?.splice(cbIndex, 1)
    }

    emit(eventName, ...args) {
        console.log("emit this", this)
        // call all the cb for a particular event from listener array.
        if (this.eventsToCallbacksMap[eventName]) {
            this.eventsToCallbacksMap[eventName].forEach(function(cb) {
                console.log("cb this", this)
                cb(...args);
            });
        }
    }
}

const obj = {
    name: "Ayush",
    sayMyName: () => {
        console.log(this)
    }
}

const emitter = new EventEmitter()
const sub1 = emitter.subscribe('event1', obj.sayMyName)
// const sub2 = emitter.subscribe('event2', (...args) => console.log("cb2", args))

emitter.emit('event1', 1, 2)
