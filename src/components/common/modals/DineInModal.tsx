import React from 'react'
import Modal from 'react-modal'
import { FaArrowCircleLeft, FaAngleDoubleRight } from 'react-icons/fa'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('main') as HTMLElement)

const DineInModal = () => {
    const [modalIsOpen, setIsOpen] = React.useState(true)
    const [isPax, setIsPax] = React.useState(true)

    // function openModal() {
    //     setIsOpen(true)
    // }

    function toggleIsPax(togglePax: boolean) {
        setIsPax(togglePax)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
                isOpen={modalIsOpen}
                //onAfterOpen={afterOpenModal}
                //onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Dine-In Modal"
                portalClassName="dinein-modal"
                overlayClassName="dinein-modal-overlay"
                className="dinein-modal-content"
                //bodyOpenClassName="body-Open-ClassName"
                //htmlOpenClassName="html-Open-ClassName"
            >
                <div className="dinein-modal-body">
                    {isPax || (
                        <FaArrowCircleLeft
                            onClick={() => toggleIsPax(true)}
                            size={28}
                            color="rgb(217 167 71 / 63%)"
                            className="dinein-modal__close"
                        />
                    )}

                    <img
                        className="dinein-modal__logo"
                        src="./images/Logo.png"
                        alt="logo"
                    />

                    <form className="dinein-modal__form">
                        <div
                            className={`dinein-modal__pax-form ${
                                isPax || 'order-now-step'
                            }`}
                        >
                            <div className="dinein-modal__form-input">
                                <label
                                    className="label-dinein"
                                    htmlFor="no-pax"
                                >
                                    No. of Pax
                                </label>
                                <input
                                    className="input-dinein"
                                    id="no-pax"
                                    name="no-pax"
                                />
                            </div>
                            <button
                                type="button"
                                className="dinein-modal__btn-next btn-dinein"
                                onClick={() => toggleIsPax(false)}
                            >
                                Next
                                <FaAngleDoubleRight
                                    size={22}
                                    color="rgba(0, 0, 0, 0.7)"
                                />
                            </button>
                        </div>
                        <div
                            className={`dinein-modal__name-form ${
                                isPax || 'order-now-step'
                            }`}
                        >
                            <div className="dinein-modal__form-input">
                                <label
                                    className="label-dinein"
                                    htmlFor="ctm-name"
                                >
                                    Name
                                </label>
                                <input
                                    className="input-dinein"
                                    id="ctm-name"
                                    name="ctm-name"
                                />
                            </div>
                            <button
                                type="button"
                                className="dinein-modal__btn-order-now btn-dinein"
                                onClick={closeModal}
                            >
                                Order Now
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default DineInModal
