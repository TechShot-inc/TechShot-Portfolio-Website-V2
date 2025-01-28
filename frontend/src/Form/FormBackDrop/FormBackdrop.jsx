import BootstrapForm from '../BootstrapForm/BootstrapForm';
import Backdrop from '@mui/material/Backdrop';
import CloseButton from 'react-bootstrap/CloseButton';
import ContactInfo from '../ContactInfo/ContactInfo';
import "./FormBackDrop.css"
export default function FormBackdrop({ hide, open }) {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open} className='backdrop'
        >
            <CloseButton aria-label="Hide" onClick={hide} className='close-button' />
            <div className='form-container'>
                <ContactInfo />
                <BootstrapForm />
            </div>
        </Backdrop >
    )
}