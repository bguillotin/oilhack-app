const setConditionnalClassName = (boolean, classIfTrue, classIfFalse) => {
    return boolean ? classIfTrue : classIfFalse;
}

export {
    setConditionnalClassName,
}