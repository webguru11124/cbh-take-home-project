const { deterministicPartitionKey } = require("./refactoredFunction");

describe("deterministicPartitionKey", () => {
    test("returns trivial partition key when event is null", () => {
        expect(deterministicPartitionKey(null)).toBe("0");
    });

    test("returns event's partition key when it exists", () => {
        const event = { partitionKey: "abc123" };
        expect(deterministicPartitionKey(event)).toBe("abc123");
    });

    test("returns hash of event when partition key is not provided", () => {
        const event = { data: "example" };
        expect(deterministicPartitionKey(event)).toBe("1eeac9a5fc3f4c6ec1e089cf4bf4f95144a972940be799c1e4f3c911b10ce4eef2fc5d8314b5289a83828483da07304eaf5d3d49dec7ec4f8aa21c5f5c2d637d");
    });

    test("handles non-string partition keys", () => {
        const event = { partitionKey: { id: 123 } };
        expect(deterministicPartitionKey(event)).toBe('{"id":123}');
    });

    test("handles long partition keys", () => {
        const event = { data: "a".repeat(300) };
        expect(deterministicPartitionKey(event)).toBe("1b11e130de9dc33f4216bf04c8c31e463f521f24dae94932c746a7b10f1d5f7d3af487fd1ff9fc25e9b7940ff38e118f0878f11a04a0fc22dc1286a3f41ec63d");
    });
});
