import React from 'react';

const Faq = () => {
    return (
        <div>
            <div className="accordion container py-5" id="accordionPanelsStayOpenExample">
                <h3 className='display-5 fw-bold text-dark text-center my-5'>Frequently Asked Question</h3>
                {/* react work */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <h4>How React works?</h4>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            <strong>React</strong> is a JavaScript library for building user interfaces.React creates SPA(single page application). SPA doesn't reload the Whole web app or refresh the page.
                            <br />
                            React Keeps a  virtual DOM to compare changes. When users interact on the site, it will use the virtual representation of it. Virtual dom finds the minimum changes that need to change. then it replaces the DOM with virtual DOM and renders the new update to UI.
                        </div>
                    </div>
                </div>
                {/* How useState works */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <h4>How useState works?</h4>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            <strong>useState</strong> could be a Hook that permits you to possess state variables in practical parts. You pass the initial state the present operate and it returns a variable with the current state worth and another operate to update this worth.
                            <br />
                            First count variable is initialized with a random variety employing a random operate and setRandomCount is employed for change the state of the count. when we tend to click on the button onClick it calls the clickHandler operate that sets the count variable once more with a random variety.
                        </div>
                    </div>
                </div>
                {/* Difference between State and Props */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <h4>Difference between State and Props</h4>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            <strong>useState</strong> is Associate in Nursing updatable structure that's wont to contain information or info concerning the element and might modification over time. The modification in state will happen as a response to user action or system event. it's the center of the react element that determines the behavior of the element and the way it'll render. A state should be unbroken as easy as doable. It represents the component's native state or info. It will solely be accessed or changed within the element or by the element directly.
                            <br />
                            <br />
                            <strong>Props</strong> are read-only parts. it's associate object that stores the worth of attributes of a tag and work just like the HTML attributes. It permits passing knowledge from one element to alternative parts. it's just like operate arguments and may be passed to the element an equivalent manner as arguments passed during a operate. Props ar changeless therefore we have a tendency to cannot modify the props from within the element.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Faq;