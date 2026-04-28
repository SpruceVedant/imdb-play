import { build } from "esbuild";
import { mkdirSync, writeFileSync, chmodSync } from "fs";
import { execFileSync } from "child_process";
import path from "path";

const appName = process.platform === "win32" ? "imdb-play.exe" : "imdb-play";

mkdirSync("dist", { recursive: true });

await build({
  entryPoints: ["index.js"],
  bundle: true,
  platform: "node",
  target: "node25",
  format: "cjs",
  outfile: "dist/bundle.cjs"
});

writeFileSync(
  "sea-config.json",
  JSON.stringify(
    {
      main: "dist/bundle.cjs",
      output: `dist/${appName}`,
      disableExperimentalSEAWarning: true
    },
    null,
    2
  )
);

execFileSync(process.execPath, ["--build-sea", "sea-config.json"], {
  stdio: "inherit"
});

if (process.platform !== "win32") {
  chmodSync(path.join("dist", appName), 0o755);
}

console.log(`Built successfully: dist/${appName}`);