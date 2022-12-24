import "./index.css";
import { Desktop } from "./Views/Desktop";
import { render } from "preact";

// @ts-ignore
const isFirefox = typeof InstallTrigger !== "undefined";
const hidePrompt = localStorage.getItem("hidePrompt");

if (isFirefox && hidePrompt !== "true") {
  let open =
    confirm(`Hi, It looks like you're using Firefox. Sadly the lovely blur effect isn't avaiable in Firefox by default.
You may open the site in chrome instead or click OK to open a guide on how to enable blur in firefox.
`);
  if (open) {
    window
      .open("","_blank")
      ?.focus();
    localStorage.setItem("hidePrompt", "true");
  }
}
render(<Desktop />, document.getElementById("root")!);

