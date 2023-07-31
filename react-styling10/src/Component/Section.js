import "./Section/section.css"


function Section() {
    return (
        <section>
            <contain className='contain'>
                <div className='wr'>
                    <h2>Featured Categories</h2>
                    <p>Cake & Milk</p>
                    <p>Coffee & Tea</p>
                    <p>Pet Foods</p>
                    <p>Vegetables</p>
                    <div className="productlist">
                        <div className="product">
                            <h4>Red Apple</h4>
                            <h5>25 items</h5>
                        </div>
                        <div className="product">
                            <h4>Snack</h4>
                            <h5>25 items</h5>
                        </div>
                        <div className="product">
                            <h4>Vegetables</h4>
                            <h5>25 items</h5>
                        </div>
                        <div className="product">
                            <h4>Strawberry</h4>
                            <h5>25 items</h5>
                        </div>
                        <div className="product">
                            <h4>Black Plum</h4>
                            <h5>25 items</h5>
                        </div>
                        <div className="product">
                            <h4>Custard Apple</h4>
                            <h5>25 items</h5>
                        </div>
                        <div className="product">
                            <h4>Coffee and Tea</h4>
                            <h5>25 items</h5>
                        </div>
                        <div className="product">
                            <h4>Headphone</h4>
                            <h5>25 items</h5>
                        </div>
                        <div className="product">
                            <h4>Cake and Milk</h4>
                            <h5>25 items</h5>
                        </div>
                        <div className="product">
                            <h4>Organic Kiwi</h4>
                            <h5>25 items</h5>
                        </div>
                    </div>
                </div>
            </contain>
        </section>
    )
}

export default Section;