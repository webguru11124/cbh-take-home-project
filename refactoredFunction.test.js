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
        expect(deterministicPartitionKey(event)).toBe("02c15d34f47cb2f1758f3c5a70b4c08aa6dd5c2d9d48f47fe543c0b9b4fd61c2494570ebf7a7bc9e6ed4b3f8f2f453b24e24751a2a4ed0f96d4c6991a5024c01");
    });

    test("handles non-string partition keys", () => {
        const event = { partitionKey: { id: 123 } };
        expect(deterministicPartitionKey(event)).toBe('{"id":123}');
    });

    test("handles long partition keys", () => {
        const event = { data: "a".repeat(300) };
        expect(deterministicPartitionKey(event)).toBe("352a68fc2c2273923e4b0431e3f0f1cdd4d1e59b625d9a71d40e2c048ef45f854e63fc2c46e14b4a4b925da49f82fcd275e34274accd8de617fc48e0e96f4e6c");
    });
});
