import {
  platformNativeScript,
  runNativeScriptAngularApp,
} from "@nativescript/angular";

import { AppModule } from "./app/app.module";

import { knownFolders } from "@nativescript/core/file-system";
import * as Https from "nativescript-https";

const dir = knownFolders.currentApp().getFolder("certs");
const certificate = dir.getFile("marvin.cer").path;
Https.enableSSLPinning({
  host: "https://192.168.86.243:8443",
  certificate: certificate,
  allowInvalidCertificates: true,
  validatesDomainName: false,
});

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
