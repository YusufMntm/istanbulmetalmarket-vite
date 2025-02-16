import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Popup({ image, name }) {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='border px-3 py-8 shadow-lg h-full max-h-[700px]'>
      <button onClick={() => setOpenModal(true)} className='h-full w-full'>
        <div className='w-full h-full flex flex-col justify-between'>
          <div></div>
          <img className='w-full max-h-[550px]' src={image} alt={name} />
          <h3 className='text-center mt-5'>{t('product.no')}{name}</h3>
        </div>
      </button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div>
            <img className='w-full' src={image} alt={name} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='w-full flex justify-between items-center'>
            <div>
              <h3 className='font-medium text-2xl'>{name}</h3>
            </div>
            <div>
              <a href={image} download>
                <Button className='w-fit bg-orange-400 text-white' color='primary' size='lg'>
                  {t('popup.footer')}
                </Button>
              </a>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Popup;