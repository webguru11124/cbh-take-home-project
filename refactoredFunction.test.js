const { deterministicPartitionKey } = require("./refactoredFunction");
const crypto = require("crypto");
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
        const test_result = crypto.createHash("sha3-512").update(JSON.stringify(event) || "").digest("hex");
        expect(deterministicPartitionKey(event)).toBe(test_result);
    });

    test("handles non-string partition keys", () => {
        const event = { partitionKey: { id: 123 } };
        expect(deterministicPartitionKey(event)).toBe('{"id":123}');
    });

    test("handles long partition keys", () => {
        const event = { data: "a".repeat(300) };
        const test_result = crypto.createHash("sha3-512").update(JSON.stringify(event) || "").digest("hex");
        expect(deterministicPartitionKey(event)).toBe(test_result);
    });
});
