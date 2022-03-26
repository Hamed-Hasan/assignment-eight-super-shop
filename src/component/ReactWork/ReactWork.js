import React from 'react';
import './React.css';

// react reviews component 
const ReactWork = () => {
    return (
        <div>
            <div className="container">
    <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
        
        <h1 className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg pt-5 mt-4">Rect JS Reviews</h1>
    </div>
    <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
        <li>
          <img src="https://user-images.githubusercontent.com/47307889/116921331-826bbe80-ac5c-11eb-9f48-d8fbde144b04.png" className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <h4 className="font-cond case-u lts-sm fs-80 fg-text-l">How Does React Work</h4>
          <p className="fs-110 font-cond-l">" At its very core. Reactjs is an open-source, component-based front end library responsible only for the view layer of the application. it is maintained by Facebook. React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when data changes."</p>
         
        </li>
        <li>
          <img src="https://cdn.educba.com/academy/wp-content/uploads/2019/11/React-State-vs-Props-1.png" className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <h4 className="font-cond case-u lts-sm fs-80 fg-text-l">Props vs State</h4>
          <p className="fs-110 font-cond-l"><b>Props</b> on the other hand,make components reusable by giving component in the form of props. They are equivalent to function parameters. can not change its value props are readonly " <br />
          <b>State</b> is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. can change its value in code, but it would be active when a render happens
          "</p>
          
          
        </li>
        <li>
          <img src="https://daveceddia.com/images/useState-hook.png" className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <h4 className="font-cond case-u lts-sm fs-80 fg-text-l">How Does useState work</h4>
          <p className="fs-110 font-cond-l">"The useState() is a Hook that allows to have state variables in functional components. React has two types of components, one is class components which ES6 clasess that extend from React and the other is functional components. Class components a component and can have state and lifecycle methods: class Message extends REact. The useState() hook is a special function that takes the initial state as an argument and Returns an array of two entries. "</p>
          
        </li>
      </ul>
            </div>
        </div>
    );
};

export default ReactWork;