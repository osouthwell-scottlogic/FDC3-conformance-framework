import { ResolveError } from "fdc3_1_2";
import { assert, expect } from "chai";
import APIDocumentation from "../../apiDocuments";
import { DesktopAgent } from "../../../../node_modules/fdc3_1_2/dist/api/DesktopAgent";

const docs =
  "\r\nDocumentation: " +
  APIDocumentation.raiseIntentForContext +
  "\r\nCause: ";

export default () =>
  describe("fdc3.raiseIntentForContext", async () => {
    it("Method is callable", async () => {
      const context = {
        type: "ThisContextDoesNotExist",
        name: "Name",
        id: {
          ticker: "ticker",
          ISIN: "US0378331005",
          CUSIP: "037833100",
          FIGI: "BBG000B9XRY4",
        },
      };

      try {
        await (<DesktopAgent>window.fdc3).raiseIntentForContext(context);
        assert.fail("Expected error NoAppsFound not thrown", docs);
      } catch (ex) {
        expect(ex).to.have.property("message", ResolveError.NoAppsFound, docs);
      }
    });
  });
