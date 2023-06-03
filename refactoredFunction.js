const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
    const TRIVIAL_PARTITION_KEY = "0";
    const MAX_PARTITION_KEY_LENGTH = 256;

    // Generate the candidate partition key
    let candidate = event && (event?.partitionKey || crypto.createHash("sha3-512").update(JSON.stringify(event) || "").digest("hex"));

     // Check if candidate is not a string and stringify it
    if (candidate && typeof candidate !== "string") {
        candidate = JSON.stringify(candidate);
    }

    // Set candidate to TRIVIAL_PARTITION_KEY if it is falsy
    candidate = candidate || TRIVIAL_PARTITION_KEY;

    // Check if candidate exceeds MAX_PARTITION_KEY_LENGTH and hash it if necessarys
    if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
        candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
    }

    // Return the final candidate partition key
    return candidate;
};
