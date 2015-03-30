# json-ptr [![Build Status](https://travis-ci.org/flitbit/json-ptr.png)](http://travis-ci.org/flitbit/json-ptr)

A complete implementation of JSON Pointer (RFC 6901) for nodejs and modern browsers.
Made accessible to Meteor.

This is a fork of [json-ptr](https://github.com/flitbit/json-ptr)

Please refer to this project for the syntax.


## Installation

`meteor add xx:json-ptr`

## Example

This Meteor package also adds the global JsonPtr to client and server.

```javascript
    var p = JsonPointer.create('/a/b'),
        data = {
            a: {
                aDefined: true,
                a: "a.a",
                b: "a.b"
            }
        };

    test.equal(p.get(data), data.a.b);

```

Or using it in templates solely or within template helpers to safely access data.

```html
<template name="basicUse">
    {{jsonPtr this "/a/b"}}
</template>

<template name="blockUse">
    {{#if jsonPtr this "/a/aDefined"}}
        {{jsonPtr this "/a/b"}}
    {{/if}}
</template>
```