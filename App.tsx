import * as React from "react";
import Navigation from "./src/navigation";
import StoreProvider from "./src/store";

function App() {
  return (
    <StoreProvider>
      <Navigation />
    </StoreProvider>
  );
}

export default App;
