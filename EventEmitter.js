/**
 * EventEmitter - a basic JavaScript event handler
 */
 (function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["EventEmitter"], factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory();
    } else {
        root.EventEmitter = factory();
    }
}(this, function(undefined) {

    /**
     * @constructor
     */
    var EventEmitter = function() {

        /**
         * holds all events with their respective event handlers
         *
         * @type {Object}
         */
        this.oEvents = {};
    };

    /**
     * bind callbacks you want to invoke on emit of a specific event name
     *
     * @param   {String}   sEventName - event name
     * @param   {Function} eventHandler - event handler function
     *
     * @returns {EventEmitter}
     */
    EventEmitter.prototype.on = function(sEventName, eventHandler) {
        if (typeof sEventName !== 'string' || sEventName.trim() === '') {
            throw new TypeError('sEventName argument is not of a valid type or empty');
        }

        if (typeof eventHandler !== 'function') {
            throw new TypeError('eventHandler argument is not a function');
        }

        if (!this.oEvents[sEventName]) {
            this.oEvents[sEventName] = [];
        }
        
        this.oEvents[sEventName].push(eventHandler);

        return this;
    };

    /**
     * emit event callbacks by event name
     *
     * @param   {String}  sEventName the event name you want to emit
     * @param   {Generic} gData      any kind of additional data you want to transfer to the eventHandler function
     *
     * @returns {EventEmitter}
     */
    EventEmitter.prototype.emit = function(sEventName, gData) {

        if (typeof sEventName !== 'string' || sEventName.trim() === '') {
            throw new TypeError('sEventName argument is not of a valid type or empty');
        }

        if (this.oEvents[sEventName]) {
            this.oEvents[sEventName].forEach(function(eventHandler) {
                eventHandler(gData);
            });
        }

        return this;
    };

    return EventEmitter;
}));