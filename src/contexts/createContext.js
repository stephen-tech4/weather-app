import React from "react";

/** Create a named context, provider and useContext hook
 * Usage:
 * const [ThemeProvider, useThemeContext] = createContext("Theme")
 */
function createContext(name) {
  const Context = React.createContext();
  Context.displayName = name;

  function useContext() {
    const context = React.useContext(Context);

    if (!context)
      throw new Error(
        "You have forgotten to wrap your component within the Provider"
      );

    return context;
  }

  return [Context.Provider, useContext, Context];
}

export default createContext;
