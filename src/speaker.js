import React from 'react';
import { Link } from 'react-router-dom';
import data from './products.json';
import './style/headp.css';

const Product = ({img, name, price, id, display, newp}) => {
    if(!display) {
        return <>
        <div className="row mb-4 d-flex flex-row bg-light gx-3 w-100">
            <div className="col-lg-6 col-4 d-flex justify-content-center overflow-hidden align-items-center" style={{maxHeight: '300px'}}>
                <img className="img-fluid" src={require(`./${img}`).default} alt={name}></img>
            </div>
            <div className="col-lg-6 col-8 align-content-center d-flex flex-wrap py-4">
                {newp && <span className="w-100 py-3 fs-5">NEW PRODUCT</span>}
                <h3 className="m-0" title={name}>{name}</h3>
                <strong className="fs-3 w-100 my-3">${price}</strong>
                <Link to={`/speakers/${id}`} className="text-decoration-none text-white py-2 px-3 seepr">SEE PRODUCT</Link>
            </div>
        </div>
        </>
    }else {
        return <>
    <div className="row mb-4 d-flex flex-row-reverse  bg-light gx-3 w-100">
        <div className="col-lg-6 col-4 d-flex justify-content-center overflow-hidden align-items-center" style={{maxHeight: '300px'}}>
            <img className="img-fluid" src={require(`./${img}`).default} alt={name}></img>
        </div>
        <div className="col-lg-6 col-8 align-content-center d-flex flex-wrap justify-content-end py-4">
            {newp && <span className="w-100 py-3 text-end fs-5">NEW PRODUCT</span>}
            <h3 className="m-0 text-end" title={name}>{name}</h3>
            <strong className="fs-3 w-100 my-3 text-end">${price}</strong>
            <Link to={`/speakers/${id}`} className="text-decoration-none text-white py-2 px-3 seepr">SEE PRODUCT</Link>
        </div>
    </div>
    </>
    }
}

const Speakers = function() {
    return <>
        <h1 className="p-5 w-100 text-center bg-dark text-white mb-4">SPEAKERS</h1>
        <section className="container-md all1 d-flex flex-wrap justify-content-center">
            {data && data.map(obj => {
                if(obj.type === "speakers") {
                    if(parseInt(obj.id)%2 === 0) {
                        return <Product img={obj.img}
                        id={obj.id}
                        name={obj.name}
                        price={obj.price}
                        key={obj.id}
                        display={true}
                        newp={obj.newp}
                        />
                    }else {
                        return <Product img={obj.img}
                        id={obj.id}
                        name={obj.name}
                        price={obj.price}
                        key={obj.id}
                        display={false}
                        newp={obj.newp}
                        />
                    }
                }else {
                    return null;
                }
            })}
        </section>
    </>
}

export { Speakers}