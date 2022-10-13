import Test from "./test";

const root: HTMLElement | null = document.getElementById("root");

const test = new Test("testです。表示できていますか");
test.sayText(root);
