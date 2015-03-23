Meteor.startup(function () {
    UI.registerHelper('jsonPtr', function (data, path) {
        console.log("a")
        var p = JsonPointer.create(path);
        console.log("a")
        if (data) {
            console.log("a")
            return p.get(data);
        }
        return this;
    });
});
