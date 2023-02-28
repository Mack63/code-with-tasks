function addition(a, b) {
    return BigInt(a) + BigInt(b);
}

function multiplication(a, b) {
    return BigInt(a) * BigInt(b);
}

function subtraction(a, b) {
    return BigInt(a) - BigInt(b);
}

function division(a, b) {
    return BigInt(a) / BigInt(b);
}

export {addition, division, multiplication, subtraction}