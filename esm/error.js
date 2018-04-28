export function createError(code, message, priorError) {
    const messagePrefix = `[${code}] `;
    const e = new AppError(!priorError ? messagePrefix + message : messagePrefix + priorError.message + message);
    e.name = priorError ? priorError.name : "AppError";
    e.code = code;
    e.stack = priorError ? priorError.stack || e.stack.slice(1) : e.stack.slice(1);
    return e;
}
export class AppError extends Error {
}