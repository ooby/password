const generator = () => {
    let id = 'xxyxyxxxx';
    return id.replace(/[xy]/g, c => {
        let r = Math.random() * 36 | 0;
        let v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(36);
    });
};

export default generator;
