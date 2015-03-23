Tinytest.add('jsonPtr helper is working', function (test) {
    var data = {
            a: {
                a: "a.a",
                b: "a.b"
            }
        };
    test.equal(Blaze.toHTMLWithData(Template.basicUse, data), data.a.b);
});

Tinytest.add('jsonPtr helper can be used in block helper', function (test) {
    var html,
        data = {
            a: {
                aDefined: true,
                a: "a.a",
                b: "a.b"
            }
        };
    html = Blaze.toHTMLWithData(Template.blockUse, data);
    test.equal(html.trim(), data.a.b);
});
