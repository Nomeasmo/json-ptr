Tinytest.add('JsonPointer is exported by package.js', function (test) {
    test.instanceOf(JsonPointer, Object);
});
Tinytest.add('JsonPointer is is working (basic access only)', function (test) {
    var p = JsonPointer.create('/a/b'),
        data = {
            a: {
                a: "a.a",
                b: "a.b"
            }
        };

    test.equal(p.get(data), data.a.b);
});
