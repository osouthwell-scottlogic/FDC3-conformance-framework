import { assert, expect } from "chai";
import APIDocumentation from "../../apiDocuments";
import { DesktopAgent } from "../../../../node_modules/fdc3_1_2/dist/api/DesktopAgent";

const getCurrentChannelDocs =
  "\r\nDocumentation: " + APIDocumentation.getCurrentChannel + "\r\nCause";

export default () =>
  describe("fdc3.getCurrentChannel", () => {
    it("Method is callable", async () => {
      try {
        await (<DesktopAgent>window.fdc3).getCurrentChannel();
      } catch (ex) {
        assert.fail(getCurrentChannelDocs + (ex.message ?? ex));
      }
    });

    it("getCurrentChannel() returns null if no channel has been joined", async () => {
      try {
        const channel = await (<DesktopAgent>window.fdc3).getCurrentChannel();
        expect(channel).to.be.null;
      } catch (ex) {
        assert.fail(getCurrentChannelDocs + (ex.message ?? ex));
      }
    });
  });
