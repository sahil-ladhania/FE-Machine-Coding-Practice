import './App.css'
import MultipleAccordionComponent from './components/accordion-component/MultipleAccordionComponent.tsx'
import SingleAccordionComponent from './components/accordion-component/SingleAccordionComponent.tsx'
import { items } from './mock-data/accordion.ts'
import TabsComponent from './components/tabs-component/TabsComponent.tsx'
import StarRatingComponent from './components/star-rating-component/StarRatingComponent.tsx'
import TodosComponent from './components/todo-component/TodosComponent.tsx'
import ProgressBarComponent from './components/progress-bar-component/ProgressBarComponent.tsx'

function App() {  
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-96">
          {/* <SingleAccordionComponent data={items}/> */}
          {/* <MultipleAccordionComponent data={items}/> */}
          {/* <TabsComponent/> */}
          {/* <StarRatingComponent/> */}
          {/* <TodosComponent/> */}
          {/* <ProgressBarComponent/> */}
        </div>
      </div>
    </>
  )
}

export default App