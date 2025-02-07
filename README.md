 How are components, props and state are working specifically in this Tic Tac toe app.<br/>
 
 -State is stored and shared in the main Board component and then from there it is pass back down to the  
 children via props e.g. handleClick, keeping the child components in sync with one another and their parent <br/>
 Also the squares in the state of the Board component is updated, so the Board and all of its children re-render. This causes the value prop of the Square component with an index to change from null to X