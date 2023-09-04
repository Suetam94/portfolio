import Modal from 'react-modal';

interface IModal {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const EmailModal = ({ setIsOpen, isOpen }: IModal) => {
  Modal.setAppElement('#root');

  return (
    <Modal style={customStyles} isOpen={isOpen}>
      <div className="w-96 flex flex-col items-center justify-center">
        <span className="font-raleway font-bold text-2xl text-center text-[#9C9C9C] mb-5">
          Email successfully sent
        </span>
        <button
          onClick={() => setIsOpen(false)}
          className="w-48 h-10 rounded bg-[#000AFF] text-background-white font-bold font-ibmPlexMono hover:brightness-150"
          type="button">
          Close
        </button>
      </div>
    </Modal>
  );
};

export default EmailModal;
