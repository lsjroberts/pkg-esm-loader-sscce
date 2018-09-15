export async function resolve(specifier, parentModuleUrl, defaultResolver) {
  if (specifier === "not-other") {
    return {
      url: new URL("other.mjs", new URL(`file://${process.cwd()}/`)).href,
      format: "esm"
    };
  } else {
    return defaultResolver(specifier, parentModuleUrl);
  }
}
