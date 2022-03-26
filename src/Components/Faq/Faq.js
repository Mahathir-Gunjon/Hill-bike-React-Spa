import React from 'react';

const Faq = () => {
    return (
        <div>
            <div className="accordion container py-5" id="accordionPanelsStayOpenExample">
                <h3 className='display-5 fw-bold text-dark text-center my-5'>Frequently Asked Question</h3>
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

            </div>
        </div>
    );
};

export default Faq;