import './style.scss'; 

export function startLoader(time, trigger, attachTo) {
    let contentCopy = attachTo.innerHTML;
    attachTo.innerHTML = '';
    const spinner = createSpinner(5, attachTo);
    
    setTimeout(() => {
        attachTo.innerHTML = contentCopy;
    }, time);
}

function createSpinner(borderWidth, attachTo) {
    let spinner = document.createElement('div');
    spinner.classList.add('spinner');
    const containerStyles = getComputedStyle(attachTo);
    const diameter = Math.min(
        parseInt(containerStyles.width),
        parseInt(containerStyles.height)
    );

    spinner.style.borderWidth = borderWidth + "px";
    spinner.style.width = `${diameter - borderWidth}px`;
    spinner.style.height = `${diameter - borderWidth}px`;

    attachTo.appendChild(spinner);

    return spinner;
}