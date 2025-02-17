import { Listener } from "fdc3_1_2";
import { assert, expect } from "chai";
import APIDocumentation from "../../apiDocuments";
import { DesktopAgent } from "../../../../node_modules/fdc3_1_2/dist/api/DesktopAgent";

export default () =>
  describe("fdc3.addIntentListener", () => {
    let listener: Listener;

    afterEach(() => {
      if (listener !== undefined) {
        listener.unsubscribe();
        listener = undefined;
      }
    });

    it("Method is callable", async () => {
      const intentName = "fdc3.conformanceListener";
      try {
        listener = await (<DesktopAgent>window.fdc3).addIntentListener(
          intentName,
          (info: any) => {
            console.log(
              `Intent listener for intent ${intentName} triggered with result ${info}`
            );
          }
        );
        expect(listener).to.have.property("unsubscribe").that.is.a("function");
      } catch (ex) {
        assert.fail(
          "\r\nDocumentation: " +
            APIDocumentation.addIntentListener +
            "\r\nCause" +
            (ex.message ?? ex)
        );
      }
    });
  });
