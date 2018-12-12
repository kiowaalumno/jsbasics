function icyHot(temp1, temp2) {
    if (temp1 < 0 || temp1 < 100 && temp2 < 0 || temp2 < 100) {
        return true;
    } else {
        return false;
    }
}

console.log(icyHot(2, 120));
console.log(icyHot(0, 0));