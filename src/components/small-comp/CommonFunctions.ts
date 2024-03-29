'use client'
import smoothScroll from 'smoothscroll';

export const handleScroll = (id: string) => {
    let element = document.getElementById(`${id}`);
    if (element) {
        smoothScroll(element);
    }else{
        alert(`${id} not available`);
    }
}


export const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    maxWidth: '390px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
    padding: '15px'
};