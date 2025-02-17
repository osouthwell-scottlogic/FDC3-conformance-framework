import { assert, expect } from "chai";
import APIDocumentation from "../../apiDocuments";
import { DesktopAgent } from "../../../../node_modules/fdc3_1_2/dist/api/DesktopAgent";

const getSystemChannelDocs =
  "\r\nDocumentation: " + APIDocumentation.getSystemChannels + "\r\nCause";

export default () =>
  describe("fdc3.getSystemChannels", () => {
    it("Method is callable", async () => {
      try {
        await (<DesktopAgent>window.fdc3).getSystemChannels();
      } catch (ex) {
        assert.fail(getSystemChannelDocs + (ex.message ?? ex));
      }
    });
  });
