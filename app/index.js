import './index.scss';

document.addEventListener('DOMContentLoaded', () => {

const imagesContainer = document.querySelector('.slider__images-container')
const imgContainerFirst = document.querySelector('.slider__image-container--first img')
const imgContainerSecond = document.querySelector('.slider__image-container--second img')
const img1Container = document.querySelector('.slider__image-container--first')
const img2Container = document.querySelector('.slider__image-container--second')
let imgContainerLeftOffset;
let imagesContainerWidth = imagesContainer.offsetWidth;

const handle = document.querySelector('.slider__handle')
const divider = document.querySelector('.slider__divider')

let dragging = false;

    function getOffset(clientX) {

        const offset = clientX - imgContainerLeftOffset;

        if (offset < 0) {
            return 0;
        } else if (offset > imagesContainerWidth) {
            return imagesContainerWidth;
        } else {
            return offset;
        }
        
        
    }


    function mouseMove(clientX) {
        const offset = getOffset(clientX);
        const percentage = offset / imagesContainerWidth * 100;
        divider.style.left = `${percentage}%`;
        img2Container.style.width = `${percentage}%`;
    }


    function mouseEvents() {

        handle.addEventListener('mousedown', () => {
            dragging = true;
            console.log("Mouse click-in");
        })

        window.addEventListener('mouseup', () => {
            dragging = false;
            console.log("Mouse click-out");
        })

        window.addEventListener('mousemove', (event) => {

            if (dragging) {
                mouseMove(event.clientX);
            }
        })
    }


    const adjustContainerWidth = () => {

        imagesContainerWidth = imagesContainer.offsetWidth;
        imgContainerLeftOffset = imagesContainer.offsetLeft;
        imgContainerFirst.style.width = `${imagesContainerWidth}px`
        imgContainerSecond.style.width = `${imagesContainerWidth}px`
    }






window.addEventListener('resize', adjustContainerWidth);
adjustContainerWidth()
mouseEvents()
})