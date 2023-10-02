/* globals window */
export default () => {
    if (typeof window !== "undefined") {
        if (typeof window.process === "undefined") {
            window.process = {
                cwd: () => undefined,
            }
        }
    }
}
