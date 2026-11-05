function bandingkanArray(array1, array2) {

    if (array1.length !== array2.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {

        if (array1[i] !== array2[i]) {
            return false;
        }

    }

    return true;
}

console.log(bandingkanArray([1, 2, 3], [1, 2, 3]));
console.log(bandingkanArray([1, 2, 3], [1, 2, 4]));
