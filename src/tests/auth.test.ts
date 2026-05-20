import { getAPIKey } from "../api/auth.js";
import { describe, it, expect } from "vitest";

describe("getAPIKey", () => {
  it("returns null when authorization header is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  it("returns null when scheme is not ApiKey", () => {
    expect(getAPIKey({ authorization: "Bearer token123" })).toBeNull();
  });

  it("returns the API key when header is correctly formatted", () => {
    expect(getAPIKey({ authorization: "ApiKey my-secret-key" })).toBe("my-secret-key");
  });
});