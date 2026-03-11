import { HireFlow } from "./pages/HireFlow";
import HireFlowProvider from "./context/HireFlowContext";

function App() {
  return (
    <HireFlowProvider>
      <HireFlow />
    </HireFlowProvider>
  )
}

export default App;