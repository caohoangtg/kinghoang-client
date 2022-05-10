import React from 'react'
import Modal from 'react-modal'
import { VscClose } from 'react-icons/vsc'

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
                onRequestClose={() => toggleModal(false)}
                contentLabel="Clear All Modal"
                portalClassName="clear-all-modal"
                overlayClassName="clear-all-modal-overlay"
                className="clear-all-modal-content"
            >
                <div className="clear-all-modal-body">
                    <VscClose
                        onClick={() => toggleModal(false)}
                        size={36}
                        color="#333333"
                        className="clear-all-modal__close"
                    />
                    <img
                        className="clear-all-modal__logo"
                        src="./images/CartX.png"
                        alt="logo"
                    />

                    <form className="clear-all-modal__form">
                        <label className="label-clear-all" htmlFor="no-pax">
                            Clear All Items From Cart?
                        </label>
                        <button
                            type="button"
                            className="btn-clear-all"
                            onClick={() => toggleModal(false)}
                        >
                            Yes, clear all items
                        </button>
                        <button
                            type="button"
                            className="btn-no"
                            onClick={() => toggleModal(false)}
                        >
                            No
                        </button>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default ClearAllItemsModal
