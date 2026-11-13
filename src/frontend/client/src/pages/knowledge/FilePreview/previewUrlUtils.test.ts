import { resolveKnowledgePreviewUrl } from "./previewUrlUtils";

const signature = "?X-Amz-Credential=test%2Fdate%2Fs3&X-Amz-Signature=abc%2B123#page=2";

describe("knowledge object-storage routing", () => {
    beforeEach(() => {
        __APP_ENV__.BASE_URL = "/workspace";
    });

    it.each([
        "/doberman_agent/original/4.pdf",
        "/doberman_agent/preview/5.pdf",
        "/doberman_agent/original/test.docx",
        "/doberman_agent/original/test.xlsx",
        "/doberman_agent/preview/test.md",
        "/doberman_agent/preview/test.html",
        "/doberman_agent/original/test.png",
        "/doberman_agent/original/test.txt",
        "/doberman_agent/original/test.mp4",
        "/tmp-dir/test.csv",
    ])("routes %s through the origin bucket proxy and preserves the signature", (path) => {
        const expected = path + signature;
        for (const input of [path, `/workspace${path}`, `/workspace/workspace${path}`,
            `http://storage.internal:9000${path}`, path.slice(1)]) {
            const resolved = resolveKnowledgePreviewUrl(input + signature);
            expect(resolved).toBe(expected);
            expect(resolveKnowledgePreviewUrl(resolved)).toBe(expected);
        }
    });

    it.each([
        "https://documents.example.org/report.pdf?download=1",
        "/api/v1/files/4/content",
        "/workspace/assets/sample.pdf",
        "/custom-bucket/report.pdf",
        "blob:http://localhost/1234",
        "data:application/pdf;base64,JVBERg==",
        "",
    ])("preserves the resource's own URL: %s", (url) => {
        expect(resolveKnowledgePreviewUrl(url)).toBe(url);
    });

    it.each(["/workspace/", "/chat", ""])('supports application base "%s"', (base) => {
        __APP_ENV__.BASE_URL = base;
        expect(resolveKnowledgePreviewUrl("/doberman_agent/original/4.pdf")).toBe("/doberman_agent/original/4.pdf");
        if (base) {
            expect(resolveKnowledgePreviewUrl(`${base.replace(/\/$/, "")}/tmp-dir/file.pdf`))
                .toBe("/tmp-dir/file.pdf");
        }
    });
});
