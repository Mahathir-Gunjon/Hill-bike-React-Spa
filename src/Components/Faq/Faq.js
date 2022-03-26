import React from 'react';

const Faq = () => {
    return (
        <div>
            <div className="accordion container-fluid w-50 py-5" id="accordionPanelsStayOpenExample">
                <h3 className='display-5 fw-bold text-dark text-center my-5'>Frequently Asked Question</h3>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            How React works?
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
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Faq;