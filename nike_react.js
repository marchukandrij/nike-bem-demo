// Using React components

const Button = props => {
    let btnClass = "button";
    if (props.big) {
        btnClass += " button--big";
    }
    return (
        <div className={btnClass}>
            {props.title}
            {props.dropdown && <img src="images/icon-dropdown.svg" />}
        </div>
    );
};

const Stars = props => {
    const starClassFor = index => {
        let res = "stars__one";
        if (index > props.rate) {
            res += " stars__one--gray";
        }
        return res;
    };
    return (
        <div className="stars">
            <div className={starClassFor(1)}></div>
            <div className={starClassFor(2)}></div>
            <div className={starClassFor(3)}></div>
            <div className={starClassFor(4)}></div>
            <div className={starClassFor(5)}></div>
        </div>
    );
};

const Product = props => {
    return (
        <div class="product">
            <div className="product__title">{props.title}</div>
            <div className="product__subtitle">{props.subtitle}</div>
            <div className="product__stars">
                <Stars rate={props.rate} />
            </div>
            <div className="product__options">
                <Button title="Size" dropdown={true} />
                <Button title="Qty" dropdown={true} />
            </div>
            <div className="product__buy">
                <Button title="Add to cart" big={true} />
            </div>
        </div>
    );
};

const SliderDot = props => {
    let dotClass = "slider__dot";
    if (props.color == "blue") {
        dotClass += " slider__dot--blue";
    }
    if (props.color == "red") {
        dotClass += " slider__dot--red";
    }
    if (props.color == "aqua") {
        dotClass += " slider__dot--aqua";
    }
    if (props.active) {
        dotClass += " slider__dot--active";
    }
    return (
        <div className={dotClass}>
            <svg height="14" width="14">
                <circle cx="7" cy="7" r="4.5" fill="white" />
            </svg>
        </div>
    );
};

const Slider = props => {
    return (
        <div class="slider">
            <img class="slider__image" src={props.imageUrl} />
            <div class="slider__dots">
                <SliderDot color="blue" active={true} />
                <SliderDot color="white" />
                <SliderDot color="red" />
                <SliderDot color="aqua" />
            </div>
        </div>
    );
};

const Card = props => {
    let cardClass = "card";
    if (props.tall) {
        cardClass += " card--tall";
    }
    return (
        <div className={cardClass}>
            <div className="card__images">
                <Slider imageUrl={props.imageUrl} />
            </div>
            <div className="card__description">
                <Product title={props.title} subtitle={props.subtitle} rate={props.rate} />
            </div>
            <img className="card__logo" src="images/logo.png" alt="Nike" />
        </div>
    );
};

const NikeBg = props => {
    return (
        <div className="nike-bg">
            <div className="nike-bg__card">{props.child}</div>
        </div>
    );
};

// making blocks
let card = (
    <Card
        imageUrl="images/Nike-SB-Stefan-Janoski-Max.png"
        title="Nike SB Stefan Janoski Max"
        subtitle="Unisex Skateboarding Shoe"
        rate={3}
        tall={true}
    />
);
let nikeBlock = <NikeBg child={card} />;

// Final render
const rootElement = document.querySelector("#root");
ReactDOM.render(nikeBlock, rootElement);
