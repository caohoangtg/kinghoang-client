import React from 'react'
import Modal from 'react-modal'
import { FaArrowCircleLeft } from 'react-icons/fa'

interface Props {
    isOpen: boolean
    toggleModal: any
}

const ClearAllItemsModal = ({ isOpen, toggleModal }: Props) => {
    return (
        <>
            <Modal
                isOpen={isOpen}
                ariaHideApp={false}
                contentLabel="Dine-In Modal"
                portalClassName="dinein-modal"
                overlayClassName="dinein-modal-overlay"
                className="dinein-modal-content"
            >
                <div className="dinein-modal-body">
                    <FaArrowCircleLeft
                        onClick={() => toggleModal(false)}
                        size={28}
                        color="rgb(217 167 71 / 63%)"
                        className="dinein-modal__close"
                    />

                    <img
                        className="dinein-modal__logo"
                        src="./images/Logo.png"
                        alt="logo"
                    />

                    <form className="dinein-modal__form">
                        <div className="dinein-modal__pax-form">
                            <div className="dinein-modal__form-input">
                                <label
                                    className="label-dinein"
                                    htmlFor="no-pax"
                                >
                                    Clear All Items From Cart?
                                </label>
                            </div>
                            <button
                                type="button"
                                className="dinein-modal__btn-next btn-dinein"
                                onClick={() => toggleModal(false)}
                            >
                                Yes, clear all items
                            </button>
                            <button
                                type="button"
                                className="dinein-modal__btn-next btn-dinein"
                                onClick={() => toggleModal(false)}
                            >
                                No
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default ClearAllItemsModal
