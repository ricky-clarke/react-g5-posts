import Header from "../../components/header/header.component"

const Test = () => {


  return (
    <div className="content">
           <Header  pageTitle={'Built using'} displayToggle={false}/>

            <ul>
            <li><h2>Components</h2></li>
              <li><h2>Fetch</h2></li>
              <li><h2>State</h2></li>
              <li><h2>Routing</h2></li>
              <li><h2>Custom Hook</h2></li>
              <li><h2>Local Storage</h2></li>
            </ul>

    </div>
  )
}

export default Test