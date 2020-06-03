export class ParseStackError extends Error {
    constructor(code, message, originalString, structuredString) {
        super();
        this.originalString = originalString;
        this.structuredString = structuredString;
        this.message = `[parseStack/${code}] ` + message;
        this.code = code;
        this.name = `parseStack/${code}`;
    }
}
