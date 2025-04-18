# Node.js Event Documentation

## Events

- [Events](#events)
- [Passing arguments and this to listeners](#passing-arguments-and-this-to-listeners)
- [Asynchronous vs. synchronous](#asynchronous-vs-synchronous)
- [Handling events only once](#handling-events-only-once)
- [Error events](#error-events)
- [Capture rejections of promises](#capture-rejections-of-promises)

---

## Class: `EventEmitter`

- [Event: 'newListener'](#event-newlistener)
- [Event: 'removeListener'](#event-removelistener)
- [emitter.addListener(eventName, listener)](#emitteraddlistenereventname-listener)
- [emitter.emit(eventName[, ...args])](#emitteremiteventname-args)
- [emitter.eventNames()](#emittereventnames)
- [emitter.getMaxListeners()](#emittergetmaxlisteners)
- [emitter.listenerCount(eventName[, listener])](#emitterlistenercounteventname-listener)
- [emitter.listeners(eventName)](#emitterlistenerseventname)
- [emitter.off(eventName, listener)](#emitteroffeventname-listener)
- [emitter.on(eventName, listener)](#emitteroneventname-listener)
- [emitter.once(eventName, listener)](#emitteronceeventname-listener)
- [emitter.prependListener(eventName, listener)](#emitterprependlistenereventname-listener)
- [emitter.prependOnceListener(eventName, listener)](#emitterprependoncelistenereventname-listener)
- [emitter.removeAllListeners([eventName])](#emitterremovealllistenerseventname)
- [emitter.removeListener(eventName, listener)](#emitterremovelistenereventname-listener)
- [emitter.setMaxListeners(n)](#emittersetmaxlistenersn)
- [emitter.rawListeners(eventName)](#emitterrawlistenerseventname)
- [emitter[Symbol.for('nodejs.rejection')](err, eventName[, ...args])](#emittersymbolfornodejsrejectionerr-eventname-args)

---

## Events Module

- [events.defaultMaxListeners](#eventsdefaultmaxlisteners)
- [events.errorMonitor](#eventserrormonitor)
- [events.getEventListeners(emitterOrTarget, eventName)](#eventsgeteventlistenersemitterortarget-eventname)
- [events.getMaxListeners(emitterOrTarget)](#eventsgetmaxlistenersemitterortarget)
- [events.once(emitter, name[, options])](#eventsonceemitter-name-options)
- [Awaiting multiple events emitted on process.nextTick()](#awaiting-multiple-events-emitted-on-processnexttick)
- [events.captureRejections](#eventscapturerejections)
- [events.captureRejectionSymbol](#eventscapturerejectionsymbol)
- [events.listenerCount(emitter, eventName)](#eventslistenercountemitter-eventname)
- [events.on(emitter, eventName[, options])](#eventsonemitter-eventname-options)
- [events.setMaxListeners(n[, ...eventTargets])](#eventssetmaxlistenersn-eventtargets)
- [events.addAbortListener(signal, listener)](#eventsaddabortlistenersignal-listener)

---

## Class: `events.EventEmitterAsyncResource` extends `EventEmitter`

- [new events.EventEmitterAsyncResource([options])](#new-eventseventemitterasyncresourceoptions)
- [eventemitterasyncresource.asyncId](#eventemitterasyncresourceasyncid)
- [eventemitterasyncresource.asyncResource](#eventemitterasyncresourceasyncresource)
- [eventemitterasyncresource.emitDestroy()](#eventemitterasyncresourceemitdestroy)
- [eventemitterasyncresource.triggerAsyncId](#eventemitterasyncresourcetriggerasyncid)
