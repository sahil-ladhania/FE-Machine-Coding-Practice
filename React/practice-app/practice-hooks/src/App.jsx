import './App.css'
import CleanupOrderDemo from './useEffect_2/CleanupOrderDemo';
import DependencyTrapDemo from './useEffect_2/DependencyTrapDemo';
import EffectTimingDemo from './useEffect_2/EffectTimingDemo';
import RaceConditionDemo from './useEffect_2/RaceConditionDemo';
import StrictModeDemo from './useEffect_2/StrictModeDemo';
import ExpensiveComputeDemo from './useMemo_4/ExpensiveComputeDemo';
import ParentWithMemo from './useMemo_4/ParentWithMemo';
import DOMRefTimingDemo from './useRef_3/DOMRefTimingDemo';
import RefVsStateDemo from './useRef_3/RefVsStateDemo';
import BatchingDemo from './useState_1/BatchingDemo';
import LazyInitDemo from './useState_1/LazyInitDemo';
import LoopStateDemo from './useState_1/LoopStateDemo';
import ObjectStateDemo from './useState_1/ObjectStateDemo';
import StaleClosureDemo from './useState_1/StaleClosureDemo';

function App() {
  return (
    <>
      <div>
        {/* useState Learnings */}
          {/* <BatchingDemo/> */}
          {/* <StaleClosureDemo/> -----> IMP */}
          {/* <ObjectStateDemo/> */}
          {/* <LazyInitDemo/> */}
          {/* <LoopStateDemo/> ----> IMP */}

        {/* useEffect */}
          {/* <EffectTimingDemo/> */}
          {/* <DependencyTrapDemo/> -----> IMP */}
          {/* <CleanupOrderDemo/> */}
          {/* <RaceConditionDemo/> */}
          {/* <StrictModeDemo/> */}

          {/* useRef */}
            {/* <RefVsStateDemo/> */}
            {/* <DOMRefTimingDemo/> */}

          {/* useMemo */}
            {/* <ExpensiveComputeDemo/> */}
            {/* <ParentWithMemo/> */}
      </div>
    </>
  )
}

export default App;