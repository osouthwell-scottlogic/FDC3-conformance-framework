import { OpenError } from "@finos/fdc3";

const ExpectedErrorNotThrownError = "Expected error AppNotFound not thrown";

export default () =>
  describe("fdc3.open", () => {
    it("Can open dummy app with no context and string as target", async () => {
      try {
        await window.fdc3.open("Dummy");
      } catch (ex) {
        throw new Error("App could not be opened");
      }
    });

    it("Can open dummy app with no context and AppMetadata (name) as target", async () => {
      try {
        await window.fdc3.open({ name: "Dummy" });
      } catch (ex) {
        throw new Error("App could not be opened");
      }
    });

    it("Can open dummy app with no context and AppMetadata (name and appId) as target", async () => {
      try {
        await window.fdc3.open({ name: "Dummy", appId: "Dummy" });
      } catch (ex) {
        throw new Error("App could not be opened");
      }
    });

    it("Receive AppNotFound error when targeting non-existent app name as target", async () => {
      try {
        await window.fdc3.open("ThisAppDoesNotExist");
        throw new Error(ExpectedErrorNotThrownError);
      } catch (ex) {
        if ((ex.message ?? ex) !== OpenError.AppNotFound) {
          throw new Error(
            ExpectedErrorNotThrownError +
              "\nException thrown: " +
              (ex.message ?? ex)
          );
        }
      }
    });

    it("Receive AppNotFound error when targeting non-existent app AppMetadata (name) as target", async () => {
      try {
        await window.fdc3.open({ name: "ThisAppDoesNotExist" });
        throw new Error(ExpectedErrorNotThrownError);
      } catch (ex) {
        if ((ex.message ?? ex) !== OpenError.AppNotFound) {
          throw new Error(
            ExpectedErrorNotThrownError +
              "\nException thrown: " +
              (ex.message ?? ex)
          );
        }
      }
    });

    it("Receive AppNotFound error when targeting non-existent app AppMetadata (name and appI) as target", async () => {
      try {
        await window.fdc3.open({
          name: "ThisAppDoesNotExist",
          appId: "ThisAppDoesNotExist",
        });
        throw new Error(ExpectedErrorNotThrownError);
      } catch (ex) {
        if ((ex.message ?? ex) !== OpenError.AppNotFound) {
          throw new Error(
            ExpectedErrorNotThrownError +
              "\nException thrown: " +
              (ex.message ?? ex)
          );
        }
      }
    });

    it("Can open dummy app with context and AppMetadata (name) as target", async () => {
      try {
        await window.fdc3.open(
          { name: "Dummy" },
          { name: "context", type: "fdc3.testReceiver" }
        );
      } catch (ex) {
        throw new Error("App could not be opened");
      }
    });

    it("Can open dummy app with invalid context and AppMetadata (name) as target", async () => {
      try {
        await window.fdc3.open(
          { name: "Dummy" },
          { name: "context", type: "fdc3.thisIsNotAValidContext" }
        );
        throw new Error(ExpectedErrorNotThrownError);
      } catch (ex) {
        if ((ex.message ?? ex) !== OpenError.AppNotFound) {
          throw new Error(
            ExpectedErrorNotThrownError +
              "\nException thrown: " +
              (ex.message ?? ex)
          );
        }
      }
    });
  });
