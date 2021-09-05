import { Component, React, useState } from 'react';
import Modal from 'react-modal';

function Drink(props) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    let [modalIsOpen, setIsOpen] = useState(false);
    let subtitle;
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    // render() {
    return (
        <div id={'drink' + props.id}>
            <div className="row">
                <div onClick={openModal} className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-12">
                            <img src={props.image} alt='Drink_image' style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <label>{props.name}</label>
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="container-fluid modalElement">
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={props.image} alt='Drink_image' style={{ width: '100%' }} />

                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-12">
                                    <b>Instructions</b>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <label>
                                        {props.instructions}
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <b>Glass</b>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    Serve:{props.glass}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <button onClick={closeModal}>close</button>

            </Modal>
        </div >
    );
    // }
}

function DrinkList(props) {
    return (
        <div >
            <div className="row">
                <div className="col-sm-5 col-*-offset-4">
                    <input type="text" id="search" />
                    <button type="button" className="fa fa-search" onClick={() => { props.drinkLoader() }}>Search</button>
                </div>
            </div>
            {props.myDrinks.length ?
                (<div className="row">
                    {props.myDrinks.map((drk, idx) => {
                        return (
                            <div key={idx} className="col-sm-4">
                                <Drink id={idx}
                                    image={drk.strDrinkThumb}
                                    name={drk.strDrink}
                                    glass={drk.strGlass}
                                    instructions={drk.strInstructions}>
                                </Drink>
                            </div>)
                    })}
                </div>)
                : (<div>Loading drinks...</div>)
            }
        </div>
    )
}
export { Drink, DrinkList };