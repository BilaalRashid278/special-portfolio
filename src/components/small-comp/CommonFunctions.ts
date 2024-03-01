'use client'
import smoothScroll from 'smoothscroll';

export const handleScroll = (id: string) => {
    let element = document.getElementById(`${id}`);
    console.log(element);
    smoothScroll(element);
}